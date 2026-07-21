import * as jStatModule from "jstat";

const jStat = jStatModule.jStat ?? jStatModule.default?.jStat;

if (!jStat) {
    throw new Error("No fue posible cargar el motor estadístico jStat.");
}

const limitarProbabilidad = (valor) => Math.min(1, Math.max(0, valor));

function validarNivelConfianza(nivelConfianza) {
    if (!Number.isFinite(nivelConfianza) || nivelConfianza <= 0 || nivelConfianza >= 1) {
        throw new RangeError("El nivel de confianza debe estar entre 0 y 1.");
    }
}

function convertirNumero(valor) {
    if (typeof valor === "string") {
        if (valor.trim() === "") return Number.NaN;
        return Number(valor.trim().replace(",", "."));
    }
    return Number(valor);
}

const media = (valores) => valores.reduce((suma, valor) => suma + valor, 0) / valores.length;

function mediana(valores) {
    const ordenados = [...valores].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    return ordenados.length % 2
        ? ordenados[mitad]
        : (ordenados[mitad - 1] + ordenados[mitad]) / 2;
}

function varianzaMuestral(valores, promedio = media(valores)) {
    return valores.reduce(
        (suma, valor) => suma + (valor - promedio) ** 2,
        0
    ) / (valores.length - 1);
}

function resumenDescriptivo(valores) {
    const promedio = media(valores);
    const varianza = varianzaMuestral(valores, promedio);
    return {
        n: valores.length,
        media: promedio,
        mediana: mediana(valores),
        varianza,
        desviacionEstandar: Math.sqrt(varianza),
        minimo: Math.min(...valores),
        maximo: Math.max(...valores)
    };
}

function normalizarGrupo(grupo, indice) {
    const esArreglo = Array.isArray(grupo);
    const originales = esArreglo ? grupo : grupo?.valores;

    if (!Array.isArray(originales)) {
        throw new TypeError(`El grupo ${indice + 1} debe contener un arreglo llamado valores.`);
    }

    const valores = originales.map(convertirNumero);
    const posicionInvalida = valores.findIndex((valor) => !Number.isFinite(valor));

    if (posicionInvalida !== -1) {
        throw new TypeError(
            `El grupo ${indice + 1} contiene un valor no numérico en la posición ${posicionInvalida + 1}.`
        );
    }

    if (valores.length < 2) {
        throw new RangeError(`El grupo ${indice + 1} debe contener al menos dos observaciones.`);
    }

    const nombreOriginal = esArreglo ? "" : String(grupo?.nombre ?? "").trim();
    return {
        nombre: nombreOriginal || `Grupo ${indice + 1}`,
        valores,
        ...resumenDescriptivo(valores)
    };
}

function prepararGrupos(grupos) {
    if (!Array.isArray(grupos)) {
        throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");
    }
    if (grupos.length < 3) {
        throw new RangeError("El análisis requiere al menos tres grupos independientes.");
    }

    const preparados = grupos.map(normalizarGrupo);
    const nombres = preparados.map(({ nombre }) => nombre);
    if (new Set(nombres).size !== nombres.length) {
        throw new Error("Cada grupo debe tener un nombre diferente.");
    }
    return preparados;
}

function resumenGeneral(grupos) {
    const nTotal = grupos.reduce((suma, grupo) => suma + grupo.n, 0);
    const sumaTotal = grupos.reduce(
        (suma, grupo) => suma + grupo.valores.reduce((parcial, valor) => parcial + valor, 0),
        0
    );
    return {
        numeroGrupos: grupos.length,
        nTotal,
        mediaGeneral: sumaTotal / nTotal
    };
}

function valorPDistribucionF(estadistico, gl1, gl2) {
    if (estadistico === Infinity) return 0;
    return limitarProbabilidad(1 - jStat.centralF.cdf(estadistico, gl1, gl2));
}

function valorPChiCuadrado(estadistico, gl) {
    return limitarProbabilidad(1 - jStat.chisquare.cdf(estadistico, gl));
}

