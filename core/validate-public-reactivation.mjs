import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const manifestPath = path.join(ROOT, 'core/activation/public-reactivation-manifest.json');
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const errors = [];

if (manifest.phase !== '2A') errors.push('Fase de activación inválida');
if (manifest.status !== 'candidate-not-active') errors.push('La candidata no está marcada como no activa');
if (manifest.source_branch !== 'hito-1-kernel-core') errors.push('Rama fuente inesperada');
if (!manifest.requires_explicit_approval) errors.push('Falta exigir aprobación explícita');

for (const branch of ['main', 'gh-pages']) {
  if (!manifest.target_branches?.includes(branch)) errors.push(`Rama objetivo no declarada: ${branch}`);
}

for (const page of manifest.required_pages || []) {
  try {
    const html = await fs.readFile(path.join(ROOT, page), 'utf8');
    if (!/<html\b/i.test(html)) errors.push(`${page}: HTML inválido`);
    if (!/<meta[^>]+name=["']viewport["']/i.test(html)) errors.push(`${page}: falta meta viewport`);
    if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${page}: falta título`);
  } catch {
    errors.push(`Página requerida ausente: ${page}`);
  }
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

console.log(`Public Reactivation Gate PASS: ${manifest.required_pages.length} páginas verificadas, fotografía validada y respaldos previos registrados. La activación continúa bloqueada hasta la revisión visual y la aprobación explícita.`);
