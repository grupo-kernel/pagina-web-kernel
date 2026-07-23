import assert from "node:assert/strict";

import {
    pruebaMannWhitney,
    pruebaTStudentIndependiente,
    pruebaTWelch
} from "../src/utils/estadisticaDosGrupos.js";
import {
    pruebaTStudentRelacionadas,
    pruebaWilcoxonRelacionadas
} from "../src/utils/estadisticaDosMuestrasRelacionadas.js";
import {
    pruebaAnovaUnFactor,
    pruebaAnovaWelch,
    pruebaKruskalWallis
} from "../src/utils/estadisticaTresOMasGrupos.js";
import {
    pruebaAnovaMedidasRepetidas,
    pruebaFriedman
} from "../src/utils/estadisticaTresOMasMedicionesRelacionadas.js";
import {
    pruebaKendall,
    pruebaPearson,
    pruebaPuntoBiserial,
    pruebaSpearman
} from "../src/utils/estadisticaRelacionVariables.js";
import {
    pruebaChiCuadradoIndependencia,
    pruebaFisherExacta2x2
} from "../src/utils/estadisticaAsociacionCategorica.js";
import {
    ajustarRegresion,
    predecirRegresion
} from "../src/utils/regresionLinealMultiple.js";
import {
    ajustarRegresionLogisticaBinaria,
    predecirRegresionLogistica
} from "../src/utils/regresionLogisticaBinaria.js";

/*
 * Referencias numéricas calculadas independientemente con SciPy 1.17:
 * scipy.stats para las pruebas clásicas y scipy.optimize para la máxima
 * verosimilitud logística. Los coeficientes lineales se verificaron mediante
 * una descomposición de mínimos cuadrados.
 */

function cerca(
    actual,
    esperado,
    tolerancia = 1e-10
) {
    assert.ok(
        Number.isFinite(actual),
        `Se esperaba un número finito, pero se obtuvo ${actual}.`
    );
    assert.ok(
        Math.abs(actual - esperado) <= tolerancia,
        `Se esperaba ${esperado} ± ${tolerancia}, pero se obtuvo ${actual}.`
    );
}

function probarDosGrupos() {
    const grupo1 = [
        12, 15, 14, 10,
        13, 16, 11, 14
    ];
    const grupo2 = [
        8, 9, 11, 7,
        10, 8, 9, 6
    ];

    const student =
        pruebaTStudentIndependiente(
            grupo1,
            grupo2
        );
    cerca(
        student.estadistico.valor,
        5.055162377873402,
        1e-12
    );
    cerca(student.gradosLibertad, 14, 1e-12);
    cerca(
        student.valorP,
        0.0001756353166667144,
        1e-12
    );

    const welch =
        pruebaTWelch(grupo1, grupo2);
    cerca(
        welch.estadistico.valor,
        5.055162377873402,
        1e-12
    );
    cerca(
        welch.gradosLibertad,
        13.284950807725007,
        1e-12
    );
    cerca(
        welch.valorP,
        0.00020623344422967114,
        1e-12
    );

    const mannWhitney =
        pruebaMannWhitney(
            grupo1,
            grupo2
        );
    cerca(
        mannWhitney.estadistico.valor,
        2,
        1e-12
    );
    cerca(
        mannWhitney.estadistico.u1,
        62,
        1e-12
    );
    cerca(
        mannWhitney.valorP,
        0.001873579598675072,
        1e-12
    );
}

function probarMuestrasRelacionadas() {
    const antes = [
        11, 9, 15, 9,
        19, 9, 23, 9
    ];
    const despues = [
        10, 11, 12, 13,
        14, 15, 16, 17
    ];

    const student =
        pruebaTStudentRelacionadas(
            antes,
            despues
        );
    cerca(
        student.estadistico.valor,
        -0.26326209505561055,
        1e-12
    );
    cerca(student.gradosLibertad, 7, 1e-12);
    cerca(
        student.valorP,
        0.7999295042843484,
        2e-9
    );

    const wilcoxon =
        pruebaWilcoxonRelacionadas(
            antes,
            despues
        );
    cerca(
        wilcoxon.estadistico.valor,
        16,
        1e-12
    );
    cerca(
        wilcoxon.sumaRangosPositivos,
        16,
        1e-12
    );
    cerca(
        wilcoxon.sumaRangosNegativos,
        20,
        1e-12
    );
    cerca(
        wilcoxon.valorP,
        0.84375,
        1e-12
    );
}

