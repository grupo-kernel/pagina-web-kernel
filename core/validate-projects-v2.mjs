import process from 'node:process';
import { readFile } from 'node:fs/promises';

const projects = JSON.parse(await readFile('core/data/projects.v2.json', 'utf8'));
const researchers = JSON.parse(await readFile('core/data/researchers.v2.json', 'utf8'));
const researcherIds = new Set(researchers.researchers.map(item => item.id));
const errors = [];
const warnings = [];
const ids = new Set();

const allRecords = [...(projects.approved_projects || []), ...(projects.proposals || [])];
for (const record of allRecords) {
  if (!record.id) errors.push('Registro de proyecto sin id.');
  else if (ids.has(record.id)) errors.push(`ID duplicado: ${record.id}.`);
  else ids.add(record.id);

  if (!record.title) errors.push(`${record.id || 'sin-id'}: falta título.`);
  if (!Array.isArray(record.member_ids)) errors.push(`${record.id || 'sin-id'}: member_ids debe ser una lista.`);
  for (const memberId of record.member_ids || []) {
    if (!researcherIds.has(memberId)) errors.push(`${record.id}: investigador desconocido ${memberId}.`);
  }

  const amount = record.funding?.amount ?? record.budget?.amount;
  if (amount !== null && amount !== undefined && (!Number.isFinite(amount) || amount < 0)) {
    errors.push(`${record.id}: cuantía inválida.`);
  }

  const currency = record.funding?.currency ?? record.budget?.currency;
  if (amount !== null && amount !== undefined && !currency) errors.push(`${record.id}: falta moneda.`);

  const start = record.dates?.start;
  const end = record.dates?.end;
  if (start && Number.isNaN(Date.parse(start))) errors.push(`${record.id}: fecha inicial inválida.`);
  if (end && Number.isNaN(Date.parse(end))) errors.push(`${record.id}: fecha final inválida.`);
  if (start && end && Date.parse(end) < Date.parse(start)) errors.push(`${record.id}: fecha final anterior al inicio.`);

  if (record.verification === 'pending-source-consolidation') warnings.push(`${record.id}: fuente institucional pendiente de consolidación.`);
}

const featured = (projects.approved_projects || []).filter(item => item.featured);
if (featured.length !== projects.summary?.featured_approved_projects) {
  errors.push(`El resumen declara ${projects.summary?.featured_approved_projects} proyectos destacados y se encontraron ${featured.length}.`);
}
if (projects.summary?.recorded_participations !== 58) warnings.push('La cifra institucional de participaciones difiere de 58.');
if ((projects.proposals || []).length !== projects.summary?.proposals_under_review) {
  warnings.push(`Se declaran ${projects.summary?.proposals_under_review} propuestas y solo ${(projects.proposals || []).length} está individualizada.`);
}

console.log('\n=== VALIDACIÓN DE PROYECTOS V2 ===');
console.log(`Registros: ${allRecords.length}`);
console.log(`Errores: ${errors.length}`);
console.log(`Advertencias: ${warnings.length}`);
for (const warning of warnings) console.log(`ADVERTENCIA: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);
process.exit(errors.length ? 1 : 0);
