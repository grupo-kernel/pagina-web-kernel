import * as jStatModule from "jstat";

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
        const limpio = valor.trim();

        if (!limpio) {
            return Number.NaN;
        }

        return Number(
            limpio.replace(",", ".")
        );
    }

    return Number(valor);
}

function convertirVariableNumerica(
    valores,
    nombre
) {
    if (!Array.isArray(valores)) {
        throw new TypeError(
            `${nombre} debe proporcionarse mediante un arreglo.`
        );
    }

    const convertidos = valores.map(
        convertirNumero
    );
    const posicionInvalida =
        convertidos.findIndex(
            (valor) => !Number.isFinite(valor)
        );

    if (posicionInvalida !== -1) {
        throw new TypeError(
            `${nombre} contiene un valor no numérico en la posición ${posicionInvalida + 1}.`
        );
    }

    return convertidos;
}

function validarParesNumericos(
    x,
    y,
    nombreX,
    nombreY,
    minimo = 3
) {
    const valoresX = convertirVariableNumerica(
        x,
        nombreX
    );
    const valoresY = convertirVariableNumerica(
        y,
        nombreY
    );

    if (valoresX.length !== valoresY.length) {
        throw new RangeError(
            "Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila."
        );
    }

    if (valoresX.length < minimo) {
        throw new RangeError(
            `El análisis requiere al menos ${minimo} pares completos.`
        );
    }

    return {
        x: valoresX,
        y: valoresY,
        n: valoresX.length
    };
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

function covarianzaMuestral(
    x,
    y,
    mediaX = media(x),
    mediaY = media(y)
) {
    return x.reduce(
        (suma, valorX, indice) =>
            suma +
            (valorX - mediaX) *
            (y[indice] - mediaY),
        0
    ) / (x.length - 1);
}

function correlacionPearsonInterna(x, y) {
    const mediaX = media(x);
    const mediaY = media(y);
    const varianzaX =
        varianzaMuestral(x, mediaX);
    const varianzaY =
        varianzaMuestral(y, mediaY);

    if (varianzaX === 0 || varianzaY === 0) {
        throw new RangeError(
            "No es posible calcular una correlación cuando una de las variables no presenta variación."
        );
    }

    const covarianza =
        covarianzaMuestral(
            x,
            y,
            mediaX,
            mediaY
        );
    const r = covarianza /
        Math.sqrt(
            varianzaX * varianzaY
        );

    return {
        r: Math.max(-1, Math.min(1, r)),
        covarianza,
        mediaX,
        mediaY,
        varianzaX,
        varianzaY
    };
}

function estadisticoTCorrelacion(
    coeficiente,
    n
) {
    const gl = n - 2;

    if (Math.abs(coeficiente) >= 1) {
        return {
            valor: coeficiente < 0
                ? -Infinity
                : Infinity,
            gradosLibertad: gl,
            valorP: 0
        };
    }

    const t = coeficiente *
        Math.sqrt(
            gl /
            (1 - coeficiente ** 2)
        );
    const valorP =
        limitarProbabilidad(
            2 *
            (
                1 -
                jStat.studentt.cdf(
                    Math.abs(t),
                    gl
                )
            )
        );

    return {
        valor: t,
        gradosLibertad: gl,
        valorP
    };
}

function intervaloFisher(
    coeficiente,
    n,
    nivelConfianza
) {
    if (n <= 3) {
        return {
            disponible: false,
            nivel: nivelConfianza,
            inferior: null,
            superior: null,
            metodo:
                "La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."
        };
    }

    const alfa = 1 - nivelConfianza;
    const zCritico = jStat.normal.inv(
        1 - alfa / 2,
        0,
        1
    );
    const limitado = Math.max(
        -1 + 1e-15,
        Math.min(
            1 - 1e-15,
            coeficiente
        )
    );
    const z = Math.atanh(limitado);
    const errorEstandar =
        1 / Math.sqrt(n - 3);
    const inferior =
        Math.tanh(
            z - zCritico * errorEstandar
        );
    const superior =
        Math.tanh(
            z + zCritico * errorEstandar
        );

    return {
        disponible: true,
        nivel: nivelConfianza,
        inferior,
        superior,
        errorEstandar,
        metodo:
            "Intervalo aproximado mediante la transformación z de Fisher."
    };
}

function interpretarMagnitud(coeficiente) {
    const magnitud = Math.abs(coeficiente);

    if (magnitud < 0.10) {
        return "Prácticamente nula";
    }

    if (magnitud < 0.30) {
        return "Pequeña";
    }

    if (magnitud < 0.50) {
        return "Moderada";
    }

    if (magnitud < 0.70) {
        return "Grande";
    }

    return "Muy grande";
}

function interpretarDireccion(coeficiente) {
    if (coeficiente > 0) {
        return "Positiva";
    }

    if (coeficiente < 0) {
        return "Negativa";
    }

    return "Sin dirección";
}

function crearDatosGrafico(
    x,
    y
) {
    return x.map(
        (valorX, indice) => ({
            x: valorX,
            y: y[indice],
            indice: indice + 1
        })
    );
}

function asignarRangos(valores) {
    const ordenados = valores
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

    const gruposEmpatados = [];
    let posicion = 0;

    while (posicion < ordenados.length) {
        let final = posicion + 1;

        while (
            final < ordenados.length &&
            ordenados[final].valor ===
                ordenados[posicion].valor
        ) {
            final += 1;
        }

        const cantidad = final - posicion;
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
            ordenados[indice].rango =
                rangoPromedio;
        }

        if (cantidad > 1) {
            gruposEmpatados.push({
                valor:
                    ordenados[posicion].valor,
                cantidad
            });
        }

        posicion = final;
    }

    const rangos = new Array(
        valores.length
    );

    ordenados.forEach(
        ({ indice, rango }) => {
            rangos[indice] = rango;
        }
    );

    return {
        rangos,
        gruposEmpatados,
        cantidadValoresEmpatados:
            gruposEmpatados.reduce(
                (suma, grupo) =>
                    suma + grupo.cantidad,
                0
            )
    };
}

