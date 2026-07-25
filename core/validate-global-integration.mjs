import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const manifestPath = path.join(ROOT, 'core/integration/global-integration-manifest.json');
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const errors = [];

const requiredModules = ['team','academic','scientific-profiles','publications','projects'];
for (const moduleName of requiredModules) {
  if (!manifest.integrated_modules.includes(moduleName)) errors.push(`Módulo no declarado: ${moduleName}`);
}

for (const page of manifest.required_pages || []) {
  try {
    const html = await fs.readFile(path.join(ROOT, page), 'utf8');
    if (!/<html\b/i.test(html)) errors.push(`${page}: documento HTML inválido`);
    if (!/<meta[^>]+name=["']viewport["']/i.test(html)) errors.push(`${page}: falta meta viewport`);
    if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${page}: falta título`);
    if (!/href=["'](?:index|quienes_somos|equipo|lineas|proyectos|publicaciones|noticias|contacto)\.html/i.test(html)) {
      errors.push(`${page}: no contiene navegación interna reconocible`);
    }
  } catch {
    errors.push(`Página requerida ausente: ${page}`);
  }
}

const requirements = manifest.global_requirements || {};
for (const key of ['navigation_consistency','shared_visual_language','responsive_review','accessibility_review','internal_link_validation','translation_readiness','activation_requires_explicit_approval']) {
  if (requirements[key] !== true) errors.push(`Requisito global no activado: ${key}`);
}

if (!Array.isArray(manifest.production_branches_untouched) || !manifest.production_branches_untouched.includes('main') || !manifest.production_branches_untouched.includes('gh-pages')) {
  errors.push('La protección de main y gh-pages no está declarada correctamente');
}

if (errors.length) {
  console.error('Global integration validation failed:');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Global integration PASS: ${manifest.required_pages.length} páginas y ${manifest.integrated_modules.length} módulos verificados.`);
