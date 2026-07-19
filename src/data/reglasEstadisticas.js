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
            normalidad: ["no", "no-se", ""]
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
            normalidad: ["no", "no-se", ""]
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
            normalidad: ["no", "no-se", ""]
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
            normalidad: ["no", "no-se", ""]
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
    }
    
];
