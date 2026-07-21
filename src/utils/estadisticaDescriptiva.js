const EPS = 1e-12;

const sum = (xs) =>
    xs.reduce((total, valor) => total + valor, 0);

const sort = (xs) =>
    [...xs].sort((a, b) => a - b);

const nearZero = (valor) =>
    Math.abs(valor) < EPS ? 0 : valor;

function quantile(sorted, p) {
    if (!sorted.length) {
        throw new Error(
            "No hay datos para calcular cuantiles."
        );
    }

    if (p <= 0) return sorted[0];
    if (p >= 1) return sorted.at(-1);

    const posicion = (sorted.length - 1) * p;
    const inferior = Math.floor(posicion);
    const superior = Math.ceil(posicion);

    return inferior === superior
        ? sorted[inferior]
        : sorted[inferior] * (superior - posicion) +
            sorted[superior] * (posicion - inferior);
}

function mode(xs) {
    const conteos = new Map();

    xs.forEach((valor) => {
        conteos.set(
            valor,
            (conteos.get(valor) || 0) + 1
        );
    });

    const maxima = Math.max(...conteos.values());

    if (maxima === 1) {
        return {
            valores: [],
            frecuencia: 1,
            tipo: "sin-moda"
        };
    }

    const valores = [...conteos]
        .filter(([, frecuencia]) => frecuencia === maxima)
        .map(([valor]) => valor)
        .sort((a, b) => a - b);

    return {
        valores,
        frecuencia: maxima,
        tipo:
            valores.length === 1
                ? "unimodal"
                : "multimodal"
    };
}

function construirMomentos(n, s2, s3, s4) {
    const varianzaPoblacional = s2 / n;
    const varianzaMuestral =
        n > 1 ? s2 / (n - 1) : null;

    let asimetria = null;
    let curtosisExceso = null;

    if (n >= 3 && s2 > EPS) {
        const g1 =
            (s3 / n) /
            (s2 / n) ** 1.5;

        asimetria =
            Math.sqrt(n * (n - 1)) /
            (n - 2) *
            g1;
    }

    if (n >= 4 && s2 > EPS) {
        const g2 =
            (s4 / n) /
            (s2 / n) ** 2 -
            3;

        curtosisExceso =
            (n - 1) /
            ((n - 2) * (n - 3)) *
            ((n + 1) * g2 + 6);
    }

    return {
        sumaCuadrados: nearZero(s2),
        varianzaPoblacional:
            nearZero(varianzaPoblacional),
        varianzaMuestral:
            varianzaMuestral === null
                ? null
                : nearZero(varianzaMuestral),
        desviacionPoblacional:
            nearZero(
                Math.sqrt(varianzaPoblacional)
            ),
        desviacionMuestral:
            varianzaMuestral === null
                ? null
                : nearZero(
                    Math.sqrt(varianzaMuestral)
                ),
        asimetria:
            asimetria === null
                ? null
                : nearZero(asimetria),
        curtosisExceso:
            curtosisExceso === null
                ? null
                : nearZero(curtosisExceso)
    };
}

function moments(xs, media) {
    let s2 = 0;
    let s3 = 0;
    let s4 = 0;

    xs.forEach((valor) => {
        const diferencia = valor - media;
        s2 += diferencia ** 2;
        s3 += diferencia ** 3;
        s4 += diferencia ** 4;
    });

    return construirMomentos(
        xs.length,
        s2,
        s3,
        s4
    );
}

function weightedMoments(filas, media, n) {
    let s2 = 0;
    let s3 = 0;
    let s4 = 0;

    filas.forEach(({ valor, frecuencia }) => {
        const diferencia = valor - media;
        s2 += frecuencia * diferencia ** 2;
        s3 += frecuencia * diferencia ** 3;
        s4 += frecuencia * diferencia ** 4;
    });

    return construirMomentos(n, s2, s3, s4);
}

