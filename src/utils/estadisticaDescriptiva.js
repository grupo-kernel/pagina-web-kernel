const EPS = 1e-12;
const sum = (xs) => xs.reduce((a, x) => a + x, 0);
const sort = (xs) => [...xs].sort((a, b) => a - b);
const nearZero = (x) => Math.abs(x) < EPS ? 0 : x;

function quantile(sorted, p) {
    if (!sorted.length) throw new Error("No hay datos para calcular cuantiles.");
    if (p <= 0) return sorted[0];
    if (p >= 1) return sorted.at(-1);
    const pos = (sorted.length - 1) * p;
    const lo = Math.floor(pos);
    const hi = Math.ceil(pos);
    return lo === hi ? sorted[lo] : sorted[lo] * (hi - pos) + sorted[hi] * (pos - lo);
}

function mode(xs) {
    const counts = new Map();
    xs.forEach((x) => counts.set(x, (counts.get(x) || 0) + 1));
    const max = Math.max(...counts.values());
    if (max === 1) return { valores: [], frecuencia: 1, tipo: "sin-moda" };
    const values = [...counts].filter(([, f]) => f === max).map(([x]) => x).sort((a, b) => a - b);
    return { valores: values, frecuencia: max, tipo: values.length === 1 ? "unimodal" : "multimodal" };
}

function moments(xs, mean) {
    const n = xs.length;
    let s2 = 0, s3 = 0, s4 = 0;
    xs.forEach((x) => {
        const d = x - mean;
        s2 += d ** 2;
        s3 += d ** 3;
        s4 += d ** 4;
    });
    const vp = s2 / n;
    const vm = n > 1 ? s2 / (n - 1) : null;
    let skew = null, kurt = null;
    if (n >= 3 && s2 > EPS) {
        const g1 = (s3 / n) / (s2 / n) ** 1.5;
        skew = Math.sqrt(n * (n - 1)) / (n - 2) * g1;
    }
    if (n >= 4 && s2 > EPS) {
        const g2 = (s4 / n) / (s2 / n) ** 2 - 3;
        kurt = (n - 1) / ((n - 2) * (n - 3)) * ((n + 1) * g2 + 6);
    }
    return {
        sumaCuadrados: s2,
        varianzaPoblacional: nearZero(vp),
        varianzaMuestral: vm === null ? null : nearZero(vm),
        desviacionPoblacional: nearZero(Math.sqrt(vp)),
        desviacionMuestral: vm === null ? null : nearZero(Math.sqrt(vm)),
        asimetria: skew === null ? null : nearZero(skew),
        curtosisExceso: kurt === null ? null : nearZero(kurt)
    };
}

function validateValues(values) {
    if (!Array.isArray(values)) throw new Error("Los datos deben proporcionarse en una lista.");
    const xs = values.map(Number);
    if (xs.length < 2) throw new Error("Introduzca al menos dos observaciones numéricas.");
    if (!xs.every(Number.isFinite)) throw new Error("Todos los datos deben ser números válidos.");
    return xs;
}

function frequencyTable(xs) {
    const counts = new Map();
    sort(xs).forEach((x) => counts.set(x, (counts.get(x) || 0) + 1));
    let cumulative = 0;
    return [...counts].map(([valor, frecuencia]) => {
        cumulative += frecuencia;
        return {
            valor,
            frecuencia,
            frecuenciaRelativa: frecuencia / xs.length,
            frecuenciaAcumulada: cumulative,
            frecuenciaRelativaAcumulada: cumulative / xs.length
        };
    });
}

function rawSummary(values) {
    const xs = sort(values);
    const n = xs.length;
    const mean = sum(xs) / n;
    const median = quantile(xs, 0.5);
    const q1 = quantile(xs, 0.25);
    const q3 = quantile(xs, 0.75);
    const iqr = q3 - q1;
    const lower = q1 - 1.5 * iqr;
    const upper = q3 + 1.5 * iqr;

    const valoresNoAtipicos = xs.filter(
    (x) => x >= lower && x <= upper
    );

const mom = moments(xs, mean);
    const deviations = sort(xs.map((x) => Math.abs(x - median)));
    return {
        n,
        suma: sum(xs),
        minimo: xs[0],
        maximo: xs.at(-1),
        rango: xs.at(-1) - xs[0],
        media: mean,
        mediana: median,
        moda: mode(xs),
        q1,
        q3,
        iqr,
        percentiles: { p10: quantile(xs, 0.1), p25: q1, p50: median, p75: q3, p90: quantile(xs, 0.9) },
        desviacionMedia: xs.reduce((a, x) => a + Math.abs(x - mean), 0) / n,
        mad: quantile(deviations, 0.5),
        coeficienteVariacion: mom.desviacionMuestral !== null && Math.abs(mean) > EPS
            ? Math.abs(mom.desviacionMuestral / mean) * 100 : null,
        limitesAtipicos: {
    inferior: lower,
    superior: upper
},

bigotesCaja: {
    inferior: valoresNoAtipicos[0],
    superior: valoresNoAtipicos.at(-1)
},

atipicos: xs.filter(
    (x) => x < lower || x > upper
),
        ...mom
    };
}

