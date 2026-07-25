# Plan de activación gradual del Kernel Core

Fecha: 2026-07-25  
Estado: propuesta operativa  
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

## Orden recomendado

### 1. Equipo y perfiles

Riesgo: bajo.  
Motivo: los nueve investigadores ya están normalizados.  
Activación esperada: reemplazar la fuente de datos de Equipo por `core/data/researchers.v2.json`.

Criterios:

- aparecen los nueve miembros;
- no desaparecen Marino, Marc-Kelly ni José Alberto;
- Alicia y Juan Ramón aparecen como miembros internacionales;
- se mantienen fotografías y enlaces;
- se conserva el conteo de nueve integrantes.

Reversión:

- volver a leer `data/researchers.json`;
- desactivar el import del módulo Core.

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

## Módulo candidato para la próxima fase

El primer módulo que debe activarse es **Equipo y perfiles**.

Es el más visible para la nueva cara institucional y, a la vez, el de menor riesgo porque la base de investigadores ya fue auditada, normalizada y validada.
