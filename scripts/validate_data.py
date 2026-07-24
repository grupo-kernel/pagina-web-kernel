#!/usr/bin/env python3
"""Validaciones estructurales para los datos públicos del Grupo El Kernel."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
RESEARCHERS_PATH = ROOT / "data" / "researchers.json"
PUBLICATIONS_PATH = ROOT / "data" / "publications.json"
QUARTILES_PATH = ROOT / "data" / "journal_quartiles.json"


def load(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def normalize_doi(value: Any) -> str:
    doi = str(value or "").strip().lower()
    doi = re.sub(r"^https?://(?:dx\.)?doi\.org/", "", doi)
    doi = re.sub(r"^doi:\s*", "", doi)
    return doi.rstrip(" .;,)" )


def require(condition: bool, message: str, errors: list[str]) -> None:
    if not condition:
        errors.append(message)


def main() -> int:
    errors: list[str] = []
    researchers_payload = load(RESEARCHERS_PATH)
    publications_payload = load(PUBLICATIONS_PATH)
    quartiles_payload = load(QUARTILES_PATH)

    researchers = researchers_payload.get("researchers") or []
    researcher_ids = [item.get("id") for item in researchers]
    require(
        researchers_payload.get("group", {}).get("member_count") == len(researchers),
        "group.member_count no coincide con la cantidad de investigadores.",
        errors,
    )
    require(len(researcher_ids) == len(set(researcher_ids)), "Hay identificadores de investigador duplicados.", errors)
    require(
        {"alicia-cordero", "juan-torregrosa"}.issubset(set(researcher_ids)),
        "Faltan Alicia Cordero o Juan Ramón Torregrosa en researchers.json.",
        errors,
    )

    expected_orcids = {
        "alicia-cordero": "0000-0002-7462-9173",
        "juan-torregrosa": "0000-0002-9893-0761",
    }
    for researcher in researchers:
        identifier = researcher.get("id")
        require(bool(researcher.get("name")), f"Investigador sin nombre: {identifier}", errors)
        require(bool(researcher.get("role")), f"Investigador sin rol: {identifier}", errors)
        if identifier in expected_orcids:
            require(
                researcher.get("orcid") == expected_orcids[identifier],
                f"ORCID incorrecto para {identifier}.",
                errors,
            )
            metrics = researcher.get("publication_metrics") or []
            require(bool(metrics), f"Faltan métricas institucionales para {identifier}.", errors)

    valid_ids = set(researcher_ids)
    records = publications_payload.get("records") or []
    doi_keys: list[str] = []
    fallback_keys: list[str] = []
    for index, record in enumerate(records, start=1):
        title = str(record.get("title") or "").strip()
        journal = str(record.get("journal") or "").strip()
        date = str(record.get("publication_date") or "")
        year = record.get("year")
        require(bool(title), f"Publicación {index} sin título.", errors)
        require(bool(journal), f"Publicación {index} sin revista.", errors)
        require(bool(re.fullmatch(r"\d{4}-\d{2}-\d{2}", date)), f"Fecha inválida en publicación {index}: {date}", errors)
        if date[:4].isdigit():
            require(int(date[:4]) == year, f"Año inconsistente en publicación {index}.", errors)

        doi = normalize_doi(record.get("doi"))
        if doi:
            doi_keys.append(doi)
        else:
            fallback_keys.append(f"{title.lower()}::{year}")

        unknown_ids = set(record.get("researcher_ids") or []) - valid_ids
        require(not unknown_ids, f"Publicación {index} contiene investigadores desconocidos: {sorted(unknown_ids)}", errors)

        quartile = record.get("quartile")
        if quartile:
            require(quartile.get("quartile") in {"Q1", "Q2", "Q3", "Q4"}, f"Cuartil inválido en publicación {index}.", errors)
            require(bool(quartile.get("system")), f"Falta sistema bibliométrico en publicación {index}.", errors)
            require(bool(quartile.get("category")), f"Falta categoría del cuartil en publicación {index}.", errors)
            require(isinstance(quartile.get("metric_year"), int), f"Falta año del cuartil en publicación {index}.", errors)
            require(
                str(quartile.get("source_url") or "").startswith("https://"),
                f"Falta fuente HTTPS del cuartil en publicación {index}.",
                errors,
            )

    require(len(doi_keys) == len(set(doi_keys)), "Hay DOI duplicados en publications.json.", errors)
    require(len(fallback_keys) == len(set(fallback_keys)), "Hay publicaciones sin DOI duplicadas.", errors)
    require(
        publications_payload.get("summary", {}).get("unique_catalog_records") == len(records),
        "summary.unique_catalog_records no coincide con records.",
        errors,
    )
    require(
        any("alicia-cordero" in (record.get("researcher_ids") or []) for record in records),
        "No hay publicaciones asociadas a Alicia Cordero.",
        errors,
    )
    require(
        any("juan-torregrosa" in (record.get("researcher_ids") or []) for record in records),
        "No hay publicaciones asociadas a Juan Ramón Torregrosa.",
        errors,
    )

    journals = quartiles_payload.get("journals") or {}
    require(bool(journals), "journal_quartiles.json no contiene revistas.", errors)
    for slug, journal in journals.items():
        require(journal.get("quartile") in {"Q1", "Q2", "Q3", "Q4"}, f"Cuartil inválido para {slug}.", errors)
        require(bool(journal.get("system")), f"Falta sistema para {slug}.", errors)
        require(isinstance(journal.get("metric_year"), int), f"Falta metric_year para {slug}.", errors)
        require(
            str(journal.get("source_url") or "").startswith("https://"),
            f"Falta source_url HTTPS para {slug}.",
            errors,
        )

    if errors:
        print("VALIDACIÓN FALLIDA", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print(
        f"Validación correcta: {len(researchers)} investigadores, "
        f"{len(records)} publicaciones y {len(journals)} revistas con cuartil verificado."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