function expand(values, frequencies) {
    if (!Array.isArray(values) || !Array.isArray(frequencies) || values.length !== frequencies.length || !values.length) {
        throw new Error("Los valores y las frecuencias deben tener la misma cantidad de filas.");
    }
    const out = [];
    values.forEach((value, i) => {
        const x = Number(value), f = Number(frequencies[i]);
        if (!Number.isFinite(x)) throw new Error(`El valor de la fila ${i + 1} no es válido.`);
        if (!Number.isInteger(f) || f < 0) throw new Error(`La frecuencia de la fila ${i + 1} debe ser un entero no negativo.`);
        for (let j = 0; j < f; j += 1) out.push(x);
    });
    if (out.length < 2) throw new Error("La suma de las frecuencias debe ser al menos 2.");
    return out;
}

function validateClasses(classes) {
    if (!Array.isArray(classes) || classes.length < 2) throw new Error("Introduzca al menos dos intervalos de clase.");
    const normalized = classes.map((c, i) => {
        const low = Number(c.limiteInferior), high = Number(c.limiteSuperior), f = Number(c.frecuencia);
        if (!Number.isFinite(low) || !Number.isFinite(high) || high <= low) throw new Error(`Los límites de la clase ${i + 1} no son válidos.`);
        if (!Number.isInteger(f) || f < 0) throw new Error(`La frecuencia de la clase ${i + 1} debe ser un entero no negativo.`);
        return { limiteInferior: low, limiteSuperior: high, frecuencia: f, marcaClase: (low + high) / 2, amplitud: high - low };
    }).sort((a, b) => a.limiteInferior - b.limiteInferior);
    for (let i = 1; i < normalized.length; i += 1) {
        if (normalized[i].limiteInferior < normalized[i - 1].limiteSuperior - EPS) throw new Error("Los intervalos de clase no deben superponerse.");
    }
    if (sum(normalized.map((c) => c.frecuencia)) < 2) throw new Error("La suma de las frecuencias debe ser al menos 2.");
    return normalized;
}

function groupedQuantile(classes, p, n) {
    const target = p * n;
    let previous = 0;
    for (const c of classes) {
        const cumulative = previous + c.frecuencia;
        if (target <= cumulative || c === classes.at(-1)) {
            return c.frecuencia === 0 ? c.marcaClase
                : c.limiteInferior + (target - previous) / c.frecuencia * c.amplitud;
        }
        previous = cumulative;
    }
    return classes.at(-1).limiteSuperior;
}

function groupedMode(classes) {
    const max = Math.max(...classes.map((c) => c.frecuencia));
    const i = classes.findIndex((c) => c.frecuencia === max);
    const c = classes[i];
    if (max === 0) return null;
    const prev = i ? classes[i - 1].frecuencia : 0;
    const next = i < classes.length - 1 ? classes[i + 1].frecuencia : 0;
    const d1 = max - prev, d2 = max - next;
    return {
        valor: d1 + d2 > 0 ? c.limiteInferior + d1 / (d1 + d2) * c.amplitud : c.marcaClase,
        intervalo: { inferior: c.limiteInferior, superior: c.limiteSuperior },
        frecuencia: max
    };
}

