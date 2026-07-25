#!/usr/bin/env python3
"""Verificación externa de la activación pública de Grupo El Kernel."""

from __future__ import annotations

import json
import os
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Callable, Any

BASE_URL = os.environ.get("BASE_URL", "https://www.grupoelkernel.com").rstrip("/")
CACHE_KEY = os.environ.get("CACHE_KEY", str(int(time.time())))
RESULT_PATH = Path(os.environ.get("SMOKE_RESULT", "public-smoke-result.json"))
ATTEMPTS = int(os.environ.get("SMOKE_ATTEMPTS", "3"))
DELAY_SECONDS = int(os.environ.get("SMOKE_DELAY_SECONDS", "20"))

failures: list[str] = []
checks: list[dict[str, Any]] = []


def fetch(path: str) -> bytes:
    separator = "&" if "?" in path else "?"
    url = f"{BASE_URL}/{path.lstrip('/')}{separator}smoke={urllib.parse.quote(CACHE_KEY)}"
    last_error: Exception | None = None
    for attempt in range(1, ATTEMPTS + 1):
        request = urllib.request.Request(
            url,
            headers={
                "User-Agent": "Kernel-Public-Smoke-Test/1.1",
                "Cache-Control": "no-cache, no-store, max-age=0",
                "Pragma": "no-cache",
            },
        )
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                body = response.read()
                print(
                    f"PASS HTTP {response.status} {path} "
                    f"bytes={len(body)} type={response.headers.get('Content-Type', '')}"
                )
                checks.append({"path": path, "http_status": response.status, "bytes": len(body)})
                if response.status != 200:
                    raise RuntimeError(f"HTTP {response.status}")
                return body
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            print(f"RETRY {attempt}/{ATTEMPTS} {path}: {exc}")
            if attempt < ATTEMPTS:
                time.sleep(DELAY_SECONDS)
    raise RuntimeError(str(last_error))


html_checks = {
    "index.html": ["Trazabilidad bibliográfica", "Investigadores miembros", "formacion.html"],
    "quienes_somos.html": ["kernel-navbar", "page-header", "Quiénes somos"],
    "equipo.html": [
        'data-kernel-core-status="public-ready"',
        "core/data/researchers.v2.json",
        "kernel-core-team__grid",
    ],
    "formacion.html": [
        'data-kernel-core-status="public-ready"',
        "core/data/researchers.v2.json",
        "kernel-academic-shell",
    ],
    "lineas.html": ["kernel-navbar", "Líneas de investigación", "page-header"],
    "proyectos.html": ["projectsApp", "core/data/projects.v2.json", "projects-stats"],
    "publicaciones.html": ["Catálogo verificable", "core/data/publications.v2.json", "metrics-callout"],
    "noticias.html": ["Comunidad en movimiento", "kernel-navbar", "Noticias y actividades"],
    "contacto.html": ["contact-layout", "https://formspree.io/f/xqabgepe", "Enviar mensaje"],
}

for path, markers in html_checks.items():
    try:
        text = fetch(path).decode("utf-8", errors="replace")
        missing = [marker for marker in markers if marker not in text]
        if missing:
            failures.append(f"{path}: faltan marcadores {missing}")
        else:
            print(f"PASS CONTENT {path}")
    except Exception as exc:  # noqa: BLE001
        failures.append(f"{path}: {exc}")

json_checks: dict[str, Callable[[dict[str, Any]], bool]] = {
    "core/data/researchers.v2.json": lambda data: (
        data.get("group", {}).get("member_count") == 9
        and any(item.get("id") == "alicia-cordero" for item in data.get("researchers", []))
        and any(item.get("id") == "juan-torregrosa" for item in data.get("researchers", []))
    ),
    "core/data/projects.v2.json": lambda data: data.get("summary", {}).get("featured_approved_projects") == 10,
    "core/data/publications.v2.json": lambda data: len(data.get("records", [])) >= 160,
}

for path, predicate in json_checks.items():
    try:
        data = json.loads(fetch(path).decode("utf-8"))
        if not predicate(data):
            failures.append(f"{path}: contenido crítico inesperado")
        else:
            print(f"PASS DATA {path}")
    except Exception as exc:  # noqa: BLE001
        failures.append(f"{path}: {exc}")

try:
    marker = fetch("deployment-version.txt").decode("utf-8", errors="replace")
    expected_sha = "source_merge_sha=6376165ad672554e16c53bab1610edb8793526bd"
    if expected_sha not in marker:
        failures.append("deployment-version.txt: SHA de activación no reconocido")
    else:
        print("PASS DEPLOYMENT MARKER")
except Exception as exc:  # noqa: BLE001
    failures.append(f"deployment-version.txt: {exc}")

result = {
    "base_url": BASE_URL,
    "cache_key": CACHE_KEY,
    "passed": not failures,
    "failures": failures,
    "checks": checks,
}
RESULT_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")

if failures:
    print("\nPUBLIC SMOKE TEST FAILED")
    for failure in failures:
        print(f"- {failure}")
    sys.exit(1)

print("\nPUBLIC SMOKE TEST PASS: nueve rutas, tres catálogos y marcador de despliegue verificados.")
