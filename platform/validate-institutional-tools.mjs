import fs from 'node:fs/promises';
import path from 'node:path';

const errors = [];
const checks = [];
const pass = message => checks.push(message);
const fail = message => errors.push(message);
const readText = file => fs.readFile(file, 'utf8');

const index = await readText('index.html');
const moduleMatch = index.match(/<script[^>]+type=["']module["'][^>]+src=["']\.\/([^"']+)["']/i);
if (!moduleMatch) {
  fail('No se encontró el módulo principal de la plataforma.');
} else {
  const bundlePath = moduleMatch[1];
  const bundle = await readText(bundlePath);

  const xmeraTokens = [
    'ITLA · Xmera',
    'id="tab-xmera"',
    'id="panel-xmera"',
    'id="xmera-input"',
    'id="xmera-generate"',
    'id="xmera-copy"',
    'id="xmera-clear"',
    'id="xmera-output"'
  ];
  for (const token of xmeraTokens) {
    if (!bundle.includes(token)) fail(`Xmera perdió el componente ${token}.`);
  }
  if (!xmeraTokens.some(token => bundle.includes(token))) fail('No se detectó la herramienta ITLA · Xmera.');
  else pass('ITLA · Xmera y sus controles de procesamiento local detectados');

  const bannerTokens = [
    'APEC · Banner',
    'id="tab-banner"',
    'id="panel-banner"',
    'id="banner-primer-input"',
    'id="banner-segundo-input"',
    'id="banner-final-input"',
    'Banner_APEC_Primer_Periodo_1AC.csv',
    'Banner_APEC_Primer_Periodo_2PP.csv',
    'Banner_APEC_Segundo_Periodo_3SP.csv',
    'Banner_APEC_Examen_Final_4EF.csv'
  ];
  for (const token of bannerTokens) {
    if (!bundle.includes(token)) fail(`Banner perdió el componente ${token}.`);
  }
  if (bannerTokens.every(token => bundle.includes(token))) pass('UNAPEC/APEC · Banner conserva 1AC, 2PP, 3SP y 4EF');

  for (const routeToken of ['laboratorioKernel', 'herramientas']) {
    if (!bundle.includes(routeToken)) fail(`Falta la ruta crítica ${routeToken}.`);
  }

  const requiredChunkPrefixes = [
    'authGuard-',
    'authService-',
    'firebase-',
    'LaboratorioKernel-',
    'AsistentePruebas-',
    'CalculadoraDosGrupos-',
    'CalculadoraDosMuestrasRelacionadas-',
    'CalculadoraTresOMasGrupos-',
    'CalculadoraTresOMasMedicionesRelacionadas-',
    'CalculadoraRelacionVariables-',
    'CalculadoraAsociacionCategorica-',
    'CalculadoraEstadisticaDescriptiva-',
    'CalculadoraFiabilidadCuestionarios-',
    'CalculadoraEvaluacionEducativa-',
    'CalculadoraTamanoMuestraPotencia-',
    'BibliotecaMetodologica-',
    'CalculadoraRegresionCompleta-',
    'CalculadoraRegresionLogistica-',
    'CalculadoraRegresionConteo-'
  ];

  const referencedChunks = [...bundle.matchAll(/\.\/([A-Za-z0-9_.-]+\.js)/g)].map(match => match[1]);
  for (const prefix of requiredChunkPrefixes) {
    const candidates = referencedChunks.filter(file => file.startsWith(prefix));
    if (!candidates.length) {
      fail(`El Laboratorio no referencia ningún chunk ${prefix}*.js.`);
      continue;
    }
    let found = false;
    for (const file of candidates) {
      try {
        await fs.access(path.join('assets', file));
        found = true;
        break;
      } catch {
        // Continúa con otra versión hash del mismo componente.
      }
    }
    if (!found) fail(`No existe en assets un chunk utilizable para ${prefix}*.js.`);
  }
  if (!errors.some(error => /Laboratorio|chunk|ruta crítica/.test(error))) {
    pass('Laboratorio Inteligente, autenticación y dieciséis módulos científicos detectados');
  }
}

console.log('\n=== INSTITUTIONAL TOOLS AND LABORATORY GATE ===');
checks.forEach(item => console.log(`✓ ${item}`));
if (errors.length) {
  errors.forEach(item => console.error(`✗ ${item}`));
  console.error(`Resultado: FAIL | errores=${errors.length}`);
  process.exit(1);
}
console.log('Resultado: PASS');