function groupedSummary(classes) {
    const n = sum(classes.map((c) => c.frecuencia));
    const total = sum(classes.map((c) => c.marcaClase * c.frecuencia));
    const mean = total / n;
    const pseudo = [];
    classes.forEach((c) => { for (let i = 0; i < c.frecuencia; i += 1) pseudo.push(c.marcaClase); });
    const mom = moments(pseudo, mean);
    const q1 = groupedQuantile(classes, 0.25, n);
    const median = groupedQuantile(classes, 0.5, n);
    const q3 = groupedQuantile(classes, 0.75, n);
    const iqr = q3 - q1;
    return {
        n,
        suma: total,
        minimo: classes[0].limiteInferior,
        maximo: classes.at(-1).limiteSuperior,
        rango: classes.at(-1).limiteSuperior - classes[0].limiteInferior,
        media: mean,
        mediana: median,
        moda: groupedMode(classes),
        q1,
        q3,
        iqr,
        percentiles: { p10: groupedQuantile(classes, 0.1, n), p25: q1, p50: median, p75: q3, p90: groupedQuantile(classes, 0.9, n) },
        desviacionMedia: sum(classes.map((c) => Math.abs(c.marcaClase - mean) * c.frecuencia)) / n,
        mad: null,
        coeficienteVariacion: mom.desviacionMuestral !== null && Math.abs(mean) > EPS
            ? Math.abs(mom.desviacionMuestral / mean) * 100 : null,
        limitesAtipicos: {
    inferior: q1 - 1.5 * iqr,
    superior: q3 + 1.5 * iqr
},

bigotesCaja: {
    inferior: classes[0].limiteInferior,
    superior:
        classes.at(-1).limiteSuperior
},

atipicos: [],
        advertenciaAtipicos: "Con datos agrupados no es posible identificar observaciones atípicas individuales; los límites son aproximados.",
        ...mom
    };
}

function classTable(classes) {
    const n = sum(classes.map((c) => c.frecuencia));
    let cumulative = 0;
    return classes.map((c) => {
        cumulative += c.frecuencia;
        return {
            intervalo: { inferior: c.limiteInferior, superior: c.limiteSuperior },
            marcaClase: c.marcaClase,
            amplitud: c.amplitud,
            frecuencia: c.frecuencia,
            frecuenciaRelativa: c.frecuencia / n,
            frecuenciaAcumulada: cumulative,
            frecuenciaRelativaAcumulada: cumulative / n
        };
    });
}

function interpretation(summary, grouped) {
    const skew = summary.asimetria === null ? "Asimetría no disponible"
        : Math.abs(summary.asimetria) < 0.5 ? "Distribución aproximadamente simétrica"
        : summary.asimetria > 0 ? "Distribución con asimetría positiva" : "Distribución con asimetría negativa";
    const kurt = summary.curtosisExceso === null ? "Curtosis no disponible"
        : Math.abs(summary.curtosisExceso) < 0.5 ? "Curtosis próxima a mesocúrtica"
        : summary.curtosisExceso > 0 ? "Distribución leptocúrtica" : "Distribución platicúrtica";
    return [
        `La media es ${summary.media.toFixed(3)} y la mediana es ${summary.mediana.toFixed(3)}.`,
        `La desviación estándar muestral es ${summary.desviacionMuestral?.toFixed(3) ?? "no disponible"}.`,
        summary.coeficienteVariacion === null ? "El coeficiente de variación no es interpretable cuando la media es cero."
            : `El coeficiente de variación es ${summary.coeficienteVariacion.toFixed(2)} %.`,
        `${skew}.`,
        `${kurt}.`,
        grouped ? summary.advertenciaAtipicos
            : summary.atipicos.length ? `Se detectaron ${summary.atipicos.length} valores atípicos potenciales mediante el criterio de Tukey.`
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
        datosGrafico: { valores: sort(xs), frecuencias: tablaFrecuencias },
        interpretacion: interpretation(resumen, false)
    };
}

export function analizarDatosConFrecuencias({ valores, frecuencias }) {
    const result = analizarDatosIndividuales(expand(valores, frecuencias));
    return { ...result, tipoDatos: "frecuencias", datosOriginales: { valores: valores.map(Number), frecuencias: frecuencias.map(Number) } };
}

export function analizarDatosAgrupados(classes) {
    const normalized = validateClasses(classes);
    const resumen = groupedSummary(normalized);
    const tablaFrecuencias = classTable(normalized);
    return {
        tipoDatos: "intervalos",
        aproximado: true,
        resumen,
        tablaFrecuencias,
        datosGrafico: { clases: tablaFrecuencias },
        interpretacion: interpretation(resumen, true),
        advertencias: ["Las medidas se estiman mediante marcas de clase e interpolación dentro de los intervalos."]
    };
}

export function analizarEstadisticaDescriptiva({ tipoDatos = "individuales", valores = [], frecuencias = [], clases = [] }) {
    if (tipoDatos === "individuales") return analizarDatosIndividuales(valores);
    if (tipoDatos === "frecuencias") return analizarDatosConFrecuencias({ valores, frecuencias });
    if (tipoDatos === "intervalos") return analizarDatosAgrupados(clases);
    throw new Error("El tipo de datos seleccionado no está disponible.");
}
