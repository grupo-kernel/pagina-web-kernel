#!/usr/bin/env python3
"""Sincroniza artículos de El Kernel mediante ORCID y Crossref.

El proceso conserva los campos curados, deduplica por DOI y solo asigna un
cuartil cuando existe una coincidencia exacta revista-año en
``data/journal-quartiles.json``. Los artículos nuevos quedan vinculados
únicamente a los investigadores efectivamente consultados o identificados.
"""

from __future__ import annotations

import argparse
import copy
import datetime as dt
import html
import json
import os
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any, Iterable

CROSSREF = "https://api.crossref.org/v1"
ORCID_TOKEN = "https://orcid.org/oauth/token"
ORCID_API = "https://pub.orcid.org/v3.0"
REPOSITORY = "https://github.com/grupo-kernel/pagina-web-kernel"


def load(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def save(path: Path, payload: dict[str, Any]) -> None:
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def normalize_doi(value: Any) -> str:
    doi = str(value or "").strip().lower()
    doi = re.sub(r"^https?://(?:dx\.)?doi\.org/", "", doi)
    doi = re.sub(r"^doi:\s*", "", doi)
    return doi.rstrip(".,;")


def clean(value: Any) -> str:
    text = html.unescape(str(value or ""))
    text = re.sub(r"<[^>]+>", "", text)
    return re.sub(r"\s+", " ", text).strip()


def normalize_text(value: Any) -> str:
    text = unicodedata.normalize("NFKD", clean(value))
    text = "".join(char for char in text if not unicodedata.combining(char))
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


def first(value: Any) -> Any:
    if isinstance(value, list):
        return value[0] if value else None
    return value


def record_id(doi: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", doi).strip("-")


def date_from_parts(parts: Any) -> str | None:
    if not isinstance(parts, list) or not parts:
        return None
    try:
        year = int(parts[0])
        month = int(parts[1]) if len(parts) > 1 else 1
        day = int(parts[2]) if len(parts) > 2 else 1
        return dt.date(year, month, day).isoformat()
    except (TypeError, ValueError):
        return None


def crossref_date(item: dict[str, Any]) -> str | None:
    for key in ("published-online", "published-print", "published", "issued", "created"):
        values = (item.get(key) or {}).get("date-parts") or []
        if values:
            result = date_from_parts(values[0])
            if result:
                return result
    return None


def request_json(
    url: str,
    *,
    headers: dict[str, str],
    data: bytes | None = None,
    retries: int = 4,
) -> dict[str, Any]:
    last_error: Exception | None = None
    for attempt in range(retries):
        try:
            request = urllib.request.Request(url, headers=headers, data=data)
            with urllib.request.urlopen(request, timeout=45) as response:
                return json.loads(response.read().decode("utf-8"))
        except urllib.error.HTTPError as error:
            last_error = error
            if error.code not in {429, 500, 502, 503, 504} or attempt == retries - 1:
                body = error.read().decode("utf-8", errors="replace")[:400]
                raise RuntimeError(f"HTTP {error.code}: {body}") from error
            retry_after = error.headers.get("Retry-After", "")
            delay = int(retry_after) if retry_after.isdigit() else 2**attempt
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as error:
            last_error = error
            if attempt == retries - 1:
                raise RuntimeError(str(error)) from error
            delay = 2**attempt
        time.sleep(min(delay, 30))
    raise RuntimeError(str(last_error))


def crossref_headers(mailto: str) -> dict[str, str]:
    return {
        "Accept": "application/json",
        "User-Agent": f"ElKernelPublicationSync/1.0 ({REPOSITORY}; mailto:{mailto})",
    }


def crossref_by_orcid(orcid: str, mailto: str, rows: int) -> Iterable[dict[str, Any]]:
    cursor = "*"
    while True:
        query = urllib.parse.urlencode(
            {
                "filter": f"orcid:{orcid},type:journal-article",
                "rows": rows,
                "cursor": cursor,
                "mailto": mailto,
            }
        )
        message = request_json(f"{CROSSREF}/works?{query}", headers=crossref_headers(mailto)).get("message") or {}
        items = message.get("items") or []
        yield from (item for item in items if isinstance(item, dict))
        next_cursor = message.get("next-cursor")
        if len(items) < rows or not next_cursor or next_cursor == cursor:
            return
        cursor = str(next_cursor)


def crossref_by_doi(doi: str, mailto: str) -> dict[str, Any] | None:
    url = f"{CROSSREF}/works/{urllib.parse.quote(doi, safe='')}"
    try:
        return request_json(url, headers=crossref_headers(mailto)).get("message")
    except RuntimeError:
        return None


def orcid_access_token(client_id: str, client_secret: str) -> str:
    body = urllib.parse.urlencode(
        {
            "client_id": client_id,
            "client_secret": client_secret,
            "grant_type": "client_credentials",
            "scope": "/read-public",
        }
    ).encode()
    response = request_json(
        ORCID_TOKEN,
        data=body,
        headers={"Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded"},
    )
    token = response.get("access_token")
    if not token:
        raise RuntimeError("ORCID no devolvió un token /read-public.")
    return str(token)


def orcid_summaries(orcid: str, token: str) -> Iterable[dict[str, Any]]:
    payload = request_json(
        f"{ORCID_API}/{orcid}/works",
        headers={
            "Accept": "application/vnd.orcid+json",
            "Authorization": f"Bearer {token}",
            "User-Agent": "ElKernelPublicationSync/1.0",
        },
    )
    for group in payload.get("group") or []:
        for summary in group.get("work-summary") or []:
            if isinstance(summary, dict):
                yield summary


def orcid_doi(summary: dict[str, Any]) -> str:
    for external in ((summary.get("external-ids") or {}).get("external-id") or []):
        if str(external.get("external-id-type") or "").lower() == "doi":
            return normalize_doi(external.get("external-id-value"))
    return ""


def author_name(author: dict[str, Any]) -> str:
    if author.get("name"):
        return clean(author["name"])
    return " ".join(filter(None, (clean(author.get("given")), clean(author.get("family"))))).strip()


def author_orcid(author: dict[str, Any]) -> str:
    match = re.search(r"\d{4}-\d{4}-\d{4}-\d{3}[\dX]", str(author.get("ORCID") or ""), re.I)
    return match.group(0).upper() if match else ""


def compact_mapping(value: dict[str, Any] | None) -> dict[str, Any]:
    """Devuelve una copia sin campos nulos para evitar cambios cosméticos."""
    return {key: copy.deepcopy(item) for key, item in (value or {}).items() if item is not None}


def quartile_for(journal: str, year: int, entries: dict[str, Any]) -> dict[str, Any]:
    exact = entries.get(f"{normalize_text(journal)}|{year}")
    if exact:
        return compact_mapping(exact)
    return {"year": year, "status": "pending"}


def record_from_crossref(
    item: dict[str, Any],
    *,
    matched_researcher: str,
    orcid_map: dict[str, str],
    quartiles: dict[str, Any],
) -> dict[str, Any] | None:
    doi = normalize_doi(item.get("DOI"))
    title = clean(first(item.get("title")))
    journal = clean(first(item.get("container-title")))
    published = crossref_date(item)
    if not doi or not title or not journal or not published:
        return None
    year = int(published[:4])
    authors = [author_name(author) for author in item.get("author") or []]
    authors = [name for name in authors if name]
    if not authors:
        return None
    linked = {matched_researcher}
    for author in item.get("author") or []:
        researcher_id = orcid_map.get(author_orcid(author))
        if researcher_id:
            linked.add(researcher_id)
    return {
        "id": record_id(doi),
        "title": title,
        "year": year,
        "date": published,
        "type": "journal-article",
        "journal": journal,
        "volume": clean(item.get("volume")) or None,
        "issue": clean(item.get("issue")) or None,
        "pages": clean(item.get("page")) or None,
        "articleNumber": clean(item.get("article-number")) or None,
        "doi": doi,
        "url": f"https://doi.org/{doi}",
        "authors": authors,
        "useDefaultResearcherIds": False,
        "researcherIds": sorted(linked),
        "quartile": quartile_for(journal, year, quartiles),
        "metadataSources": ["Crossref"],
        "verifiedAt": dt.date.today().isoformat(),
    }


def record_from_orcid(summary: dict[str, Any], researcher: dict[str, Any], quartiles: dict[str, Any]) -> dict[str, Any] | None:
    if str(summary.get("type") or "").lower() != "journal-article":
        return None
    doi = orcid_doi(summary)
    title = clean((((summary.get("title") or {}).get("title") or {}).get("value")))
    journal_raw = summary.get("journal-title") or {}
    journal = clean(journal_raw.get("value") if isinstance(journal_raw, dict) else journal_raw)
    date_info = summary.get("publication-date") or {}
    try:
        year = int((date_info.get("year") or {}).get("value"))
    except (TypeError, ValueError):
        year = 0
    if not doi or not title or not journal or not year:
        return None
    return {
        "id": record_id(doi),
        "title": title,
        "year": year,
        "type": "journal-article",
        "journal": journal,
        "doi": doi,
        "url": f"https://doi.org/{doi}",
        "authors": [researcher["name"]],
        "useDefaultResearcherIds": False,
        "researcherIds": [researcher["id"]],
        "quartile": quartile_for(journal, year, quartiles),
        "metadataSources": ["ORCID"],
        "verifiedAt": dt.date.today().isoformat(),
    }


def merge_strings(current: Any, incoming: Any) -> list[str]:
    result: list[str] = []
    seen: set[str] = set()
    for value in list(current or []) + list(incoming or []):
        text = str(value).strip()
        key = normalize_text(text)
        if text and key not in seen:
            seen.add(key)
            result.append(text)
    return result


def merge(existing: dict[str, Any], incoming: dict[str, Any]) -> bool:
    changed = False
    for field in ("researcherIds", "metadataSources"):
        combined = merge_strings(existing.get(field), incoming.get(field))
        if combined != (existing.get(field) or []):
            existing[field] = combined
            changed = True
    for field in (
        "title", "year", "date", "type", "journal", "volume", "issue", "pages",
        "articleNumber", "url", "authors",
    ):
        if existing.get(field) in (None, "", []) and incoming.get(field) not in (None, "", []):
            existing[field] = incoming[field]
            changed = True
    if changed:
        existing["verifiedAt"] = dt.date.today().isoformat()
    return changed


def remember(discovered: dict[str, dict[str, Any]], record: dict[str, Any]) -> None:
    current = discovered.get(record["doi"])
    if current is None:
        discovered[record["doi"]] = record
    else:
        merge(current, record)


def apply_quartile_map(publications: list[dict[str, Any]], entries: dict[str, Any]) -> int:
    updated = 0
    for publication in publications:
        journal = str(publication.get("journal") or "")
        year = int(publication.get("year") or 0)
        exact = entries.get(f"{normalize_text(journal)}|{year}")
        if not exact:
            continue
        candidate = compact_mapping(exact)
        current = compact_mapping(publication.get("quartile"))
        if current != candidate:
            publication["quartile"] = candidate
            updated += 1
    return updated


def synchronize(args: argparse.Namespace) -> int:
    root = Path(args.root).resolve()
    researchers_data = load(root / "data/researchers.json")
    publications_data = load(root / "data/publications.json")
    quartile_data = load(root / "data/journal-quartiles.json")
    exclusions = load(root / "data/excluded-publications.json")

    all_researchers = researchers_data.get("researchers", [])
    researchers = [r for r in all_researchers if r.get("syncPublications")]
    publications = publications_data.get("publications", [])
    quartiles = quartile_data.get("entries", {})
    excluded_dois = {normalize_doi(value) for value in exclusions.get("dois", [])}
    excluded_titles = {normalize_text(value) for value in exclusions.get("titles", [])}
    orcid_map = {
        str(r.get("orcid") or "").upper(): r["id"]
        for r in all_researchers
        if r.get("orcid")
    }
    by_doi = {normalize_doi(p.get("doi")): p for p in publications if normalize_doi(p.get("doi"))}
    discovered: dict[str, dict[str, Any]] = {}

    for researcher in researchers:
        orcid = str(researcher.get("orcid") or "").upper()
        print(f"Crossref: {researcher['name']} ({orcid})")
        try:
            for item in crossref_by_orcid(orcid, args.mailto, args.rows):
                record = record_from_crossref(
                    item,
                    matched_researcher=researcher["id"],
                    orcid_map=orcid_map,
                    quartiles=quartiles,
                )
                if record:
                    remember(discovered, record)
        except RuntimeError as error:
            print(f"AVISO: consulta Crossref incompleta: {error}", file=sys.stderr)

    client_id = os.getenv("ORCID_CLIENT_ID", "").strip()
    client_secret = os.getenv("ORCID_CLIENT_SECRET", "").strip()
    if not args.crossref_only and client_id and client_secret:
        try:
            token = orcid_access_token(client_id, client_secret)
            for researcher in researchers:
                for summary in orcid_summaries(str(researcher["orcid"]), token):
                    doi = orcid_doi(summary)
                    if not doi:
                        continue
                    if doi in discovered:
                        discovered[doi]["researcherIds"] = merge_strings(
                            discovered[doi].get("researcherIds"), [researcher["id"]]
                        )
                        continue
                    crossref_item = crossref_by_doi(doi, args.mailto)
                    record = (
                        record_from_crossref(
                            crossref_item,
                            matched_researcher=researcher["id"],
                            orcid_map=orcid_map,
                            quartiles=quartiles,
                        )
                        if crossref_item
                        else record_from_orcid(summary, researcher, quartiles)
                    )
                    if record:
                        remember(discovered, record)
        except RuntimeError as error:
            print(f"AVISO: ORCID no disponible: {error}", file=sys.stderr)
    elif not args.crossref_only:
        print("ORCID: sin credenciales; se mantiene la consulta Crossref por ORCID.", file=sys.stderr)

    added = enriched = 0
    quartiles_updated = apply_quartile_map(publications, quartiles)
    for doi, incoming in discovered.items():
        if doi in excluded_dois or normalize_text(incoming.get("title")) in excluded_titles:
            continue
        if doi in by_doi:
            if merge(by_doi[doi], incoming):
                enriched += 1
        else:
            publications.append(incoming)
            by_doi[doi] = incoming
            added += 1

    changed = bool(added or enriched or quartiles_updated)
    if changed:
        publications.sort(key=lambda p: (int(p.get("year") or 0), str(p.get("date") or "")), reverse=True)
        publications_data["updatedAt"] = dt.date.today().isoformat()
        publications_data["publications"] = publications
        if not args.dry_run:
            save(root / "data/publications.json", publications_data)
    print(
        f"Nuevos: {added}; enriquecidos: {enriched}; "
        f"cuartiles actualizados: {quartiles_updated}; total local: {len(publications)}."
    )
    if args.dry_run:
        print("Simulación: no se escribieron cambios.")
    return 0


def parse_args() -> argparse.Namespace:
    root = Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser(description="Sincroniza publicaciones por ORCID y DOI.")
    parser.add_argument("--root", default=str(root))
    parser.add_argument("--mailto", default=os.getenv("CROSSREF_MAILTO", "mleonardo@itla.edu.do"))
    parser.add_argument("--rows", type=int, default=250, choices=range(20, 1001), metavar="20-1000")
    parser.add_argument("--crossref-only", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    return parser.parse_args()


if __name__ == "__main__":
    raise SystemExit(synchronize(parse_args()))
