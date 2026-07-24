# Sincronización de publicaciones

Esta integración convierte las fichas de investigadores y las publicaciones del Grupo El Kernel en datos reutilizables por la web.

## Archivos principales

- `data/researchers.json`: registro único de miembros, perfiles, ORCID y métricas institucionales.
- `data/publications.json`: catálogo deduplicado de artículos.
- `data/journal_quartiles.json`: cuartiles verificados con sistema, categoría, año y fuente.
- `scripts/sync_publications.py`: importación desde Crossref, ORCID y OpenAlex.
- `scripts/validate_data.py`: controles de integridad.
- `.github/workflows/sync-publications.yml`: ejecución semanal y manual.

## Criterio de conteo

1. El DOI normalizado es la clave principal.
2. Si falta DOI, se utiliza el identificador OpenAlex.
3. Si tampoco existe, se usa título normalizado más año.
4. Las coautorías se almacenan una sola vez y se relacionan con todos los miembros correspondientes.
5. Las cantidades de los perfiles institucionales se muestran separadas del número de registros ya importados al catálogo.

## Cuartiles

Un cuartil solo se publica cuando están disponibles:

- sistema bibliométrico (`JCR`, `SJR` o `CiteScore`);
- categoría;
- año de la métrica;
- enlace a la fuente.

Cuando falta alguno de estos elementos, la interfaz muestra `Cuartil pendiente de verificación`. El cuartil pertenece a la revista en una categoría y año concretos; no es una propiedad permanente del artículo.

## Fuentes

### Crossref

Se consulta sin credenciales mediante el filtro ORCID. El correo de contacto puede configurarse con `CROSSREF_MAILTO`.

### ORCID

La consulta directa es opcional y requiere guardar un token público de ORCID como secreto del repositorio:

```text
ORCID_ACCESS_TOKEN
```

### OpenAlex

La consulta es opcional y requiere:

```text
OPENALEX_API_KEY
```

El script funciona sin estos dos secretos y mantiene el catálogo existente si las fuentes remotas no están disponibles.

## Ejecución local

```bash
python scripts/validate_data.py
python scripts/sync_publications.py
python scripts/validate_data.py
```

Para evitar cambios accidentales, revise después:

```bash
git diff -- data/publications.json
```

## Ejecución en GitHub

El flujo se ejecuta:

- manualmente mediante `workflow_dispatch`;
- cada lunes;
- cuando cambian los datos de investigadores, el catálogo de cuartiles o los scripts.

El flujo valida el JSON, sincroniza los artículos, vuelve a validar y solo crea un commit cuando `data/publications.json` cambia.

## Límites conocidos

- Crossref solo recupera registros donde el ORCID fue depositado correctamente.
- ORCID depende de la actualización pública que realice cada investigador.
- OpenAlex puede proponer asociaciones que deben revisarse.
- Google Scholar no se raspa automáticamente.
- Las métricas y cuartiles cambian con el tiempo; por ello siempre se conserva fecha y procedencia.
