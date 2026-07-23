const EPS = 1e-12;

function clamp(x, a = 0, b = 1) {
    return Math.max(a, Math.min(b, x));
}

function positivo(nombre, valor, cero = false) {
    const x = Number(valor);
    if (!Number.isFinite(x) || (cero ? x < 0 : x <= 0)) {
        throw new Error(`${nombre} debe ser ${cero ? "no negativo" : "positivo"}.`);
    }
    return x;
}

function probabilidad(nombre, valor, extremos = false) {
    const x = Number(valor);
    const valido = extremos ? x >= 0 && x <= 1 : x > 0 && x < 1;
    if (!Number.isFinite(x) || !valido) {
        throw new Error(`${nombre} debe estar entre 0 y 1.`);
    }
    return x;
}

export function cuantileNormal(p) {
    const x = probabilidad("La probabilidad", p);
    const a = [-39.6968302866538, 220.946098424521, -275.928510446969, 138.357751867269, -30.6647980661472, 2.50662827745924];
    const b = [-54.4760987982241, 161.585836858041, -155.698979859887, 66.8013118877197, -13.2806815528857];
    const c = [-0.00778489400243029, -0.322396458041136, -2.40075827716184, -2.54973253934373, 4.37466414146497, 2.93816398269878];
    const d = [0.00778469570904146, 0.32246712907004, 2.445134137143, 3.75440866190742];
    const limite = 0.02425;

    if (x < limite) {
        const q = Math.sqrt(-2 * Math.log(x));
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }
    if (x > 1 - limite) {
        const q = Math.sqrt(-2 * Math.log(1 - x));
        return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    const q = x - 0.5;
    const r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

function normalCdf(z) {
    const s = z < 0 ? -1 : 1;
    const x = Math.abs(z) / Math.sqrt(2);
    const t = 1 / (1 + 0.3275911 * x);
    const erf = 1 - (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x));
    return 0.5 * (1 + s * erf);
}

function logGamma(z) {
    const coeficientes = [
        676.5203681218851,
        -1259.1392167224028,
        771.3234287776531,
        -176.6150291621406,
        12.507343278161,
        -0.13857109526572,
        9.98436957801957e-6,
        1.50563273514931e-7
    ];

    if (z < 0.5) {
        return Math.log(Math.PI) -
            Math.log(Math.sin(Math.PI * z)) -
            logGamma(1 - z);
    }

    const zm1 = z - 1;
    let suma = 0.9999999999998099;
    coeficientes.forEach((coeficiente, indice) => {
        suma += coeficiente / (zm1 + indice + 1);
    });
    const t = zm1 + coeficientes.length - 0.5;

    return 0.5 * Math.log(2 * Math.PI) +
        (zm1 + 0.5) * Math.log(t) -
        t +
        Math.log(suma);
}

function gammaRegularizadaP(a, x) {
    if (!(a > 0) || x < 0 || !Number.isFinite(x)) {
        if (x === Infinity && a > 0) return 1;
        throw new Error("No fue posible evaluar la distribución gamma.");
    }
    if (x === 0) return 0;

    const maxIteraciones = 500;
    const tolerancia = 1e-14;

    if (x < a + 1) {
        let termino = 1 / a;
        let suma = termino;
        let ap = a;

        for (let i = 1; i <= maxIteraciones; i += 1) {
            ap += 1;
            termino *= x / ap;
            suma += termino;
            if (Math.abs(termino) <= Math.abs(suma) * tolerancia) break;
        }

        return clamp(
            suma * Math.exp(-x + a * Math.log(x) - logGamma(a))
        );
    }

    let b = x + 1 - a;
    let c = 1 / 1e-300;
    let d = 1 / Math.max(Math.abs(b), 1e-300) * Math.sign(b || 1);
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
        if (Math.abs(delta - 1) <= tolerancia) break;
    }

    const q = Math.exp(-x + a * Math.log(x) - logGamma(a)) * h;
    return clamp(1 - q);
}

