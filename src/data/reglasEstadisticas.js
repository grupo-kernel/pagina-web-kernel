export const reglasEstadisticas = [
    {
        id: "t-student-una-muestra",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "uno",
            normalidad: "si"
        },
        resultado: {
            prueba: "t de Student para una muestra",
            categoria: "Comparación de una muestra",
            tipo: "Paramétrica",
            descripcion:
                "Compara la media de una muestra con un valor teórico o de referencia.",
            efecto:
                "d de Cohen para una muestra."
        }
    },

    {
        id: "wilcoxon-una-muestra",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: ["cuantitativa", "ordinal"],
            numeroGrupos: "uno",
            normalidad: ["no", "no-se"]
        },
        resultado: {
            prueba: "Prueba de rangos con signo de Wilcoxon",
            categoria: "Comparación de una muestra",
            tipo: "No paramétrica",
            descripcion:
                "Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",
            efecto:
                "Correlación biserial por rangos o r."
        }
    },

    {
        id: "t-student-independientes",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "dos",
            relacion: "independientes",
            normalidad: "si",
            varianzas: "si"
        },
        resultado: {
            prueba: "t de Student para muestras independientes",
            categoria: "Comparación de dos grupos",
            tipo: "Paramétrica",
            descripcion:
                "Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",
            efecto:
                "d de Cohen o g de Hedges."
        }
    },

    {
        id: "t-welch-independientes",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "dos",
            relacion: "independientes",
            normalidad: "si",
            varianzas: ["no", "no-se"]
        },
        resultado: {
            prueba: "t de Welch para muestras independientes",
            categoria: "Comparación de dos grupos",
            tipo: "Paramétrica robusta",
            descripcion:
                "Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",
            efecto:
                "g de Hedges con intervalo de confianza."
        }
    },

    {
        id: "mann-whitney",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: ["cuantitativa", "ordinal"],
            numeroGrupos: "dos",
            relacion: "independientes",
            normalidad: ["si", "no", "no-se", ""]
        },
        resultado: {
            prueba: "Prueba U de Mann–Whitney",
            categoria: "Comparación de dos grupos",
            tipo: "No paramétrica",
            descripcion:
                "Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",
            efecto:
                "Delta de Cliff o correlación biserial por rangos."
        }
    },

    {
        id: "t-student-relacionadas",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "dos",
            relacion: "relacionadas",
            normalidad: "si"
        },
        resultado: {
            prueba: "t de Student para muestras relacionadas",
            categoria: "Comparación de dos mediciones",
            tipo: "Paramétrica",
            descripcion:
                "Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",
            efecto:
                "d de Cohen para datos pareados."
        }
    },

    {
        id: "wilcoxon-relacionadas",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: ["cuantitativa", "ordinal"],
            numeroGrupos: "dos",
            relacion: "relacionadas",
            normalidad: ["si", "no", "no-se", ""]
        },
        resultado: {
            prueba: "Prueba de rangos con signo de Wilcoxon",
            categoria: "Comparación de dos mediciones",
            tipo: "No paramétrica",
            descripcion:
                "Compara dos mediciones relacionadas con datos ordinales o no normales.",
            efecto:
                "Correlación biserial por rangos o r."
        }
    },

    {
        id: "anova-un-factor",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "tres-mas",
            relacion: "independientes",
            normalidad: "si",
            varianzas: "si"
        },
        resultado: {
            prueba: "ANOVA de un factor",
            categoria: "Comparación de tres o más grupos",
            tipo: "Paramétrica",
            descripcion:
                "Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",
            efecto:
                "Eta cuadrado u omega cuadrado."
        }
    },

    {
        id: "anova-welch",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "tres-mas",
            relacion: "independientes",
            normalidad: "si",
            varianzas: ["no", "no-se"]
        },
        resultado: {
            prueba: "ANOVA de Welch",
            categoria: "Comparación de tres o más grupos",
            tipo: "Paramétrica robusta",
            descripcion:
                "Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",
            efecto:
                "Omega cuadrado ajustado y comparaciones Games–Howell."
        }
    },

    {
        id: "kruskal-wallis",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: ["cuantitativa", "ordinal"],
            numeroGrupos: "tres-mas",
            relacion: "independientes",
            normalidad: ["si", "no", "no-se", ""]
        },
        resultado: {
            prueba: "Prueba de Kruskal–Wallis",
            categoria: "Comparación de tres o más grupos",
            tipo: "No paramétrica",
            descripcion:
                "Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",
            efecto:
                "Épsilon cuadrado."
        }
    },

    {
        id: "anova-medidas-repetidas",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "tres-mas",
            relacion: "relacionadas",
            normalidad: "si"
        },
        resultado: {
            prueba: "ANOVA de medidas repetidas",
            categoria: "Comparación de tres o más mediciones",
            tipo: "Paramétrica",
            descripcion:
                "Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",
            efecto:
                "Eta cuadrado parcial."
        }
    },

    {
        id: "friedman",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: ["cuantitativa", "ordinal"],
            numeroGrupos: "tres-mas",
            relacion: "relacionadas",
            normalidad: ["si", "no", "no-se", ""]
        },
        resultado: {
            prueba: "Prueba de Friedman",
            categoria: "Comparación de tres o más mediciones",
            tipo: "No paramétrica",
            descripcion:
                "Compara tres o más mediciones relacionadas con datos ordinales o no normales.",
            efecto:
                "W de Kendall."
        }
    },

    {
        id: "pearson",
        condiciones: {
            objetivo: "relacionar",
            tipoRelacion: "cuantitativas",
            normalidad: "si",
            linealidad: "si"
        },
        resultado: {
            prueba: "Correlación de Pearson",
            categoria: "Relación entre variables",
            tipo: "Paramétrica",
            descripcion:
                "Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",
            efecto:
                "r de Pearson con intervalo de confianza."
        }
    },

    {
        id: "spearman-cuantitativas",
        condiciones: {
            objetivo: "relacionar",
            tipoRelacion: "cuantitativas",
            linealidad: "monotonica"
        },
        resultado: {
            prueba: "Rho de Spearman",
            categoria: "Relación entre variables",
            tipo: "No paramétrica",
            descripcion:
                "Mide la intensidad de una relación monotónica mediante rangos.",
            efecto:
                "Rho de Spearman con intervalo de confianza."
        }
    },

    {
        id: "spearman-ordinales",
        condiciones: {
            objetivo: "relacionar",
            tipoRelacion: "ordinales",
            empates: "no"
        },
        resultado: {
            prueba: "Rho de Spearman",
            categoria: "Relación entre variables ordinales",
            tipo: "No paramétrica",
            descripcion:
                "Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",
            efecto:
                "Rho de Spearman con intervalo de confianza."
        }
    },

    {
        id: "kendall",
        condiciones: {
            objetivo: "relacionar",
            tipoRelacion: "ordinales",
            empates: ["si", "no-se"]
        },
        resultado: {
            prueba: "Tau-b de Kendall",
            categoria: "Relación entre variables ordinales",
            tipo: "No paramétrica",
            descripcion:
                "Resulta adecuada con muestras pequeñas o numerosos valores empatados.",
            efecto:
                "Tau-b de Kendall con intervalo de confianza."
        }
    },

    {
        id: "punto-biserial",
        condiciones: {
            objetivo: "relacionar",
            tipoRelacion: "dicotomica-cuantitativa"
        },
        resultado: {
            prueba: "Correlación punto-biserial",
            categoria: "Relación entre variables",
            tipo: "Paramétrica",
            descripcion:
                "Relaciona una variable dicotómica genuina con una variable cuantitativa.",
            efecto:
                "Coeficiente r punto-biserial con intervalo de confianza."
        }
    },

        {
        id: "chi-cuadrado-independencia-2x2",
        condiciones: {
            objetivo: "asociar",
            tipoAsociacion: "dos-dicotomicas",
            frecuenciasEsperadas: "adecuadas"
        },
        resultado: {
            prueba: "Prueba chi-cuadrado de independencia",
            categoria: "Asociación entre dos variables dicotómicas",
            tipo: "No paramétrica",
            descripcion:
                "Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",
            efecto:
                "Coeficiente Phi y odds ratio con intervalo de confianza."
        }
    },

    {
        id: "fisher-exacta-2x2",
        condiciones: {
            objetivo: "asociar",
            tipoAsociacion: "dos-dicotomicas",
            frecuenciasEsperadas: ["bajas", "no-se"]
        },
        resultado: {
            prueba: "Prueba exacta de Fisher",
            categoria: "Asociación entre dos variables dicotómicas",
            tipo: "Exacta",
            descripcion:
                "Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",
            efecto:
                "Odds ratio con intervalo de confianza y coeficiente Phi."
        }
    },

    {
        id: "chi-cuadrado-independencia-rxc",
        condiciones: {
            objetivo: "asociar",
            tipoAsociacion: "categoricas-multinivel",
            frecuenciasEsperadas: "adecuadas"
        },
        resultado: {
            prueba: "Prueba chi-cuadrado de independencia",
            categoria: "Asociación entre variables categóricas",
            tipo: "No paramétrica",
            descripcion:
                "Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",
            efecto:
                "V de Cramer con intervalo de confianza cuando sea posible."
        }
    },

    {
        id: "fisher-freeman-halton",
        condiciones: {
            objetivo: "asociar",
            tipoAsociacion: "categoricas-multinivel",
            frecuenciasEsperadas: ["bajas", "no-se"]
        },
        resultado: {
            prueba: "Prueba exacta de Fisher–Freeman–Halton",
            categoria: "Asociación entre variables categóricas",
            tipo: "Exacta",
            descripcion:
                "Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",
            efecto:
                "V de Cramer y examen de los residuos ajustados."
        }
    },

    {
        id: "correlacion-biserial",
        condiciones: {
            objetivo: "relacionar",
            tipoRelacion: "dicotomica-artificial-cuantitativa"
        },
        resultado: {
            prueba: "Correlación biserial",
            categoria: "Relación entre variables",
            tipo: "Paramétrica",
            descripcion:
                "Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",
            efecto:
                "Coeficiente de correlación biserial con intervalo de confianza."
        }
    },

    {
        id: "bondad-ajuste-categorica",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "categorica",
            numeroGrupos: "uno"
        },
        resultado: {
            prueba: "Prueba binomial o chi-cuadrado de bondad de ajuste",
            categoria: "Comparación de frecuencias observadas y esperadas",
            tipo: "Categórica",
            descripcion:
                "Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",
            efecto:
                "w de Cohen o diferencia de proporciones."
        }
    },

    {
        id: "mcnemar",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "categorica",
            numeroGrupos: "dos",
            relacion: "relacionadas"
        },
        resultado: {
            prueba: "Prueba de McNemar",
            categoria: "Comparación de dos proporciones relacionadas",
            tipo: "No paramétrica para datos dicotómicos",
            descripcion:
                "Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",
            efecto:
                "Odds ratio pareada o diferencia de proporciones pareadas."
        }
    },

    {
        id: "q-cochran",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "categorica",
            numeroGrupos: "tres-mas",
            relacion: "relacionadas"
        },
        resultado: {
            prueba: "Prueba Q de Cochran",
            categoria: "Comparación de tres o más proporciones relacionadas",
            tipo: "No paramétrica para datos dicotómicos",
            descripcion:
                "Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",
            efecto:
                "Medida de concordancia o diferencias de proporciones."
        }
    },

    {
        id: "chi-cuadrado-independencia-comparacion",
        condiciones: {
            objetivo: "comparar",
            tipoVariable: "categorica",
            numeroGrupos: ["dos", "tres-mas"],
            relacion: "independientes"
        },
        resultado: {
            prueba: "Prueba chi-cuadrado de independencia",
            categoria: "Comparación de distribuciones categóricas",
            tipo: "No paramétrica",
            descripcion:
                "Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",
            efecto:
                "V de Cramer o coeficiente Phi para tablas 2 × 2."
        }
    },

        {
        id: "regresion-lineal-simple",
        condiciones: {
            objetivo: "predecir",
            tipoResultado: "continua",
            numeroPredictores: "uno"
        },
        resultado: {
            prueba: "Regresión lineal simple",
            categoria: "Predicción de una variable cuantitativa",
            tipo: "Modelo lineal",
            descripcion:
                "Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",
            efecto:
                "R², R² ajustado, coeficiente de regresión e intervalo de confianza."
        }
    },

    {
        id: "regresion-lineal-multiple",
        condiciones: {
            objetivo: "predecir",
            tipoResultado: "continua",
            numeroPredictores: "varios"
        },
        resultado: {
            prueba: "Regresión lineal múltiple",
            categoria: "Predicción de una variable cuantitativa",
            tipo: "Modelo lineal multivariable",
            descripcion:
                "Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",
            efecto:
                "R², R² ajustado, coeficientes estandarizados e intervalos de confianza."
        }
    },

    {
        id: "regresion-logistica-binaria-simple",
        condiciones: {
            objetivo: "predecir",
            tipoResultado: "dicotomica",
            numeroPredictores: "uno"
        },
        resultado: {
            prueba: "Regresión logística binaria simple",
            categoria: "Predicción de un resultado dicotómico",
            tipo: "Modelo lineal generalizado",
            descripcion:
                "Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",
            efecto:
                "Odds ratio, intervalo de confianza, AUC y medidas de calibración."
        }
    },

    {
        id: "regresion-logistica-binaria-multiple",
        condiciones: {
            objetivo: "predecir",
            tipoResultado: "dicotomica",
            numeroPredictores: "varios"
        },
        resultado: {
            prueba: "Regresión logística binaria múltiple",
            categoria: "Predicción de un resultado dicotómico",
            tipo: "Modelo lineal generalizado multivariable",
            descripcion:
                "Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",
            efecto:
                "Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."
        }
    },

    {
        id: "regresion-poisson",
        condiciones: {
            objetivo: "predecir",
            tipoResultado: "conteo",
            sobredispersion: "no"
        },
        resultado: {
            prueba: "Regresión de Poisson",
            categoria: "Modelización de una variable de conteo",
            tipo: "Modelo lineal generalizado",
            descripcion:
                "Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",
            efecto:
                "Razones de tasas de incidencia e intervalos de confianza."
        }
    },

    {
        id: "regresion-binomial-negativa",
        condiciones: {
            objetivo: "predecir",
            tipoResultado: "conteo",
            sobredispersion: "si"
        },
        resultado: {
            prueba: "Regresión binomial negativa",
            categoria: "Modelización de una variable de conteo",
            tipo: "Modelo lineal generalizado",
            descripcion:
                "Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",
            efecto:
                "Razones de tasas de incidencia e intervalos de confianza."
        }
    },

    {
        id: "evaluar-sobredispersion",
        condiciones: {
            objetivo: "predecir",
            tipoResultado: "conteo",
            sobredispersion: "no-se"
        },
        resultado: {
            prueba: "Evaluar la sobredispersión antes de seleccionar el modelo",
            categoria: "Modelización de una variable de conteo",
            tipo: "Diagnóstico del modelo",
            descripcion:
                "Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",
            efecto:
                "Índice de dispersión, residuos y criterios de información como AIC."
        }
    }
];
