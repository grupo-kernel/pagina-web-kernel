#!/usr/bin/env python3
"""Sincroniza publicaciones del Grupo El Kernel.

Fuentes:
- Crossref (sin credenciales): metadatos bibliográficos por ORCID.
- ORCID Public API (opcional): requiere ORCID_ACCESS_TOKEN.
- OpenAlex (opcional): requiere OPENALEX_API_KEY.

No realiza scraping de Google Scholar.
"""

from __future__ import annotations

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

ROOT = Path(__file__).resolve().parents[1]
RESEARCHERS_PATH = ROOT / "data" / "researchers.json"
PUBLICATIONS_PATH = ROOT / "data" / "publications.json"
QUARTILES_PATH = ROOT / "data" / "journal_quartiles.json"

USER_AGENT = (
    "GrupoKernelPublicationSync/1.0 "
    f"(mailto:{os.getenv('CROSSREF_MAILTO', 'mleonardo@itla.edu.do')})"
)
TIMEOUT = int(os.getenv("HTTP_TIMEOUT", "30"))
STRICT = os.getenv("SYNC_STRICT", "0") == "1"


def load_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def write_json(path: Path, payload: dict[str, Any]) -> None:
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temporary.replace(path)


def normalize_text(value: Any) -> str:
    text = unicodedata.normalize("NFKD", str(value or ""))
    text = text.encode("ascii", "ignore").decode("ascii").lower()
    return re.sub(r"[^a-z0-9]+", " ", text).strip()


def clean_text(value: Any) -> str:
    text = html.unescape(str(value or ""))
    text = re.sub(r"<[^>]+>", "", text)
    return re.sub(r"\s+", " ", text).strip()


def normalize_doi(value: Any) -> str:
    doi = str(value or "").strip().lower()
    doi = re.sub(r"^https?://(?:dx\.)?doi\.org/", "", doi)
    doi = re.sub(r"^doi:\s*", "", doi)
    return doi.rstrip(" .;,)" )


def api_get_json(
    url: str,
    *,
    headers: dict[str, str] | None = None,
    retries: int = 3,
) -> dict[str, Any]:
    request_headers = {
        "Accept": "application/json",
        "User-Agent": USER_AGENT,
    }
    if headers:
        request_headers.update(headers)

    last_error: Exception | None = None
    for attempt in range(retries):
        try:
            request = urllib.request.Request(url, headers=request_headers)
            with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
                return json.loads(response.read().decode("utf-8"))
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, json.JSONDecodeError) as error:
            last_error = error
            if attempt + 1 < retries:
                time.sleep(2 ** attempt)
    raise RuntimeError(f"No se pudo consultar {url}: {last_error}")


def first_value(value: Any) -> str:
    if isinstance(value, list) and value:
        return clean_text(value[0])
    return clean_text(value)


def date_from_parts(payload: dict[str, Any]) -> str:
    candidates = (
        payload.get("published-online"),
        payload.get("published-print"),
        payload.get("published"),
        payload.get("issued"),
        payload.get("created"),
    )
    for candidate in candidates:
        if not isinstance(candidate, dict):
            continue
        parts = candidate.get("date-parts")
        if isinstance(parts, list) and parts and isinstance(parts[0], list) and parts[0]:
            values = [int(value) for value in parts[0][:3]]
            year = values[0]
            month = values[1] if len(values) > 1 else 1
            day = values[2] if len(values) > 2 else 1
            try:
                return dt.date(year, month, day).isoformat()
            except ValueError:
                return f"{year:04d}-01-01"

        timestamp = candidate.get("date-time")
        if timestamp:
            return str(timestamp)[:10]
    return ""


def crossref_authors(item: dict[str, Any]) -> list[str]:
    names: list[str] = []
    for author in item.get("author") or []:
        if not isinstance(author, dict):
            continue
        given = clean_text(author.get("given"))
        family = clean_text(author.get("family"))
        literal = clean_text(author.get("name"))
        name = " ".join(part for part in (given, family) if part).strip() or literal
        if name and name not in names:
            names.append(name)
    return names


