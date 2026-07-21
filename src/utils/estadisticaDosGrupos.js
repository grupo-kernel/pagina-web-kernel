import * as jStatModule from "jstat";

const jStat =
    jStatModule.jStat ??
    jStatModule.default?.jStat;

if (!jStat) {
    throw new Error(
        "No fue posible cargar el motor estadístico jStat."
    );
}

function limitarProbabilidad(valor) {
    return Math.min(1, Math.max(0, valor));
}

function validarNivelConfianza(nivelConfianza) {
    if (
        !Number.isFinite(nivelConfianza) ||
        nivelConfianza <= 0 ||
        nivelConfianza >= 1
    ) {
        throw new RangeError(
            "El nivel de confianza debe estar entre 0 y 1."
        );
    }
}

function convertirNumero(valor) {
    if (
        typeof valor === "string" &&
        valor.trim() === ""
    ) {
        return Number.NaN;
    }

    if (typeof valor === "string") {
        return Number(
            valor
                .trim()
                .replace(",", ".")
        );
    }

    return Number(valor);
}

function validarMuestra(valores, nombre) {
    if (!Array.isArray(valores)) {
        throw new TypeError(
            `${nombre} debe ser un arreglo de valores.`
        );
    }

    const muestra = valores.map(convertirNumero);

    const posicionInvalida =
        muestra.findIndex(
            (valor) => !Number.isFinite(valor)
        );

    if (posicionInvalida !== -1) {
        throw new TypeError(
            `${nombre} contiene un valor no numérico en la posición ${
                posicionInvalida + 1
            }.`
        );
    }

    if (muestra.length < 2) {
        throw new RangeError(
            `${nombre} debe contener al menos dos observaciones.`
        );
    }

    return muestra;
}

function media(valores) {
    return valores.reduce(
        (acumulado, valor) =>
            acumulado + valor,
        0
    ) / valores.length;
}

function mediana(valores) {
    const ordenados = [...valores].sort(
        (a, b) => a - b
    );

    const mitad =
        Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 !== 0) {
        return ordenados[mitad];
    }

    return (
        ordenados[mitad - 1] +
        ordenados[mitad]
    ) / 2;
}

function varianzaMuestral(valores, promedio) {
    const sumaCuadrados =
        valores.reduce(
            (acumulado, valor) =>
                acumulado +
                (valor - promedio) ** 2,
            0
        );

    return sumaCuadrados /
        (valores.length - 1);
}

export function resumenDescriptivo(valores) {
    const muestra =
        validarMuestra(
            valores,
            "La muestra"
        );

    const promedio = media(muestra);
    const varianza =
        varianzaMuestral(
            muestra,
            promedio
        );

    return {
        n: muestra.length,
        media: promedio,
        mediana: mediana(muestra),
        varianza,
        desviacionEstandar:
            Math.sqrt(varianza),
        minimo: Math.min(...muestra),
        maximo: Math.max(...muestra)
    };
}

function valorPBilateralT(
    estadistico,
    gradosLibertad
) {
    return limitarProbabilidad(
        2 *
        (
            1 -
            jStat.studentt.cdf(
                Math.abs(estadistico),
                gradosLibertad
            )
        )
    );
}

function intervaloConfianza(
    diferencia,
    errorEstandar,
    gradosLibertad,
    nivelConfianza
) {
    validarNivelConfianza(
        nivelConfianza
    );

    const alfa =
        1 - nivelConfianza;

    const valorCritico =
        jStat.studentt.inv(
            1 - alfa / 2,
            gradosLibertad
        );

    const margen =
        valorCritico *
        errorEstandar;

    return {
        nivel: nivelConfianza,
        valorCritico,
        inferior:
            diferencia - margen,
        superior:
            diferencia + margen
    };
}

function calcularEfectosMedias(
    diferencia,
    varianza1,
    varianza2,
    n1,
    n2
) {
    const gradosLibertad =
        n1 + n2 - 2;

    const varianzaCombinada =
        (
            (n1 - 1) * varianza1 +
            (n2 - 1) * varianza2
        ) / gradosLibertad;

    const desviacionCombinada =
        Math.sqrt(
            varianzaCombinada
        );

    if (desviacionCombinada === 0) {
        return {
            dCohen: 0,
            gHedges: 0,
            correccionHedges: 1
        };
    }

    const dCohen =
        diferencia /
        desviacionCombinada;

    const correccionHedges =
        1 -
        3 /
        (
            4 * gradosLibertad -
            1
        );

    return {
        dCohen,
        gHedges:
            correccionHedges *
            dCohen,
        correccionHedges
    };
}

