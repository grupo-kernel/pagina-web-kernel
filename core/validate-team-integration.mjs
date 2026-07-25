import fs from 'node:fs/promises';
import process from 'node:process';

const readText = path => fs.readFile(path, 'utf8');
const readJson = async path => JSON.parse(await readText(path));

const [html, renderer, stylesheet, manifest, researchers, config] = await Promise.all([
  readText('equipo.html'),
  readText('core/modules/team/team-renderer.mjs'),
  readText('core/modules/team/team-integration.css'),
  readJson('core/manifest.json'),
  readJson('core/data/researchers.v2.json'),
  readJson('core/quality-gate.config.json')
]);

const errors = [];
const warnings = [];
const fail = message => errors.push(message);
const warn = message => warnings.push(message);
const requiredIds = config.expected.researcher_ids || [];

for (const token of [
  'data-kernel-core-integration="team"',
  'data-kernel-core-module="team"',
  'data-kernel-core-status="branch-preview-active"',
  'core/data/researchers.v2.json',
  'core/modules/team/team-integration.css',
  "import { orderedResearchers, renderResearcherCard }",
  "from './core/modules/team/team-renderer.mjs'",
  "renderResearcherCard(member, 'es'",
  "orderedResearchers(data)",
  'publicaciones.html?autor=',
  'kernel-core-team__grid'
]) {
  if (!html.includes(token)) fail(`Falta integración controlada en equipo.html: ${token}`);
}

if (/fetch\s*\(\s*["']data\/researchers\.json["']/.test(html)) {
  fail('equipo.html todavía carga la fuente pública anterior.');
}
if (html.includes('function memberCard(') || html.includes('function publicationMetrics(')) {
  fail('equipo.html vuelve a duplicar lógica que debe permanecer en el renderizador compartido.');
}

for (const token of [
  'member.image?.current',
  'member.contact?.email',
  'member.profiles?.orcid',
  "member.member_scope === 'international'",
  "member.status === 'active'",
  "member.visibility === 'public'",
  'Number(a.order) - Number(b.order)',
  'member.metrics?.publications',
  'member.formation',
  'member.experience',
  'data-country=',
  'kernel-core-team-card--international'
]) {
  if (!renderer.includes(token)) fail(`Falta adaptación v2 en team-renderer.mjs: ${token}`);
}

for (const token of [
  '[data-kernel-core-integration="team"]',
  '.kernel-core-team__grid',
  '.kernel-core-team-card',
  '.kernel-core-team-card__metrics',
  '.kernel-core-team-card__details',
  '@media (max-width: 680px)',
  '@media (prefers-reduced-motion: reduce)'
]) {
  if (!stylesheet.includes(token)) fail(`Falta regla visual encapsulada: ${token}`);
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
if (team.renderer !== 'core/modules/team/team-renderer.mjs') fail('El manifiesto no registra el renderizador compartido.');
if (team.integration_page !== 'equipo.html') fail('El manifiesto no registra equipo.html como página integrada.');
if (team.stylesheet !== 'core/modules/team/team-integration.css') fail('El manifiesto no registra la hoja de estilos integrada.');

if (!html.includes('La plataforma pública continúa usando su fuente anterior')) {
  warn('La nota visual no explica que la plataforma pública permanece sin cambios.');
}

console.log(`Integración Team: ${members.length} perfiles, ${international.length} internacionales, renderizador compartido y CSS encapsulado.`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(errors.length ? 'Resultado: FAIL' : 'Resultado: PASS');
process.exit(errors.length ? 1 : 0);
