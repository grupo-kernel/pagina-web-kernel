import fs from 'node:fs/promises';
import process from 'node:process';

const DOI_PATTERN = /^10\.\d{4,9}\/\S+$/i;
const QUARTILES = new Set(['Q1', 'Q2', 'Q3', 'Q4']);
const SYSTEMS = new Set(['JCR', 'SJR', 'CiteScore']);

const errors = [];
const warnings = [];
const checks = [];
const check = (name, ok, detail = '') => checks.push({ name, ok, detail });
const fail = message => errors.push(message);
const warn = message => warnings.push(message);
const duplicates = values => [...new Set(values.filter((value, index) => value && values.indexOf(value) !== index))];

const researchers = JSON.parse(await fs.readFile('core/data/researchers.v2.json', 'utf8'));
const publications = JSON.parse(await fs.readFile('core/data/publications.v2.json', 'utf8'));
const researcherIds = new Set(researchers.researchers.map(item => item.id));
const records = Array.isArray(publications.records) ? publications.records : [];

check('Esquema de publicaciones v2', publications.schema_version === 2, `schema=${publications.schema_version}`);
if (publications.schema_version !== 2) fail('La base de publicaciones debe usar schema_version 2.');

check('Catálogo candidato desactivado', publications.status === 'candidate-not-active', publications.status);
if (publications.status !== 'candidate-not-active') fail('El catálogo v2 no debe estar activo durante la migración.');

const ids = records.map(item => item.id);
const repeatedIds = duplicates(ids);
check('Identificadores bibliográficos únicos', repeatedIds.length === 0, repeatedIds.join(', '));
if (repeatedIds.length) fail(`Registros duplicados: ${repeatedIds.join(', ')}.`);

const dois = records.map(item => item.identifiers?.doi).filter(Boolean);
const repeatedDois = duplicates(dois);
check('DOI únicos', repeatedDois.length === 0, repeatedDois.join(', '));
if (repeatedDois.length) fail(`DOI duplicados: ${repeatedDois.join(', ')}.`);

for (const [index, record] of records.entries()) {
  const label = record.id || `registro-${index}`;
  if (!record.title?.trim()) fail(`${label}: falta título.`);
  if (!record.type) fail(`${label}: falta tipo documental.`);
  if (!record.bibliographic?.year || !Number.isInteger(record.bibliographic.year)) fail(`${label}: año inválido.`);
  if (!record.bibliographic?.journal) warn(`${label}: revista no registrada.`);
  if (!Array.isArray(record.authors) || !record.authors.length) fail(`${label}: faltan autores.`);
  if (!Array.isArray(record.researcher_ids) || !record.researcher_ids.length) warn(`${label}: no está vinculado a un miembro del grupo.`);

  const unknownResearchers = (record.researcher_ids || []).filter(id => !researcherIds.has(id));
  if (unknownResearchers.length) fail(`${label}: investigadores desconocidos: ${unknownResearchers.join(', ')}.`);

  const doi = record.identifiers?.doi;
  if (doi && !DOI_PATTERN.test(doi)) fail(`${label}: DOI inválido (${doi}).`);
  if (!doi && !record.identifiers?.openalex) warn(`${label}: no tiene DOI ni OpenAlex.`);
  if (doi && record.identifiers?.url !== `https://doi.org/${doi}`) warn(`${label}: URL DOI no canónica.`);

  const date = record.bibliographic?.publication_date;
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) fail(`${label}: fecha inválida (${date}).`);
  if (date && Number(date.slice(0, 4)) !== record.bibliographic.year) fail(`${label}: fecha y año no coinciden.`);

  const quartile = record.metrics?.quartile;
  if (quartile) {
    if (!QUARTILES.has(quartile.value)) fail(`${label}: cuartil inválido (${quartile.value}).`);
    if (!SYSTEMS.has(quartile.system)) warn(`${label}: sistema de cuartil no normalizado (${quartile.system}).`);
    if (!quartile.metric_year) fail(`${label}: falta año de la métrica de cuartil.`);
    if (!quartile.source_url) warn(`${label}: cuartil sin enlace de fuente.`);
  }
}

const declared = publications.summary?.unique_records;
check('Resumen coincide con registros', declared === records.length, `${declared}/${records.length}`);
if (declared !== records.length) fail('El resumen de publicaciones no coincide con la cantidad real de registros.');

const linkedResearchers = new Set(records.flatMap(item => item.researcher_ids || [])).size;
check('Investigadores vinculados coherentes', publications.summary?.researchers_with_records === linkedResearchers, `${publications.summary?.researchers_with_records}/${linkedResearchers}`);
if (publications.summary?.researchers_with_records !== linkedResearchers) fail('El total de investigadores con publicaciones no coincide.');

console.log('\n=== VALIDACIÓN DE PUBLICACIONES V2 ===');
checks.forEach(item => console.log(`${item.ok ? '✓' : '✗'} ${item.name}${item.detail ? ` — ${item.detail}` : ''}`));
if (warnings.length) { console.log('\nADVERTENCIAS'); warnings.forEach(item => console.log(`- ${item}`)); }
if (errors.length) { console.log('\nERRORES CRÍTICOS'); errors.forEach(item => console.log(`- ${item}`)); }
console.log(`\nResultado: ${errors.length ? 'FAIL' : 'PASS'} | errores=${errors.length} | advertencias=${warnings.length}`);
process.exit(errors.length ? 1 : 0);
