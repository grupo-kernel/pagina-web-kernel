import assert from "node:assert/strict";
import {
    ajustarRegresionConteo,
    predecirRegresionConteo
} from "../src/utils/regresionConteo.js";

function finito(valor, mensaje) {
    assert.ok(Number.isFinite(Number(valor)), mensaje);
}

function probabilidadValida(valor, mensaje) {
    assert.ok(
        Number.isFinite(Number(valor)) && valor >= 0 && valor <= 1,
        mensaje
    );
}

function probarPoisson() {
    const y = [0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7];
    const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const resultado = ajustarRegresionConteo({
        y,
        X: [x],
        nombresPredictores: ["Tiempo"],
        modelo: "poisson"
    });

    assert.equal(resultado.seleccionado.tipoModelo, "poisson");
    assert.equal(resultado.seleccionado.n, y.length);
    assert.equal(resultado.seleccionado.coeficientes.length, 2);
    finito(resultado.seleccionado.ajuste.aic, "AIC debe ser finito.");
    finito(resultado.seleccionado.dispersion.indice, "La dispersión debe ser finita.");
    finito(resultado.seleccionado.coeficientes[1].irr, "La IRR debe ser finita.");
    probabilidadValida(
        resultado.seleccionado.coeficientes[1].p,
        "El valor p del coeficiente debe estar entre 0 y 1."
    );
    probabilidadValida(
        resultado.seleccionado.pruebaGlobal.p,
        "El valor p global debe estar entre 0 y 1."
    );
}

function probarExposicionYPrediccion() {
    const y = [1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7];
    const x = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
    const exposicion = [1, 1.2, 0.8, 1.1, 1, 1.3, 0.9, 1.4, 1.1, 1.5, 1.2, 1.6];
    const resultado = ajustarRegresionConteo({
        y,
        X: [x],
        nombresPredictores: ["Intensidad"],
        exposicion,
        modelo: "automatico"
    });
    const prediccion = predecirRegresionConteo(
        resultado,
        [4.5],
        1.25
    );

    assert.ok(["poisson", "negativa"].includes(resultado.seleccionado.tipoModelo));
    assert.ok(prediccion.conteoEsperado > 0);
    assert.ok(prediccion.tasa > 0);
    assert.equal(prediccion.exposicion, 1.25);
}

function probarSobredispersion() {
    const y = [0, 0, 1, 0, 2, 1, 8, 0, 12, 2, 18, 1, 25, 3, 32, 2];
    const x = Array.from({ length: y.length }, (_, i) => i + 1);
    const resultado = ajustarRegresionConteo({
        y,
        X: [x],
        nombresPredictores: ["Periodo"],
        modelo: "automatico"
    });

    finito(resultado.comparacion.poisson.dispersion, "La dispersión de Poisson debe calcularse.");
    assert.ok(resultado.comparacion.poisson.aic > 0);
    assert.ok(resultado.interpretacion.length >= 4);
}

function probarErrores() {
    assert.throws(
        () => ajustarRegresionConteo({
            y: [0, 1, -1, 2, 3, 4],
            X: [[1, 2, 3, 4, 5, 6]]
        }),
        /enteros no negativos/i
    );

    assert.throws(
        () => ajustarRegresionConteo({
            y: [0, 1, 1, 2, 2, 3],
            X: [[1, 2, 3, 4, 5, 6]],
            exposicion: [1, 1, 0, 1, 1, 1]
        }),
        /exposición debe ser positiva/i
    );
}

probarPoisson();
probarExposicionYPrediccion();
probarSobredispersion();
probarErrores();

console.log("✓ El motor de regresión para conteos superó todas las pruebas.");
