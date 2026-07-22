import assert from "node:assert/strict";
import {
    analizarFiabilidadCuestionario
} from "../src/utils/fiabilidadCuestionarios.js";

function cerca(actual, esperado, tolerancia = 1e-9) {
    assert.ok(
        Math.abs(actual - esperado) <= tolerancia,
        `Se esperaba ${esperado}, pero se obtuvo ${actual}.`
    );
}

const matriz = [
    [4, 4, 3, 4, 4, 2],
    [3, 4, 3, 3, 4, 2],
    [5, 5, 4, 5, 5, 1],
    [2, 3, 2, 3, 2, 4],
    [4, 5, 4, 4, 5, 1],
    [3, 3, 3, 4, 3, 3],
    [5, 4, 5, 5, 4, 1],
    [2, 2, 3, 2, 2, 5],
    [4, 4, 4, 3, 4, 2],
    [3, 4, 2, 3, 3, 3],
    [5, 5, 5, 4, 5, 1],
    [1, 2, 2, 2, 1, 5],
    [4, 3, 4, 4, 4, 2],
    [3, 3, 2, 4, 3, 3],
    [5, 4, 4, 5, 5, 1],
    [2, 3, 3, 2, 3, 4],
    [4, 5, 3, 4, 4, 2],
    [3, 2, 3, 3, 2, 4],
    [5, 5, 4, 5, 4, 1],
    [2, 2, 2, 3, 2, 5],
    [4, 4, 5, 4, 5, 1],
    [3, 3, 4, 3, 3, 3],
    [5, 4, 5, 4, 5, 1],
    [2, 3, 2, 2, 3, 4]
];

function probarFiabilidadCompleta() {
    const resultado = analizarFiabilidadCuestionario({
        matriz,
        nombresItems: [
            "Planificación",
            "Persistencia",
            "Autonomía",
            "Participación",
            "Confianza",
            "Desmotivación"
        ],
        itemsInvertidos: [5],
        minimoEscala: 1,
        maximoEscala: 5
    });

    assert.equal(resultado.n, 24);
    assert.equal(resultado.k, 6);
    assert.deepEqual(resultado.itemsInvertidos, [6]);
    cerca(
        resultado.fiabilidad.alfaCronbach,
        0.9580412604851507,
        1e-10
    );
    cerca(
        resultado.fiabilidad.alfaEstandarizado,
        0.9586880635798252,
        1e-10
    );
    cerca(
        resultado.fiabilidad.correlacionInteritemMedia,
        0.7945633173408776,
        1e-10
    );
    assert.ok(
        resultado.fiabilidad.omegaTotalAproximado > 0 &&
        resultado.fiabilidad.omegaTotalAproximado <= 1
    );
    assert.equal(resultado.items.length, 6);
    assert.equal(resultado.correlaciones.length, 6);
    assert.ok(
        resultado.items.every((item) =>
            Number.isFinite(item.correlacionItemTotal)
        )
    );
    assert.ok(resultado.distribucionTotal.length >= 4);
}

function probarExclusionesReportadas() {
    const resultado = analizarFiabilidadCuestionario({
        matriz: matriz.slice(0, 8),
        nombresItems: Array.from(
            { length: 6 },
            (_, indice) => `Ítem ${indice + 1}`
        ),
        itemsInvertidos: [5],
        minimoEscala: 1,
        maximoEscala: 5,
        filasExcluidas: 2
    });

    assert.equal(resultado.filasExcluidas, 2);
    assert.ok(
        resultado.advertencias.some((texto) =>
            texto.includes("2 filas")
        )
    );
}

function probarErrores() {
    assert.throws(
        () => analizarFiabilidadCuestionario({
            matriz: [[1, 2, 3]],
            minimoEscala: 1,
            maximoEscala: 5
        }),
        /al menos cinco participantes/i
    );

    assert.throws(
        () => analizarFiabilidadCuestionario({
            matriz: [
                [1, 2, 6],
                [2, 3, 4],
                [3, 4, 5],
                [2, 3, 4],
                [1, 2, 3]
            ],
            minimoEscala: 1,
            maximoEscala: 5
        }),
        /fuera del rango/i
    );

    assert.throws(
        () => analizarFiabilidadCuestionario({
            matriz: [
                [1, 2, 3],
                [1, 3, 4],
                [1, 4, 5],
                [1, 2, 4],
                [1, 3, 5]
            ],
            minimoEscala: 1,
            maximoEscala: 5
        }),
        /no presentan variabilidad/i
    );
}

probarFiabilidadCompleta();
probarExclusionesReportadas();
probarErrores();

console.log(
    "✓ El motor de cuestionarios y fiabilidad superó todas las pruebas."
);
