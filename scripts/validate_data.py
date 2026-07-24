#!/usr/bin/env python3
"""Validate El Kernel structured researcher and publication data."""

from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import sys
import unicodedata
from pathlib import Path
from typing import Any

ORCID_RE = re.compile(r"^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$", re.I)
DOI_RE = re.compile(r"^10\.\d{4,9}/\S+$", re.I)
VALID_QUARTILES = {"Q1", "Q2", "Q3", "Q4"}
VALID_STATUSES = {"verified", "provisional", "legacy", "pending"}


def load(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def normalize_doi(value: str | None) -> str:
    if not value:
        return ""
    doi = value.strip().lower()
    doi = re.sub(r"^https?://(?:dx\.)?doi\.org/", "", doi)
    doi = re.sub(r"^doi:\s*", "", doi)
    return doi.rstrip(".,;")


def normalize_text(value: str | None) -> str:
    text = unicodedata.normalize("NFKD", str(value or ""))
    text = "".join(char for char in text if not unicodedata.combining(char))
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


def fail(errors: list[str], message: str) -> None:
    errors.append(message)


def validate(root: Path) -> int:
    errors: list[str] = []
    warnings: list[str] = []

    researcher_data = load(root / "data" / "researchers.json")
    publication_data = load(root / "data" / "publications.json")
    quartile_data = load(root / "data" / "journal-quartiles.json")
    exclusions = load(root / "data" / "excluded-publications.json")

    researchers = researcher_data.get("researchers")
    publications = publication_data.get("publications")
    entries = quartile_data.get("entries")
    if not isinstance(researchers, list):
        fail(errors, "researchers.json: 'researchers' debe ser una lista.")
        researchers = []
    if not isinstance(publications, list):
        fail(errors, "publications.json: 'publications' debe ser una lista.")
        publications = []
    if not isinstance(entries, dict):
        fail(errors, "journal-quartiles.json: 'entries' debe ser un objeto.")
        entries = {}

    researcher_ids: set[str] = set()
    orcids: set[str] = set()
    for index, researcher in enumerate(researchers, start=1):
        prefix = f"researchers[{index}]"
        researcher_id = str(researcher.get("id") or "")
        if not researcher_id:
            fail(errors, f"{prefix}: falta id.")
        elif researcher_id in researcher_ids:
            fail(errors, f"{prefix}: id duplicado '{researcher_id}'.")
        researcher_ids.add(researcher_id)

        for field in ("name", "displayName", "title", "role", "summary", "memberType"):
            if not str(researcher.get(field) or "").strip():
                fail(errors, f"{prefix}: falta '{field}'.")

        orcid = str(researcher.get("orcid") or "").upper()
        if orcid:
            if not ORCID_RE.match(orcid):
                fail(errors, f"{prefix}: ORCID inválido '{orcid}'.")
            elif orcid in orcids:
                fail(errors, f"{prefix}: ORCID duplicado '{orcid}'.")
            orcids.add(orcid)
        elif researcher.get("syncPublications"):
            fail(errors, f"{prefix}: syncPublications requiere ORCID.")

    default_researcher_ids = publication_data.get("defaultResearcherIds") or []
    if not isinstance(default_researcher_ids, list):
        fail(errors, "publications.json: 'defaultResearcherIds' debe ser una lista.")
        default_researcher_ids = []
    for researcher_id in default_researcher_ids:
        if researcher_id not in researcher_ids:
            fail(errors, f"publications.json: investigador predeterminado desconocido '{researcher_id}'.")

    dois: set[str] = set()
    pub_ids: set[str] = set()
    last_year: int | None = None
    with_quartile = 0
    verified = 0

    for index, publication in enumerate(publications, start=1):
        prefix = f"publications[{index}]"
        pub_id = str(publication.get("id") or "")
        if not pub_id:
            fail(errors, f"{prefix}: falta id.")
        elif pub_id in pub_ids:
            fail(errors, f"{prefix}: id duplicado '{pub_id}'.")
        pub_ids.add(pub_id)

        doi = normalize_doi(publication.get("doi"))
        if not DOI_RE.match(doi):
            fail(errors, f"{prefix}: DOI inválido '{publication.get('doi')}'.")
        elif doi in dois:
            fail(errors, f"{prefix}: DOI duplicado '{doi}'.")
        dois.add(doi)

        title = str(publication.get("title") or "").strip()
        journal = str(publication.get("journal") or "").strip()
        if not title:
            fail(errors, f"{prefix}: falta título.")
        if not journal:
            fail(errors, f"{prefix}: falta revista.")

        try:
            year = int(publication.get("year"))
            if year < 1900 or year > dt.date.today().year + 1:
                fail(errors, f"{prefix}: año fuera de rango '{year}'.")
        except (TypeError, ValueError):
            fail(errors, f"{prefix}: año inválido '{publication.get('year')}'.")
            year = 0

        date = str(publication.get("date") or "")
        if date:
            try:
                dt.date.fromisoformat(date)
            except ValueError:
                fail(errors, f"{prefix}: fecha inválida '{date}'.")

        inherited_ids = [] if publication.get("useDefaultResearcherIds") is False else default_researcher_ids
        linked = list(dict.fromkeys([
            *inherited_ids,
            *(publication.get("researcherIds") or []),
        ]))
        if not linked:
            fail(errors, f"{prefix}: no está vinculado a ningún investigador.")
        for researcher_id in linked:
            if researcher_id not in researcher_ids:
                fail(errors, f"{prefix}: investigador desconocido '{researcher_id}'.")

        authors = publication.get("authors") or []
        if not authors:
            fail(errors, f"{prefix}: falta la lista de autores.")

        quartile = publication.get("quartile") or {}
        status = quartile.get("status")
        value = quartile.get("value")
        if status not in VALID_STATUSES:
            fail(errors, f"{prefix}: estado de cuartil inválido '{status}'.")
        if value is not None:
            with_quartile += 1
            if value not in VALID_QUARTILES:
                fail(errors, f"{prefix}: cuartil inválido '{value}'.")
        if status == "verified":
            verified += 1
            for field in ("value", "source", "year", "category", "evidence"):
                if not quartile.get(field):
                    fail(errors, f"{prefix}: cuartil verificado sin '{field}'.")
        if status == "pending" and value is not None:
            warnings.append(f"{prefix}: estado pending con valor {value}; revisar coherencia.")

        if last_year is not None and year > last_year:
            fail(errors, f"{prefix}: el catálogo no está ordenado de año más reciente a más antiguo.")
        last_year = year

        url = str(publication.get("url") or "")
        if url and normalize_doi(url) != doi:
            warnings.append(f"{prefix}: URL '{url}' no coincide con DOI '{doi}'.")

    for key, entry in entries.items():
        if "|" not in key:
            fail(errors, f"journal-quartiles: clave inválida '{key}'.")
            continue
        journal_key, year_key = key.rsplit("|", 1)
        if journal_key != normalize_text(journal_key):
            fail(errors, f"journal-quartiles: revista no normalizada en '{key}'.")
        try:
            int(year_key)
        except ValueError:
            fail(errors, f"journal-quartiles: año inválido en '{key}'.")
        if entry.get("status") != "verified":
            warnings.append(f"journal-quartiles: '{key}' no está marcado verified.")
        for field in ("value", "source", "year", "category", "evidence"):
            if not entry.get(field):
                fail(errors, f"journal-quartiles: '{key}' carece de '{field}'.")

    if not isinstance(exclusions.get("dois", []), list) or not isinstance(exclusions.get("titles", []), list):
        fail(errors, "excluded-publications.json: 'dois' y 'titles' deben ser listas.")

    print(f"Investigadores: {len(researchers)}")
    print(f"Publicaciones únicas: {len(publications)}")
    print(f"Registros con cuartil visible: {with_quartile}")
    print(f"Cuartiles con evidencia directa: {verified}")

    for warning in warnings:
        print(f"ADVERTENCIA: {warning}", file=sys.stderr)
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        print(f"Validación fallida: {len(errors)} error(es).", file=sys.stderr)
        return 1
    print(f"Validación correcta ({len(warnings)} advertencia(s)).")
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Valida los datos estructurados de El Kernel.")
    parser.add_argument("--root", default=str(Path(__file__).resolve().parents[1]))
    return parser.parse_args()


if __name__ == "__main__":
    raise SystemExit(validate(Path(parse_args().root).resolve()))
