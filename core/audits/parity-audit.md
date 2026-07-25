# Fase 1K — Auditoría de paridad

Fecha: 2026-07-25  
Rama: `hito-1-kernel-core`  
Estado: auditoría no destructiva

## Objetivo

Antes de activar cualquier módulo del Kernel Core, se debe comprobar que las fuentes candidatas no pierden información esencial respecto a la plataforma actual.

Esta fase no cambia la web pública. Solo establece criterios automáticos para comparar el sistema actual con la arquitectura nueva.

## Módulos comparados

| Módulo | Fuente actual | Fuente candidata | Criterio de paridad |
|---|---|---|---|
| Investigadores | `data/researchers.json` | `core/data/researchers.v2.json` | Deben existir los 9 miembros y conservarse los 9 IDs. |
| Publicaciones | `data/publications.json` | `core/data/publications.v2.json` | La migración debe leer todos los registros y conservar el total único declarado. |
| Proyectos | información curada en el sitio | `core/data/projects.v2.json` | Deben mantenerse 58 participaciones, 10 proyectos destacados y propuestas separadas. |
| Servicios | catálogo actual y capacidades descritas | `core/data/services.v2.json` | Deben existir 6 servicios candidatos con categorías válidas. |
| Noticias | noticias actuales y actividades confirmadas | `core/data/news.v2.json` | Deben existir 3 registros iniciales trazables. |
| Relaciones | no existe índice central | `core/data/relations.v1.json` | Deben estar representados los 9 investigadores. |

## Reglas bloqueantes

La activación de un módulo debe detenerse si ocurre cualquiera de estos casos:

1. Se pierde un investigador.
2. Se elimina un ID existente.
3. Se altera el total de miembros.
4. El catálogo bibliográfico candidato no lee todos los registros fuente.
5. El total único de publicaciones deja de coincidir con el resumen actual.
6. Un proyecto, servicio o noticia apunta a un investigador inexistente.
7. Kernel Core aparece como activado antes de la fase correspondiente.
8. Las traducciones estructuradas tienen claves desbalanceadas.
9. El índice de relaciones no cubre los nueve investigadores.

## Criterio de salida

La Fase 1K se considera lista cuando `core/validate-parity.mjs` devuelve `PASS` después de ejecutar:

```bash
node core/migrate-publications-v2.mjs
node core/build-relations-index.mjs
node core/validate-parity.mjs
```

## Próximo paso después de la paridad

Si la paridad se mantiene, la activación debe comenzar por el módulo menos riesgoso:

1. Equipo y perfiles de investigadores.
2. Formación académica.
3. Publicaciones.
4. Proyectos.
5. Servicios.
6. Noticias.

Cada activación debe quedar protegida por un interruptor de configuración y una ruta de reversión.
