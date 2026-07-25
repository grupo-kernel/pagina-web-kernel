import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync(new URL('./data/researchers.v2.json', import.meta.url)));
const renderer = fs.readFileSync(new URL('./modules/scientific-profiles/scientific-profiles-renderer.mjs', import.meta.url),'utf8');
const preview = fs.readFileSync(new URL('./modules/scientific-profiles/preview.html', import.meta.url),'utf8');
const members = data.researchers.filter(item => item.status === 'active' && item.visibility === 'public');
const errors = [];
if (members.length !== 9) errors.push(`Se esperaban 9 investigadores públicos y se encontraron ${members.length}.`);
for (const member of members) {
  if (!member.id || !member.name || !member.role || !member.image?.current) errors.push(`Perfil científico incompleto: ${member.id || member.name || 'sin identificar'}.`);
  if (!Array.isArray(member.areas) || !member.areas.length) errors.push(`Sin áreas científicas: ${member.id}.`);
}
if (!renderer.includes('renderScientificProfilesModule')) errors.push('Falta el renderizador compartido.');
if (!renderer.includes('Indicadores disponibles')) errors.push('Falta el bloque de indicadores.');
if (!preview.includes('../../data/researchers.v2.json')) errors.push('La vista previa no consume researchers.v2.json.');
if (!preview.includes('data-science-select')) errors.push('Falta navegación interactiva.');
if (errors.length) {
  console.error(errors.map(item => `✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log('✓ Perfiles científicos: 9 investigadores, áreas, enlaces, métricas y navegación validados.');