function tamaniosGruposEmpatados(valores) {
    const frecuencias = new Map();

    valores.forEach((valor) => {
        const clave =
            typeof valor === "number"
                ? `n:${valor}`
                : `s:${String(valor)}`;

        frecuencias.set(
            clave,
            (frecuencias.get(clave) || 0) + 1
        );
    });

    return [...frecuencias.values()]
        .filter((cantidad) => cantidad > 1);
}

function sumatoriaEmpates(
    tamanios,
    transformacion
) {
    return tamanios.reduce(
        (suma, cantidad) =>
            suma + transformacion(cantidad),
        0
    );
}

function intervaloNormalCoeficiente(
    coeficiente,
    errorEstandar,
    nivelConfianza
) {
    const alfa = 1 - nivelConfianza;
    const zCritico = jStat.normal.inv(
        1 - alfa / 2,
        0,
        1
    );

    return {
        disponible:
            Number.isFinite(errorEstandar),
        nivel: nivelConfianza,
        inferior: Number.isFinite(errorEstandar)
            ? Math.max(
                -1,
                coeficiente -
                    zCritico * errorEstandar
            )
            : null,
        superior: Number.isFinite(errorEstandar)
            ? Math.min(
                1,
                coeficiente +
                    zCritico * errorEstandar
            )
            : null,
        errorEstandar,
        metodo:
            "Intervalo asintótico basado en la aproximación normal."
    };
}

function validarCategorias(
    categorias,
    nombre
) {
    if (!Array.isArray(categorias)) {
        throw new TypeError(
            `${nombre} debe proporcionarse mediante un arreglo.`
        );
    }

    return categorias.map(
        (valor, indice) => {
            const limpio =
                String(valor ?? "").trim();

            if (!limpio) {
                throw new TypeError(
                    `${nombre} contiene una categoría vacía en la posición ${indice + 1}.`
                );
            }

            return limpio;
        }
    );
}