function verificarTukey() {
    if (!jStat.tukey?.cdf || !jStat.tukey?.inv) {
        throw new Error(
            "La distribución de Tukey no está disponible en la versión instalada de jStat."
        );
    }
}

function valorPTukey(q, numeroGrupos, gl) {
    verificarTukey();
    if (q === Infinity) return 0;
    return limitarProbabilidad(1 - jStat.tukey.cdf(q, numeroGrupos, gl));
}

function valorCriticoTukey(nivelConfianza, numeroGrupos, gl) {
    verificarTukey();
    return jStat.tukey.inv(nivelConfianza, numeroGrupos, gl);
}

function interpretarEfecto(valor) {
    const magnitud = Math.abs(valor);
    if (magnitud < 0.01) return "Prácticamente nulo";
    if (magnitud < 0.06) return "Pequeño";
    if (magnitud < 0.14) return "Moderado";
    return "Grande";
}

function pares(grupos, callback) {
    const resultados = [];
    for (let i = 0; i < grupos.length - 1; i += 1) {
        for (let j = i + 1; j < grupos.length; j += 1) {
            resultados.push(callback(grupos[i], grupos[j], i, j));
        }
    }
    return resultados;
}

function comparacionesTukey(grupos, mse, glError, nivelConfianza) {
    const alfa = 1 - nivelConfianza;
    const k = grupos.length;
    const qCritico = valorCriticoTukey(nivelConfianza, k, glError);

    return {
        id: "tukey-kramer",
        nombre: "Comparaciones de Tukey–Kramer",
        metodo: "Rango studentizado con control del error familiar.",
        recomendado: false,
        comparaciones: pares(grupos, (grupo1, grupo2) => {
            const diferencia = grupo1.media - grupo2.media;
            const errorEstandar = Math.sqrt(
                (mse / 2) * (1 / grupo1.n + 1 / grupo2.n)
            );
            const q = errorEstandar === 0
                ? (diferencia === 0 ? 0 : Infinity)
                : Math.abs(diferencia) / errorEstandar;
            const valorP = valorPTukey(q, k, glError);
            const margen = qCritico * errorEstandar;
            return {
                grupo1: grupo1.nombre,
                grupo2: grupo2.nombre,
                diferenciaMedias: diferencia,
                errorEstandar,
                estadisticoQ: q,
                gradosLibertad: glError,
                valorP,
                valorPAjustado: valorP,
                intervaloConfianza: {
                    nivel: nivelConfianza,
                    inferior: diferencia - margen,
                    superior: diferencia + margen,
                    margen
                },
                significativo: valorP < alfa
            };
        })
    };
}

function comparacionesGamesHowell(grupos, nivelConfianza) {
    const alfa = 1 - nivelConfianza;
    const k = grupos.length;

    return {
        id: "games-howell",
        nombre: "Comparaciones de Games–Howell",
        metodo: "Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",
        recomendado: false,
        comparaciones: pares(grupos, (grupo1, grupo2) => {
            const diferencia = grupo1.media - grupo2.media;
            const a = grupo1.varianza / grupo1.n;
            const b = grupo2.varianza / grupo2.n;
            const suma = a + b;
            const errorEstandar = Math.sqrt(suma / 2);
            const gl = suma ** 2 / (
                a ** 2 / (grupo1.n - 1) + b ** 2 / (grupo2.n - 1)
            );
            const q = errorEstandar === 0
                ? (diferencia === 0 ? 0 : Infinity)
                : Math.abs(diferencia) / errorEstandar;
            const valorP = valorPTukey(q, k, gl);
            const margen = valorCriticoTukey(nivelConfianza, k, gl) * errorEstandar;
            return {
                grupo1: grupo1.nombre,
                grupo2: grupo2.nombre,
                diferenciaMedias: diferencia,
                errorEstandar,
                estadisticoQ: q,
                gradosLibertad: gl,
                valorP,
                valorPAjustado: valorP,
                intervaloConfianza: {
                    nivel: nivelConfianza,
                    inferior: diferencia - margen,
                    superior: diferencia + margen,
                    margen
                },
                significativo: valorP < alfa
            };
        })
    };
}

