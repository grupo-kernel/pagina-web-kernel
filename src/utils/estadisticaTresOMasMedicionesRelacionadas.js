import * as jStatModule from "jstat";

import {
    pruebaTStudentRelacionadas,
    pruebaWilcoxonRelacionadas
} from "./estadisticaDosMuestrasRelacionadas.js";

const jStat =
    jStatModule.jStat ??
    jStatModule.default?.jStat;

if (!jStat) {
    throw new Error(
        "No fue posible cargar el motor estadístico jStat."
    );
}

const limitarProbabilidad = (valor) =>
    Math.min(1, Math.max(0, valor));

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
    if (typeof valor === "string") {
        if (valor.trim() === "") {
            return Number.NaN;
        }

        return Number(
            valor.trim().replace(",", ".")
        );
    }

    return Number(valor);
}

function media(valores) {
    return valores.reduce(
        (suma, valor) => suma + valor,
        0
    ) / valores.length;
}

function mediana(valores) {
    const ordenados = [...valores].sort(
        (a, b) => a - b
    );
    const mitad = Math.floor(
        ordenados.length / 2
    );

    return ordenados.length % 2
        ? ordenados[mitad]
        : (
            ordenados[mitad - 1] +
            ordenados[mitad]
        ) / 2;
}

function varianzaMuestral(
    valores,
    promedio = media(valores)
) {
    return valores.reduce(
        (suma, valor) =>
            suma + (valor - promedio) ** 2,
        0
    ) / (valores.length - 1);
}

