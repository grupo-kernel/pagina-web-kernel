import assert from "node:assert/strict";
import {
    analizarDatosIndividuales,
    analizarDatosConFrecuencias,
    analizarDatosAgrupados,
    analizarEstadisticaDescriptiva
} from "../src/utils/estadisticaDescriptiva.js";

function cerca(actual, esperado, tolerancia = 1e-10) {
    assert.ok(
        Math.abs(actual - esperado) <= tolerancia,
        `Se esperaba ${esperado}, pero se obtuvo ${actual}.`
    );
}

function probarIndividuales() {
    const resultado = analizarDatosIndividuales([1, 2, 3, 4]);
    const r = resultado.resumen;

    assert.equal(resultado.tipoDatos, "individuales");
    assert.equal(r.n, 4);
    assert.equal(r.suma, 10);
    cerca(r.media, 2.5);
    cerca(r.mediana, 2.5);
    cerca(r.q1, 1.75);
    cerca(r.q3, 3.25);
    cerca(r.varianzaPoblacional, 1.25);
    cerca(r.varianzaMuestral, 5 / 3);
    assert.equal(resultado.tablaFrecuencias.length, 4);
}

function probarFrecuencias() {
    const resultado = analizarDatosConFrecuencias({
        valores: [1, 2, 3],
        frecuencias: [1, 2, 1]
    });
    const r = resultado.resumen;

    assert.equal(resultado.tipoDatos, "frecuencias");
    assert.equal(r.n, 4);
    cerca(r.media, 2);
    cerca(r.mediana, 2);
    assert.deepEqual(r.moda.valores, [2]);
    assert.equal(resultado.tablaFrecuencias.at(-1).frecuenciaAcumulada, 4);
}

function probarIntervalos() {
    const resultado = analizarDatosAgrupados([
        {
            limiteInferior: 0,
            limiteSuperior: 10,
            frecuencia: 2
        },
        {
            limiteInferior: 10,
            limiteSuperior: 20,
            frecuencia: 2
        }
    ]);
    const r = resultado.resumen;

    assert.equal(resultado.tipoDatos, "intervalos");
    assert.equal(resultado.aproximado, true);
    assert.equal(r.n, 4);
    cerca(r.media, 10);
    cerca(r.mediana, 10);
    assert.equal(resultado.tablaFrecuencias.length, 2);
    assert.equal(resultado.tablaFrecuencias.at(-1).frecuenciaAcumulada, 4);
}

function probarDespachadorYErrores() {
    const resultado = analizarEstadisticaDescriptiva({
        tipoDatos: "individuales",
        valores: [5, 5, 7]
    });

    assert.equal(resultado.resumen.n, 3);
    assert.throws(
        () => analizarDatosIndividuales([1]),
        /al menos dos observaciones/i
    );
    assert.throws(
        () => analizarDatosConFrecuencias({
            valores: [1, 2],
            frecuencias: [1, -1]
        }),
        /entero no negativo/i
    );
}

probarIndividuales();
probarFrecuencias();
probarIntervalos();
probarDespachadorYErrores();

console.log(
    "✓ El motor de estadística descriptiva superó todas las pruebas."
);
