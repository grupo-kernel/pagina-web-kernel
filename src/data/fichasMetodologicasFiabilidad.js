export const fichasMetodologicasFiabilidad = {
    "fiabilidad-cuestionario": {
        nombre: "Consistencia interna de un cuestionario",
        definicion:
            "Evaluación del grado en que los ítems de una escala covarían entre sí y contribuyen a una puntuación común. El alfa de Cronbach y el omega de McDonald resumen aspectos diferentes de esa consistencia, pero no demuestran por sí solos validez ni unidimensionalidad.",
        cuandoUsar: [
            "El instrumento contiene varios ítems destinados a medir un mismo constructo o una subescala claramente definida.",
            "Las respuestas se registran en una escala numérica u ordinal tratada como aproximadamente continua.",
            "Se desea estudiar la contribución de cada ítem antes de interpretar una puntuación total.",
            "Los ítems invertidos han sido identificados y recodificados correctamente."
        ],
        hipotesis: {
            h0:
                "La fiabilidad no suele formularse como una única prueba de hipótesis principal; se estiman coeficientes y se examina su precisión, dimensionalidad y coherencia sustantiva.",
            h1:
                "Los ítems comparten suficiente varianza común para sustentar una puntuación de escala interpretable dentro de la población y condiciones estudiadas."
        },
        supuestos: [
            "Los ítems pertenecen teóricamente al mismo constructo o subescala.",
            "Las observaciones de los participantes son independientes.",
            "Los ítems invertidos están correctamente recodificados.",
            "No existen ítems sin variabilidad ni errores sistemáticos de codificación.",
            "Para interpretar alfa como fiabilidad bajo equivalencia tau, las cargas y errores deben satisfacer condiciones restrictivas.",
            "Para omega unidimensional, una estructura factorial de un factor debe ser razonable.",
            "La muestra y el patrón de datos ausentes deben describirse y justificarse."
        ],
        estadistico:
            "El alfa utiliza las varianzas de los ítems y de la puntuación total. El alfa estandarizado se obtiene a partir de la correlación interítem media. El omega combina cargas factoriales y varianzas de error. La correlación ítem–total corregida y el alfa si se elimina el ítem ayudan a revisar el comportamiento individual.",
        efecto:
            "Informe alfa, alfa estandarizado, omega, correlación interítem media, correlaciones ítem–total corregidas y, cuando sea pertinente, intervalos de confianza obtenidos mediante bootstrap u otro procedimiento adecuado.",
        reporteAPA:
            "Describa la muestra, número de ítems, rango de respuesta, recodificación, tratamiento de datos ausentes, α, ω, correlación interítem media y rango de correlaciones ítem–total. Informe la evidencia de dimensionalidad utilizada para justificar la puntuación total.",
        posthoc: [],
        alternativas: [
            "Fiabilidad por subescala cuando el instrumento es multidimensional.",
            "Omega jerárquico cuando existe un factor general y factores específicos.",
            "Coeficientes ordinales basados en correlaciones policóricas para ítems ordinales con pocas categorías.",
            "Estabilidad test–retest para evaluar consistencia temporal.",
            "Acuerdo entre evaluadores cuando las puntuaciones dependen de jueces o codificadores."
        ],
        erroresFrecuentes: [
            "Interpretar alfa elevado como evidencia de validez.",
            "Calcular un único alfa para dimensiones diferentes.",
            "Eliminar ítems únicamente porque aumenta el alfa.",
            "No recodificar ítems invertidos.",
            "Usar 0.70 como criterio universal sin considerar propósito, muestra y consecuencias.",
            "Ignorar redundancia cuando alfa supera 0.90.",
            "Reportar omega sin describir el modelo factorial que lo sustenta."
        ],
        ejemplo:
            "Se evalúa una escala de autorregulación académica de seis ítems, uno de ellos redactado en sentido inverso, para determinar si la puntuación total puede interpretarse con suficiente consistencia interna.",
        referencias: [
            "Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests.",
            "McDonald, R. P. (1999). Test Theory: A Unified Treatment.",
            "Dunn, T. J., Baguley, T., & Brunsden, V. (2014). From alpha to omega.",
            "Revelle, W., & Condon, D. M. (2019). Reliability from alpha to omega."
        ]
    }
};
