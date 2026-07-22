import assert from "node:assert/strict";
import {
    analizarFiabilidadCuestionarioAvanzada
} from "../src/utils/fiabilidadCuestionariosAvanzada.js";

function finito(valor, mensaje) {
    assert.ok(Number.isFinite(Number(valor)), mensaje);
}

function probarLikertYBootstrap() {
    const matriz = [
        [4, 4, 3, 4],
        [3, 4, 3, 3],
        [5, 5, 4, 5],
        [2, 3, 2, 3],
        [4, 5, 4, 4],
        [3, 3, 3, 4],
        [5, 4, 5, 5],
        [2, 2, 3, 2],
        [4, 4, 4, 3],
        [3, 4, 2, 3],
        [5, 5, 5, 4],
        [1, 2, 2, 2]
    ];
    const resultado = analizarFiabilidadCuestionarioAvanzada({
        matriz,
        nombresItems: ["I1", "I2", "I3", "I4"],
        minimoEscala: 1,
        maximoEscala: 5,
        numeroRemuestras: 100,
        nivelConfianzaBootstrap: 0.95,
        semillaBootstrap: 12345
    });

    assert.equal(resultado.n, matriz.length);
    assert.equal(resultado.kr20.aplica, false);
    finito(
        resultado.fiabilidad.alfaCronbach,
        "El alfa debe ser finito."
    );
    finito(
        resultado.intervalosBootstrap.alfa.inferior,
        "El límite inferior bootstrap del alfa debe calcularse."
    );
    finito(
        resultado.intervalosBootstrap.alfa.superior,
        "El límite superior bootstrap del alfa debe calcularse."
    );
    assert.ok(
        resultado.intervalosBootstrap.alfa.inferior <=
            resultado.intervalosBootstrap.alfa.superior
    );
}

function probarKr20() {
    const matriz = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 1, 0],
        [0, 1, 1, 0, 1],
        [1, 1, 0, 0, 1],
        [0, 0, 1, 1, 0],
        [1, 0, 0, 1, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 1],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ];
    const resultado = analizarFiabilidadCuestionarioAvanzada({
        matriz,
        minimoEscala: 0,
        maximoEscala: 1,
        numeroRemuestras: 100,
        semillaBootstrap: 24680
    });

    assert.equal(resultado.kr20.aplica, true);
    finito(resultado.fiabilidad.kr20, "KR-20 debe ser finito.");
    assert.ok(
        Math.abs(
            resultado.fiabilidad.kr20 -
            resultado.fiabilidad.alfaCronbach
        ) < 1e-10,
        "En ítems 0/1, KR-20 debe coincidir con el alfa."
    );
}

function probarRedundanciaYReproducibilidad() {
    const matriz = [
        [1, 1, 1],
        [2, 2, 1],
        [3, 3, 2],
        [4, 4, 2],
        [5, 5, 3],
        [4, 4, 4],
        [3, 3, 4],
        [2, 2, 5],
        [1, 1, 5],
        [5, 5, 4]
    ];
    const solicitud = {
        matriz,
        nombresItems: ["Duplicado A", "Duplicado B", "Otro"],
        minimoEscala: 1,
        maximoEscala: 5,
        numeroRemuestras: 100,
        semillaBootstrap: 98765
    };
    const primero = analizarFiabilidadCuestionarioAvanzada(solicitud);
    const segundo = analizarFiabilidadCuestionarioAvanzada(solicitud);

    assert.ok(
        primero.diagnosticosAvanzados.paresRedundantes.some(
            (fila) =>
                fila.itemA === "Duplicado A" &&
                fila.itemB === "Duplicado B" &&
                Math.abs(fila.correlacion - 1) < 1e-12
        ),
        "Debe detectarse el par de ítems duplicados."
    );
    assert.deepEqual(
        primero.intervalosBootstrap,
        segundo.intervalosBootstrap,
        "El bootstrap debe ser reproducible con la misma semilla."
    );
}

probarLikertYBootstrap();
probarKr20();
probarRedundanciaYReproducibilidad();

console.log(
    "✓ La capa avanzada de fiabilidad superó todas las pruebas."
);
