const EPS = 1e-12;

function media(valores) {
    return valores.reduce((total, valor) => total + valor, 0) /
        valores.length;
}

function mediana(valores) {
    const ordenados = [...valores].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);

    return ordenados.length % 2
        ? ordenados[mitad]
        : (ordenados[mitad - 1] + ordenados[mitad]) / 2;
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
    return varianza === null
        ? null
        : Math.sqrt(Math.max(varianza, 0));
}

function covarianzaMuestral(x, y) {
    if (x.length !== y.length || x.length < 2) return null;
    const mediaX = media(x);
    const mediaY = media(y);

    return x.reduce(
        (total, valor, indice) =>
            total + (valor - mediaX) * (y[indice] - mediaY),
        0
    ) / (x.length - 1);
}

function correlacion(x, y) {
    const covarianza = covarianzaMuestral(x, y);
    const desviacionX = desviacionMuestral(x);
    const desviacionY = desviacionMuestral(y);

    if (
        covarianza === null ||
        desviacionX === null ||
        desviacionY === null ||
        desviacionX < EPS ||
        desviacionY < EPS
    ) {
        return null;
    }

    return Math.max(
        -1,
        Math.min(1, covarianza / (desviacionX * desviacionY))
    );
}

function normalizarRespuesta(valor) {
    return String(valor ?? "")
        .trim()
        .toUpperCase();
}

function validarEntrada({
    respuestas,
    clave,
    nombresItems,
    idsEstudiantes,
    modo
}) {
    if (!Array.isArray(respuestas) || respuestas.length < 5) {
        throw new Error(
            "Se requieren al menos cinco estudiantes con respuestas completas."
        );
    }
    if (!Array.isArray(respuestas[0]) || respuestas[0].length < 3) {
        throw new Error(
            "La evaluación debe contener al menos tres preguntas."
        );
    }

    const k = respuestas[0].length;

    if (!respuestas.every(
        (fila) => Array.isArray(fila) && fila.length === k
    )) {
        throw new Error(
            "Todas las filas deben contener la misma cantidad de preguntas."
        );
    }

    const nombres = Array.from(
        { length: k },
        (_, indice) =>
            String(nombresItems?.[indice] ?? "").trim() ||
            `Pregunta ${indice + 1}`
    );
    const ids = Array.from(
        { length: respuestas.length },
        (_, indice) =>
            String(idsEstudiantes?.[indice] ?? "").trim() ||
            `E${String(indice + 1).padStart(3, "0")}`
    );

    if (modo === "binario") {
        const matriz = respuestas.map((fila, i) =>
            fila.map((valor, j) => {
                const numero = Number(valor);

                if (!(numero === 0 || numero === 1)) {
                    throw new Error(
                        `La fila ${i + 1}, ${nombres[j]}, debe contener 0 o 1.`
                    );
                }

                return numero;
            })
        );

        return {
            matriz,
            respuestasNormalizadas: matriz.map((fila) =>
                fila.map(String)
            ),
            claveNormalizada: Array(k).fill("1"),
            nombres,
            ids
        };
    }

    if (!Array.isArray(clave) || clave.length !== k) {
        throw new Error(
            `La clave debe contener exactamente ${k} respuestas.`
        );
    }

    const claveNormalizada = clave.map(normalizarRespuesta);

    if (claveNormalizada.some((valor) => !valor)) {
        throw new Error(
            "La clave contiene una respuesta vacía."
        );
    }

    const respuestasNormalizadas = respuestas.map((fila, i) =>
        fila.map((valor, j) => {
            const respuesta = normalizarRespuesta(valor);

            if (!respuesta) {
                throw new Error(
                    `La fila ${i + 1}, ${nombres[j]}, contiene una respuesta vacía.`
                );
            }

            return respuesta;
        })
    );
    const matriz = respuestasNormalizadas.map((fila) =>
        fila.map((respuesta, indice) =>
            respuesta === claveNormalizada[indice] ? 1 : 0
        )
    );

    return {
        matriz,
        respuestasNormalizadas,
        claveNormalizada,
        nombres,
        ids
    };
}

