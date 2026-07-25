# Kernel Core

Este directorio inicia el Hito 1 de la plataforma El Kernel.

## Principio de seguridad

La migración es no destructiva:

- no reemplaza las páginas actuales;
- no modifica `main` ni `gh-pages`;
- no elimina parches existentes;
- no cambia rutas públicas;
- no activa el nuevo núcleo hasta completar pruebas de equivalencia.

## Objetivo

Centralizar progresivamente la información institucional para que Equipo, Formación Académica, Publicaciones, Proyectos, Servicios, Noticias y traducciones lean una fuente común.

## Estructura inicial

- `manifest.json`: catálogo de fuentes de datos y estado de migración.
- `kernel-core.js`: cargador seguro con validación, caché y modo de compatibilidad.
- `schemas.js`: validadores mínimos sin dependencias externas.

## Estrategia de migración

1. Inventariar las fuentes actuales.
2. Validar los archivos sin conectarlos a la interfaz.
3. Comparar los datos antiguos y nuevos.
4. Conectar un solo módulo por vez.
5. Mantener una ruta de reversión inmediata.
6. Fusionar únicamente después de verificar todas las páginas.

## Estado

Fase 1A: núcleo creado en paralelo. No afecta al sitio público.
