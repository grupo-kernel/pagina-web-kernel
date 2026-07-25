import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync(new URL('./data/researchers.v2.json', import.meta.url)));
const renderer = fs.readFileSync(new URL('./modules/scientific-profiles/scientific-profiles-renderer.mjs', import.meta.url), 'utf8');
const preview = fs.readFileSync(new URL('./modules/scientific-profiles/preview.html', import.meta.url), 'utf8');
const report = fs.readFileSync(new URL('./activation/scientific-profiles-report.md', import.meta.url), 'utf8');
const members = data.researchers
  .filter(item => item.status === 'active' && item.visibility === 'public')
  .sort((a, b) => Number(a.order) - Number(b.order));
const errors = [];

if (members.length !== 9) errors.push(`Se esperaban 9 investigadores públicos y se encontraron ${members.length}.`);
if (data.group?.member_count !== 9) errors.push('group.member_count debe permanecer en 9.');

const expectedIds = [
  'miguel-leonardo',
  'natanael-urena',
  'randy-leonardo',
  'antmel-rodriguez',
  'marino-brito',
  'marc-kelly-jean-philippe',
  'jose-alberto-reyes',
  'alicia-cordero',
  'juan-torregrosa'
];

for (const [index, expectedId] of expectedIds.entries()) {
  if (members[index]?.id !== expectedId) errors.push(`Orden institucional incorrecto en la posición ${index + 1}: se esperaba ${expectedId}.`);
}

for (const member of members) {
  if (!member.id || !member.name || !member.role || !member.image?.current) errors.push(`Perfil científico incompleto: ${member.id || member.name || 'sin identificar'}.`);
  if (!Array.isArray(member.areas) || !member.areas.length) errors.push(`Sin áreas científicas: ${member.id}.`);
  if (!Array.isArray(member.affiliations) || !member.affiliations.length) errors.push(`Sin afiliaciones: ${member.id}.`);
  if (!member.bio) errors.push(`Sin biografía científica: ${member.id}.`);
  if (!member.contact?.email) errors.push(`Sin correo de contacto: ${member.id}.`);
}

if (members.filter(item => item.member_scope === 'international').length !== 2) errors.push('Deben existir exactamente dos miembros internacionales.');
if (!members.find(item => item.id === 'alicia-cordero')?.profiles?.institutional) errors.push('Alicia Cordero debe conservar su perfil institucional.');
if (!members.find(item => item.id === 'juan-torregrosa')?.profiles?.institutional) errors.push('Juan Ramón Torregrosa debe conservar su perfil institucional.');
if (!members.find(item => item.id === 'miguel-leonardo')?.profiles?.orcid) errors.push('Miguel Leonardo debe conservar su ORCID.');

if (!renderer.includes('renderScientificProfilesModule')) errors.push('Falta el renderizador compartido.');
if (!renderer.includes('Indicadores disponibles')) errors.push('Falta el bloque de indicadores.');
if (!renderer.includes('Indicadores bibliométricos pendientes de consolidación')) errors.push('Falta el estado explícito para métricas pendientes.');
if (!preview.includes('../../data/researchers.v2.json')) errors.push('La vista previa no consume researchers.v2.json.');
if (!preview.includes('data-science-select')) errors.push('Falta navegación interactiva.');
if (!preview.includes('URLSearchParams')) errors.push('Falta selección mediante parámetro de consulta.');
if (!preview.includes('location.hash')) errors.push('Falta selección mediante hash.');
if (!report.includes('No activa rutas de producción')) errors.push('El informe debe confirmar que el módulo no activa producción.');

if (errors.length) {
  console.error(errors.map(item => `✗ ${item}`).join('\n'));
  process.exit(1);
}

console.log('✓ Perfiles científicos: 9 investigadores, orden, áreas, afiliaciones, enlaces, métricas y navegación validados.');
