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

async function probarEtiquetasGraficosExportables() {
    const coberturas = [
        [
            "estadística descriptiva",
            "pages/CalculadoraEstadisticaDescriptiva.js utils/graficosDescriptivosSeguros.js",
            "distribucion-frecuencias diagrama-caja histograma ojiva-frecuencia-acumulada"
        ],
        [
            "relación entre variables",
            "pages/CalculadoraRelacionVariables.js",
            "diagrama-dispersion comparacion-punto-biserial"
        ],
        [
            "fiabilidad",
            "utils/graficosFiabilidadCuestionarios.js",
            "correlacion-item-total alfa-si-elimina-item medias-items distribucion-puntuacion-total cargas-componente-principal mapa-correlaciones-interitem"
        ],
        [
            "evaluación educativa",
            "utils/graficosEvaluacionEducativa.js",
            "indice-dificultad indice-discriminacion correlacion-punto-biserial mapa-calidad-preguntas distribucion-puntuaciones distractores-no-funcionales"
        ],
        [
            "tamaño de muestra",
            "utils/graficosTamanoMuestra.js",
            "sensibilidad-potencia efecto-ajustes distribucion-muestra"
        ],
        [
            "regresión lineal",
            "utils/graficosRegresion.js",
            "dispersion-recta-ajustada observado-predicho residuos-predichos histograma-residuos qq-residuos distancia-cook"
        ],
        [
            "regresión logística",
            "utils/graficosRegresionLogistica.js",
            "curva-roc matriz-confusion probabilidades-clase calibracion odds-ratio distancia-cook"
        ],
        [
            "regresión de conteo",
            "utils/graficosRegresionConteo.js",
            "observado-ajustado residuos-pearson distribucion-observada-esperada distancia-cook comparacion-modelos"
        ]
    ];

    for (const [modulo, listaArchivos, listaIds] of coberturas) {
        const archivos = listaArchivos.split(" ");
        const ids = listaIds.split(" ");
        const fuente = (
            await Promise.all(
                archivos.map((archivo) =>
                    readFile(
                        new URL(`../src/${archivo}`, import.meta.url),
                        "utf8"
                    )
                )
            )
        ).join("\n");

        assert.equal(
            new Set(ids).size,
            ids.length,
            `${modulo} repite identificadores de gráficos.`
        );

        for (const id of ids) {
            assert.ok(
                fuente.includes(`"${id}"`),
                `${modulo} no declara el gráfico ${id}.`
            );
        }

        assert.ok(
            fuente.includes('data-grafico-exportable="true"') ||
                fuente.includes(
                    'dataset.graficoExportable = "true"'
                ),
            `${modulo} no marca sus gráficos como exportables.`
        );
        assert.ok(
            fuente.includes("data-grafico-id=") ||
                fuente.includes("dataset.graficoId ="),
            `${modulo} no asigna identificadores a sus gráficos.`
        );
    }
}

async function probarCoberturaExportaciones() {
    const calculadoras = [
        ["CalculadoraAsociacionCategorica.js", "asociacion-categorica"],
        ["CalculadoraDosGrupos.js", "comparacion-dos-grupos"],
        [
            "CalculadoraDosMuestrasRelacionadas.js",
            "comparacion-mediciones-relacionadas"
        ],
        [
            "CalculadoraEstadisticaDescriptiva.js",
            "estadistica-descriptiva"
        ],
        ["CalculadoraEvaluacionEducativa.js", "evaluacion-educativa"],
        [
            "CalculadoraFiabilidadCuestionarios.js",
            "fiabilidad-cuestionarios"
        ],
        [
            "CalculadoraRegresionCompleta.js",
            "regresion-lineal-multiple"
        ],
        ["CalculadoraRegresionConteo.js", "regresion-conteo"],
        [
            "CalculadoraRegresionLogistica.js",
            "regresion-logistica-binaria"
        ],
        [
            "CalculadoraRelacionVariables.js",
            "relacion-entre-variables"
        ],
        [
            "CalculadoraTamanoMuestraPotencia.js",
            "tamano-muestra-potencia"
        ],
        [
            "CalculadoraTresOMasGrupos.js",
            "comparacion-tres-o-mas-grupos"
        ],
        [
            "CalculadoraTresOMasMedicionesRelacionadas.js",
            "comparacion-mediciones-repetidas"
        ]
    ];

    assert.equal(
        new Set(calculadoras.map(([, nombre]) => nombre)).size,
        calculadoras.length,
        "Los nombres de archivo para exportación deben ser únicos."
    );

    for (const [archivo, nombre] of calculadoras) {
        const fuente = await readFile(
            new URL(`../src/pages/${archivo}`, import.meta.url),
            "utf8"
        );

        assert.match(
            fuente,
            /import\s*\{\s*prepararExportacionCalculadora\s*\}\s*from\s*["']\.\.\/utils\/exportacionesCalculadoras\.js["']/,
            `${archivo} no importa el motor común de exportación.`
        );
        assert.match(
            fuente,
            /prepararExportacionCalculadora\s*\(\s*\{/,
            `${archivo} no prepara las descargas después del cálculo.`
        );
        assert.match(
            fuente,
            new RegExp(`nombre:\\s*["']${nombre}["']`),
            `${archivo} no usa el nombre de exportación ${nombre}.`
        );
        assert.match(
            fuente,
            /datos:\s*\{/,
            `${archivo} no entrega datos estructurados para el libro Excel.`
        );
    }
}

probarEmpatesGruposExtremos();
probarMonteCarloReproducible();
probarExtremosDescriptivos();
await probarListenerLocalYParsers();
await probarEtiquetasGraficosExportables();
await probarCoberturaExportaciones();

console.log(
    "✓ Las validaciones de robustez de las calculadoras superaron las pruebas."
);