function probarTresOMasGrupos() {
    const grupos = [
        [6, 8, 4, 5, 3, 4],
        [8, 12, 9, 11, 6, 8],
        [13, 9, 11, 8, 7, 12]
    ];

    const anova =
        pruebaAnovaUnFactor(grupos);
    cerca(
        anova.estadistico.valor,
        9.264705882352942,
        1e-12
    );
    assert.deepEqual(
        anova.gradosLibertad,
        {
            numerador: 2,
            denominador: 15
        }
    );
    cerca(
        anova.valorP,
        0.0023987773293929083,
        1e-12
    );

    const welch =
        pruebaAnovaWelch(grupos);
    cerca(
        welch.estadistico.valor,
        9.939050243799024,
        1e-12
    );
    cerca(
        welch.gradosLibertad.numerador,
        2,
        1e-12
    );
    cerca(
        welch.gradosLibertad.denominador,
        9.850613154960982,
        1e-12
    );
    cerca(
        welch.valorP,
        0.004337776053275158,
        1e-12
    );

    const kruskal =
        pruebaKruskalWallis(grupos);
    cerca(
        kruskal.estadistico.valor,
        9.420684835779168,
        1e-12
    );
    cerca(
        kruskal.gradosLibertad.valor,
        2,
        1e-12
    );
    cerca(
        kruskal.valorP,
        0.009001694713345491,
        1e-12
    );
}

function probarMedicionesRelacionadas() {
    const mediciones = [
        [6, 7, 5, 8, 4, 9, 6, 7],
        [7, 9, 6, 8, 6, 10, 7, 8],
        [9, 10, 8, 11, 7, 12, 9, 10]
    ];

    const anova =
        pruebaAnovaMedidasRepetidas(
            mediciones
        );
    cerca(
        anova.estadistico.valor,
        134.217391304348,
        1e-10
    );
    assert.deepEqual(
        anova.gradosLibertad,
        {
            numerador: 2,
            denominador: 14
        }
    );
    cerca(
        anova.valorP,
        7.353074873381823e-10,
        1e-16
    );

    const friedman =
        pruebaFriedman(mediciones);
    cerca(
        friedman.estadistico.valor,
        15.548387096774194,
        1e-12
    );
    cerca(
        friedman.gradosLibertad.valor,
        2,
        1e-12
    );
    cerca(
        friedman.valorP,
        0.00042044640235014956,
        1e-12
    );
}

function probarRelacionVariables() {
    const x = [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 10
    ];
    const y = [
        2, 1, 4, 3, 5,
        7, 8, 6, 10, 9
    ];

    const pearson =
        pruebaPearson(x, y);
    cerca(
        pearson.coeficiente.valor,
        0.9272727272727268,
        1e-12
    );
    cerca(
        pearson.valorP,
        0.00011203450639397863,
        1e-12
    );

    const spearman =
        pruebaSpearman(x, y);
    cerca(
        spearman.coeficiente.valor,
        0.9272727272727272,
        1e-12
    );
    cerca(
        spearman.valorP,
        0.00011203450639397586,
        1e-12
    );

    const kendall =
        pruebaKendall(x, y);
    cerca(
        kendall.coeficiente.valor,
        0.7777777777777777,
        1e-12
    );
    cerca(
        kendall.valorP,
        0.0009463183421516755,
        1e-12
    );
    assert.match(
        kendall.detalles.aproximacionInferencial,
        /exacta bilateral/i
    );

    const puntoBiserial =
        pruebaPuntoBiserial(
            [
                "A", "A", "A", "A", "A",
                "B", "B", "B", "B", "B"
            ],
            [
                4, 5, 6, 5, 7,
                7, 8, 9, 8, 10
            ],
            {
                categoriaPositiva: "B"
            }
        );
    cerca(
        puntoBiserial.coeficiente.valor,
        0.8269767696299569,
        1e-12
    );
    cerca(
        puntoBiserial.valorP,
        0.003164123781235043,
        1e-12
    );
}

