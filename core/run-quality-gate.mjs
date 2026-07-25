import process from 'node:process';
import { check, duplicates, errors, exists, fail, loadJson, warn, warnings, checks } from './quality-gate-utils.mjs';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const orcidPattern = /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/;

const config = await loadJson('core/quality-gate.config.json');
const manifest = config && await loadJson(config.sources.manifest);
const data = config && await loadJson(config.sources.researchers);

if (manifest) {
  const inactive = manifest.activation?.enabled === false;
  check('Kernel Core desactivado', inactive, `enabled=${manifest.activation?.enabled}`);
  if (!inactive) fail('Kernel Core debe permanecer desactivado durante la migración.');
}

if (data && config) {
  const researchers = Array.isArray(data.researchers) ? data.researchers : [];
  const expected = config.expected.researcher_count;
  check('Cantidad de investigadores', researchers.length === expected, `${researchers.length}/${expected}`);
  if (researchers.length !== expected) fail(`Se esperaban ${expected} investigadores.`);

  const ids = researchers.map(item => item.id);
  const duplicateIds = duplicates(ids);
  check('IDs únicos', duplicateIds.length === 0, duplicateIds.join(', '));
  if (duplicateIds.length) fail(`IDs duplicados: ${duplicateIds.join(', ')}.`);

  const missing = config.expected.researcher_ids.filter(id => !ids.includes(id));
  check('Nueve IDs aprobados presentes', missing.length === 0, missing.join(', '));
  if (missing.length) fail(`Faltan IDs aprobados: ${missing.join(', ')}.`);

  const repeatedOrcids = duplicates(researchers.map(item => item.profiles?.orcid));
  check('ORCID únicos', repeatedOrcids.length === 0, repeatedOrcids.join(', '));
  if (repeatedOrcids.length) fail(`ORCID duplicados: ${repeatedOrcids.join(', ')}.`);

  for (const researcher of researchers) {
    const id = researcher.id || 'sin-id';
    const email = researcher.contact?.email;
    if (!researcher.name) fail(`${id}: falta nombre.`);
    if (!Number.isInteger(researcher.order)) fail(`${id}: orden inválido.`);
    if (!email || !emailPattern.test(email)) fail(`${id}: correo inválido.`);
    if (!researcher.areas?.length) fail(`${id}: faltan áreas.`);
    if (!researcher.affiliations?.length) fail(`${id}: faltan afiliaciones.`);
    if (!researcher.formation?.length) fail(`${id}: falta formación.`);
    if (!researcher.experience?.length) fail(`${id}: falta experiencia.`);
    const orcid = researcher.profiles?.orcid;
    if (orcid && !orcidPattern.test(orcid)) fail(`${id}: ORCID inválido.`);
    if (!orcid) warn(`${id}: ORCID no registrado.`);
    if (!researcher.profiles?.scholar) warn(`${id}: Google Scholar no registrado.`);
    if (!researcher.profiles?.researchgate) warn(`${id}: ResearchGate no registrado.`);
    if (researcher.image?.current && !(await exists(researcher.image.current))) warn(`${id}: falta imagen actual ${researcher.image.current}.`);
    if (researcher.image?.canonical && !(await exists(researcher.image.canonical))) warn(`${id}: falta imagen canónica ${researcher.image.canonical}.`);
  }

  const repeatedOrders = duplicates(researchers.map(item => item.order));
  check('Orden institucional único', repeatedOrders.length === 0, repeatedOrders.join(', '));
  if (repeatedOrders.length) fail(`Órdenes duplicados: ${repeatedOrders.join(', ')}.`);

  for (const [key, source] of Object.entries(config.sources)) {
    if (['researchers', 'manifest'].includes(key)) continue;
    const present = await exists(source);
    const required = key === 'publications';
    check(`Fuente ${key}`, present || !required, present ? source : 'pendiente');
    if (!present && required) fail(`Falta fuente obligatoria: ${source}.`);
    if (!present && !required) warn(`Fuente pendiente: ${source}.`);
  }
}

console.log('\n=== KERNEL QUALITY GATE ===');
checks.forEach(item => console.log(`${item.ok ? '✓' : '✗'} ${item.name}${item.detail ? ` — ${item.detail}` : ''}`));
if (warnings.length) { console.log('\nADVERTENCIAS'); warnings.forEach(item => console.log(`- ${item}`)); }
if (errors.length) { console.log('\nERRORES CRÍTICOS'); errors.forEach(item => console.log(`- ${item}`)); }
console.log(`\nResultado: ${errors.length ? 'FAIL' : 'PASS'} | errores=${errors.length} | advertencias=${warnings.length}`);
process.exit(errors.length ? 1 : 0);
