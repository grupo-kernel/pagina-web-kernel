import fs from 'node:fs/promises';
import { orderedAcademicProfiles, renderAcademicProfile } from './modules/academic/academic-renderer.mjs';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const html = await fs.readFile('formacion.html', 'utf8');
const data = await read('core/data/researchers.v2.json');
const manifest = await read('core/manifest.json');
const config = await read('core/quality-gate.config.json');
const errors = [];
const warnings = [];
const fail = message => errors.push(message);

if (!html.includes('data-kernel-core-integration="academic-background"')) fail('formacion.html no declara integración académica.');
if (!html.includes('core/data/researchers.v2.json')) fail('formacion.html no carga researchers.v2.json.');
if (/data\/researchers\.json/.test(html)) fail('formacion.html vuelve a mencionar la fuente pública anterior.');
if (!html.includes('academic-renderer.mjs') || !html.includes('academic-integration.css')) fail('Faltan recursos compartidos del módulo académico.');

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
if (manifest.activation?.enabled !== false) fail('Kernel Core global no debe estar activo.');
if (module.active !== false || module.preview_active !== true) fail('El módulo académico debe estar activo solo como preview.');
if (module.scope !== 'branch-only') fail('El módulo académico debe usar scope branch-only.');
if (module.status !== 'integrated-branch-preview') fail(`Estado académico inesperado: ${module.status}.`);

console.log(`Formación académica: ${members.length} perfiles validados.`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(errors.length ? 'Resultado: FAIL' : 'Resultado: PASS');
process.exit(errors.length ? 1 : 0);