function asignarRangos(observaciones) {
    const ordenadas = observaciones
        .map((observacion) => ({ ...observacion, rango: 0 }))
        .sort((a, b) => a.valor - b.valor);

    let posicion = 0;
    let sumaCorreccionEmpates = 0;
    let cantidadGruposEmpatados = 0;

    while (posicion < ordenadas.length) {
        let final = posicion + 1;
        while (final < ordenadas.length && ordenadas[final].valor === ordenadas[posicion].valor) {
            final += 1;
        }

        const cantidad = final - posicion;
        const rangoPromedio = (posicion + 1 + final) / 2;
        for (let i = posicion; i < final; i += 1) ordenadas[i].rango = rangoPromedio;

        if (cantidad > 1) {
            cantidadGruposEmpatados += 1;
            sumaCorreccionEmpates += cantidad ** 3 - cantidad;
        }
        posicion = final;
    }

    return { observaciones: ordenadas, sumaCorreccionEmpates, cantidadGruposEmpatados };
}

function ajustarHolm(comparaciones) {
    const ordenadas = comparaciones
        .map((comparacion, indiceOriginal) => ({ ...comparacion, indiceOriginal }))
        .sort((a, b) => a.valorP - b.valorP);

    let anterior = 0;
    ordenadas.forEach((comparacion, indice) => {
        const ajustado = Math.min(1, comparacion.valorP * (ordenadas.length - indice));
        comparacion.valorPAjustado = Math.max(anterior, ajustado);
        anterior = comparacion.valorPAjustado;
    });

    return ordenadas
        .sort((a, b) => a.indiceOriginal - b.indiceOriginal)
        .map(({ indiceOriginal, ...comparacion }) => comparacion);
}

function comparacionesDunn(
    grupos,
    sumaRangos,
    nTotal,
    sumaCorreccionEmpates,
    nivelConfianza
) {
    const alfa = 1 - nivelConfianza;
    const varianzaRangos =
        nTotal * (nTotal + 1) / 12 -
        sumaCorreccionEmpates / (12 * (nTotal - 1));

    const sinAjustar = pares(grupos, (grupo1, grupo2, i, j) => {
        const rangoMedio1 = sumaRangos[i] / grupo1.n;
        const rangoMedio2 = sumaRangos[j] / grupo2.n;
        const diferenciaRangos = rangoMedio1 - rangoMedio2;
        const errorEstandar = Math.sqrt(
            varianzaRangos * (1 / grupo1.n + 1 / grupo2.n)
        );
        const z = errorEstandar === 0 ? 0 : diferenciaRangos / errorEstandar;
        const valorP = limitarProbabilidad(
            2 * (1 - jStat.normal.cdf(Math.abs(z), 0, 1))
        );
        return {
            grupo1: grupo1.nombre,
            grupo2: grupo2.nombre,
            rangoMedio1,
            rangoMedio2,
            diferenciaRangos,
            errorEstandar,
            estadisticoZ: z,
            valorP,
            tamanioEfectoR: z / Math.sqrt(nTotal)
        };
    });

    return {
        id: "dunn-holm",
        nombre: "Comparaciones de Dunn con ajuste de Holm",
        metodo: "Comparaciones de rangos con corrección secuencial de Holm.",
        recomendado: false,
        comparaciones: ajustarHolm(sinAjustar).map((comparacion) => ({
            ...comparacion,
            significativo: comparacion.valorPAjustado < alfa
        }))
    };
}

