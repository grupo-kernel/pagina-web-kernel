# Fase 2A — Reactivación pública

## Estado

Candidata, no activa en producción.

## Controles previos obligatorios

- [ ] Kernel Quality Gate en PASS.
- [ ] Kernel Global Integration Gate en PASS.
- [ ] Public Reactivation Gate en PASS.
- [ ] Revisión visual en escritorio, tableta y móvil.
- [ ] Sustitución verificada de `miguel.jpg`.
- [ ] Enlaces internos y externos críticos probados.
- [ ] Navegación y formularios principales probados.
- [ ] Copia de los SHA actuales de `main` y `gh-pages`.
- [ ] Plan de reversión revisado.
- [ ] Aprobación explícita del usuario para activar.

## Secuencia de activación

1. Registrar los SHA previos de `main` y `gh-pages`.
2. Fusionar la candidata aprobada hacia `main`.
3. Ejecutar los controles posteriores a la fusión.
4. Actualizar `gh-pages` solamente cuando `main` esté validada.
5. Comprobar la página pública y las nueve rutas principales.
6. Verificar recursos estáticos, módulos dinámicos y navegación.
7. Mantener disponible la reversión a los SHA previos.

## Reversión

Ante un fallo crítico, restaurar las referencias de `main` y `gh-pages` a los SHA registrados antes de la activación y volver a ejecutar las verificaciones públicas.
