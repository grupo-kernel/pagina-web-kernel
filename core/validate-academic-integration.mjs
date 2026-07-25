import fs from 'node:fs/promises';
import { orderedAcademicProfiles, renderAcademicProfile } from './modules/academic/academic-renderer.mjs';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const readOptional = async path => {
  try { return await read(path); } catch { return null; }
};
const html = await fs.readFile('formacion.html', 'utf8');
const data = await read('core/data/researchers.v2.json');
const manifest = await read('core/manifest.json');
const config = await read('core/quality-gate.config.json');
const reactivation = await readOptional('core/activation/public-reactivation-manifest.json');
const errors = [];
const warnings = [];
const fail = message => errors.push(message);

if (!html.includes('data-kernel-core-integration="academic-background"')) fail('formacion.html no declara integración académica.');
if (!html.includes('core/data/researchers.v2.json')) fail('formacion.html no carga researchers.v2.json.');
if (/data\/researchers\.json/.test(html)) fail('formacion.html vuelve a mencionar la fuente pública anterior.');
if (!html.includes('academic-renderer.mjs') || !html.includes('academic-integration.css')) fail('Faltan recursos compartidos del módulo académico.');

const isBranchPreview = html.includes('data-kernel-core-status="branch-preview-active"');
const isPublicCandidate = html.includes('data-kernel-core-status="public-ready"');
if (!isBranchPreview && !isPublicCandidate) fail('formacion.html no declara un estado de integración reconocido.');
if (isPublicCandidate && /Vista controlada|La plataforma pública continúa usando su fuente anterior/i.test(html)) {
  fail('formacion.html conserva mensajes de vista previa en la candidata pública.');
}

const members = orderedAcademicProfiles(data);
if (members.length !== config.expected.researcher_count) fail(`Se renderizan ${members.length} perfiles; se esperaban ${config.expected.researcher_count}.`);
const ids = members.map(item => item.id);
if (!config.expected.researcher_ids.every((id, index) => ids[index] === id)) fail(`Orden institucional incorrecto: ${ids.join(', ')}`);

for (const member of members) {
  const profile = renderAcademicProfile(member);
  if (!profile.includes(`data-academic-profile="${member.id}"`)) fail(`${member.id}: perfil no renderizado.`);
  if (!member.formation?.length) fail(`${member.id}: formación vacía.`);
  if (!member.experience?.length) fail(`${member.id}: experiencia vacía.`);
  if (!member.affiliations?.length) warnings.push(`${member.id}: afiliaciones vacías.`);
}
for (const id of ['marino-brito','marc-kelly-jean-philippe','jose-alberto-reyes','alicia-cordero','juan-torregrosa']) if (!ids.includes(id)) fail(`Perfil crítico ausente: ${id}.`);

const module = manifest.activation?.modules?.['academic-background'] || {};
if (manifest.activation?.enabled !== false) fail('Kernel Core global no debe estar activo antes de la fusión autorizada.');
if (manifest.public_site_untouched !== true) fail('El manifiesto debe confirmar que el sitio público está intacto.');
if (module.active !== false) fail('El módulo académico no debe marcarse activo en producción antes de la autorización.');

if (isBranchPreview) {
  if (module.preview_active !== true) fail('El módulo académico debe estar activo solo como preview.');
  if (module.scope !== 'branch-only') fail('El módulo académico debe usar scope branch-only.');
  if (module.status !== 'integrated-branch-preview') fail(`Estado académico inesperado: ${module.status}.`);
}

if (isPublicCandidate) {
  if (!reactivation) fail('Falta el manifiesto de reactivación pública para formacion.html.');
  if (reactivation?.phase !== '2A' || reactivation?.status !== 'candidate-not-active') {
    fail('La candidata pública de Formación no está respaldada por una Fase 2A válida.');
  }
  if (reactivation?.activation_branch !== 'fase-2a-public-reactivation') {
    fail('La rama de activación pública declarada es incorrecta.');
  }
}

console.log(`Formación académica (${isPublicCandidate ? 'candidata pública' : 'vista previa'}): ${members.length} perfiles validados.`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(errors.length ? 'Resultado: FAIL' : 'Resultado: PASS');
process.exit(errors.length ? 1 : 0);