export function pruebaAnovaUnFactor(grupos, opciones = {}) {
    const { nivelConfianza = 0.95 } = opciones;
    validarNivelConfianza(nivelConfianza);

    const datos = prepararGrupos(grupos);
    const general = resumenGeneral(datos);
    const scEntre = datos.reduce(
        (suma, grupo) => suma + grupo.n * (grupo.media - general.mediaGeneral) ** 2,
        0
    );
    const scDentro = datos.reduce(
        (suma, grupo) => suma + grupo.valores.reduce(
            (parcial, valor) => parcial + (valor - grupo.media) ** 2,
            0
        ),
        0
    );
    const scTotal = scEntre + scDentro;
    const glEntre = datos.length - 1;
    const glDentro = general.nTotal - datos.length;
    const cmEntre = scEntre / glEntre;
    const cmDentro = scDentro / glDentro;
    const f = cmDentro === 0 ? (cmEntre === 0 ? 0 : Infinity) : cmEntre / cmDentro;
    const valorP = valorPDistribucionF(f, glEntre, glDentro);
    const etaCuadrado = scTotal === 0 ? 0 : scEntre / scTotal;
    const omegaBruto = scTotal + cmDentro === 0
        ? 0
        : (scEntre - glEntre * cmDentro) / (scTotal + cmDentro);
    const omegaCuadrado = Math.max(0, omegaBruto);
    const alfa = 1 - nivelConfianza;
    const significativo = valorP < alfa;
    const postHoc = comparacionesTukey(datos, cmDentro, glDentro, nivelConfianza);
    postHoc.recomendado = significativo;

    return {
        id: "anova-un-factor",
        nombre: "ANOVA de un factor",
        metodo: "ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",
        grupos: datos,
        ...general,
        estadistico: { simbolo: "F", valor: f },
        gradosLibertad: { numerador: glEntre, denominador: glDentro },
        valorP,
        nivelConfianza,
        alfa,
        significativo,
        tablaAnova: {
            entreGrupos: { sumaCuadrados: scEntre, gradosLibertad: glEntre, cuadradoMedio: cmEntre },
            dentroGrupos: { sumaCuadrados: scDentro, gradosLibertad: glDentro, cuadradoMedio: cmDentro },
            total: { sumaCuadrados: scTotal, gradosLibertad: general.nTotal - 1 }
        },
        tamanioEfecto: {
            etaCuadrado,
            omegaCuadrado,
            interpretacion: interpretarEfecto(omegaCuadrado)
        },
        postHoc
    };
}

export function pruebaAnovaWelch(grupos, opciones = {}) {
    const { nivelConfianza = 0.95 } = opciones;
    validarNivelConfianza(nivelConfianza);

    const datos = prepararGrupos(grupos);
    const general = resumenGeneral(datos);
    const grupoSinVarianza = datos.find(({ varianza }) => varianza <= 0);
    if (grupoSinVarianza) {
        throw new Error(
            `El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${grupoSinVarianza.nombre}.`
        );
    }

    const ponderados = datos.map((grupo) => ({
        ...grupo,
        peso: grupo.n / grupo.varianza
    }));
    const sumaPesos = ponderados.reduce((suma, grupo) => suma + grupo.peso, 0);
    const mediaPonderada = ponderados.reduce(
        (suma, grupo) => suma + grupo.peso * grupo.media,
        0
    ) / sumaPesos;
    const k = datos.length;
    const gl1 = k - 1;
    const base = ponderados.reduce(
        (suma, grupo) => suma + grupo.peso * (grupo.media - mediaPonderada) ** 2,
        0
    ) / gl1;
    const termino = ponderados.reduce(
        (suma, grupo) => suma + (1 - grupo.peso / sumaPesos) ** 2 / (grupo.n - 1),
        0
    );
    const correccion = 1 + (2 * (k - 2) / (k ** 2 - 1)) * termino;
    const f = base / correccion;
    const gl2 = (k ** 2 - 1) / (3 * termino);
    const valorP = valorPDistribucionF(f, gl1, gl2);
    const omegaCuadradoAproximado = Math.max(
        0,
        gl1 * (f - 1) / (gl1 * f + gl2 + 1)
    );
    const alfa = 1 - nivelConfianza;
    const significativo = valorP < alfa;
    const postHoc = comparacionesGamesHowell(datos, nivelConfianza);
    postHoc.recomendado = significativo;

    return {
        id: "anova-welch",
        nombre: "ANOVA de Welch",
        metodo: "ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",
        grupos: datos,
        ...general,
        mediaPonderada,
        sumaPesos,
        estadistico: { simbolo: "F_W", valor: f },
        gradosLibertad: { numerador: gl1, denominador: gl2 },
        valorP,
        nivelConfianza,
        alfa,
        significativo,
        componentesWelch: {
            numeradorBase: base,
            terminoCorreccion: termino,
            denominadorCorreccion: correccion
        },
        tamanioEfecto: {
            omegaCuadradoAproximado,
            interpretacion: interpretarEfecto(omegaCuadradoAproximado),
            nota: "Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."
        },
        postHoc
    };
}

