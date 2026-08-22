import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const rutaSource = await readFile(
  new URL("../src/routes/route.js", import.meta.url),
  "utf8"
);
const laboratorioSource = await readFile(
  new URL("../src/pages/LaboratorioKernel.js", import.meta.url),
  "utf8"
);

const rutasPublicasLaboratorio = [
  "laboratorioKernel",
  "asistentePruebas",
  "comparacionGrupos",
  "calculadoraDosGrupos",
  "calculadoraDosMuestrasRelacionadas",
  "calculadoraTresOMasGrupos",
  "calculadoraTresOMasMedicionesRelacionadas",
  "correlacionAsociacion",
  "calculadoraRelacionVariables",
  "calculadoraAsociacionCategorica",
  "calculadoraEstadisticaDescriptiva",
  "calculadoraFiabilidadCuestionarios",
  "calculadoraEvaluacionEducativa",
  "calculadoraTamanoMuestraPotencia",
  "bibliotecaMetodologica",
  "regresionModelos",
  "calculadoraRegresion",
  "calculadoraRegresionLogistica",
  "calculadoraRegresionConteo"
];

rutasPublicasLaboratorio.forEach((ruta) => {
  assert.ok(
    rutaSource.includes(`${ruta}:`),
    `La ruta pública ${ruta} debe existir.`
  );
});

assert.doesNotMatch(
  rutaSource,
  /RUTAS_PROTEGIDAS/,
  "El enrutador no debe mantener una lista de rutas protegidas."
);
assert.doesNotMatch(
  rutaSource,
  /authGuard\.js|login\.js|esperarAutenticacion|crearLogin/,
  "El acceso al laboratorio no debe depender de Firebase, usuario o contraseña."
);
assert.match(
  rutaSource,
  /async function resolverPagina\(route, page\)[\s\S]*return page\.page\(\);/,
  "La resolución de páginas debe abrir directamente la herramienta solicitada."
);
assert.doesNotMatch(
  laboratorioSource,
  /esperarAutenticacion|crearLogin/,
  "El Laboratorio no debe implementar un segundo control de acceso."
);
assert.match(
  rutaSource,
  /function crearCargador\(importador, exportacion, mensaje\)/,
  "Debe conservarse la carga diferida segura de las herramientas."
);
assert.match(
  rutaSource,
  /importarConReintento/,
  "La carga diferida debe conservar recuperación ante fallos transitorios."
);
assert.match(
  rutaSource,
  /navegacionActiva/,
  "El enrutador debe seguir invalidando navegaciones asíncronas obsoletas."
);
assert.match(
  rutaSource,
  /aria-busy/,
  "La interfaz debe conservar estados accesibles durante la carga."
);

console.log(
  "✓ Laboratorio público validado: acceso directo sin autenticación, manteniendo carga diferida y recuperación de errores."
);
