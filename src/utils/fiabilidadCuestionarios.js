const EPS = 1e-12;

function media(valores) {
    return valores.reduce((total, valor) => total + valor, 0) /
        valores.length;
}

function varianzaMuestral(valores) {
    if (valores.length < 2) return null;
    const promedio = media(valores);
    return valores.reduce(
        (total, valor) => total + (valor - promedio) ** 2,
        0
    ) / (valores.length - 1);
}

function desviacionMuestral(valores) {
    const varianza = varianzaMuestral(valores);
    return varianza === null ? null : Math.sqrt(Math.max(varianza, 0));
}

function covarianzaMuestral(x, y) {
    const mediaX = media(x);
    const mediaY = media(y);
    return x.reduce(
        (total, valor, indice) =>
            total + (valor - mediaX) * (y[indice] - mediaY),
        0
    ) / (x.length - 1);
}

function correlacion(x, y) {
    const desviacionX = desviacionMuestral(x);
    const desviacionY = desviacionMuestral(y);

    if (
        desviacionX === null ||
        desviacionY === null ||
        desviacionX < EPS ||
        desviacionY < EPS
    ) {
        return null;
    }

    return Math.max(
        -1,
        Math.min(
            1,
            covarianzaMuestral(x, y) /
                (desviacionX * desviacionY)
        )
    );
}

function transponer(matriz) {
    return matriz[0].map((_, columna) =>
        matriz.map((fila) => fila[columna])
    );
}

function sumarFilas(matriz) {
    return matriz.map((fila) =>
        fila.reduce((total, valor) => total + valor, 0)
    );
}

function alfaCronbach(matriz) {
    const k = matriz[0].length;

    if (k < 2) return null;

    const columnas = transponer(matriz);
    const varianzasItems = columnas.map(varianzaMuestral);
    const totales = sumarFilas(matriz);
    const varianzaTotal = varianzaMuestral(totales);

    if (
        varianzaTotal === null ||
        varianzaTotal < EPS ||
        varianzasItems.some((valor) => valor === null)
    ) {
        return null;
    }

    return k / (k - 1) *
        (1 -
            varianzasItems.reduce((total, valor) => total + valor, 0) /
                varianzaTotal);
}

function matrizCorrelaciones(columnas) {
    return columnas.map((columnaA, i) =>
        columnas.map((columnaB, j) => {
            if (i === j) return 1;
            return correlacion(columnaA, columnaB) ?? 0;
        })
    );
}

function correlacionInteritemMedia(correlaciones) {
    const valores = [];

    for (let i = 0; i < correlaciones.length; i += 1) {
        for (let j = i + 1; j < correlaciones.length; j += 1) {
            valores.push(correlaciones[i][j]);
        }
    }

    return valores.length ? media(valores) : null;
}

function alfaEstandarizado(k, correlacionMedia) {
    if (correlacionMedia === null) return null;
    const denominador = 1 + (k - 1) * correlacionMedia;

    if (Math.abs(denominador) < EPS) return null;

    return k * correlacionMedia / denominador;
}

function multiplicarMatrizVector(matriz, vector) {
    return matriz.map((fila) =>
        fila.reduce(
            (total, valor, indice) => total + valor * vector[indice],
            0
        )
    );
}

function productoPunto(a, b) {
    return a.reduce(
        (total, valor, indice) => total + valor * b[indice],
        0
    );
}

function primerComponente(correlaciones) {
    const k = correlaciones.length;
    let vector = Array(k).fill(1 / Math.sqrt(k));

    for (let iteracion = 0; iteracion < 300; iteracion += 1) {
        const producto = multiplicarMatrizVector(correlaciones, vector);
        const norma = Math.sqrt(productoPunto(producto, producto));

        if (norma < EPS) break;

        const nuevo = producto.map((valor) => valor / norma);
        const cambio = Math.max(
            ...nuevo.map((valor, indice) =>
                Math.abs(valor - vector[indice])
            )
        );
        vector = nuevo;

        if (cambio < 1e-11) break;
    }

    if (vector.reduce((total, valor) => total + valor, 0) < 0) {
        vector = vector.map((valor) => -valor);
    }

    const valorPropio = productoPunto(
        vector,
        multiplicarMatrizVector(correlaciones, vector)
    );
    const raiz = Math.sqrt(Math.max(valorPropio, 0));
    const cargas = vector.map((valor) =>
        Math.max(-0.999, Math.min(0.999, raiz * valor))
    );
    const unicidades = cargas.map((carga) =>
        Math.max(1 - carga ** 2, EPS)
    );
    const sumaCargas = cargas.reduce((total, valor) => total + valor, 0);
    const omega = sumaCargas ** 2 /
        (sumaCargas ** 2 +
            unicidades.reduce((total, valor) => total + valor, 0));

    return {
        valorPropio,
        proporcionVarianza: valorPropio / k,
        cargas,
        unicidades,
        omega
    };
}