function probarAsociacionCategorica() {
    const tabla = [
        [12, 8],
        [5, 15]
    ];

    const chiCuadrado =
        pruebaChiCuadradoIndependencia(
            tabla
        );
    cerca(
        chiCuadrado.estadistico.valor,
        5.012787723785166,
        1e-12
    );
    cerca(
        chiCuadrado.valorP,
        0.025160759200408785,
        1e-12
    );
    assert.deepEqual(
        chiCuadrado.tabla.esperadas,
        [
            [8.5, 11.5],
            [8.5, 11.5]
        ]
    );

    const fisher =
        pruebaFisherExacta2x2(tabla);
    cerca(
        fisher.oddsRatio.oddsRatio,
        4.5,
        1e-12
    );
    cerca(
        fisher.valorP,
        0.05355099259437413,
        1e-12
    );
}

function probarRegresionLineal() {
    const x1 = [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 10
    ];
    const x2 = [
        0, 1, 0, 1, 0,
        1, 0, 1, 0, 1
    ];
    const residuos = [
        0.2, -0.1, 0.3, -0.2, 0.1,
        0, -0.1, 0.2, -0.3, -0.1
    ];
    const y = x1.map(
        (valor, indice) =>
            3 +
            2 * valor -
            1.5 * x2[indice] +
            residuos[indice]
    );

    const modelo = ajustarRegresion({
        y,
        X: [x1, x2],
        nombresPredictores: [
            "X1",
            "X2"
        ]
    });

    const esperados = [
        3.165,
        1.975,
        -1.555
    ];
    modelo.coeficientes.forEach(
        ({ estimacion }, indice) => {
            cerca(
                estimacion,
                esperados[indice],
                1e-12
            );
        }
    );
    cerca(
        modelo.ajuste.r2,
        0.9991239428964238,
        1e-12
    );
    cerca(
        predecirRegresion(
            modelo,
            [11, 0]
        ),
        24.89,
        1e-12
    );
}

function probarRegresionLogistica() {
    const x = [
        -3, -2.5, -2, -1.5,
        -1, -0.5, 0, 0.5,
        1, 1.5, 2, 2.5, 3
    ];
    const y = [
        0, 0, 0, 1,
        0, 0, 1, 0,
        1, 1, 0, 1, 1
    ];

    const modelo =
        ajustarRegresionLogisticaBinaria({
            y,
            X: [x],
            nombresPredictores: ["X"]
        });

    cerca(
        modelo.coeficientes[0].estimacion,
        -0.21743036712455605,
        1e-9
    );
    cerca(
        modelo.coeficientes[1].estimacion,
        0.713717081411507,
        1e-9
    );
    cerca(
        modelo.ajuste.logVerosimilitud,
        -6.904403714058906,
        1e-10
    );

    const prediccion =
        predecirRegresionLogistica(
            modelo,
            [0.75]
        );
    cerca(
        prediccion.probabilidad,
        0.5788020062576479,
        1e-10
    );
    assert.equal(
        prediccion.clasePredicha,
        1
    );
}

probarDosGrupos();
probarMuestrasRelacionadas();
probarTresOMasGrupos();
probarMedicionesRelacionadas();
probarRelacionVariables();
probarAsociacionCategorica();
probarRegresionLineal();
probarRegresionLogistica();

console.log(
    "✓ Los 18 procedimientos estadísticos directos coinciden con referencias numéricas independientes."
);
