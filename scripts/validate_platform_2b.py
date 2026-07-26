#!/usr/bin/env python3
"""Validate the non-destructive Phase 2B platform integration candidate."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
errors: list[str] = []
warnings: list[str] = []


def fail(message: str) -> None:
    errors.append(message)


def warn(message: str) -> None:
    warnings.append(message)


def read_text(path: str) -> str:
    file_path = ROOT / path
    if not file_path.exists():
        fail(f"Archivo ausente: {path}")
        return ""
    return file_path.read_text(encoding="utf-8", errors="replace")


def read_json(path: str) -> dict:
    text = read_text(path)
    if not text:
        return {}
    try:
        return json.loads(text)
    except json.JSONDecodeError as exc:
        fail(f"JSON inválido en {path}: {exc}")
        return {}


index = read_text("index.html")
runtime = read_text("assets/kernel-platform-2b-runtime.js")
bridge = read_text("assets/kernel-core-platform-bridge.js")
manifest = read_json("core/integration/platform-2b-manifest.json")
researchers = read_json("core/data/researchers.v2.json")
publications = read_json("core/data/publications.v2.json")
projects = read_json("core/data/projects.v2.json")
baseline = read_json("core/audits/platform-2b-baseline.json")
route_inventory = read_json("core/audits/platform-2b-route-inventory.json")

for marker in [
    "assets/index-",
    "kernel-members-patch.js",
    "kernel-stats-patch.js",
    "kernel-phase1-patch.js",
    "kernel-phase1-fix.js",
    "kernel-i18n-full.js",
    "kernel-core-platform-bridge.js",
    "kernel-platform-2b-runtime.js",
    "data-site-header",
]:
    if marker not in index:
        fail(f"El shell público perdió el marcador: {marker}")

if manifest.get("phase") != "2B":
    fail("El manifiesto no corresponde a la Fase 2B.")
if manifest.get("status") != "controlled-integration-not-production":
    fail("El manifiesto no mantiene la integración fuera de producción.")
if manifest.get("public_activation_requires_explicit_approval") is not True:
    fail("El manifiesto no exige aprobación explícita.")

protected = {item.get("id") for item in manifest.get("protected_capabilities", [])}
required_protected = {
    "laboratorio-inteligente", "xmera", "itla", "apec",
    "calculadoras", "autenticacion", "idiomas", "analitica",
}
missing_protected = required_protected - protected
if missing_protected:
    fail(f"Capacidades protegidas ausentes: {sorted(missing_protected)}")

for marker in [
    "PROTECTED_ROUTE_TERMS",
    '"laboratory"',
    '"laboratorio"',
    '"xmera"',
    '"itla"',
    '"apec"',
    '"tools"',
    '"herramientas"',
    "kernel-academic",
    "kernel-scientific-profiles",
    "kernel-publications",
    "kernel-projects",
    "core/data/researchers.v2.json",
    "core/data/publications.v2.json",
    "core/data/projects.v2.json",
]:
    if marker not in runtime:
        fail(f"El runtime 2B no contiene: {marker}")

if "MutationObserver" not in runtime or "hashchange" not in runtime:
    fail("El runtime no está preparado para el ciclo de renderizado de la SPA.")
if "isProtectedRoute" not in runtime:
    fail("El runtime no protege las rutas institucionales existentes.")
if "productionActive: false" not in bridge:
    fail("El puente base no declara producción desactivada.")

members = researchers.get("researchers", [])
public_members = [
    item for item in members
    if item.get("status") != "inactive" and item.get("visibility") != "private"
]
if len(public_members) != 9:
    fail(f"Se esperaban 9 investigadores públicos y se encontraron {len(public_members)}.")

required_ids = {
    "miguel-leonardo", "natanael-urena", "randy-leonardo",
    "antmel-rodriguez", "marino-brito", "marc-kelly-jean-philippe",
    "jose-alberto-reyes", "alicia-cordero", "juan-torregrosa",
}
actual_ids = {item.get("id") for item in public_members}
if not {"alicia-cordero", "juan-torregrosa"}.issubset(actual_ids):
    fail("Alicia Cordero o Juan Ramón Torregrosa no están en la fuente integrada.")
if len(actual_ids) != 9:
    fail(f"La fuente integrada no contiene 9 IDs únicos: {sorted(actual_ids)}")

for member in public_members:
    image = member.get("image", {})
    candidate = image.get("current") if isinstance(image, dict) else image
    if candidate and not (ROOT / candidate).exists():
        warn(f"Imagen declarada no localizada para {member.get('id')}: {candidate}")

records = publications.get("records") or publications.get("publications") or []
if len(records) < 160:
    fail(f"El catálogo integrado contiene solo {len(records)} publicaciones; se esperaban al menos 160.")

summary = projects.get("summary", {})
if summary.get("featured_approved_projects") != 10:
    fail("El catálogo de proyectos no conserva los 10 proyectos aprobados destacados.")
if summary.get("additional_participations_not_itemized") != 48:
    fail("El catálogo de proyectos no conserva las 48 participaciones adicionales.")

shell_checks = baseline.get("shell_checks", {})
for key, value in shell_checks.items():
    if value.get("ok") is not True:
        fail(f"La auditoría base no aprobó el shell: {key}")

categories = route_inventory.get("categories", {})
for key in ["laboratory", "xmera", "itla", "apec", "tools"]:
    if not categories.get(key, {}).get("detected"):
        warn(f"La ruta/capacidad {key} necesita confirmación funcional manual.")

for temporary in [
    "core/integration/.platform-2b-bootstrap-trigger",
    "core/integration/.platform-2b-import-trigger",
    "core/integration/.platform-2b-runtime-trigger",
    ".github/workflows/kernel-platform-2b-bootstrap.yml",
    ".github/workflows/kernel-platform-2b-import-core.yml",
    ".github/workflows/kernel-platform-2b-runtime-bootstrap.yml",
]:
    if (ROOT / temporary).exists():
        warn(f"Archivo temporal aún presente: {temporary}")

print("=== KERNEL PLATFORM 2B GATE ===")
print(f"Investigadores: {len(public_members)}")
print(f"Publicaciones: {len(records)}")
print(f"Proyectos destacados: {summary.get('featured_approved_projects')}")
for item in warnings:
    print(f"WARNING: {item}")
for item in errors:
    print(f"ERROR: {item}", file=sys.stderr)
print("RESULT:", "PASS" if not errors else "FAIL")
raise SystemExit(1 if errors else 0)
