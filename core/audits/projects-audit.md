# Auditoría de proyectos

Fecha: 2026-07-25
Estado: migración no destructiva
Rama: `hito-1-kernel-core`

## Resultado

- Participaciones institucionales declaradas: 58.
- Proyectos aprobados destacados individualizados: 10.
- Participaciones adicionales todavía no individualizadas: 48.
- Propuestas bajo evaluación declaradas: 2.
- Propuestas actualmente individualizadas en la candidata: 1.
- Plataforma pública modificada: no.

## Criterio de conteo

Una participación corresponde a la presencia de un investigador en un proyecto. No debe interpretarse automáticamente como un proyecto único. Un mismo proyecto puede producir dos participaciones cuando Alicia Cordero y Juan Ramón Torregrosa aparecen simultáneamente.

## Decisiones de normalización

1. Separar `approved_projects` y `proposals`.
2. Mantener identificadores estables y orden explícito.
3. Relacionar integrantes mediante `member_ids`.
4. No inventar códigos, fechas, entidades financiadoras ni cuantías.
5. Usar `null` y `pending-source-consolidation` cuando la evidencia aún no está consolidada.
6. Registrar la propuesta FONDOCyT del Grupo Kernel de forma independiente.
7. Conservar la cifra 58 como métrica institucional, no como cantidad de proyectos únicos.

## Pendientes documentales

- Consolidar las fuentes institucionales de los diez proyectos destacados.
- Incorporar códigos oficiales, fechas, instituciones, financiación y enlaces verificables.
- Individualizar las 48 participaciones adicionales.
- Identificar y documentar la segunda propuesta bajo evaluación.

## Criterio de activación

La candidata solo podrá conectarse a la plataforma cuando:

- conserve los diez proyectos destacados;
- todos los `member_ids` existan en la base de investigadores;
- no haya identificadores duplicados;
- las fechas y cuantías, cuando existan, sean válidas;
- la interfaz pública reproduzca al menos el contenido actual;
- exista una reversión inmediata a la fuente anterior.