function fraccionBetaContinua(a, b, x) {
    const maxIteraciones = 500;
    const tolerancia = 3e-14;
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

        if (Math.abs(delta - 1) <= tolerancia) break;
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
        b * Math.log1p(-x)
    );

    if (x < (a + 1) / (a + b + 2)) {
        return clamp(frente * fraccionBetaContinua(a, b, x) / a);
    }

    return clamp(
        1 - frente * fraccionBetaContinua(b, a, 1 - x) / b
    );
}

function cdfChiCuadrado(x, gl) {
    return gammaRegularizadaP(gl / 2, x / 2);
}

function cdfF(x, gl1, gl2) {
    if (x <= 0) return 0;
    if (x === Infinity) return 1;
    const razon = gl1 * x / (gl1 * x + gl2);
    return betaRegularizada(razon, gl1 / 2, gl2 / 2);
}

function cuantileDistribucion(cdf, p) {
    let inferior = 0;
    let superior = 1;

    while (cdf(superior) < p && superior < 1e12) {
        superior *= 2;
    }

    for (let i = 0; i < 120; i += 1) {
        const medio = (inferior + superior) / 2;
        if (cdf(medio) < p) inferior = medio;
        else superior = medio;
    }

    return (inferior + superior) / 2;
}

function sumaPoissonCentrada(mediaPoisson, componente) {
    if (mediaPoisson <= EPS) return componente(0);

    const moda = Math.floor(mediaPoisson);
    let pesoModa = Math.exp(
        -mediaPoisson +
        moda * Math.log(mediaPoisson) -
        logGamma(moda + 1)
    );
    let suma = pesoModa * componente(moda);
    let masa = pesoModa;
    let peso = pesoModa;

    for (let j = moda + 1; j < moda + 100000; j += 1) {
        peso *= mediaPoisson / j;
        suma += peso * componente(j);
        masa += peso;
        if (peso < 1e-15 && j > mediaPoisson) break;
    }

    peso = pesoModa;
    for (let j = moda - 1; j >= 0; j -= 1) {
        peso *= (j + 1) / mediaPoisson;
        suma += peso * componente(j);
        masa += peso;
        if (peso < 1e-15 && j < mediaPoisson) break;
    }

    return clamp(suma / Math.max(masa, EPS));
}

function cdfChiCuadradoNoCentral(x, gl, noCentralidad) {
    return sumaPoissonCentrada(
        noCentralidad / 2,
        (j) => cdfChiCuadrado(x, gl + 2 * j)
    );
}

function cdfFNoCentral(x, gl1, gl2, noCentralidad) {
    if (x <= 0) return 0;
    const razon = gl1 * x / (gl1 * x + gl2);
    return sumaPoissonCentrada(
        noCentralidad / 2,
        (j) => betaRegularizada(
            razon,
            gl1 / 2 + j,
            gl2 / 2
        )
    );
}

function buscarTamanoMinimo(potencia, objetivo, minimo) {
    let inferior = Math.max(2, Math.ceil(minimo));
    let superior = inferior;

    while (potencia(superior) < objetivo) {
        if (superior >= 1e7) {
            throw new Error(
                "El tamaño requerido supera el límite de cálculo. Revise el tamaño del efecto."
            );
        }
        superior = Math.ceil(superior * 1.5 + 1);
    }

    while (inferior < superior) {
        const medio = Math.floor((inferior + superior) / 2);
        if (potencia(medio) >= objetivo) superior = medio;
        else inferior = medio + 1;
    }

    return inferior;
}

function zAlpha(alpha, colas) {
    return cuantileNormal(1 - probabilidad("Alpha", alpha) / (Number(colas) === 1 ? 1 : 2));
}

function potenciaNormal(lambda, alpha, colas) {
    const z = zAlpha(alpha, colas);
    const l = Math.abs(lambda);
    if (Number(colas) === 1) return clamp(normalCdf(l - z));
    return clamp(normalCdf(l - z) + normalCdf(-l - z));
}

function corregir(n0, { poblacion, efectoDiseno = 1, perdida = 0 }) {
    const base = positivo("El tamaño base", n0);
    const N = Number(poblacion);
    const deff = positivo("El efecto de diseño", efectoDiseno);
    const perdidas = probabilidad("Las pérdidas", perdida, true);
    const fpc = Number.isFinite(N) && N > 0
        ? base / (1 + (base - 1) / N)
        : base;
    const diseno = fpc * deff;
    const final = Math.ceil(diseno / Math.max(1 - perdidas, EPS));
    return { base, fpc, diseno, final, poblacion: Number.isFinite(N) && N > 0 ? N : null, deff, perdidas };
}