export function pruebaKruskalWallis(grupos, opciones = {}) {
    const { nivelConfianza = 0.95 } = opciones;
    validarNivelConfianza(nivelConfianza);

    const datos = prepararGrupos(grupos);
    const general = resumenGeneral(datos);
    const observaciones = datos.flatMap((grupo, indiceGrupo) =>
        grupo.valores.map((valor) => ({ valor, indiceGrupo }))
    );
    const rangos = asignarRangos(observaciones);
    const sumaRangos = new Array(datos.length).fill(0);
    rangos.observaciones.forEach(({ indiceGrupo, rango }) => {
        sumaRangos[indiceGrupo] += rango;
    });

    const hBruto =
        12 / (general.nTotal * (general.nTotal + 1)) *
        datos.reduce(
            (suma, grupo, indice) => suma + sumaRangos[indice] ** 2 / grupo.n,
            0
        ) -
        3 * (general.nTotal + 1);
    const factorEmpates = 1 - rangos.sumaCorreccionEmpates /
        (general.nTotal ** 3 - general.nTotal);
    const h = factorEmpates <= 0 ? 0 : hBruto / factorEmpates;
    const gl = datos.length - 1;
    const valorP = valorPChiCuadrado(h, gl);
    const epsilonCuadrado = Math.max(
        0,
        (h - datos.length + 1) / (general.nTotal - datos.length)
    );
    const alfa = 1 - nivelConfianza;
    const significativo = valorP < alfa;
    const gruposConRangos = datos.map((grupo, indice) => ({
        ...grupo,
        sumaRangos: sumaRangos[indice],
        rangoMedio: sumaRangos[indice] / grupo.n
    }));
    const postHoc = comparacionesDunn(
        datos,
        sumaRangos,
        general.nTotal,
        rangos.sumaCorreccionEmpates,
        nivelConfianza
    );
    postHoc.recomendado = significativo;

    return {
        id: "kruskal-wallis",
        nombre: "Prueba de Kruskal–Wallis",
        metodo: "Comparación no paramétrica de tres o más grupos independientes mediante rangos.",
        grupos: gruposConRangos,
        ...general,
        estadistico: { simbolo: "H", valor: h, sinCorreccion: hBruto },
        gradosLibertad: { valor: gl },
        valorP,
        nivelConfianza,
        alfa,
        significativo,
        empates: {
            factorCorreccion: factorEmpates,
            sumaCorreccion: rangos.sumaCorreccionEmpates,
            cantidadGruposEmpatados: rangos.cantidadGruposEmpatados
        },
        tamanioEfecto: {
            epsilonCuadrado,
            interpretacion: interpretarEfecto(epsilonCuadrado)
        },
        postHoc
    };
}

export function analizarTresOMasGrupos({
    grupos,
    prueba,
    nivelConfianza = 0.95
}) {
    switch (prueba) {
        case "anova-un-factor":
        case "anova":
            return pruebaAnovaUnFactor(grupos, { nivelConfianza });
        case "anova-welch":
        case "welch":
            return pruebaAnovaWelch(grupos, { nivelConfianza });
        case "kruskal-wallis":
            return pruebaKruskalWallis(grupos, { nivelConfianza });
        default:
            throw new Error("La prueba solicitada no está disponible.");
    }
}
