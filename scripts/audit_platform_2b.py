#!/usr/bin/env python3
"""Audit the legacy public shell before embedding Kernel Core modules.

The audit is deliberately read-only. It inventories the capabilities that must
survive Phase 2B and writes an auditable JSON report for GitHub Actions.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).resolve().parents[1]
REPORT = ROOT / "core" / "audits" / "platform-2b-baseline.json"

TEXT_EXTENSIONS = {".html", ".js", ".mjs", ".css", ".json", ".md"}
EXCLUDED_PARTS = {".git", "node_modules"}

CAPABILITIES = {
    "laboratorio-inteligente": [
        r"laboratorio\s+inteligente",
        r"laboratory",
        r"iniciar\s+asistente",
    ],
    "xmera": [r"xmera"],
    "itla": [r"\bitla\b"],
    "apec": [r"\b(?:un)?apec\b"],
    "herramientas": [r"herramientas", r"tools"],
    "calculadoras": [r"calculador", r"calculator"],
    "autenticacion": [r"firebase", r"auth", r"contrase(?:ñ|n)a", r"password"],
    "idiomas": [r"kernel-i18n", r"español", r"english", r"language"],
    "analitica": [r"googletagmanager", r"gtag\(", r"analytics"],
}

SHELL_REQUIREMENTS = {
    "spa_bundle": [r"assets/index-[A-Za-z0-9_-]+\.js"],
    "spa_stylesheet": [r"assets/index-[A-Za-z0-9_-]+\.css"],
    "patch_loader": [r"kernel-phase1-patch\.js", r"kernel-members-patch\.js"],
    "navigation_container": [r"data-site-header", r"id=[\"']header[\"']"],
}


def iter_text_files() -> Iterable[Path]:
    for path in ROOT.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in TEXT_EXTENSIONS:
            continue
        if any(part in EXCLUDED_PARTS for part in path.parts):
            continue
        yield path


def read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return ""


def matches_for(patterns: list[str], corpus: dict[str, str]) -> list[dict[str, object]]:
    findings: list[dict[str, object]] = []
    for relative, text in corpus.items():
        matched_patterns = [
            pattern
            for pattern in patterns
            if re.search(pattern, text, flags=re.IGNORECASE | re.MULTILINE)
        ]
        if matched_patterns:
            findings.append({"path": relative, "patterns": matched_patterns})
    return findings


def main() -> int:
    index_path = ROOT / "index.html"
    errors: list[str] = []
    warnings: list[str] = []

    if not index_path.exists():
        errors.append("index.html no existe en la rama de integración.")

    corpus = {
        str(path.relative_to(ROOT)): read_text(path)
        for path in iter_text_files()
    }
    index_text = corpus.get("index.html", "")

    shell_checks: dict[str, dict[str, object]] = {}
    for key, patterns in SHELL_REQUIREMENTS.items():
        ok = all(re.search(pattern, index_text, flags=re.IGNORECASE) for pattern in patterns)
        shell_checks[key] = {"ok": bool(ok), "patterns": patterns}
        if not ok:
            errors.append(f"El shell público no cumple el requisito: {key}.")

    capability_checks: dict[str, dict[str, object]] = {}
    for capability, patterns in CAPABILITIES.items():
        findings = matches_for(patterns, corpus)
        capability_checks[capability] = {
            "detected": bool(findings),
            "patterns": patterns,
            "findings": findings[:40],
        }
        if not findings:
            warnings.append(
                f"No se detectó evidencia textual de {capability}; requiere inspección manual del bundle o de la ruta dinámica."
            )

    image_candidates = sorted(
        str(path.relative_to(ROOT))
        for path in ROOT.rglob("*")
        if path.is_file() and path.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp", ".svg"}
    )

    report = {
        "phase": "2B",
        "status": "baseline-audited" if not errors else "baseline-failed",
        "root": str(ROOT),
        "shell_checks": shell_checks,
        "capability_checks": capability_checks,
        "image_count": len(image_candidates),
        "image_candidates": image_candidates,
        "errors": errors,
        "warnings": warnings,
        "next_gate": "Integrar Kernel Core sin perder ninguna capacidad protegida.",
    }

    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print("=== PHASE 2B PLATFORM BASELINE ===")
    for key, value in shell_checks.items():
        print(f"{'PASS' if value['ok'] else 'FAIL'} shell:{key}")
    for key, value in capability_checks.items():
        print(f"{'FOUND' if value['detected'] else 'REVIEW'} capability:{key}")
    print(f"Images inventoried: {len(image_candidates)}")
    for warning in warnings:
        print(f"WARNING: {warning}")
    for error in errors:
        print(f"ERROR: {error}", file=sys.stderr)

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