function dividirDosGrupos(total, razon = 1) {
    const r = positivo("La razón de asignación", razon);
    const n1 = Math.ceil(total / (1 + r));
    const n2 = Math.ceil(n1 * r);
    return { grupo1: n1, grupo2: n2, total: n1 + n2, razon: r };
}

function mediaPrecision(p, c) {
    const sd = positivo("La desviación estándar", p.desviacion);
    const e = positivo("El margen de error", p.margen);
    return { n: (zAlpha(c.alpha, 2) * sd / e) ** 2, detalle: "Estimación de una media con precisión absoluta.", efecto: `DE = ${sd}; margen = ${e}` };
}

function proporcionPrecision(p, c) {
    const pi = probabilidad("La proporción", p.proporcion, true);
    const e = positivo("El margen de error", p.margen);
    return { n: zAlpha(c.alpha, 2) ** 2 * pi * (1 - pi) / e ** 2, detalle: "Estimación de una proporción con precisión absoluta.", efecto: `p = ${pi}; margen = ${e}` };
}

function dosMedias(p, c) {
    const d = positivo("El tamaño del efecto d", Math.abs(p.efecto));
    const r = positivo("La razón de asignación", p.razon ?? 1);
    const z = zAlpha(c.alpha, c.colas) + cuantileNormal(c.potencia);
    const n1 = z ** 2 * (1 + 1 / r) / d ** 2;
    const n2 = n1 * r;
    return {
        n: n1 + n2,
        razon: r,
        detalle: "Comparación de dos medias independientes mediante d de Cohen.",
        efecto: `d = ${d}`,
        potencia(n) {
            const g = dividirDosGrupos(n, r);
            return potenciaNormal(d / Math.sqrt(1 / g.grupo1 + 1 / g.grupo2), c.alpha, c.colas);
        }
    };
}

function relacionadas(p, c) {
    const d = positivo("El tamaño del efecto dz", Math.abs(p.efecto));
    const z = zAlpha(c.alpha, c.colas) + cuantileNormal(c.potencia);
    return { n: (z / d) ** 2, detalle: "Dos mediciones relacionadas o pares emparejados.", efecto: `dz = ${d}`, potencia: (n) => potenciaNormal(Math.sqrt(n) * d, c.alpha, c.colas) };
}

function dosProporciones(p, c) {
    const p1 = probabilidad("La proporción del grupo 1", p.p1, true);
    const p2 = probabilidad("La proporción del grupo 2", p.p2, true);
    const delta = Math.abs(p1 - p2);
    if (delta < EPS) throw new Error("Las proporciones esperadas deben ser diferentes.");
    const za = zAlpha(c.alpha, c.colas);
    const zb = cuantileNormal(c.potencia);
    const pm = (p1 + p2) / 2;
    const ng = (za * Math.sqrt(2 * pm * (1 - pm)) + zb * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) ** 2 / delta ** 2;
    return {
        n: 2 * ng,
        razon: 1,
        detalle: "Comparación de dos proporciones independientes.",
        efecto: `p₁ = ${p1}; p₂ = ${p2}`,
        potencia(n) {
            const m = Math.max(2, Math.floor(n / 2));
            const se = Math.sqrt(p1 * (1 - p1) / m + p2 * (1 - p2) / m);
            return potenciaNormal(delta / Math.max(se, EPS), c.alpha, c.colas);
        }
    };
}

function correlacion(p, c) {
    const rho = Number(p.correlacion);
    if (!Number.isFinite(rho) || Math.abs(rho) <= 0 || Math.abs(rho) >= 1) {
        throw new Error("La correlación esperada debe estar entre −1 y 1 y ser distinta de 0.");
    }
    const f = Math.abs(Math.atanh(rho));
    const z = zAlpha(c.alpha, c.colas) + cuantileNormal(c.potencia);
    return { n: (z / f) ** 2 + 3, detalle: "Detección de una correlación mediante z de Fisher.", efecto: `ρ = ${rho}`, potencia: (n) => potenciaNormal(Math.sqrt(Math.max(n - 3, 1)) * f, c.alpha, c.colas) };
}

