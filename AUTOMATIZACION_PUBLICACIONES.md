# Automatización del catálogo de publicaciones

## Objetivo

El catálogo de El Kernel separa los datos de la presentación visual. Los perfiles se almacenan en `data/researchers.json` y los artículos en `data/publications.json`. Las páginas HTML leen esos archivos y calculan automáticamente los contadores de miembros, publicaciones y cuartiles verificados.

La primera fase está configurada para la **Dra. Alicia Cordero Barbero** y el **Dr. Juan Ramón Torregrosa Sánchez**. Ambos tienen `syncPublications: true` y un ORCID registrado en el archivo de investigadores.

## Fuentes y flujo

1. **Crossref por ORCID**: el script consulta el filtro exacto de ORCID y recupera artículos de revista con DOI.
2. **ORCID público, opcional**: cuando existen credenciales, se leen las obras públicas del registro para descubrir DOI que no estén asociados al ORCID en Crossref.
3. **Normalización**: los DOI se convierten a minúsculas, se eliminan prefijos y se deduplican.
4. **Fusión conservadora**: los datos curados manualmente no son reemplazados por campos vacíos o menos precisos.
5. **Cuartiles**: solo se aplican entradas exactas de `data/journal-quartiles.json`, identificadas por revista y año.
6. **Revisión**: GitHub Actions abre o actualiza una solicitud de cambios; no publica directamente en `main`.

Google Scholar no se consulta mediante scraping. Su cobertura puede usarse como referencia humana, pero no como dependencia automática del sitio.

## Archivos principales

- `data/researchers.json`: miembros, afiliaciones, ORCID, perfiles y activación de sincronización.
- `data/publications.json`: catálogo bibliográfico visible.
- `data/journal-quartiles.json`: mapa curado de cuartiles con fuente, año, categoría y evidencia.
- `data/excluded-publications.json`: DOI o títulos que no deben incorporarse de nuevo.
- `scripts/sync_publications.py`: sincronización y deduplicación.
- `scripts/validate_data.py`: validación estructural y académica.
- `.github/workflows/update-publications.yml`: ejecución semanal y manual.

## Configuración en GitHub

### Variable recomendada

En **Settings → Secrets and variables → Actions → Variables**:

- `CROSSREF_MAILTO`: correo de contacto usado para el *polite pool* de Crossref.

Si no se define, el flujo usa el correo institucional público configurado en el script.

### Secretos opcionales de ORCID

Para ampliar la cobertura con la API pública de ORCID, registrar un cliente de API pública y guardar:

- `ORCID_CLIENT_ID`
- `ORCID_CLIENT_SECRET`

Sin estos secretos, la sincronización continúa funcionando mediante Crossref por ORCID.

Para que el flujo pueda abrir solicitudes de cambios, en **Settings → Actions → General → Workflow permissions** debe estar habilitada la opción que permite a GitHub Actions crear y aprobar *pull requests*.

## Ejecución local

```bash
python scripts/validate_data.py
python scripts/sync_publications.py --dry-run --crossref-only
```

Para escribir los cambios:

```bash
python scripts/sync_publications.py
python scripts/validate_data.py
```

## Incorporar otro investigador

1. Añadir su perfil a `data/researchers.json`.
2. Incluir un ORCID válido.
3. Establecer `syncPublications` en `true`.
4. Ejecutar la sincronización y revisar las coincidencias.
5. Añadir a `data/excluded-publications.json` cualquier falso positivo.

## Política de cuartiles

El cuartil depende de la fuente, el año y la categoría temática. Por esa razón:

- `verified`: contiene fuente, año, categoría y enlace de evidencia.
- `provisional`: dato razonable pendiente de ratificación documental.
- `legacy`: valor heredado del sitio anterior que requiere revisión.
- `pending`: no se muestra un cuartil numérico hasta obtener evidencia suficiente.

Nunca se infiere un cuartil a partir del nombre de la revista ni se reutiliza automáticamente el cuartil de otro año.
