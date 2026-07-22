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
const loginSource = await readFile(
  new URL("../src/auth/login.js", import.meta.url),
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
assert.doesNotMatch(
  rutaSource,
  /import\(\s*ruta\s*\)/,
  "Las importaciones dinámicas no deben construirse desde una variable."
);
assert.match(
  rutaSource,
  /function crearCargador\(importador, exportacion, mensaje\)/,
  "Las rutas diferidas deben utilizar el cargador seguro y verificable."
);

const modulosDiferidos = [
  "LaboratorioKernel",
  "AsistentePruebas",
  "ComparacionGrupos",
  "CalculadoraDosGrupos",
  "CalculadoraDosMuestrasRelacionadas",
  "CalculadoraTresOMasGrupos",
  "CalculadoraTresOMasMedicionesRelacionadas",
  "CorrelacionAsociacion",
  "CalculadoraRelacionVariables",
  "CalculadoraAsociacionCategorica",
  "CalculadoraEstadisticaDescriptiva",
  "CalculadoraFiabilidadCuestionarios",
  "CalculadoraEvaluacionEducativa",
  "CalculadoraTamanoMuestraPotencia",
  "BibliotecaMetodologica",
  "RegresionModelos",
  "CalculadoraRegresionCompleta",
  "CalculadoraRegresionLogistica",
  "CalculadoraRegresionConteo"
];

modulosDiferidos.forEach((nombre) => {
  assert.ok(
    rutaSource.includes(`() => import("../pages/${nombre}.js")`),
    `Debe existir una importación dinámica literal para ${nombre}.`
  );
});

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
assert.match(
  authSource,
  /sendPasswordResetEmail/,
  "El servicio debe permitir recuperación de contraseña por correo."
);
assert.match(
  loginSource,
  /recuperar-password/,
  "La pantalla de acceso debe ofrecer recuperación de contraseña."
);
assert.match(
  loginSource,
  /Si el correo está autorizado/,
  "La recuperación debe usar un mensaje genérico para evitar enumeración de usuarios."
);
assert.doesNotMatch(
  loginSource,
  /Error:\s*\$\{error\.code/,
  "La interfaz no debe exponer códigos internos de Firebase al usuario."
);

console.log("✓ Seguridad, sesión y carga diferida de rutas validadas.");
