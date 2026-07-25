import fs from 'node:fs/promises';
import process from 'node:process';

const readText = path => fs.readFile(path, 'utf8');
const readJson = async path => JSON.parse(await readText(path));

const [html, manifest, researchers, config] = await Promise.all([
  readText('equipo.html'),
  readJson('core/manifest.json'),
  readJson('core/data/researchers.v2.json'),
  readJson('core/quality-gate.config.json')
]);

const errors = [];
const warnings = [];
const fail = message => errors.push(message);
const warn = message => warnings.push(message);
const requiredIds = config.expected.researcher_ids || [];

if (!html.includes('data-kernel-core-integration="team"')) fail('equipo.html no declara la integración controlada de Team.');
if (!html.includes('data-kernel-core-module="team"')) fail('equipo.html no identifica el módulo Team.');
if (!html.includes('data-kernel-core-status="branch-preview-active"')) fail('equipo.html no está marcado como vista previa activa de rama.');
if (!html.includes('core/data/researchers.v2.json')) fail('equipo.html no carga la fuente v2 de investigadores.');
if (/fetch\s*\(\s*["']data\/researchers\.json["']/.test(html)) fail('equipo.html todavía carga la fuente pública anterior.');

for (const token of [
  'member.image?.current',
  'member.contact?.email',
  'member.profiles || {}',
  'member.member_scope === "international"',
  'member.status === "active"',
  'member.visibility === "public"',
  'Number(a.order) - Number(b.order)'
]) {
  if (!html.includes(token)) fail(`Falta adaptación v2 en equipo.html: ${token}`);
}

const members = (researchers.researchers || [])
  .filter(member => member.status === 'active' && member.visibility === 'public')
  .sort((a, b) => Number(a.order) - Number(b.order));

if (members.length !== config.expected.researcher_count) {
  fail(`La fuente v2 expone ${members.length} investigadores; se esperaban ${config.expected.researcher_count}.`);
}

const actualIds = members.map(member => member.id);
if (!requiredIds.every((id, index) => actualIds[index] === id)) {
  fail(`El orden institucional difiere: ${actualIds.join(', ')}`);
}

for (const id of ['marino-brito', 'marc-kelly-jean-philippe', 'jose-alberto-reyes', 'alicia-cordero', 'juan-torregrosa']) {
  if (!actualIds.includes(id)) fail(`Perfil crítico ausente de la integración: ${id}.`);
}

const international = members.filter(member => member.member_scope === 'international').map(member => member.id);
if (!international.includes('alicia-cordero') || !international.includes('juan-torregrosa')) {
  fail('Alicia Cordero y Juan Ramón Torregrosa deben conservar la clasificación internacional.');
}

const activation = manifest.activation || {};
const team = activation.modules?.team || {};
if (activation.enabled !== false) fail('Kernel Core global no debe activarse en esta rama.');
if (manifest.public_site_untouched !== true) fail('El manifiesto debe confirmar que el sitio público está intacto.');
if (team.active !== false) fail('Team no debe marcarse activo en producción.');
if (team.preview_active !== true) fail('Team debe marcarse activo únicamente como vista previa.');
if (team.scope !== 'branch-only') fail('El alcance de Team debe ser branch-only.');
if (team.status !== 'integrated-branch-preview') fail('Estado de Team inesperado en el manifiesto.');
if (team.source !== 'core/data/researchers.v2.json') fail('El manifiesto no registra la fuente v2 de Team.');
if (team.renderer !== 'equipo.html') fail('El manifiesto no registra equipo.html como integración controlada.');

if (!html.includes('La plataforma pública continúa usando su fuente anterior')) {
  warn('La nota visual no explica que la plataforma pública permanece sin cambios.');
}

console.log(`Integración Team: ${members.length} perfiles, ${international.length} internacionales.`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(errors.length ? 'Resultado: FAIL' : 'Resultado: PASS');
process.exit(errors.length ? 1 : 0);