export function pruebaTStudentIndependiente(
    grupo1,
    grupo2,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95
    } = opciones;

    const muestra1 =
        validarMuestra(
            grupo1,
            "El grupo 1"
        );

    const muestra2 =
        validarMuestra(
            grupo2,
            "El grupo 2"
        );

    const resumen1 =
        resumenDescriptivo(muestra1);

    const resumen2 =
        resumenDescriptivo(muestra2);

    const gradosLibertad =
        resumen1.n +
        resumen2.n -
        2;

    const varianzaCombinada =
        (
            (resumen1.n - 1) *
            resumen1.varianza +
            (resumen2.n - 1) *
            resumen2.varianza
        ) / gradosLibertad;

    const errorEstandar =
        Math.sqrt(
            varianzaCombinada *
            (
                1 / resumen1.n +
                1 / resumen2.n
            )
        );

    if (errorEstandar === 0) {
        throw new Error(
            "No puede calcularse la prueba porque ambos grupos carecen de variabilidad."
        );
    }

    const diferenciaMedias =
        resumen1.media -
        resumen2.media;

    const estadisticoT =
        diferenciaMedias /
        errorEstandar;

    const valorP =
        valorPBilateralT(
            estadisticoT,
            gradosLibertad
        );

    return {
        id:
            "t-student-independientes",
        nombre:
            "t de Student para muestras independientes",
        metodo:
            "Varianzas combinadas",
        grupo1: resumen1,
        grupo2: resumen2,
        diferenciaMedias,
        errorEstandar,
        varianzaCombinada,
        estadistico: {
            simbolo: "t",
            valor: estadisticoT
        },
        gradosLibertad,
        valorP,
        intervaloConfianza:
            intervaloConfianza(
                diferenciaMedias,
                errorEstandar,
                gradosLibertad,
                nivelConfianza
            ),
        tamanioEfecto:
            calcularEfectosMedias(
                diferenciaMedias,
                resumen1.varianza,
                resumen2.varianza,
                resumen1.n,
                resumen2.n
            )
    };
}

export function pruebaTWelch(
    grupo1,
    grupo2,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95
    } = opciones;

    const muestra1 =
        validarMuestra(
            grupo1,
            "El grupo 1"
        );

    const muestra2 =
        validarMuestra(
            grupo2,
            "El grupo 2"
        );

    const resumen1 =
        resumenDescriptivo(muestra1);

    const resumen2 =
        resumenDescriptivo(muestra2);

    const componente1 =
        resumen1.varianza /
        resumen1.n;

    const componente2 =
        resumen2.varianza /
        resumen2.n;

    const varianzaError =
        componente1 +
        componente2;

    const errorEstandar =
        Math.sqrt(varianzaError);

    if (errorEstandar === 0) {
        throw new Error(
            "No puede calcularse la prueba porque ambos grupos carecen de variabilidad."
        );
    }

    const numerador =
        varianzaError ** 2;

    const denominador =
        (
            componente1 ** 2 /
            (resumen1.n - 1)
        ) +
        (
            componente2 ** 2 /
            (resumen2.n - 1)
        );

    const gradosLibertad =
        numerador /
        denominador;

    const diferenciaMedias =
        resumen1.media -
        resumen2.media;

    const estadisticoT =
        diferenciaMedias /
        errorEstandar;

    const valorP =
        valorPBilateralT(
            estadisticoT,
            gradosLibertad
        );

    return {
        id: "t-welch-independientes",
        nombre:
            "t de Welch para muestras independientes",
        metodo:
            "Varianzas no combinadas",
        grupo1: resumen1,
        grupo2: resumen2,
        diferenciaMedias,
        errorEstandar,
        estadistico: {
            simbolo: "t",
            valor: estadisticoT
        },
        gradosLibertad,
        valorP,
        intervaloConfianza:
            intervaloConfianza(
                diferenciaMedias,
                errorEstandar,
                gradosLibertad,
                nivelConfianza
            ),
        tamanioEfecto:
            calcularEfectosMedias(
                diferenciaMedias,
                resumen1.varianza,
                resumen2.varianza,
                resumen1.n,
                resumen2.n
            )
    };
}