def record_from_crossref(item: dict[str, Any], researcher_id: str) -> dict[str, Any] | None:
    doi = normalize_doi(item.get("DOI"))
    title = first_value(item.get("title"))
    journal = first_value(item.get("container-title"))
    publication_date = date_from_parts(item)
    if not title or not publication_date:
        return None

    return {
        "doi": doi,
        "title": title,
        "journal": journal or "Revista no especificada",
        "publication_date": publication_date,
        "year": int(publication_date[:4]),
        "type": "journal-article",
        "authors": crossref_authors(item),
        "researcher_ids": [researcher_id],
        "source": "Crossref",
        "url": clean_text(item.get("URL")) or (f"https://doi.org/{doi}" if doi else ""),
        "import_source": "crossref",
        "issn": [clean_text(value) for value in item.get("ISSN") or [] if clean_text(value)],
    }


def fetch_crossref(orcid: str, researcher_id: str) -> list[dict[str, Any]]:
    query = urllib.parse.urlencode(
        {
            "filter": f"orcid:{orcid},type:journal-article",
            "rows": "1000",
            "sort": "published",
            "order": "desc",
            "mailto": os.getenv("CROSSREF_MAILTO", "mleonardo@itla.edu.do"),
        }
    )
    payload = api_get_json(f"https://api.crossref.org/works?{query}")
    items = payload.get("message", {}).get("items", [])
    records: list[dict[str, Any]] = []
    for item in items:
        if isinstance(item, dict):
            record = record_from_crossref(item, researcher_id)
            if record:
                records.append(record)
    return records


def orcid_dois(orcid: str, access_token: str) -> set[str]:
    payload = api_get_json(
        f"https://pub.orcid.org/v3.0/{urllib.parse.quote(orcid)}/works",
        headers={
            "Accept": "application/vnd.orcid+json",
            "Authorization": f"Bearer {access_token}",
        },
    )
    dois: set[str] = set()
    for group in payload.get("group") or []:
        summaries = group.get("work-summary") or []
        for summary in summaries:
            if not isinstance(summary, dict) or summary.get("type") != "journal-article":
                continue
            external_ids = (summary.get("external-ids") or {}).get("external-id") or []
            for external_id in external_ids:
                if normalize_text(external_id.get("external-id-type")) == "doi":
                    doi = normalize_doi(external_id.get("external-id-value"))
                    if doi:
                        dois.add(doi)
    return dois


def fetch_crossref_doi(doi: str, researcher_id: str) -> dict[str, Any] | None:
    payload = api_get_json(f"https://api.crossref.org/works/{urllib.parse.quote(doi, safe='')}")
    item = payload.get("message")
    if not isinstance(item, dict):
        return None
    return record_from_crossref(item, researcher_id)


def fetch_openalex(
    orcid: str,
    researcher_id: str,
    api_key: str,
) -> list[dict[str, Any]]:
    records: list[dict[str, Any]] = []
    cursor = "*"
    for _page in range(20):
        query = urllib.parse.urlencode(
            {
                "filter": f"authorships.author.orcid:https://orcid.org/{orcid},type:article",
                "per-page": "200",
                "cursor": cursor,
                "api_key": api_key,
                "select": (
                    "id,doi,title,publication_date,publication_year,"
                    "primary_location,authorships,type"
                ),
            }
        )
        payload = api_get_json(f"https://api.openalex.org/works?{query}")
        results = payload.get("results") or []
        for item in results:
            if not isinstance(item, dict):
                continue
            location = item.get("primary_location") or {}
            source = location.get("source") or {}
            doi = normalize_doi(item.get("doi"))
            title = clean_text(item.get("title"))
            publication_date = clean_text(item.get("publication_date"))
            if not title or not publication_date:
                continue
            authors = []
            for authorship in item.get("authorships") or []:
                name = clean_text((authorship.get("author") or {}).get("display_name"))
                if name and name not in authors:
                    authors.append(name)
            records.append(
                {
                    "doi": doi,
                    "openalex_id": clean_text(item.get("id")),
                    "title": title,
                    "journal": clean_text(source.get("display_name")) or "Revista no especificada",
                    "publication_date": publication_date,
                    "year": int(item.get("publication_year") or publication_date[:4]),
                    "type": "journal-article",
                    "authors": authors,
                    "researcher_ids": [researcher_id],
                    "source": "OpenAlex",
                    "url": f"https://doi.org/{doi}" if doi else clean_text(item.get("id")),
                    "import_source": "openalex",
                    "issn": [
                        clean_text(value)
                        for value in source.get("issn") or []
                        if clean_text(value)
                    ],
                }
            )
        next_cursor = (payload.get("meta") or {}).get("next_cursor")
        if not next_cursor or not results:
            break
        cursor = next_cursor
    return records


