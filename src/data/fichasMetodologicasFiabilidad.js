export const fichasMetodologicasFiabilidad = {
    "fiabilidad-cuestionario": {
        nombre: "Consistencia interna de un cuestionario",
        definicion:
            "Evaluación del grado en que los ítems de una escala covarían y contribuyen a una puntuación común. Alfa, omega, KR-20 y división por mitades resumen aspectos diferentes de la precisión, pero no demuestran por sí solos validez ni unidimensionalidad.",
        cuandoUsar: [
            "El instrumento contiene varios ítems destinados a formar una puntuación total o una subescala claramente definida.",
            "Se desea estudiar la contribución de cada ítem antes de interpretar la puntuación.",
            "Los ítems invertidos han sido identificados y recodificados correctamente.",
            "Se dispone de una muestra de participantes con respuestas comparables y una política explícita para datos ausentes."
        ],
        hipotesis: {
            h0:
                "La fiabilidad no se resume mediante una única hipótesis nula universal; se estiman coeficientes, intervalos de confianza y diagnósticos de dimensionalidad.",
            h1:
                "Los ítems comparten suficiente varianza común para sustentar la interpretación propuesta dentro de la población y condiciones estudiadas."
        },
        supuestos: [
            "Los ítems pertenecen teóricamente al mismo constructo o subescala.",
            "Las observaciones de los participantes son independientes.",
            "Los ítems invertidos están correctamente recodificados.",
            "No existen ítems sin variabilidad ni errores sistemáticos de codificación.",
            "Para alfa como estimador de fiabilidad bajo equivalencia tau, las cargas y errores deben cumplir condiciones restrictivas.",
            "Para omega unidimensional, una estructura factorial de un factor debe ser razonable.",
            "Para KR-20, todos los ítems deben ser dicotómicos y estar codificados con 0 y 1.",
            "El tratamiento de datos ausentes y la muestra analizada deben documentarse."
        ],
        estadistico:
            "El alfa utiliza las varianzas de los ítems y de la puntuación total. El alfa estandarizado se obtiene de la correlación interítem media. Omega combina cargas y unicidades de un modelo común aproximado. KR-20 es la forma dicotómica del alfa. La correlación ítem–total corregida excluye el propio ítem de la puntuación total.",
        efecto:
            "Informe alfa, alfa estandarizado, omega, KR-20 cuando aplique, correlación interítem media, correlaciones ítem–total, alfa si se elimina el ítem, cargas y sus intervalos de confianza cuando estén disponibles.",
        reporteAPA:
            "Describa la muestra, número de ítems, rango de respuesta, recodificación, tratamiento de datos ausentes, α, ω, KR-20 cuando corresponda, intervalos bootstrap, correlación interítem media y rango de correlaciones ítem–total. Informe además la evidencia de dimensionalidad.",
        posthoc: [],
        alternativas: [
            "Fiabilidad por subescala cuando el instrumento es multidimensional.",
            "Omega jerárquico cuando existe un factor general y factores específicos.",
            "Coeficientes ordinales basados en correlaciones policóricas para ítems ordinales con pocas categorías.",
            "Estabilidad test–retest para consistencia temporal.",
            "Acuerdo entre evaluadores cuando las puntuaciones dependen de jueces.",
            "Teoría de respuesta al ítem para estudiar precisión a diferentes niveles del rasgo."
        ],
        erroresFrecuentes: [
            "Interpretar un coeficiente alto como prueba de validez o unidimensionalidad.",
            "Calcular un único alfa para dimensiones distintas.",
            "Eliminar ítems únicamente porque aumenta el alfa.",
            "No recodificar ítems invertidos.",
            "Usar 0.70 como criterio universal sin considerar el propósito del instrumento.",
            "Ignorar redundancia cuando existen correlaciones interítem muy altas.",
            "Calcular KR-20 con ítems que no son dicotómicos.",
            "Reportar omega sin describir el modelo factorial que lo sustenta.",
            "Omitir la incertidumbre muestral y el tratamiento de datos ausentes."
        ],
        ejemplo:
            "Se evalúa una escala de autorregulación académica de seis ítems, uno invertido, mediante alfa, omega, correlaciones ítem–total e intervalos bootstrap; para una prueba de respuestas correctas e incorrectas se informa además KR-20.",
        referencias: [
            "Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests.",
            "McDonald, R. P. (1999). Test Theory: A Unified Treatment.",
            "Dunn, T. J., Baguley, T., & Brunsden, V. (2014). From alpha to omega.",
            "Raykov, T., & Marcoulides, G. A. (2011). Introduction to Psychometric Theory."
        ]
    }
};
