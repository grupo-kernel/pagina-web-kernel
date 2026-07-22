import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const rutaSource = await readFile(
  new URL("../src/routes/route.js", import.meta.url),
  "utf8"
);
const authSource = await readFile(
  new URL("../src/auth/authService.js", import.meta.url),
  "utf8"
);

const bloqueProtegido = rutaSource.match(
  /const RUTAS_PROTEGIDAS = new Set\(\[([\s\S]*?)\]\);/
);
assert.ok(
  bloqueProtegido,
  "El enrutador debe declarar RUTAS_PROTEGIDAS."
);

const rutasProtegidas = new Set(
  [...bloqueProtegido[1].matchAll(/"([^"]+)"/g)]
    .map((coincidencia) => coincidencia[1])
);

const esperadas = [
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

esperadas.forEach((ruta) => {
  assert.ok(
    rutasProtegidas.has(ruta),
    `La ruta ${ruta} debe requerir autenticación.`
  );
});

[
  "home",
  "quienesSomos",
  "equipment",
  "noticias",
  "publicaciones",
  "proyectos",
  "lineas",
  "contacto",
  "herramientas"
].forEach((ruta) => {
  assert.ok(
    !rutasProtegidas.has(ruta),
    `La ruta pública ${ruta} no debe quedar bloqueada.`
  );
});

assert.match(
  rutaSource,
  /esperarAutenticacion/,
  "El enrutador debe consultar el estado de autenticación."
);
assert.match(
  rutaSource,
  /crearLogin/,
  "El enrutador debe mostrar el acceso cuando no exista una sesión."
);
assert.match(
  rutaSource,
  /resolverPagina/,
  "La resolución de páginas debe pasar por el guard de rutas."
);
assert.match(
  authSource,
  /browserSessionPersistence/,
  "La sesión debe persistir durante la sesión del navegador."
);
assert.match(
  authSource,
  /inMemoryPersistence/,
  "Debe existir un respaldo temporal cuando sessionStorage no esté disponible."
);

console.log("✓ Seguridad de rutas y persistencia validada.");
