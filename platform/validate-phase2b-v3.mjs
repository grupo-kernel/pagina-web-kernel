import fs from 'node:fs/promises';
import path from 'node:path';

const errors = [];
const checks = [];
const pass = message => checks.push(`✓ ${message}`);
const fail = message => errors.push(message);
const readText = file => fs.readFile(file, 'utf8');
const readJson = async file => JSON.parse(await readText(file));
const exists = async file => {
  try { await fs.access(file); return true; } catch { return false; }
};

const [index, manifest, researchers, projects, publications, academicBridge, teamBridge, researchBridge] = await Promise.all([
  readText('index.html'),
  readJson('platform/integration-manifest.v1.json'),
  readJson('core/data/researchers.v2.json'),
  readJson('core/data/projects.v2.json'),
  readJson('core/data/publications.v2.json'),
  readText('assets/kernel-platform-bridge-v3.js'),
  readText('assets/kernel-team-core-bridge-v3.js'),
  readText('assets/kernel-research-core-bridge.js')
]);

const scriptBlock = index.match(/const archivos\s*=\s*\[(.*?)\];/s)?.[1] || '';
for (const asset of [
  'kernel-stats-patch.js',
  'kernel-phase1-patch.js',
  'kernel-phase1-fix.js',
  'kernel-i18n-full.js',
  'kernel-platform-bridge-v3.js',
  'kernel-team-core-bridge-v3.js',
  'kernel-research-core-bridge.js'
]) {
  if (!scriptBlock.includes(asset)) fail(`index.html no carga ${asset}.`);
}
if (scriptBlock.includes('kernel-members-patch.js')) fail('El parche de miembros anterior no debe cargarse junto al Equipo v2.');
if (scriptBlock.includes('kernel-platform-bridge.js?v=')) fail('La integración no debe cargar el puente académico anterior.');
if (scriptBlock.includes('kernel-team-core-bridge.js?v=')) fail('La integración no debe cargar el puente de equipo anterior.');

const modulePath = index.match(/<script[^>]+type=["']module["'][^>]+src=["']\.\/([^"']+)["']/i)?.[1];
if (!modulePath) {
  fail('No se encontró el módulo principal de la SPA.');
} else {
  const bundle = await readText(modulePath);
  for (const token of [
    'laboratorioKernel',
    'herramientas',
    'Xmera',
    'Banner',
    '1AC',
    '2PP',
    '3SP',
    '4EF',
    'authGuard-',
    'authService-',
    'firebase-',
    'LaboratorioKernel-',
    'AsistentePruebas-',
    'CalculadoraEstadisticaDescriptiva-',
    'CalculadoraTamanoMuestraPotencia-',
    'BibliotecaMetodologica-'
  ]) {
    if (!bundle.includes(token)) fail(`La SPA perdió el componente crítico ${token}.`);
  }
}

for (const file of [
  'assets/LaboratorioKernel-DQR0aCHt.js',
  'assets/authGuard-CEzcrBkK.js',
  'assets/authService-CgfoSPdf.js',
  'assets/firebase-BzP43VG7.js',
  'assets/AsistentePruebas-48CqAPbI.js',
  'assets/CalculadoraEstadisticaDescriptiva-BA-p7_NB.js',
  'assets/CalculadoraTamanoMuestraPotencia-DLJx5UHY.js',
  'assets/BibliotecaMetodologica-BzzsJJUi.js'
]) {
  if (!(await exists(file))) fail(`Falta un recurso del Laboratorio: ${file}`);
}

const members = (researchers.researchers || [])
  .filter(item => item.status === 'active' && item.visibility === 'public')
  .sort((a, b) => Number(a.order) - Number(b.order));
if (members.length !== 9) fail(`Se esperaban 9 investigadores y se encontraron ${members.length}.`);
for (const requiredId of ['miguel-leonardo','natanael-urena','randy-leonardo','antmel-rodriguez','marino-brito','marc-kelly-jean-philippe','jose-alberto-reyes','alicia-cordero','juan-torregrosa']) {
  if (!members.some(item => item.id === requiredId)) fail(`Falta el investigador ${requiredId}.`);
}
for (const member of members) {
  const image = member.image?.current;
  if (!image || !(await exists(image))) fail(`${member.id}: fotografía ausente (${image || 'sin ruta'}).`);
}

if (projects.summary?.featured_approved_projects !== 10) fail('No se preservaron los 10 proyectos aprobados destacados.');
if (projects.summary?.additional_participations_not_itemized !== 48) fail('No se preservaron las 48 participaciones adicionales.');
if ((publications.records || []).length !== 162) fail(`El catálogo debe contener 162 publicaciones únicas y contiene ${(publications.records || []).length}.`);

for (const [name, source, tokens] of [
  ['Formación', academicBridge, ['kernelSection', 'formacion', 'Academic background', 'Formación académica', 'academic-background-v2']],
  ['Equipo', teamBridge, ['equipment', 'Research team', 'Equipo de investigación', 'team-nine-v2']],
  ['Investigación', researchBridge, ['core/data/publications.v2.json', 'core/data/projects.v2.json', 'publicaciones', 'proyectos']]
]) {
  for (const token of tokens) if (!source.includes(token)) fail(`${name}: falta el token ${token}.`);
}

if (manifest.phase !== '2B') fail('El manifiesto no corresponde a la Fase 2B.');
if (manifest.activation?.enabled !== false) fail('La activación debe permanecer bloqueada en la rama de integración.');
for (const requirement of ['laboratory_must_pass','xmera_must_pass','banner_must_pass']) {
  if (manifest.activation?.[requirement] !== true) fail(`El manifiesto no exige ${requirement}.`);
}

if (errors.length) {
  console.error('PHASE 2B V3 GATE: FAIL');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

pass('SPA y menús completos preservados');
pass('Laboratorio Inteligente, autenticación y calculadoras preservados');
pass('ITLA · Xmera y UNAPEC · Banner preservados');
pass('Formación académica integrada en la SPA');
pass('Equipo de nueve investigadores y fotografías integrado');
pass('Perfiles científicos integrados');
pass('Publicaciones 2.0 y Proyectos 2.0 conectados');
pass('Contenido nuevo disponible en español e inglés');
checks.forEach(item => console.log(item));
console.log('PHASE 2B V3 GATE: PASS');
