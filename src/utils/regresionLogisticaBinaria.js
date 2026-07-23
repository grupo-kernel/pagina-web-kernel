const EPS = 1e-12;
const LIMITE_EXP = 35;

function validarVector(nombre, valores, minimo = 5) {
    if (!Array.isArray(valores) || valores.length < minimo) {
        throw new Error(`${nombre} debe contener al menos ${minimo} observaciones.`);
    }

    const numericos = valores.map((valor) =>
        valor === null ||
        valor === undefined ||
        (
            typeof valor === "string" &&
            valor.trim() === ""
        )
            ? NaN
            : Number(valor)
    );

    if (!numericos.every(Number.isFinite)) {
        throw new Error(`${nombre} contiene valores no numéricos o no finitos.`);
    }

    return numericos;
}

function identidad(n) {
    return Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => i === j ? 1 : 0)
    );
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

function productoPunto(a, b) {
    return a.reduce(
        (total, valor, indice) => total + valor * b[indice],
        0
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
                "La matriz de información es singular. Elimine predictores redundantes o perfectamente colineales."
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

function construirMatrizDiseno(predictores, incluirIntercepto) {
    const n = predictores[0].length;

    return Array.from({ length: n }, (_, fila) => [
        ...(incluirIntercepto ? [1] : []),
        ...predictores.map((columna) => columna[fila])
    ]);
}

function logistica(eta) {
    const limitado = Math.max(-LIMITE_EXP, Math.min(LIMITE_EXP, eta));

    if (limitado >= 0) {
        const e = Math.exp(-limitado);
        return 1 / (1 + e);
    }

    const e = Math.exp(limitado);
    return e / (1 + e);
}

function logVerosimilitud(y, probabilidades) {
    return y.reduce((total, valor, indice) => {
        const p = Math.max(
            EPS,
            Math.min(1 - EPS, probabilidades[indice])
        );

        return total + valor * Math.log(p) +
            (1 - valor) * Math.log(1 - p);
    }, 0);
}

function normalAcumulada(z) {
    const signo = z < 0 ? -1 : 1;
    const x = Math.abs(z) / Math.sqrt(2);
    const t = 1 / (1 + 0.3275911 * x);
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const erf = 1 -
        (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) *
        Math.exp(-x * x);

    return 0.5 * (1 + signo * erf);
}

function valorPNormalDosColas(z) {
    return Math.max(
        0,
        Math.min(1, 2 * (1 - normalAcumulada(Math.abs(z))))
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
        t + Math.log(x);
}

function gammaRegularizadaP(a, x) {
    if (x <= 0) return 0;

    if (x < a + 1) {
        let termino = 1 / a;
        let suma = termino;
        let ap = a;

        for (let i = 1; i <= 300; i += 1) {
            ap += 1;
            termino *= x / ap;
            suma += termino;

            if (Math.abs(termino) < Math.abs(suma) * 1e-14) {
                break;
            }
        }

        return suma * Math.exp(-x + a * Math.log(x) - logGamma(a));
    }

    let b = x + 1 - a;
    let c = 1 / 1e-300;
    let d = 1 / b;
    let h = d;

    for (let i = 1; i <= 300; i += 1) {
        const an = -i * (i - a);
        b += 2;
        d = an * d + b;
        if (Math.abs(d) < 1e-300) d = 1e-300;
        c = b + an / c;
        if (Math.abs(c) < 1e-300) c = 1e-300;
        d = 1 / d;
        const delta = d * c;
        h *= delta;

        if (Math.abs(delta - 1) < 1e-14) {
            break;
        }
    }

    const q = Math.exp(-x + a * Math.log(x) - logGamma(a)) * h;
    return 1 - q;
}

function valorPChiCuadrado(estadistico, gradosLibertad) {
    if (!(estadistico >= 0) || !(gradosLibertad > 0)) {
        return null;
    }

    return Math.max(
        0,
        Math.min(
            1,
            1 - gammaRegularizadaP(
                gradosLibertad / 2,
                estadistico / 2
            )
        )
    );
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

function calcularMatrizInformacion(matrizX, probabilidades) {
    const p = matrizX[0].length;
    const informacion = Array.from(
        { length: p },
        () => Array(p).fill(0)
    );

    matrizX.forEach((fila, i) => {
        const peso = Math.max(
            probabilidades[i] * (1 - probabilidades[i]),
            EPS
        );

        for (let j = 0; j < p; j += 1) {
            for (let k = 0; k < p; k += 1) {
                informacion[j][k] += peso * fila[j] * fila[k];
            }
        }
    });

    return informacion;
}

function ajustarIrls(matrizX, y, opciones = {}) {
    const maxIteraciones = opciones.maxIteraciones ?? 100;
    const tolerancia = opciones.tolerancia ?? 1e-8;
    const p = matrizX[0].length;
    let beta = Array(p).fill(0);
    let probabilidades = matrizX.map(() => 0.5);
    let logLikAnterior = logVerosimilitud(y, probabilidades);
    let convergio = false;
    let iteraciones = 0;

    for (let iteracion = 1; iteracion <= maxIteraciones; iteracion += 1) {
        iteraciones = iteracion;
        probabilidades = matrizX.map((fila) =>
            logistica(productoPunto(fila, beta))
        );

        const informacion = calcularMatrizInformacion(
            matrizX,
            probabilidades
        );
        const inversa = invertirMatriz(informacion);
        const score = Array(p).fill(0);

        matrizX.forEach((fila, i) => {
            const diferencia = y[i] - probabilidades[i];
            fila.forEach((valor, j) => {
                score[j] += valor * diferencia;
            });
        });

        const pasoNewton = multiplicarMatrizVector(inversa, score);
        let factorPaso = 1;
        let betaCandidata = beta.map(
            (valor, j) => valor + pasoNewton[j]
        );
        let probabilidadesCandidatas = matrizX.map((fila) =>
            logistica(productoPunto(fila, betaCandidata))
        );
        let logLikCandidata = logVerosimilitud(
            y,
            probabilidadesCandidatas
        );

        while (
            logLikCandidata < logLikAnterior - 1e-10 &&
            factorPaso > 1 / 1024
        ) {
            factorPaso /= 2;
            betaCandidata = beta.map(
                (valor, j) => valor + factorPaso * pasoNewton[j]
            );
            probabilidadesCandidatas = matrizX.map((fila) =>
                logistica(productoPunto(fila, betaCandidata))
            );
            logLikCandidata = logVerosimilitud(
                y,
                probabilidadesCandidatas
            );
        }

        const cambio = Math.max(
            ...betaCandidata.map(
                (valor, j) => Math.abs(valor - beta[j])
            )
        );
        const cambioLogLik = Math.abs(
            logLikCandidata - logLikAnterior
        );

        beta = betaCandidata;
        probabilidades = probabilidadesCandidatas;
        logLikAnterior = logLikCandidata;

        if (cambio < tolerancia && cambioLogLik < tolerancia) {
            convergio = true;
            break;
        }

        if (beta.some((valor) => Math.abs(valor) > 100)) {
            break;
        }
    }

    const informacionFinal = calcularMatrizInformacion(
        matrizX,
        probabilidades
    );
    const covarianza = invertirMatriz(informacionFinal);

    if (
        !beta.every(Number.isFinite) ||
        !probabilidades.every(Number.isFinite) ||
        !covarianza.flat().every(Number.isFinite) ||
        !Number.isFinite(logLikAnterior)
    ) {
        throw new Error(
            "El ajuste produjo resultados no finitos. Revise valores extremos, escala de los predictores y separación."
        );
    }

    return {
        beta,
        probabilidades,
        logLik: logLikAnterior,
        covarianza,
        informacion: informacionFinal,
        convergio,
        iteraciones
    };
}

function ajustarModeloNulo(y, incluirIntercepto) {
    if (!incluirIntercepto) {
        const probabilidades = y.map(() => 0.5);
        return {
            probabilidades,
            logLik: logVerosimilitud(y, probabilidades)
        };
    }

    const proporcion = y.reduce((a, b) => a + b, 0) / y.length;
    const p = Math.max(EPS, Math.min(1 - EPS, proporcion));
    const probabilidades = y.map(() => p);

    return {
        probabilidades,
        logLik: logVerosimilitud(y, probabilidades)
    };
}

function calcularMatrizConfusion(y, probabilidades, umbral) {
    let verdaderosPositivos = 0;
    let verdaderosNegativos = 0;
    let falsosPositivos = 0;
    let falsosNegativos = 0;

    y.forEach((observado, i) => {
        const predicho = probabilidades[i] >= umbral ? 1 : 0;

        if (observado === 1 && predicho === 1) verdaderosPositivos += 1;
        if (observado === 0 && predicho === 0) verdaderosNegativos += 1;
        if (observado === 0 && predicho === 1) falsosPositivos += 1;
        if (observado === 1 && predicho === 0) falsosNegativos += 1;
    });

    const n = y.length;
    const dividir = (numerador, denominador) =>
        denominador > 0 ? numerador / denominador : null;
    const sensibilidad = dividir(
        verdaderosPositivos,
        verdaderosPositivos + falsosNegativos
    );
    const especificidad = dividir(
        verdaderosNegativos,
        verdaderosNegativos + falsosPositivos
    );
    const precision = dividir(
        verdaderosPositivos,
        verdaderosPositivos + falsosPositivos
    );
    const valorPredictivoNegativo = dividir(
        verdaderosNegativos,
        verdaderosNegativos + falsosNegativos
    );
    const f1 = precision !== null && sensibilidad !== null &&
        precision + sensibilidad > 0
        ? 2 * precision * sensibilidad /
            (precision + sensibilidad)
        : null;

    return {
        umbral,
        verdaderosPositivos,
        verdaderosNegativos,
        falsosPositivos,
        falsosNegativos,
        exactitud:
            (verdaderosPositivos + verdaderosNegativos) / n,
        sensibilidad,
        especificidad,
        precision,
        valorPredictivoNegativo,
        f1,
        exactitudBalanceada:
            sensibilidad !== null && especificidad !== null
                ? (sensibilidad + especificidad) / 2
                : null
    };
}

function calcularRoc(y, probabilidades) {
    const pares = y.map((observado, i) => ({
        observado,
        probabilidad: probabilidades[i]
    })).sort((a, b) => b.probabilidad - a.probabilidad);

    const positivos = y.reduce((a, b) => a + b, 0);
    const negativos = y.length - positivos;
    const umbrales = [
        Infinity,
        ...new Set(pares.map((fila) => fila.probabilidad)),
        -Infinity
    ];

    const puntos = umbrales.map((umbral) => {
        let vp = 0;
        let fp = 0;

        pares.forEach((fila) => {
            const positivo = fila.probabilidad >= umbral;
            if (positivo && fila.observado === 1) vp += 1;
            if (positivo && fila.observado === 0) fp += 1;
        });

        return {
            umbral: Number.isFinite(umbral) ? umbral : null,
            sensibilidad: positivos > 0 ? vp / positivos : 0,
            unoMenosEspecificidad: negativos > 0 ? fp / negativos : 0
        };
    }).sort(
        (a, b) =>
            a.unoMenosEspecificidad - b.unoMenosEspecificidad ||
            a.sensibilidad - b.sensibilidad
    );

    let auc = 0;

    for (let i = 1; i < puntos.length; i += 1) {
        const ancho =
            puntos[i].unoMenosEspecificidad -
            puntos[i - 1].unoMenosEspecificidad;
        const alturaMedia =
            (puntos[i].sensibilidad +
                puntos[i - 1].sensibilidad) / 2;
        auc += ancho * alturaMedia;
    }

    return {
        puntos,
        auc: Math.max(0, Math.min(1, auc))
    };
}

function calcularHosmerLemeshow(y, probabilidades) {
    const ordenados = y.map((observado, i) => ({
        observado,
        probabilidad: probabilidades[i]
    })).sort((a, b) => a.probabilidad - b.probabilidad);

    const numeroGrupos = Math.min(10, Math.max(3, Math.floor(y.length / 5)));
    const grupos = [];

    for (let g = 0; g < numeroGrupos; g += 1) {
        const inicio = Math.floor(g * ordenados.length / numeroGrupos);
        const fin = Math.floor((g + 1) * ordenados.length / numeroGrupos);
        const filas = ordenados.slice(inicio, fin);

        if (!filas.length) continue;

        const observadosPositivos = filas.reduce(
            (total, fila) => total + fila.observado,
            0
        );
        const esperadosPositivos = filas.reduce(
            (total, fila) => total + fila.probabilidad,
            0
        );
        const observadosNegativos = filas.length - observadosPositivos;
        const esperadosNegativos = filas.length - esperadosPositivos;

        grupos.push({
            grupo: grupos.length + 1,
            n: filas.length,
            probabilidadMedia:
                filas.reduce((a, b) => a + b.probabilidad, 0) /
                filas.length,
            observadosPositivos,
            esperadosPositivos,
            observadosNegativos,
            esperadosNegativos
        });
    }

    const estadistico = grupos.reduce((total, grupo) => {
        const terminoPositivos = grupo.esperadosPositivos > EPS
            ? (grupo.observadosPositivos - grupo.esperadosPositivos) ** 2 /
                grupo.esperadosPositivos
            : 0;
        const terminoNegativos = grupo.esperadosNegativos > EPS
            ? (grupo.observadosNegativos - grupo.esperadosNegativos) ** 2 /
                grupo.esperadosNegativos
            : 0;

        return total + terminoPositivos + terminoNegativos;
    }, 0);
    const gradosLibertad = Math.max(grupos.length - 2, 1);

    return {
        estadistico,
        gradosLibertad,
        p: valorPChiCuadrado(estadistico, gradosLibertad),
        grupos
    };
}

function calcularDiagnosticos(
    matrizX,
    y,
    probabilidades,
    covarianza
) {
    const numeroParametros = matrizX[0].length;
    const leverage = matrizX.map((fila, i) => {
        const temporal = multiplicarMatrizVector(covarianza, fila);
        const peso = probabilidades[i] * (1 - probabilidades[i]);
        return peso * productoPunto(fila, temporal);
    });

    const residuosPearson = y.map((observado, i) => {
        const varianza = Math.max(
            probabilidades[i] * (1 - probabilidades[i]),
            EPS
        );
        return (observado - probabilidades[i]) / Math.sqrt(varianza);
    });

    const residuosDeviance = y.map((observado, i) => {
        const p = Math.max(EPS, Math.min(1 - EPS, probabilidades[i]));
        const contribucion = observado === 1
            ? 2 * Math.log(1 / p)
            : 2 * Math.log(1 / (1 - p));
        return Math.sign(observado - p) * Math.sqrt(Math.max(contribucion, 0));
    });

    const distanciaCook = residuosPearson.map((residuo, i) => {
        const h = Math.min(leverage[i], 1 - EPS);
        return residuo ** 2 * h /
            (numeroParametros * Math.max((1 - h) ** 2, EPS));
    });

    return {
        leverage,
        residuosPearson,
        residuosDeviance,
        distanciaCook
    };
}

function calcularVif(predictores, nombres) {
    if (predictores.length < 2) return [];

    return predictores.map((respuesta, indiceObjetivo) => {
        const restantes = predictores.filter(
            (_, indice) => indice !== indiceObjetivo
        );
        const matrizX = construirMatrizDiseno(restantes, true);
        const xt = transponer(matrizX);
        const xtx = multiplicarMatrices(xt, matrizX);

        try {
            const inversa = invertirMatriz(xtx);
            const xty = multiplicarMatrizVector(xt, respuesta);
            const beta = multiplicarMatrizVector(inversa, xty);
            const predichos = multiplicarMatrizVector(matrizX, beta);
            const media = respuesta.reduce((a, b) => a + b, 0) /
                respuesta.length;
            const sct = respuesta.reduce(
                (total, valor) => total + (valor - media) ** 2,
                0
            );
            const sce = respuesta.reduce(
                (total, valor, i) =>
                    total + (valor - predichos[i]) ** 2,
                0
            );
            const r2 = sct > EPS ? Math.max(0, 1 - sce / sct) : 1;
            const tolerancia = Math.max(1 - r2, EPS);

            return {
                variable: nombres[indiceObjetivo],
                tolerancia,
                vif: 1 / tolerancia
            };
        } catch {
            return {
                variable: nombres[indiceObjetivo],
                tolerancia: 0,
                vif: Infinity
            };
        }
    });
}

export function ajustarRegresionLogisticaBinaria({
    y,
    X,
    nombresPredictores = [],
    incluirIntercepto = true,
    nivelConfianza = 0.95,
    umbral = 0.5,
    maxIteraciones = 100,
    tolerancia = 1e-8
}) {
    const respuesta = validarVector("La variable dependiente", y, 8);

    if (!respuesta.every((valor) => valor === 0 || valor === 1)) {
        throw new Error(
            "La variable dependiente debe estar codificada exclusivamente con 0 y 1."
        );
    }

    const positivos = respuesta.reduce((a, b) => a + b, 0);
    const negativos = respuesta.length - positivos;

    if (positivos === 0 || negativos === 0) {
        throw new Error(
            "La variable dependiente debe contener observaciones de ambas categorías: 0 y 1."
        );
    }

    if (!Array.isArray(X) || !X.length) {
        throw new Error("Debe proporcionar al menos una variable predictora.");
    }

    const predictores = X.map((columna, indice) =>
        validarVector(
            nombresPredictores[indice] || `X${indice + 1}`,
            columna,
            8
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

    if (!(umbral > 0 && umbral < 1)) {
        throw new Error("El umbral de clasificación debe estar entre 0 y 1.");
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

    if (n <= numeroParametros + 2) {
        throw new Error(
            "No hay suficientes observaciones para estimar el modelo logístico con esta cantidad de predictores."
        );
    }

    const ajuste = ajustarIrls(matrizX, respuesta, {
        maxIteraciones,
        tolerancia
    });

    if (!ajuste.convergio) {
        throw new Error(
            "El algoritmo no alcanzó convergencia. Revise separación perfecta, predictores extremos, colinealidad o tamaño muestral insuficiente."
        );
    }

    const modeloNulo = ajustarModeloNulo(
        respuesta,
        incluirIntercepto
    );
    const glModelo = predictores.length;
    const chiCuadradoModelo = Math.max(
        0,
        2 * (ajuste.logLik - modeloNulo.logLik)
    );
    const pModelo = valorPChiCuadrado(
        chiCuadradoModelo,
        glModelo
    );
    const zCritico = cuantileNormal(
        0.5 + nivelConfianza / 2
    );
    const alfa = 1 - nivelConfianza;
    const nombresCoeficientes = [
        ...(incluirIntercepto ? ["Intercepto"] : []),
        ...nombres
    ];

    const coeficientes = ajuste.beta.map((estimacion, indice) => {
        const errorEstandar = Math.sqrt(
            Math.max(ajuste.covarianza[indice][indice], 0)
        );
        const z = errorEstandar > EPS
            ? estimacion / errorEstandar
            : estimacion === 0 ? 0 : Infinity;
        const p = valorPNormalDosColas(z);
        const inferior = estimacion - zCritico * errorEstandar;
        const superior = estimacion + zCritico * errorEstandar;

        return {
            termino: nombresCoeficientes[indice],
            estimacion,
            errorEstandar,
            z,
            p,
            intervaloConfianza: {
                inferior,
                superior,
                nivel: nivelConfianza
            },
            oddsRatio: Math.exp(Math.max(-LIMITE_EXP, Math.min(LIMITE_EXP, estimacion))),
            intervaloOddsRatio: {
                inferior: Math.exp(Math.max(-LIMITE_EXP, Math.min(LIMITE_EXP, inferior))),
                superior: Math.exp(Math.max(-LIMITE_EXP, Math.min(LIMITE_EXP, superior))),
                nivel: nivelConfianza
            }
        };
    });

    const matrizConfusion = calcularMatrizConfusion(
        respuesta,
        ajuste.probabilidades,
        umbral
    );
    const roc = calcularRoc(respuesta, ajuste.probabilidades);
    const hosmerLemeshow = calcularHosmerLemeshow(
        respuesta,
        ajuste.probabilidades
    );
    const diagnosticosBase = calcularDiagnosticos(
        matrizX,
        respuesta,
        ajuste.probabilidades,
        ajuste.covarianza
    );
    const vif = calcularVif(predictores, nombres);
    const observacionesInfluyentes = respuesta.map((observado, i) => ({
        observacion: i + 1,
        observado,
        probabilidad: ajuste.probabilidades[i],
        residuoPearson: diagnosticosBase.residuosPearson[i],
        residuoDeviance: diagnosticosBase.residuosDeviance[i],
        leverage: diagnosticosBase.leverage[i],
        distanciaCook: diagnosticosBase.distanciaCook[i]
    })).filter((fila) =>
        Math.abs(fila.residuoPearson) > 2 ||
        fila.leverage > 2 * numeroParametros / n ||
        fila.distanciaCook > 4 / n
    );

    const deviance = -2 * ajuste.logLik;
    const devianceNula = -2 * modeloNulo.logLik;
    const aic = -2 * ajuste.logLik + 2 * numeroParametros;
    const bic = -2 * ajuste.logLik + numeroParametros * Math.log(n);
    const r2McFadden = modeloNulo.logLik !== 0
        ? 1 - ajuste.logLik / modeloNulo.logLik
        : null;
    const r2CoxSnell = 1 - Math.exp(
        (2 / n) * (modeloNulo.logLik - ajuste.logLik)
    );
    const maxCoxSnell = 1 - Math.exp(
        (2 / n) * modeloNulo.logLik
    );
    const r2Nagelkerke = maxCoxSnell > EPS
        ? r2CoxSnell / maxCoxSnell
        : null;
    const clasificacionPerfecta =
        matrizConfusion.exactitud === 1;
    const coeficienteExtremo = ajuste.beta.some(
        (valor) => Math.abs(valor) > 15
    );
    const posibleSeparacion =
        clasificacionPerfecta && coeficienteExtremo;

    const interpretacion = [
        pModelo !== null && pModelo < alfa
            ? `El modelo global mejora significativamente al modelo nulo (χ² = ${chiCuadradoModelo.toFixed(4)}, gl = ${glModelo}, p ${pModelo < 0.001 ? "< 0.001" : `= ${pModelo.toFixed(4)}`}).`
            : `El modelo global no alcanza significación estadística con α = ${alfa.toFixed(3)} (χ² = ${chiCuadradoModelo.toFixed(4)}, gl = ${glModelo}, p = ${pModelo?.toFixed(4) ?? "no disponible"}).`,
        `El área bajo la curva ROC es ${roc.auc.toFixed(4)}, lo que resume la capacidad del modelo para ordenar casos positivos por encima de casos negativos.`,
        `Con umbral ${umbral.toFixed(2)}, la exactitud es ${(matrizConfusion.exactitud * 100).toFixed(2)} %, la sensibilidad es ${matrizConfusion.sensibilidad === null ? "no calculable" : `${(matrizConfusion.sensibilidad * 100).toFixed(2)} %`} y la especificidad es ${matrizConfusion.especificidad === null ? "no calculable" : `${(matrizConfusion.especificidad * 100).toFixed(2)} %`}.`,
        hosmerLemeshow.p !== null && hosmerLemeshow.p >= alfa
            ? `La prueba de Hosmer–Lemeshow no detecta una discrepancia significativa entre probabilidades observadas y esperadas (p = ${hosmerLemeshow.p.toFixed(4)}).`
            : `La prueba de Hosmer–Lemeshow sugiere revisar la calibración del modelo (p ${hosmerLemeshow.p !== null && hosmerLemeshow.p < 0.001 ? "< 0.001" : `= ${hosmerLemeshow.p?.toFixed(4) ?? "no disponible"}`}).`,
        vif.some((fila) => fila.vif >= 10)
            ? "Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10)."
            : vif.some((fila) => fila.vif >= 5)
                ? "Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5)."
                : vif.length
                    ? "No se detectó multicolinealidad relevante mediante el criterio VIF."
                    : "El VIF no aplica a un modelo con un solo predictor.",
        observacionesInfluyentes.length
            ? `Se identificaron ${observacionesInfluyentes.length} observaciones potencialmente influyentes que deben revisarse.`
            : "No se identificaron observaciones claramente influyentes mediante los criterios automáticos.",
        posibleSeparacion
            ? "La clasificación perfecta junto con coeficientes extremos sugiere posible separación completa o cuasicompleta; los coeficientes pueden ser inestables."
            : "No se detectó el patrón automático de separación completa basado en clasificación perfecta y coeficientes extremos."
    ];

    return {
        tipoModelo: "regresion-logistica-binaria",
        n,
        numeroPredictores: predictores.length,
        incluirIntercepto,
        nombresPredictores: nombres,
        nivelConfianza,
        alfa,
        convergencia: {
            convergio: ajuste.convergio,
            iteraciones: ajuste.iteraciones,
            posibleSeparacion
        },
        distribucionRespuesta: {
            positivos,
            negativos,
            proporcionPositivos: positivos / n
        },
        coeficientes,
        ajuste: {
            logVerosimilitud: ajuste.logLik,
            logVerosimilitudNula: modeloNulo.logLik,
            deviance,
            devianceNula,
            aic,
            bic,
            r2McFadden,
            r2CoxSnell,
            r2Nagelkerke
        },
        pruebaGlobal: {
            chiCuadrado: chiCuadradoModelo,
            gradosLibertad: glModelo,
            p: pModelo
        },
        clasificacion: matrizConfusion,
        roc,
        calibracion: hosmerLemeshow,
        diagnosticos: {
            ...diagnosticosBase,
            vif,
            observacionesInfluyentes
        },
        probabilidades: ajuste.probabilidades,
        datosGrafico: respuesta.map((observado, indice) => ({
            observacion: indice + 1,
            observado,
            probabilidad: ajuste.probabilidades[indice],
            clasePredicha:
                ajuste.probabilidades[indice] >= umbral ? 1 : 0,
            residuoPearson:
                diagnosticosBase.residuosPearson[indice],
            residuoDeviance:
                diagnosticosBase.residuosDeviance[indice],
            leverage: diagnosticosBase.leverage[indice],
            distanciaCook:
                diagnosticosBase.distanciaCook[indice],
            predictores: predictores.map(
                (columna) => columna[indice]
            )
        })),
        interpretacion
    };
}

export function predecirRegresionLogistica(
    modelo,
    nuevosPredictores,
    umbral = modelo?.clasificacion?.umbral ?? 0.5
) {
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

    if (!(umbral > 0 && umbral < 1)) {
        throw new Error("El umbral de clasificación debe estar entre 0 y 1.");
    }

    const valores = nuevosPredictores.map((valor) =>
        valor === null ||
        valor === undefined ||
        (
            typeof valor === "string" &&
            valor.trim() === ""
        )
            ? NaN
            : Number(valor)
    );

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
    const eta = productoPunto(fila, betas);
    const probabilidad = logistica(eta);

    return {
        predictorLineal: eta,
        probabilidad,
        umbral,
        clasePredicha: probabilidad >= umbral ? 1 : 0
    };
}