export function pruebaPearson(
    x,
    y,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95,
        nombreX = "Variable X",
        nombreY = "Variable Y"
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const datos = validarParesNumericos(
        x,
        y,
        nombreX,
        nombreY
    );
    const correlacion =
        correlacionPearsonInterna(
            datos.x,
            datos.y
        );
    const prueba =
        estadisticoTCorrelacion(
            correlacion.r,
            datos.n
        );
    const alfa = 1 - nivelConfianza;

    return {
        id: "pearson",
        nombre: "Correlación de Pearson",
        metodo:
            "Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",
        n: datos.n,
        variables: {
            x: {
                nombre: nombreX,
                valores: datos.x,
                ...resumenDescriptivo(
                    datos.x
                )
            },
            y: {
                nombre: nombreY,
                valores: datos.y,
                ...resumenDescriptivo(
                    datos.y
                )
            }
        },
        coeficiente: {
            simbolo: "r",
            valor: correlacion.r
        },
        estadistico: {
            simbolo: "t",
            valor: prueba.valor
        },
        gradosLibertad:
            prueba.gradosLibertad,
        valorP: prueba.valorP,
        nivelConfianza,
        alfa,
        significativo:
            prueba.valorP < alfa,
        intervaloConfianza:
            intervaloFisher(
                correlacion.r,
                datos.n,
                nivelConfianza
            ),
        tamanioEfecto: {
            valor: correlacion.r,
            magnitud:
                interpretarMagnitud(
                    correlacion.r
                ),
            direccion:
                interpretarDireccion(
                    correlacion.r
                ),
            rCuadrado:
                correlacion.r ** 2
        },
        detalles: {
            covarianza:
                correlacion.covarianza,
            aproximacionInferencial:
                "Distribución t con n − 2 grados de libertad."
        },
        diagnosticos: [
            "Revise el diagrama de dispersión para confirmar linealidad.",
            "Examine valores atípicos influyentes y la independencia de las observaciones.",
            "Para la inferencia clásica conviene considerar la normalidad bivariada."
        ],
        datosGrafico:
            crearDatosGrafico(
                datos.x,
                datos.y
            )
    };
}

export function pruebaSpearman(
    x,
    y,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95,
        nombreX = "Variable X",
        nombreY = "Variable Y"
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const datos = validarParesNumericos(
        x,
        y,
        nombreX,
        nombreY
    );
    const rangosX =
        asignarRangos(datos.x);
    const rangosY =
        asignarRangos(datos.y);
    const correlacion =
        correlacionPearsonInterna(
            rangosX.rangos,
            rangosY.rangos
        );
    const prueba =
        estadisticoTCorrelacion(
            correlacion.r,
            datos.n
        );
    const alfa = 1 - nivelConfianza;

    return {
        id: "spearman",
        nombre: "Rho de Spearman",
        metodo:
            "Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",
        n: datos.n,
        variables: {
            x: {
                nombre: nombreX,
                valores: datos.x,
                rangos: rangosX.rangos,
                ...resumenDescriptivo(
                    datos.x
                )
            },
            y: {
                nombre: nombreY,
                valores: datos.y,
                rangos: rangosY.rangos,
                ...resumenDescriptivo(
                    datos.y
                )
            }
        },
        coeficiente: {
            simbolo: "ρ_s",
            valor: correlacion.r
        },
        estadistico: {
            simbolo: "t",
            valor: prueba.valor
        },
        gradosLibertad:
            prueba.gradosLibertad,
        valorP: prueba.valorP,
        nivelConfianza,
        alfa,
        significativo:
            prueba.valorP < alfa,
        intervaloConfianza:
            intervaloFisher(
                correlacion.r,
                datos.n,
                nivelConfianza
            ),
        tamanioEfecto: {
            valor: correlacion.r,
            magnitud:
                interpretarMagnitud(
                    correlacion.r
                ),
            direccion:
                interpretarDireccion(
                    correlacion.r
                )
        },
        empates: {
            variableX:
                rangosX.gruposEmpatados,
            variableY:
                rangosY.gruposEmpatados,
            cantidadValoresEmpatadosX:
                rangosX
                    .cantidadValoresEmpatados,
            cantidadValoresEmpatadosY:
                rangosY
                    .cantidadValoresEmpatados
        },
        detalles: {
            aproximacionInferencial:
                "Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."
        },
        diagnosticos: [
            "Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.",
            "Los empates se tratan mediante rangos promedio.",
            "Revise un diagrama de dispersión para interpretar la forma de la relación."
        ],
        datosGrafico:
            crearDatosGrafico(
                datos.x,
                datos.y
            )
    };
}

