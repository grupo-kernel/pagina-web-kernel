from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = [
    "index.html",
    "quienes_somos.html",
    "equipo.html",
    "formacion.html",
    "lineas.html",
    "proyectos.html",
    "publicaciones.html",
    "noticias.html",
    "contacto.html",
]

team_item = re.compile(
    r'(<li[^>]*>\s*<a[^>]*href=["\']equipo\.html["\'][^>]*>Equipo</a>\s*</li>)',
    re.IGNORECASE,
)
formation_item = '<li class="nav-item"><a class="nav-link" href="formacion.html">Formación</a></li>'

for relative in PAGES:
    path = ROOT / relative
    text = path.read_text(encoding="utf-8")
    text = re.sub(
        r'^\s*<!doctype html>\s*<!doctype html>\s*',
        '<!doctype html>\n',
        text,
        count=1,
        flags=re.IGNORECASE,
    )
    if 'href="formacion.html"' not in text and "href='formacion.html'" not in text:
        text, count = team_item.subn(r'\1\n' + formation_item, text, count=1)
        if count != 1:
            raise SystemExit(f"No se pudo insertar Formación en {relative}")
    path.write_text(text, encoding="utf-8")
    print(f"Normalizada navegación: {relative}")