function validateValues(values) {
    if (!Array.isArray(values)) {
        throw new Error(
            "Los datos deben proporcionarse en una lista."
        );
    }

    const xs = values.map(Number);

    if (xs.length < 2) {
        throw new Error(
            "Introduzca al menos dos observaciones numéricas."
        );
    }

    if (!xs.every(Number.isFinite)) {
        throw new Error(
            "Todos los datos deben ser números válidos."
        );
    }

    return xs;
}

function frequencyTable(xs) {
    const conteos = new Map();

    sort(xs).forEach((valor) => {
        conteos.set(
            valor,
            (conteos.get(valor) || 0) + 1
        );
    });

    let acumulada = 0;

    return [...conteos].map(
        ([valor, frecuencia]) => {
            acumulada += frecuencia;

            return {
                valor,
                frecuencia,
                frecuenciaRelativa:
                    frecuencia / xs.length,
                frecuenciaAcumulada: acumulada,
                frecuenciaRelativaAcumulada:
                    acumulada / xs.length
            };
        }
    );
}

function rawSummary(values) {
    const xs = sort(values);
    const n = xs.length;
    const media = sum(xs) / n;
    const mediana = quantile(xs, 0.5);
    const q1 = quantile(xs, 0.25);
    const q3 = quantile(xs, 0.75);
    const iqr = q3 - q1;
    const limiteInferior = q1 - 1.5 * iqr;
    const limiteSuperior = q3 + 1.5 * iqr;
    const valoresNoAtipicos = xs.filter(
        (valor) =>
            valor >= limiteInferior &&
            valor <= limiteSuperior
    );
    const atipicos = xs.filter(
        (valor) =>
            valor < limiteInferior ||
            valor > limiteSuperior
    );
    const momentos = moments(xs, media);
    const desviaciones = sort(
        xs.map((valor) =>
            Math.abs(valor - mediana)
        )
    );

    return {
        n,
        suma: sum(xs),
        minimo: xs[0],
        maximo: xs.at(-1),
        rango: xs.at(-1) - xs[0],
        media,
        mediana,
        moda: mode(xs),
        q1,
        q3,
        iqr,
        percentiles: {
            p10: quantile(xs, 0.1),
            p25: q1,
            p50: mediana,
            p75: q3,
            p90: quantile(xs, 0.9)
        },
        desviacionMedia:
            xs.reduce(
                (total, valor) =>
                    total + Math.abs(valor - media),
                0
            ) / n,
        mad: quantile(desviaciones, 0.5),
        coeficienteVariacion:
            momentos.desviacionMuestral !== null &&
            Math.abs(media) > EPS
                ? Math.abs(
                    momentos.desviacionMuestral /
                    media
                ) * 100
                : null,
        limitesAtipicos: {
            inferior: limiteInferior,
            superior: limiteSuperior
        },
        bigotesCaja: {
            inferior: valoresNoAtipicos[0],
            superior: valoresNoAtipicos.at(-1)
        },
        atipicos,
        atipicosCantidad: atipicos.length,
        ...momentos
    };
}

function validateFrequencyRows(values, frequencies) {
    if (
        !Array.isArray(values) ||
        !Array.isArray(frequencies) ||
        values.length !== frequencies.length ||
        !values.length
    ) {
        throw new Error(
            "Los valores y las frecuencias deben tener la misma cantidad de filas."
        );
    }

    const acumulados = new Map();

    values.forEach((value, indice) => {
        const valor = Number(value);
        const frecuencia = Number(frequencies[indice]);

        if (!Number.isFinite(valor)) {
            throw new Error(
                `El valor de la fila ${indice + 1} no es válido.`
            );
        }

        if (
            !Number.isInteger(frecuencia) ||
            frecuencia < 0
        ) {
            throw new Error(
                `La frecuencia de la fila ${indice + 1} debe ser un entero no negativo.`
            );
        }

        acumulados.set(
            valor,
            (acumulados.get(valor) || 0) +
                frecuencia
        );
    });

    const filas = [...acumulados]
        .map(([valor, frecuencia]) => ({
            valor,
            frecuencia
        }))
        .filter(({ frecuencia }) => frecuencia > 0)
        .sort((a, b) => a.valor - b.valor);

    const n = sum(
        filas.map(({ frecuencia }) => frecuencia)
    );

    if (n < 2) {
        throw new Error(
            "La suma de las frecuencias debe ser al menos 2."
        );
    }

    return { filas, n };
}

