import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const routeSource = await readFile(
  new URL("../src/routes/route.js", import.meta.url),
  "utf8"
);

const publicRoutes = [
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

publicRoutes.forEach(route => {
  assert.ok(
    routeSource.includes(`${route}:`),
    `Falta la ruta pública ${route}.`
  );
});

assert.doesNotMatch(
  routeSource,
  /RUTAS_PROTEGIDAS/,
  "El laboratorio no debe declarar rutas protegidas."
);
assert.doesNotMatch(
  routeSource,
  /authGuard\.js|login\.js|esperarAutenticacion|crearLogin/,
  "El enrutador público no debe cargar autenticación ni pantalla de login."
);
assert.match(
  routeSource,
  /async function resolverPagina\(route, page\)[\s\S]*return page\.page\(\);/,
  "Todas las herramientas deben resolverse directamente."
);

console.log(
  "✓ Laboratorio, asistentes, biblioteca y calculadoras son de acceso público sin usuario ni contraseña."
);
