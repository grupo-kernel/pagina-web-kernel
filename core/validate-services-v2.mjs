import process from 'node:process';
import { readFile } from 'node:fs/promises';

const services = JSON.parse(await readFile('core/data/services.v2.json', 'utf8'));
const researchers = JSON.parse(await readFile('core/data/researchers.v2.json', 'utf8'));
const researcherIds = new Set(researchers.researchers.map(item => item.id));
const categoryIds = new Set((services.categories || []).map(item => item.id));
const errors = [];
const warnings = [];
const seen = new Set();

for (const service of services.services || []) {
  if (!service.id) errors.push('Servicio sin id.');
  if (seen.has(service.id)) errors.push(`ID de servicio duplicado: ${service.id}.`);
  seen.add(service.id);
  if (!service.name?.es || !service.name?.en) errors.push(`${service.id}: nombre bilingüe incompleto.`);
  if (!service.summary?.es || !service.summary?.en) errors.push(`${service.id}: resumen bilingüe incompleto.`);
  if (!categoryIds.has(service.category_id)) errors.push(`${service.id}: categoría desconocida ${service.category_id}.`);
  if (!Array.isArray(service.researcher_ids) || !service.researcher_ids.length) warnings.push(`${service.id}: no tiene responsables.`);
  for (const id of service.researcher_ids || []) if (!researcherIds.has(id)) errors.push(`${service.id}: investigador desconocido ${id}.`);
  if (!Array.isArray(service.deliverables) || !service.deliverables.length) warnings.push(`${service.id}: no tiene entregables.`);
  if (!Array.isArray(service.modalities) || !service.modalities.length) warnings.push(`${service.id}: no tiene modalidad.`);
  if (!service.cta?.route) warnings.push(`${service.id}: no tiene ruta de contacto.`);
  if (!service.provenance) errors.push(`${service.id}: falta procedencia.`);
}

console.log('\n=== SERVICES V2 ===');
console.log(`Servicios: ${(services.services || []).length}`);
console.log(`Categorías: ${(services.categories || []).length}`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(`Resultado: ${errors.length ? 'FAIL' : 'PASS'} | errores=${errors.length} | advertencias=${warnings.length}`);
process.exit(errors.length ? 1 : 0);
