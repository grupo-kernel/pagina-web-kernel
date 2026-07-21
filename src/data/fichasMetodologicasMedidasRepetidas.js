export const fichasMetodologicasMedidasRepetidas = {
    "anova-medidas-repetidas": {
        nombre: "ANOVA de medidas repetidas",
        definicion: "Prueba paramétrica para comparar las medias de tres o más mediciones realizadas sobre los mismos participantes, separando la variabilidad entre sujetos de la variabilidad asociada a las condiciones.",
        cuandoUsar: [
            "Se comparan tres o más momentos o condiciones relacionadas.",
            "Las mismas personas participan en todas las mediciones.",
            "La variable dependiente es cuantitativa.",
            "Las diferencias entre condiciones son aproximadamente normales.",
            "Se conserva la correspondencia fila por fila."
        ],
        hipotesis: {
            h0: "Todas las medias poblacionales de las condiciones son iguales.",
            h1: "Al menos una media poblacional difiere de las demás."
        },
        supuestos: [
            "Las observaciones están relacionadas dentro de cada participante.",
            "Los participantes son independientes entre sí.",
            "La variable dependiente es cuantitativa.",
            "No existen desviaciones graves de normalidad ni valores atípicos extremos en las diferencias.",
            "Debe considerarse la esfericidad y, cuando corresponda, aplicar Greenhouse–Geisser o Huynh–Feldt."
        ],
        estadistico: "El estadístico F compara el cuadrado medio atribuible a las mediciones con el cuadrado medio del error intra-sujetos.",
        efecto: "Eta cuadrado parcial y, como complemento, eta cuadrado generalizado.",
        reporteAPA: "F(gl1, gl2) = valor, p = valor, eta cuadrado parcial = valor. Si se corrige la esfericidad, informe epsilon y los grados de libertad corregidos.",
        posthoc: [
            "Comparaciones t pareadas cuando el contraste global es significativo.",
            "Ajuste de Holm para controlar las comparaciones múltiples.",
            "Informe diferencias medias, intervalos de confianza y d_z."
        ],
        alternativas: [
            "Prueba de Friedman para datos ordinales o no paramétricos.",
            "Modelos lineales mixtos con datos faltantes, covariables o estructuras complejas."
        ],
        erroresFrecuentes: [
            "Tratar las mediciones repetidas como grupos independientes.",
            "Perder la correspondencia entre filas.",
            "Ignorar la esfericidad o la corrección utilizada.",
            "Realizar múltiples comparaciones sin ajuste.",
            "Informar únicamente el valor p."
        ],
        ejemplo: "Se comparan las calificaciones de los mismos estudiantes al inicio, a mitad y al final de una intervención educativa.",
        referencias: [
            "Greenhouse, S. W., y Geisser, S. (1959). On methods in the analysis of profile data.",
            "Huynh, H., y Feldt, L. S. (1976). Estimation of the Box correction for degrees of freedom."
        ]
    },

    friedman: {
        nombre: "Prueba de Friedman",
        definicion: "Prueba no paramétrica para comparar tres o más mediciones relacionadas mediante rangos asignados dentro de cada participante.",
        cuandoUsar: [
            "Se comparan tres o más mediciones relacionadas.",
            "La variable es ordinal o cuantitativa sin supuestos paramétricos razonables.",
            "Las mismas personas son evaluadas en todas las condiciones.",
            "Se conserva la correspondencia fila por fila."
        ],
        hipotesis: {
            h0: "Las condiciones tienen la misma distribución de rangos.",
            h1: "Al menos una condición presenta una distribución de rangos diferente."
        },
        supuestos: [
            "Las mediciones están relacionadas dentro de cada participante.",
            "Los participantes son independientes entre sí.",
            "La variable posee al menos escala ordinal.",
            "Cada persona aporta una observación en cada condición."
        ],
        estadistico: "El estadístico de Friedman se calcula a partir de las sumas de rangos, con corrección por empates y aproximación chi-cuadrado con k menos 1 grados de libertad.",
        efecto: "W de Kendall, entre 0 y 1, como medida de concordancia o diferenciación sistemática entre condiciones.",
        reporteAPA: "Chi-cuadrado de Friedman(gl) = valor, p = valor, W de Kendall = valor.",
        posthoc: [
            "Comparaciones pareadas de Wilcoxon cuando el contraste global es significativo.",
            "Ajuste de Holm para controlar comparaciones múltiples.",
            "Informe valores p ajustados y tamaños del efecto por rangos."
        ],
        alternativas: [
            "ANOVA de medidas repetidas cuando los supuestos paramétricos son razonables.",
            "Modelos ordinales mixtos con datos faltantes o estructuras complejas."
        ],
        erroresFrecuentes: [
            "Aplicarla a grupos independientes.",
            "Perder la correspondencia entre condiciones.",
            "Concluir que todas las condiciones difieren por un resultado global significativo.",
            "Realizar comparaciones de Wilcoxon sin ajuste.",
            "Ignorar los empates."
        ],
        ejemplo: "Se comparan respuestas ordinales de los mismos docentes antes, durante y después de un programa de formación.",
        referencias: [
            "Friedman, M. (1937). The use of ranks to avoid the assumption of normality implicit in the analysis of variance.",
            "Kendall, M. G., y Babington Smith, B. (1939). The problem of m rankings."
        ]
    }
};