function calcularRangos(
    grupo1,
    grupo2
) {
    const combinados = [
        ...grupo1.map(
            (valor) => ({
                valor,
                grupo: 1,
                rango: 0
            })
        ),
        ...grupo2.map(
            (valor) => ({
                valor,
                grupo: 2,
                rango: 0
            })
        )
    ].sort(
        (a, b) =>
            a.valor - b.valor
    );

    let indice = 0;
    let correccionEmpates = 0;

    while (
        indice <
        combinados.length
    ) {
        let final = indice + 1;

        while (
            final <
                combinados.length &&
            combinados[final].valor ===
                combinados[indice].valor
        ) {
            final += 1;
        }

        const cantidadEmpatados =
            final - indice;

        const rangoPromedio =
            (
                indice + 1 +
                final
            ) / 2;

        for (
            let posicion = indice;
            posicion < final;
            posicion += 1
        ) {
            combinados[posicion].rango =
                rangoPromedio;
        }

        if (cantidadEmpatados > 1) {
            correccionEmpates +=
                cantidadEmpatados ** 3 -
                cantidadEmpatados;
        }

        indice = final;
    }

    return {
        observaciones: combinados,
        correccionEmpates
    };
}

export function pruebaMannWhitney(
    grupo1,
    grupo2
) {
    const muestra1 =
        validarMuestra(
            grupo1,
            "El grupo 1"
        );

    const muestra2 =
        validarMuestra(
            grupo2,
            "El grupo 2"
        );

    const resumen1 =
        resumenDescriptivo(muestra1);

    const resumen2 =
        resumenDescriptivo(muestra2);

    const {
        observaciones,
        correccionEmpates
    } = calcularRangos(
        muestra1,
        muestra2
    );

    const sumaRangos1 =
        observaciones
            .filter(
                ({ grupo }) =>
                    grupo === 1
            )
            .reduce(
                (suma, observacion) =>
                    suma +
                    observacion.rango,
                0
            );

    const sumaRangos2 =
        observaciones
            .filter(
                ({ grupo }) =>
                    grupo === 2
            )
            .reduce(
                (suma, observacion) =>
                    suma +
                    observacion.rango,
                0
            );

    const n1 = resumen1.n;
    const n2 = resumen2.n;
    const total = n1 + n2;

    const u1 =
        sumaRangos1 -
        n1 * (n1 + 1) / 2;

    const u2 =
        sumaRangos2 -
        n2 * (n2 + 1) / 2;

    const u = Math.min(u1, u2);
    const mediaU = n1 * n2 / 2;

    const varianzaU =
        n1 *
        n2 /
        12 *
        (
            total +
            1 -
            correccionEmpates /
            (
                total *
                (total - 1)
            )
        );

    if (varianzaU <= 0) {
        throw new Error(
            "No puede calcularse Mann–Whitney porque todos los valores son idénticos."
        );
    }

    const desviacionU =
        Math.sqrt(varianzaU);

    const diferenciaU =
        u1 - mediaU;

    const correccionContinuidad =
        diferenciaU === 0
            ? 0
            : Math.sign(
                diferenciaU
            ) * 0.5;

    const estadisticoZ =
        (
            diferenciaU -
            correccionContinuidad
        ) /
        desviacionU;

    const valorP =
        limitarProbabilidad(
            2 *
            (
                1 -
                jStat.normal.cdf(
                    Math.abs(
                        estadisticoZ
                    ),
                    0,
                    1
                )
            )
        );

    const deltaCliff =
        2 * u1 /
        (n1 * n2) -
        1;

    return {
        id: "mann-whitney",
        nombre:
            "Prueba U de Mann–Whitney",
        metodoValorP:
            "Aproximación normal bilateral con corrección por continuidad y empates",
        grupo1: resumen1,
        grupo2: resumen2,
        sumaRangos1,
        sumaRangos2,
        estadistico: {
            simbolo: "U",
            valor: u,
            u1,
            u2
        },
        estadisticoZ,
        valorP,
        correccionEmpates,
        tamanioEfecto: {
            deltaCliff,
            correlacionBiserialRangos:
                deltaCliff,
            r:
                estadisticoZ /
                Math.sqrt(total)
        }
    };
}

export function analizarDosGrupos({
    grupo1,
    grupo2,
    prueba,
    nivelConfianza = 0.95
}) {
    switch (prueba) {
        case "student":
            return pruebaTStudentIndependiente(
                grupo1,
                grupo2,
                { nivelConfianza }
            );

        case "welch":
            return pruebaTWelch(
                grupo1,
                grupo2,
                { nivelConfianza }
            );

        case "mann-whitney":
            return pruebaMannWhitney(
                grupo1,
                grupo2
            );

        default:
            throw new Error(
                "La prueba solicitada no está disponible."
            );
    }
}
