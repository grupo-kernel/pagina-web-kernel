import fs from 'node:fs/promises';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const write = async (path, value) => fs.writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
const list = value => Array.isArray(value) ? value : [];
const idsFrom = (item, fields) => [...new Set(fields.flatMap(field => list(item?.[field])) )];

const researchersData = await read('core/data/researchers.v2.json');
const publicationsData = await read('core/data/publications.v2.json');
const projectsData = await read('core/data/projects.v2.json');
const servicesData = await read('core/data/services.v2.json');
const newsData = await read('core/data/news.v2.json');

const researchers = list(researchersData.researchers);
const publications = list(publicationsData.records ?? publicationsData.publications);
const projects = list(projectsData.projects ?? projectsData.records);
const services = list(servicesData.services ?? servicesData.records);
const news = list(newsData.news ?? newsData.records ?? newsData.items);

const index = Object.fromEntries(researchers.map(r => [r.id, {
  researcher_id: r.id,
  publications: [],
  projects: [],
  services: [],
  news: []
}]));

const attach = (collection, entityType, fields) => {
  for (const entity of collection) {
    const entityId = entity.id ?? entity.doi ?? entity.slug;
    for (const researcherId of idsFrom(entity, fields)) {
      if (!index[researcherId]) continue;
      index[researcherId][entityType].push(entityId);
    }
  }
};

attach(publications, 'publications', ['researcher_ids', 'researchers']);
attach(projects, 'projects', ['researcher_ids', 'researchers', 'members']);
attach(services, 'services', ['researcher_ids', 'responsible_researcher_ids', 'responsible']);
attach(news, 'news', ['researcher_ids', 'researchers', 'authors']);

for (const entry of Object.values(index)) {
  for (const key of ['publications', 'projects', 'services', 'news']) entry[key] = [...new Set(entry[key])].sort();
}

const projectToPublications = {};
for (const publication of publications) {
  const publicationId = publication.id ?? publication.doi ?? publication.slug;
  for (const projectId of idsFrom(publication, ['project_ids', 'projects'])) {
    (projectToPublications[projectId] ??= []).push(publicationId);
  }
}

const output = {
  schema_version: 1,
  status: 'candidate-not-active',
  generated_at: new Date().toISOString(),
  counts: {
    researchers: researchers.length,
    publications: publications.length,
    projects: projects.length,
    services: services.length,
    news: news.length
  },
  researcher_relations: index,
  project_relations: Object.fromEntries(Object.entries(projectToPublications).map(([key, value]) => [key, { publications: [...new Set(value)].sort() }]))
};

await write('core/data/relations.v1.json', output);
console.log(`Índice generado para ${researchers.length} investigadores.`);
