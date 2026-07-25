#!/usr/bin/env python3
"""Inject the Phase 2B bridge into the restored SPA shell without replacing it."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
BRIDGE = "kernel-core-platform-bridge.js?v=20260725-1"


def main() -> int:
    text = INDEX.read_text(encoding="utf-8")
    if BRIDGE in text:
        print("Phase 2B bridge already present in index.html")
        return 0

    if "kernel-i18n-full.js" not in text:
        raise SystemExit("No se encontró el cargador de parches de la SPA restaurada.")

    pattern = re.compile(r'(?P<indent>\s*)(?P<quote>["\'])kernel-i18n-full\.js(?P<query>[^"\']*)(?P=quote)')
    match = pattern.search(text)
    if not match:
        raise SystemExit("No se pudo localizar la entrada kernel-i18n-full.js.")

    indent = match.group("indent")
    quote = match.group("quote")
    insertion = f'{indent}{quote}{BRIDGE}{quote},\n'
    text = text[: match.start()] + insertion + text[match.start() :]
    INDEX.write_text(text, encoding="utf-8")
    print("Phase 2B bridge injected without replacing the SPA shell.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