function anova(p, c) {
    const f = positivo("El tamaño del efecto f", Math.abs(p.efecto));
    const g = Math.trunc(positivo("El número de grupos", p.grupos));
    if (g < 2) throw new Error("ANOVA requiere al menos dos grupos.");
    const potencia = (n) => {
        const total = Math.floor(Number(n));
        if (total <= g) return 0;
        const gl1 = g - 1;
        const gl2 = total - g;
        const critico = cuantileDistribucion(
            (x) => cdfF(x, gl1, gl2),
            1 - c.alpha
        );
        return clamp(
            1 - cdfFNoCentral(
                critico,
                gl1,
                gl2,
                f ** 2 * total
            )
        );
    };
    const n = buscarTamanoMinimo(
        potencia,
        c.potencia,
        g + 2
    );
    return {
        n,
        grupos: g,
        detalle: "ANOVA de un factor con grupos equilibrados mediante la distribución F no central.",
        efecto: `f = ${f}; grupos = ${g}`,
        potencia
    };
}

function chiCuadrado(p, c) {
    const w = positivo("El tamaño del efecto w", Math.abs(p.efecto));
    const gl = Math.trunc(positivo("Los grados de libertad", p.gl));
    const critico = cuantileDistribucion(
        (x) => cdfChiCuadrado(x, gl),
        1 - c.alpha
    );
    const potencia = (n) => {
        const total = Math.floor(Number(n));
        if (total <= 0) return 0;
        return clamp(
            1 - cdfChiCuadradoNoCentral(
                critico,
                gl,
                total * w ** 2
            )
        );
    };
    const n = buscarTamanoMinimo(potencia, c.potencia, 2);
    return {
        n,
        detalle: "Chi-cuadrado de asociación o bondad de ajuste mediante la distribución chi-cuadrado no central.",
        efecto: `w = ${w}; gl = ${gl}`,
        potencia
    };
}

function regresionLineal(p, c) {
    const f2 = positivo("El tamaño del efecto f²", Math.abs(p.efecto));
    const u = Math.trunc(positivo("El número de predictores", p.predictores));
    const potencia = (n) => {
        const total = Math.floor(Number(n));
        const gl2 = total - u - 1;
        if (gl2 <= 0) return 0;
        const critico = cuantileDistribucion(
            (x) => cdfF(x, u, gl2),
            1 - c.alpha
        );
        return clamp(
            1 - cdfFNoCentral(
                critico,
                u,
                gl2,
                f2 * total
            )
        );
    };
    const n = buscarTamanoMinimo(
        potencia,
        c.potencia,
        u + 3
    );
    return {
        n,
        detalle: "Regresión lineal múltiple mediante f² de Cohen y la distribución F no central.",
        efecto: `f² = ${f2}; predictores = ${u}`,
        potencia
    };
}

function regresionLogistica(p, c) {
    const or = positivo("La odds ratio", p.oddsRatio);
    if (Math.abs(or - 1) < EPS) throw new Error("La odds ratio debe ser distinta de 1.");
    const prev = probabilidad("La probabilidad basal", p.prevalencia);
    const u = Math.trunc(positivo("El número de predictores", p.predictores));
    const epv = positivo("Los eventos por parámetro", p.eventosPorParametro ?? 15);
    const info = prev * (1 - prev) * Math.log(or) ** 2;
    const z = zAlpha(c.alpha, c.colas) + cuantileNormal(c.potencia);
    const porEfecto = z ** 2 / Math.max(info, EPS);
    const porEventos = epv * (u + 1) / prev;
    const n = Math.max(porEfecto, porEventos);
    return {
        n,
        detalle: "Regresión logística por log(OR) y requisito mínimo de eventos por parámetro.",
        efecto: `OR = ${or}; prevalencia = ${prev}`,
        requisitos: { porEfecto: Math.ceil(porEfecto), porEventos: Math.ceil(porEventos), eventosEsperados: Math.ceil(n * prev), epv },
        potencia: (m) => potenciaNormal(Math.sqrt(m * info), c.alpha, c.colas)
    };
}

