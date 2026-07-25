import fs from 'node:fs/promises';
const read = path => fs.readFile(path,'utf8');
const payload = JSON.parse(await read('core/data/projects.v2.json'));
const researchers = JSON.parse(await read('core/data/researchers.v2.json'));
const preview = await read('core/modules/projects/preview.html');
const renderer = await read('core/modules/projects/projects-renderer.mjs');
const css = await read('core/modules/projects/projects.css');
const errors=[];
const researcherIds=new Set((researchers.researchers||[]).map(item=>item.id));
if(payload.summary?.featured_approved_projects!==10) errors.push('Debe haber 10 proyectos aprobados destacados.');
if(payload.summary?.additional_participations_not_itemized!==48) errors.push('Deben declararse 48 participaciones adicionales.');
if((payload.approved_projects||[]).filter(item=>item.featured).length!==10) errors.push('El catálogo no contiene exactamente 10 destacados.');
for(const project of [...(payload.approved_projects||[]),...(payload.proposals||[])]){
  if(!project.id||!project.title||!project.status) errors.push(`Proyecto incompleto: ${project.id||'sin-id'}`);
  for(const id of project.member_ids||[]) if(!researcherIds.has(id)) errors.push(`Investigador inexistente ${id} en ${project.id}`);
}
for(const token of ['data-project-search','data-project-status','data-project-researcher','data-project-list']) if(!preview.includes(token)) errors.push(`Falta ${token} en preview.`);
for(const token of ['renderProjectsApp','renderProjectCard','normalizeProjects']) if(!renderer.includes(token)) errors.push(`Falta ${token} en renderer.`);
if(!css.includes('@media')) errors.push('Faltan reglas responsive.');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`Projects module validated: ${payload.approved_projects.length} approved projects and ${payload.proposals.length} proposals.`);
