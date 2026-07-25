# Fase 2B — Integración completa de la plataforma

## Corrección terminológica

La herramienta se denomina **Xmera**. No se utilizará nuevamente la denominación SARA para este módulo.

## Objetivo

Integrar los módulos consolidados de Kernel Core dentro de la interfaz pública anterior, sin reemplazar el shell de la aplicación y sin perder ninguna función existente.

## Prioridad institucional

1. Laboratorio Inteligente de Investigación.
2. Xmera.
3. Herramientas del ITLA.
4. Herramientas de APEC/UNAPEC.
5. Calculadoras y asistentes de investigación.
6. Autenticación y control de acceso.
7. Selector integral español/inglés.
8. Analítica y métricas.
9. Equipo, Formación, Perfiles científicos, Publicaciones 2.0 y Proyectos 2.0.

## Principio de integración

La interfaz pública restaurada es la base de esta fase. Kernel Core se incorporará por rutas y componentes, no mediante la sustitución total de `index.html`, del bundle SPA ni de los menús desplegables.

## Controles obligatorios

- Conservar el encabezado, los submenús y la navegación móvil.
- Conservar las rutas y accesos del Laboratorio, Xmera, ITLA y APEC/UNAPEC.
- Conservar todas las calculadoras funcionales.
- Conservar Firebase y cualquier control de acceso ya configurado.
- Conservar Google Analytics y la API de métricas.
- Verificar las fotografías de los nueve investigadores.
- Integrar las fuentes `researchers.v2.json`, `publications.v2.json` y `projects.v2.json` mediante un puente compatible con la SPA.
- Probar escritorio, tableta y móvil antes de una nueva activación.
- Mantener `gh-pages` pública sin cambios durante la construcción de la fase.

## Estado inicial

- Rama de trabajo: `fase-2b-integracion-plataforma-xmera-laboratorio`.
- Base: versión pública restaurada en `gh-pages`.
- Producción: sin cambios por esta fase.
- Activación: bloqueada hasta revisión y aprobación explícita.
