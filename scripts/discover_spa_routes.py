#!/usr/bin/env python3
"""Discover route candidates and protected capabilities in the restored SPA bundle."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "core" / "audits" / "platform-2b-route-inventory.json"

ROUTE_HINTS = {
    "home": ["home", "inicio", "portada"],
    "about": ["about", "about-us", "quienes-somos", "nosotros"],
    "team": ["equipment", "team", "equipo"],
    "academic": ["academic", "formation", "formacion"],
    "research": ["research", "investigacion", "lines", "lineas"],
    "projects": ["projects", "proyectos"],
    "publications": ["publications", "publicaciones"],
    "news": ["news", "noticias"],
    "tools": ["tools", "herramientas"],
    "laboratory": ["laboratory", "laboratorio", "smart-lab", "intelligent-lab"],
    "xmera": ["xmera"],
    "itla": ["itla"],
    "apec": ["apec", "unapec"],
    "contact": ["contact", "contacto"],
}


def load_sources() -> dict[str, str]:
    sources: dict[str, str] = {}
    for path in [ROOT / "index.html", *sorted((ROOT / "assets").glob("*.js"))]:
        if not path.exists() or not path.is_file():
            continue
        try:
            sources[str(path.relative_to(ROOT))] = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
    return sources


def context_snippets(text: str, term: str, limit: int = 8) -> list[str]:
    snippets: list[str] = []
    for match in re.finditer(re.escape(term), text, flags=re.IGNORECASE):
        start = max(0, match.start() - 90)
        end = min(len(text), match.end() + 120)
        snippet = re.sub(r"\s+", " ", text[start:end]).strip()
        if snippet not in snippets:
            snippets.append(snippet)
        if len(snippets) >= limit:
            break
    return snippets


def main() -> int:
    sources = load_sources()
    route_literals: set[str] = set()
    for text in sources.values():
        for pattern in [
            r"#/?([A-Za-z][A-Za-z0-9_-]{1,48})",
            r"(?:route|path|slug|page)\s*[:=]\s*[\"']([A-Za-z][A-Za-z0-9_-]{1,48})[\"']",
            r"[\"']/([A-Za-z][A-Za-z0-9_-]{1,48})[\"']",
        ]:
            route_literals.update(match.lower() for match in re.findall(pattern, text))

    categories: dict[str, dict[str, object]] = {}
    for category, hints in ROUTE_HINTS.items():
        hits: list[dict[str, object]] = []
        for relative, text in sources.items():
            found_hints = [hint for hint in hints if re.search(re.escape(hint), text, flags=re.IGNORECASE)]
            if found_hints:
                snippets: list[str] = []
                for hint in found_hints:
                    snippets.extend(context_snippets(text, hint, limit=2))
                hits.append({
                    "path": relative,
                    "hints": found_hints,
                    "snippets": snippets[:8],
                })
        route_matches = sorted(route for route in route_literals if route in {hint.lower() for hint in hints})
        categories[category] = {
            "detected": bool(hits),
            "route_matches": route_matches,
            "hits": hits[:20],
        }

    report = {
        "phase": "2B",
        "sources_scanned": sorted(sources),
        "route_literals": sorted(route_literals),
        "categories": categories,
        "notes": [
            "Los resultados son un inventario técnico inicial; cada ruta crítica debe verificarse funcionalmente.",
            "El Laboratorio, Xmera, ITLA y APEC/UNAPEC permanecen bloqueantes para la activación.",
        ],
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print("=== SPA ROUTE DISCOVERY ===")
    print(f"Sources scanned: {len(sources)}")
    print(f"Route literals: {len(route_literals)}")
    for category, value in categories.items():
        print(f"{'FOUND' if value['detected'] else 'REVIEW'} {category}: {', '.join(value['route_matches']) or '-'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
