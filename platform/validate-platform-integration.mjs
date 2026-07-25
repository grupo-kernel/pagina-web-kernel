import fs from 'node:fs/promises';

const errors = [];
const pass = message => console.log(`✓ ${message}`);
const fail = message => errors.push(message);

const readText = path => fs.readFile(path, 'utf8');
const readJson = async path => JSON.parse(await readText(path));
const exists = async path => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

const [manifest, index, researchers, projects, publications] = await Promise.all([
  readJson('platform/integration-manifest.v1.json'),
  readText('index.html'),
  readJson('core/data/researchers.v2.json'),
  readJson('core/data/projects.v2.json'),
  readJson('core/data/publications.v2.json')
]);

if (manifest.phase !== '2B') fail('El manifiesto no corresponde a la Fase 2B.');
if (manifest.activation?.enabled !== false) fail('La activación debe permanecer deshabilitada en la rama de integración.');
if (!/Xmera/i.test(manifest.institutional_tools?.itla_xmera?.label || '')) fail('La herramienta institucional del ITLA debe identificarse como Xmera.');
if (/\bSARA\b/i.test(JSON.stringify(manifest))) fail('El manifiesto todavía contiene el nombre incorrecto SARA.');

const preservedRoutes = [
  'home', 'servicios', 'laboratorioKernel', 'lineas', 'proyectos',
  'publicaciones', 'herramientas', 'quienesSomos', 'equipment',
  'noticias', 'contacto', 'diagnosticoServicios'
];
for (const route of preservedRoutes) {
  if (!manifest.preserved_routes?.includes(route)) fail(`Ruta no protegida por el manifiesto: ${route}`);
}

const moduleMatch = index.match(/<script[^>]+type=["']module["'][^>]+src=["']\.\/([^"']+)["']/i);
if (!moduleMatch) {
  fail('No se encontró el módulo principal de la SPA en index.html.');
} else {
  const bundlePath = moduleMatch[1];
  const bundle = await readText(bundlePath);
  const criticalTokens = [
    'laboratorioKernel',
    'herramientas',
    'Xmera',
    'Banner',
    'authGuard-',
    'authService-',
    'firebase-',
    'LaboratorioKernel-',
    'AsistentePruebas-',
    'CalculadoraEstadisticaDescriptiva-',
    'CalculadoraTamanoMuestraPotencia-',
    'BibliotecaMetodologica-'
  ];
  for (const token of criticalTokens) {
    if (!bundle.includes(token)) fail(`La SPA perdió un componente crítico: ${token}`);
  }
}

for (const asset of [
  'kernel-stats-patch.js',
  'kernel-phase1-patch.js',
  'kernel-phase1-fix.js',
  'kernel-i18n-full.js',
  'kernel-platform-bridge.js',
  'kernel-team-core-bridge.js',
  'kernel-research-core-bridge.js'
]) {
  if (!index.includes(asset)) fail(`index.html no carga ${asset}.`);
}
if (index.includes('kernel-members-patch.js')) fail('index.html todavía carga el parche legado de miembros y puede duplicar perfiles.');

for (const bridge of [
  'assets/kernel-platform-bridge.js',
  'assets/kernel-team-core-bridge.js',
  'assets/kernel-research-core-bridge.js'
]) {
  if (!(await exists(bridge))) fail(`Falta el puente de integración ${bridge}.`);
}

const activeResearchers = (researchers.researchers || [])
  .filter(item => item.status === 'active' && item.visibility === 'public')
  .sort((a, b) => Number(a.order) - Number(b.order));
if (activeResearchers.length !== 9) fail(`Se esperaban 9 investigadores y se encontraron ${activeResearchers.length}.`);
if (!activeResearchers.some(item => item.id === 'alicia-cordero')) fail('Falta Alicia Cordero.');
if (!activeResearchers.some(item => item.id === 'juan-torregrosa')) fail('Falta Juan Ramón Torregrosa.');

for (const member of activeResearchers) {
  const image = member.image?.current;
  if (!image) {
    fail(`${member.id}: no tiene imagen pública declarada.`);
  } else if (!(await exists(image))) {
    fail(`${member.id}: falta la imagen pública ${image}.`);
  }
}

const teamBridge = await readText('assets/kernel-team-core-bridge.js');
for (const token of [
  'core/data/researchers.v2.json',
  'data-kernel-platform-page="team-nine"',
  'data-kernel-team-filter',
  'data-kernel-team-open',
  '#/equipment/'
]) {
  if (!teamBridge.includes(token)) fail(`El puente del equipo no contiene la adaptación requerida: ${token}`);
}

const academicBridge = await readText('assets/kernel-platform-bridge.js');
for (const token of [
  'core/data/researchers.v2.json',
  'FORMATION_ROUTE = "formacion"',
  'data-kernel-platform-page="academic-background"',
  '#/${FORMATION_ROUTE}'
]) {
  if (!academicBridge.includes(token)) fail(`El puente académico no contiene la adaptación requerida: ${token}`);
}

const researchBridge = await readText('assets/kernel-research-core-bridge.js');
for (const token of [
  'core/data/publications.v2.json',
  'core/data/projects.v2.json',
  'data-kernel-platform-page="publications-2"',
  'data-kernel-platform-page="projects-2"',
  'data-kernel-bibtex',
  '#/equipment/'
]) {
  if (!researchBridge.includes(token)) fail(`El puente de investigación no contiene la adaptación requerida: ${token}`);
}

const projectSummary = projects.summary || {};
if (projectSummary.featured_approved_projects !== 10) fail('El catálogo no conserva los 10 proyectos aprobados destacados.');
if (projectSummary.additional_participations_not_itemized !== 48) fail('El catálogo no conserva las 48 participaciones adicionales.');
if ((projects.approved_projects || []).length !== 10) fail('La lista de proyectos aprobados destacados debe contener 10 registros.');

const publicationRecords = publications.records || publications.publications || [];
if (publicationRecords.length < 160) fail(`El catálogo de publicaciones contiene solo ${publicationRecords.length} registros.`);
if ((publications.summary?.unique_records || publicationRecords.length) !== 162) fail('El catálogo debe conservar 162 publicaciones únicas.');

if (errors.length) {
  console.error('\nPLATFORM INTEGRATION GATE: FAIL');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

pass('SPA completa preservada');
pass('Laboratorio Inteligente y autenticación detectados');
pass('ITLA · Xmera y UNAPEC · Banner detectados');
pass('Nueve investigadores y sus fotografías verificados');
pass('Equipo y formación académica integrados mediante puentes no destructivos');
pass('Publicaciones 2.0 y Proyectos 2.0 integrados mediante el puente de investigación');
console.log('\nPLATFORM INTEGRATION GATE: PASS');
