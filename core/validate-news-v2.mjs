import process from 'node:process';
import { readFile } from 'node:fs/promises';

const news = JSON.parse(await readFile('core/data/news.v2.json', 'utf8'));
const researchers = JSON.parse(await readFile('core/data/researchers.v2.json', 'utf8'));
const projects = JSON.parse(await readFile('core/data/projects.v2.json', 'utf8'));
const researcherIds = new Set(researchers.researchers.map(item => item.id));
const projectIds = new Set([...(projects.projects || []).map(item => item.id), ...(projects.proposals || []).map(item => item.id)]);
const categoryIds = new Set((news.categories || []).map(item => item.id));
const errors = [];
const warnings = [];
const seen = new Set();
const doiPattern = /^10\.\d{4,9}\/\S+$/i;

for (const item of news.items || []) {
  if (!item.id) errors.push('Noticia sin id.');
  if (seen.has(item.id)) errors.push(`ID de noticia duplicado: ${item.id}.`);
  seen.add(item.id);
  if (!item.title?.es || !item.title?.en) errors.push(`${item.id}: título bilingüe incompleto.`);
  if (!item.summary?.es || !item.summary?.en) errors.push(`${item.id}: resumen bilingüe incompleto.`);
  if (!categoryIds.has(item.category_id)) errors.push(`${item.id}: categoría desconocida ${item.category_id}.`);
  if (item.status?.startsWith('published') && !item.published_at) errors.push(`${item.id}: publicada sin fecha.`);
  if (item.published_at && Number.isNaN(Date.parse(item.published_at))) errors.push(`${item.id}: fecha inválida.`);
  for (const id of item.researcher_ids || []) if (!researcherIds.has(id)) errors.push(`${item.id}: investigador desconocido ${id}.`);
  for (const id of item.project_ids || []) if (!projectIds.has(id)) errors.push(`${item.id}: proyecto o propuesta desconocido ${id}.`);
  for (const doi of item.publication_dois || []) if (!doiPattern.test(doi)) errors.push(`${item.id}: DOI inválido ${doi}.`);
  if (!item.provenance) errors.push(`${item.id}: falta procedencia.`);
  if (!(item.media || []).length) warnings.push(`${item.id}: no tiene recursos multimedia vinculados.`);
}

console.log('\n=== NEWS V2 ===');
console.log(`Noticias: ${(news.items || []).length}`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(`Resultado: ${errors.length ? 'FAIL' : 'PASS'} | errores=${errors.length} | advertencias=${warnings.length}`);
process.exit(errors.length ? 1 : 0);
