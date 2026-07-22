const EPS = 1e-12;

function limitar(valor, minimo, maximo) {
    return Math.max(minimo, Math.min(maximo, valor));
}

function validarProbabilidad(nombre, valor, abierto = true) {
    const numero = Number(valor);
    const valido = abierto
        ? numero > 0 && numero < 1
        : numero >= 0 && numero <= 1;

    if (!Number.isFinite(numero) || !valido) {
        throw new Error(`${nombre} debe estar entre 0 y 1.`);
    }

    return numero;
}

function validarPositivo(nombre, valor, incluirCero = false) {
    const numero = Number(valor);
    const valido = incluirCero ? numero >= 0 : numero > 0;

    if (!Number.isFinite(numero) || !valido) {
        throw new Error(`${nombre} debe ser un número ${incluirCero ? "no negativo" : "positivo"}.`);
    }

    return numero;
}

export function cuantileNormal(probabilidad) {
    const p = validarProbabilidad("La probabilidad", probabilidad);
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
    const limite = 0.02425;

    if (p < limite) {
        const q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    if (p > 1 - limite) {
        const q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    const q = p - 0.5;
    const r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
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

function zCritico(alpha, colas) {
    const nivel = validarProbabilidad("El nivel de significación", alpha);
    const numeroColas = Number(colas) === 1 ? 1 : 2;
    return cuantileNormal(1 - nivel / numeroColas);
}

function aplicarCorrecciones(tamanoBase, opciones = {}) {
    const base = validarPositivo("El tamaño de muestra base", tamanoBase);
    const poblacion = Number(opciones.poblacion);
    const efectoDiseno = opciones.efectoDiseno === undefined
        ? 1
        : validarPositivo("El efecto de diseño", opciones.efectoDiseno);
    const perdida = opciones.perdida === undefined
        ? 0
        : validarProbabilidad("La proporción esperada de pérdidas", opciones.perdida, false);

    let corregidoPoblacion = base;
    if (Number.isFinite(poblacion) && poblacion > 0) {
        corregidoPoblacion = base /
            (1 + (base - 1) / poblacion);
    }

    const conDiseno = corregidoPoblacion * efectoDiseno;
    const conPerdidas = conDiseno / Math.max(1 - perdida, EPS);

    return {
        base,
        corregidoPoblacion,
        conDiseno,
        final: Math.ceil(conPerdidas),
        poblacion: Number.isFinite(poblacion) && poblacion > 0
            ? poblacion
            : null,
        efectoDiseno,
        perdida
    };
}

function repartirDosGrupos(total, razon) {
    const r = validarPositivo("La razón de asignación", razon ?? 1);
    const n1 = Math.ceil(total / (1 + r));
    const n2 = Math.ceil(n1 * r);

    return {
        grupo1: n1,
        grupo2: n2,
        total: n1 + n2,
        razon: r
    };
}

function potenciaNormalNoCentral(noCentralidad, alpha, colas) {
    const z = zCritico(alpha, colas);
    const lambda = validarPositivo(
        "La no centralidad",
        Math.abs(noCentralidad),
        true
    );

    if (Number(colas) === 1) {
        return limitar(normalCdf(lambda - z), 0, 1);
    }

    return limitar(
        normalCdf(lambda - z) + normalCdf(-lambda - z),
        0,
        1
    );
}

function tamanoEstimacionMedia(parametros, comunes) {
    const desviacion = validarPositivo("La desviación estándar esperada", parametros.desviacion);
    const margen = validarPositivo("El margen de error", parametros.margen);
    const z = zCritico(comunes.alpha, 2);
    const base = (z * desviacion / margen) ** 2;

    return {
        base,
        etiquetaEfecto: `DE = ${desviacion}; margen = ${margen}`,
        detalle: "Estimación de una media con precisión absoluta.",
        potenciaDisponible: false
    };
}

function tamanoEstimacionProporcion(parametros, comunes) {
    const p = validarProbabilidad("La proporción esperada", parametros.proporcion, false);
    const margen = validarPositivo("El margen de error", parametros.margen);
    const z = zCritico(comunes.alpha, 2);
    const base = z ** 2 * p * (1 - p) / margen ** 2;

    return {
        base,
        etiquetaEfecto: `p = ${p}; margen = ${margen}`,
        detalle: "Estimación de una proporción con precisión absoluta.",
        potenciaDisponible: false
    };
}

function tamanoDosMedias(parametros, comunes) {
    const d = validarPositivo("El tamaño del efecto d", Math.abs(parametros.efecto));
    const potencia = validarProbabilidad("La potencia deseada", comunes.potencia);
    const r = validarPositivo("La razón de asignación", parametros.razon ?? 1);
    const za = zCritico(comunes.alpha, comunes.colas);
    const zb = cuantileNormal(potencia);
    const n1 = (za + zb) ** 2 * (1 + 1 / r) / d ** 2;
    const n2 = n1 * r;

    return {
        base: n1 + n2,
        gruposBase: {
            grupo1: Math.ceil(n1),
            grupo2: Math.ceil(n2),
            total: Math.ceil(n1) + Math.ceil(n2),
            razon: r
        },
        etiquetaEfecto: `d = ${d}`,
        detalle: "Comparación de dos medias independientes con asignación configurable.",
        potenciaDisponible: true,
        potenciaConN(total) {
            const asignacion = repartirDosGrupos(total, r);
            const noCentralidad = d /
                Math.sqrt(1 / asignacion.grupo1 + 1 / asignacion.grupo2);
            return potenciaNormalNoCentral(
                noCentralidad,
                comunes.alpha,
                comunes.colas
            );
        }
    };
}

function tamanoMediasRelacionadas(parametros, comunes) {
    const dz = validarPositivo("El tamaño del efecto dz", Math.abs(parametros.efecto));
    const potencia = validarProbabilidad("La potencia deseada", comunes.potencia);
    const za = zCritico(comunes.alpha, comunes.colas);
    const zb = cuantileNormal(potencia);
    const base = ((za + zb) / dz) ** 2;

    return {
        base,
        etiquetaEfecto: `dz = ${dz}`,
        detalle: "Comparación de dos mediciones relacionadas o pares emparejados.",
        potenciaDisponible: true,
        potenciaConN(n) {
            return potenciaNormalNoCentral(
                Math.sqrt(n) * dz,
                comunes.alpha,
                comunes.colas
            );
        }
    };
}

function tamanoDosProporciones(parametros, comunes) {
    const p1 = validarProbabilidad("La proporción del grupo 1", parametros.p1, false);
    const p2 = validarProbabilidad("La proporción del grupo 2", parametros.p2, false);
    const diferencia = Math.abs(p1 - p2);
    if (diferencia < EPS) {
        throw new Error("Las proporciones esperadas deben ser diferentes.");
    }

    const potencia = validarProbabilidad("La potencia deseada", comunes.potencia);
    const za = zCritico(comunes.alpha, comunes.colas);
    const zb = cuantileNormal(potencia);
    const promedio = (p1 + p2) / 2;
    const nPorGrupo = (
        za * Math.sqrt(2 * promedio * (1 - promedio)) +
        zb * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))
    ) ** 2 / diferencia ** 2;

    return {
        base: 2 * nPorGrupo,
        gruposBase: {
            grupo1: Math.ceil(nPorGrupo),
            grupo2: Math.ceil(nPorGrupo),
            total: 2 * Math.ceil(nPorGrupo),
            razon: 1
        },
        etiquetaEfecto: `p₁ = ${p1}; p₂ = ${p2}`,
        detalle: "Comparación de dos proporciones independientes con asignación igual.",
        potenciaDisponible: true,
        potenciaConN(total) {
            const n = Math.max(2, Math.floor(total / 2));
            const error = Math.sqrt(
                p1 * (1 - p1) / n +
                p2 * (1 - p2) / n
            );
            const noCentralidad = diferencia / Math.max(error, EPS);
            return potenciaNormalNoCentral(
                noCentralidad,
                comunes.alpha,
                comunes.colas
            );
        }
    };
}

function tamanoCorrelacion(parametros, comunes) {
    const rho = Number(parametros.correlacion);
    if (!Number.isFinite(rho) || Math.abs(rho) <= 0 || Math.abs(rho) >= 1) {
        throw new Error("La correlación esperada debe ser distinta de 0 y estar entre −1 y 1.");
    }

    const potencia = validarProbabilidad("La potencia deseada", comunes.potencia);
    const za = zCritico(comunes.alpha, comunes.colas);
    const zb = cuantileNormal(potencia);
    const transformada = Math.abs(Math.atanh(rho));
    const base = ((za + zb) / transformada) ** 2 + 3;

    return {
        base,
        etiquetaEfecto: `ρ = ${rho}`,
        detalle: "Detección de una correlación mediante la transformación z de Fisher.",
        potenciaDisponible: true,
        potenciaConN(n) {
            const noCentralidad = Math.sqrt(Math.max(n - 3, 1)) *
                transformada;
            return potenciaNormalNoCentral(
                noCentralidad,
                comunes.alpha,
                comunes.colas
            );
        }
    };
}

function tamanoAnova(parametros, comunes) {
    const f = validarPositivo("El tamaño del efecto f", Math.abs(parametros.efecto));
    const grupos = Math.trunc(validarPositivo("El número de grupos", parametros.grupos));
    if (grupos < 2) throw new Error("ANOVA requiere al menos dos grupos.");

    const potencia = validarProbabilidad("La potencia deseada", comunes.potencia);
    const za = zCritico(comunes.alpha, 1);
    const zb = cuantileNormal(potencia);
    const base = (za + zb) ** 2 * (grupos - 1) / f ** 2 + grupos;

    return {
        base,
        gruposBase: {
            porGrupo: Math.ceil(base / grupos),
            numeroGrupos: grupos,
            total: Math.ceil(base / grupos) * grupos
        },
        etiquetaEfecto: `f = ${f}; grupos = ${grupos}`,
        detalle: "ANOVA de un factor con asignación aproximadamente equilibrada. Se usa una aproximación normal conservadora.",
        potenciaDisponible: true,
        potenciaConN(n) {
            const noCentralidad = f * Math.sqrt(
                Math.max(n / (grupos - 1), EPS)
            );
            return potenciaNormalNoCentral(noCentralidad, comunes.alpha, 1);
        }
    };
}

function tamanoChiCuadrado(parametros, comunes) {
    const w = validarPositivo("El tamaño del efecto w", Math.abs(parametros.efecto));
    const gl = Math.trunc(validarPositivo("Los grados de libertad", parametros.gl));
    const potencia = validarProbabilidad("La potencia deseada", comunes.potencia);
    const za = zCritico(comunes.alpha, 1);
    const zb = cuantileNormal(potencia);
    const base = (za + zb) ** 2 * gl / w ** 2;

    return {
        base,
        etiquetaEfecto: `w = ${w}; gl = ${gl}`,
        detalle: "Prueba chi-cuadrado de asociación o bondad de ajuste. Aproximación basada en no centralidad.",
        potenciaDisponible: true,
        potenciaConN(n) {
            const noCentralidad = w * Math.sqrt(Math.max(n / gl, EPS));
            return potenciaNormalNoCentral(noCentralidad, comunes.alpha, 1);
        }
    };
}

function tamanoRegresionLineal(parametros, comunes) {
    const f2 = validarPositivo("El tamaño del efecto f²", Math.abs(parametros.efecto));
    const predictores = Math.trunc(
        validarPositivo("El número de predictores", parametros.predictores)
    );
    const potencia = validarProbabilidad("La potencia deseada", comunes.potencia);
    const za = zCritico(comunes.alpha, 1);
    const zb = cuantileNormal(potencia);
    const base = (za + zb) ** 2 / f2 + predictores + 1;

    return {
        base,
        etiquetaEfecto: `f² = ${f2}; predictores = ${predictores}`,
        detalle: "Regresión lineal múltiple mediante el tamaño del efecto f² de Cohen. Aproximación de planificación.",
        potenciaDisponible: true,
        potenciaConN(n) {
            const glResidual = Math.max(n - predictores - 1, 1);
            const noCentralidad = Math.sqrt(f2 * glResidual);
            return potenciaNormalNoCentral(noCentralidad, comunes.alpha, 1);
        }
    };
}

function tamanoRegresionLogistica(parametros, comunes) {
    const or = validarPositivo("La odds ratio esperada", parametros.oddsRatio);
    if (Math.abs(or - 1) < EPS) {
        throw new Error("La odds ratio esperada debe ser distinta de 1.");
    }

    const prevalencia = validarProbabilidad(
        "La probabilidad basal del evento",
        parametros.prevalencia
    );
    const predictores = Math.trunc(
        validarPositivo("El número de predictores", parametros.predictores)
    );
    const epv = validarPositivo(
        "Los eventos por parámetro",
        parametros.eventosPorParametro ?? 15
    );
    const potencia = validarProbabilidad("La potencia deseada", comunes.potencia);
    const za = zCritico(comunes.alpha, comunes.colas);
    const zb = cuantileNormal(potencia);
    const logOr = Math.abs(Math.log(or));
    const informacion = prevalencia * (1 - prevalencia) * logOr ** 2;
    const porEfecto = (za + zb) ** 2 / Math.max(informacion, EPS);
    const porEventos = epv * (predictores + 1) / prevalencia;
    const base = Math.max(porEfecto, porEventos);

    return {
        base,
        etiquetaEfecto: `OR = ${or}; prevalencia = ${prevalencia}`,
        detalle: "Regresión logística basada en una aproximación para log(OR) y un requisito mínimo de eventos por parámetro.",
        potenciaDisponible: true,
        potenciaConN(n) {
            const noCentralidad = Math.sqrt(n * informacion);
            return potenciaNormalNoCentral(
                noCentralidad,
                comunes.alpha,
                comunes.colas
            );
        },
        requisitos: {
            porEfecto: Math.ceil(porEfecto),
            porEventos: Math.ceil(porEventos),
            eventosEsperados: Math.ceil(base * prevalencia),
            eventosPorParametro: epv
        }
    };
}

const CALCULADORES = {
    estimacion_media: tamanoEstimacionMedia,
    estimacion_proporcion: tamanoEstimacionProporcion,
    dos_medias_independientes: tamanoDosMedias,
    medias_relacionadas: tamanoMediasRelacionadas,
    dos_proporciones: tamanoDosProporciones,
    correlacion: tamanoCorrelacion,
    anova: tamanoAnova,
    chi_cuadrado: tamanoChiCuadrado,
    regresion_lineal: tamanoRegresionLineal,
    regresion_logistica: tamanoRegresionLogistica
};

function tablaSensibilidad(calculador, parametros, comunes, opciones) {
    const potencias = [0.70, 0.80, 0.90, 0.95];

    return potencias.map((potencia) => {
        const calculo = calculador(
            parametros,
            { ...comunes, potencia }
        );
        const correcciones = aplicarCorrecciones(
            calculo.base,
            opciones
        );

        return {
            potencia,
            tamanoBase: Math.ceil(calculo.base),
            tamanoFinal: correcciones.final
        };
    });
}

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
    const calculador = CALCULADORES[diseno];
    if (!calculador) {
        throw new Error("El diseño seleccionado no está disponible.");
    }

    const comunes = {
        alpha: validarProbabilidad("El nivel de significación", alpha),
        potencia: validarProbabilidad("La potencia deseada", potencia),
        colas: Number(colas) === 1 ? 1 : 2
    };
    const opciones = {
        poblacion,
        efectoDiseno,
        perdida
    };
    const calculo = calculador(parametros, comunes);
    const correcciones = aplicarCorrecciones(calculo.base, opciones);
    let asignacion = null;

    if (calculo.gruposBase?.grupo1) {
        asignacion = repartirDosGrupos(
            correcciones.final,
            calculo.gruposBase.razon
        );
    } else if (calculo.gruposBase?.numeroGrupos) {
        const porGrupo = Math.ceil(
            correcciones.final /
            calculo.gruposBase.numeroGrupos
        );
        asignacion = {
            porGrupo,
            numeroGrupos: calculo.gruposBase.numeroGrupos,
            total: porGrupo * calculo.gruposBase.numeroGrupos
        };
        correcciones.final = asignacion.total;
    }

    const disponible = Number(tamanoDisponible);
    const potenciaAlcanzada = calculo.potenciaDisponible &&
        Number.isFinite(disponible) && disponible > 0
        ? calculo.potenciaConN(disponible)
        : null;
    const sensibilidad = calculo.potenciaDisponible
        ? tablaSensibilidad(calculador, parametros, comunes, opciones)
        : [];
    const advertencias = [
        "El cálculo depende de los supuestos y tamaños del efecto introducidos; documente siempre su procedencia.",
        "El redondeo se realiza hacia arriba para evitar una muestra insuficiente."
    ];

    if (Number(efectoDiseno) > 1) {
        advertencias.push(
            "Se aplicó un efecto de diseño superior a 1 por muestreo complejo o agrupado."
        );
    }
    if (Number(perdida) > 0) {
        advertencias.push(
            `Se incrementó la muestra por una pérdida esperada de ${(Number(perdida) * 100).toFixed(1)} %.`
        );
    }
    if (correcciones.poblacion !== null &&
        correcciones.final > correcciones.poblacion) {
        advertencias.push(
            "El tamaño ajustado supera la población indicada; revise los parámetros y considere un censo."
        );
    }

    return {
        tipoAnalisis: "tamano-muestra-potencia",
        diseno,
        parametros,
        comunes,
        detalle: calculo.detalle,
        etiquetaEfecto: calculo.etiquetaEfecto,
        tamano: {
            base: Math.ceil(calculo.base),
            corregidoPoblacion: Math.ceil(
                correcciones.corregidoPoblacion
            ),
            conEfectoDiseno: Math.ceil(correcciones.conDiseno),
            final: asignacion?.total ?? correcciones.final
        },
        correcciones,
        asignacion,
        potenciaAlcanzada,
        tamanoDisponible: Number.isFinite(disponible) && disponible > 0
            ? Math.ceil(disponible)
            : null,
        sensibilidad,
        requisitos: calculo.requisitos ?? null,
        advertencias,
        interpretacion: [
            `El tamaño mínimo final recomendado es ${asignacion?.total ?? correcciones.final} participantes o unidades de análisis.`,
            calculo.detalle,
            potenciaAlcanzada === null
                ? "No se indicó un tamaño disponible para estimar la potencia alcanzada."
                : `Con n = ${Math.ceil(disponible)}, la potencia aproximada es ${(potenciaAlcanzada * 100).toFixed(1)} %.`,
            "Utilice una estimación conservadora del efecto cuando la evidencia previa sea incierta y planifique el reclutamiento antes de iniciar la recolección."
        ]
    };
}
