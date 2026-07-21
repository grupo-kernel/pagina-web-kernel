const fichaSpearman = {
    nombre: "Rho de Spearman",
    definicion:
        "Coeficiente no paramétrico basado en rangos que cuantifica la intensidad y dirección de una relación monotónica entre dos variables ordinales o cuantitativas.",
    cuandoUsar: [
        "Las observaciones están emparejadas fila por fila.",
        "Las variables poseen al menos una escala ordinal.",
        "La relación esperada es monotónica, aunque no necesariamente lineal.",
        "La normalidad no se cumple o existen valores atípicos que desaconsejan Pearson."
    ],
    hipotesis: {
        h0: "El coeficiente rho poblacional es igual a cero; no existe asociación monotónica.",
        h1: "El coeficiente rho poblacional es diferente de cero."
    },
    supuestos: [
        "Pares de observaciones independientes entre sí.",
        "Correspondencia correcta entre las dos variables.",
        "Variables ordenables mediante rangos.",
        "Relación aproximadamente monotónica."
    ],
    estadistico:
        "Rho de Spearman es la correlación de Pearson calculada sobre los rangos, asignando rangos promedio cuando existen empates.",
    efecto:
        "El propio coeficiente rho expresa dirección y magnitud de la asociación monotónica.",
    reporteAPA:
        "ρs = valor, p = valor, IC 95 % [LI, LS], n = valor.",
    posthoc: [],
    alternativas: [
        "Pearson para relaciones lineales entre variables cuantitativas con supuestos razonables.",
        "Tau-b de Kendall cuando existen muchos empates o la muestra es pequeña.",
        "Modelos no lineales cuando la relación cambia de dirección."
    ],
    erroresFrecuentes: [
        "Aplicarlo sin comprobar que la relación sea monotónica.",
        "Interpretarlo como evidencia causal.",
        "Ignorar valores atípicos y errores de correspondencia entre filas.",
        "Informar únicamente el valor p sin el coeficiente ni su intervalo."
    ],
    ejemplo:
        "Se estudia la relación monotónica entre participación en clase y nivel de logro académico.",
    referencias: [
        "Spearman, C. (1904). The proof and measurement of association between two things.",
        "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
    ]
};

