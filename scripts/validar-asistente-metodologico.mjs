import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
    reglasEstadisticas
} from "../src/data/reglasEstadisticas.js";
import {
    buscarReglaEstadistica
} from "../src/utils/motorReglas.js";
import {
    obtenerFichaMetodologica
} from "../src/data/obtenerFichaMetodologica.js";
import {
    DESTINOS_PRUEBAS_ASISTENTE,
    PRUEBAS_EJECUTABLES_ASISTENTE
} from "../src/pages/AsistentePruebas.js";

function estadosCompatibles(condiciones) {
    return Object.entries(condiciones).reduce(
        (estados, [clave, condicion]) => {
            const valores = Array.isArray(condicion)
                ? condicion
                : [condicion];
            return estados.flatMap((estado) =>
                valores.map((valor) => ({
                    ...estado,
                    [clave]: valor
                }))
            );
        },
        [{}]
    );
}

reglasEstadisticas.forEach((regla) => {
    const estadoAlcanzable = estadosCompatibles(
        regla.condiciones
    ).find(
        (estado) =>
            buscarReglaEstadistica(estado)?.id ===
            regla.id
    );

    assert.ok(
        estadoAlcanzable,
        `La regla ${regla.id} debe ser alcanzable desde un estado compatible.`
    );
    assert.ok(
        obtenerFichaMetodologica(regla.id),
        `La recomendación ${regla.id} debe abrir una ficha metodológica.`
    );
});

Object.entries(PRUEBAS_EJECUTABLES_ASISTENTE).forEach(
    ([id, prueba]) => {
        assert.ok(
            obtenerFichaMetodologica(id),
            `La prueba ejecutable ${id} debe tener ficha.`
        );
        assert.ok(
            DESTINOS_PRUEBAS_ASISTENTE[prueba],
            `La prueba ejecutable ${id} no tiene destino.`
        );
    }
);

assert.deepEqual(
    DESTINOS_PRUEBAS_ASISTENTE["regresion-lineal-simple"],
    {
        almacenamiento: "kernel-tipo-modelo-regresion",
        valor: "simple",
        ruta: "calculadoraRegresion"
    }
);
assert.deepEqual(
    DESTINOS_PRUEBAS_ASISTENTE["regresion-lineal-multiple"],
    {
        almacenamiento: "kernel-tipo-modelo-regresion",
        valor: "multiple",
        ruta: "calculadoraRegresion"
    }
);
assert.equal(
    DESTINOS_PRUEBAS_ASISTENTE["regresion-poisson"].valor,
    "poisson"
);
assert.equal(
    DESTINOS_PRUEBAS_ASISTENTE[
        "regresion-binomial-negativa"
    ].valor,
    "negativa"
);

const fuenteAsistente = await readFile(
    new URL(
        "../src/pages/AsistentePruebas.js",
        import.meta.url
    ),
    "utf8"
);
const fuenteIntegracion = await readFile(
    new URL(
        "../src/utils/integrarRegresionAsistente.js",
        import.meta.url
    ),
    "utf8"
);

assert.match(
    fuenteAsistente,
    /data-ruta="calculadoraFiabilidadCuestionarios"/
);
assert.match(
    fuenteAsistente,
    /data-ruta="calculadoraEvaluacionEducativa"/
);
assert.match(
    fuenteAsistente,
    /aria-live", "polite"/
);
assert.match(
    fuenteAsistente,
    /titulo\.focus\(\{ preventScroll: true \}\)/
);
assert.match(
    fuenteIntegracion,
    /sessionStorage\.removeItem\(\s*"kernel-tipo-modelo-regresion"/
);

console.log(
    `✓ El asistente validó ${reglasEstadisticas.length} reglas, sus fichas, rutas de cálculo y transferencias de modelo.`
);
