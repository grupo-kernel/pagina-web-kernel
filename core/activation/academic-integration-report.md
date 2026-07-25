# Fase 1M — Integración controlada de Formación académica

Fecha: 2026-07-25  
Rama: `fase-1m-academic-profiles-preview`  
Estado: vista previa de rama; no activa en producción

## Objetivo

Sustituir las fichas manuales de `formacion.html` por perfiles generados desde `core/data/researchers.v2.json`.

## Problema corregido

La página anterior contenía información escrita directamente en HTML y presentaba solo siete integrantes. La integración candidata incluye los nueve investigadores, incorpora a Alicia Cordero y Juan Ramón Torregrosa y conserva el orden institucional.

## Componentes

- `formacion.html`
- `core/modules/academic/academic-renderer.mjs`
- `core/modules/academic/academic-integration.css`
- `core/validate-academic-integration.mjs`

## Contenido de cada perfil

- fotografía;
- nombre y grado;
- clasificación principal o internacional;
- rol;
- afiliaciones;
- biografía;
- formación académica;
- experiencia relevante;
- áreas de especialización;
- correo y perfiles científicos disponibles.

## Comportamiento

- navegación lateral en escritorio;
- navegación horizontal en pantallas pequeñas;
- selección mediante botón, hash o parámetro `investigador`;
- panel dinámico sin duplicar nueve bloques HTML;
- orden determinado por el catálogo v2.

## Seguridad

- `activation.enabled=false`;
- `academic-background.active=false`;
- `preview_active=true`;
- `scope=branch-only`;
- `main` y `gh-pages` no se modifican.

## Reversión

Restaurar `formacion.html` desde `hito-1-kernel-core` y retirar los archivos bajo `core/modules/academic/`. No se requiere reversión en producción porque esta rama no está desplegada.
