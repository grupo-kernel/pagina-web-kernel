# Checklist de activación por módulo

Use esta lista antes de conectar cualquier módulo del Kernel Core a la plataforma visible.

## Checklist técnico

- [ ] El cambio se hizo en una rama distinta de `main` y `gh-pages`.
- [ ] El Quality Gate ejecuta sin errores críticos.
- [ ] `node core/validate-parity.mjs` devuelve `PASS`.
- [ ] El módulo candidato se alimenta únicamente desde fuentes Core.
- [ ] No se eliminó ningún archivo de la plataforma pública.
- [ ] No se reemplazó un patch funcional sin alternativa.
- [ ] El módulo puede revertirse en un solo commit.

## Checklist visual

- [ ] La página carga en escritorio.
- [ ] La página carga en móvil.
- [ ] El menú no se cierra al bajar el cursor.
- [ ] El botón ES/EN conserva el idioma elegido.
- [ ] No hay tarjetas vacías.
- [ ] No hay enlaces rotos visibles.
- [ ] No hay textos técnicos sin formato.

## Checklist de contenido

- [ ] Se conservan los nueve investigadores.
- [ ] No desaparecen Marino Brito, Marc-Kelly ni José Alberto.
- [ ] Alicia y Juan Ramón aparecen como miembros internacionales.
- [ ] Las publicaciones muestran DOI cuando corresponde.
- [ ] Los proyectos distinguen aprobados y propuestas.
- [ ] Los servicios no prometen entregables no aprobados.
- [ ] Las noticias internas no se publican por error.

## Checklist de reversión

- [ ] Identificar el commit previo estable.
- [ ] Confirmar que el módulo anterior sigue disponible.
- [ ] Documentar el archivo que controla la activación.
- [ ] Probar el sitio después de revertir en una rama temporal.

## Resultado

Solo debe avanzarse a `gh-pages` cuando todos los puntos aplicables estén marcados.