def publication_key(record: dict[str, Any]) -> str:
    doi = normalize_doi(record.get("doi"))
    if doi:
        return f"doi:{doi}"
    openalex_id = clean_text(record.get("openalex_id"))
    if openalex_id:
        return f"openalex:{openalex_id}"
    return f"title:{normalize_text(record.get('title'))}:{record.get('year', '')}"


def merge_list(left: Iterable[Any], right: Iterable[Any]) -> list[Any]:
    merged: list[Any] = []
    seen: set[str] = set()
    for value in [*left, *right]:
        marker = normalize_text(value)
        if value and marker not in seen:
            merged.append(value)
            seen.add(marker)
    return merged


def merge_record(existing: dict[str, Any], incoming: dict[str, Any]) -> dict[str, Any]:
    result = dict(existing)
    for field in ("doi", "openalex_id", "title", "journal", "publication_date", "year", "type", "url"):
        if not result.get(field) and incoming.get(field):
            result[field] = incoming[field]
    result["authors"] = merge_list(result.get("authors") or [], incoming.get("authors") or [])
    result["researcher_ids"] = merge_list(
        result.get("researcher_ids") or [],
        incoming.get("researcher_ids") or [],
    )
    result["issn"] = merge_list(result.get("issn") or [], incoming.get("issn") or [])
    result["source"] = " / ".join(
        merge_list(
            str(result.get("source") or "").split(" / "),
            str(incoming.get("source") or "").split(" / "),
        )
    )
    if result.get("import_source") != "curated":
        result["import_source"] = incoming.get("import_source") or result.get("import_source")
    return result


def name_tokens(name: str) -> tuple[str, str]:
    tokens = normalize_text(name).split()
    if not tokens:
        return "", ""
    return tokens[0], tokens[-1]


def attach_group_authors(
    record: dict[str, Any],
    researchers: list[dict[str, Any]],
) -> dict[str, Any]:
    ids = set(record.get("researcher_ids") or [])
    normalized_authors = [normalize_text(author) for author in record.get("authors") or []]
    for researcher in researchers:
        first, last = name_tokens(researcher.get("name", ""))
        if not first or not last:
            continue
        if any(first in author.split() and last in author.split() for author in normalized_authors):
            ids.add(researcher["id"])
    record["researcher_ids"] = sorted(ids)
    return record


def build_quartile_index(payload: dict[str, Any]) -> tuple[dict[str, dict[str, Any]], dict[str, dict[str, Any]]]:
    by_name: dict[str, dict[str, Any]] = {}
    by_issn: dict[str, dict[str, Any]] = {}
    for journal in (payload.get("journals") or {}).values():
        compact = {
            key: value
            for key, value in journal.items()
            if key not in {"name", "aliases", "issn"}
        }
        compact["journal_name"] = journal.get("name")
        for name in [journal.get("name"), *(journal.get("aliases") or [])]:
            if name:
                by_name[normalize_text(name)] = compact
        for issn in journal.get("issn") or []:
            by_issn[re.sub(r"[^0-9xX]", "", str(issn)).lower()] = compact
    return by_name, by_issn


def attach_quartile(
    record: dict[str, Any],
    by_name: dict[str, dict[str, Any]],
    by_issn: dict[str, dict[str, Any]],
) -> dict[str, Any]:
    matched = by_name.get(normalize_text(record.get("journal")))
    if not matched:
        for issn in record.get("issn") or []:
            key = re.sub(r"[^0-9xX]", "", str(issn)).lower()
            if key in by_issn:
                matched = by_issn[key]
                break
    record["quartile"] = dict(matched) if matched else None
    return record


