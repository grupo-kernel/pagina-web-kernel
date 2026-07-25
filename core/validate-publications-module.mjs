import fs from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const read=relative=>fs.readFile(path.join(root,relative),'utf8');
const [dataRaw,researchersRaw,renderer,preview,css,workflow,report]=await Promise.all([
  read('core/data/publications.v2.json'),
  read('core/data/researchers.v2.json'),
  read('core/modules/publications/publications-renderer.mjs'),
  read('core/modules/publications/preview.html'),
  read('core/modules/publications/publications.css'),
  read('.github/workflows/kernel-quality-gate.yml'),
  read('core/modules/publications/activation-report.md')
]);
const data=JSON.parse(dataRaw); const researchers=JSON.parse(researchersRaw);
const errors=[]; const assert=(condition,message)=>{if(!condition)errors.push(message)};
assert(data.schema_version===2,'publications.v2.json debe usar schema_version 2.');
assert(data.status==='candidate-not-active','El catálogo debe permanecer candidate-not-active.');
assert(Array.isArray(data.records)&&data.records.length>0,'El catálogo debe contener registros.');
assert(data.summary?.unique_records===data.records.length,'El resumen debe coincidir con los registros únicos.');
assert(new Set(data.records.map(record=>record.id)).size===data.records.length,'No puede haber identificadores duplicados.');
assert(data.records.every(record=>record.title&&record.bibliographic?.year&&record.authors?.length),'Cada registro debe tener título, año y autoría.');
assert(data.records.every(record=>record.researcher_ids?.every(id=>researchers.researchers.some(item=>item.id===id))),'Todo researcher_id debe existir en researchers.v2.json.');
assert(renderer.includes('createBibtex')&&renderer.includes('filterPublications')&&renderer.includes('renderPublicationCatalog'),'El renderizador debe incluir BibTeX, filtros y catálogo compartido.');
assert(renderer.includes('project_ids')&&renderer.includes('equipo.html#'),'El módulo debe preparar relaciones con proyectos y perfiles públicos del equipo.');
assert(preview.includes('Publicaciones 2.0')&&preview.includes('publications-renderer.mjs'),'Debe existir una vista previa controlada que use el renderizador compartido.');
assert(['query','researcher','year','type','quartile','sort'].every(id=>preview.includes(`id="${id}"`)),'La vista previa debe incluir buscador, filtros y ordenación.');
assert(css.includes('@media(max-width:900px)')&&css.includes('@media(max-width:560px)'),'El módulo debe incluir reglas responsive para tableta y móvil.');
assert(workflow.includes('Validate Publications 2.0 module'),'El Quality Gate debe validar el módulo de Publicaciones 2.0.');
assert(workflow.includes('kernel-publications-controlled-preview'),'El Quality Gate debe generar el artefacto de vista previa.');
assert(report.includes('No modifica `main`')&&report.includes('No modifica `gh-pages`')&&report.includes('No activa producción'),'El informe de activación debe documentar el aislamiento de la fase de desarrollo.');
if(errors.length){console.error('Publications 2.0 validation failed:');errors.forEach(item=>console.error(`- ${item}`));process.exit(1)}
console.log(`Publications 2.0 validation passed: ${data.records.length} unique records, ${data.summary.records_with_doi} with DOI.`);
