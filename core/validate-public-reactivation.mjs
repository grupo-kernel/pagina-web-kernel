import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const manifestPath = path.join(ROOT, 'core/activation/public-reactivation-manifest.json');
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const errors = [];
const pageContents = new Map();

const exists = async filePath => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

if (manifest.phase !== '2A') errors.push('Fase de activación inválida');
if (manifest.status !== 'candidate-not-active') errors.push('La candidata no está marcada como no activa');
if (manifest.source_branch !== 'hito-1-kernel-core') errors.push('Rama fuente inesperada');
if (!manifest.requires_explicit_approval) errors.push('Falta exigir aprobación explícita');

for (const branch of ['main', 'gh-pages']) {
  if (!manifest.target_branches?.includes(branch)) errors.push(`Rama objetivo no declarada: ${branch}`);
}

const forbiddenPreviewPatterns = [
  /Vista controlada/i,
  /branch-preview-active/i,
  /La plataforma pública continúa usando su fuente anterior/i,
  /Proyectos en Desarrollo/i,
  /candidate-not-active/i
];

for (const page of manifest.required_pages || []) {
  try {
    const html = await fs.readFile(path.join(ROOT, page), 'utf8');
    pageContents.set(page, html);
    if (!/<html\b/i.test(html)) errors.push(`${page}: HTML inválido`);
    if (!/<html[^>]+lang=["']es["']/i.test(html)) errors.push(`${page}: falta idioma español en html`);
    if (!/<meta[^>]+name=["']viewport["']/i.test(html)) errors.push(`${page}: falta meta viewport`);
    if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${page}: falta título`);
    if ((html.match(/<!doctype\s+html>/gi) || []).length !== 1) errors.push(`${page}: debe contener un único doctype HTML`);
    if (!html.includes('assets/css/kernel.css')) errors.push(`${page}: no usa la identidad visual compartida de Kernel`);
    if (!/class=["'][^"']*skip-link/i.test(html)) errors.push(`${page}: falta enlace para saltar al contenido`);
    if (!/\bid=["']contenido["']/i.test(html)) errors.push(`${page}: falta el destino accesible #contenido`);
    if (!/href=["']formacion\.html(?:[#?][^"']*)?["']/i.test(html)) errors.push(`${page}: el menú no incluye Formación`);
    for (const pattern of forbiddenPreviewPatterns) {
      if (pattern.test(html)) errors.push(`${page}: conserva contenido o marcadores de vista previa (${pattern.source})`);
    }
  } catch {
    errors.push(`Página requerida ausente: ${page}`);
  }
}

const localReferencePattern = /(?:href|src)=["']([^"']+)["']/gi;
for (const [page, html] of pageContents) {
  for (const match of html.matchAll(localReferencePattern)) {
    const reference = match[1].trim();
    if (!reference || reference.includes('${') || reference.includes('{{')) continue;
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|#|\/\/)/i.test(reference)) continue;
    const clean = reference.split('#')[0].split('?')[0];
    if (!clean) continue;
    let decoded;
    try { decoded = decodeURIComponent(clean); } catch { decoded = clean; }
    const relative = decoded.startsWith('/') ? decoded.slice(1) : path.join(path.dirname(page), decoded);
    const resolved = path.resolve(ROOT, relative);
    if (!resolved.startsWith(path.resolve(ROOT) + path.sep) && resolved !== path.resolve(ROOT)) {
      errors.push(`${page}: referencia local insegura ${reference}`);
      continue;
    }
    if (!(await exists(resolved))) errors.push(`${page}: recurso local ausente ${reference}`);
  }
}

const teamHtml = pageContents.get('equipo.html') || '';
const academicHtml = pageContents.get('formacion.html') || '';
const projectsHtml = pageContents.get('proyectos.html') || '';
if (!teamHtml.includes('data-kernel-core-status="public-ready"')) errors.push('equipo.html no está marcado como candidata pública');
if (!academicHtml.includes('data-kernel-core-status="public-ready"')) errors.push('formacion.html no está marcado como candidata pública');
for (const token of [
  'core/data/projects.v2.json',
  'core/data/researchers.v2.json',
  'core/modules/projects/projects-renderer.mjs',
  "profileBase:'equipo.html#'"
]) {
  if (!projectsHtml.includes(token)) errors.push(`proyectos.html: falta integración pública ${token}`);
}

for (const temporaryPath of [
  'scripts/apply-public-activation-layout.py',
  'scripts/normalize-public-navigation.py',
  '.github/workflows/apply-public-activation-layout.yml',
  '.github/workflows/normalize-public-navigation.yml',
  'core/activation/layout.part00',
  'core/activation/layout.part01',
  'core/activation/layout.part02',
  'core/activation/layout.part03',
  'core/activation/layout.part04'
]) {
  if (await exists(path.join(ROOT, temporaryPath))) errors.push(`Archivo temporal no retirado: ${temporaryPath}`);
}

const pending = manifest.pending_before_activation || [];
const photo = pending.find(item => item.path === 'miguel.jpg');
if (!photo || photo.required !== true) {
  errors.push('No se documentó el reemplazo obligatorio de miguel.jpg');
} else {
  if (photo.status !== 'completed') errors.push('La sustitución de miguel.jpg no está marcada como completada');
  try {
    const photoBuffer = await fs.readFile(path.join(ROOT, 'miguel.jpg'));
    if (photoBuffer.length < 8) {
      errors.push('miguel.jpg está vacío o incompleto');
    } else {
      const isJpeg = photoBuffer[0] === 0xff && photoBuffer[1] === 0xd8 && photoBuffer[2] === 0xff;
      const isPng = photoBuffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
      const detectedFormat = isJpeg ? 'jpeg' : isPng ? 'png' : 'unknown';
      if (detectedFormat === 'unknown') errors.push('miguel.jpg no contiene una imagen JPEG o PNG válida');
      if (photo.detected_format && photo.detected_format !== detectedFormat) {
        errors.push(`El formato documentado de miguel.jpg (${photo.detected_format}) no coincide con el detectado (${detectedFormat})`);
      }
    }
  } catch {
    errors.push('miguel.jpg no existe en la candidata de activación');
  }
}

const snapshots = manifest.preactivation_snapshots || {};
for (const [name, snapshot] of [['main', snapshots.main], ['gh-pages', snapshots.gh_pages]]) {
  if (!snapshot || !/^[0-9a-f]{40}$/i.test(snapshot.sha || '')) errors.push(`SHA previo inválido o ausente para ${name}`);
  if (!snapshot?.rollback_branch) errors.push(`Rama de reversión ausente para ${name}`);
}

const rollback = manifest.rollback || {};
if (!rollback.main_must_be_snapshotted || !rollback.gh_pages_must_be_snapshotted || !rollback.post_activation_smoke_test_required) {
  errors.push('El plan de reversión está incompleto');
}

if (errors.length) {
  console.error('Public reactivation validation failed:');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Public Reactivation Gate PASS: ${manifest.required_pages.length} páginas verificadas, navegación unificada, recursos locales presentes, fotografía validada y respaldos registrados. La activación continúa bloqueada hasta la revisión visual y la aprobación explícita.`);
