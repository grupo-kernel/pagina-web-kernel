export const fichasMetodologicas = {
    "chi-cuadrado-independencia-2x2": {
        nombre: "Prueba chi-cuadrado de independencia",
        definicion:
            "Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",

        cuandoUsar: [
            "Las dos variables son categóricas.",
            "Las observaciones son independientes.",
            "La información está organizada en una tabla de contingencia.",
            "Las frecuencias esperadas son suficientemente grandes."
        ],

        hipotesis: {
            h0:
                "Las variables categóricas son independientes; no existe asociación entre ellas.",
            h1:
                "Las variables categóricas no son independientes; existe asociación entre ellas."
        },

        supuestos: [
            "Cada participante aporta una sola observación.",
            "Las categorías son mutuamente excluyentes.",
            "Las observaciones son independientes.",
            "Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."
        ],

        estadistico:
            "El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",

        efecto:
            "Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",

        reporteAPA:
            "χ²(gl, N = n) = valor, p = valor, φ = valor.",

        posthoc: [
            "Examinar residuos tipificados o ajustados.",
            "Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."
        ],

        alternativas: [
            "Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.",
            "Modelos loglineales cuando intervienen varias variables categóricas."
        ],

        erroresFrecuentes: [
            "Interpretar la significación estadística como intensidad de asociación.",
            "No informar Phi o V de Cramer.",
            "Aplicar la prueba a observaciones relacionadas.",
            "Ignorar celdas con frecuencias esperadas pequeñas."
        ],

        ejemplo:
            "Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",

        referencias: [
            "Agresti, A. (2019). An Introduction to Categorical Data Analysis.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "fisher-exacta-2x2": {
        nombre: "Prueba exacta de Fisher",
        definicion:
            "Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",

        cuandoUsar: [
            "Las dos variables son dicotómicas.",
            "El tamaño muestral es pequeño.",
            "Existen frecuencias esperadas bajas.",
            "La aproximación chi-cuadrado puede no ser adecuada."
        ],

        hipotesis: {
            h0:
                "Las dos variables dicotómicas son independientes.",
            h1:
                "Existe asociación entre las dos variables dicotómicas."
        },

        supuestos: [
            "Las observaciones son independientes.",
            "Las categorías son mutuamente excluyentes.",
            "Los datos representan frecuencias absolutas."
        ],

        estadistico:
            "Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",

        efecto:
            "Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",

        reporteAPA:
            "Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",

        posthoc: [],

        alternativas: [
            "Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.",
            "Regresión logística binaria cuando se desea controlar covariables."
        ],

        erroresFrecuentes: [
            "Aplicarla directamente a porcentajes en lugar de frecuencias.",
            "No informar el odds ratio.",
            "Confundir significación estadística con relevancia práctica."
        ],

        ejemplo:
            "Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",

        referencias: [
            "Agresti, A. (2019). An Introduction to Categorical Data Analysis.",
            "Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."
        ]
    },

    "chi-cuadrado-independencia-rxc": {
        nombre: "Prueba chi-cuadrado de independencia",
        definicion:
            "Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",

        cuandoUsar: [
            "Al menos una variable tiene tres o más categorías.",
            "Las observaciones son independientes.",
            "Las frecuencias esperadas son adecuadas."
        ],

        hipotesis: {
            h0:
                "Las variables categóricas son independientes.",
            h1:
                "Existe asociación entre las variables categóricas."
        },

        supuestos: [
            "Observaciones independientes.",
            "Categorías mutuamente excluyentes.",
            "Frecuencias absolutas.",
            "Frecuencias esperadas adecuadas."
        ],

        estadistico:
            "Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",

        efecto:
            "V de Cramer con intervalo de confianza cuando sea posible.",

        reporteAPA:
            "χ²(gl, N = n) = valor, p = valor, V = valor.",

        posthoc: [
            "Analizar residuos ajustados.",
            "Corregir el nivel de significación cuando se examinen múltiples celdas."
        ],

        alternativas: [
            "Fisher–Freeman–Halton cuando existen frecuencias pequeñas.",
            "Modelos loglineales para asociaciones multivariadas."
        ],

        erroresFrecuentes: [
            "Concluir causalidad a partir de una asociación.",
            "No examinar qué celdas explican el resultado global.",
            "No informar V de Cramer."
        ],

        ejemplo:
            "Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",

        referencias: [
            "Agresti, A. (2019). An Introduction to Categorical Data Analysis.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "fisher-freeman-halton": {
        nombre: "Prueba exacta de Fisher–Freeman–Halton",
        definicion:
            "Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",

        cuandoUsar: [
            "La tabla tiene más de dos filas o columnas.",
            "Existen frecuencias esperadas pequeñas.",
            "La aproximación chi-cuadrado no resulta confiable."
        ],

        hipotesis: {
            h0:
                "Las variables categóricas son independientes.",
            h1:
                "Existe asociación entre las variables categóricas."
        },

        supuestos: [
            "Observaciones independientes.",
            "Categorías mutuamente excluyentes.",
            "Datos expresados como frecuencias."
        ],

        estadistico:
            "Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",

        efecto:
            "V de Cramer y análisis de residuos ajustados.",

        reporteAPA:
            "Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",

        posthoc: [
            "Examinar residuos ajustados.",
            "Aplicar comparaciones por pares con corrección apropiada."
        ],

        alternativas: [
            "Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.",
            "Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."
        ],

        erroresFrecuentes: [
            "Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.",
            "No indicar si el valor p fue exacto o estimado por Monte Carlo.",
            "No informar una medida de tamaño del efecto."
        ],

        ejemplo:
            "Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",

        referencias: [
            "Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.",
            "Agresti, A. (2019). An Introduction to Categorical Data Analysis."
        ]
    }
};

export function obtenerFichaMetodologica(id) {
    return fichasMetodologicas[id] || null;
}
