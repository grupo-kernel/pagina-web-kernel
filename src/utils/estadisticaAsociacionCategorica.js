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

function normalizarEtiquetas(
    etiquetas,
    cantidad,
    prefijo
) {
    if (etiquetas == null) {
        return Array.from(
            { length: cantidad },
            (_, indice) => `${prefijo} ${indice + 1}`
        );
    }

    if (
        !Array.isArray(etiquetas) ||
        etiquetas.length !== cantidad
    ) {
        throw new RangeError(
            `Debe proporcionar exactamente ${cantidad} etiquetas para ${prefijo.toLowerCase()}.`
        );
    }

    const limpias = etiquetas.map(
        (etiqueta, indice) => {
            const texto = String(
                etiqueta ?? ""
            ).trim();

            if (!texto) {
                throw new Error(
                    `La etiqueta ${indice + 1} de ${prefijo.toLowerCase()} está vacía.`
                );
            }

            return texto;
        }
    );

    if (new Set(limpias).size !== limpias.length) {
        throw new Error(
            `Las etiquetas de ${prefijo.toLowerCase()} deben ser diferentes.`
        );
    }

    return limpias;
}

function prepararTabla(
    tabla,
    etiquetasFilas,
    etiquetasColumnas
) {
    if (
        !Array.isArray(tabla) ||
        tabla.length < 2
    ) {
        throw new RangeError(
            "La tabla debe contener al menos dos filas."
        );
    }

    const numeroColumnas = Array.isArray(
        tabla[0]
    )
        ? tabla[0].length
        : 0;

    if (numeroColumnas < 2) {
        throw new RangeError(
            "La tabla debe contener al menos dos columnas."
        );
    }

    const observadas = tabla.map(
        (fila, indiceFila) => {
            if (
                !Array.isArray(fila) ||
                fila.length !== numeroColumnas
            ) {
                throw new RangeError(
                    `La fila ${indiceFila + 1} no contiene la misma cantidad de columnas que las demás.`
                );
            }

            return fila.map(
                (valor, indiceColumna) => {
                    const numero =
                        typeof valor === "string"
                            ? Number(
                                valor
                                    .trim()
                                    .replace(",", ".")
                            )
                            : Number(valor);

                    if (
                        !Number.isFinite(numero) ||
                        numero < 0 ||
                        !Number.isInteger(numero)
                    ) {
                        throw new TypeError(
                            `La celda (${indiceFila + 1}, ${indiceColumna + 1}) debe contener una frecuencia entera no negativa.`
                        );
                    }

                    return numero;
                }
            );
        }
    );

    const totalesFilas = observadas.map(
        (fila) =>
            fila.reduce(
                (suma, valor) => suma + valor,
                0
            )
    );
    const totalesColumnas = Array.from(
        { length: numeroColumnas },
        (_, columna) =>
            observadas.reduce(
                (suma, fila) =>
                    suma + fila[columna],
                0
            )
    );
    const total = totalesFilas.reduce(
        (suma, valor) => suma + valor,
        0
    );

    if (total === 0) {
        throw new RangeError(
            "La tabla debe contener al menos una observación."
        );
    }

    const filaVacia = totalesFilas.findIndex(
        (valor) => valor === 0
    );

    if (filaVacia !== -1) {
        throw new RangeError(
            `La fila ${filaVacia + 1} tiene total cero. Elimine esa categoría o agregue frecuencias.`
        );
    }

    const columnaVacia =
        totalesColumnas.findIndex(
            (valor) => valor === 0
        );

    if (columnaVacia !== -1) {
        throw new RangeError(
            `La columna ${columnaVacia + 1} tiene total cero. Elimine esa categoría o agregue frecuencias.`
        );
    }

    return {
        observadas,
        numeroFilas: observadas.length,
        numeroColumnas,
        totalesFilas,
        totalesColumnas,
        total,
        etiquetasFilas: normalizarEtiquetas(
            etiquetasFilas,
            observadas.length,
            "Fila"
        ),
        etiquetasColumnas: normalizarEtiquetas(
            etiquetasColumnas,
            numeroColumnas,
            "Columna"
        )
    };
}

