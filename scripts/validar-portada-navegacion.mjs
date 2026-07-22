import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { MODULOS_LABORATORIO } from "../src/data/modulosLaboratorio.js";

const laboratorio = await readFile(
    new URL("../src/pages/LaboratorioKernel.js", import.meta.url),
    "utf8"
);
const rutas = await readFile(
    new URL("../src/routes/route.js", import.meta.url),
    "utf8"
);
const portada = await readFile(
    new URL("../src/components/Home/PortadaKernel2026.js", import.meta.url),
    "utf8"
);
const principal = await readFile(
    new URL("../src/main.js", import.meta.url),
    "utf8"
);
const pie = await readFile(
    new URL("../src/components/Footer/Footer.js", import.meta.url),
    "utf8"
);

assert.equal(MODULOS_LABORATORIO.length, 9, "El laboratorio debe mantener nueve módulos.");

const ids = MODULOS_LABORATORIO.map((modulo) => modulo.id);
const rutasModulos = MODULOS_LABORATORIO.map((modulo) => modulo.ruta);
assert.equal(new Set(ids).size, ids.length, "Los módulos deben tener identificadores únicos.");
assert.equal(new Set(rutasModulos).size, rutasModulos.length, "Cada módulo debe declarar una ruta única.");

MODULOS_LABORATORIO.forEach((modulo) => {
    assert.ok(modulo.titulo.trim(), `El módulo ${modulo.id} debe tener título.`);
    assert.ok(modulo.descripcion.trim(), `El módulo ${modulo.id} debe tener descripción.`);
    assert.match(
        rutas,
        new RegExp(`\\b${modulo.ruta}\\s*:`),
        `La ruta ${modulo.ruta} debe estar registrada en el enrutador.`
    );
});

assert.match(laboratorio, /MODULOS_LABORATORIO\.map\(crearTarjetaModulo\)/);
assert.match(laboratorio, /data-route=/);
assert.doesNotMatch(laboratorio, /onclick\s*=/i, "La navegación no debe depender de atributos onclick.");
assert.doesNotMatch(principal, /iniciarIntegracionModulosFinalesLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionRegresionLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionFiabilidadLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionEvaluacionEducativaLaboratorio/);

assert.match(portada, /ElKernel\.png/);
assert.match(portada, /#\/laboratorioKernel/);
assert.match(portada, /#\/publicaciones/);
assert.match(portada, /#\/equipment/);
assert.match(portada, /MODULOS_LABORATORIO/);
assert.match(portada, /mleonardos@unapec\.edu\.do/);
assert.match(portada, /ISFODOSU/);
assert.match(portada, /UASD/);
assert.match(portada, /UNAPEC/);

assert.match(pie, /new Date\(\)\.getFullYear\(\)/);
assert.match(pie, /ISFODOSU/);
assert.match(pie, /UNAPEC/);
assert.doesNotMatch(pie, /ISFOOSU/);
assert.doesNotMatch(pie, /_blan"k/);

console.log("✓ Portada, navegación de los nueve módulos y pie de página validados.");