def main() -> int:
    researchers_payload = load_json(RESEARCHERS_PATH)
    existing_payload = load_json(PUBLICATIONS_PATH)
    quartiles_payload = load_json(QUARTILES_PATH)

    researchers = researchers_payload.get("researchers") or []
    synced_researchers = [
        researcher
        for researcher in researchers
        if researcher.get("sync_publications") and researcher.get("orcid")
    ]

    merged: dict[str, dict[str, Any]] = {}
    for record in existing_payload.get("records") or []:
        record["doi"] = normalize_doi(record.get("doi"))
        merged[publication_key(record)] = record

    successes = 0
    failures: list[str] = []
    access_token = os.getenv("ORCID_ACCESS_TOKEN", "").strip()
    openalex_key = os.getenv("OPENALEX_API_KEY", "").strip()

    for researcher in synced_researchers:
        researcher_id = researcher["id"]
        orcid = researcher["orcid"]

        try:
            crossref_records = fetch_crossref(orcid, researcher_id)
            successes += 1
            print(f"Crossref: {researcher['name']}: {len(crossref_records)} registros")
            for record in crossref_records:
                key = publication_key(record)
                merged[key] = merge_record(merged[key], record) if key in merged else record
        except Exception as error:
            message = f"Crossref {researcher['name']}: {error}"
            failures.append(message)
            print(f"ADVERTENCIA: {message}", file=sys.stderr)

        if access_token:
            try:
                missing_dois = orcid_dois(orcid, access_token) - {
                    normalize_doi(record.get("doi"))
                    for record in merged.values()
                    if researcher_id in (record.get("researcher_ids") or [])
                }
                print(f"ORCID: {researcher['name']}: {len(missing_dois)} DOI adicionales")
                for doi in sorted(missing_dois):
                    try:
                        record = fetch_crossref_doi(doi, researcher_id)
                    except Exception as error:
                        print(f"ADVERTENCIA: DOI {doi}: {error}", file=sys.stderr)
                        continue
                    if record:
                        key = publication_key(record)
                        merged[key] = merge_record(merged[key], record) if key in merged else record
                successes += 1
            except Exception as error:
                message = f"ORCID {researcher['name']}: {error}"
                failures.append(message)
                print(f"ADVERTENCIA: {message}", file=sys.stderr)

        if openalex_key:
            try:
                openalex_records = fetch_openalex(orcid, researcher_id, openalex_key)
                successes += 1
                print(f"OpenAlex: {researcher['name']}: {len(openalex_records)} registros")
                for record in openalex_records:
                    key = publication_key(record)
                    merged[key] = merge_record(merged[key], record) if key in merged else record
            except Exception as error:
                message = f"OpenAlex {researcher['name']}: {error}"
                failures.append(message)
                print(f"ADVERTENCIA: {message}", file=sys.stderr)

    if successes == 0:
        print(
            "No hubo consultas exitosas. Se conserva data/publications.json sin cambios.",
            file=sys.stderr,
        )
        if STRICT:
            return 1
        return 0

    by_name, by_issn = build_quartile_index(quartiles_payload)
    output_records: list[dict[str, Any]] = []
    for record in merged.values():
        record["doi"] = normalize_doi(record.get("doi"))
        record = attach_group_authors(record, researchers)
        record = attach_quartile(record, by_name, by_issn)
        output_records.append(record)

    output_records.sort(
        key=lambda item: (
            str(item.get("publication_date") or item.get("year") or ""),
            normalize_text(item.get("title")),
        ),
        reverse=True,
    )

    now = dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    researcher_ids = {
        researcher_id
        for record in output_records
        for researcher_id in record.get("researcher_ids") or []
    }
    latest_year = max((int(record.get("year") or 0) for record in output_records), default=0)

    existing_payload.update(
        {
            "schema_version": 1,
            "generated_at": now,
            "catalog_status": "automated",
            "counting_method": "DOI normalizado; si no existe DOI, identificador OpenAlex o título normalizado + año",
            "coverage_note": (
                "Registros públicos recuperados por ORCID desde Crossref y, cuando existen "
                "credenciales configuradas, ORCID Public API y OpenAlex."
            ),
            "summary": {
                "unique_catalog_records": len(output_records),
                "researchers_with_records": len(researcher_ids),
                "latest_year": latest_year,
                "sync_successes": successes,
                "sync_warnings": len(failures),
            },
            "sync_warnings": failures,
            "records": output_records,
        }
    )
    write_json(PUBLICATIONS_PATH, existing_payload)
    print(f"Catálogo actualizado: {len(output_records)} registros únicos")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
