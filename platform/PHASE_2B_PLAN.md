# Fase 2B — Integración de la plataforma completa

## Objetivo

Integrar los módulos de Kernel Core dentro de la SPA pública que ya contiene los menús, servicios, herramientas institucionales y el Laboratorio Inteligente de Investigación.

## Elementos que no pueden perderse

1. Laboratorio Inteligente de Investigación, autenticación y calculadoras.
2. Herramientas institucionales:
   - ITLA · Xmera.
   - UNAPEC · Banner.
3. Menús desplegables Investigación y Nosotros.
4. Servicios, diagnóstico, noticias y contacto.
5. Analítica, selector de idioma y comportamiento responsive.

## Integraciones nuevas

1. Formación académica como ruta integrada de la SPA.
2. Nueve investigadores y fotografías verificadas.
3. Perfiles científicos.
4. Publicaciones 2.0.
5. Proyectos 2.0.
6. Relaciones entre investigadores, publicaciones y proyectos.

## Etapas

### 2B.1 — Preservación y puente

- Mantener la SPA previa como base.
- Copiar los tres catálogos v2.
- Añadir un puente no destructivo.
- Validar Laboratorio, Xmera y Banner antes de seguir.

### 2B.2 — Formación académica

- Añadir la ruta `#/formacion` al menú Nosotros.
- Generar las nueve fichas desde `researchers.v2.json`.
- Mantener idioma, navegación y diseño de la SPA.

### 2B.3 — Equipo y perfiles científicos

- Sustituir los parches parciales por una única fuente de datos.
- Conservar las fotografías existentes y usar la fotografía actualizada de Miguel.

### 2B.4 — Publicaciones y proyectos

- Integrar los catálogos v2 dentro de las rutas nativas.
- Preservar los filtros y la navegación de la plataforma.

### 2B.5 — Validación y activación

- Pruebas en escritorio y móvil.
- Prueba del acceso al Laboratorio.
- Pruebas de Xmera y Banner con datos de muestra no sensibles.
- Comprobación del selector español/inglés.
- Activación solo con autorización explícita.

## Regla de seguridad

Ningún cambio de esta fase se publica directamente en `gh-pages`. Todo se revisa primero en `fase-2b-platform-integration`.
