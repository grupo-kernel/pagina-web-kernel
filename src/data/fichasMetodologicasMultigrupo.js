export const fichasMetodologicasMultigrupo = {
    "anova-un-factor": {
        nombre:
            "ANOVA de un factor",

        definicion:
            "Prueba paramétrica utilizada para comparar simultáneamente las medias de tres o más grupos independientes mediante la partición de la variabilidad total en variabilidad entre grupos y variabilidad dentro de los grupos.",

        cuandoUsar: [
            "Se comparan tres o más grupos independientes.",
            "La variable dependiente es cuantitativa.",
            "Las observaciones pertenecen a un solo grupo y son independientes entre sí.",
            "Las distribuciones dentro de los grupos son aproximadamente normales.",
            "Las varianzas poblacionales pueden considerarse homogéneas."
        ],

        hipotesis: {
            h0:
                "Todas las medias poblacionales de los grupos son iguales.",
            h1:
                "Al menos una media poblacional difiere de las demás."
        },

        supuestos: [
            "Independencia de las observaciones.",
            "Variable dependiente cuantitativa.",
            "Normalidad aproximada dentro de cada grupo o de los residuos del modelo.",
            "Homogeneidad de varianzas entre los grupos.",
            "Ausencia de valores atípicos extremos que dominen el resultado."
        ],

        estadistico:
            "El estadístico F compara el cuadrado medio entre grupos con el cuadrado medio dentro de los grupos. Un valor F grande indica que la variabilidad entre las medias supera la variabilidad esperada dentro de los grupos.",

        efecto:
            "Eta cuadrado expresa la proporción observada de variabilidad explicada por el factor. Omega cuadrado ofrece una estimación menos sesgada de la proporción poblacional explicada y suele preferirse para la interpretación sustantiva.",

        reporteAPA:
            "F(gl entre, gl dentro) = valor, p = valor, η² = valor, ω² = valor. Cuando el resultado global es significativo, deben informarse las comparaciones de Tukey–Kramer con sus intervalos de confianza.",

        posthoc: [
            "Tukey–Kramer para comparaciones pareadas cuando se mantiene el supuesto de homogeneidad de varianzas.",
            "Contrastes planificados cuando las comparaciones fueron definidas antes de examinar los datos."
        ],

        alternativas: [
            "ANOVA de Welch cuando las varianzas son desiguales o existen tamaños muestrales muy diferentes.",
            "Kruskal–Wallis para datos ordinales, distribuciones claramente no normales o valores atípicos importantes.",
            "Modelos lineales generales cuando se necesitan covariables, interacciones o diseños más complejos."
        ],

        erroresFrecuentes: [
            "Realizar numerosas pruebas t sin controlar el error familiar.",
            "Interpretar un ANOVA significativo como evidencia de que todos los grupos difieren entre sí.",
            "Ignorar la homogeneidad de varianzas cuando los tamaños muestrales son desiguales.",
            "Informar únicamente el valor p sin tamaño del efecto ni descriptivos por grupo.",
            "Aplicar el análisis a mediciones relacionadas como si fueran grupos independientes."
        ],

        ejemplo:
            "Se comparan las calificaciones medias de estudiantes pertenecientes a tres metodologías de enseñanza aplicadas a grupos diferentes.",

        referencias: [
            "Fisher, R. A. (1925). Statistical Methods for Research Workers.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.",
            "Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."
        ]
    },

    "anova-welch": {
        nombre:
            "ANOVA de Welch",

        definicion:
            "Prueba paramétrica robusta para comparar las medias de tres o más grupos independientes sin exigir igualdad de varianzas, mediante ponderaciones dependientes del tamaño muestral y la variabilidad de cada grupo.",

        cuandoUsar: [
            "Se comparan tres o más grupos independientes.",
            "La variable dependiente es cuantitativa.",
            "Las varianzas son desiguales o existe incertidumbre sobre su homogeneidad.",
            "Los tamaños muestrales pueden ser distintos.",
            "Las distribuciones no presentan desviaciones extremas que invaliden una comparación de medias."
        ],

        hipotesis: {
            h0:
                "Todas las medias poblacionales de los grupos son iguales.",
            h1:
                "Al menos una media poblacional difiere de las demás."
        },

        supuestos: [
            "Independencia de las observaciones.",
            "Variable dependiente cuantitativa.",
            "Varianza positiva en cada grupo.",
            "Normalidad aproximada dentro de los grupos o suficiente robustez muestral.",
            "Ausencia de valores atípicos extremos que distorsionen las medias y varianzas."
        ],

        estadistico:
            "El estadístico F de Welch combina medias ponderadas por la precisión de cada grupo y utiliza grados de libertad aproximados. La corrección reduce el efecto de la heterogeneidad de varianzas sobre la inferencia global.",

        efecto:
            "Puede informarse una estimación aproximada de omega cuadrado basada en el estadístico F de Welch y sus grados de libertad, acompañada de una nota metodológica sobre su carácter aproximado.",

        reporteAPA:
            "F_W(gl1, gl2) = valor, p = valor, tamaño del efecto aproximado = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Games–Howell.",

        posthoc: [
            "Games–Howell para comparaciones pareadas robustas ante varianzas y tamaños muestrales desiguales."
        ],

        alternativas: [
            "ANOVA clásico cuando la homogeneidad de varianzas es razonable.",
            "Kruskal–Wallis cuando los datos son ordinales o muestran desviaciones distribucionales graves.",
            "Modelos lineales con errores robustos cuando se requieren covariables o estructuras más complejas."
        ],

        erroresFrecuentes: [
            "Usar ANOVA clásico pese a una heterogeneidad marcada acompañada de tamaños muestrales desiguales.",
            "Aplicar Tukey como post hoc después de Welch en lugar de Games–Howell.",
            "Interpretar un resultado global significativo sin realizar comparaciones posteriores.",
            "Informar grados de libertad enteros cuando la aproximación de Welch produce valores decimales.",
            "Omitir descriptivos y gráficos que permitan examinar la heterogeneidad."
        ],

        ejemplo:
            "Se comparan las puntuaciones de tres programas educativos cuyos grupos tienen tamaños y dispersiones claramente diferentes.",

        referencias: [
            "Welch, B. L. (1951). On the comparison of several mean values: An alternative approach.",
            "Games, P. A., & Howell, J. F. (1976). Pairwise multiple comparison procedures with unequal n's and/or variances.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "kruskal-wallis": {
        nombre:
            "Prueba de Kruskal–Wallis",

        definicion:
            "Prueba no paramétrica para comparar tres o más grupos independientes mediante los rangos conjuntos de las observaciones, sin asumir normalidad de la variable original.",

        cuandoUsar: [
            "Se comparan tres o más grupos independientes.",
            "La variable es al menos ordinal.",
            "Los datos no cumplen adecuadamente normalidad o presentan valores atípicos importantes.",
            "Las observaciones pueden ordenarse mediante rangos.",
            "Se desea contrastar diferencias globales en la localización de las distribuciones."
        ],

        hipotesis: {
            h0:
                "Los grupos proceden de distribuciones con la misma localización.",
            h1:
                "Al menos uno de los grupos presenta una distribución desplazada respecto a los demás."
        },

        supuestos: [
            "Independencia de las observaciones entre grupos.",
            "Variable con escala ordinal, de intervalo o de razón.",
            "Las observaciones pueden ordenarse.",
            "Para interpretarla como una comparación de medianas, las distribuciones deben tener formas y dispersiones semejantes.",
            "Los empates deben incorporarse mediante la corrección correspondiente."
        ],

        estadistico:
            "El estadístico H compara las sumas de rangos de los grupos y se aproxima a una distribución chi-cuadrado con k − 1 grados de libertad. El cálculo debe corregirse cuando existen valores empatados.",

        efecto:
            "Épsilon cuadrado estima la magnitud de la diferencia global entre los grupos. En las comparaciones de Dunn puede añadirse una correlación r para cada contraste pareado.",

        reporteAPA:
            "H(gl) = valor, p = valor, ε² = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Dunn con valores p ajustados, por ejemplo mediante Holm.",

        posthoc: [
            "Comparaciones de Dunn con ajuste de Holm para identificar qué pares de grupos difieren manteniendo control del error familiar."
        ],

        alternativas: [
            "ANOVA de un factor cuando la variable es cuantitativa y se cumplen los supuestos paramétricos.",
            "ANOVA de Welch cuando se comparan medias con varianzas desiguales.",
            "Modelos ordinales o pruebas de permutación cuando el diseño o la interpretación requieren mayor flexibilidad."
        ],

        erroresFrecuentes: [
            "Interpretar automáticamente la prueba como una comparación de medianas sin verificar formas distribucionales semejantes.",
            "Realizar comparaciones Mann–Whitney múltiples sin ajustar los valores p.",
            "Ignorar los empates durante el cálculo de rangos.",
            "Aplicarla a mediciones relacionadas; en ese caso corresponde Friedman.",
            "Informar únicamente el valor p global sin tamaño del efecto ni análisis post hoc."
        ],

        ejemplo:
            "Se comparan niveles ordinales de desempeño en cuatro grupos de estudiantes que recibieron estrategias pedagógicas diferentes.",

        referencias: [
            "Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis.",
            "Dunn, O. J. (1964). Multiple comparisons using rank sums.",
            "Tomczak, M., & Tomczak, E. (2014). The need to report effect size estimates revisited."
        ]
    }
};