function calcularEsperadas(datos) {
    return datos.observadas.map(
        (_, indiceFila) =>
            datos.totalesColumnas.map(
                (totalColumna) =>
                    datos.totalesFilas[indiceFila] *
                    totalColumna /
                    datos.total
            )
    );
}

function calcularDiagnosticoEsperadas(esperadas) {
    const valores = esperadas.flat();
    const menoresQueCinco = valores.filter(
        (valor) => valor < 5
    ).length;
    const menoresQueUno = valores.filter(
        (valor) => valor < 1
    ).length;
    const porcentajeMenoresQueCinco =
        100 * menoresQueCinco /
        valores.length;
    const minimo = Math.min(...valores);
    const adecuado =
        menoresQueUno === 0 &&
        porcentajeMenoresQueCinco <= 20;

    return {
        adecuado,
        minimo,
        totalCeldas: valores.length,
        menoresQueCinco,
        menoresQueUno,
        porcentajeMenoresQueCinco,
        criterio:
            "Como guía práctica, ninguna frecuencia esperada debe ser menor que 1 y no más del 20 % de las celdas debería tener una frecuencia esperada menor que 5."
    };
}

function calcularComponentesChiCuadrado(
    datos,
    esperadas
) {
    let chiCuadrado = 0;

    const contribuciones = datos.observadas.map(
        (fila, indiceFila) =>
            fila.map(
                (observada, indiceColumna) => {
                    const esperada =
                        esperadas[indiceFila][indiceColumna];
                    const contribucion =
                        (observada - esperada) ** 2 /
                        esperada;

                    chiCuadrado += contribucion;

                    return contribucion;
                }
            )
    );

    const residuosPearson =
        datos.observadas.map(
            (fila, indiceFila) =>
                fila.map(
                    (observada, indiceColumna) => {
                        const esperada =
                            esperadas[indiceFila][indiceColumna];

                        return (
                            observada - esperada
                        ) / Math.sqrt(esperada);
                    }
                )
        );

    const residuosAjustados =
        datos.observadas.map(
            (fila, indiceFila) =>
                fila.map(
                    (observada, indiceColumna) => {
                        const esperada =
                            esperadas[indiceFila][indiceColumna];
                        const proporcionFila =
                            datos.totalesFilas[indiceFila] /
                            datos.total;
                        const proporcionColumna =
                            datos.totalesColumnas[indiceColumna] /
                            datos.total;
                        const denominador = Math.sqrt(
                            esperada *
                            (1 - proporcionFila) *
                            (1 - proporcionColumna)
                        );

                        return denominador === 0
                            ? 0
                            : (
                                observada - esperada
                            ) / denominador;
                    }
                )
        );

    const celdasDestacadas = [];

    residuosAjustados.forEach(
        (fila, indiceFila) => {
            fila.forEach(
                (residuo, indiceColumna) => {
                    if (Math.abs(residuo) >= 1.96) {
                        celdasDestacadas.push({
                            fila: indiceFila,
                            columna: indiceColumna,
                            residuo,
                            direccion:
                                residuo > 0
                                    ? "más casos de los esperados"
                                    : "menos casos de los esperados"
                        });
                    }
                }
            );
        }
    );

    return {
        chiCuadrado,
        contribuciones,
        residuosPearson,
        residuosAjustados,
        celdasDestacadas
    };
}

function chiCuadradoYates2x2(observadas) {
    const a = observadas[0][0];
    const b = observadas[0][1];
    const c = observadas[1][0];
    const d = observadas[1][1];
    const n = a + b + c + d;
    const denominador =
        (a + b) *
        (c + d) *
        (a + c) *
        (b + d);

    if (denominador === 0) {
        return 0;
    }

    return (
        n *
        (
            Math.max(
                0,
                Math.abs(a * d - b * c) -
                n / 2
            )
        ) ** 2 /
        denominador
    );
}

