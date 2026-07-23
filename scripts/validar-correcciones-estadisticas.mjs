import assert from "node:assert/strict";
import {
    calcularTamanoMuestraPotencia
} from "../src/utils/tamanoMuestraPotencia.js";
import {
    ajustarRegresion,
    ajustarRegresionLinealSimple,
    predecirRegresion
} from "../src/utils/regresionLinealMultiple.js";
import {
    ajustarRegresionLogisticaBinaria,
    predecirRegresionLogistica
} from "../src/utils/regresionLogisticaBinaria.js";
import {
    ajustarRegresionConteo,
    predecirRegresionConteo
} from "../src/utils/regresionConteo.js";
import {
    analizarTresOMasMedicionesRelacionadas
} from "../src/utils/estadisticaTresOMasMedicionesRelacionadas.js";
import {
    pruebaKendall
} from "../src/utils/estadisticaRelacionVariables.js";

function cerca(actual, esperado, tolerancia = 1e-8) {
    assert.ok(
        Math.abs(actual - esperado) <= tolerancia,
        `Se esperaba ${esperado}, pero se obtuvo ${actual}.`
    );
}

function logFactorial(n) {
    let resultado = 0;
    for (let i = 2; i <= n; i += 1) {
        resultado += Math.log(i);
    }
    return resultado;
}

function probarDistribucionesNoCentrales() {
    const chi = calcularTamanoMuestraPotencia({
        diseno: "chi_cuadrado",
        parametros: { efecto: 0.30, gl: 1 },
        alpha: 0.05,
        potencia: 0.80,
        tamanoDisponible: 69
    });
    assert.equal(chi.tamano.base, 88);
    cerca(chi.potenciaAlcanzada, 0.7026492821, 1e-6);

    const anova = calcularTamanoMuestraPotencia({
        diseno: "anova",
        parametros: { efecto: 0.25, grupos: 3 },
        alpha: 0.05,
        potencia: 0.80
    });
    assert.equal(anova.tamano.base, 158);

    const regresion = calcularTamanoMuestraPotencia({
        diseno: "regresion_lineal",
        parametros: { efecto: 0.15, predictores: 4 },
        alpha: 0.05,
        potencia: 0.80
    });
    assert.equal(regresion.tamano.base, 85);
}

function probarRegresionLineal() {
    assert.throws(
        () => ajustarRegresionLinealSimple({
            x: [1, 2, 3, 4],
            y: [5, 5, 5, 5]
        }),
        /no presenta variabilidad/i
    );

    const x = [
        1e12,
        1e12 + 1,
        1e12 + 2,
        1e12 + 3,
        1e12 + 4,
        1e12 + 5
    ];
    const y = [2, 5, 8, 11, 14, 17];
    const estable = ajustarRegresionLinealSimple({ x, y });
    cerca(estable.coeficientes[1].estimacion, 3, 1e-12);
    cerca(estable.ajuste.r2, 1, 1e-12);
    cerca(predecirRegresion(estable, [1e12 + 6]), 20, 1e-10);

    const pocosGrados = ajustarRegresionLinealSimple({
        x: [1, 2, 3],
        y: [1, 2, 4],
        nivelConfianza: 0.95
    });
    const pendiente = pocosGrados.coeficientes[1];
    const tCritico = (
        pendiente.intervaloConfianza.superior -
        pendiente.estimacion
    ) / pendiente.errorEstandar;
    cerca(tCritico, 12.706204736, 1e-6);

    assert.throws(
        () => ajustarRegresion({
            y: [1, 2, 3, 4],
            X: [[1, 2, "", 4]]
        }),
        /no numéricos/i
    );
    assert.throws(
        () => predecirRegresion(estable, [""]),
        /numéricos/i
    );
}

function probarRegresionLogistica() {
    const y = [
        0, 0, 0, 0, 1, 0, 1, 0,
        1, 1, 0, 1, 1, 1, 1, 1
    ];
    const x = Array.from(
        { length: y.length },
        (_, indice) => indice + 1
    );
    const modelo = ajustarRegresionLogisticaBinaria({
        y,
        X: [x],
        nivelConfianza: 0.90
    });

    cerca(modelo.alfa, 0.10, 1e-12);
    assert.ok(
        modelo.interpretacion[0].includes("significativamente") ||
        modelo.interpretacion[0].includes("α = 0.100")
    );
    assert.throws(
        () => predecirRegresionLogistica(modelo, [""]),
        /numéricos/i
    );
}

function probarRegresionConteoSinIntercepto() {
    const y = [0, 1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8];
    const x = Array.from(
        { length: y.length },
        (_, indice) => (indice + 1) / 10
    );
    const resultado = ajustarRegresionConteo({
        y,
        X: [x],
        incluirIntercepto: false,
        modelo: "poisson",
        nivelConfianza: 0.99
    });
    const esperadoNulo = y.reduce(
        (total, valor) =>
            total - 1 - logFactorial(valor),
        0
    );

    cerca(
        resultado.seleccionado.ajuste.logVerosimilitudNula,
        esperadoNulo,
        1e-8
    );
    cerca(resultado.seleccionado.alfa, 0.01, 1e-12);
    assert.throws(
        () => predecirRegresionConteo(resultado, [""], 1),
        /numéricos/i
    );
}

function probarMedidasRepetidasConstantes() {
    const resultado =
        analizarTresOMasMedicionesRelacionadas({
            mediciones: [
                { nombre: "A", valores: [1, 2, 3, 4, 5] },
                { nombre: "B", valores: [2, 3, 4, 5, 6] },
                { nombre: "C", valores: [4, 5, 6, 7, 8] }
            ],
            prueba: "anova-medidas-repetidas"
        });

    assert.equal(resultado.postHoc.comparaciones.length, 3);
    assert.ok(
        resultado.postHoc.comparaciones.every(
            (fila) =>
                fila.valorP === 0 &&
                fila.advertencia?.includes("constantes")
        )
    );
}

function probarKendallExacto() {
    const perfecto = pruebaKendall(
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
    );
    cerca(perfecto.valorP, 1 / 60, 1e-12);
    assert.equal(
        perfecto.detalles.aproximacionInferencial,
        "Distribución exacta bilateral de Kendall sin empates."
    );

    const conEmpates = pruebaKendall(
        [1, 1, 2, 3, 4],
        [1, 2, 2, 3, 5]
    );
    assert.ok(
        conEmpates.detalles.aproximacionInferencial.includes(
            "Aproximación normal"
        )
    );
}

probarDistribucionesNoCentrales();
probarRegresionLineal();
probarRegresionLogistica();
probarRegresionConteoSinIntercepto();
probarMedidasRepetidasConstantes();
probarKendallExacto();

console.log(
    "✓ Las correcciones estadísticas críticas superaron las pruebas reproducibles."
);
