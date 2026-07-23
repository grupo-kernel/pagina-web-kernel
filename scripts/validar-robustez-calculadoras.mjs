import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
    analizarEvaluacionEducativa
} from "../src/utils/evaluacionEducativa.js";
import {
    pruebaFisherFreemanHalton
} from "../src/utils/estadisticaAsociacionCategorica.js";
import {
    analizarDatosIndividuales
} from "../src/utils/estadisticaDescriptiva.js";

function probarEmpatesGruposExtremos() {
    const matriz = [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 1],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [0, 0, 0]
    ];
    const permutacion = [0, 3, 2, 1, 6, 5, 4, 7];
    const primero = analizarEvaluacionEducativa({
        respuestas: matriz,
        modo: "binario",
        proporcionGrupos: 0.25
    });
    const segundo = analizarEvaluacionEducativa({
        respuestas: permutacion.map((indice) => matriz[indice]),
        modo: "binario",
        proporcionGrupos: 0.25
    });

    assert.deepEqual(
        primero.items.map((item) => item.discriminacion),
        segundo.items.map((item) => item.discriminacion)
    );
    assert.equal(
        primero.gruposExtremos.empatesAjustados,
        true
    );
    assert.ok(
        primero.advertencias.some(
            (mensaje) => mensaje.includes("ponderación fraccionaria")
        )
    );
}

function probarMonteCarloReproducible() {
    const tabla = [
        [12, 8, 5],
        [7, 13, 9],
        [4, 10, 15]
    ];
    const opciones = {
        maximoTablasExactas: 100,
        simulaciones: 2000,
        semilla: 123456
    };
    const primero =
        pruebaFisherFreemanHalton(tabla, opciones);
    const segundo =
        pruebaFisherFreemanHalton(tabla, opciones);

    assert.equal(primero.detallesExactos.exacta, false);
    assert.equal(
        primero.detallesExactos.valorP,
        segundo.detallesExactos.valorP
    );
    assert.equal(
        primero.detallesExactos.semilla,
        opciones.semilla
    );
}

function probarExtremosDescriptivos() {
    assert.throws(
        () => analizarDatosIndividuales([
            Number.MAX_VALUE,
            -Number.MAX_VALUE
        ]),
        /no finito/i
    );
}

async function probarListenerLocalYParsers() {
    const repetidas = await readFile(
        new URL(
            "../src/pages/CalculadoraTresOMasMedicionesRelacionadas.js",
            import.meta.url
        ),
        "utf8"
    );
    assert.doesNotMatch(
        repetidas,
        /document\.addEventListener\(\s*["']input["']/
    );
    assert.match(
        repetidas,
        /section\.addEventListener\(["']input["']/
    );

    for (const archivo of [
        "CalculadoraRegresionCompleta.js",
        "CalculadoraRegresionLogistica.js",
        "CalculadoraRegresionConteo.js"
    ]) {
        const fuente = await readFile(
            new URL(`../src/pages/${archivo}`, import.meta.url),
            "utf8"
        );
        assert.match(fuente, /valor === ""/);
        assert.doesNotMatch(fuente, /\.split\(\/\[,;\\t\]\+\//);
    }
}

probarEmpatesGruposExtremos();
probarMonteCarloReproducible();
probarExtremosDescriptivos();
await probarListenerLocalYParsers();

console.log(
    "✓ Las validaciones de robustez de las calculadoras superaron las pruebas."
);
