# Auditoría visual y funcional — Perfiles científicos

Fecha: 2026-07-25
Rama: `fase-1n-scientific-profiles-preview`
Estado: candidato controlado, no activo en producción.

## Cobertura

- Nueve investigadores públicos.
- Orden institucional preservado.
- Dos miembros internacionales identificados.
- Navegación por botón, hash y parámetro `investigador`.
- Biografía, rol, afiliaciones y áreas científicas.
- Enlaces científicos disponibles por investigador.
- Indicadores bibliométricos mostrados únicamente cuando existen datos consolidados.
- Estado explícito de consolidación cuando no hay métricas verificadas.

## Escritorio

- Directorio lateral estable y perfil principal jerarquizado.
- Retrato, nombre, grado, rol y afiliaciones visibles en el encabezado.
- Áreas científicas distribuidas como etiquetas legibles.
- Enlaces externos agrupados y distinguibles.
- Métricas separadas del contenido biográfico para evitar confusión.

## Móvil

- Navegación horizontal desplazable.
- Perfil en una sola columna.
- Etiquetas y enlaces con ajuste de línea.
- Imágenes con recorte proporcional mediante `object-fit`.
- Sin dependencia de tablas ni anchos fijos.

## Accesibilidad

- Botones reales para seleccionar investigadores.
- Estado activo mediante `aria-pressed`.
- Textos alternativos en retratos principales.
- Enlaces externos con `rel="noopener noreferrer"`.
- Contraste institucional azul, blanco y dorado.

## Verificación de datos

- Alicia Cordero y Juan Ramón Torregrosa conservan perfiles institucionales.
- Miguel A. Leonardo Sepúlveda conserva ORCID, Scholar y ResearchGate.
- No se inventan métricas para investigadores sin información consolidada.
- La fuente única es `core/data/researchers.v2.json`.

## Riesgos no bloqueantes

- La fotografía oficial nueva de Miguel debe reemplazar `miguel.jpg` antes de activar producción.
- Algunos investigadores tienen menos enlaces científicos disponibles que otros.
- La altura del perfil varía según la cantidad de información disponible.

## Dictamen

Aprobado técnica y visualmente para revisión del usuario y eventual fusión en `hito-1-kernel-core`. No activa producción.
