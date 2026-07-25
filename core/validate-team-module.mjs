import fs from 'node:fs/promises';
import { renderTeamModule, orderedResearchers } from './modules/team/team-renderer.mjs';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const config = await read('core/quality-gate.config.json');
const manifest = await read('core/manifest.json');
const data = await read(config.sources.researchers);
const expectedIds = config.expected.researcher_ids;
const errors = [];
const warnings = [];

const fail = message => errors.push(message);
const warn = message => warnings.push(message);
const count = (text, pattern) => (text.match(pattern) || []).length;

const members = orderedResearchers(data);
if (members.length !== config.expected.researcher_count) fail(`El módulo Equipo renderiza ${members.length} miembros; se esperaban ${config.expected.researcher_count}.`);

const ids = members.map(member => member.id);
const orderMatches = expectedIds.every((id, index) => ids[index] === id);
if (!orderMatches) fail(`El orden del módulo Equipo no coincide. Obtenido: ${ids.join(', ')}`);

const htmlEs = renderTeamModule(data, { locale: 'es' });
const htmlEn = renderTeamModule(data, { locale: 'en' });

if (count(htmlEs, /data-kernel-researcher-card=/g) !== expectedIds.length) fail('La vista ES no contiene exactamente nueve tarjetas.');
if (count(htmlEn, /data-kernel-researcher-card=/g) !== expectedIds.length) fail('La vista EN no contiene exactamente nueve tarjetas.');

for (const member of members) {
  if (!htmlEs.includes(`data-kernel-researcher-card="${member.id}"`)) fail(`${member.id}: tarjeta ausente en ES.`);
  if (!htmlEn.includes(`data-kernel-researcher-card="${member.id}"`)) fail(`${member.id}: tarjeta ausente en EN.`);
  if (!htmlEs.includes(member.name)) fail(`${member.id}: nombre ausente en ES.`);
  if (!htmlEn.includes(member.name)) fail(`${member.id}: nombre ausente en EN.`);
  if (!member.image?.current) fail(`${member.id}: falta imagen actual para el módulo Equipo.`);
  if (!member.contact?.email) warn(`${member.id}: no tiene correo público registrado.`);
  if (!member.profiles?.orcid) warn(`${member.id}: no tiene ORCID público registrado.`);
}

for (const required of ['marino-brito', 'marc-kelly-jean-philippe', 'jose-alberto-reyes', 'alicia-cordero', 'juan-torregrosa']) {
  if (!htmlEs.includes(`data-kernel-researcher-card="${required}"`)) fail(`Perfil crítico ausente: ${required}.`);
}

if (!htmlEs.includes('Investigador(a) internacional') || !htmlEn.includes('International researcher')) {
  fail('La etiqueta de investigadores internacionales no aparece en ambos idiomas.');
}

if (manifest.activation?.enabled !== false) fail('Kernel Core no debe estar activado globalmente durante la Fase 1L.');
if (manifest.activation?.modules?.team?.status !== 'preview-ready') fail('El módulo Team debe estar en status preview-ready.');
if (manifest.activation?.modules?.team?.active !== false) fail('El módulo Team no debe estar activo en producción todavía.');

console.log(`Equipo Kernel Core: ${members.length} tarjetas validadas.`);
warnings.forEach(item => console.log(`ADVERTENCIA: ${item}`));
errors.forEach(item => console.error(`ERROR: ${item}`));
console.log(errors.length ? 'Resultado: FAIL' : 'Resultado: PASS');
process.exit(errors.length ? 1 : 0);
