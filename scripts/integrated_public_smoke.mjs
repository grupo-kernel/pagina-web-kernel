import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = String(process.env.BASE_URL || 'https://www.grupoelkernel.com').replace(/\/$/, '');
const siteOrigin = new URL(base).origin;
const cacheKey = String(process.env.CACHE_KEY || Date.now());
const output = path.resolve(process.env.SMOKE_OUTPUT || path.join(process.cwd(), 'smoke-artifacts'));
const report = {
  base,
  cacheKey,
  generatedAt: new Date().toISOString(),
  passed: false,
  checks: [],
  failures: []
};

await fs.mkdir(output, { recursive: true });

async function record(name, callback) {
  try {
    await callback();
    report.checks.push({ name, passed: true });
    console.log(`PASS ${name}`);
  } catch (error) {
    const message = error instanceof Error ? error.stack || error.message : String(error);
    report.checks.push({ name, passed: false, error: message });
    report.failures.push(`${name}: ${message}`);
    console.error(`FAIL ${name}\n${message}`);
  }
}

async function fetchAsset(asset) {
  const response = await fetch(`${base}/${asset}?smoke=${encodeURIComponent(cacheKey)}`, {
    headers: {
      'cache-control': 'no-cache, no-store, max-age=0',
      pragma: 'no-cache',
      'user-agent': 'Kernel-Integrated-Public-Smoke/2.0'
    }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const body = await response.arrayBuffer();
  if (body.byteLength < 8) throw new Error(`Archivo vacío: ${body.byteLength} bytes`);
  return { response, body };
}

const requiredAssets = [
  'index.html',
  'assets/index-BEtvhqLu.js',
  'assets/index-DDHYSPOT.css',
  'assets/kernel-members-patch.js',
  'assets/kernel-stats-patch.js',
  'assets/kernel-phase1-patch.js',
  'assets/kernel-phase1-fix.js',
  'assets/kernel-i18n-full.js',
  'assets/kernel-miguel-photo-patch.js',
  'assets/alicia-cordero-photo.svg',
  'assets/juan-torregrosa-photo.svg',
  'miguel.jpg',
  'core/data/researchers.v2.json',
  'core/data/publications.v2.json',
  'core/data/projects.v2.json',
  'equipo.html',
  'formacion.html',
  'publicaciones.html',
  'proyectos.html',
  'contacto.html',
  'deployment-version.txt'
];

for (const asset of requiredAssets) {
  await record(`HTTP 200 ${asset}`, async () => {
    await fetchAsset(asset);
  });
}

await record('Catálogos públicos v2 con cifras esperadas', async () => {
  const researchers = JSON.parse(Buffer.from((await fetchAsset('core/data/researchers.v2.json')).body).toString('utf8'));
  const publications = JSON.parse(Buffer.from((await fetchAsset('core/data/publications.v2.json')).body).toString('utf8'));
  const projects = JSON.parse(Buffer.from((await fetchAsset('core/data/projects.v2.json')).body).toString('utf8'));
  if (researchers?.group?.member_count !== 9) throw new Error(`member_count=${researchers?.group?.member_count}`);
  const ids = new Set((researchers.researchers || []).map(item => item.id));
  if (!ids.has('alicia-cordero') || !ids.has('juan-torregrosa')) throw new Error('Faltan Alicia o Juan Ramón en researchers.v2.json');
  if (publications?.summary?.unique_records !== 162 || (publications.records || []).length !== 162) {
    throw new Error(`Publicaciones inesperadas: summary=${publications?.summary?.unique_records}, records=${(publications.records || []).length}`);
  }
  if (projects?.summary?.featured_approved_projects !== 10) {
    throw new Error(`featured_approved_projects=${projects?.summary?.featured_approved_projects}`);
  }
});

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1050 }, locale: 'es-DO' });
const page = await context.newPage();
let localFailures = [];

page.on('response', response => {
  try {
    const url = new URL(response.url());
    if (url.origin === siteOrigin && response.status() >= 400) {
      localFailures.push(`${response.status()} ${url.pathname}`);
    }
  } catch {}
});

page.on('requestfailed', request => {
  try {
    const url = new URL(request.url());
    if (url.origin === siteOrigin) {
      localFailures.push(`FAILED ${url.pathname}: ${request.failure()?.errorText || 'unknown'}`);
    }
  } catch {}
});

async function gotoHash(route) {
  localFailures = [];
  await page.goto(`${base}/?smoke=${encodeURIComponent(cacheKey)}#/${route}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.waitForSelector('body', { timeout: 30000 });
  await page.waitForTimeout(2600);
}

function enforceNoLocalFailures() {
  if (localFailures.length) throw new Error(`Recursos locales fallidos: ${localFailures.join(', ')}`);
}

await record('Portada SPA conserva Servicios, Laboratorio y navegación', async () => {
  localFailures = [];
  await page.goto(`${base}/?smoke=${encodeURIComponent(cacheKey)}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.waitForSelector('#header', { timeout: 30000 });
  await page.waitForSelector('#navBar', { timeout: 30000 });
  await page.waitForSelector('#main', { timeout: 30000 });
  await page.waitForFunction(
    () => /Servicios/i.test(document.body.innerText) && /Laboratorio/i.test(document.body.innerText),
    null,
    { timeout: 30000 }
  );
  await page.waitForSelector('#kernel-language-switch', { timeout: 30000 });
  enforceNoLocalFailures();
  await page.screenshot({ path: path.join(output, 'spa-home-desktop.png'), fullPage: true });
});

