import fs from 'node:fs/promises';
import process from 'node:process';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const list = value => Array.isArray(value) ? value : [];
const entityId = entity => entity?.id ?? entity?.doi ?? entity?.slug;
const uniqueEntities = collections => {
  const byId = new Map();
  for (const entity of collections.flatMap(list)) {
    const id = entityId(entity);
    if (id && !byId.has(id)) byId.set(id, entity);
  }
  return [...byId.values()];
};
const linkedResearchers = (entity, fields) => [...new Set(fields.flatMap(field => list(entity?.[field])))];

const [data, researchersData, publicationsData, projectsData, servicesData, newsData] = await Promise.all([
  read('core/data/relations.v1.json'),
  read('core/data/researchers.v2.json'),
  read('core/data/publications.v2.json'),
  read('core/data/projects.v2.json'),
  read('core/data/services.v2.json'),
  read('core/data/news.v2.json')
]);

const researchers = list(researchersData.researchers);
const publications = uniqueEntities([publicationsData.records, publicationsData.publications]);
const projects = uniqueEntities([projectsData.projects, projectsData.records, projectsData.approved_projects, projectsData.proposals]);
const services = uniqueEntities([servicesData.services, servicesData.records]);
const news = uniqueEntities([newsData.news, newsData.records, newsData.items]);
const researcherIds = new Set(researchers.map(item => item.id));
const entitySets = {
  publications: new Set(publications.map(entityId)),
  projects: new Set(projects.map(entityId)),
  services: new Set(services.map(entityId)),
  news: new Set(news.map(entityId))
};
const errors = [];
const warnings = [];
const relations = data.researcher_relations ?? {};

for (const id of researcherIds) if (!relations[id]) errors.push(`Falta investigador en índice: ${id}`);
for (const id of Object.keys(relations)) if (!researcherIds.has(id)) errors.push(`Investigador desconocido en índice: ${id}`);

for (const [id, relation] of Object.entries(relations)) {
  for (const key of ['publications', 'projects', 'services', 'news']) {
    if (!Array.isArray(relation[key])) {
      errors.push(`${id}: ${key} no es una lista.`);
      continue;
    }
    if (new Set(relation[key]).size !== relation[key].length) errors.push(`${id}: duplicados en ${key}.`);
    for (const reference of relation[key]) {
      if (!entitySets[key].has(reference)) errors.push(`${id}: referencia desconocida en ${key}: ${reference}.`);
    }
  }
  const total = ['publications', 'projects', 'services', 'news'].reduce((sum, key) => sum + list(relation[key]).length, 0);
  if (total === 0) warnings.push(`${id}: sin relaciones registradas.`);
}

const ensureForwardLinks = (entities, relationKey, fields) => {
  for (const entity of entities) {
    const id = entityId(entity);
    for (const researcherId of linkedResearchers(entity, fields)) {
      if (!researcherIds.has(researcherId)) continue;
      if (!list(relations[researcherId]?.[relationKey]).includes(id)) {
        errors.push(`${relationKey}: falta vínculo ${researcherId} -> ${id}.`);
      }
    }
  }
};

ensureForwardLinks(publications, 'publications', ['researcher_ids', 'researchers', 'member_ids']);
ensureForwardLinks(projects, 'projects', ['member_ids', 'researcher_ids', 'researchers', 'members']);
ensureForwardLinks(services, 'services', ['researcher_ids', 'responsible_researcher_ids', 'responsible']);
ensureForwardLinks(news, 'news', ['researcher_ids', 'researchers', 'authors']);

const expectedCounts = {
  researchers: researchers.length,
  publications: publications.length,
  projects: projects.length,
  approved_projects: list(projectsData.approved_projects).length,
  proposals: list(projectsData.proposals).length,
  services: services.length,
  news: news.length
};

for (const [key, expected] of Object.entries(expectedCounts)) {
  if (data.counts?.[key] !== expected) errors.push(`Conteo ${key} no coincide: ${data.counts?.[key]} != ${expected}.`);
}

console.log(`Relaciones validadas: ${Object.keys(relations).length} investigadores y ${projects.length} proyectos/propuestas.`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(errors.length ? 'Resultado: FAIL' : 'Resultado: PASS');
process.exit(errors.length ? 1 : 0);
