# Plan de activación gradual del Kernel Core

Fecha: 2026-07-25  
Estado: activación controlada en curso  
Rama: `hito-1-kernel-core`

## Principio de activación

La activación del Kernel Core no debe realizarse de forma global. Cada módulo se activará por separado, con validación previa y reversión documentada.

## Condiciones generales

Antes de activar cualquier módulo debe cumplirse lo siguiente:

- `core/manifest.json` debe mantener `activation.enabled=false` hasta el momento exacto de prueba controlada.
- El Quality Gate debe pasar sin errores críticos.
- La prueba de paridad debe devolver `PASS`.
- Debe existir un cambio pequeño, revisable y reversible.
- El módulo anterior debe permanecer estable.

## Fase 1L: Equipo y perfiles

Estado actual: **preview-ready / no activo en producción**.

Se agregó un renderizador independiente para Equipo:

- `core/modules/team/team-renderer.mjs`
- `core/modules/team/team-preview.html`
- `core/modules/team/team-preview.css`
- `core/validate-team-module.mjs`

La vista previa utiliza `core/data/researchers.v2.json`, pero no reemplaza todavía el componente público de la web.

### Criterios obligatorios de la Fase 1L

- aparecen exactamente los nueve miembros;
- no desaparecen Marino Brito Guillén, Marc-Kelly Jean Philippe Jean ni José Alberto Reyes Reyes;
- Alicia Cordero y Juan Ramón Torregrosa aparecen como miembros internacionales;
- se mantienen fotografía actual, correo y enlaces académicos disponibles;
- el orden institucional es el aprobado;
- se genera vista en español e inglés;
- `activation.enabled` permanece en `false`;
- `activation.modules.team.active` permanece en `false`;
- `activation.modules.team.status` debe ser `preview-ready`.

### Reversión de la Fase 1L

La reversión consiste en:

1. no importar `core/modules/team/team-renderer.mjs` desde ningún componente público;
2. mantener el componente actual de Equipo;
3. dejar `activation.modules.team.active=false`;
4. eliminar la referencia del validador si fuera necesario.

## Orden recomendado restante

### 2. Formación académica

Riesgo: bajo-medio.  
Motivo: el panel depende de selección lateral y detalle dinámico.

Criterios:

- aparecen los nueve investigadores;
- métricas recalculadas correctamente;
- cada ficha abre sin romper el panel derecho.

### 3. Publicaciones

Riesgo: medio.  
Motivo: involucra DOI, deduplicación, cuartiles y ordenamiento.

Criterios:

- total de registros únicos preservado;
- DOI canónicos;
- autores relacionados correctamente;
- panel de publicaciones por investigador sigue funcionando.

### 4. Proyectos

Riesgo: medio.  
Motivo: aún hay fuentes pendientes para varios proyectos destacados.

Criterios:

- 58 participaciones presentadas como participaciones, no como proyectos únicos;
- 10 proyectos destacados;
- propuestas en evaluación separadas de aprobados.

### 5. Servicios

Riesgo: medio.  
Motivo: impacto comercial y de contacto.

Criterios:

- categorías correctas;
- servicios bilingües;
- CTA hacia diagnóstico o laboratorio;
- investigadores responsables válidos.

### 6. Noticias

Riesgo: bajo-medio.  
Motivo: algunos recursos multimedia todavía no están consolidados.

Criterios:

- solo aparecen noticias públicas;
- borradores internos no se muestran;
- fechas y relaciones correctas.

## Estrategia de despliegue

1. Activar un módulo en una rama temporal.
2. Ejecutar Quality Gate.
3. Probar visualmente en navegador.
4. Publicar en `gh-pages` solo si no hay regresiones.
5. Mantener un commit de reversión identificado.

## Próximo paso después de la Fase 1L

Preparar la conexión del módulo Equipo con el componente público, pero solo en una rama de prueba visual. No debe publicarse en `gh-pages` hasta que la vista previa se revise y se confirme que no hay pérdida de perfiles, enlaces, fotografías ni traducciones.
