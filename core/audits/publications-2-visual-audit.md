# Auditoría visual — Publicaciones 2.0

## Alcance

Vista previa: `core/modules/publications/preview.html`.

## Escritorio

- Encabezado y resumen bibliométrico legibles.
- Panel lateral diferenciado del catálogo.
- Tarjetas con jerarquía clara: año, tipo, cuartil, título, autores, referencia y acciones.
- Controles de búsqueda y ordenación visibles.
- Estados vacío, carga y confirmación de BibTeX previstos.

## Tableta y móvil

- El panel lateral pasa a una sola columna bajo 900 px.
- Los indicadores pasan de cuatro a dos y luego a una columna.
- La barra del catálogo se apila bajo 560 px.
- Las acciones permiten salto de línea sin desbordamiento horizontal.

## Accesibilidad

- Elementos de formulario asociados con etiquetas.
- Regiones dinámicas con `aria-live`.
- Uso de botones reales para acciones de copia y limpieza.
- Enlaces externos con `rel="noopener"`.
- Contraste estructural mediante texto oscuro sobre fondos claros y encabezado de alto contraste.

## Pendientes antes de producción

- Revisión manual del artefacto generado por GitHub Actions.
- Verificación final de todos los DOI.
- Validación de relaciones con proyectos cuando la Fase 1P esté terminada.
- Aprobación explícita del usuario.