export function pruebaKendall(
    x,
    y,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95,
        nombreX = "Variable X",
        nombreY = "Variable Y"
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const datos = validarParesNumericos(
        x,
        y,
        nombreX,
        nombreY
    );
    let concordantes = 0;
    let discordantes = 0;
    let empatesSoloX = 0;
    let empatesSoloY = 0;
    let empatesAmbas = 0;

    for (
        let i = 0;
        i < datos.n - 1;
        i += 1
    ) {
        for (
            let j = i + 1;
            j < datos.n;
            j += 1
        ) {
            const diferenciaX =
                Math.sign(
                    datos.x[j] - datos.x[i]
                );
            const diferenciaY =
                Math.sign(
                    datos.y[j] - datos.y[i]
                );

            if (
                diferenciaX === 0 &&
                diferenciaY === 0
            ) {
                empatesAmbas += 1;
            } else if (diferenciaX === 0) {
                empatesSoloX += 1;
            } else if (diferenciaY === 0) {
                empatesSoloY += 1;
            } else if (
                diferenciaX === diferenciaY
            ) {
                concordantes += 1;
            } else {
                discordantes += 1;
            }
        }
    }

    const totalPares =
        datos.n * (datos.n - 1) / 2;
    const tamaniosX =
        tamaniosGruposEmpatados(
            datos.x
        );
    const tamaniosY =
        tamaniosGruposEmpatados(
            datos.y
        );
    const paresEmpatadosX =
        sumatoriaEmpates(
            tamaniosX,
            (cantidad) =>
                cantidad *
                (cantidad - 1) / 2
        );
    const paresEmpatadosY =
        sumatoriaEmpates(
            tamaniosY,
            (cantidad) =>
                cantidad *
                (cantidad - 1) / 2
        );
    const denominador = Math.sqrt(
        (
            totalPares -
            paresEmpatadosX
        ) *
        (
            totalPares -
            paresEmpatadosY
        )
    );

    if (denominador === 0) {
        throw new RangeError(
            "No es posible calcular tau-b porque una de las variables está completamente empatada."
        );
    }

    const s =
        concordantes - discordantes;
    const tauB = s / denominador;
    const sumaX1 =
        sumatoriaEmpates(
            tamaniosX,
            (cantidad) =>
                cantidad *
                (cantidad - 1)
        );
    const sumaY1 =
        sumatoriaEmpates(
            tamaniosY,
            (cantidad) =>
                cantidad *
                (cantidad - 1)
        );
    const sumaX2 =
        sumatoriaEmpates(
            tamaniosX,
            (cantidad) =>
                cantidad *
                (cantidad - 1) *
                (2 * cantidad + 5)
        );
    const sumaY2 =
        sumatoriaEmpates(
            tamaniosY,
            (cantidad) =>
                cantidad *
                (cantidad - 1) *
                (2 * cantidad + 5)
        );
    const sumaX3 =
        sumatoriaEmpates(
            tamaniosX,
            (cantidad) =>
                cantidad *
                (cantidad - 1) *
                (cantidad - 2)
        );
    const sumaY3 =
        sumatoriaEmpates(
            tamaniosY,
            (cantidad) =>
                cantidad *
                (cantidad - 1) *
                (cantidad - 2)
        );
    let varianzaS =
        (
            datos.n *
                (datos.n - 1) *
                (2 * datos.n + 5) -
            sumaX2 -
            sumaY2
        ) / 18;

    varianzaS +=
        (
            sumaX1 * sumaY1
        ) /
        (
            2 *
            datos.n *
            (datos.n - 1)
        );

    if (datos.n > 2) {
        varianzaS +=
            (
                sumaX3 * sumaY3
            ) /
            (
                9 *
                datos.n *
                (datos.n - 1) *
                (datos.n - 2)
            );
    }

    const errorEstandarS =
        Math.sqrt(
            Math.max(0, varianzaS)
        );
    const z = errorEstandarS === 0
        ? 0
        : s / errorEstandarS;
    const valorP =
        limitarProbabilidad(
            2 *
            (
                1 -
                jStat.normal.cdf(
                    Math.abs(z),
                    0,
                    1
                )
            )
        );
    const errorEstandarTau =
        errorEstandarS /
        denominador;
    const alfa = 1 - nivelConfianza;

    return {
        id: "kendall",
        nombre: "Tau-b de Kendall",
        metodo:
            "Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",
        n: datos.n,
        variables: {
            x: {
                nombre: nombreX,
                valores: datos.x,
                ...resumenDescriptivo(
                    datos.x
                )
            },
            y: {
                nombre: nombreY,
                valores: datos.y,
                ...resumenDescriptivo(
                    datos.y
                )
            }
        },
        coeficiente: {
            simbolo: "τ_b",
            valor: tauB
        },
        estadistico: {
            simbolo: "z",
            valor: z
        },
        gradosLibertad: null,
        valorP,
        nivelConfianza,
        alfa,
        significativo:
            valorP < alfa,
        intervaloConfianza:
            intervaloNormalCoeficiente(
                tauB,
                errorEstandarTau,
                nivelConfianza
            ),
        tamanioEfecto: {
            valor: tauB,
            magnitud:
                interpretarMagnitud(
                    tauB
                ),
            direccion:
                interpretarDireccion(
                    tauB
                )
        },
        pares: {
            total: totalPares,
            concordantes,
            discordantes,
            empatesSoloX,
            empatesSoloY,
            empatesAmbas,
            empatadosX:
                paresEmpatadosX,
            empatadosY:
                paresEmpatadosY
        },
        empates: {
            tamaniosVariableX:
                tamaniosX,
            tamaniosVariableY:
                tamaniosY
        },
        detalles: {
            s,
            varianzaS,
            aproximacionInferencial:
                "Aproximación normal bilateral con corrección de la varianza por empates."
        },
        diagnosticos: [
            "Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.",
            "Las observaciones deben ser independientes entre pares.",
            "La dirección depende del orden numérico asignado a las categorías ordinales."
        ],
        datosGrafico:
            crearDatosGrafico(
                datos.x,
                datos.y
            )
    };
}

