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

function validarSerie(valores, nombre) {
    if (!Array.isArray(valores)) {
        throw new TypeError(
            `${nombre} debe ser un arreglo de valores.`
        );
    }

    const serie = valores.map(convertirNumero);

    const posicionInvalida =
        serie.findIndex(
            (valor) => !Number.isFinite(valor)
        );

    if (posicionInvalida !== -1) {
        throw new TypeError(
            `${nombre} contiene un valor no numérico en la posición ${
                posicionInvalida + 1
            }.`
        );
    }

    if (serie.length < 2) {
        throw new RangeError(
            `${nombre} debe contener al menos dos observaciones.`
        );
    }

    return serie;
}

function validarParejas(medicion1, medicion2) {
    const serie1 = validarSerie(
        medicion1,
        "La medición 1"
    );

    const serie2 = validarSerie(
        medicion2,
        "La medición 2"
    );

    if (serie1.length !== serie2.length) {
        throw new RangeError(
            "Las dos mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes o pares."
        );
    }

    return {
        medicion1: serie1,
        medicion2: serie2
    };
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
    if (valores.length < 2) {
        return 0;
    }

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

function resumenDescriptivo(valores) {
    const promedio = media(valores);
    const varianza =
        varianzaMuestral(
            valores,
            promedio
        );

    return {
        n: valores.length,
        media: promedio,
        mediana: mediana(valores),
        varianza,
        desviacionEstandar:
            Math.sqrt(varianza),
        minimo: Math.min(...valores),
        maximo: Math.max(...valores)
    };
}

function correlacionPearson(valores1, valores2) {
    const media1 = media(valores1);
    const media2 = media(valores2);

    let numerador = 0;
    let sumaCuadrados1 = 0;
    let sumaCuadrados2 = 0;

    for (
        let indice = 0;
        indice < valores1.length;
        indice += 1
    ) {
        const desviacion1 =
            valores1[indice] - media1;

        const desviacion2 =
            valores2[indice] - media2;

        numerador +=
            desviacion1 * desviacion2;

        sumaCuadrados1 +=
            desviacion1 ** 2;

        sumaCuadrados2 +=
            desviacion2 ** 2;
    }

    const denominador = Math.sqrt(
        sumaCuadrados1 *
        sumaCuadrados2
    );

    if (denominador === 0) {
        return Number.NaN;
    }

    return numerador / denominador;
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

function intervaloConfianzaDiferencia(
    diferenciaMedia,
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
        margen,
        inferior:
            diferenciaMedia - margen,
        superior:
            diferenciaMedia + margen
    };
}

function crearDiferencias(
    medicion1,
    medicion2
) {
    return medicion1.map(
        (valor, indice) =>
            valor - medicion2[indice]
    );
}

export function pruebaTStudentRelacionadas(
    medicion1,
    medicion2,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const parejas = validarParejas(
        medicion1,
        medicion2
    );

    const diferencias = crearDiferencias(
        parejas.medicion1,
        parejas.medicion2
    );

    const resumen1 =
        resumenDescriptivo(
            parejas.medicion1
        );

    const resumen2 =
        resumenDescriptivo(
            parejas.medicion2
        );

    const resumenDiferencias =
        resumenDescriptivo(
            diferencias
        );

    const n = diferencias.length;
    const gradosLibertad = n - 1;

    const errorEstandar =
        resumenDiferencias
            .desviacionEstandar /
        Math.sqrt(n);

    if (errorEstandar === 0) {
        if (resumenDiferencias.media === 0) {
            return {
                id:
                    "t-student-relacionadas",
                nombre:
                    "t de Student para muestras relacionadas",
                metodo:
                    "Todas las diferencias pareadas son iguales a cero",
                medicion1: resumen1,
                medicion2: resumen2,
                diferencias: {
                    ...resumenDiferencias,
                    valores: diferencias
                },
                nParejas: n,
                diferenciaMedia: 0,
                errorEstandar: 0,
                estadistico: {
                    simbolo: "t",
                    valor: 0
                },
                gradosLibertad,
                valorP: 1,
                intervaloConfianza: {
                    nivel: nivelConfianza,
                    valorCritico:
                        Number.NaN,
                    margen: 0,
                    inferior: 0,
                    superior: 0
                },
                tamanioEfecto: {
                    dZ: 0,
                    gZ: 0,
                    correlacionPareada:
                        correlacionPearson(
                            parejas.medicion1,
                            parejas.medicion2
                        )
                }
            };
        }

        throw new Error(
            "Las diferencias pareadas son constantes y no permiten estimar el error estándar de la prueba t."
        );
    }

    const estadisticoT =
        resumenDiferencias.media /
        errorEstandar;

    const valorP =
        valorPBilateralT(
            estadisticoT,
            gradosLibertad
        );

    const dZ =
        resumenDiferencias.media /
        resumenDiferencias
            .desviacionEstandar;

    const correccionHedges =
        gradosLibertad > 1
            ? 1 -
                3 /
                (
                    4 * gradosLibertad -
                    1
                )
            : 1;

    return {
        id:
            "t-student-relacionadas",
        nombre:
            "t de Student para muestras relacionadas",
        metodo:
            "Prueba bilateral aplicada a la media de las diferencias pareadas",
        medicion1: resumen1,
        medicion2: resumen2,
        diferencias: {
            ...resumenDiferencias,
            valores: diferencias
        },
        nParejas: n,
        diferenciaMedia:
            resumenDiferencias.media,
        errorEstandar,
        estadistico: {
            simbolo: "t",
            valor: estadisticoT
        },
        gradosLibertad,
        valorP,
        intervaloConfianza:
            intervaloConfianzaDiferencia(
                resumenDiferencias.media,
                errorEstandar,
                gradosLibertad,
                nivelConfianza
            ),
        tamanioEfecto: {
            dZ,
            gZ:
                correccionHedges * dZ,
            correccionHedges,
            correlacionPareada:
                correlacionPearson(
                    parejas.medicion1,
                    parejas.medicion2
                )
        }
    };
}

function asignarRangosAbsolutos(
    diferenciasNoCero
) {
    const observaciones =
        diferenciasNoCero
            .map(
                (diferencia, indice) => ({
                    indice,
                    diferencia,
                    absoluto:
                        Math.abs(diferencia),
                    signo:
                        Math.sign(diferencia),
                    rango: 0
                })
            )
            .sort(
                (a, b) =>
                    a.absoluto -
                    b.absoluto
            );

    let posicion = 0;
    let correccionEmpates = 0;
    let cantidadGruposEmpatados = 0;

    while (
        posicion < observaciones.length
    ) {
        let final = posicion + 1;

        while (
            final < observaciones.length &&
            observaciones[final]
                .absoluto ===
                observaciones[posicion]
                    .absoluto
        ) {
            final += 1;
        }

        const cantidad =
            final - posicion;

        const rangoPromedio =
            (
                posicion + 1 +
                final
            ) / 2;

        for (
            let indice = posicion;
            indice < final;
            indice += 1
        ) {
            observaciones[indice].rango =
                rangoPromedio;
        }

        if (cantidad > 1) {
            cantidadGruposEmpatados += 1;
            correccionEmpates +=
                cantidad ** 3 -
                cantidad;
        }

        posicion = final;
    }

    return {
        observaciones,
        correccionEmpates,
        cantidadGruposEmpatados
    };
}

function valorPExactoWilcoxon(
    n,
    estadisticoW
) {
    const sumaTotal =
        n * (n + 1) / 2;

    const conteos =
        new Array(sumaTotal + 1)
            .fill(0);

    conteos[0] = 1;

    let sumaAlcanzable = 0;

    for (
        let rango = 1;
        rango <= n;
        rango += 1
    ) {
        for (
            let suma = sumaAlcanzable;
            suma >= 0;
            suma -= 1
        ) {
            if (conteos[suma] > 0) {
                conteos[suma + rango] +=
                    conteos[suma];
            }
        }

        sumaAlcanzable += rango;
    }

    const limite =
        Math.floor(estadisticoW + 1e-12);

    const combinacionesExtremas =
        conteos
            .slice(0, limite + 1)
            .reduce(
                (suma, cantidad) =>
                    suma + cantidad,
                0
            );

    const totalCombinaciones =
        2 ** n;

    return limitarProbabilidad(
        2 *
        combinacionesExtremas /
        totalCombinaciones
    );
}

export function pruebaWilcoxonRelacionadas(
    medicion1,
    medicion2
) {
    const parejas = validarParejas(
        medicion1,
        medicion2
    );

    const diferencias = crearDiferencias(
        parejas.medicion1,
        parejas.medicion2
    );

    const resumen1 =
        resumenDescriptivo(
            parejas.medicion1
        );

    const resumen2 =
        resumenDescriptivo(
            parejas.medicion2
        );

    const diferenciasNoCero =
        diferencias.filter(
            (diferencia) =>
                diferencia !== 0
        );

    const cantidadCeros =
        diferencias.length -
        diferenciasNoCero.length;

    if (diferenciasNoCero.length === 0) {
        return {
            id: "wilcoxon-relacionadas",
            nombre:
                "Prueba de rangos con signo de Wilcoxon",
            metodoValorP:
                "Todas las diferencias pareadas son iguales a cero",
            medicion1: resumen1,
            medicion2: resumen2,
            diferencias: {
                n: diferencias.length,
                media: 0,
                mediana: 0,
                varianza: 0,
                desviacionEstandar: 0,
                minimo: 0,
                maximo: 0,
                valores: diferencias
            },
            nParejas:
                diferencias.length,
            nEfectivo: 0,
            cantidadCeros,
            sumaRangosPositivos: 0,
            sumaRangosNegativos: 0,
            estadistico: {
                simbolo: "W",
                valor: 0,
                wPositivo: 0,
                wNegativo: 0
            },
            estadisticoZ: 0,
            valorP: 1,
            correccionEmpates: 0,
            cantidadGruposEmpatados: 0,
            tamanioEfecto: {
                correlacionBiserialRangos: 0,
                r: 0
            }
        };
    }

    const {
        observaciones,
        correccionEmpates,
        cantidadGruposEmpatados
    } = asignarRangosAbsolutos(
        diferenciasNoCero
    );

    const sumaRangosPositivos =
        observaciones
            .filter(
                ({ signo }) => signo > 0
            )
            .reduce(
                (suma, observacion) =>
                    suma +
                    observacion.rango,
                0
            );

    const sumaRangosNegativos =
        observaciones
            .filter(
                ({ signo }) => signo < 0
            )
            .reduce(
                (suma, observacion) =>
                    suma +
                    observacion.rango,
                0
            );

    const nEfectivo =
        diferenciasNoCero.length;

    const sumaTotalRangos =
        nEfectivo *
        (nEfectivo + 1) / 2;

    const estadisticoW = Math.min(
        sumaRangosPositivos,
        sumaRangosNegativos
    );

    const mediaW =
        nEfectivo *
        (nEfectivo + 1) / 4;

    const varianzaW =
        nEfectivo *
        (nEfectivo + 1) *
        (2 * nEfectivo + 1) /
        24 -
        correccionEmpates / 48;

    if (varianzaW <= 0) {
        throw new Error(
            "No fue posible calcular la varianza del estadístico de Wilcoxon."
        );
    }

    const desviacionW =
        Math.sqrt(varianzaW);

    const diferenciaRespectoMedia =
        sumaRangosPositivos -
        mediaW;

    const correccionContinuidad =
        diferenciaRespectoMedia === 0
            ? 0
            : Math.sign(
                diferenciaRespectoMedia
            ) * 0.5;

    const estadisticoZ =
        (
            diferenciaRespectoMedia -
            correccionContinuidad
        ) /
        desviacionW;

    const puedeUsarExacta =
        correccionEmpates === 0 &&
        nEfectivo <= 25;

    const valorP = puedeUsarExacta
        ? valorPExactoWilcoxon(
            nEfectivo,
            estadisticoW
        )
        : limitarProbabilidad(
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

    const correlacionBiserialRangos =
        (
            sumaRangosPositivos -
            sumaRangosNegativos
        ) /
        sumaTotalRangos;

    return {
        id: "wilcoxon-relacionadas",
        nombre:
            "Prueba de rangos con signo de Wilcoxon",
        metodoValorP: puedeUsarExacta
            ? "Valor p bilateral exacto; las diferencias iguales a cero se excluyen"
            : "Aproximación normal bilateral con corrección por continuidad y empates; las diferencias iguales a cero se excluyen",
        medicion1: resumen1,
        medicion2: resumen2,
        diferencias: {
            ...resumenDescriptivo(
                diferencias
            ),
            valores: diferencias
        },
        nParejas:
            diferencias.length,
        nEfectivo,
        cantidadCeros,
        sumaRangosPositivos,
        sumaRangosNegativos,
        estadistico: {
            simbolo: "W",
            valor: estadisticoW,
            wPositivo:
                sumaRangosPositivos,
            wNegativo:
                sumaRangosNegativos
        },
        estadisticoZ,
        valorP,
        correccionEmpates,
        cantidadGruposEmpatados,
        tamanioEfecto: {
            correlacionBiserialRangos,
            r:
                estadisticoZ /
                Math.sqrt(nEfectivo)
        }
    };
}

export function analizarMuestrasRelacionadas({
    medicion1,
    medicion2,
    prueba,
    nivelConfianza = 0.95
}) {
    switch (prueba) {
        case "student-pareada":
            return pruebaTStudentRelacionadas(
                medicion1,
                medicion2,
                { nivelConfianza }
            );

        case "wilcoxon":
            return pruebaWilcoxonRelacionadas(
                medicion1,
                medicion2
            );

        default:
            throw new Error(
                "La prueba solicitada no está disponible."
            );
    }
}
