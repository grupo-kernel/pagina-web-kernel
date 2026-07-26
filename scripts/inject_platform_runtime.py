#!/usr/bin/env python3
"""Load the Phase 2B runtime through the existing public patch loader."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
RUNTIME = "kernel-platform-2b-runtime.js?v=20260725-1"


def main() -> int:
    text = INDEX.read_text(encoding="utf-8")
    if RUNTIME in text:
        print("Phase 2B runtime already loaded.")
        return 0
    anchor_pattern = re.compile(r'(?P<indent>\s*)(?P<quote>["\'])kernel-i18n-full\.js(?P<query>[^"\']*)(?P=quote)')
    match = anchor_pattern.search(text)
    if not match:
        raise SystemExit("No se encontró kernel-i18n-full.js en el cargador público.")
    indent = match.group("indent")
    quote = match.group("quote")
    insertion = f'{indent}{quote}{RUNTIME}{quote},\n'
    text = text[: match.start()] + insertion + text[match.start() :]
    INDEX.write_text(text, encoding="utf-8")
    print("Phase 2B runtime inserted while preserving the existing patch loader.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
