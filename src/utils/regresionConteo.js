const EPS = 1e-10;
const LIMITE_ETA = 35;

/*
 * Las aproximaciones de normal, cuantil normal y log-gamma siguen las
 * referencias matemáticas registradas en docs/ALGORITHM_REFERENCES.md
 * (Abramowitz–Stegun, familia de Acklam y Lanczos, respectivamente).
 */

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

function transponer(matriz) {
    return matriz[0].map((_, columna) => matriz.map((fila) => fila[columna]));
}

function multiplicarMatrizVector(matriz, vector) {
    return matriz.map((fila) =>
        fila.reduce((total, valor, indice) => total + valor * vector[indice], 0)
    );
}

function invertirMatriz(matriz) {
    const n = matriz.length;
    const aumentada = matriz.map((fila, i) => [
        ...fila.map(Number),
        ...Array.from({ length: n }, (_, j) => i === j ? 1 : 0)
    ]);

    for (let columna = 0; columna < n; columna += 1) {
        let pivote = columna;
        for (let fila = columna + 1; fila < n; fila += 1) {
            if (Math.abs(aumentada[fila][columna]) > Math.abs(aumentada[pivote][columna])) {
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
        aumentada[columna] = aumentada[columna].map((valor) => valor / divisor);

        for (let fila = 0; fila < n; fila += 1) {
            if (fila === columna) continue;
            const factor = aumentada[fila][columna];
            aumentada[fila] = aumentada[fila].map(
                (valor, indice) => valor - factor * aumentada[columna][indice]
            );
        }
    }

    return aumentada.map((fila) => fila.slice(n));
}

function productoPunto(a, b) {
    return a.reduce((total, valor, indice) => total + valor * b[indice], 0);
}

function construirDiseno(predictores, incluirIntercepto) {
    const n = predictores[0].length;
    return Array.from({ length: n }, (_, fila) => [
        ...(incluirIntercepto ? [1] : []),
        ...predictores.map((columna) => columna[fila])
    ]);
}

function resolverMinimosCuadradosPonderados(matrizX, respuesta, pesos) {
    const p = matrizX[0].length;
    const xtwx = Array.from({ length: p }, () => Array(p).fill(0));
    const xtwz = Array(p).fill(0);

    matrizX.forEach((fila, i) => {
        const w = Math.max(pesos[i], EPS);
        for (let a = 0; a < p; a += 1) {
            xtwz[a] += fila[a] * w * respuesta[i];
            for (let b = 0; b < p; b += 1) {
                xtwx[a][b] += fila[a] * w * fila[b];
            }
        }
    });

    const inversa = invertirMatriz(xtwx);
    return {
        beta: multiplicarMatrizVector(inversa, xtwz),
        covarianza: inversa,
        xtwx
    };
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
        return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - logGamma(1 - z);
    }

    let x = 0.9999999999998099;
    const zm1 = z - 1;
    coeficientes.forEach((coeficiente, indice) => {
        x += coeficiente / (zm1 + indice + 1);
    });
    const t = zm1 + coeficientes.length - 0.5;

    return 0.5 * Math.log(2 * Math.PI) +
        (zm1 + 0.5) * Math.log(t) - t + Math.log(x);
}

function gammaRegularizadaQ(a, x) {
    if (x <= 0) return 1;
    const maxIteraciones = 200;
    const tolerancia = 1e-14;

    if (x < a + 1) {
        let termino = 1 / a;
        let suma = termino;
        let ap = a;
        for (let n = 1; n <= maxIteraciones; n += 1) {
            ap += 1;
            termino *= x / ap;
            suma += termino;
            if (Math.abs(termino) < Math.abs(suma) * tolerancia) break;
        }
        const p = suma * Math.exp(-x + a * Math.log(x) - logGamma(a));
        return Math.max(0, Math.min(1, 1 - p));
    }

    let b = x + 1 - a;
    let c = 1 / 1e-300;
    let d = 1 / b;
    let h = d;

    for (let i = 1; i <= maxIteraciones; i += 1) {
        const an = -i * (i - a);
        b += 2;
        d = an * d + b;
        if (Math.abs(d) < 1e-300) d = 1e-300;
        c = b + an / c;
        if (Math.abs(c) < 1e-300) c = 1e-300;
        d = 1 / d;
        const delta = d * c;
        h *= delta;
        if (Math.abs(delta - 1) < tolerancia) break;
    }

    return Math.max(
        0,
        Math.min(1, Math.exp(-x + a * Math.log(x) - logGamma(a)) * h)
    );
}

function valorPChiCuadrado(estadistico, gl) {
    if (!Number.isFinite(estadistico) || estadistico < 0 || gl <= 0) return null;
    return gammaRegularizadaQ(gl / 2, estadistico / 2);
}

function normalCdf(z) {
    const signo = z < 0 ? -1 : 1;
    const x = Math.abs(z) / Math.sqrt(2);
    const t = 1 / (1 + 0.3275911 * x);
    const erf = 1 - (((((1.061405429 * t - 1.453152027) * t) +
        1.421413741) * t - 0.284496736) * t + 0.254829592) *
        t * Math.exp(-x * x);
    return 0.5 * (1 + signo * erf);
}

function valorPNormal(z) {
    if (!Number.isFinite(z)) return 0;
    return Math.max(0, Math.min(1, 2 * (1 - normalCdf(Math.abs(z)))));
}

function cuantileNormal(p) {
    const a = [-39.6968302866538, 220.946098424521, -275.928510446969,
        138.357751867269, -30.6647980661472, 2.50662827745924];
    const b = [-54.4760987982241, 161.585836858041, -155.698979859887,
        66.8013118877197, -13.2806815528857];
    const c = [-0.00778489400243029, -0.322396458041136, -2.40075827716184,
        -2.54973253934373, 4.37466414146497, 2.93816398269878];
    const d = [0.00778469570904146, 0.32246712907004,
        2.445134137143, 3.75440866190742];
    const bajo = 0.02425;
    const alto = 1 - bajo;

    if (!(p > 0 && p < 1)) throw new Error("Probabilidad inválida.");

    if (p < bajo) {
        const q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    if (p > alto) {
        const q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    const q = p - 0.5;
    const r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

function logLikPoisson(y, mu) {
    return y.reduce(
        (total, valor, i) => total + valor * Math.log(Math.max(mu[i], EPS)) -
            mu[i] - logGamma(valor + 1),
        0
    );
}

function logLikNegativa(y, mu, alpha) {
    const r = 1 / Math.max(alpha, EPS);
    return y.reduce((total, valor, i) => {
        const media = Math.max(mu[i], EPS);
        return total + logGamma(valor + r) - logGamma(r) - logGamma(valor + 1) +
            r * Math.log(r / (r + media)) +
            valor * Math.log(media / (r + media));
    }, 0);
}

function deviancePoisson(y, mu) {
    return 2 * y.reduce((total, valor, i) => {
        const media = Math.max(mu[i], EPS);
        return total + (valor === 0 ? media : valor * Math.log(valor / media) - (valor - media));
    }, 0);
}

function devianceNegativa(y, mu, alpha) {
    return 2 * y.reduce((total, valor, i) => {
        const media = Math.max(mu[i], EPS);
        const primer = valor === 0 ? 0 : valor * Math.log(valor / media);
        const segundo = (valor + 1 / alpha) *
            Math.log((valor + 1 / alpha) / (media + 1 / alpha));
        return total + primer - segundo;
    }, 0);
}

function ajustarIrls({
    matrizX,
    y,
    offset,
    modelo,
    alphaInicial = 0.1,
    maxIteraciones = 120,
    tolerancia = 1e-8
}) {
    const p = matrizX[0].length;
    let beta = Array(p).fill(0);
    let alpha = Math.max(alphaInicial, 1e-8);
    let covarianza = null;
    let mu = y.map((valor) => Math.max(valor + 0.1, 0.1));
    let convergio = false;
    let iteraciones = 0;

    for (let iteracion = 1; iteracion <= maxIteraciones; iteracion += 1) {
        const eta = matrizX.map((fila, i) =>
            productoPunto(fila, beta) + offset[i]
        );
        mu = eta.map((valor) => Math.exp(Math.max(-LIMITE_ETA, Math.min(LIMITE_ETA, valor))));

        const varianzas = mu.map((media) =>
            modelo === "negativa" ? media + alpha * media ** 2 : media
        );
        const pesos = mu.map((media, i) =>
            Math.max(media ** 2 / Math.max(varianzas[i], EPS), EPS)
        );
        const respuestaTrabajo = mu.map((media, i) =>
            eta[i] + (y[i] - media) / Math.max(media, EPS) - offset[i]
        );
        const solucion = resolverMinimosCuadradosPonderados(
            matrizX,
            respuestaTrabajo,
            pesos
        );
        const cambioBeta = Math.max(
            ...solucion.beta.map((valor, i) => Math.abs(valor - beta[i]))
        );
        beta = solucion.beta;
        covarianza = solucion.covarianza;

        let cambioAlpha = 0;
        if (modelo === "negativa") {
            const numerador = y.reduce(
                (total, valor, i) => total + ((valor - mu[i]) ** 2 - mu[i]),
                0
            );
            const denominador = mu.reduce(
                (total, media) => total + media ** 2,
                0
            );
            const nuevaAlpha = Math.max(1e-8, numerador / Math.max(denominador, EPS));
            cambioAlpha = Math.abs(nuevaAlpha - alpha);
            alpha = 0.5 * alpha + 0.5 * nuevaAlpha;
        }

        iteraciones = iteracion;
        if (cambioBeta < tolerancia && cambioAlpha < Math.sqrt(tolerancia)) {
            convergio = true;
            break;
        }
    }

    const etaFinal = matrizX.map((fila, i) => productoPunto(fila, beta) + offset[i]);
    mu = etaFinal.map((valor) => Math.exp(Math.max(-LIMITE_ETA, Math.min(LIMITE_ETA, valor))));
    const varianzas = mu.map((media) =>
        modelo === "negativa" ? media + alpha * media ** 2 : media
    );
    const pesos = mu.map((media, i) => media ** 2 / Math.max(varianzas[i], EPS));
    covarianza = resolverMinimosCuadradosPonderados(
        matrizX,
        Array(y.length).fill(0),
        pesos
    ).covarianza;

    if (
        !beta.every(Number.isFinite) ||
        !mu.every(Number.isFinite) ||
        !varianzas.every(Number.isFinite) ||
        !covarianza.flat().every(Number.isFinite) ||
        !Number.isFinite(alpha)
    ) {
        throw new Error(
            "El ajuste produjo resultados no finitos. Revise valores extremos, exposición y escala de los predictores."
        );
    }

    return { beta, mu, alpha, covarianza, convergio, iteraciones, varianzas };
}

function estimarAlphaConMediaFija(y, mu) {
    const logMinimo = Math.log(1e-8);
    const logMaximo = Math.log(1e4);
    const razonAurea = (Math.sqrt(5) - 1) / 2;
    let a = logMinimo;
    let b = logMaximo;
    let c = b - razonAurea * (b - a);
    let d = a + razonAurea * (b - a);
    let fc = logLikNegativa(y, mu, Math.exp(c));
    let fd = logLikNegativa(y, mu, Math.exp(d));

    for (let i = 0; i < 100; i += 1) {
        if (fc > fd) {
            b = d;
            d = c;
            fd = fc;
            c = b - razonAurea * (b - a);
            fc = logLikNegativa(y, mu, Math.exp(c));
        } else {
            a = c;
            c = d;
            fc = fd;
            d = a + razonAurea * (b - a);
            fd = logLikNegativa(y, mu, Math.exp(d));
        }
    }

    return Math.exp((a + b) / 2);
}

function calcularVif(predictores, nombres) {
    if (predictores.length < 2) return [];

    return predictores.map((respuesta, objetivo) => {
        const restantes = predictores.filter((_, i) => i !== objetivo);
        const x = construirDiseno(restantes, true);
        const xt = transponer(x);
        const xtx = xt.map((fila) =>
            x[0].map((_, columna) =>
                fila.reduce((total, valor, i) => total + valor * x[i][columna], 0)
            )
        );

        try {
            const beta = multiplicarMatrizVector(
                invertirMatriz(xtx),
                xt.map((fila) => productoPunto(fila, respuesta))
            );
            const predichos = multiplicarMatrizVector(x, beta);
            const media = respuesta.reduce((a, b) => a + b, 0) / respuesta.length;
            const sct = respuesta.reduce((t, v) => t + (v - media) ** 2, 0);
            const sce = respuesta.reduce((t, v, i) => t + (v - predichos[i]) ** 2, 0);
            const tolerancia = Math.max(1 - (sct > EPS ? 1 - sce / sct : 1), EPS);
            return { variable: nombres[objetivo], tolerancia, vif: 1 / tolerancia };
        } catch {
            return { variable: nombres[objetivo], tolerancia: 0, vif: Infinity };
        }
    });
}

function ajustarModelo({
    y,
    predictores,
    nombres,
    incluirIntercepto,
    exposicion,
    modelo,
    nivelConfianza
}) {
    const matrizX = construirDiseno(predictores, incluirIntercepto);
    const offset = exposicion.map((valor) => Math.log(valor));
    const p = matrizX[0].length;
    const n = y.length;
    const glResiduales = n - p;

    if (glResiduales <= 0) {
        throw new Error("No hay suficientes observaciones para estimar el modelo.");
    }

    const preliminar = ajustarIrls({
        matrizX,
        y,
        offset,
        modelo: "poisson"
    });
    const dispersionPreliminar = y.reduce(
        (total, valor, i) => total + (valor - preliminar.mu[i]) ** 2 /
            Math.max(preliminar.mu[i], EPS),
        0
    ) / glResiduales;

    const ajuste = ajustarIrls({
        matrizX,
        y,
        offset,
        modelo,
        alphaInicial: Math.max(0.05, (dispersionPreliminar - 1) /
            Math.max(y.reduce((a, b) => a + b, 0) / n, 1))
    });

    if (!ajuste.convergio) {
        throw new Error(
            `El modelo ${modelo === "poisson" ? "de Poisson" : "binomial negativo"} no alcanzó convergencia. Revise valores extremos, colinealidad y tamaño muestral.`
        );
    }

    const logLik = modelo === "poisson"
        ? logLikPoisson(y, ajuste.mu)
        : logLikNegativa(y, ajuste.mu, ajuste.alpha);
    const deviance = modelo === "poisson"
        ? deviancePoisson(y, ajuste.mu)
        : devianceNegativa(y, ajuste.mu, ajuste.alpha);
    const pearson = y.reduce(
        (total, valor, i) => total + (valor - ajuste.mu[i]) ** 2 /
            Math.max(ajuste.varianzas[i], EPS),
        0
    );
    const dispersion = pearson / glResiduales;
    const numeroParametros = p + (modelo === "negativa" ? 1 : 0);
    const aic = -2 * logLik + 2 * numeroParametros;
    const bic = -2 * logLik + Math.log(n) * numeroParametros;
    const zCritico = cuantileNormal(0.5 + nivelConfianza / 2);
    const alfaSignificacion = 1 - nivelConfianza;
    const nombresCoeficientes = [
        ...(incluirIntercepto ? ["Intercepto"] : []),
        ...nombres
    ];
    const coeficientes = ajuste.beta.map((estimacion, i) => {
        const errorEstandar = Math.sqrt(Math.max(ajuste.covarianza[i][i], 0));
        const z = errorEstandar > EPS ? estimacion / errorEstandar : Infinity;
        const pValor = valorPNormal(z);
        const inferior = estimacion - zCritico * errorEstandar;
        const superior = estimacion + zCritico * errorEstandar;
        return {
            termino: nombresCoeficientes[i],
            estimacion,
            errorEstandar,
            z,
            p: pValor,
            intervaloConfianza: { inferior, superior, nivel: nivelConfianza },
            irr: Math.exp(Math.max(-LIMITE_ETA, Math.min(LIMITE_ETA, estimacion))),
            intervaloIrr: {
                inferior: Math.exp(Math.max(-LIMITE_ETA, Math.min(LIMITE_ETA, inferior))),
                superior: Math.exp(Math.max(-LIMITE_ETA, Math.min(LIMITE_ETA, superior))),
                nivel: nivelConfianza
            }
        };
    });

    const nulo = incluirIntercepto
        ? ajustarIrls({
            matrizX: Array.from({ length: n }, () => [1]),
            y,
            offset,
            modelo,
            alphaInicial: ajuste.alpha
        })
        : (() => {
            const mu = offset.map((valor) =>
                Math.exp(
                    Math.max(
                        -LIMITE_ETA,
                        Math.min(LIMITE_ETA, valor)
                    )
                )
            );
            return {
                mu,
                alpha: modelo === "negativa"
                    ? estimarAlphaConMediaFija(y, mu)
                    : 0
            };
        })();
    const logLikNulo = modelo === "poisson"
        ? logLikPoisson(y, nulo.mu)
        : logLikNegativa(y, nulo.mu, nulo.alpha);
    const chiCuadrado = Math.max(0, 2 * (logLik - logLikNulo));
    const glModelo = predictores.length;
    const pGlobal = valorPChiCuadrado(chiCuadrado, glModelo);
    const r2McFadden = logLikNulo !== 0 ? 1 - logLik / logLikNulo : null;

    const leverage = matrizX.map((fila, i) => {
        const temporal = multiplicarMatrizVector(ajuste.covarianza, fila);
        const peso = ajuste.mu[i] ** 2 / Math.max(ajuste.varianzas[i], EPS);
        return Math.max(0, Math.min(0.999999, peso * productoPunto(fila, temporal)));
    });
    const residuosPearson = y.map((valor, i) =>
        (valor - ajuste.mu[i]) / Math.sqrt(Math.max(ajuste.varianzas[i], EPS))
    );
    const residuosDeviance = y.map((valor, i) => {
        const contribucion = modelo === "poisson"
            ? 2 * (valor === 0
                ? ajuste.mu[i]
                : valor * Math.log(valor / ajuste.mu[i]) - (valor - ajuste.mu[i]))
            : 2 * ((valor === 0 ? 0 : valor * Math.log(valor / ajuste.mu[i])) -
                (valor + 1 / ajuste.alpha) * Math.log(
                    (valor + 1 / ajuste.alpha) /
                    (ajuste.mu[i] + 1 / ajuste.alpha)
                ));
        return Math.sign(valor - ajuste.mu[i]) * Math.sqrt(Math.max(contribucion, 0));
    });
    const distanciaCook = residuosPearson.map((residuo, i) =>
        residuo ** 2 * leverage[i] /
        (p * Math.max((1 - leverage[i]) ** 2, EPS))
    );
    const influyentes = y.map((observado, i) => ({
        observacion: i + 1,
        observado,
        ajustado: ajuste.mu[i],
        residuoPearson: residuosPearson[i],
        residuoDeviance: residuosDeviance[i],
        leverage: leverage[i],
        distanciaCook: distanciaCook[i]
    })).filter((fila) =>
        Math.abs(fila.residuoPearson) > 2 ||
        fila.leverage > 2 * p / n ||
        fila.distanciaCook > 4 / n
    );

    const cerosObservados = y.filter((valor) => valor === 0).length;
    const cerosEsperados = ajuste.mu.reduce((total, media) => {
        if (modelo === "poisson") return total + Math.exp(-media);
        const r = 1 / ajuste.alpha;
        return total + (r / (r + media)) ** r;
    }, 0);
    const vif = calcularVif(predictores, nombres);

    return {
        tipoModelo: modelo,
        n,
        numeroPredictores: predictores.length,
        incluirIntercepto,
        nivelConfianza,
        alfa: alfaSignificacion,
        nombresPredictores: nombres,
        convergencia: {
            convergio: ajuste.convergio,
            iteraciones: ajuste.iteraciones
        },
        dispersion: {
            pearson,
            gradosLibertad: glResiduales,
            indice: dispersion,
            alpha: modelo === "negativa" ? ajuste.alpha : 0
        },
        coeficientes,
        ajuste: {
            logVerosimilitud: logLik,
            logVerosimilitudNula: logLikNulo,
            deviance,
            aic,
            bic,
            r2McFadden
        },
        pruebaGlobal: {
            chiCuadrado,
            gradosLibertad: glModelo,
            p: pGlobal
        },
        diagnosticos: {
            residuosPearson,
            residuosDeviance,
            leverage,
            distanciaCook,
            observacionesInfluyentes: influyentes,
            vif,
            cerosObservados,
            cerosEsperados,
            razonCeros: cerosEsperados > EPS ? cerosObservados / cerosEsperados : null
        },
        valoresAjustados: ajuste.mu,
        exposicion,
        datosGrafico: y.map((observado, i) => ({
            observacion: i + 1,
            observado,
            ajustado: ajuste.mu[i],
            tasaAjustada: ajuste.mu[i] / exposicion[i],
            exposicion: exposicion[i],
            residuoPearson: residuosPearson[i],
            residuoDeviance: residuosDeviance[i],
            leverage: leverage[i],
            distanciaCook: distanciaCook[i],
            predictores: predictores.map((columna) => columna[i])
        }))
    };
}

function construirInterpretacion(resultado) {
    const seleccionado = resultado.seleccionado;
    const alfa = seleccionado.alfa ?? 0.05;
    const nombre = seleccionado.tipoModelo === "poisson"
        ? "regresión de Poisson"
        : "regresión binomial negativa";
    const mensajes = [
        `Se seleccionó ${nombre} para modelar la media del conteo mediante un enlace logarítmico.`,
        seleccionado.pruebaGlobal.p !== null && seleccionado.pruebaGlobal.p < alfa
            ? `El modelo global mejora significativamente al modelo nulo (χ² = ${seleccionado.pruebaGlobal.chiCuadrado.toFixed(4)}, gl = ${seleccionado.pruebaGlobal.gradosLibertad}, p ${seleccionado.pruebaGlobal.p < 0.001 ? "< 0.001" : `= ${seleccionado.pruebaGlobal.p.toFixed(4)}`}).`
            : `El modelo global no alcanza significación estadística con α = ${alfa.toFixed(3)}.`,
        `El índice de dispersión de Pearson es ${seleccionado.dispersion.indice.toFixed(3)}.`,
        seleccionado.diagnosticos.observacionesInfluyentes.length
            ? `Se identificaron ${seleccionado.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`
            : "No se identificaron observaciones claramente influyentes mediante los criterios automáticos.",
        seleccionado.diagnosticos.razonCeros !== null &&
            seleccionado.diagnosticos.razonCeros > 1.5
            ? "Se observan más ceros de los esperados por el modelo; conviene valorar un modelo inflado en ceros o con componente hurdle."
            : "La cantidad de ceros no muestra una discrepancia automática severa respecto al modelo seleccionado.",
        "Las razones de tasas de incidencia se interpretan manteniendo constantes los demás predictores y considerando la unidad de exposición utilizada."
    ];

    return mensajes;
}

export function ajustarRegresionConteo({
    y,
    X,
    nombresPredictores = [],
    incluirIntercepto = true,
    exposicion = null,
    modelo = "automatico",
    nivelConfianza = 0.95
}) {
    const respuesta = validarVector("La variable de conteo", y, 6);
    if (!respuesta.every((valor) => Number.isInteger(valor) && valor >= 0)) {
        throw new Error("La variable dependiente debe contener enteros no negativos.");
    }
    if (!Array.isArray(X) || !X.length) {
        throw new Error("Debe proporcionar al menos una variable predictora.");
    }

    const predictores = X.map((columna, i) =>
        validarVector(nombresPredictores[i] || `X${i + 1}`, columna, 6)
    );
    if (!predictores.every((columna) => columna.length === respuesta.length)) {
        throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");
    }
    if (!(nivelConfianza > 0 && nivelConfianza < 1)) {
        throw new Error("El nivel de confianza debe estar entre 0 y 1.");
    }

    const nombres = predictores.map((_, i) => nombresPredictores[i] || `X${i + 1}`);
    const exposiciones = exposicion === null
        ? Array(respuesta.length).fill(1)
        : validarVector("La exposición", exposicion, 6);
    if (exposiciones.length !== respuesta.length ||
        !exposiciones.every((valor) => valor > 0)) {
        throw new Error("La exposición debe ser positiva y tener una fila por observación.");
    }

    const solicitud = {
        y: respuesta,
        predictores,
        nombres,
        incluirIntercepto,
        exposicion: exposiciones,
        nivelConfianza
    };
    const poisson = ajustarModelo({ ...solicitud, modelo: "poisson" });
    let negativa = null;

    if (modelo !== "poisson" || poisson.dispersion.indice > 1.2) {
        try {
            negativa = ajustarModelo({ ...solicitud, modelo: "negativa" });
        } catch (error) {
            if (modelo === "negativa") throw error;
        }
    }

    let seleccionado = poisson;
    let criterioSeleccion = "Poisson fue solicitado explícitamente.";

    if (modelo === "negativa") {
        seleccionado = negativa;
        criterioSeleccion = "La binomial negativa fue solicitada explícitamente.";
    } else if (modelo === "automatico" && negativa) {
        const mejoraAic = poisson.ajuste.aic - negativa.ajuste.aic;
        if (poisson.dispersion.indice > 1.5 && mejoraAic > 2) {
            seleccionado = negativa;
            criterioSeleccion =
                `Se seleccionó binomial negativa por sobredispersión (φ = ${poisson.dispersion.indice.toFixed(3)}) y menor AIC (ΔAIC = ${mejoraAic.toFixed(3)}).`;
        } else {
            criterioSeleccion =
                `Se mantuvo Poisson porque la sobredispersión o la mejora de AIC no justificaron cambiar de modelo (φ = ${poisson.dispersion.indice.toFixed(3)}).`;
        }
    }

    const resultado = {
        tipoAnalisis: "regresion-conteo",
        modeloSolicitado: modelo,
        nivelConfianza,
        alfa: 1 - nivelConfianza,
        seleccionado,
        comparacion: {
            poisson: {
                aic: poisson.ajuste.aic,
                bic: poisson.ajuste.bic,
                deviance: poisson.ajuste.deviance,
                dispersion: poisson.dispersion.indice
            },
            negativa: negativa
                ? {
                    aic: negativa.ajuste.aic,
                    bic: negativa.ajuste.bic,
                    deviance: negativa.ajuste.deviance,
                    dispersion: negativa.dispersion.indice,
                    alpha: negativa.dispersion.alpha
                }
                : null,
            criterioSeleccion
        }
    };

    resultado.interpretacion = construirInterpretacion(resultado);
    return resultado;
}

export function predecirRegresionConteo(
    resultado,
    nuevosPredictores,
    exposicion = 1
) {
    const modelo = resultado?.seleccionado || resultado;
    if (!modelo?.coeficientes?.length) {
        throw new Error("El modelo proporcionado no es válido.");
    }
    if (!Array.isArray(nuevosPredictores) ||
        nuevosPredictores.length !== modelo.numeroPredictores) {
        throw new Error(`Debe proporcionar ${modelo.numeroPredictores} valores predictores.`);
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
    const exp =
        exposicion === null ||
        exposicion === undefined ||
        (
            typeof exposicion === "string" &&
            exposicion.trim() === ""
        )
            ? NaN
            : Number(exposicion);
    if (!valores.every(Number.isFinite) || !(exp > 0)) {
        throw new Error("Los predictores deben ser numéricos y la exposición debe ser positiva.");
    }

    const betas = modelo.coeficientes.map((fila) => fila.estimacion);
    const fila = [...(modelo.incluirIntercepto ? [1] : []), ...valores];
    const predictorLineal = productoPunto(fila, betas);
    const tasa = Math.exp(Math.max(-LIMITE_ETA, Math.min(LIMITE_ETA, predictorLineal)));

    return {
        predictorLineal,
        tasa,
        exposicion: exp,
        conteoEsperado: tasa * exp
    };
}