function interpretarMagnitud(valor) {
    const magnitud = Math.abs(valor);

    if (magnitud < 0.10) {
        return "Prácticamente nula";
    }

    if (magnitud < 0.30) {
        return "Pequeña";
    }

    if (magnitud < 0.50) {
        return "Moderada";
    }

    return "Grande";
}

function calcularMedidasAsociacion(
    datos,
    chiCuadrado
) {
    const minimoDimension = Math.min(
        datos.numeroFilas - 1,
        datos.numeroColumnas - 1
    );
    const vCramer =
        minimoDimension <= 0
            ? 0
            : Math.sqrt(
                chiCuadrado /
                (
                    datos.total *
                    minimoDimension
                )
            );

    let phi = null;

    if (
        datos.numeroFilas === 2 &&
        datos.numeroColumnas === 2
    ) {
        const [[a, b], [c, d]] =
            datos.observadas;
        const denominador = Math.sqrt(
            (a + b) *
            (c + d) *
            (a + c) *
            (b + d)
        );

        phi = denominador === 0
            ? 0
            : (a * d - b * c) /
                denominador;
    }

    const correccionPhi2 =
        Math.max(
            0,
            chiCuadrado /
                datos.total -
                (
                    (
                        datos.numeroColumnas - 1
                    ) *
                    (
                        datos.numeroFilas - 1
                    )
                ) /
                (
                    datos.total - 1
                )
        );
    const filasCorregidas =
        datos.numeroFilas -
        (
            (
                datos.numeroFilas - 1
            ) ** 2
        ) /
        (
            datos.total - 1
        );
    const columnasCorregidas =
        datos.numeroColumnas -
        (
            (
                datos.numeroColumnas - 1
            ) ** 2
        ) /
        (
            datos.total - 1
        );
    const denominadorCorregido =
        Math.min(
            filasCorregidas - 1,
            columnasCorregidas - 1
        );
    const vCramerCorregido =
        datos.total <= 1 ||
        denominadorCorregido <= 0
            ? vCramer
            : Math.sqrt(
                correccionPhi2 /
                denominadorCorregido
            );

    return {
        phi,
        vCramer,
        vCramerCorregido,
        magnitud:
            interpretarMagnitud(
                phi ?? vCramer
            )
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
        return (
            Math.log(Math.PI) -
            Math.log(
                Math.sin(Math.PI * z)
            ) -
            logGamma(1 - z)
        );
    }

    let x = 0.9999999999998099;
    const desplazado = z - 1;

    coeficientes.forEach(
        (coeficiente, indice) => {
            x +=
                coeficiente /
                (
                    desplazado +
                    indice +
                    1
                );
        }
    );

    const t =
        desplazado +
        coeficientes.length -
        0.5;

    return (
        0.5 * Math.log(2 * Math.PI) +
        (
            desplazado + 0.5
        ) * Math.log(t) -
        t +
        Math.log(x)
    );
}

function logFactorial(valor) {
    return logGamma(valor + 1);
}

function logCombinacion(n, k) {
    if (
        k < 0 ||
        k > n
    ) {
        return -Infinity;
    }

    return (
        logFactorial(n) -
        logFactorial(k) -
        logFactorial(n - k)
    );
}

function logProbabilidadTabla(
    tabla,
    totalesFilas,
    totalesColumnas,
    total
) {
    let resultado = 0;

    totalesFilas.forEach(
        (valor) => {
            resultado += logFactorial(valor);
        }
    );

    totalesColumnas.forEach(
        (valor) => {
            resultado += logFactorial(valor);
        }
    );

    resultado -= logFactorial(total);

    tabla.flat().forEach(
        (valor) => {
            resultado -= logFactorial(valor);
        }
    );

    return resultado;
}

function logSumar(logA, logB) {
    if (logA === -Infinity) {
        return logB;
    }

    if (logB === -Infinity) {
        return logA;
    }

    const maximo = Math.max(logA, logB);

    return (
        maximo +
        Math.log(
            Math.exp(logA - maximo) +
            Math.exp(logB - maximo)
        )
    );
}