function eliminarColumna(matriz, columnaEliminada) {
    return matriz.map((fila) =>
        fila.filter((_, indice) => indice !== columnaEliminada)
    );
}

function asimetriaMuestral(valores) {
    const n = valores.length;
    const promedio = media(valores);
    const desviacion = desviacionMuestral(valores);

    if (n < 3 || desviacion === null || desviacion < EPS) return null;

    const sumaCubos = valores.reduce(
        (total, valor) =>
            total + ((valor - promedio) / desviacion) ** 3,
        0
    );

    return n / ((n - 1) * (n - 2)) * sumaCubos;
}

function construirHistograma(valores) {
    const minimo = Math.min(...valores);
    const maximo = Math.max(...valores);

    if (Math.abs(maximo - minimo) < EPS) {
        return [{ inferior: minimo, superior: maximo, frecuencia: valores.length }];
    }

    const numeroClases = Math.max(
        4,
        Math.min(12, Math.ceil(1 + 3.322 * Math.log10(valores.length)))
    );
    const amplitud = (maximo - minimo) / numeroClases;
    const clases = Array.from({ length: numeroClases }, (_, indice) => ({
        inferior: minimo + indice * amplitud,
        superior: indice === numeroClases - 1
            ? maximo
            : minimo + (indice + 1) * amplitud,
        frecuencia: 0
    }));

    valores.forEach((valor) => {
        const indice = Math.min(
            numeroClases - 1,
            Math.floor((valor - minimo) / amplitud)
        );
        clases[indice].frecuencia += 1;
    });

    return clases;
}

function interpretarCoeficiente(valor, nombre) {
    if (valor === null || !Number.isFinite(valor)) {
        return `${nombre} no pudo calcularse con los datos disponibles.`;
    }

    if (valor < 0) {
        return `${nombre} es negativo (${valor.toFixed(3)}), lo que indica covariación incompatible con una escala homogénea o posibles ítems invertidos sin recodificar.`;
    }
    if (valor < 0.50) {
        return `${nombre} es muy bajo (${valor.toFixed(3)}). La consistencia interna del instrumento requiere revisión profunda.`;
    }
    if (valor < 0.60) {
        return `${nombre} es bajo (${valor.toFixed(3)}).`;
    }
    if (valor < 0.70) {
        return `${nombre} es cuestionable (${valor.toFixed(3)}).`;
    }
    if (valor < 0.80) {
        return `${nombre} alcanza un nivel generalmente aceptable (${valor.toFixed(3)}).`;
    }
    if (valor < 0.90) {
        return `${nombre} muestra buena consistencia interna (${valor.toFixed(3)}).`;
    }

    return `${nombre} es muy alto (${valor.toFixed(3)}); además de buena consistencia, conviene revisar posible redundancia entre ítems.`;
}

function validarMatriz(matriz, nombresItems) {
    if (!Array.isArray(matriz) || matriz.length < 5) {
        throw new Error(
            "Se requieren al menos cinco participantes con respuestas completas."
        );
    }
    if (!Array.isArray(matriz[0]) || matriz[0].length < 3) {
        throw new Error(
            "El cuestionario debe contener al menos tres ítems."
        );
    }

    const k = matriz[0].length;

    if (!matriz.every((fila) => Array.isArray(fila) && fila.length === k)) {
        throw new Error(
            "Todas las filas deben contener la misma cantidad de ítems."
        );
    }

    const numerica = matriz.map((fila, i) =>
        fila.map((valor, j) => {
            const numero = Number(valor);

            if (!Number.isFinite(numero)) {
                throw new Error(
                    `La respuesta de la fila ${i + 1}, ítem ${j + 1}, no es numérica.`
                );
            }

            return numero;
        })
    );
    const nombres = Array.from(
        { length: k },
        (_, indice) => nombresItems?.[indice]?.trim() || `Ítem ${indice + 1}`
    );

    return { matriz: numerica, nombres };
}

