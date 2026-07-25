# Auditoría visual y funcional del módulo Equipo

Fecha: 2026-07-25  
Rama: `fase-1l-team-preview-integration`  
PR: `#19`  
Estado: revisión técnica, visual y funcional superada; no desplegado

## Entorno validado

- Fuente de datos: `core/data/researchers.v2.json`.
- Renderizador: `core/modules/team/team-renderer.mjs`.
- Estilos integrados: `core/modules/team/team-integration.css`.
- Página de integración: `equipo.html`.
- Quality Gate: ejecución `30159392321`, resultado `success`.
- Artefacto: `kernel-team-controlled-preview`.

## Comprobaciones automáticas

| Comprobación | Escritorio | Móvil |
|---|---:|---:|
| Tarjetas renderizadas | 9 | 9 |
| Fotografías renderizadas | 9 | 9 |
| Fotografías rotas | 0 | 0 |
| Perfiles internacionales | 2 | 2 |
| Perfiles con métricas bibliográficas | 2 | 2 |
| Perfiles con formación y experiencia | 9 | 9 |
| Columnas calculadas | 3 | 1 |
| Errores de consola o página | 0 | 0 |

## Prueba funcional de filtros

La lógica usada en `equipo.html` fue ejecutada en navegador con el catálogo v2 completo.

| Acción | Resultado esperado | Resultado obtenido |
|---|---:|---:|
| Carga inicial | 9 perfiles | 9 perfiles |
| Filtro España | 2 perfiles | 2 perfiles |
| País mostrado después de filtrar España | Solo España | Solo España |
| `aria-pressed` del filtro España | `true` | `true` |
| Filtro República Dominicana | 7 perfiles | 7 perfiles |
| Regreso a Todos | 9 perfiles | 9 perfiles |
| Errores de consola | 0 | 0 |

## Resultado visual

### Escritorio

- La cuadrícula se distribuye en tres columnas.
- Los nueve perfiles forman tres filas completas.
- La jerarquía visual distingue fotografía, nombre, grado, rol, biografía, afiliaciones, áreas, métricas y enlaces.
- Alicia Cordero y Juan Ramón Torregrosa utilizan una marca dorada y una etiqueta de miembro internacional.
- Las métricas de ambos perfiles internacionales permanecen acompañadas por fuente y fecha.
- Las tarjetas mantienen alturas coherentes por fila y los enlaces permanecen en la zona inferior.

### Móvil

- La cuadrícula cambia a una sola columna.
- No existe desplazamiento horizontal.
- Los nombres, etiquetas, áreas y botones permanecen legibles.
- Las nueve fotografías cargan correctamente después del recorrido completo de la página.
- Los bloques de métricas cambian a una sola columna.
- Las secciones de formación y experiencia permanecen plegadas por defecto para reducir longitud visual.

## Accesibilidad y comportamiento

- Las imágenes incluyen texto alternativo.
- Los filtros utilizan `aria-pressed` y actualizan correctamente su estado.
- La cuadrícula utiliza `aria-live` y `aria-busy` durante la carga.
- Los enlaces externos incluyen `noopener noreferrer`.
- La hoja de estilos contempla `prefers-reduced-motion`.
- Cada investigador conserva una ancla estable mediante su identificador.
- La página muestra un estado vacío explícito si un filtro no produce resultados.

## Riesgos no bloqueantes

1. La fotografía fuente de Antmel Rodríguez tiene un recorte más estrecho y menor uniformidad visual que el resto. No es un fallo del renderizador; podrá sustituirse posteriormente por la imagen de medio cuerpo preparada para su perfil.
2. Los textos biográficos principales permanecen en español dentro de esta integración. La traducción completa del contenido individual corresponde a la activación posterior de internacionalización estructurada.
3. La página es extensa en móvil debido a los nueve perfiles. El uso de detalles plegables evita que formación y experiencia amplíen innecesariamente cada tarjeta.

## Decisión técnica

La integración cumple los criterios técnicos, visuales, funcionales y de contenido para ser revisada por el Grupo El Kernel.

Esto no autoriza todavía:

- fusionar el PR;
- modificar `main`;
- modificar `gh-pages`;
- desplegar la nueva página pública.

## Resultado

**APROBADO PARA REVISIÓN DEL USUARIO — NO ACTIVO EN PRODUCCIÓN.**
