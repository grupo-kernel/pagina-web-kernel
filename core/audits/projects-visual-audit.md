# Auditoría visual — Fase 1P Proyectos

## Cobertura

- Vista previa controlada: `core/modules/projects/preview.html`.
- Datos: `core/data/projects.v2.json`.
- Investigadores: `core/data/researchers.v2.json`.

## Escritorio

- Hero y cuatro indicadores legibles.
- Filtros en columna lateral fija.
- Tarjetas con jerarquía clara para estado, programa, participantes, duración, presupuesto y verificación.
- Enlaces internos hacia perfiles científicos.

## Tableta y móvil

- La cuadrícula pasa a una columna por debajo de 900 px.
- Los indicadores pasan a dos columnas y luego a una.
- Los detalles de cada proyecto se apilan en pantallas pequeñas.
- No se reduce el tamaño tipográfico de forma artificial.

## Accesibilidad

- Etiquetas asociadas a cada control.
- Conteo y listado con `aria-live`.
- Estados expresados mediante texto, no solamente mediante color.
- Enlaces directos con etiqueta accesible.
- Contraste estructural adecuado sobre fondos claros.

## Integridad informativa

- Se muestran 10 proyectos aprobados destacados.
- Se informa que existen 48 participaciones adicionales no desglosadas.
- Las 58 participaciones no se presentan como 58 proyectos únicos.
- Los datos sin fuente consolidada se marcan como pendientes.
- El presupuesto FONDOCyT se conserva en DOP: RD$11,901,975.84.

## Resultado

Apto para vista previa controlada. No activar en producción sin aprobación explícita.
