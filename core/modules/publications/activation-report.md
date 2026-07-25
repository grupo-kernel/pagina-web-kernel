# Informe de activación controlada — Publicaciones 2.0

## Estado

El módulo se encuentra en vista previa controlada dentro de `fase-1o-publications-preview`.

- No modifica `main`.
- No modifica `gh-pages`.
- No activa producción.
- Consume `core/data/publications.v2.json` y `core/data/researchers.v2.json`.

## Funciones incorporadas

- Catálogo único deduplicado por DOI o identificador de respaldo.
- Búsqueda por título, revista, autor y DOI.
- Filtros por investigador, año, tipo y cuartil.
- Ordenación cronológica y alfabética.
- Referencia bibliográfica ampliada.
- Acceso al DOI y a la publicación.
- Copia de BibTeX.
- Enlaces hacia perfiles científicos.
- Preparación de relaciones con proyectos mediante `project_ids`.
- Diseño responsive para escritorio, tableta y móvil.

## Condiciones antes de activar

1. Quality Gate en PASS.
2. Validador específico en PASS.
3. Revisión visual en escritorio y móvil.
4. Verificación de enlaces y navegación.
5. Aprobación explícita del usuario.
