# Fase 2A — Reactivación pública

## Estado

Candidata, no activa en producción.

## Controles previos obligatorios

- [ ] Kernel Quality Gate en PASS.
- [ ] Kernel Global Integration Gate en PASS.
- [ ] Public Reactivation Gate en PASS.
- [ ] Revisión visual en escritorio, tableta y móvil.
- [x] Sustitución verificada de `miguel.jpg`.
- [ ] Enlaces internos y externos críticos probados.
- [ ] Navegación y formularios principales probados.
- [x] Copia de los SHA actuales de `main` y `gh-pages`.
- [x] Plan de reversión revisado y ramas de respaldo creadas.
- [ ] Aprobación explícita del usuario para activar.

## Versiones de respaldo

- `main`: `ddbbae2abd68d1ecb35165b0721116c779fe7375`
  - Rama: `rollback/main-pre-reactivation-20260725`
- `gh-pages`: `0a86f78a26ebbffe4862208ab6f5ee627b973366`
  - Rama: `rollback/gh-pages-pre-reactivation-20260725`

## Fotografía institucional

La fotografía actualizada de Miguel está disponible en la ruta utilizada por el sitio:

`miguel.jpg`

El archivo fue validado como una imagen binaria legible. La comprobación definitiva de encuadre y visualización permanece incluida en la revisión manual previa a producción.

## Secuencia de activación

1. Confirmar que los tres controles automatizados estén en PASS.
2. Completar la revisión visual y funcional de la candidata.
3. Obtener la aprobación explícita para activar.
4. Fusionar la candidata aprobada hacia `main`.
5. Ejecutar los controles posteriores a la fusión.
6. Actualizar `gh-pages` solamente cuando `main` esté validada.
7. Comprobar la página pública y las nueve rutas principales.
8. Verificar recursos estáticos, módulos dinámicos y navegación.
9. Mantener disponibles las ramas y los SHA de reversión.

## Reversión

Ante un fallo crítico, restaurar las referencias de `main` y `gh-pages` a los SHA registrados antes de la activación y volver a ejecutar las verificaciones públicas.