function valueAtWeightedIndex(filas, indice) {
    let acumulada = 0;

    for (const fila of filas) {
        acumulada += fila.frecuencia;

        if (indice < acumulada) {
            return fila.valor;
        }
    }

    return filas.at(-1).valor;
}

function weightedQuantile(filas, n, p) {
    if (p <= 0) return filas[0].valor;
    if (p >= 1) return filas.at(-1).valor;

    const posicion = (n - 1) * p;
    const inferior = Math.floor(posicion);
    const superior = Math.ceil(posicion);
    const valorInferior = valueAtWeightedIndex(
        filas,
        inferior
    );
    const valorSuperior = valueAtWeightedIndex(
        filas,
        superior
    );

    return inferior === superior
        ? valorInferior
        : valorInferior * (superior - posicion) +
            valorSuperior * (posicion - inferior);
}

function weightedMode(filas) {
    const maxima = Math.max(
        ...filas.map(({ frecuencia }) => frecuencia)
    );

    if (maxima === 1) {
        return {
            valores: [],
            frecuencia: 1,
            tipo: "sin-moda"
        };
    }

    const valores = filas
        .filter(
            ({ frecuencia }) => frecuencia === maxima
        )
        .map(({ valor }) => valor);

    return {
        valores,
        frecuencia: maxima,
        tipo:
            valores.length === 1
                ? "unimodal"
                : "multimodal"
    };
}

function weightedFrequencyTable(filas, n) {
    let acumulada = 0;

    return filas.map(({ valor, frecuencia }) => {
        acumulada += frecuencia;

        return {
            valor,
            frecuencia,
            frecuenciaRelativa: frecuencia / n,
            frecuenciaAcumulada: acumulada,
            frecuenciaRelativaAcumulada:
                acumulada / n
        };
    });
}

function weightedSummary(filas, n) {
    const total = sum(
        filas.map(
            ({ valor, frecuencia }) =>
                valor * frecuencia
        )
    );
    const media = total / n;
    const mediana = weightedQuantile(
        filas,
        n,
        0.5
    );
    const q1 = weightedQuantile(filas, n, 0.25);
    const q3 = weightedQuantile(filas, n, 0.75);
    const iqr = q3 - q1;
    const limiteInferior = q1 - 1.5 * iqr;
    const limiteSuperior = q3 + 1.5 * iqr;
    const filasNoAtipicas = filas.filter(
        ({ valor }) =>
            valor >= limiteInferior &&
            valor <= limiteSuperior
    );
    const filasAtipicas = filas.filter(
        ({ valor }) =>
            valor < limiteInferior ||
            valor > limiteSuperior
    );
    const momentos = weightedMoments(
        filas,
        media,
        n
    );
    const desviacionesAgrupadas = new Map();

    filas.forEach(({ valor, frecuencia }) => {
        const desviacion = Math.abs(valor - mediana);
        desviacionesAgrupadas.set(
            desviacion,
            (desviacionesAgrupadas.get(desviacion) || 0) +
                frecuencia
        );
    });

    const filasDesviaciones = [...desviacionesAgrupadas]
        .map(([valor, frecuencia]) => ({
            valor,
            frecuencia
        }))
        .sort((a, b) => a.valor - b.valor);

    const atipicosCantidad = sum(
        filasAtipicas.map(
            ({ frecuencia }) => frecuencia
        )
    );

    return {
        n,
        suma: total,
        minimo: filas[0].valor,
        maximo: filas.at(-1).valor,
        rango:
            filas.at(-1).valor -
            filas[0].valor,
        media,
        mediana,
        moda: weightedMode(filas),
        q1,
        q3,
        iqr,
        percentiles: {
            p10: weightedQuantile(filas, n, 0.1),
            p25: q1,
            p50: mediana,
            p75: q3,
            p90: weightedQuantile(filas, n, 0.9)
        },
        desviacionMedia:
            sum(
                filas.map(
                    ({ valor, frecuencia }) =>
                        Math.abs(valor - media) *
                        frecuencia
                )
            ) / n,
        mad: weightedQuantile(
            filasDesviaciones,
            n,
            0.5
        ),
        coeficienteVariacion:
            momentos.desviacionMuestral !== null &&
            Math.abs(media) > EPS
                ? Math.abs(
                    momentos.desviacionMuestral /
                    media
                ) * 100
                : null,
        limitesAtipicos: {
            inferior: limiteInferior,
            superior: limiteSuperior
        },
        bigotesCaja: {
            inferior: filasNoAtipicas[0].valor,
            superior: filasNoAtipicas.at(-1).valor
        },
        atipicos: filasAtipicas.map(
            ({ valor }) => valor
        ),
        atipicosCantidad,
        atipicosFrecuencias: filasAtipicas,
        ...momentos
    };
}

