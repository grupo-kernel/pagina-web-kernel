# Auditoría de publicaciones — Fase 1E

## Alcance

Fuente actual auditada: `data/publications.json`.

La fuente pública permanece intacta y continúa siendo la utilizada por el sitio. La migración v2 se genera únicamente dentro de la rama `hito-1-kernel-core`.

## Estado observado

- Esquema actual: versión 1.
- Registros únicos declarados: 162.
- Investigadores con registros declarados: 7.
- Año más reciente declarado: 2026.
- Fuentes de datos: Crossref, ORCID/Crossref y curaduría manual.
- Método de conteo: DOI normalizado; respaldo por OpenAlex o título normalizado más año.

## Inconsistencias estructurales

1. Los datos bibliográficos, la procedencia de importación y las métricas se encuentran en el mismo nivel.
2. El DOI puede aparecer como identificador y también dentro de la URL.
3. El cuartil está representado como objeto opcional, pero no existe una capa general de métricas.
4. Los autores se almacenan como nombres libres, mientras que los miembros del grupo se relacionan mediante `researcher_ids`.
5. No existe un identificador interno explícito e inmutable para todos los registros.
6. Volumen, número, páginas y número de artículo no aparecen uniformemente.
7. Las métricas globales de perfiles están mezcladas con el catálogo bibliográfico.
8. La fuente actual es generada automáticamente y no debe editarse a mano.

## Decisiones de normalización

La versión 2:

- crea un identificador interno basado en DOI normalizado;
- utiliza OpenAlex o título y año como respaldo cuando falta DOI;
- separa `bibliographic`, `identifiers`, `provenance` y `metrics`;
- normaliza DOI en minúsculas y sin prefijo URL;
- conserva títulos oficiales y nombres de revistas;
- elimina duplicados solo durante la generación de la candidata;
- mantiene autores externos como texto;
- valida que cada `researcher_id` corresponda a uno de los nueve miembros;
- mantiene las métricas de cuartil con sistema, categoría, año y fuente;
- genera un informe separado de duplicados y advertencias.

## Archivos de la fase

- `core/migrate-publications-v2.mjs`
- `core/data/publications.v2.json` — generado automáticamente, no editado a mano.
- `core/audits/publications-migration-report.json` — generado automáticamente.
- `core/validate-publications-v2.mjs`

## Condiciones para activación

La candidata no podrá sustituir la fuente pública hasta que:

1. el script de migración termine sin errores;
2. el número de registros sea coherente con la fuente;
3. no existan DOI ni identificadores duplicados;
4. todos los `researcher_ids` sean válidos;
5. las fechas y años sean coherentes;
6. las métricas de cuartil tengan sistema y año identificables;
7. la página de publicaciones reproduzca el catálogo actual;
8. exista una prueba visual y funcional del módulo;
9. se documente un procedimiento de reversión.

## Reversión

La fuente activa seguirá siendo `data/publications.json`. Para revertir cualquier prueba futura bastará con retirar la importación del módulo v2 y conservar el renderizador actual.
