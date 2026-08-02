import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
    pruebaMcNemar,
    pruebaCochranQ
} from "../src/utils/estadisticaProporcionesRelacionadas.js";

function cerca(actual, esperado, tolerancia = 1e-10) {
    assert.ok(Number.isFinite(actual), `Se esperaba un número finito, pero se obtuvo ${actual}.`);
    assert.ok(
        Math.abs(actual - esperado) <= tolerancia,
        `Se esperaba ${esperado} ± ${tolerancia}, pero se obtuvo ${actual}.`
    );
}

const datosMcNemar = [
    [1, 1], [1, 1], [1, 0],
    [0, 1], [0, 1], [0, 1], [0, 1],
    [0, 1], [0, 1], [0, 1],
    [0, 0], [0, 0]
];

const mcnemarExacta = pruebaMcNemar(datosMcNemar, {
    etiquetas: ["Antes", "Después"],
    nivelConfianza: 0.95,
    metodo: "exacta"
});

assert.equal(mcnemarExacta.id, "mcnemar");
assert.equal(mcnemarExacta.n, 12);
assert.equal(mcnemarExacta.tablaPareada.cambio01, 7);
assert.equal(mcnemarExacta.tablaPareada.cambio10, 1);
assert.equal(mcnemarExacta.discordantes, 8);
cerca(mcnemarExacta.estadistico.valor, 1, 1e-12);
cerca(mcnemarExacta.valorP, 0.0703125, 1e-12);
cerca(mcnemarExacta.diferenciaProporciones, 0.5, 1e-12);
cerca(mcnemarExacta.tamanioEfecto.oddsRatioPareada, 7, 1e-12);

const mcnemarAsintotica = pruebaMcNemar(datosMcNemar, {
    etiquetas: ["Antes", "Después"],
    metodo: "asintotica"
});
cerca(mcnemarAsintotica.estadistico.valor, 3.125, 1e-12);
cerca(mcnemarAsintotica.valorP, 0.07709987174354205, 2e-8);

const datosCochran = [
    [1, 1, 0], [1, 1, 0], [1, 1, 0],
    [1, 0, 0], [1, 0, 0], [1, 0, 0],
    [1, 1, 1], [1, 1, 0], [0, 1, 0],
    [1, 0, 0], [1, 0, 1], [0, 0, 0]
];

const cochran = pruebaCochranQ(datosCochran, {
    etiquetas: ["Método A", "Método B", "Método C"],
    nivelConfianza: 0.95
});

assert.equal(cochran.id, "q-cochran");
assert.deepEqual(
    cochran.resumenCondiciones.map((condicion) => condicion.exitos),
    [10, 6, 2]
);
cerca(cochran.estadistico.valor, 9.6, 1e-12);
assert.equal(cochran.gradosLibertad, 2);
cerca(cochran.valorP, 0.00822974704902002, 2e-8);
cerca(cochran.tamanioEfecto.wKendallEquivalente, 0.4, 1e-12);
assert.equal(cochran.comparacionesPosteriores.length, 3);
cochran.comparacionesPosteriores.forEach((comparacion) => {
    assert.ok(comparacion.valorPAjustadoHolm >= comparacion.valorP);
    assert.ok(comparacion.valorPAjustadoHolm <= 1);
});

const fuentePagina = await readFile(
    new URL("../src/pages/CalculadoraProporcionesRelacionadas.js", import.meta.url),
    "utf8"
);
const fuenteIntegracion = await readFile(
    new URL("../src/utils/integrarProporcionesRelacionadas.js", import.meta.url),
    "utf8"
);
const fuenteMain = await readFile(
    new URL("../src/main.js", import.meta.url),
    "utf8"
);

assert.match(fuentePagina, /formulario-proporciones-relacionadas/);
assert.match(fuentePagina, /mcnemar/);
assert.match(fuentePagina, /q-cochran/);
assert.match(fuentePagina, /prepararExportacionCalculadora/);
assert.match(fuentePagina, /ajuste de Holm/i);
assert.match(fuenteIntegracion, /prueba de mcnemar/);
assert.match(fuenteIntegracion, /prueba q de cochran/);
assert.match(fuenteIntegracion, /data-proporciones-relacionadas-card/);
assert.match(fuenteMain, /iniciarIntegracionProporcionesRelacionadas/);

console.log(
    "✓ Proporciones relacionadas: McNemar exacta/asintótica, Q de Cochran, Holm, integración y exportación validadas."
);
