import fs from 'node:fs/promises';
import process from 'node:process';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const list = value => Array.isArray(value) ? value : [];
const data = await read('core/data/relations.v1.json');
const researchers = await read('core/data/researchers.v2.json');
const researcherIds = new Set(list(researchers.researchers).map(item => item.id));
const errors = [];
const warnings = [];
const relations = data.researcher_relations ?? {};

for (const id of researcherIds) if (!relations[id]) errors.push(`Falta investigador en índice: ${id}`);
for (const id of Object.keys(relations)) if (!researcherIds.has(id)) errors.push(`Investigador desconocido en índice: ${id}`);

for (const [id, relation] of Object.entries(relations)) {
  for (const key of ['publications', 'projects', 'services', 'news']) {
    if (!Array.isArray(relation[key])) errors.push(`${id}: ${key} no es una lista.`);
    else if (new Set(relation[key]).size !== relation[key].length) errors.push(`${id}: duplicados en ${key}.`);
  }
  const total = ['publications', 'projects', 'services', 'news'].reduce((sum, key) => sum + list(relation[key]).length, 0);
  if (total === 0) warnings.push(`${id}: sin relaciones registradas.`);
}

if (data.counts?.researchers !== researcherIds.size) errors.push('El resumen de investigadores no coincide con el catálogo.');
console.log(`Relaciones validadas: ${Object.keys(relations).length} investigadores.`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(errors.length ? 'Resultado: FAIL' : 'Resultado: PASS');
process.exit(errors.length ? 1 : 0);