function calcularOddsRatio2x2(
    observadas,
    nivelConfianza
) {
    validarNivelConfianza(
        nivelConfianza
    );

    const aOriginal = observadas[0][0];
    const bOriginal = observadas[0][1];
    const cOriginal = observadas[1][0];
    const dOriginal = observadas[1][1];
    const requiereCorreccion = [
        aOriginal,
        bOriginal,
        cOriginal,
        dOriginal
    ].some((valor) => valor === 0);
    const correccion =
        requiereCorreccion ? 0.5 : 0;
    const a = aOriginal + correccion;
    const b = bOriginal + correccion;
    const c = cOriginal + correccion;
    const d = dOriginal + correccion;
    const oddsRatio = a * d / (b * c);
    const errorEstandarLog = Math.sqrt(
        1 / a +
        1 / b +
        1 / c +
        1 / d
    );
    const alfa = 1 - nivelConfianza;
    const zCritico = jStat.normal.inv(
        1 - alfa / 2,
        0,
        1
    );
    const logOR = Math.log(oddsRatio);

    return {
        oddsRatio,
        intervaloConfianza: {
            nivel: nivelConfianza,
            inferior: Math.exp(
                logOR -
                zCritico *
                errorEstandarLog
            ),
            superior: Math.exp(
                logOR +
                zCritico *
                errorEstandarLog
            ),
            metodo:
                requiereCorreccion
                    ? "Intervalo de Wald sobre log(OR) con corrección de Haldane–Anscombe de 0.5 en todas las celdas."
                    : "Intervalo de Wald sobre log(OR)."
        },
        correccionAplicada:
            requiereCorreccion,
        valorCorreccion:
            correccion,
        orientacion:
            "El odds ratio depende del orden asignado a las filas y columnas de la tabla."
    };
}

function probabilidadHip16(
    a,
    totalFila1,
    totalColumna1,
    total
) {
    return Math.exp(
        logCombinacion(
            totalColumna1,
            a
        ) +
        logCombinacion(
            total - totalColumna1,
            totalFila1 - a
        ) -
        logCombinacion(
            total,
            totalFila1
        )
    );
}

function calcularFisher2x2(datos) {
    const [[a, b], [c, d]] =
        datos.observadas;
    const totalFila1 = a + b;
    const totalColumna1 = a + c;
    const minimo = Math.max(
        0,
        totalFila1 -
        (
            datos.total -
            totalColumna1
        )
    );
    const maximo = Math.min(
        totalFila1,
        totalColumna1
    );
    const probabilidadObservada =
        probabilidadHip16(
            a,
            totalFila1,
            totalColumna1,
            datos.total
        );
    let valorP = 0;

    for (
        let posible = minimo;
        posible <= maximo;
        posible += 1
    ) {
        const probabilidad =
            probabilidadHip16(
                posible,
                totalFila1,
                totalColumna1,
                datos.total
            );

        if (
            probabilidad <=
            probabilidadObservada +
                1e-12
        ) {
            valorP += probabilidad;
        }
    }

    return {
        valorP:
            limitarProbabilidad(valorP),
        probabilidadObservada,
        rangoCeldaSuperiorIzquierda: {
            minimo,
            maximo
        },
        metodo:
            "Valor p bilateral exacto obtenido al sumar las tablas con probabilidad menor o igual que la tabla observada, condicionando por los márgenes."
    };
}

function generarComposicionesAcotadas(
    totalFila,
    limites,
    callback
) {
    const fila = new Array(
        limites.length
    ).fill(0);

    const recorrer = (
        columna,
        restante
    ) => {
        if (
            columna ===
            limites.length - 1
        ) {
            if (
                restante >= 0 &&
                restante <= limites[columna]
            ) {
                fila[columna] = restante;
                callback([...fila]);
            }

            return;
        }

        const capacidadPosterior =
            limites
                .slice(columna + 1)
                .reduce(
                    (suma, valor) =>
                        suma + valor,
                    0
                );
        const minimo = Math.max(
            0,
            restante -
            capacidadPosterior
        );
        const maximo = Math.min(
            limites[columna],
            restante
        );

        for (
            let valor = minimo;
            valor <= maximo;
            valor += 1
        ) {
            fila[columna] = valor;
            recorrer(
                columna + 1,
                restante - valor
            );
        }
    };

    recorrer(0, totalFila);
}