export function pruebaPuntoBiserial(
    categorias,
    valores,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95,
        nombreCategoria =
            "Variable dicotómica",
        nombreCuantitativa =
            "Variable cuantitativa",
        categoriaPositiva = null
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const etiquetas =
        validarCategorias(
            categorias,
            nombreCategoria
        );
    const cuantitativa =
        convertirVariableNumerica(
            valores,
            nombreCuantitativa
        );

    if (
        etiquetas.length !==
        cuantitativa.length
    ) {
        throw new RangeError(
            "La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones."
        );
    }

    if (etiquetas.length < 3) {
        throw new RangeError(
            "El análisis requiere al menos tres pares completos."
        );
    }

    const categoriasUnicas =
        [...new Set(etiquetas)];

    if (categoriasUnicas.length !== 2) {
        throw new RangeError(
            "La variable dicotómica debe contener exactamente dos categorías diferentes."
        );
    }

    let categoriaUno =
        categoriaPositiva === null
            ? categoriasUnicas[1]
            : String(
                categoriaPositiva
            ).trim();

    if (
        !categoriasUnicas.includes(
            categoriaUno
        )
    ) {
        throw new Error(
            "La categoría positiva seleccionada no aparece en los datos."
        );
    }

    const categoriaCero =
        categoriasUnicas.find(
            (categoria) =>
                categoria !== categoriaUno
        );
    const codigos = etiquetas.map(
        (categoria) =>
            categoria === categoriaUno
                ? 1
                : 0
    );
    const correlacion =
        correlacionPearsonInterna(
            codigos,
            cuantitativa
        );
    const prueba =
        estadisticoTCorrelacion(
            correlacion.r,
            etiquetas.length
        );
    const valoresCero =
        cuantitativa.filter(
            (_, indice) =>
                codigos[indice] === 0
        );
    const valoresUno =
        cuantitativa.filter(
            (_, indice) =>
                codigos[indice] === 1
        );
    const resumenCero =
        resumenDescriptivo(
            valoresCero
        );
    const resumenUno =
        resumenDescriptivo(
            valoresUno
        );
    const alfa = 1 - nivelConfianza;

    return {
        id: "punto-biserial",
        nombre:
            "Correlación punto-biserial",
        metodo:
            "Correlación entre una variable dicotómica genuina y una variable cuantitativa.",
        n: etiquetas.length,
        variables: {
            dicotomica: {
                nombre: nombreCategoria,
                valores: etiquetas,
                categorias: [
                    categoriaCero,
                    categoriaUno
                ],
                categoriaCero,
                categoriaUno
            },
            cuantitativa: {
                nombre:
                    nombreCuantitativa,
                valores: cuantitativa,
                ...resumenDescriptivo(
                    cuantitativa
                )
            }
        },
        coeficiente: {
            simbolo: "r_pb",
            valor: correlacion.r
        },
        estadistico: {
            simbolo: "t",
            valor: prueba.valor
        },
        gradosLibertad:
            prueba.gradosLibertad,
        valorP: prueba.valorP,
        nivelConfianza,
        alfa,
        significativo:
            prueba.valorP < alfa,
        intervaloConfianza:
            intervaloFisher(
                correlacion.r,
                etiquetas.length,
                nivelConfianza
            ),
        tamanioEfecto: {
            valor: correlacion.r,
            magnitud:
                interpretarMagnitud(
                    correlacion.r
                ),
            direccion:
                interpretarDireccion(
                    correlacion.r
                ),
            rCuadrado:
                correlacion.r ** 2
        },
        grupos: {
            categoriaCero: {
                categoria:
                    categoriaCero,
                codigo: 0,
                ...resumenCero
            },
            categoriaUno: {
                categoria:
                    categoriaUno,
                codigo: 1,
                ...resumenUno
            },
            diferenciaMedias:
                resumenUno.media -
                resumenCero.media
        },
        detalles: {
            interpretacionDireccion:
                `Un coeficiente positivo indica valores más altos de ${nombreCuantitativa} en la categoría "${categoriaUno}" respecto de "${categoriaCero}".`,
            aproximacionInferencial:
                "Distribución t con n − 2 grados de libertad."
        },
        diagnosticos: [
            "La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.",
            "Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.",
            "La dirección del coeficiente depende de cuál categoría se codifique como 1."
        ],
        datosGrafico:
            etiquetas.map(
                (categoria, indice) => ({
                    categoria,
                    codigo: codigos[indice],
                    valor:
                        cuantitativa[indice],
                    indice: indice + 1
                })
            )
    };
}

export function analizarRelacionVariables({
    x,
    y,
    prueba,
    nivelConfianza = 0.95,
    nombreX = "Variable X",
    nombreY = "Variable Y",
    categoriaPositiva = null
}) {
    switch (prueba) {
        case "pearson":
            return pruebaPearson(
                x,
                y,
                {
                    nivelConfianza,
                    nombreX,
                    nombreY
                }
            );

        case "spearman":
        case "rho-spearman":
            return pruebaSpearman(
                x,
                y,
                {
                    nivelConfianza,
                    nombreX,
                    nombreY
                }
            );

        case "kendall":
        case "tau-kendall":
            return pruebaKendall(
                x,
                y,
                {
                    nivelConfianza,
                    nombreX,
                    nombreY
                }
            );

        case "punto-biserial":
            return pruebaPuntoBiserial(
                x,
                y,
                {
                    nivelConfianza,
                    nombreCategoria:
                        nombreX,
                    nombreCuantitativa:
                        nombreY,
                    categoriaPositiva
                }
            );

        default:
            throw new Error(
                "La prueba solicitada no está disponible."
            );
    }
}
