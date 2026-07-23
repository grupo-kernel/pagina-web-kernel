export const fichasMetodologicasEvaluacionEducativa = {
    "evaluacion-educativa-clasica": {
        nombre: "Análisis clásico de ítems en evaluación educativa",
        definicion:
            "Procedimiento psicométrico que examina el comportamiento de las preguntas de una prueba mediante dificultad, discriminación, correlación punto-biserial, consistencia interna y funcionamiento de distractores.",
        cuandoUsar: [
            "La evaluación contiene preguntas calificadas como correctas o incorrectas.",
            "Se dispone de las respuestas individuales o de una matriz ya codificada como 0 y 1.",
            "Se desea revisar la calidad técnica de las preguntas después de una aplicación piloto o real.",
            "La puntuación total representa razonablemente el dominio evaluado o una subescala definida."
        ],
        hipotesis: {
            h0:
                "El análisis clásico de ítems no se resume en una única hipótesis nula; se estiman indicadores dependientes de la muestra y se contrastan con criterios técnicos y curriculares.",
            h1:
                "Las preguntas muestran dificultad apropiada, discriminación positiva, relación coherente con la puntuación total y distractores funcionales."
        },
        supuestos: [
            "La clave de respuestas es correcta y corresponde a la versión aplicada.",
            "Las respuestas de cada estudiante están correctamente alineadas con las preguntas.",
            "La muestra representa razonablemente la población en la que se interpretará la prueba.",
            "La puntuación total utilizada como criterio interno es suficientemente coherente con el constructo evaluado.",
            "Las preguntas son esencialmente independientes una vez controlado el nivel de dominio.",
            "El tamaño de los grupos extremos es suficiente para estimar discriminación con estabilidad.",
            "Los datos ausentes y las omisiones se tratan mediante una regla explícita."
        ],
        estadistico:
            "La dificultad es la proporción de aciertos. La discriminación por grupos extremos es la diferencia entre las proporciones de aciertos del grupo superior e inferior. La correlación punto-biserial corregida relaciona el acierto con la puntuación obtenida en el resto de la prueba. KR-20 resume la consistencia interna de ítems dicotómicos.",
        efecto:
            "Informe dificultad, discriminación, correlación punto-biserial, KR-20, KR-20 si se elimina cada pregunta, distribución de puntuaciones y funcionamiento de distractores.",
        reporteAPA:
            "Describa el número de estudiantes y preguntas, procedimiento de puntuación, proporción usada para grupos extremos, media y desviación de la puntuación total, KR-20 y rango de dificultad, discriminación y punto-biserial. Explique qué preguntas se conservaron o revisaron y por qué.",
        posthoc: [],
        alternativas: [
            "Teoría de respuesta al ítem cuando se requiere modelar dificultad y discriminación con menor dependencia de la muestra.",
            "Modelo de Rasch para construir medidas invariantes bajo sus supuestos.",
            "Análisis factorial para instrumentos con respuestas ordinales o escalas de actitudes.",
            "Modelos politómicos para preguntas con crédito parcial.",
            "Análisis de funcionamiento diferencial del ítem para estudiar posible sesgo entre grupos."
        ],
        erroresFrecuentes: [
            "Confundir el índice de dificultad con dificultad en sentido inverso: un valor alto representa mayor proporción de aciertos.",
            "Eliminar preguntas únicamente por un punto de corte estadístico sin revisar su contenido.",
            "Interpretar KR-20 como evidencia de validez.",
            "Calcular discriminación con grupos extremos demasiado pequeños.",
            "No revisar la clave cuando la discriminación o el punto-biserial son negativos.",
            "Considerar funcional un distractor solo porque fue seleccionado, sin comparar grupos superior e inferior.",
            "Generalizar indicadores obtenidos en una muestra muy diferente de la población objetivo."
        ],
        ejemplo:
            "Se analizan 40 preguntas de una prueba de matemática aplicada a 120 estudiantes para identificar preguntas extremadamente fáciles, distractores no funcionales y preguntas con discriminación negativa.",
        referencias: [
            "Crocker, L., & Algina, J. (1986). Introduction to Classical and Modern Test Theory.",
            "Ebel, R. L., & Frisbie, D. A. (1991). Essentials of Educational Measurement.",
            "Haladyna, T. M. (2004). Developing and Validating Multiple-Choice Test Items."
        ]
    }
};
