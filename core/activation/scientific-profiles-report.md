# Fase 1N — Perfiles científicos

Estado: **vista previa controlada, no activa en producción**.

## Alcance

- Directorio científico para los nueve investigadores públicos.
- Fuente única: `core/data/researchers.v2.json`.
- Navegación por investigador.
- Perfil, líneas de investigación, afiliaciones, métricas disponibles y enlaces externos.
- Diseño responsive para escritorio y móvil.

## Seguridad

- Rama de trabajo: `fase-1n-scientific-profiles-preview`.
- Base: `hito-1-kernel-core`.
- No modifica `main` ni `gh-pages`.
- No activa rutas de producción.

## Datos pendientes

Los perfiles que todavía no tienen métricas o enlaces bibliométricos consolidados muestran un estado explícito de información pendiente. No se inventan indicadores.

## Criterios antes de fusionar

- [ ] Validador en PASS.
- [ ] Revisión visual en escritorio.
- [ ] Revisión visual en móvil.
- [ ] Verificación de los nueve perfiles.
- [ ] Aprobación explícita del usuario.