function alfaBinario(matriz) {
    const k = matriz[0].length;
    const totales = matriz.map((fila) =>
        fila.reduce((total, valor) => total + valor, 0)
    );
    const varianzaTotal = varianzaMuestral(totales);

    if (varianzaTotal === null || varianzaTotal < EPS) return null;

    const sumaVarianzas = Array.from(
        { length: k },
        (_, indice) =>
            varianzaMuestral(matriz.map((fila) => fila[indice])) ?? 0
    ).reduce((total, valor) => total + valor, 0);

    return k / (k - 1) *
        (1 - sumaVarianzas / varianzaTotal);
}

function clasificarDificultad(indice) {
    if (indice <= 0.20) return "Muy difícil";
    if (indice <= 0.40) return "Difícil";
    if (indice <= 0.60) return "Moderada";
    if (indice <= 0.80) return "Fácil";
    return "Muy fácil";
}

function clasificarDiscriminacion(indice) {
    if (indice < 0) return "Negativa";
    if (indice < 0.20) return "Deficiente";
    if (indice < 0.30) return "Marginal";
    if (indice < 0.40) return "Buena";
    return "Excelente";
}

function clasificarPuntoBiserial(valor) {
    if (valor === null) return "No calculable";
    if (valor < 0) return "Negativa";
    if (valor < 0.20) return "Débil";
    if (valor < 0.30) return "Aceptable con revisión";
    if (valor < 0.40) return "Buena";
    return "Muy buena";
}

function construirHistograma(valores) {
    const minimo = Math.min(...valores);
    const maximo = Math.max(...valores);

    return Array.from(
        { length: maximo - minimo + 1 },
        (_, indice) => {
            const puntuacion = minimo + indice;
            return {
                puntuacion,
                frecuencia: valores.filter(
                    (valor) => valor === puntuacion
                ).length
            };
        }
    );
}

function gruposExtremos(totales, proporcion) {
    const n = totales.length;
    const tamano = Math.max(
        1,
        Math.min(
            Math.floor(n / 2),
            Math.floor(n * proporcion)
        )
    );
    const construirPesos = (descendente) => {
        const niveles = new Map();

        totales.forEach((total, indice) => {
            if (!niveles.has(total)) {
                niveles.set(total, []);
            }
            niveles.get(total).push(indice);
        });

        const puntuaciones = [...niveles.keys()].sort(
            (a, b) => descendente ? b - a : a - b
        );
        const pesos = Array(n).fill(0);
        let restantes = tamano;
        let huboAjuste = false;

        for (const puntuacion of puntuaciones) {
            if (restantes <= EPS) break;
            const indices = niveles.get(puntuacion);
            const peso = Math.min(1, restantes / indices.length);
            indices.forEach((indice) => {
                pesos[indice] = peso;
            });
            if (peso < 1) huboAjuste = true;
            restantes -= peso * indices.length;
        }

        return {
            pesos,
            indices: pesos
                .map((peso, indice) => ({ peso, indice }))
                .filter((fila) => fila.peso > EPS)
                .map((fila) => fila.indice),
            huboAjuste
        };
    };
    const superior = construirPesos(true);
    const inferior = construirPesos(false);

    return {
        tamano,
        superiores: superior.indices,
        inferiores: inferior.indices,
        pesosSuperiores: superior.pesos,
        pesosInferiores: inferior.pesos,
        empatesAjustados:
            superior.huboAjuste ||
            inferior.huboAjuste
    };
}

