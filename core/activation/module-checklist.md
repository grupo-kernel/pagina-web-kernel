# Checklist de activación por módulo

Use esta lista antes de conectar cualquier módulo del Kernel Core a la plataforma visible.

## Estado actual del módulo Equipo

- Módulo: `team`
- Estado: `preview-ready`
- Producción: no activo
- Renderizador: `core/modules/team/team-renderer.mjs`
- Vista previa: `core/modules/team/team-preview.html`
- Validador: `core/validate-team-module.mjs`

## Checklist técnico

- [x] El cambio se hizo en una rama distinta de `main` y `gh-pages`.
- [ ] El Quality Gate ejecuta sin errores críticos.
- [ ] `node core/validate-parity.mjs` devuelve `PASS`.
- [x] El módulo candidato se alimenta únicamente desde fuentes Core.
- [x] No se eliminó ningún archivo de la plataforma pública.
- [x] No se reemplazó un patch funcional sin alternativa.
- [x] El módulo puede revertirse sin tocar producción.

## Checklist visual

- [ ] La página carga en escritorio.
- [ ] La página carga en móvil.
- [ ] El menú no se cierra al bajar el cursor.
- [ ] El botón ES/EN conserva el idioma elegido.
- [x] No hay tarjetas vacías en el HTML generado.
- [ ] No hay enlaces rotos visibles.
- [x] No hay textos técnicos sin formato en la vista previa del Equipo.

## Checklist de contenido

- [x] Se conservan los nueve investigadores.
- [x] No desaparecen Marino Brito, Marc-Kelly ni José Alberto.
- [x] Alicia y Juan Ramón aparecen como miembros internacionales.
- [ ] Las publicaciones muestran DOI cuando corresponde.
- [ ] Los proyectos distinguen aprobados y propuestas.
- [ ] Los servicios no prometen entregables no aprobados.
- [ ] Las noticias internas no se publican por error.

## Checklist de reversión

- [x] Identificar el commit previo estable.
- [x] Confirmar que el módulo anterior sigue disponible.
- [x] Documentar el archivo que controla la activación.
- [ ] Probar el sitio después de revertir en una rama temporal.

## Resultado

Solo debe avanzarse a `gh-pages` cuando todos los puntos aplicables estén marcados. Para la Fase 1L, el módulo Equipo queda listo para revisión de vista previa, pero todavía no debe conectarse a producción.
