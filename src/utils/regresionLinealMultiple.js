const EPS = 1e-12;

function validarVector(nombre, valores) {
    if (!Array.isArray(valores) || valores.length < 3) {
        throw new Error(`${nombre} debe contener al menos tres observaciones.`);
    }

    const numericos = valores.map(Number);

    if (!numericos.every(Number.isFinite)) {
        throw new Error(`${nombre} contiene valores no numéricos o no finitos.`);
    }

    return numericos;
}

function transponer(matriz) {
    return matriz[0].map((_, columna) =>
        matriz.map((fila) => fila[columna])
    );
}

function multiplicarMatrices(a, b) {
    return a.map((fila) =>
        b[0].map((_, columna) =>
            fila.reduce(
                (total, valor, indice) =>
                    total + valor * b[indice][columna],
                0
            )
        )
    );
}

function multiplicarMatrizVector(matriz, vector) {
    return matriz.map((fila) =>
        fila.reduce(
            (total, valor, indice) =>
                total + valor * vector[indice],
            0
        )
    );
}

function identidad(n) {
    return Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => i === j ? 1 : 0)
    );
}

function invertirMatriz(matriz) {
    const n = matriz.length;
    const aumentada = matriz.map((fila, i) => [
        ...fila.map(Number),
        ...identidad(n)[i]
    ]);

    for (let columna = 0; columna < n; columna += 1) {
        let pivote = columna;

        for (let fila = columna + 1; fila < n; fila += 1) {
            if (
                Math.abs(aumentada[fila][columna]) >
                Math.abs(aumentada[pivote][columna])
            ) {
                pivote = fila;
            }
        }

        if (Math.abs(aumentada[pivote][columna]) < EPS) {
            throw new Error(
                "La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales."
            );
        }

        [aumentada[columna], aumentada[pivote]] =
            [aumentada[pivote], aumentada[columna]];

        const divisor = aumentada[columna][columna];
        aumentada[columna] = aumentada[columna].map(
            (valor) => valor / divisor
        );

        for (let fila = 0; fila < n; fila += 1) {
            if (fila === columna) continue;

            const factor = aumentada[fila][columna];
            aumentada[fila] = aumentada[fila].map(
                (valor, indice) =>
                    valor - factor * aumentada[columna][indice]
            );
        }
    }

    return aumentada.map((fila) => fila.slice(n));
}

function media(valores) {
    return valores.reduce((a, b) => a + b, 0) / valores.length;
}

function sumaCuadrados(valores, centro = media(valores)) {
    return valores.reduce(
        (total, valor) => total + (valor - centro) ** 2,
        0
    );
}

function logGamma(z) {
    const coeficientes = [
        676.5203681218851,
        -1259.1392167224028,
        771.3234287776531,
        -176.6150291621406,
        12.507343278686905,
        -0.13857109526572012,
        9.984369578019572e-6,
        1.5056327351493116e-7
    ];

    if (z < 0.5) {
        return Math.log(Math.PI) -
            Math.log(Math.sin(Math.PI * z)) -
            logGamma(1 - z);
    }

    let x = 0.9999999999998099;
    const tZ = z - 1;

    coeficientes.forEach((coeficiente, indice) => {
        x += coeficiente / (tZ + indice + 1);
    });

    const t = tZ + coeficientes.length - 0.5;

    return 0.5 * Math.log(2 * Math.PI) +
        (tZ + 0.5) * Math.log(t) -
        t +
        Math.log(x);
}

function fraccionBetaContinua(a, b, x) {
    const maxIteraciones = 200;
    const precision = 3e-14;
    const minimo = 1e-300;
    const qab = a + b;
    const qap = a + 1;
    const qam = a - 1;
    let c = 1;
    let d = 1 - qab * x / qap;

    if (Math.abs(d) < minimo) d = minimo;
    d = 1 / d;
    let h = d;

    for (let m = 1; m <= maxIteraciones; m += 1) {
        const m2 = 2 * m;
        let aa = m * (b - m) * x /
            ((qam + m2) * (a + m2));

        d = 1 + aa * d;
        if (Math.abs(d) < minimo) d = minimo;
        c = 1 + aa / c;
        if (Math.abs(c) < minimo) c = minimo;
        d = 1 / d;
        h *= d * c;

        aa = -(a + m) * (qab + m) * x /
            ((a + m2) * (qap + m2));

        d = 1 + aa * d;
        if (Math.abs(d) < minimo) d = minimo;
        c = 1 + aa / c;
        if (Math.abs(c) < minimo) c = minimo;
        d = 1 / d;
        const delta = d * c;
        h *= delta;

        if (Math.abs(delta - 1) < precision) break;
    }

    return h;
}