function analizarDistractores({
    respuestas,
    clave,
    nombres,
    superiores,
    inferiores,
    pesosSuperiores,
    pesosInferiores
}) {
    return nombres.map((nombre, indiceItem) => {
        const opciones = [...new Set([
            clave[indiceItem],
            ...respuestas.map((fila) => fila[indiceItem])
        ])].sort();

        const filas = opciones.map((opcion) => {
            const seleccionTotal = respuestas.filter(
                (fila) => fila[indiceItem] === opcion
            ).length;
            const seleccionSuperior = superiores.reduce(
                (total, indice) =>
                    total +
                    (
                        respuestas[indice][indiceItem] === opcion
                            ? pesosSuperiores[indice]
                            : 0
                    ),
                0
            );
            const seleccionInferior = inferiores.reduce(
                (total, indice) =>
                    total +
                    (
                        respuestas[indice][indiceItem] === opcion
                            ? pesosInferiores[indice]
                            : 0
                    ),
                0
            );
            const esClave = opcion === clave[indiceItem];
            const proporcionTotal = seleccionTotal / respuestas.length;
            const totalSuperior = pesosSuperiores.reduce(
                (total, peso) => total + peso,
                0
            );
            const totalInferior = pesosInferiores.reduce(
                (total, peso) => total + peso,
                0
            );
            const proporcionSuperior = seleccionSuperior /
                Math.max(totalSuperior, 1);
            const proporcionInferior = seleccionInferior /
                Math.max(totalInferior, 1);
            const funcional = esClave
                ? null
                : proporcionTotal >= 0.05 &&
                    proporcionInferior > proporcionSuperior;

            return {
                opcion,
                esClave,
                seleccionTotal,
                proporcionTotal,
                seleccionSuperior,
                proporcionSuperior,
                seleccionInferior,
                proporcionInferior,
                funcional,
                observacion: esClave
                    ? "Clave"
                    : proporcionTotal < 0.05
                        ? "Distractor no funcional: selección inferior al 5 %."
                        : proporcionInferior <= proporcionSuperior
                            ? "Distractor débil: no atrae más al grupo inferior."
                            : "Distractor funcional."
            };
        });
        const claveFila = filas.find((fila) => fila.esClave);
        const distractorMasElegido = filas
            .filter((fila) => !fila.esClave)
            .sort((a, b) => b.seleccionTotal - a.seleccionTotal)[0] ?? null;
        const posibleClaveErronea = Boolean(
            distractorMasElegido &&
            claveFila &&
            distractorMasElegido.seleccionTotal > claveFila.seleccionTotal
        );

        return {
            indice: indiceItem + 1,
            nombre,
            clave: clave[indiceItem],
            opciones: filas,
            distractoresNoFuncionales: filas.filter(
                (fila) => !fila.esClave && fila.funcional === false
            ).length,
            posibleClaveErronea
        };
    });
}

function recomendarItem({
    dificultad,
    discriminacion,
    puntoBiserial,
    posibleClaveErronea,
    distractoresNoFuncionales
}) {
    if (posibleClaveErronea || discriminacion < 0 ||
        (puntoBiserial !== null && puntoBiserial < 0)) {
        return {
            decision: "Revisión urgente",
            razon:
                "Existen indicadores negativos o una posible inconsistencia en la clave."
        };
    }
    if (dificultad < 0.05 || dificultad > 0.95) {
        return {
            decision: "Revisar",
            razon:
                "La pregunta es extremadamente difícil o fácil y aporta poca diferenciación."
        };
    }
    if (
        discriminacion >= 0.30 &&
        puntoBiserial !== null &&
        puntoBiserial >= 0.20
    ) {
        return {
            decision: distractoresNoFuncionales
                ? "Conservar y mejorar distractores"
                : "Conservar",
            razon: distractoresNoFuncionales
                ? "El ítem discrimina adecuadamente, pero tiene distractores débiles."
                : "Dificultad y discriminación compatibles con un ítem útil."
        };
    }

    return {
        decision: "Revisar",
        razon:
            "La discriminación o la correlación punto-biserial no alcanzan niveles recomendables."
    };
}