function validateClasses(classes) {
    if (
        !Array.isArray(classes) ||
        classes.length < 2
    ) {
        throw new Error(
            "Introduzca al menos dos intervalos de clase."
        );
    }

    const normalizadas = classes
        .map((clase, indice) => {
            const limiteInferior = Number(
                clase.limiteInferior
            );
            const limiteSuperior = Number(
                clase.limiteSuperior
            );
            const frecuencia = Number(
                clase.frecuencia
            );

            if (
                !Number.isFinite(limiteInferior) ||
                !Number.isFinite(limiteSuperior) ||
                limiteSuperior <= limiteInferior
            ) {
                throw new Error(
                    `Los límites de la clase ${indice + 1} no son válidos.`
                );
            }

            if (
                !Number.isInteger(frecuencia) ||
                frecuencia < 0
            ) {
                throw new Error(
                    `La frecuencia de la clase ${indice + 1} debe ser un entero no negativo.`
                );
            }

            return {
                limiteInferior,
                limiteSuperior,
                frecuencia,
                marcaClase:
                    (limiteInferior + limiteSuperior) /
                    2,
                amplitud:
                    limiteSuperior - limiteInferior
            };
        })
        .sort(
            (a, b) =>
                a.limiteInferior -
                b.limiteInferior
        );

    for (
        let indice = 1;
        indice < normalizadas.length;
        indice += 1
    ) {
        if (
            normalizadas[indice].limiteInferior <
            normalizadas[indice - 1].limiteSuperior -
                EPS
        ) {
            throw new Error(
                "Los intervalos de clase no deben superponerse."
            );
        }
    }

    if (
        sum(
            normalizadas.map(
                ({ frecuencia }) => frecuencia
            )
        ) < 2
    ) {
        throw new Error(
            "La suma de las frecuencias debe ser al menos 2."
        );
    }

    return normalizadas;
}

function groupedQuantile(classes, p, n) {
    const objetivo = p * n;
    let anterior = 0;

    for (const clase of classes) {
        const acumulada =
            anterior + clase.frecuencia;

        if (
            objetivo <= acumulada ||
            clase === classes.at(-1)
        ) {
            return clase.frecuencia === 0
                ? clase.marcaClase
                : clase.limiteInferior +
                    (objetivo - anterior) /
                    clase.frecuencia *
                    clase.amplitud;
        }

        anterior = acumulada;
    }

    return classes.at(-1).limiteSuperior;
}

