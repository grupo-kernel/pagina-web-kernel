import fs from 'node:fs/promises';

const errors = [];
const pass = message => console.log(`✓ ${message}`);
const fail = message => errors.push(message);

const readText = path => fs.readFile(path, 'utf8');
const readJson = async path => JSON.parse(await readText(path));

const [manifest, index, researchers, projects, publications] = await Promise.all([
  readJson('platform/integration-manifest.v1.json'),
  readText('index.html'),
  readJson('core/data/researchers.v2.json'),
  readJson('core/data/projects.v2.json'),
  readJson('core/data/publications.v2.json')
]);

if (manifest.phase !== '2B') fail('El manifiesto no corresponde a la Fase 2B.');
if (manifest.activation?.enabled !== false) fail('La activación debe permanecer deshabilitada en la rama de integración.');

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
  'kernel-members-patch.js',
  'kernel-stats-patch.js',
  'kernel-phase1-patch.js',
  'kernel-phase1-fix.js',
  'kernel-i18n-full.js',
  'kernel-platform-bridge.js'
]) {
  if (!index.includes(asset)) fail(`index.html no carga ${asset}.`);
}

const activeResearchers = (researchers.researchers || [])
  .filter(item => item.status === 'active' && item.visibility === 'public');
if (activeResearchers.length !== 9) fail(`Se esperaban 9 investigadores y se encontraron ${activeResearchers.length}.`);
if (!activeResearchers.some(item => item.id === 'alicia-cordero')) fail('Falta Alicia Cordero.');
if (!activeResearchers.some(item => item.id === 'juan-torregrosa')) fail('Falta Juan Ramón Torregrosa.');

const projectSummary = projects.summary || {};
if (projectSummary.featured_approved_projects !== 10) fail('El catálogo no conserva los 10 proyectos aprobados destacados.');
if (projectSummary.additional_participations_not_itemized !== 48) fail('El catálogo no conserva las 48 participaciones adicionales.');

const publicationRecords = publications.records || publications.publications || [];
if (publicationRecords.length < 160) fail(`El catálogo de publicaciones contiene solo ${publicationRecords.length} registros.`);

if (errors.length) {
  console.error('\nPLATFORM INTEGRATION GATE: FAIL');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

pass('SPA completa preservada');
pass('Laboratorio Inteligente y autenticación detectados');
pass('ITLA · Xmera y UNAPEC · Banner detectados');
pass('Nueve investigadores disponibles');
pass('Catálogos de publicaciones y proyectos disponibles');
console.log('\nPLATFORM INTEGRATION GATE: PASS');