function enumerarTablasConMargenes(
    totalesFilas,
    totalesColumnas,
    procesarTabla,
    maximoTablas
) {
    const numeroFilas =
        totalesFilas.length;
    const tabla = Array.from(
        { length: numeroFilas },
        () =>
            new Array(
                totalesColumnas.length
            ).fill(0)
    );
    let cantidad = 0;
    let excedido = false;

    const recorrerFila = (
        indiceFila,
        columnasRestantes
    ) => {
        if (excedido) {
            return;
        }

        if (
            indiceFila ===
            numeroFilas - 1
        ) {
            const suma =
                columnasRestantes.reduce(
                    (acumulado, valor) =>
                        acumulado + valor,
                    0
                );

            if (
                suma !==
                totalesFilas[indiceFila]
            ) {
                return;
            }

            tabla[indiceFila] = [
                ...columnasRestantes
            ];
            cantidad += 1;

            if (cantidad > maximoTablas) {
                excedido = true;
                return;
            }

            procesarTabla(
                tabla.map((fila) => [...fila])
            );
            return;
        }

        generarComposicionesAcotadas(
            totalesFilas[indiceFila],
            columnasRestantes,
            (filaGenerada) => {
                if (excedido) {
                    return;
                }

                tabla[indiceFila] =
                    filaGenerada;
                const nuevasColumnas =
                    columnasRestantes.map(
                        (valor, columna) =>
                            valor -
                            filaGenerada[columna]
                    );

                recorrerFila(
                    indiceFila + 1,
                    nuevasColumnas
                );
            }
        );
    };

    recorrerFila(
        0,
        [...totalesColumnas]
    );

    return {
        cantidad:
            Math.min(
                cantidad,
                maximoTablas
            ),
        excedido
    };
}

function muestrearFilaHipergometrica(
    totalFila,
    columnasRestantes,
    aleatorio
) {
    const fila = new Array(
        columnasRestantes.length
    ).fill(0);
    let totalRestante =
        columnasRestantes.reduce(
            (suma, valor) => suma + valor,
            0
        );

    for (
        let extraccion = 0;
        extraccion < totalFila;
        extraccion += 1
    ) {
        let objetivo =
            aleatorio() *
            totalRestante;
        let elegida =
            columnasRestantes.length - 1;

        for (
            let columna = 0;
            columna <
            columnasRestantes.length;
            columna += 1
        ) {
            objetivo -=
                columnasRestantes[columna];

            if (objetivo < 0) {
                elegida = columna;
                break;
            }
        }

        fila[elegida] += 1;
        columnasRestantes[elegida] -= 1;
        totalRestante -= 1;
    }

    return fila;
}

function muestrearTablaConMargenes(
    totalesFilas,
    totalesColumnas,
    aleatorio
) {
    const columnasRestantes = [
        ...totalesColumnas
    ];
    const tabla = [];

    for (
        let fila = 0;
        fila < totalesFilas.length - 1;
        fila += 1
    ) {
        tabla.push(
            muestrearFilaHipergometrica(
                totalesFilas[fila],
                columnasRestantes,
                aleatorio
            )
        );
    }

    tabla.push([...columnasRestantes]);

    return tabla;
}

function crearGeneradorAleatorio(semilla) {
    let estado = semilla >>> 0;

    return () => {
        estado += 0x6D2B79F5;
        let valor = estado;
        valor = Math.imul(
            valor ^ valor >>> 15,
            valor | 1
        );
        valor ^= valor +
            Math.imul(
                valor ^ valor >>> 7,
                valor | 61
            );
        return (
            (valor ^ valor >>> 14) >>> 0
        ) / 4294967296;
    };
}