function groupedMode(classes) {
    const maxima = Math.max(
        ...classes.map(
            ({ frecuencia }) => frecuencia
        )
    );
    const indice = classes.findIndex(
        ({ frecuencia }) => frecuencia === maxima
    );
    const clase = classes[indice];

    if (maxima === 0) return null;

    const anterior = indice
        ? classes[indice - 1].frecuencia
        : 0;
    const siguiente =
        indice < classes.length - 1
            ? classes[indice + 1].frecuencia
            : 0;
    const d1 = maxima - anterior;
    const d2 = maxima - siguiente;

    return {
        valor:
            d1 + d2 > 0
                ? clase.limiteInferior +
                    d1 / (d1 + d2) *
                    clase.amplitud
                : clase.marcaClase,
        intervalo: {
            inferior: clase.limiteInferior,
            superior: clase.limiteSuperior
        },
        frecuencia: maxima
    };
}

function groupedSummary(classes) {
    const n = sum(
        classes.map(
            ({ frecuencia }) => frecuencia
        )
    );
    const total = sum(
        classes.map(
            ({ marcaClase, frecuencia }) =>
                marcaClase * frecuencia
        )
    );
    const media = total / n;
    const momentos = weightedMoments(
        classes.map(
            ({ marcaClase, frecuencia }) => ({
                valor: marcaClase,
                frecuencia
            })
        ),
        media,
        n
    );
    const q1 = groupedQuantile(
        classes,
        0.25,
        n
    );
    const mediana = groupedQuantile(
        classes,
        0.5,
        n
    );
    const q3 = groupedQuantile(
        classes,
        0.75,
        n
    );
    const iqr = q3 - q1;

    return {
        n,
        suma: total,
        minimo: classes[0].limiteInferior,
        maximo: classes.at(-1).limiteSuperior,
        rango:
            classes.at(-1).limiteSuperior -
            classes[0].limiteInferior,
        media,
        mediana,
        moda: groupedMode(classes),
        q1,
        q3,
        iqr,
        percentiles: {
            p10: groupedQuantile(classes, 0.1, n),
            p25: q1,
            p50: mediana,
            p75: q3,
            p90: groupedQuantile(classes, 0.9, n)
        },
        desviacionMedia:
            sum(
                classes.map(
                    ({ marcaClase, frecuencia }) =>
                        Math.abs(marcaClase - media) *
                        frecuencia
                )
            ) / n,
        mad: null,
        coeficienteVariacion:
            momentos.desviacionMuestral !== null &&
            Math.abs(media) > EPS
                ? Math.abs(
                    momentos.desviacionMuestral /
                    media
                ) * 100
                : null,
        limitesAtipicos: {
            inferior: q1 - 1.5 * iqr,
            superior: q3 + 1.5 * iqr
        },
        bigotesCaja: {
            inferior: classes[0].limiteInferior,
            superior: classes.at(-1).limiteSuperior
        },
        atipicos: [],
        atipicosCantidad: 0,
        advertenciaAtipicos:
            "Con datos agrupados no es posible identificar observaciones atípicas individuales; los límites son aproximados.",
        ...momentos
    };
}

function classTable(classes) {
    const n = sum(
        classes.map(
            ({ frecuencia }) => frecuencia
        )
    );
    let acumulada = 0;

    return classes.map((clase) => {
        acumulada += clase.frecuencia;

        return {
            intervalo: {
                inferior: clase.limiteInferior,
                superior: clase.limiteSuperior
            },
            marcaClase: clase.marcaClase,
            amplitud: clase.amplitud,
            frecuencia: clase.frecuencia,
            frecuenciaRelativa:
                clase.frecuencia / n,
            frecuenciaAcumulada: acumulada,
            frecuenciaRelativaAcumulada:
                acumulada / n
        };
    });
}