function betaRegularizada(x, a, b) {
    if (x <= 0) return 0;
    if (x >= 1) return 1;

    const frente = Math.exp(
        logGamma(a + b) -
        logGamma(a) -
        logGamma(b) +
        a * Math.log(x) +
        b * Math.log(1 - x)
    );

    if (x < (a + 1) / (a + b + 2)) {
        return frente * fraccionBetaContinua(a, b, x) / a;
    }

    return 1 -
        frente * fraccionBetaContinua(b, a, 1 - x) / b;
}

function valorPStudent(t, gradosLibertad) {
    if (!Number.isFinite(t)) return 0;

    const x = gradosLibertad /
        (gradosLibertad + t ** 2);

    return Math.min(
        1,
        betaRegularizada(
            x,
            gradosLibertad / 2,
            0.5
        )
    );
}

function valorPF(f, gl1, gl2) {
    if (!Number.isFinite(f)) return 0;
    if (f <= 0) return 1;

    const x = gl2 / (gl2 + gl1 * f);
    return betaRegularizada(x, gl2 / 2, gl1 / 2);
}

function cuantileNormal(p) {
    const a = [
        -39.6968302866538,
        220.946098424521,
        -275.928510446969,
        138.357751867269,
        -30.6647980661472,
        2.50662827745924
    ];
    const b = [
        -54.4760987982241,
        161.585836858041,
        -155.698979859887,
        66.8013118877197,
        -13.2806815528857
    ];
    const c = [
        -0.00778489400243029,
        -0.322396458041136,
        -2.40075827716184,
        -2.54973253934373,
        4.37466414146497,
        2.93816398269878
    ];
    const d = [
        0.00778469570904146,
        0.32246712907004,
        2.445134137143,
        3.75440866190742
    ];
    const pBajo = 0.02425;
    const pAlto = 1 - pBajo;

    if (p <= 0 || p >= 1) {
        throw new Error("La probabilidad debe estar entre 0 y 1.");
    }

    if (p < pBajo) {
        const q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    if (p > pAlto) {
        const q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    const q = p - 0.5;
    const r = q * q;

    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

function cuantileStudentAproximado(p, gl) {
    const z = cuantileNormal(p);
    const z2 = z * z;
    const z3 = z2 * z;
    const z5 = z3 * z2;
    const z7 = z5 * z2;

    return z +
        (z3 + z) / (4 * gl) +
        (5 * z5 + 16 * z3 + 3 * z) /
            (96 * gl ** 2) +
        (3 * z7 + 19 * z5 + 17 * z3 - 15 * z) /
            (384 * gl ** 3);
}

function construirMatrizDiseno(predictores, incluirIntercepto) {
    const n = predictores[0].length;

    return Array.from({ length: n }, (_, fila) => [
        ...(incluirIntercepto ? [1] : []),
        ...predictores.map((columna) => columna[fila])
    ]);
}

function calcularVIF(predictores, nombres) {
    if (predictores.length < 2) return [];

    return predictores.map((variable, indice) => {
        const restantes = predictores.filter(
            (_, posicion) => posicion !== indice
        );

        try {
            const auxiliar = ajustarRegresion({
                y: variable,
                X: restantes,
                nombresPredictores: nombres.filter(
                    (_, posicion) => posicion !== indice
                ),
                incluirIntercepto: true,
                nivelConfianza: 0.95,
                calcularDiagnosticos: false,
                calcularVif: false
            });

            const tolerancia = Math.max(
                1 - auxiliar.ajuste.r2,
                EPS
            );

            return {
                variable: nombres[indice],
                tolerancia,
                vif: 1 / tolerancia
            };
        } catch {
            return {
                variable: nombres[indice],
                tolerancia: 0,
                vif: Infinity
            };
        }
    });
}

export function ajustarRegresion({
    y,
    X,
    nombresPredictores = [],
    incluirIntercepto = true,
    nivelConfianza = 0.95,
    calcularDiagnosticos = true,
    calcularVif = true
}) {
    const respuesta = validarVector("La variable dependiente", y);

    if (!Array.isArray(X) || !X.length) {
        throw new Error("Debe proporcionar al menos una variable predictora.");
    }

    const predictores = X.map((columna, indice) =>
        validarVector(
            nombresPredictores[indice] || `X${indice + 1}`,
            columna
        )
    );

    if (!predictores.every((columna) => columna.length === respuesta.length)) {
        throw new Error(
            "Todas las variables deben contener la misma cantidad de observaciones."
        );
    }

    if (!(nivelConfianza > 0 && nivelConfianza < 1)) {
        throw new Error("El nivel de confianza debe estar entre 0 y 1.");
    }

    const nombres = predictores.map(
        (_, indice) => nombresPredictores[indice] || `X${indice + 1}`
    );
    const matrizX = construirMatrizDiseno(
        predictores,
        incluirIntercepto
    );
    const n = respuesta.length;
    const numeroParametros = matrizX[0].length;
    const gradosLibertadError = n - numeroParametros;

    if (gradosLibertadError <= 0) {
        throw new Error(
            "No hay suficientes observaciones para estimar el modelo."
        );
    }

    const xt = transponer(matrizX);
    const xtx = multiplicarMatrices(xt, matrizX);
    const xtxInversa = invertirMatriz(xtx);
    const xty = multiplicarMatrizVector(xt, respuesta);
    const coeficientes = multiplicarMatrizVector(
        xtxInversa,
        xty
    );
    const predichos = multiplicarMatrizVector(
        matrizX,
        coeficientes
    );
    const residuos = respuesta.map(
        (valor, indice) => valor - predichos[indice]
    );
    const mediaY = media(respuesta);
    const sct = incluirIntercepto
        ? sumaCuadrados(respuesta, mediaY)
        : respuesta.reduce((total, valor) => total + valor ** 2, 0);
    const sce = residuos.reduce(
        (total, residuo) => total + residuo ** 2,
        0
    );
    const scr = Math.max(sct - sce, 0);
    const r2 = sct > EPS ? 1 - sce / sct : 1;
    const r2Ajustado = incluirIntercepto
        ? 1 - (1 - r2) * (n - 1) / gradosLibertadError
        : 1 - (1 - r2) * n / gradosLibertadError;
    const mse = sce / gradosLibertadError;
    const rmse = Math.sqrt(mse);
    const mae = residuos.reduce(
        (total, residuo) => total + Math.abs(residuo),
        0
    ) / n;
    const glModelo = numeroParametros - (incluirIntercepto ? 1 : 0);
    const f = glModelo > 0 && mse > EPS
        ? (scr / glModelo) / mse
        : Infinity;
    const pModelo = glModelo > 0
        ? valorPF(f, glModelo, gradosLibertadError)
        : null;
    const tCritico = cuantileStudentAproximado(
        0.5 + nivelConfianza / 2,
        gradosLibertadError
    );
    const nombresCoeficientes = [
        ...(incluirIntercepto ? ["Intercepto"] : []),
        ...nombres
    ];

    const tablaCoeficientes = coeficientes.map(
        (estimacion, indice) => {
            const errorEstandar = Math.sqrt(
                Math.max(mse * xtxInversa[indice][indice], 0)
            );
            const t = errorEstandar > EPS
                ? estimacion / errorEstandar
                : estimacion === 0 ? 0 : Infinity;
            const p = valorPStudent(
                Math.abs(t),
                gradosLibertadError
            );

            return {
                termino: nombresCoeficientes[indice],
                estimacion,
                errorEstandar,
                t,
                p,
                intervaloConfianza: {
                    inferior: estimacion - tCritico * errorEstandar,
                    superior: estimacion + tCritico * errorEstandar,
                    nivel: nivelConfianza
                }
            };
        }
    );

    const leverage = matrizX.map((fila) => {
        const temporal = multiplicarMatrizVector(
            xtxInversa,
            fila
        );

        return fila.reduce(
            (total, valor, indice) =>
                total + valor * temporal[indice],
            0
        );
    });
    const residuosEstandarizados = residuos.map(
        (residuo, indice) => {
            const denominador = Math.sqrt(
                Math.max(mse * (1 - leverage[indice]), EPS)
            );
            return residuo / denominador;
        }
    );
    const distanciaCook = residuos.map(
        (residuo, indice) => {
            const h = leverage[indice];
            return numeroParametros > 0 && mse > EPS
                ? residuo ** 2 /
                    (numeroParametros * mse) *
                    h /
                    Math.max((1 - h) ** 2, EPS)
                : 0;
        }
    );
    const durbinWatsonDenominador = residuos.reduce(
        (total, residuo) => total + residuo ** 2,
        0
    );
    const durbinWatsonNumerador = residuos.slice(1).reduce(
        (total, residuo, indice) =>
            total + (residuo - residuos[indice]) ** 2,
        0
    );
    const durbinWatson = durbinWatsonDenominador > EPS
        ? durbinWatsonNumerador / durbinWatsonDenominador
        : null;
    const vif = calcularVif && predictores.length > 1
        ? calcularVIF(predictores, nombres)
        : [];

    const observacionesInfluyentes = calcularDiagnosticos
        ? distanciaCook
            .map((valor, indice) => ({
                observacion: indice + 1,
                distanciaCook: valor,
                leverage: leverage[indice],
                residuoEstandarizado:
                    residuosEstandarizados[indice]
            }))
            .filter((fila) =>
                fila.distanciaCook > 4 / n ||
                Math.abs(fila.residuoEstandarizado) > 2 ||
                fila.leverage > 2 * numeroParametros / n
            )
        : [];

    const interpretacion = [
        `El modelo explica ${(r2 * 100).toFixed(2)} % de la variabilidad de la variable dependiente.`,
        `El R² ajustado es ${r2Ajustado.toFixed(4)} y el error estándar de estimación es ${rmse.toFixed(4)}.`,
        pModelo === null
            ? "No se calculó una prueba global del modelo."
            : pModelo < 0.05
                ? `El modelo global es estadísticamente significativo (F = ${f.toFixed(4)}, p ${pModelo < 0.001 ? "< 0.001" : `= ${pModelo.toFixed(4)}`}).`
                : `El modelo global no alcanza significación estadística al 5 % (F = ${f.toFixed(4)}, p = ${pModelo.toFixed(4)}).`,
        vif.some((fila) => fila.vif >= 10)
            ? "Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10)."
            : vif.some((fila) => fila.vif >= 5)
                ? "Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5)."
                : vif.length
                    ? "No se detectó multicolinealidad relevante mediante el criterio VIF."
                    : "El VIF no aplica a un modelo con un solo predictor.",
        observacionesInfluyentes.length
            ? `Se identificaron ${observacionesInfluyentes.length} observaciones potencialmente influyentes que deben revisarse.`
            : "No se identificaron observaciones claramente influyentes mediante los criterios automáticos."
    ];

    return {
        tipoModelo: predictores.length === 1
            ? "regresion-lineal-simple"
            : "regresion-lineal-multiple",
        n,
        numeroPredictores: predictores.length,
        incluirIntercepto,
        nombresPredictores: nombres,
        coeficientes: tablaCoeficientes,
        ajuste: {
            r2,
            r2Ajustado,
            mae,
            mse,
            rmse,
            errorEstandarEstimacion: rmse
        },
        anova: {
            sumaCuadradosModelo: scr,
            sumaCuadradosError: sce,
            sumaCuadradosTotal: sct,
            gradosLibertadModelo: glModelo,
            gradosLibertadError,
            gradosLibertadTotal: incluirIntercepto ? n - 1 : n,
            mediaCuadraticaModelo:
                glModelo > 0 ? scr / glModelo : null,
            mediaCuadraticaError: mse,
            f,
            p: pModelo
        },
        predichos,
        residuos,
        diagnosticos: {
            leverage,
            residuosEstandarizados,
            distanciaCook,
            durbinWatson,
            vif,
            observacionesInfluyentes
        },
        datosGrafico: respuesta.map((observado, indice) => ({
            observacion: indice + 1,
            observado,
            predicho: predichos[indice],
            residuo: residuos[indice],
            residuoEstandarizado:
                residuosEstandarizados[indice],
            leverage: leverage[indice],
            distanciaCook: distanciaCook[indice],
            predictores: predictores.map(
                (columna) => columna[indice]
            )
        })),
        interpretacion
    };
}

export function ajustarRegresionLinealSimple({
    x,
    y,
    nombrePredictor = "X",
    incluirIntercepto = true,
    nivelConfianza = 0.95
}) {
    return ajustarRegresion({
        y,
        X: [x],
        nombresPredictores: [nombrePredictor],
        incluirIntercepto,
        nivelConfianza
    });
}

export function predecirRegresion(modelo, nuevosPredictores) {
    if (!modelo?.coeficientes?.length) {
        throw new Error("El modelo proporcionado no es válido.");
    }

    if (
        !Array.isArray(nuevosPredictores) ||
        nuevosPredictores.length !== modelo.numeroPredictores
    ) {
        throw new Error(
            `Debe proporcionar ${modelo.numeroPredictores} valores predictores.`
        );
    }

    const valores = nuevosPredictores.map(Number);

    if (!valores.every(Number.isFinite)) {
        throw new Error("Los valores predictores deben ser numéricos.");
    }

    const betas = modelo.coeficientes.map(
        (fila) => fila.estimacion
    );
    const fila = [
        ...(modelo.incluirIntercepto ? [1] : []),
        ...valores
    ];

    return fila.reduce(
        (total, valor, indice) => total + valor * betas[indice],
        0
    );
}
