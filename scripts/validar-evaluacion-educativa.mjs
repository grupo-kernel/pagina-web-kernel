import assert from "node:assert/strict";
import {
    analizarEvaluacionEducativa
} from "../src/utils/evaluacionEducativa.js";

function cerca(actual, esperado, tolerancia = 1e-10) {
    assert.ok(
        Math.abs(actual - esperado) <= tolerancia,
        `Se esperaba ${esperado}, pero se obtuvo ${actual}.`
    );
}

function media(valores) {
    return valores.reduce((a, b) => a + b, 0) /
        valores.length;
}

function varianzaMuestral(valores) {
    const promedio = media(valores);
    return valores.reduce(
        (total, valor) => total + (valor - promedio) ** 2,
        0
    ) / (valores.length - 1);
}

function kr20Manual(matriz) {
    const k = matriz[0].length;
    const totales = matriz.map((fila) =>
        fila.reduce((a, b) => a + b, 0)
    );
    const sumaVarianzas = Array.from(
        { length: k },
        (_, columna) =>
            varianzaMuestral(
                matriz.map((fila) => fila[columna])
            )
    ).reduce((a, b) => a + b, 0);

    return k / (k - 1) *
        (1 - sumaVarianzas / varianzaMuestral(totales));
}

function probarMatrizBinaria() {
    const matriz = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0],
        [1, 1, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 1, 0],
        [0, 1, 1, 0, 1],
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0]
    ];
    const resultado = analizarEvaluacionEducativa({
        respuestas: matriz,
        modo: "binario",
        nombresItems: ["P1", "P2", "P3", "P4", "P5"],
        proporcionGrupos: 0.25
    });

    assert.equal(resultado.n, 12);
    assert.equal(resultado.k, 5);
    assert.equal(resultado.items.length, 5);
    assert.equal(resultado.puntuaciones.length, 12);
    assert.equal(resultado.gruposExtremos.tamano, 3);
    cerca(
        resultado.fiabilidad.kr20,
        kr20Manual(matriz)
    );
    assert.ok(
        resultado.items.every(
            (item) => item.dificultad >= 0 && item.dificultad <= 1
        )
    );
    assert.ok(
        resultado.items.every(
            (item) => item.discriminacion >= -1 &&
                item.discriminacion <= 1
        )
    );
}

function probarAlternativasYClave() {
    const respuestas = [
        ["A", "B", "C", "D"],
        ["A", "B", "C", "D"],
        ["A", "B", "C", "A"],
        ["A", "B", "A", "D"],
        ["A", "D", "C", "D"],
        ["B", "B", "C", "A"],
        ["B", "D", "A", "D"],
        ["C", "A", "B", "A"],
        ["D", "D", "A", "B"],
        ["B", "A", "D", "C"]
    ];
    const resultado = analizarEvaluacionEducativa({
        respuestas,
        clave: ["A", "B", "C", "D"],
        nombresItems: ["Álgebra", "Geometría", "Cálculo", "Lógica"],
        idsEstudiantes: respuestas.map((_, i) => `E${i + 1}`),
        modo: "opciones",
        proporcionGrupos: 0.30
    });

    assert.equal(resultado.modo, "opciones");
    assert.deepEqual(resultado.clave, ["A", "B", "C", "D"]);
    assert.equal(resultado.distractores.length, 4);
    assert.ok(
        resultado.distractores.every(
            (item) => item.opciones.some((opcion) => opcion.esClave)
        )
    );
    assert.equal(resultado.puntuaciones[0].total, 4);
    assert.equal(resultado.puntuaciones[9].total, 0);
    assert.ok(
        resultado.items[0].dificultad > resultado.items[1].dificultad - 0.5
    );
}

function probarPosibleClaveInconsistente() {
    const respuestas = [
        ["B", "A", "C"],
        ["B", "A", "C"],
        ["B", "A", "C"],
        ["B", "A", "C"],
        ["B", "A", "C"],
        ["A", "B", "C"],
        ["A", "B", "B"],
        ["A", "B", "B"]
    ];
    const resultado = analizarEvaluacionEducativa({
        respuestas,
        clave: ["A", "B", "C"],
        modo: "opciones"
    });

    assert.equal(
        resultado.distractores[0].posibleClaveErronea,
        true
    );
    assert.equal(
        resultado.items[0].recomendacion.decision,
        "Revisión urgente"
    );
}

function probarErrores() {
    assert.throws(
        () => analizarEvaluacionEducativa({
            respuestas: [
                [1, 1, 0],
                [1, 0, 1],
                [0, 1, 1],
                [0, 0, 1]
            ],
            modo: "binario"
        }),
        /al menos cinco estudiantes/i
    );

    assert.throws(
        () => analizarEvaluacionEducativa({
            respuestas: [
                [1, 1, 2],
                [1, 0, 1],
                [0, 1, 1],
                [0, 0, 1],
                [1, 1, 0]
            ],
            modo: "binario"
        }),
        /debe contener 0 o 1/i
    );

    assert.throws(
        () => analizarEvaluacionEducativa({
            respuestas: Array.from(
                { length: 5 },
                () => ["A", "B", "C"]
            ),
            clave: ["A", "B"],
            modo: "opciones"
        }),
        /exactamente 3 respuestas/i
    );
}

probarMatrizBinaria();
probarAlternativasYClave();
probarPosibleClaveInconsistente();
probarErrores();

console.log(
    "✓ El motor de evaluación educativa superó todas las pruebas."
);