const DISENOS = {
    estimacion_media: mediaPrecision,
    estimacion_proporcion: proporcionPrecision,
    dos_medias_independientes: dosMedias,
    medias_relacionadas: relacionadas,
    dos_proporciones: dosProporciones,
    correlacion,
    anova,
    chi_cuadrado: chiCuadrado,
    regresion_lineal: regresionLineal,
    regresion_logistica: regresionLogistica
};

export function calcularTamanoMuestraPotencia({
    diseno,
    parametros = {},
    alpha = 0.05,
    potencia = 0.80,
    colas = 2,
    poblacion = null,
    efectoDiseno = 1,
    perdida = 0,
    tamanoDisponible = null
}) {
    const fn = DISENOS[diseno];
    if (!fn) throw new Error("El diseño seleccionado no está disponible.");

    const comunes = {
        alpha: probabilidad("Alpha", alpha),
        potencia: probabilidad("La potencia", potencia),
        colas: Number(colas) === 1 ? 1 : 2
    };
    const calculo = fn(parametros, comunes);
    const correccion = corregir(calculo.n, { poblacion, efectoDiseno, perdida });
    let asignacion = null;
    let final = correccion.final;

    if (calculo.razon) {
        asignacion = dividirDosGrupos(final, calculo.razon);
        final = asignacion.total;
    } else if (calculo.grupos) {
        const porGrupo = Math.ceil(final / calculo.grupos);
        asignacion = { numeroGrupos: calculo.grupos, porGrupo, total: porGrupo * calculo.grupos };
        final = asignacion.total;
    }

    const disponible = Number(tamanoDisponible);
    const potenciaAlcanzada = typeof calculo.potencia === "function" && Number.isFinite(disponible) && disponible > 0
        ? calculo.potencia(disponible)
        : null;
    const sensibilidad = typeof calculo.potencia === "function"
        ? [0.70, 0.80, 0.90, 0.95].map((objetivo) => {
            const c = { ...comunes, potencia: objetivo };
            const base = fn(parametros, c);
            const ajustado = corregir(base.n, { poblacion, efectoDiseno, perdida });
            let total = ajustado.final;
            if (base.razon) total = dividirDosGrupos(total, base.razon).total;
            if (base.grupos) total = Math.ceil(total / base.grupos) * base.grupos;
            return { potencia: objetivo, tamanoBase: Math.ceil(base.n), tamanoFinal: total };
        })
        : [];

    const advertencias = [
        "Documente la fuente del tamaño del efecto o del margen de error utilizado.",
        "El tamaño se redondea hacia arriba para evitar una muestra insuficiente."
    ];
    if (Number(efectoDiseno) > 1) advertencias.push("Se aplicó un efecto de diseño superior a 1.");
    if (Number(perdida) > 0) advertencias.push(`Se añadió una pérdida esperada de ${(Number(perdida) * 100).toFixed(1)} %.`);

    return {
        tipoAnalisis: "tamano-muestra-potencia",
        diseno,
        parametros,
        comunes,
        detalle: calculo.detalle,
        etiquetaEfecto: calculo.efecto,
        tamano: {
            base: Math.ceil(calculo.n),
            corregidoPoblacion: Math.ceil(correccion.fpc),
            conEfectoDiseno: Math.ceil(correccion.diseno),
            final
        },
        correcciones: correccion,
        asignacion,
        requisitos: calculo.requisitos ?? null,
        tamanoDisponible: Number.isFinite(disponible) && disponible > 0 ? Math.ceil(disponible) : null,
        potenciaAlcanzada,
        sensibilidad,
        advertencias,
        interpretacion: [
            `El tamaño mínimo final recomendado es ${final} participantes o unidades de análisis.`,
            calculo.detalle,
            potenciaAlcanzada === null
                ? "No se indicó un tamaño disponible para estimar la potencia alcanzada."
                : `Con n = ${Math.ceil(disponible)}, la potencia aproximada es ${(potenciaAlcanzada * 100).toFixed(1)} %.`,
            "Planifique el reclutamiento antes de iniciar la recolección y utilice escenarios conservadores cuando exista incertidumbre."
        ]
    };
}