function recodificarInvertidos(
    matriz,
    itemsInvertidos,
    minimoEscala,
    maximoEscala
) {
    const invertidos = new Set(itemsInvertidos);

    return matriz.map((fila) =>
        fila.map((valor, indice) =>
            invertidos.has(indice)
                ? minimoEscala + maximoEscala - valor
                : valor
        )
    );
}

function calcularSpearmanBrown(matriz) {
    const primeraMitad = matriz.map((fila) =>
        fila.reduce(
            (total, valor, indice) =>
                indice % 2 === 0 ? total + valor : total,
            0
        )
    );
    const segundaMitad = matriz.map((fila) =>
        fila.reduce(
            (total, valor, indice) =>
                indice % 2 === 1 ? total + valor : total,
            0
        )
    );
    const r = correlacion(primeraMitad, segundaMitad);

    if (r === null || Math.abs(1 + r) < EPS) {
        return { correlacionMitades: r, spearmanBrown: null };
    }

    return {
        correlacionMitades: r,
        spearmanBrown: 2 * r / (1 + r)
    };
}

export function analizarFiabilidadCuestionario({
    matriz,
    nombresItems = [],
    itemsInvertidos = [],
    minimoEscala = 1,
    maximoEscala = 5,
    filasExcluidas = 0
}) {
    const validacion = validarMatriz(matriz, nombresItems);
    const minimo = Number(minimoEscala);
    const maximo = Number(maximoEscala);

    if (!Number.isFinite(minimo) || !Number.isFinite(maximo) || maximo <= minimo) {
        throw new Error(
            "Los límites de la escala deben ser numéricos y el máximo debe superar al mínimo."
        );
    }

    const k = validacion.matriz[0].length;
    const invertidos = [...new Set(itemsInvertidos.map(Number))];

    if (
        invertidos.some(
            (indice) =>
                !Number.isInteger(indice) ||
                indice < 0 ||
                indice >= k
        )
    ) {
        throw new Error(
            "La lista de ítems invertidos contiene una posición no válida."
        );
    }

    validacion.matriz.forEach((fila, i) => {
        fila.forEach((valor, j) => {
            if (valor < minimo || valor > maximo) {
                throw new Error(
                    `La respuesta de la fila ${i + 1}, ${validacion.nombres[j]}, está fuera del rango ${minimo}–${maximo}.`
                );
            }
        });
    });

    const matrizRecodificada = recodificarInvertidos(
        validacion.matriz,
        invertidos,
        minimo,
        maximo
    );
    const columnas = transponer(matrizRecodificada);
    const varianzas = columnas.map(varianzaMuestral);
    const sinVariabilidad = varianzas
        .map((valor, indice) => ({ valor, indice }))
        .filter(({ valor }) => valor === null || valor < EPS);

    if (sinVariabilidad.length) {
        throw new Error(
            `Los siguientes ítems no presentan variabilidad: ${sinVariabilidad
                .map(({ indice }) => validacion.nombres[indice])
                .join(", ")}. Deben revisarse antes de calcular la fiabilidad.`
        );
    }

    const correlaciones = matrizCorrelaciones(columnas);
    const correlacionMedia = correlacionInteritemMedia(correlaciones);
    const alfa = alfaCronbach(matrizRecodificada);
    const alfaStd = alfaEstandarizado(k, correlacionMedia);
    const componente = primerComponente(correlaciones);
    const totales = sumarFilas(matrizRecodificada);
    const divisionMitades = calcularSpearmanBrown(matrizRecodificada);

    const items = columnas.map((columna, indice) => {
        const totalSinItem = matrizRecodificada.map((fila) =>
            fila.reduce(
                (total, valor, j) =>
                    j === indice ? total : total + valor,
                0
            )
        );
        const correlacionItemTotal = correlacion(columna, totalSinItem);
        const alfaSiSeElimina = alfaCronbach(
            eliminarColumna(matrizRecodificada, indice)
        );
        const alertas = [];

        if (correlacionItemTotal === null) {
            alertas.push("No fue posible calcular la correlación ítem–total.");
        } else if (correlacionItemTotal < 0) {
            alertas.push("Correlación ítem–total negativa; revise redacción o inversión.");
        } else if (correlacionItemTotal < 0.30) {
            alertas.push("Correlación ítem–total inferior a 0.30.");
        }

        if (
            alfa !== null &&
            alfaSiSeElimina !== null &&
            alfaSiSeElimina > alfa + 0.02
        ) {
            alertas.push("La eliminación del ítem aumentaría el alfa de forma apreciable.");
        }

        return {
            indice: indice + 1,
            nombre: validacion.nombres[indice],
            invertido: invertidos.includes(indice),
            media: media(columna),
            varianza: varianzas[indice],
            desviacion: desviacionMuestral(columna),
            minimo: Math.min(...columna),
            maximo: Math.max(...columna),
            asimetria: asimetriaMuestral(columna),
            correlacionItemTotal,
            alfaSiSeElimina,
            cargaUnFactor: componente.cargas[indice],
            unicidad: componente.unicidades[indice],
            alertas
        };
    });

    const advertencias = [
        "La consistencia interna no demuestra por sí sola validez, unidimensionalidad ni estabilidad temporal.",
        "El omega informado es una aproximación de un factor basada en la matriz de correlaciones; debe complementarse con análisis factorial cuando la dimensionalidad sea relevante."
    ];

    if (matrizRecodificada.length < 30) {
        advertencias.push(
            "La muestra contiene menos de 30 participantes; las estimaciones pueden ser inestables."
        );
    }
    if (filasExcluidas > 0) {
        advertencias.push(
            `Se excluyeron ${filasExcluidas} filas por contener datos ausentes o incompletos.`
        );
    }
    if (componente.proporcionVarianza < 0.40) {
        advertencias.push(
            "El primer componente explica menos del 40 % de la varianza estandarizada; la aproximación unidimensional debe interpretarse con cautela."
        );
    }

    const interpretacion = [
        interpretarCoeficiente(alfa, "El alfa de Cronbach"),
        interpretarCoeficiente(
            componente.omega,
            "El omega total aproximado"
        ),
        correlacionMedia === null
            ? "La correlación interítem media no está disponible."
            : correlacionMedia < 0.15
                ? `La correlación interítem media es baja (${correlacionMedia.toFixed(3)}), lo que puede reflejar poca homogeneidad.`
                : correlacionMedia > 0.50
                    ? `La correlación interítem media es elevada (${correlacionMedia.toFixed(3)}); revise posible redundancia.`
                    : `La correlación interítem media es ${correlacionMedia.toFixed(3)}, dentro del intervalo orientativo de 0.15 a 0.50.`,
        items.some((item) => item.correlacionItemTotal < 0.30)
            ? "Existen ítems con correlación ítem–total corregida inferior a 0.30 que requieren revisión sustantiva."
            : "Todos los ítems alcanzan una correlación ítem–total corregida de al menos 0.30.",
        `El primer componente explica ${(componente.proporcionVarianza * 100).toFixed(2)} % de la varianza de la matriz de correlaciones.`
    ];

    return {
        tipoAnalisis: "fiabilidad-cuestionario",
        n: matrizRecodificada.length,
        k,
        nombresItems: validacion.nombres,
        itemsInvertidos: invertidos.map((indice) => indice + 1),
        escala: { minimo, maximo },
        filasExcluidas,
        matrizRecodificada,
        puntuacionesTotales: totales,
        distribucionTotal: construirHistograma(totales),
        fiabilidad: {
            alfaCronbach: alfa,
            alfaEstandarizado: alfaStd,
            omegaTotalAproximado: componente.omega,
            correlacionInteritemMedia: correlacionMedia,
            correlacionMitades: divisionMitades.correlacionMitades,
            spearmanBrown: divisionMitades.spearmanBrown,
            mediaPuntuacionTotal: media(totales),
            desviacionPuntuacionTotal: desviacionMuestral(totales),
            varianzaPuntuacionTotal: varianzaMuestral(totales),
            minimoPuntuacionTotal: Math.min(...totales),
            maximoPuntuacionTotal: Math.max(...totales)
        },
        dimensionalidadAproximada: {
            valorPropioPrincipal: componente.valorPropio,
            proporcionVarianzaPrimerComponente:
                componente.proporcionVarianza,
            cargas: componente.cargas,
            unicidades: componente.unicidades
        },
        correlaciones,
        items,
        interpretacion,
        advertencias
    };
}