export const fichasMetodologicasRelacionVariables = {
    "relacion-no-monotonica": {
    nombre:
        "Análisis de una relación no monotónica",

    definicion:
        "Procedimiento exploratorio y de modelización utilizado cuando la relación entre dos variables cambia de dirección o presenta una forma curva que no puede resumirse adecuadamente mediante Pearson, Spearman o Kendall.",

    cuandoUsar: [
        "El diagrama de dispersión muestra una relación curva o cambios de dirección.",
        "La asociación no es aproximadamente lineal ni monotónica.",
        "Un coeficiente próximo a cero contradice una estructura visible en el gráfico.",
        "Se desea identificar una función o modelo que represente mejor la relación."
    ],

    hipotesis: {
        h0:
            "La hipótesis nula dependerá del modelo finalmente seleccionado.",
        h1:
            "La variable explicativa contribuye a describir una estructura no lineal en la variable resultado."
    },

    supuestos: [
        "Correspondencia correcta entre las observaciones de ambas variables.",
        "Independencia entre los pares de observaciones.",
        "Selección del modelo basada en teoría, diseño y examen gráfico.",
        "Revisión de valores atípicos, residuos y observaciones influyentes.",
        "Evitar elegir un modelo únicamente porque produce el mayor R²."
    ],

    estadistico:
        "No existe un único estadístico universal. Según la estructura pueden utilizarse términos polinomiales, regresión segmentada, suavizadores LOESS, splines, modelos aditivos generalizados u otros modelos no lineales.",

    efecto:
        "R² y R² ajustado cuando sean pertinentes, reducción del error, parámetros del modelo, intervalos de confianza y medidas de ajuste predictivo.",

    reporteAPA:
        "Describa la forma observada en el diagrama, justifique el modelo utilizado, informe sus coeficientes e intervalos de confianza, medidas de ajuste y diagnóstico de residuos.",

    posthoc: [],

    alternativas: [
        "Regresión polinómica cuando existe una curvatura simple y teóricamente justificable.",
        "Regresión segmentada cuando la pendiente cambia a partir de uno o más puntos.",
        "LOESS o splines para exploración flexible de la forma.",
        "Modelos aditivos generalizados para estimar relaciones suaves no lineales.",
        "Transformaciones de variables cuando sean interpretables y estén justificadas."
    ],

    erroresFrecuentes: [
        "Concluir que no existe relación porque Pearson o Spearman están próximos a cero.",
        "Forzar una recta sobre una relación claramente curva.",
        "Seleccionar polinomios de grado elevado sin justificación.",
        "Interpretar una relación observacional como causal.",
        "Informar únicamente R² sin revisar los residuos ni la estabilidad del modelo."
    ],

    ejemplo:
        "La relación entre ansiedad y rendimiento puede mostrar un patrón de U invertida: niveles muy bajos y muy altos de ansiedad se asocian con menor rendimiento, mientras que niveles intermedios se relacionan con mejores resultados.",

    referencias: [
        "Harrell, F. E. (2015). Regression Modeling Strategies.",
        "Wood, S. N. (2017). Generalized Additive Models.",
        "James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."
    ]
},
    pearson: {
        nombre: "Correlación de Pearson",
        definicion:
            "Coeficiente paramétrico que cuantifica la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",
        cuandoUsar: [
            "Las dos variables son cuantitativas.",
            "Las observaciones están emparejadas fila por fila.",
            "La relación es aproximadamente lineal.",
            "No existen valores atípicos influyentes importantes."
        ],
        hipotesis: {
            h0: "El coeficiente de correlación poblacional es igual a cero.",
            h1: "El coeficiente de correlación poblacional es diferente de cero."
        },
        supuestos: [
            "Independencia entre los pares de observaciones.",
            "Correspondencia correcta entre X e Y.",
            "Relación lineal.",
            "Ausencia de valores atípicos influyentes.",
            "Para la inferencia clásica, normalidad bivariada aproximada."
        ],
        estadistico:
            "El coeficiente r estandariza la covarianza mediante las desviaciones estándar de ambas variables; su significación se evalúa mediante una distribución t con n − 2 grados de libertad.",
        efecto:
            "El coeficiente r expresa la magnitud y dirección. R² puede informarse descriptivamente como proporción de variación lineal compartida.",
        reporteAPA:
            "r(gl) = valor, p = valor, IC 95 % [LI, LS], n = valor.",
        posthoc: [],
        alternativas: [
            "Spearman cuando la relación es monotónica, pero no lineal, o no se cumplen adecuadamente los supuestos.",
            "Kendall para muestras pequeñas o numerosos empates.",
            "Modelos de regresión cuando se desea predecir o controlar covariables."
        ],
        erroresFrecuentes: [
            "Calcular Pearson sin revisar el diagrama de dispersión.",
            "Concluir causalidad a partir de una correlación.",
            "Ignorar valores atípicos influyentes.",
            "Interpretar R² como prueba de causalidad o ajuste de un modelo completo."
        ],
        ejemplo:
            "Se analiza la relación lineal entre horas de estudio y calificación final.",
        referencias: [
            "Pearson, K. (1896). Mathematical contributions to the theory of evolution.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "spearman-cuantitativas": fichaSpearman,
    "spearman-ordinales": fichaSpearman,

    kendall: {
        nombre: "Tau-b de Kendall",
        definicion:
            "Coeficiente ordinal basado en la comparación de pares concordantes y discordantes, con corrección por empates en ambas variables.",
        cuandoUsar: [
            "Las variables son ordinales o cuantitativas ordenables.",
            "La relación esperada es monotónica.",
            "La muestra es pequeña o existen numerosos empates.",
            "Las observaciones están correctamente emparejadas."
        ],
        hipotesis: {
            h0: "El coeficiente tau-b poblacional es igual a cero.",
            h1: "El coeficiente tau-b poblacional es diferente de cero."
        },
        supuestos: [
            "Independencia entre los pares de observaciones.",
            "Correspondencia correcta entre las variables.",
            "Escala al menos ordinal.",
            "Interpretación basada en concordancia y discordancia de pares."
        ],
        estadistico:
            "Tau-b compara el número de pares concordantes y discordantes y ajusta el denominador por los empates observados en X e Y.",
        efecto:
            "Tau-b es una medida directa de dirección y magnitud de la concordancia ordinal.",
        reporteAPA:
            "τb = valor, z = valor, p = valor, IC 95 % [LI, LS], n = valor.",
        posthoc: [],
        alternativas: [
            "Spearman cuando los empates no son numerosos y se prefiere una correlación de rangos.",
            "Pearson cuando las variables son cuantitativas y la relación es lineal.",
            "Modelos ordinales para estructuras más complejas."
        ],
        erroresFrecuentes: [
            "Confundir tau-b con tau-a y omitir la corrección por empates.",
            "No informar pares concordantes, discordantes o empates cuando son relevantes.",
            "Interpretar asociación como causalidad.",
            "Asignar códigos ordinales cuyo orden no representa la variable."
        ],
        ejemplo:
            "Se estudia la concordancia entre nivel de participación y nivel de desempeño, ambos medidos ordinalmente.",
        referencias: [
            "Kendall, M. G. (1938). A new measure of rank correlation.",
            "Agresti, A. (2010). Analysis of Ordinal Categorical Data."
        ]
    },

    "punto-biserial": {
        nombre: "Correlación punto-biserial",
        definicion:
            "Coeficiente que cuantifica la relación entre una variable dicotómica genuina y una variable cuantitativa.",
        cuandoUsar: [
            "Una variable tiene exactamente dos categorías reales.",
            "La segunda variable es cuantitativa.",
            "Las observaciones son independientes.",
            "Se desea expresar la diferencia entre los grupos mediante un coeficiente de correlación."
        ],
        hipotesis: {
            h0: "El coeficiente punto-biserial poblacional es igual a cero.",
            h1: "El coeficiente punto-biserial poblacional es diferente de cero."
        },
        supuestos: [
            "Variable dicotómica genuina, no creada artificialmente al dividir una variable continua.",
            "Variable cuantitativa dentro de cada categoría.",
            "Independencia de las observaciones.",
            "Ausencia de valores atípicos extremos dentro de las categorías."
        ],
        estadistico:
            "Es algebraicamente equivalente a la correlación de Pearson entre una codificación 0/1 y la variable cuantitativa, y a la prueba t para dos grupos bajo condiciones equivalentes.",
        efecto:
            "El coeficiente rpb expresa dirección y magnitud; el signo depende de la categoría codificada como 1.",
        reporteAPA:
            "rpb = valor, p = valor, IC 95 % [LI, LS], n = valor; indique la categoría codificada como 1.",
        posthoc: [],
        alternativas: [
            "t de Student o Welch para presentar directamente la diferencia de medias.",
            "Correlación biserial cuando la dicotomía procede de una variable continua subyacente.",
            "Regresión lineal o logística según el objetivo analítico."
        ],
        erroresFrecuentes: [
            "No indicar cuál categoría fue codificada como 1.",
            "Utilizarla con más de dos categorías.",
            "Confundir punto-biserial con correlación biserial.",
            "Interpretar el signo sin considerar la codificación."
        ],
        ejemplo:
            "Se analiza la relación entre participar o no en tutoría y la calificación final.",
        referencias: [
            "Cureton, E. E. (1956). Rank-biserial correlation.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    }
};