function calcularFisherFreemanHalton(
    datos,
    {
        maximoTablasExactas,
        simulaciones,
        semilla
    }
) {
    const logObservada =
        logProbabilidadTabla(
            datos.observadas,
            datos.totalesFilas,
            datos.totalesColumnas,
            datos.total
        );
    let logTotal = -Infinity;
    let logExtremo = -Infinity;

    const enumeracion =
        enumerarTablasConMargenes(
            datos.totalesFilas,
            datos.totalesColumnas,
            (tablaPosible) => {
                const logP =
                    logProbabilidadTabla(
                        tablaPosible,
                        datos.totalesFilas,
                        datos.totalesColumnas,
                        datos.total
                    );

                logTotal =
                    logSumar(
                        logTotal,
                        logP
                    );

                if (
                    logP <=
                    logObservada +
                        1e-12
                ) {
                    logExtremo =
                        logSumar(
                            logExtremo,
                            logP
                        );
                }
            },
            maximoTablasExactas
        );

    if (!enumeracion.excedido) {
        return {
            valorP:
                logExtremo === -Infinity
                    ? 0
                    : limitarProbabilidad(
                        Math.exp(
                            logExtremo -
                            logTotal
                        )
                    ),
            exacta: true,
            metodo:
                "Prueba exacta de Fisher–Freeman–Halton mediante enumeración completa de las tablas compatibles con los márgenes.",
            tablasEvaluadas:
                enumeracion.cantidad,
            simulaciones: 0,
            errorMonteCarlo: 0
        };
    }

    let extremas = 0;
    const aleatorio =
        crearGeneradorAleatorio(semilla);

    for (
        let indice = 0;
        indice < simulaciones;
        indice += 1
    ) {
        const tablaSimulada =
            muestrearTablaConMargenes(
                datos.totalesFilas,
                datos.totalesColumnas,
                aleatorio
            );
        const logP =
            logProbabilidadTabla(
                tablaSimulada,
                datos.totalesFilas,
                datos.totalesColumnas,
                datos.total
            );

        if (
            logP <=
            logObservada +
                1e-12
        ) {
            extremas += 1;
        }
    }

    const valorP =
        (extremas + 1) /
        (simulaciones + 1);

    return {
        valorP,
        exacta: false,
        metodo:
            "Aproximación Monte Carlo de la prueba Fisher–Freeman–Halton, condicionada por los márgenes observados.",
        tablasEvaluadas:
            enumeracion.cantidad,
        simulaciones,
        semilla,
        errorMonteCarlo:
            Math.sqrt(
                valorP *
                (1 - valorP) /
                (simulaciones + 1)
            )
    };
}

function crearBaseResultado(
    datos,
    esperadas,
    componentes,
    diagnostico,
    medidas
) {
    return {
        tabla: {
            observadas:
                datos.observadas,
            esperadas,
            totalesFilas:
                datos.totalesFilas,
            totalesColumnas:
                datos.totalesColumnas,
            total:
                datos.total,
            etiquetasFilas:
                datos.etiquetasFilas,
            etiquetasColumnas:
                datos.etiquetasColumnas,
            numeroFilas:
                datos.numeroFilas,
            numeroColumnas:
                datos.numeroColumnas
        },
        residuos: {
            pearson:
                componentes.residuosPearson,
            ajustados:
                componentes.residuosAjustados,
            celdasDestacadas:
                componentes.celdasDestacadas
        },
        contribucionesChiCuadrado:
            componentes.contribuciones,
        diagnosticoFrecuenciasEsperadas:
            diagnostico,
        tamanioEfecto:
            medidas
    };
}

