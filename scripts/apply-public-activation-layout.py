from __future__ import annotations

import base64
import io
import tarfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PARTS = [ROOT / "core" / "activation" / f"layout.part{index:02d}" for index in range(5)]
EXPECTED = {
    "lineas.html",
    "proyectos.html",
    "contacto.html",
    "noticias.html",
    "equipo.html",
    "formacion.html",
    "core/modules/projects/projects-renderer.mjs",
    "core/modules/projects/preview.html",
    "core/modules/projects/projects.css",
}

encoded = "".join(part.read_text(encoding="utf-8").strip() for part in PARTS)
raw = base64.b64decode(encoded, validate=True)

with tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz") as archive:
    members = archive.getmembers()
    names = {member.name for member in members}
    if names != EXPECTED:
        missing = sorted(EXPECTED - names)
        extra = sorted(names - EXPECTED)
        raise SystemExit(f"Archive contents mismatch. missing={missing} extra={extra}")

    for member in members:
        if not member.isfile():
            raise SystemExit(f"Unexpected non-file member: {member.name}")
        relative = Path(member.name)
        if relative.is_absolute() or ".." in relative.parts:
            raise SystemExit(f"Unsafe archive path: {member.name}")
        source = archive.extractfile(member)
        if source is None:
            raise SystemExit(f"Could not read archive member: {member.name}")
        destination = ROOT / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(source.read())
        print(f"Updated {relative}")
