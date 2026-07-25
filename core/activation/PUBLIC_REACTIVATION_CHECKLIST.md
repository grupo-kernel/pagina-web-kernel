# Fase 2A — Reactivación pública

## Estado

Candidata validada, todavía no activa en producción.

## Controles previos obligatorios

- [x] Kernel Quality Gate en PASS.
- [x] Kernel Global Integration Gate en PASS.
- [x] Public Reactivation Gate en PASS.
- [x] Revisión visual estructural de la candidata y revisión directa de la fotografía actualizada.
- [x] Sustitución verificada de `miguel.jpg`.
- [x] Enlaces y recursos locales críticos validados automáticamente.
- [x] Navegación principal unificada en las nueve páginas, incluida Formación.
- [x] Estructura del formulario de contacto y acción de Formspree preservadas.
- [x] Copia de los SHA actuales de `main` y `gh-pages`.
- [x] Plan de reversión revisado y ramas de respaldo creadas.
- [ ] Aprobación explícita del usuario para fusionar la candidata en `main`.

## Control posterior obligatorio

- [ ] Smoke test del sitio público en escritorio y móvil después de validar `main` y antes de cerrar la actualización de `gh-pages`.
- [ ] Prueba manual del envío del formulario de contacto, sin realizar envíos de prueba no autorizados.

## Versiones de respaldo

- `main`: `ddbbae2abd68d1ecb35165b0721116c779fe7375`
  - Rama: `rollback/main-pre-reactivation-20260725`
- `gh-pages`: `0a86f78a26ebbffe4862208ab6f5ee627b973366`
  - Rama: `rollback/gh-pages-pre-reactivation-20260725`

## Fotografía institucional

La fotografía actualizada de Miguel está disponible en la ruta utilizada por el sitio:

`miguel.jpg`

Se verificó directamente dentro del artefacto final de la candidata:

- dimensiones: 1122 × 1402 píxeles;
- formato binario: PNG;
- encuadre: vertical e institucional;
- nitidez: adecuada;
- rostro, vestimenta e identidad gráfica de El Kernel: correctamente visibles.

## Secuencia de activación

1. Obtener la aprobación explícita para fusionar el PR #25.
2. Fusionar la candidata aprobada hacia `main`.
3. Ejecutar nuevamente los controles sobre `main`.
4. Actualizar `gh-pages` solamente cuando `main` esté validada.
5. Comprobar la página pública y las nueve rutas principales.
6. Verificar recursos estáticos, módulos dinámicos, navegación y comportamiento responsive.
7. Mantener disponibles las ramas y los SHA de reversión.

## Reversión

Ante un fallo crítico, restaurar las referencias de `main` y `gh-pages` a los SHA registrados antes de la activación y volver a ejecutar las verificaciones públicas.

La revisión detallada está documentada en `core/audits/public-reactivation-final-review.md`.