export function pruebaChiCuadradoIndependencia(
    tabla,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95,
        etiquetasFilas = null,
        etiquetasColumnas = null
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const datos = prepararTabla(
        tabla,
        etiquetasFilas,
        etiquetasColumnas
    );
    const esperadas =
        calcularEsperadas(datos);
    const diagnostico =
        calcularDiagnosticoEsperadas(
            esperadas
        );
    const componentes =
        calcularComponentesChiCuadrado(
            datos,
            esperadas
        );
    const gl =
        (datos.numeroFilas - 1) *
        (datos.numeroColumnas - 1);
    const valorP =
        limitarProbabilidad(
            1 -
            jStat.chisquare.cdf(
                componentes.chiCuadrado,
                gl
            )
        );
    const medidas =
        calcularMedidasAsociacion(
            datos,
            componentes.chiCuadrado
        );
    const alfa = 1 - nivelConfianza;
    const es2x2 =
        datos.numeroFilas === 2 &&
        datos.numeroColumnas === 2;
    const chiYates = es2x2
        ? chiCuadradoYates2x2(
            datos.observadas
        )
        : null;
    const valorPYates = es2x2
        ? limitarProbabilidad(
            1 -
            jStat.chisquare.cdf(
                chiYates,
                1
            )
        )
        : null;
    const oddsRatio = es2x2
        ? calcularOddsRatio2x2(
            datos.observadas,
            nivelConfianza
        )
        : null;

    return {
        id:
            es2x2
                ? "chi-cuadrado-independencia-2x2"
                : "chi-cuadrado-independencia-rxc",
        nombre:
            "Prueba chi-cuadrado de independencia",
        metodo:
            "Comparación de frecuencias observadas y esperadas bajo la hipótesis de independencia.",
        estadistico: {
            simbolo: "χ²",
            valor:
                componentes.chiCuadrado
        },
        gradosLibertad: gl,
        valorP,
        nivelConfianza,
        alfa,
        significativo:
            valorP < alfa,
        correccionYates:
            es2x2
                ? {
                    estadistico:
                        chiYates,
                    valorP:
                        valorPYates,
                    significativo:
                        valorPYates < alfa,
                    disponible: true
                }
                : {
                    disponible: false
                },
        oddsRatio,
        advertencias:
            diagnostico.adecuado
                ? []
                : [
                    "Las frecuencias esperadas no satisfacen completamente la guía práctica para la aproximación chi-cuadrado. Considere una prueba exacta o Monte Carlo."
                ],
        ...crearBaseResultado(
            datos,
            esperadas,
            componentes,
            diagnostico,
            medidas
        )
    };
}

export function pruebaFisherExacta2x2(
    tabla,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95,
        etiquetasFilas = null,
        etiquetasColumnas = null
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    const datos = prepararTabla(
        tabla,
        etiquetasFilas,
        etiquetasColumnas
    );

    if (
        datos.numeroFilas !== 2 ||
        datos.numeroColumnas !== 2
    ) {
        throw new RangeError(
            "La prueba exacta de Fisher requiere una tabla 2 × 2."
        );
    }

    const esperadas =
        calcularEsperadas(datos);
    const diagnostico =
        calcularDiagnosticoEsperadas(
            esperadas
        );
    const componentes =
        calcularComponentesChiCuadrado(
            datos,
            esperadas
        );
    const medidas =
        calcularMedidasAsociacion(
            datos,
            componentes.chiCuadrado
        );
    const exacta =
        calcularFisher2x2(datos);
    const oddsRatio =
        calcularOddsRatio2x2(
            datos.observadas,
            nivelConfianza
        );
    const alfa = 1 - nivelConfianza;

    return {
        id: "fisher-exacta-2x2",
        nombre:
            "Prueba exacta de Fisher",
        metodo:
            exacta.metodo,
        estadistico: {
            simbolo: "p exacta",
            valor:
                exacta.probabilidadObservada
        },
        gradosLibertad: null,
        valorP:
            exacta.valorP,
        nivelConfianza,
        alfa,
        significativo:
            exacta.valorP < alfa,
        oddsRatio,
        detallesExactos: exacta,
        advertencias: [],
        ...crearBaseResultado(
            datos,
            esperadas,
            componentes,
            diagnostico,
            medidas
        )
    };
}

