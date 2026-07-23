import assert from "node:assert/strict";
import {
    analizarDatosIndividuales,
    analizarDatosConFrecuencias,
    analizarDatosAgrupados,
    analizarEstadisticaDescriptiva
} from "../src/utils/estadisticaDescriptiva.js";
import {
    leerTabla as leerTablaParaPrueba
} from "../src/utils/graficosDescriptivosSeguros.js";

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

function celda(texto) {
    return {
        textContent: String(texto)
    };
}

function crearContenedorTabla(resultado) {
    const agrupados =
        resultado.tipoDatos === "intervalos";
    const encabezados = [
        agrupados ? "Intervalo" : "Valor",
        ...(agrupados ? ["Marca"] : []),
        "f",
        "fr",
        "F",
        "Fr"
    ].map(celda);
    const filas = resultado.tablaFrecuencias.map(
        (registro) => {
            const etiqueta = agrupados
                ? `[${registro.intervalo.inferior}, ${registro.intervalo.superior})`
                : registro.valor;
            const celdas = [
                celda(etiqueta),
                ...(agrupados
                    ? [celda(registro.marcaClase)]
                    : []),
                celda(registro.frecuencia),
                celda(
                    `${registro.frecuenciaRelativa * 100} %`
                ),
                celda(registro.frecuenciaAcumulada),
                celda(
                    `${registro.frecuenciaRelativaAcumulada * 100} %`
                )
            ];

            return {
                children: celdas,
                cells: celdas,
                querySelectorAll(selector) {
                    return selector === "td"
                        ? celdas.slice(1)
                        : [];
                }
            };
        }
    );
    const tabla = {
        querySelectorAll(selector) {
            if (selector === "thead th") {
                return encabezados;
            }

            return selector === "tbody tr"
                ? filas
                : [];
        }
    };

    return {
        querySelector(selector) {
            return selector === "table"
                ? tabla
                : null;
        }
    };
}

function probarAdaptadorDom(nombre, resultado) {
    const agrupados =
        resultado.tipoDatos === "intervalos";
    const esperado = {
        agrupados,
        filas: resultado.tablaFrecuencias.map(
            (registro) => ({
                etiqueta: agrupados
                    ? `[${registro.intervalo.inferior}, ${registro.intervalo.superior})`
                    : String(registro.valor),
                valor: agrupados
                    ? registro.marcaClase
                    : registro.valor,
                frecuencia: registro.frecuencia,
                acumulada:
                    registro.frecuenciaAcumulada
            })
        )
    };

    assert.deepEqual(
        leerTablaParaPrueba(
            crearContenedorTabla(resultado)
        ),
        esperado,
        `${nombre}: el adaptador debe leer Valor/Intervalo, f y F sin desplazar las columnas.`
    );
}

function probarGraficosEnTresModalidades() {
    probarAdaptadorDom(
        "Datos individuales",
        analizarDatosIndividuales(
            [10, 20, 20, 30]
        )
    );
    probarAdaptadorDom(
        "Valores con frecuencias",
        analizarDatosConFrecuencias({
            valores: [1, 2, 3],
            frecuencias: [2, 3, 1]
        })
    );
    probarAdaptadorDom(
        "Intervalos de clase",
        analizarDatosAgrupados([
            {
                limiteInferior: 0,
                limiteSuperior: 10,
                frecuencia: 2
            },
            {
                limiteInferior: 10,
                limiteSuperior: 20,
                frecuencia: 3
            }
        ])
    );
}

probarIndividuales();
probarFrecuencias();
probarIntervalos();
probarDespachadorYErrores();
probarGraficosEnTresModalidades();

console.log(
    "✓ El motor de estadística descriptiva superó todas las pruebas."
);
