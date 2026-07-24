#!/usr/bin/env python3
"""Comprueba la sintaxis JavaScript incrustada en las páginas actualizadas."""

from __future__ import annotations

import shutil
import subprocess
import sys
import tempfile
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = (
    ROOT / "index.html",
    ROOT / "equipo.html",
    ROOT / "quienes_somos.html",
    ROOT / "publicaciones.html",
)


class InlineScriptParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self._capturing = False
        self._buffer: list[str] = []
        self.scripts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() != "script":
            return
        attributes = {name.lower(): value for name, value in attrs}
        if "src" not in attributes:
            self._capturing = True
            self._buffer = []

    def handle_data(self, data: str) -> None:
        if self._capturing:
            self._buffer.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "script" and self._capturing:
            self.scripts.append("".join(self._buffer))
            self._capturing = False
            self._buffer = []


def main() -> int:
    node = shutil.which("node")
    if not node:
        print("No se encontró Node.js para validar el JavaScript.", file=sys.stderr)
        return 1

    checked = 0
    with tempfile.TemporaryDirectory(prefix="kernel-js-") as temporary_directory:
        temporary = Path(temporary_directory)
        for page in PAGES:
            if not page.exists():
                print(f"Falta la página requerida: {page.relative_to(ROOT)}", file=sys.stderr)
                return 1

            parser = InlineScriptParser()
            parser.feed(page.read_text(encoding="utf-8"))
            for position, source in enumerate(parser.scripts, start=1):
                if not source.strip():
                    continue
                script_path = temporary / f"{page.stem}-{position}.js"
                script_path.write_text(source, encoding="utf-8")
                process = subprocess.run(
                    [node, "--check", str(script_path)],
                    check=False,
                    capture_output=True,
                    text=True,
                )
                if process.returncode != 0:
                    print(
                        f"JavaScript inválido en {page.name}, bloque {position}:\n"
                        f"{process.stderr}",
                        file=sys.stderr,
                    )
                    return process.returncode
                checked += 1

    print(f"Validación frontend correcta: {checked} bloques JavaScript comprobados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