function resumenDescriptivo(valores) {
    const promedio = media(valores);
    const varianza = varianzaMuestral(
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

function normalizarMedicion(medicion, indice) {
    const esArreglo = Array.isArray(medicion);
    const originales = esArreglo
        ? medicion
        : medicion?.valores;

    if (!Array.isArray(originales)) {
        throw new TypeError(
            `La medición ${indice + 1} debe contener un arreglo llamado valores.`
        );
    }

    const valores = originales.map(
        convertirNumero
    );
    const posicionInvalida =
        valores.findIndex(
            (valor) => !Number.isFinite(valor)
        );

    if (posicionInvalida !== -1) {
        throw new TypeError(
            `La medición ${indice + 1} contiene un valor no numérico en la posición ${posicionInvalida + 1}.`
        );
    }

    if (valores.length < 2) {
        throw new RangeError(
            `La medición ${indice + 1} debe contener al menos dos observaciones.`
        );
    }

    const nombreOriginal = esArreglo
        ? ""
        : String(
            medicion?.nombre ?? ""
        ).trim();

    return {
        nombre:
            nombreOriginal ||
            `Medición ${indice + 1}`,
        valores,
        ...resumenDescriptivo(valores)
    };
}

function prepararMediciones(mediciones) {
    if (!Array.isArray(mediciones)) {
        throw new TypeError(
            "Las mediciones deben proporcionarse mediante un arreglo."
        );
    }

    if (mediciones.length < 3) {
        throw new RangeError(
            "El análisis requiere al menos tres mediciones relacionadas."
        );
    }

    const preparadas = mediciones.map(
        normalizarMedicion
    );
    const nSujetos = preparadas[0].n;

    const medicionIncompleta = preparadas.find(
        ({ n }) => n !== nSujetos
    );

    if (medicionIncompleta) {
        throw new RangeError(
            "Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes."
        );
    }

    const nombres = preparadas.map(
        ({ nombre }) => nombre
    );

    if (
        new Set(nombres).size !==
        nombres.length
    ) {
        throw new Error(
            "Cada medición debe tener un nombre diferente."
        );
    }

    return preparadas;
}

function construirMatriz(mediciones) {
    const nSujetos = mediciones[0].n;

    return Array.from(
        { length: nSujetos },
        (_, indiceSujeto) =>
            mediciones.map(
                ({ valores }) =>
                    valores[indiceSujeto]
            )
    );
}

function valorPDistribucionF(
    estadistico,
    gl1,
    gl2
) {
    if (estadistico === Infinity) {
        return 0;
    }

    return limitarProbabilidad(
        1 - jStat.centralF.cdf(
            estadistico,
            gl1,
            gl2
        )
    );
}

function valorPChiCuadrado(
    estadistico,
    gl
) {
    return limitarProbabilidad(
        1 - jStat.chisquare.cdf(
            estadistico,
            gl
        )
    );
}

function ajustarHolm(comparaciones) {
    const ordenadas = comparaciones
        .map(
            (comparacion, indiceOriginal) => ({
                ...comparacion,
                indiceOriginal
            })
        )
        .sort(
            (a, b) =>
                a.valorP - b.valorP
        );

    let anterior = 0;

    ordenadas.forEach(
        (comparacion, indice) => {
            const ajustado = Math.min(
                1,
                comparacion.valorP *
                    (ordenadas.length - indice)
            );

            comparacion.valorPAjustado =
                Math.max(
                    anterior,
                    ajustado
                );
            anterior =
                comparacion.valorPAjustado;
        }
    );

    return ordenadas
        .sort(
            (a, b) =>
                a.indiceOriginal -
                b.indiceOriginal
        )
        .map(
            ({ indiceOriginal, ...comparacion }) =>
                comparacion
        );
}

function pares(mediciones, callback) {
    const resultados = [];

    for (
        let i = 0;
        i < mediciones.length - 1;
        i += 1
    ) {
        for (
            let j = i + 1;
            j < mediciones.length;
            j += 1
        ) {
            resultados.push(
                callback(
                    mediciones[i],
                    mediciones[j],
                    i,
                    j
                )
            );
        }
    }

    return resultados;
}

function multiplicarMatrices(a, b) {
    const filas = a.length;
    const columnas = b[0].length;
    const dimension = b.length;

    return Array.from(
        { length: filas },
        (_, i) =>
            Array.from(
                { length: columnas },
                (_, j) => {
                    let suma = 0;

                    for (
                        let r = 0;
                        r < dimension;
                        r += 1
                    ) {
                        suma += a[i][r] * b[r][j];
                    }

                    return suma;
                }
            )
    );
}

function traza(matriz) {
    return matriz.reduce(
        (suma, fila, indice) =>
            suma + fila[indice],
        0
    );
}

function matrizCovarianzas(matrizDatos) {
    const n = matrizDatos.length;
    const k = matrizDatos[0].length;
    const medias = Array.from(
        { length: k },
        (_, j) =>
            media(
                matrizDatos.map(
                    (fila) => fila[j]
                )
            )
    );

    return Array.from(
        { length: k },
        (_, i) =>
            Array.from(
                { length: k },
                (_, j) => {
                    let suma = 0;

                    for (
                        let sujeto = 0;
                        sujeto < n;
                        sujeto += 1
                    ) {
                        suma +=
                            (
                                matrizDatos[sujeto][i] -
                                medias[i]
                            ) *
                            (
                                matrizDatos[sujeto][j] -
                                medias[j]
                            );
                    }

                    return suma / (n - 1);
                }
            )
    );
}

function calcularEpsilonEsfericidad(
    matrizDatos
) {
    const n = matrizDatos.length;
    const k = matrizDatos[0].length;
    const covarianzas =
        matrizCovarianzas(matrizDatos);
    const centrado = Array.from(
        { length: k },
        (_, i) =>
            Array.from(
                { length: k },
                (_, j) =>
                    (i === j ? 1 : 0) -
                    1 / k
            )
    );
    const covarianzaCentrada =
        multiplicarMatrices(
            multiplicarMatrices(
                centrado,
                covarianzas
            ),
            centrado
        );
    const trazaPrimera =
        traza(covarianzaCentrada);
    const cuadrado = multiplicarMatrices(
        covarianzaCentrada,
        covarianzaCentrada
    );
    const trazaCuadrado = traza(cuadrado);
    const limiteInferior = 1 / (k - 1);

    let greenhouseGeisser =
        trazaCuadrado === 0
            ? 1
            : trazaPrimera ** 2 /
                (
                    (k - 1) *
                    trazaCuadrado
                );

    greenhouseGeisser = Math.min(
        1,
        Math.max(
            limiteInferior,
            greenhouseGeisser
        )
    );

    const numeradorHF =
        n * (k - 1) *
            greenhouseGeisser -
        2;
    const denominadorHF =
        (k - 1) *
        (
            n - 1 -
            (k - 1) *
                greenhouseGeisser
        );
    let huynhFeldt =
        denominadorHF <= 0
            ? 1
            : numeradorHF /
                denominadorHF;

    huynhFeldt = Math.min(
        1,
        Math.max(
            limiteInferior,
            huynhFeldt
        )
    );

    return {
        limiteInferior,
        greenhouseGeisser,
        huynhFeldt,
        covarianzas
    };
}

function interpretarEtaParcial(valor) {
    const magnitud = Math.abs(valor);

    if (magnitud < 0.01) {
        return "Prácticamente nulo";
    }

    if (magnitud < 0.06) {
        return "Pequeño";
    }

    if (magnitud < 0.14) {
        return "Moderado";
    }

    return "Grande";
}

function interpretarKendallW(valor) {
    const magnitud = Math.abs(valor);

    if (magnitud < 0.10) {
        return "Muy pequeño";
    }

    if (magnitud < 0.30) {
        return "Pequeño";
    }

    if (magnitud < 0.50) {
        return "Moderado";
    }

    return "Grande";
}

function comparacionesTRelacionadas(
    mediciones,
    nivelConfianza
) {
    const alfa = 1 - nivelConfianza;
    const comparaciones = pares(
        mediciones,
        (medicion1, medicion2) => {
            const resultado =
                pruebaTStudentRelacionadas(
                    medicion1.valores,
                    medicion2.valores,
                    { nivelConfianza }
                );

            return {
                medicion1: medicion1.nombre,
                medicion2: medicion2.nombre,
                diferenciaMedia:
                    resultado.diferenciaMedia,
                estadisticoT:
                    resultado.estadistico.valor,
                gradosLibertad:
                    resultado.gradosLibertad,
                valorP: resultado.valorP,
                intervaloConfianza:
                    resultado.intervaloConfianza,
                dZ:
                    resultado.tamanioEfecto.dZ
            };
        }
    );

    return {
        id: "t-pareadas-holm",
        nombre:
            "Comparaciones t pareadas con ajuste de Holm",
        metodo:
            "Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",
        recomendado: false,
        comparaciones: ajustarHolm(
            comparaciones
        ).map(
            (comparacion) => ({
                ...comparacion,
                significativo:
                    comparacion.valorPAjustado <
                    alfa
            })
        )
    };
}

function comparacionesWilcoxonRelacionadas(
    mediciones,
    nivelConfianza
) {
    const alfa = 1 - nivelConfianza;
    const comparaciones = pares(
        mediciones,
        (medicion1, medicion2) => {
            const resultado =
                pruebaWilcoxonRelacionadas(
                    medicion1.valores,
                    medicion2.valores
                );

            return {
                medicion1: medicion1.nombre,
                medicion2: medicion2.nombre,
                estadisticoW:
                    resultado.estadistico.valor,
                estadisticoZ:
                    resultado.estadisticoZ,
                valorP: resultado.valorP,
                correlacionBiserialRangos:
                    resultado.tamanioEfecto
                        .correlacionBiserialRangos,
                r:
                    resultado.tamanioEfecto.r,
                nEfectivo:
                    resultado.nEfectivo,
                cantidadCeros:
                    resultado.cantidadCeros
            };
        }
    );

    return {
        id: "wilcoxon-holm",
        nombre:
            "Comparaciones de Wilcoxon con ajuste de Holm",
        metodo:
            "Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",
        recomendado: false,
        comparaciones: ajustarHolm(
            comparaciones
        ).map(
            (comparacion) => ({
                ...comparacion,
                significativo:
                    comparacion.valorPAjustado <
                    alfa
            })
        )
    };
}

function asignarRangosFila(valores) {
    const observaciones = valores
        .map(
            (valor, indice) => ({
                valor,
                indice,
                rango: 0
            })
        )
        .sort(
            (a, b) => a.valor - b.valor
        );

    let posicion = 0;
    let correccionEmpates = 0;
    let cantidadGruposEmpatados = 0;

    while (posicion < observaciones.length) {
        let final = posicion + 1;

        while (
            final < observaciones.length &&
            observaciones[final].valor ===
                observaciones[posicion].valor
        ) {
            final += 1;
        }

        const cantidad = final - posicion;
        const rangoPromedio =
            (posicion + 1 + final) / 2;

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
                cantidad ** 3 - cantidad;
        }

        posicion = final;
    }

    const rangos = new Array(
        valores.length
    ).fill(0);

    observaciones.forEach(
        ({ indice, rango }) => {
            rangos[indice] = rango;
        }
    );

    return {
        rangos,
        correccionEmpates,
        cantidadGruposEmpatados
    };
}

export function pruebaAnovaMedidasRepetidas(
    mediciones,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const datos = prepararMediciones(
        mediciones
    );
    const matriz = construirMatriz(datos);
    const nSujetos = matriz.length;
    const k = datos.length;
    const todos = matriz.flat();
    const mediaGeneral = media(todos);
    const mediasSujetos = matriz.map(
        (fila) => media(fila)
    );

    const sumaCuadradosTotal =
        todos.reduce(
            (suma, valor) =>
                suma +
                (valor - mediaGeneral) ** 2,
            0
        );
    const sumaCuadradosMediciones =
        nSujetos *
        datos.reduce(
            (suma, medicion) =>
                suma +
                (
                    medicion.media -
                    mediaGeneral
                ) ** 2,
            0
        );
    const sumaCuadradosSujetos =
        k *
        mediasSujetos.reduce(
            (suma, promedio) =>
                suma +
                (
                    promedio -
                    mediaGeneral
                ) ** 2,
            0
        );
    const sumaCuadradosError =
        Math.max(
            0,
            sumaCuadradosTotal -
                sumaCuadradosMediciones -
                sumaCuadradosSujetos
        );

    const glMediciones = k - 1;
    const glSujetos = nSujetos - 1;
    const glError =
        glMediciones * glSujetos;
    const cuadradoMedioMediciones =
        sumaCuadradosMediciones /
        glMediciones;
    const cuadradoMedioError =
        sumaCuadradosError /
        glError;
    const estadisticoF =
        cuadradoMedioError === 0
            ? cuadradoMedioMediciones === 0
                ? 0
                : Infinity
            : cuadradoMedioMediciones /
                cuadradoMedioError;
    const valorP = valorPDistribucionF(
        estadisticoF,
        glMediciones,
        glError
    );
    const etaCuadradoParcial =
        sumaCuadradosMediciones +
            sumaCuadradosError ===
        0
            ? 0
            : sumaCuadradosMediciones /
                (
                    sumaCuadradosMediciones +
                    sumaCuadradosError
                );
    const etaCuadradoGeneralizado =
        sumaCuadradosMediciones +
            sumaCuadradosError +
            sumaCuadradosSujetos ===
        0
            ? 0
            : sumaCuadradosMediciones /
                (
                    sumaCuadradosMediciones +
                    sumaCuadradosError +
                    sumaCuadradosSujetos
                );
    const esfericidad =
        calcularEpsilonEsfericidad(
            matriz
        );
    const glGG1 =
        glMediciones *
        esfericidad.greenhouseGeisser;
    const glGG2 =
        glError *
        esfericidad.greenhouseGeisser;
    const glHF1 =
        glMediciones *
        esfericidad.huynhFeldt;
    const glHF2 =
        glError *
        esfericidad.huynhFeldt;
    const valorPGG = valorPDistribucionF(
        estadisticoF,
        glGG1,
        glGG2
    );
    const valorPHF = valorPDistribucionF(
        estadisticoF,
        glHF1,
        glHF2
    );
    const alfa = 1 - nivelConfianza;
    const postHoc =
        comparacionesTRelacionadas(
            datos,
            nivelConfianza
        );

    postHoc.recomendado =
        valorPGG < alfa;

    return {
        id: "anova-medidas-repetidas",
        nombre:
            "ANOVA de medidas repetidas",
        metodo:
            "ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",
        mediciones: datos,
        nSujetos,
        numeroMediciones: k,
        mediaGeneral,
        mediasSujetos,
        estadistico: {
            simbolo: "F",
            valor: estadisticoF
        },
        gradosLibertad: {
            numerador: glMediciones,
            denominador: glError
        },
        valorP,
        nivelConfianza,
        alfa,
        significativo: valorP < alfa,
        tablaAnova: {
            mediciones: {
                sumaCuadrados:
                    sumaCuadradosMediciones,
                gradosLibertad:
                    glMediciones,
                cuadradoMedio:
                    cuadradoMedioMediciones
            },
            sujetos: {
                sumaCuadrados:
                    sumaCuadradosSujetos,
                gradosLibertad:
                    glSujetos
            },
            error: {
                sumaCuadrados:
                    sumaCuadradosError,
                gradosLibertad:
                    glError,
                cuadradoMedio:
                    cuadradoMedioError
            },
            total: {
                sumaCuadrados:
                    sumaCuadradosTotal,
                gradosLibertad:
                    nSujetos * k - 1
            }
        },
        esfericidad: {
            ...esfericidad,
            greenhouseGeisser: {
                epsilon:
                    esfericidad.greenhouseGeisser,
                gradosLibertadNumerador:
                    glGG1,
                gradosLibertadDenominador:
                    glGG2,
                valorP: valorPGG,
                significativo:
                    valorPGG < alfa
            },
            huynhFeldt: {
                epsilon:
                    esfericidad.huynhFeldt,
                gradosLibertadNumerador:
                    glHF1,
                gradosLibertadDenominador:
                    glHF2,
                valorP: valorPHF,
                significativo:
                    valorPHF < alfa
            },
            nota:
                "Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."
        },
        tamanioEfecto: {
            etaCuadradoParcial,
            etaCuadradoGeneralizado,
            interpretacion:
                interpretarEtaParcial(
                    etaCuadradoParcial
                )
        },
        postHoc
    };
}

export function pruebaFriedman(
    mediciones,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const datos = prepararMediciones(
        mediciones
    );
    const matriz = construirMatriz(datos);
    const nSujetos = matriz.length;
    const k = datos.length;
    const sumaRangos = new Array(k).fill(0);
    let correccionEmpatesTotal = 0;
    let cantidadGruposEmpatados = 0;

    matriz.forEach((fila) => {
        const resultadoRangos =
            asignarRangosFila(fila);

        resultadoRangos.rangos.forEach(
            (rango, indice) => {
                sumaRangos[indice] += rango;
            }
        );
        correccionEmpatesTotal +=
            resultadoRangos.correccionEmpates;
        cantidadGruposEmpatados +=
            resultadoRangos
                .cantidadGruposEmpatados;
    });

    const estadisticoBruto =
        12 /
            (
                nSujetos *
                k *
                (k + 1)
            ) *
            sumaRangos.reduce(
                (suma, rango) =>
                    suma + rango ** 2,
                0
            ) -
        3 * nSujetos * (k + 1);
    const factorCorreccion =
        1 -
        correccionEmpatesTotal /
            (
                nSujetos *
                (k ** 3 - k)
            );
    const estadisticoFriedman =
        factorCorreccion <= 0
            ? 0
            : estadisticoBruto /
                factorCorreccion;
    const gl = k - 1;
    const valorP = valorPChiCuadrado(
        estadisticoFriedman,
        gl
    );
    const kendallW =
        nSujetos * (k - 1) === 0
            ? 0
            : estadisticoFriedman /
                (
                    nSujetos *
                    (k - 1)
                );
    const alfa = 1 - nivelConfianza;
    const medicionesConRangos =
        datos.map(
            (medicion, indice) => ({
                ...medicion,
                sumaRangos:
                    sumaRangos[indice],
                rangoMedio:
                    sumaRangos[indice] /
                    nSujetos
            })
        );
    const postHoc =
        comparacionesWilcoxonRelacionadas(
            datos,
            nivelConfianza
        );

    postHoc.recomendado = valorP < alfa;

    return {
        id: "friedman",
        nombre: "Prueba de Friedman",
        metodo:
            "Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",
        mediciones:
            medicionesConRangos,
        nSujetos,
        numeroMediciones: k,
        estadistico: {
            simbolo: "χ²_F",
            valor: estadisticoFriedman,
            sinCorreccion:
                estadisticoBruto
        },
        gradosLibertad: {
            valor: gl
        },
        valorP,
        nivelConfianza,
        alfa,
        significativo: valorP < alfa,
        empates: {
            factorCorreccion,
            sumaCorreccion:
                correccionEmpatesTotal,
            cantidadGruposEmpatados
        },
        tamanioEfecto: {
            kendallW,
            interpretacion:
                interpretarKendallW(
                    kendallW
                )
        },
        postHoc
    };
}

export function analizarTresOMasMedicionesRelacionadas({
    mediciones,
    prueba,
    nivelConfianza = 0.95
}) {
    switch (prueba) {
        case "anova-medidas-repetidas":
        case "anova-repetidas":
            return pruebaAnovaMedidasRepetidas(
                mediciones,
                { nivelConfianza }
            );

        case "friedman":
            return pruebaFriedman(
                mediciones,
                { nivelConfianza }
            );

        default:
            throw new Error(
                "La prueba solicitada no está disponible."
            );
    }
}
