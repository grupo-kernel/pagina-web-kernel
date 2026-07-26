# Fase 2B — Estado actual de integración

## Corrección de nombre

La herramienta institucional del ITLA se denomina **Xmera**. La denominación SARA queda descartada en esta integración.

## Objetivo de la fase

Integrar Kernel Core dentro de la plataforma SPA completa sin sustituir ni perder los componentes que ya funcionaban en producción.

## Plataforma que debe conservarse

- Navegación completa y menús desplegables.
- Laboratorio Inteligente de Investigación.
- Autenticación Firebase y control de acceso.
- Asistente de selección de pruebas estadísticas.
- Calculadoras científicas y Biblioteca metodológica.
- Herramientas ITLA · Xmera.
- Herramientas UNAPEC · Banner: 1AC, 2PP, 3SP y 4EF.
- Servicios, diagnóstico, noticias y contacto.
- Google Analytics.
- Selector español/inglés.
- Diseño responsive para escritorio, tableta y móvil.

## Kernel Core integrado en la rama de trabajo

- Catálogo único de nueve investigadores.
- Fotografías oficiales, incluida la fotografía actualizada de Miguel.
- Formación académica dentro del menú Nosotros.
- Equipo completo de nueve investigadores.
- Perfiles científicos y enlaces externos verificados cuando existen.
- Publicaciones 2.0 con 162 registros únicos.
- Proyectos 2.0 con 10 proyectos aprobados destacados y 48 participaciones adicionales.
- Relaciones entre investigadores, publicaciones y proyectos.
- Puentes de integración v3 compatibles con la SPA existente.

## Controles incorporados

- Validación estructural de preservación de la plataforma.
- Validación específica de Laboratorio, autenticación, Xmera y Banner.
- Pruebas funcionales de navegador con Playwright.
- Pruebas de fotografías, rutas, catálogos, vista móvil e idioma inglés.
- Registro auditable de resultados y capturas de pantalla.

## Seguridad

- Rama pública: `gh-pages`.
- Rama de integración: `fase-2b-platform-integration`.
- PR de trabajo: #30, en borrador.
- La activación permanece deshabilitada.
- No se fusionará ni desplegará esta fase sin revisión visual y autorización explícita del usuario.
