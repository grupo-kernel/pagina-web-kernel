# Fase 1O — Publicaciones 2.0

Estado: **en desarrollo controlado, no activo en producción**.

## Base técnica confirmada

- Fuente pública actual: `data/publications.json`.
- Catálogo normalizado: `core/data/publications.v2.json`, generado por `core/migrate-publications-v2.mjs`.
- Página existente: `publicaciones.html`.
- Catálogo actual: 162 registros únicos y 7 investigadores con publicaciones asociadas.
- Deduplicación principal por DOI normalizado, con respaldo por OpenAlex o título y año.

## Objetivos de la fase

- Extraer el renderizado y filtrado a un módulo compartido.
- Consumir el catálogo v2 como fuente central.
- Añadir filtros por investigador, año, tipo, cuartil y búsqueda libre.
- Incorporar referencias bibliográficas completas, DOI, enlaces y BibTeX.
- Relacionar publicaciones con investigadores y proyectos cuando los datos existan.
- Mantener métricas de perfiles separadas del conteo único del grupo.
- Añadir validación, vista previa y auditoría responsive.

## Seguridad

- Rama: `fase-1o-publications-preview`.
- Base: `hito-1-kernel-core`.
- No modifica `main` ni `gh-pages`.
- No activa rutas públicas de producción.
