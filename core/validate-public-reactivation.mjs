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
if (!photo || photo.required !== true) errors.push('No se documentó el reemplazo obligatorio de miguel.jpg');

const rollback = manifest.rollback || {};
if (!rollback.main_must_be_snapshotted || !rollback.gh_pages_must_be_snapshotted || !rollback.post_activation_smoke_test_required) {
  errors.push('El plan de reversión está incompleto');
}

if (errors.length) {
  console.error('Public reactivation validation failed:');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Public Reactivation Gate PASS: ${manifest.required_pages.length} páginas verificadas; activación aún bloqueada hasta aprobación explícita y sustitución de miguel.jpg.`);
