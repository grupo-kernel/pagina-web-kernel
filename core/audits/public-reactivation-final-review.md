# Revisión final de la candidata pública — Fase 2A

Fecha: 2026-07-25

## Alcance revisado

La candidata de `fase-2a-public-reactivation` fue revisada antes de cualquier cambio en `main` o `gh-pages`.

Se verificaron las nueve rutas principales:

- `index.html`
- `quienes_somos.html`
- `equipo.html`
- `formacion.html`
- `lineas.html`
- `proyectos.html`
- `publicaciones.html`
- `noticias.html`
- `contacto.html`

## Resultados

- Kernel Quality Gate: PASS.
- Kernel Global Integration Gate: PASS.
- Public Reactivation Gate: PASS.
- Navegación común, incluida la sección Formación: validada.
- Recursos locales enlazados desde las páginas: validados.
- Mensajes y marcadores de vista previa: retirados de la candidata pública.
- Página de Proyectos: conectada con `projects.v2.json`, `researchers.v2.json` y el renderizador público.
- Equipo y Formación: marcados como `public-ready`, sin activar todavía producción.
- Página de Contacto: conserva la acción de Formspree y su estructura accesible.
- Página de Noticias: conserva las siete noticias y utiliza la fotografía específica `antmel_rodriguez.jpg` para mejorar el encuadre de la defensa doctoral de Antmel.
- Ramas y SHA de reversión: registrados.

## Fotografía de Miguel

La fotografía actualizada se revisó directamente desde el artefacto final de la candidata.

- Ruta usada por el sitio: `miguel.jpg`.
- Dimensiones: 1122 × 1402 píxeles.
- Formato binario detectado: PNG.
- Estado visual: imagen nítida, encuadre institucional vertical, rostro y vestimenta correctamente visibles, identidad gráfica de El Kernel integrada.

El navegador interpreta el archivo por su firma binaria, aunque la extensión de compatibilidad utilizada por el sitio sea `.jpg`.

## Revisión visual y limitación del entorno

La composición de las páginas, la fotografía y la estructura responsive fueron revisadas mediante los archivos y artefactos generados. El intento de ejecutar una nueva navegación automatizada local con Chromium fue bloqueado por la política del entorno (`ERR_BLOCKED_BY_ADMINISTRATOR`), no por un error del sitio.

Por esta razón, el plan mantiene como obligatorio un smoke test público inmediatamente después de validar `main` y antes de considerar finalizado el despliegue en `gh-pages`.

## Seguridad

- `main` permanece en `ddbbae2abd68d1ecb35165b0721116c779fe7375`.
- `gh-pages` permanece en `0a86f78a26ebbffe4862208ab6f5ee627b973366`.
- No se ha activado la página pública.
- La fusión requiere aprobación explícita del usuario.