export function pruebaFisherFreemanHalton(
    tabla,
    opciones = {}
) {
    const {
        nivelConfianza = 0.95,
        etiquetasFilas = null,
        etiquetasColumnas = null,
        maximoTablasExactas = 100000,
        simulaciones = 10000,
        semilla = 20260723
    } = opciones;

    validarNivelConfianza(
        nivelConfianza
    );

    if (
        !Number.isInteger(
            maximoTablasExactas
        ) ||
        maximoTablasExactas < 100
    ) {
        throw new RangeError(
            "El máximo de tablas exactas debe ser un entero de al menos 100."
        );
    }

    if (
        !Number.isInteger(simulaciones) ||
        simulaciones < 1000
    ) {
        throw new RangeError(
            "El número de simulaciones debe ser un entero de al menos 1000."
        );
    }
    if (!Number.isInteger(semilla)) {
        throw new RangeError(
            "La semilla de Monte Carlo debe ser un entero."
        );
    }

    const datos = prepararTabla(
        tabla,
        etiquetasFilas,
        etiquetasColumnas
    );

    if (
        datos.numeroFilas === 2 &&
        datos.numeroColumnas === 2
    ) {
        return pruebaFisherExacta2x2(
            tabla,
            {
                nivelConfianza,
                etiquetasFilas,
                etiquetasColumnas
            }
        );
    }

    const esperadas =
        calcularEsperadas(datos);
    const diagnostico =
        calcularDiagnosticoEsperadas(
            esperadas
        );
    const componentes =
        calcularComponentesChiCuadrado(
            datos,
            esperadas
        );
    const medidas =
        calcularMedidasAsociacion(
            datos,
            componentes.chiCuadrado
        );
    const exacta =
        calcularFisherFreemanHalton(
            datos,
            {
                maximoTablasExactas,
                simulaciones,
                semilla
            }
        );
    const alfa = 1 - nivelConfianza;

    return {
        id:
            "fisher-freeman-halton",
        nombre:
            "Prueba de Fisher–Freeman–Halton",
        metodo:
            exacta.metodo,
        estadistico: {
            simbolo: "χ² descriptivo",
            valor:
                componentes.chiCuadrado
        },
        gradosLibertad:
            (
                datos.numeroFilas - 1
            ) *
            (
                datos.numeroColumnas - 1
            ),
        valorP:
            exacta.valorP,
        nivelConfianza,
        alfa,
        significativo:
            exacta.valorP < alfa,
        detallesExactos:
            exacta,
        advertencias:
            exacta.exacta
                ? []
                : [
                    "El espacio de tablas fue demasiado grande para una enumeración completa; el valor p se estimó mediante Monte Carlo."
                ],
        ...crearBaseResultado(
            datos,
            esperadas,
            componentes,
            diagnostico,
            medidas
        )
    };
}

export function analizarAsociacionCategorica({
    tabla,
    prueba = "automatico",
    nivelConfianza = 0.95,
    etiquetasFilas = null,
    etiquetasColumnas = null,
    maximoTablasExactas = 100000,
    simulaciones = 10000,
    semilla = 20260723
}) {
    const opciones = {
        nivelConfianza,
        etiquetasFilas,
        etiquetasColumnas,
        maximoTablasExactas,
        simulaciones,
        semilla
    };

    if (prueba === "automatico") {
        const datos = prepararTabla(
            tabla,
            etiquetasFilas,
            etiquetasColumnas
        );
        const esperadas =
            calcularEsperadas(datos);
        const diagnostico =
            calcularDiagnosticoEsperadas(
                esperadas
            );

        if (diagnostico.adecuado) {
            return pruebaChiCuadradoIndependencia(
                tabla,
                opciones
            );
        }

        if (
            datos.numeroFilas === 2 &&
            datos.numeroColumnas === 2
        ) {
            return pruebaFisherExacta2x2(
                tabla,
                opciones
            );
        }

        return pruebaFisherFreemanHalton(
            tabla,
            opciones
        );
    }

    switch (prueba) {
        case "chi-cuadrado":
        case "chi-cuadrado-independencia":
        case "chi-cuadrado-independencia-2x2":
        case "chi-cuadrado-independencia-rxc":
            return pruebaChiCuadradoIndependencia(
                tabla,
                opciones
            );

        case "fisher":
        case "fisher-exacta":
        case "fisher-exacta-2x2":
            return pruebaFisherExacta2x2(
                tabla,
                opciones
            );

        case "fisher-freeman-halton":
            return pruebaFisherFreemanHalton(
                tabla,
                opciones
            );

        default:
            throw new Error(
                "La prueba de asociación solicitada no está disponible."
            );
    }
}
