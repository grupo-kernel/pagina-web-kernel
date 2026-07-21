export const fichasMetodologicasRelacionadas = {
    "t-student-relacionadas": {
        nombre:
            "t de Student para muestras relacionadas",

        definicion:
            "Prueba paramétrica utilizada para comparar la media de dos mediciones relacionadas mediante el análisis de las diferencias observadas dentro de cada participante o par emparejado.",

        cuandoUsar: [
            "Se comparan exactamente dos mediciones relacionadas.",
            "Las mismas personas son evaluadas en dos momentos o existen pares naturalmente emparejados.",
            "La variable dependiente es cuantitativa.",
            "La distribución de las diferencias pareadas es aproximadamente normal.",
            "Las parejas pueden identificarse correctamente y mantienen el mismo orden en ambas mediciones."
        ],

        hipotesis: {
            h0:
                "La media poblacional de las diferencias pareadas es igual a cero.",
            h1:
                "La media poblacional de las diferencias pareadas es diferente de cero."
        },

        supuestos: [
            "Las observaciones están relacionadas dentro de cada pareja.",
            "Las parejas son independientes entre sí.",
            "La variable dependiente es cuantitativa.",
            "La distribución de las diferencias es aproximadamente normal.",
            "No existen valores atípicos extremos en las diferencias pareadas."
        ],

        estadistico:
            "El estadístico t divide la media de las diferencias pareadas entre su error estándar. Los grados de libertad son n − 1, donde n es el número de parejas.",

        efecto:
            "d_z de Cohen, calculado mediante la media de las diferencias dividida entre la desviación estándar de las diferencias. Puede complementarse con una corrección g_z para muestras pequeñas.",

        reporteAPA:
            "t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d_z = valor.",

        posthoc: [],

        alternativas: [
            "Prueba de rangos con signo de Wilcoxon cuando las diferencias son ordinales, no normales o presentan valores atípicos importantes.",
            "Modelos lineales mixtos cuando existen más momentos, datos incompletos o estructuras jerárquicas.",
            "Pruebas de permutación pareadas cuando se desea una alternativa con menos supuestos distribucionales."
        ],

        erroresFrecuentes: [
            "Evaluar la normalidad de cada medición por separado en lugar de evaluar las diferencias.",
            "Aplicar la prueba a grupos independientes.",
            "Alterar el orden de los participantes entre las dos columnas.",
            "Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.",
            "Interpretar una asociación antes-después como evidencia causal sin considerar el diseño."
        ],

        ejemplo:
            "Se comparan las calificaciones de los mismos estudiantes antes y después de una intervención didáctica.",

        referencias: [
            "Student. (1908). The probable error of a mean.",
            "Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "wilcoxon-relacionadas": {
        nombre:
            "Prueba de rangos con signo de Wilcoxon",

        definicion:
            "Prueba no paramétrica para comparar dos mediciones relacionadas mediante los rangos de las diferencias absolutas y sus signos.",

        cuandoUsar: [
            "Se comparan exactamente dos mediciones relacionadas.",
            "La variable dependiente es ordinal o cuantitativa.",
            "Las diferencias no cumplen adecuadamente el supuesto de normalidad.",
            "Existen valores atípicos importantes que desaconsejan la prueba t pareada.",
            "Las observaciones pueden ordenarse y las parejas están correctamente identificadas."
        ],

        hipotesis: {
            h0:
                "La distribución de las diferencias pareadas es simétrica alrededor de cero.",
            h1:
                "La distribución de las diferencias pareadas no está centrada en cero."
        },

        supuestos: [
            "Las mediciones están relacionadas dentro de cada pareja.",
            "Las parejas son independientes entre sí.",
            "La variable posee al menos una escala ordinal.",
            "Las diferencias pueden ordenarse mediante rangos.",
            "Para interpretarla como una prueba sobre la mediana, la distribución de las diferencias debe ser aproximadamente simétrica."
        ],

        estadistico:
            "El estadístico W se obtiene sumando los rangos de las diferencias positivas y negativas después de excluir las diferencias iguales a cero. Se utiliza el menor de ambos acumulados como estadístico bilateral.",

        efecto:
            "Correlación biserial de rangos y correlación r basada en el estadístico z. El signo indica la dirección de la diferencia según la convención utilizada.",

        reporteAPA:
            "W = valor, z = valor, p = valor, correlación biserial de rangos = valor o r = valor.",

        posthoc: [],

        alternativas: [
            "t de Student para muestras relacionadas cuando las diferencias son aproximadamente normales y no presentan valores atípicos extremos.",
            "Prueba de los signos cuando únicamente interesa la dirección y no es razonable utilizar las magnitudes de las diferencias.",
            "Modelos ordinales o mixtos cuando existen más de dos mediciones o estructuras complejas."
        ],

        erroresFrecuentes: [
            "Aplicarla a grupos independientes.",
            "Interpretarla automáticamente como una comparación de medianas sin considerar la simetría de las diferencias.",
            "Ignorar las diferencias iguales a cero y los valores empatados al describir el método de cálculo.",
            "Informar únicamente el valor p sin tamaño del efecto.",
            "Perder la correspondencia entre las filas de las dos mediciones."
        ],

        ejemplo:
            "Se comparan las respuestas ordinales de los mismos docentes antes y después de un programa de formación.",

        referencias: [
            "Wilcoxon, F. (1945). Individual comparisons by ranking methods.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.",
            "Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."
        ]
    }
};
