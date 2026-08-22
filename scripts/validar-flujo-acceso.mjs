#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const rutaSource = await readFile(
  new URL("../src/routes/route.js", import.meta.url),
  "utf8"
);

const importsPublicos = [
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

importsPublicos.forEach((nombre) => {
  assert.ok(
    rutaSource.includes(`() => import("../pages/${nombre}.js")`),
    `Debe conservarse la importación diferida pública de ${nombre}.`
  );
});

assert.doesNotMatch(
  rutaSource,
  /authGuard\.js|login\.js|esperarAutenticacion|crearLogin|RUTAS_PROTEGIDAS/,
  "El flujo público no debe cargar ni consultar autenticación."
);
assert.match(
  rutaSource,
  /async function resolverPagina\(route, page\)[\s\S]*return page\.page\(\);/,
  "resolverPagina debe abrir directamente la página solicitada."
);
assert.match(
  rutaSource,
  /content\.replaceChildren\(crearVistaCargando\(\)\)/,
  "Debe mantenerse un estado de carga mientras llega el módulo."
);
assert.match(
  rutaSource,
  /idNavegacion !== navegacionActiva/,
  "Una navegación obsoleta no debe sustituir la ruta más reciente."
);
assert.match(
  rutaSource,
  /intentarRecuperacionAutomatica/,
  "Debe mantenerse la recuperación de módulos ante fallos transitorios."
);

console.log(
  "✓ Flujo público validado: acceso directo al Laboratorio y herramientas sin usuario ni contraseña."
);
