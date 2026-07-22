import assert from "node:assert/strict";
import {
    calcularTamanoMuestraPotencia,
    cuantileNormal
} from "../src/utils/tamanoMuestraPotencia.js";

function cerca(actual, esperado, tolerancia = 1e-3) {
    assert.ok(
        Math.abs(actual - esperado) <= tolerancia,
        `Se esperaba ${esperado}, pero se obtuvo ${actual}.`
    );
}

cerca(cuantileNormal(0.975), 1.959964, 1e-4);

const proporcion = calcularTamanoMuestraPotencia({
    diseno: "estimacion_proporcion",
    parametros: { proporcion: 0.5, margen: 0.05 },
    alpha: 0.05,
    perdida: 0,
    efectoDiseno: 1
});
assert.equal(proporcion.tamano.base, 385);
assert.equal(proporcion.tamano.final, 385);

const media = calcularTamanoMuestraPotencia({
    diseno: "estimacion_media",
    parametros: { desviacion: 10, margen: 2 },
    alpha: 0.05,
    poblacion: 100,
    perdida: 0.10,
    efectoDiseno: 1.2
});
assert.ok(media.tamano.corregidoPoblacion < media.tamano.base);
assert.ok(media.tamano.final >= media.tamano.corregidoPoblacion);

const dosGrupos = calcularTamanoMuestraPotencia({
    diseno: "dos_medias_independientes",
    parametros: { efecto: 0.5, razon: 1 },
    alpha: 0.05,
    potencia: 0.80,
    perdida: 0
});
assert.ok(dosGrupos.asignacion.grupo1 > 0);
assert.equal(dosGrupos.asignacion.grupo1, dosGrupos.asignacion.grupo2);
assert.ok(dosGrupos.sensibilidad.at(-1).tamanoFinal > dosGrupos.sensibilidad[0].tamanoFinal);

const correlacion = calcularTamanoMuestraPotencia({
    diseno: "correlacion",
    parametros: { correlacion: 0.30 },
    potencia: 0.80,
    tamanoDisponible: 100
});
assert.ok(correlacion.potenciaAlcanzada > 0.80);
assert.ok(correlacion.potenciaAlcanzada <= 1);

const logistica = calcularTamanoMuestraPotencia({
    diseno: "regresion_logistica",
    parametros: {
        oddsRatio: 1.8,
        prevalencia: 0.30,
        predictores: 4,
        eventosPorParametro: 15
    }
});
assert.ok(logistica.requisitos.porEventos > 0);
assert.ok(logistica.tamano.final >= logistica.requisitos.porEventos);

assert.throws(
    () => calcularTamanoMuestraPotencia({
        diseno: "dos_proporciones",
        parametros: { p1: 0.5, p2: 0.5 }
    }),
    /diferentes/i
);

console.log("✓ El motor de tamaño de muestra y potencia superó todas las pruebas.");