await record('Equipo SPA: 9 investigadores, Alicia, Juan Ramón y foto nueva de Miguel', async () => {
  await gotoHash('equipment');
  await page.waitForFunction(
    () => document.body.innerText.includes('Alicia Cordero') && document.body.innerText.includes('Juan Ramón Torregrosa'),
    null,
    { timeout: 30000 }
  );
  await page.waitForSelector('#kernel-international-members', { timeout: 30000 });
  const text = await page.locator('body').innerText();
  if (!/9\s+investigadores/i.test(text)) throw new Error('No se encontró el indicador de 9 investigadores.');
  await page.waitForFunction(
    () => [...document.images].some(image => /miguel\.jpg/i.test(image.currentSrc || image.src)),
    null,
    { timeout: 30000 }
  );
  enforceNoLocalFailures();
  await page.screenshot({ path: path.join(output, 'spa-equipment-desktop.png'), fullPage: true });
});

await record('Cambio completo ES/EN', async () => {
  const button = page.locator('#kernel-language-switch');
  await button.click();
  await page.waitForFunction(() => document.documentElement.lang === 'en', null, { timeout: 10000 });
  const english = await page.locator('body').innerText();
  if (!/(Research team|International researchers|Team)/i.test(english)) {
    throw new Error('No se detectó contenido en inglés después del cambio de idioma.');
  }
  await button.click();
  await page.waitForFunction(() => document.documentElement.lang === 'es', null, { timeout: 10000 });
});

await record('Formación Académica SPA incluye a Alicia y Juan Ramón', async () => {
  await gotoHash('formacionacademica');
  await page.waitForSelector('[data-kernel-academic="alicia-cordero"]', { timeout: 30000 });
  await page.waitForSelector('[data-kernel-academic="juan-torregrosa"]', { timeout: 30000 });
  enforceNoLocalFailures();
  await page.screenshot({ path: path.join(output, 'spa-academic-desktop.png'), fullPage: true });
});

await record('Publicaciones SPA integra autores internacionales y total 572+', async () => {
  await gotoHash('publicaciones');
  await page.waitForSelector('#kernel-international-author-group', { timeout: 30000 });
  const text = await page.locator('body').innerText();
  if (!text.includes('Alicia Cordero') || !text.includes('Juan Ramón Torregrosa')) {
    throw new Error('Autores internacionales ausentes en la sección Publicaciones de la SPA.');
  }
  if (!text.includes('572+')) throw new Error('No se encontró el indicador acumulado 572+.');
  enforceNoLocalFailures();
  await page.screenshot({ path: path.join(output, 'spa-publications-desktop.png'), fullPage: true });
});

await record('Publicaciones 2.0 renderiza los 162 registros', async () => {
  localFailures = [];
  await page.goto(`${base}/publicaciones.html?smoke=${encodeURIComponent(cacheKey)}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.waitForFunction(() => document.querySelector('#statTotal')?.textContent?.trim() === '162', null, { timeout: 30000 });
  await page.waitForFunction(() => document.querySelectorAll('.publication-card').length >= 100, null, { timeout: 30000 });
  enforceNoLocalFailures();
  await page.screenshot({ path: path.join(output, 'publications-2-desktop.png'), fullPage: true });
});

await record('Proyectos renderiza 10 proyectos aprobados destacados', async () => {
  localFailures = [];
  await page.goto(`${base}/proyectos.html?smoke=${encodeURIComponent(cacheKey)}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.waitForFunction(() => document.querySelector('#featuredProjects')?.textContent?.trim() === '10', null, { timeout: 30000 });
  await page.waitForFunction(
    () => document.querySelectorAll('.project-card,[data-project-id]').length > 0,
    null,
    { timeout: 30000 }
  );
  enforceNoLocalFailures();
  await page.screenshot({ path: path.join(output, 'projects-desktop.png'), fullPage: true });
});

await record('Contacto conserva Formspree sin enviar mensajes', async () => {
  localFailures = [];
  await page.goto(`${base}/contacto.html?smoke=${encodeURIComponent(cacheKey)}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  const action = await page.locator('form').first().getAttribute('action');
  if (action !== 'https://formspree.io/f/xqabgepe') throw new Error(`Acción inesperada: ${action}`);
  enforceNoLocalFailures();
});

await record('Equipo móvil sin desbordamiento horizontal', async () => {
  const mobile = await context.newPage();
  await mobile.setViewportSize({ width: 390, height: 844 });
  await mobile.goto(`${base}/?smoke=${encodeURIComponent(cacheKey)}#/equipment`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await mobile.waitForFunction(
    () => document.body.innerText.includes('Alicia Cordero') && document.body.innerText.includes('Juan Ramón Torregrosa'),
    null,
    { timeout: 30000 }
  );
  const dimensions = await mobile.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth
  }));
  if (dimensions.scrollWidth > dimensions.clientWidth + 4) {
    throw new Error(`Desbordamiento horizontal: ${dimensions.scrollWidth}px > ${dimensions.clientWidth}px.`);
  }
  await mobile.screenshot({ path: path.join(output, 'spa-equipment-mobile.png'), fullPage: true });
  await mobile.close();
});

await browser.close();
report.passed = report.failures.length === 0;
await fs.writeFile(path.join(output, 'integrated-smoke-report.json'), JSON.stringify(report, null, 2));

if (!report.passed) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

console.log('FINAL INTEGRATED PUBLIC SMOKE TEST PASS');