export function analizarEvaluacionEducativa({
    respuestas,
    clave = [],
    nombresItems = [],
    idsEstudiantes = [],
    modo = "opciones",
    proporcionGrupos = 0.27,
    filasExcluidas = 0
}) {
    if (!(proporcionGrupos > 0 && proporcionGrupos <= 0.50)) {
        throw new Error(
            "La proporción de grupos extremos debe estar entre 0 y 0.50."
        );
    }

    const validacion = validarEntrada({
        respuestas,
        clave,
        nombresItems,
        idsEstudiantes,
        modo
    });
    const matriz = validacion.matriz;
    const n = matriz.length;
    const k = matriz[0].length;
    const totales = matriz.map((fila) =>
        fila.reduce((total, valor) => total + valor, 0)
    );
    const grupos = gruposExtremos(totales, proporcionGrupos);
    const distractores = modo === "opciones"
        ? analizarDistractores({
            respuestas: validacion.respuestasNormalizadas,
            clave: validacion.claveNormalizada,
            nombres: validacion.nombres,
            superiores: grupos.superiores,
            inferiores: grupos.inferiores,
            pesosSuperiores: grupos.pesosSuperiores,
            pesosInferiores: grupos.pesosInferiores
        })
        : validacion.nombres.map((nombre, indice) => ({
            indice: indice + 1,
            nombre,
            clave: "1",
            opciones: [],
            distractoresNoFuncionales: 0,
            posibleClaveErronea: false
        }));

    const items = validacion.nombres.map((nombre, indice) => {
        const columna = matriz.map((fila) => fila[indice]);
        const dificultad = media(columna);
        const totalSinItem = matriz.map((fila) =>
            fila.reduce(
                (total, valor, j) =>
                    j === indice ? total : total + valor,
                0
            )
        );
        const puntoBiserial = correlacion(columna, totalSinItem);
        const aciertosSuperiores = grupos.superiores.reduce(
            (total, fila) =>
                total +
                (
                    matriz[fila][indice] === 1
                        ? grupos.pesosSuperiores[fila]
                        : 0
                ),
            0
        );
        const aciertosInferiores = grupos.inferiores.reduce(
            (total, fila) =>
                total +
                (
                    matriz[fila][indice] === 1
                        ? grupos.pesosInferiores[fila]
                        : 0
                ),
            0
        );
        const proporcionSuperior = aciertosSuperiores / grupos.tamano;
        const proporcionInferior = aciertosInferiores / grupos.tamano;
        const discriminacion = proporcionSuperior - proporcionInferior;
        const alfaSiSeElimina = k > 2
            ? alfaBinario(
                matriz.map((fila) =>
                    fila.filter((_, j) => j !== indice)
                )
            )
            : null;
        const diagnosticoDistractores = distractores[indice];
        const recomendacion = recomendarItem({
            dificultad,
            discriminacion,
            puntoBiserial,
            posibleClaveErronea:
                diagnosticoDistractores.posibleClaveErronea,
            distractoresNoFuncionales:
                diagnosticoDistractores.distractoresNoFuncionales
        });

        return {
            indice: indice + 1,
            nombre,
            clave: validacion.claveNormalizada[indice],
            dificultad,
            clasificacionDificultad:
                clasificarDificultad(dificultad),
            discriminacion,
            clasificacionDiscriminacion:
                clasificarDiscriminacion(discriminacion),
            puntoBiserial,
            clasificacionPuntoBiserial:
                clasificarPuntoBiserial(puntoBiserial),
            proporcionSuperior,
            proporcionInferior,
            alfaSiSeElimina,
            distractoresNoFuncionales:
                diagnosticoDistractores.distractoresNoFuncionales,
            posibleClaveErronea:
                diagnosticoDistractores.posibleClaveErronea,
            recomendacion
        };
    });

    const kr20 = alfaBinario(matriz);
    const mediaTotal = media(totales);
    const desviacionTotal = desviacionMuestral(totales);
    const puntuaciones = totales.map((total, indice) => ({
        id: validacion.ids[indice],
        total,
        porcentaje: total / k * 100
    }));
    const advertencias = [];

    if (n < 30) {
        advertencias.push(
            "La muestra contiene menos de 30 estudiantes; los indicadores por ítem pueden ser inestables."
        );
    }
    if (grupos.tamano < 5) {
        advertencias.push(
            "Cada grupo extremo contiene menos de cinco estudiantes; interprete la discriminación con mucha cautela."
        );
    }
    if (grupos.empatesAjustados) {
        advertencias.push(
            "Los empates en los puntos de corte de los grupos extremos se distribuyeron mediante ponderación fraccionaria para evitar que el orden de las filas altere la discriminación."
        );
    }
    if (filasExcluidas > 0) {
        advertencias.push(
            `Se excluyeron ${filasExcluidas} filas por respuestas ausentes o incompletas.`
        );
    }
    if (items.some((item) => item.posibleClaveErronea)) {
        advertencias.push(
            "Al menos una pregunta presenta un distractor más seleccionado que la clave; revise la clave y la redacción."
        );
    }

    const conservar = items.filter(
        (item) => item.recomendacion.decision === "Conservar"
    ).length;
    const revisarUrgente = items.filter(
        (item) => item.recomendacion.decision === "Revisión urgente"
    ).length;
    const interpretacion = [
        kr20 === null
            ? "KR-20 no pudo calcularse porque la puntuación total no presenta variabilidad suficiente."
            : kr20 < 0.70
                ? `KR-20 es ${kr20.toFixed(3)}, inferior al valor orientativo de 0.70; la consistencia de la prueba requiere revisión.`
                : kr20 < 0.90
                    ? `KR-20 es ${kr20.toFixed(3)}, compatible con una consistencia interna generalmente aceptable.`
                    : `KR-20 es ${kr20.toFixed(3)}, muy elevado; revise posible redundancia entre preguntas.`,
        `La puntuación media fue ${mediaTotal.toFixed(2)} de ${k}, con desviación estándar ${desviacionTotal?.toFixed(2) ?? "no disponible"}.`,
        `${conservar} de ${k} preguntas cumplen automáticamente los criterios de conservación sin alertas adicionales.`,
        revisarUrgente
            ? `${revisarUrgente} preguntas requieren revisión urgente por indicadores negativos o posible problema de clave.`
            : "No se detectaron preguntas con criterios automáticos de revisión urgente.",
        "La decisión final debe considerar el contenido curricular, el propósito de la evaluación y evidencia adicional de validez."
    ];

    return {
        tipoAnalisis: "evaluacion-educativa",
        modo,
        n,
        k,
        nombresItems: validacion.nombres,
        idsEstudiantes: validacion.ids,
        clave: validacion.claveNormalizada,
        filasExcluidas,
        proporcionGrupos,
        gruposExtremos: {
            tamano: grupos.tamano,
            idsSuperiores: grupos.superiores.map(
                (indice) => validacion.ids[indice]
            ),
            idsInferiores: grupos.inferiores.map(
                (indice) => validacion.ids[indice]
            ),
            ponderacionesSuperiores:
                grupos.superiores.map((indice) => ({
                    id: validacion.ids[indice],
                    peso: grupos.pesosSuperiores[indice]
                })),
            ponderacionesInferiores:
                grupos.inferiores.map((indice) => ({
                    id: validacion.ids[indice],
                    peso: grupos.pesosInferiores[indice]
                })),
            empatesAjustados:
                grupos.empatesAjustados
        },
        matrizPuntuada: matriz,
        puntuaciones,
        resumenPuntuaciones: {
            media: mediaTotal,
            mediana: mediana(totales),
            desviacion: desviacionTotal,
            varianza: varianzaMuestral(totales),
            minimo: Math.min(...totales),
            maximo: Math.max(...totales),
            histograma: construirHistograma(totales)
        },
        fiabilidad: {
            kr20
        },
        items,
        distractores,
        advertencias,
        interpretacion
    };
}
