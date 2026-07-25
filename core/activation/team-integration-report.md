# Informe de integración controlada — Equipo

Fecha: 2026-07-25  
Rama: `fase-1l-team-preview-integration`  
Base: `hito-1-kernel-core`  
Estado: integrado únicamente para revisión; no desplegado

## Objetivo

Conectar la página real `equipo.html` con la fuente normalizada `core/data/researchers.v2.json` sin modificar `main`, `gh-pages` ni la página pública.

## Alcance del cambio

- `equipo.html` deja de leer `data/researchers.json` solamente en esta rama.
- La estructura visual existente se conserva para facilitar la comparación.
- Los campos anidados de la versión v2 se adaptan en el navegador:
  - `image.current`;
  - `contact.email`;
  - `profiles.*`;
  - `metrics.publications`;
  - `member_scope`;
  - `status`, `visibility` y `order`.
- Los filtros por país permanecen disponibles.
- La página conserva vínculos a publicaciones, ORCID y perfiles académicos.

## Contenido esperado

- 9 perfiles visibles.
- Orden institucional del 1 al 9.
- 7 miembros principales de República Dominicana.
- 2 miembros internacionales de España.
- Marino Brito, Marc-Kelly Jean Philippe y José Alberto Reyes no pueden desaparecer.
- Alicia Cordero y Juan Ramón Torregrosa deben mostrarse como miembros internacionales.

## Protección aplicada

El archivo `core/validate-team-integration.mjs` bloquea la rama si:

- se vuelve a introducir `fetch("data/researchers.json")`;
- la página deja de cargar `core/data/researchers.v2.json`;
- falta alguno de los nueve identificadores;
- se altera el orden institucional;
- el manifiesto marca Team como activo en producción;
- se elimina la clasificación internacional de Alicia o Juan Ramón.

## Estado de activación

El manifiesto mantiene:

```json
{
  "activation": {
    "enabled": false,
    "modules": {
      "team": {
        "active": false,
        "preview_active": true,
        "scope": "branch-only",
        "status": "integrated-branch-preview"
      }
    }
  }
}
```

Esto representa integración técnica para revisión, no publicación.

## Reversión

La reversión no requiere cambios en producción.

En esta rama puede realizarse restaurando únicamente:

```text
equipo.html
core/manifest.json
core/quality-gate.config.json
.github/workflows/kernel-quality-gate.yml
core/validate-team-module.mjs
```

al estado de `hito-1-kernel-core` y eliminando:

```text
core/validate-team-integration.mjs
core/activation/team-integration-report.md
```

También puede descartarse por completo la rama `fase-1l-team-preview-integration`.

## Condición para avanzar

No debe fusionarse esta rama hasta comprobar:

- Quality Gate en PASS;
- nueve tarjetas en escritorio;
- nueve tarjetas en móvil;
- fotografías cargadas;
- filtros funcionales;
- enlaces externos correctos;
- navegación sin regresiones;
- aceptación visual del Grupo El Kernel.
