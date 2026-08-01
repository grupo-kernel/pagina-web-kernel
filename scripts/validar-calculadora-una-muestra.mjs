import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
    pruebaTStudentUnaMuestra,
    pruebaWilcoxonUnaMuestra
} from "../src/utils/estadisticaUnaMuestra.js";

function cerca(actual, esperado, tolerancia = 1e-10) {
    assert.ok(
        Number.isFinite(actual),
        `Se esperaba un número finito, pero se obtuvo ${actual}.`
    );
    assert.ok(
        Math.abs(actual - esperado) <= tolerancia,
        `Se esperaba ${esperado} ± ${tolerancia}, pero se obtuvo ${actual}.`
    );
}

const muestra = [
    72, 68, 75, 71, 74, 69,
    73, 76, 70, 72, 74, 71
];

const resultadoT = pruebaTStudentUnaMuestra(
    muestra,
    70,
    { nivelConfianza: 0.95 }
);

assert.equal(resultadoT.id, "t-student-una-muestra");
assert.equal(resultadoT.muestra.n, 12);
cerca(resultadoT.muestra.media, 72.08333333333333, 1e-12);
cerca(resultadoT.estadistico.valor, 2.970760374304935, 1e-12);
cerca(resultadoT.gradosLibertad, 11, 1e-12);
cerca(resultadoT.valorP, 0.012728035181784102, 2e-12);
cerca(
    resultadoT.intervaloConfianzaMedia.inferior,
    70.53982757303997,
    2e-8
);
cerca(
    resultadoT.intervaloConfianzaMedia.superior,
    73.62683909362669,
    2e-8
);
cerca(
    resultadoT.tamanioEfecto.dCohen,
    0.8575846509014139,
    2e-12
);
cerca(
    resultadoT.tamanioEfecto.gHedges,
    0.7977531636292222,
    2e-12
);

const resultadoWilcoxon = pruebaWilcoxonUnaMuestra(
    muestra,
    70
);

assert.equal(resultadoWilcoxon.id, "wilcoxon-una-muestra");
assert.equal(resultadoWilcoxon.nEfectivo, 11);
assert.equal(resultadoWilcoxon.cantidadCeros, 1);
cerca(resultadoWilcoxon.sumaRangosPositivos, 59, 1e-12);
cerca(resultadoWilcoxon.sumaRangosNegativos, 7, 1e-12);
cerca(resultadoWilcoxon.estadistico.valor, 7, 1e-12);
cerca(resultadoWilcoxon.estadisticoZ, 2.2773758315144432, 1e-12);
cerca(resultadoWilcoxon.valorP, 0.02276379207860546, 2e-12);
cerca(
    resultadoWilcoxon.tamanioEfecto.correlacionBiserialRangos,
    0.7878787878787878,
    1e-12
);
cerca(resultadoWilcoxon.estimadorHodgesLehmann, 2, 1e-12);

const fuentePagina = await readFile(
    new URL(
        "../src/pages/CalculadoraUnaMuestra.js",
        import.meta.url
    ),
    "utf8"
);
const fuenteIntegracion = await readFile(
    new URL(
        "../src/utils/integrarUnaMuestra.js",
        import.meta.url
    ),
    "utf8"
);
const fuenteMain = await readFile(
    new URL("../src/main.js", import.meta.url),
    "utf8"
);

assert.match(fuentePagina, /formulario-una-muestra/);
assert.match(fuentePagina, /t-una-muestra/);
assert.match(fuentePagina, /wilcoxon-una-muestra/);
assert.match(fuentePagina, /prepararExportacionCalculadora/);
assert.match(fuenteIntegracion, /categoria: comparacion de una muestra/);
assert.match(fuenteIntegracion, /data-calculadora-una-muestra-card/);
assert.match(fuenteIntegracion, /CalculadoraUnaMuestra/);
assert.match(fuenteMain, /iniciarIntegracionUnaMuestra/);

console.log(
    "✓ La calculadora de una muestra validó t de Student, Wilcoxon, integración, ejemplo y exportación."
);