function interpretation(summary, grouped) {
    const asimetria =
        summary.asimetria === null
            ? "Asimetría no disponible"
            : Math.abs(summary.asimetria) < 0.5
                ? "Distribución aproximadamente simétrica"
                : summary.asimetria > 0
                    ? "Distribución con asimetría positiva"
                    : "Distribución con asimetría negativa";

    const curtosis =
        summary.curtosisExceso === null
            ? "Curtosis no disponible"
            : Math.abs(summary.curtosisExceso) < 0.5
                ? "Curtosis próxima a mesocúrtica"
                : summary.curtosisExceso > 0
                    ? "Distribución leptocúrtica"
                    : "Distribución platicúrtica";

    const cantidadAtipicos =
        summary.atipicosCantidad ??
        summary.atipicos.length;

    return [
        `La media es ${summary.media.toFixed(3)} y la mediana es ${summary.mediana.toFixed(3)}.`,
        `La desviación estándar muestral es ${summary.desviacionMuestral?.toFixed(3) ?? "no disponible"}.`,
        summary.coeficienteVariacion === null
            ? "El coeficiente de variación no es interpretable cuando la media es cero."
            : `El coeficiente de variación es ${summary.coeficienteVariacion.toFixed(2)} %.`,
        `${asimetria}.`,
        `${curtosis}.`,
        grouped
            ? summary.advertenciaAtipicos
            : cantidadAtipicos
                ? `Se detectaron ${cantidadAtipicos} valores atípicos potenciales mediante el criterio de Tukey.`
                : "No se detectaron valores atípicos potenciales mediante el criterio de Tukey."
    ];
}

export function analizarDatosIndividuales(values) {
    const xs = validateValues(values);
    const resumen = rawSummary(xs);
    const tablaFrecuencias = frequencyTable(xs);

    return {
        tipoDatos: "individuales",
        aproximado: false,
        resumen,
        tablaFrecuencias,
        datosGrafico: {
            valores: sort(xs),
            frecuencias: tablaFrecuencias
        },
        interpretacion:
            interpretation(resumen, false)
    };
}

export function analizarDatosConFrecuencias({
    valores,
    frecuencias
}) {
    const { filas, n } = validateFrequencyRows(
        valores,
        frecuencias
    );
    const resumen = weightedSummary(filas, n);
    const tablaFrecuencias =
        weightedFrequencyTable(filas, n);

    return {
        tipoDatos: "frecuencias",
        aproximado: false,
        resumen,
        tablaFrecuencias,
        datosGrafico: {
            frecuencias: tablaFrecuencias
        },
        datosOriginales: {
            valores: filas.map(({ valor }) => valor),
            frecuencias: filas.map(
                ({ frecuencia }) => frecuencia
            )
        },
        interpretacion:
            interpretation(resumen, false)
    };
}

export function analizarDatosAgrupados(classes) {
    const normalizadas = validateClasses(classes);
    const resumen = groupedSummary(normalizadas);
    const tablaFrecuencias = classTable(normalizadas);

    return {
        tipoDatos: "intervalos",
        aproximado: true,
        resumen,
        tablaFrecuencias,
        datosGrafico: {
            clases: tablaFrecuencias
        },
        interpretacion:
            interpretation(resumen, true),
        advertencias: [
            "Las medidas se estiman mediante marcas de clase e interpolación dentro de los intervalos."
        ]
    };
}

export function analizarEstadisticaDescriptiva({
    tipoDatos = "individuales",
    valores = [],
    frecuencias = [],
    clases = []
}) {
    if (tipoDatos === "individuales") {
        return analizarDatosIndividuales(valores);
    }

    if (tipoDatos === "frecuencias") {
        return analizarDatosConFrecuencias({
            valores,
            frecuencias
        });
    }

    if (tipoDatos === "intervalos") {
        return analizarDatosAgrupados(clases);
    }

    throw new Error(
        "El tipo de datos seleccionado no está disponible."
    );
}
