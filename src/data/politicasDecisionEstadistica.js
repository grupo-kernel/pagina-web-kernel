export const ESTADOS_DECISION = Object.freeze({
    DEFINITIVA: "definitiva",
    CONDICIONADA: "condicionada",
    INFORMACION_INSUFICIENTE: "informacion-insuficiente",
    CASO_NO_CUBIERTO: "caso-no-cubierto"
});

const politica = (configuracion) => Object.freeze({
    estadoDecision: ESTADOS_DECISION.DEFINITIVA,
    estimando: "",
    razones: [],
    supuestos: [],
    advertencias: [],
    alternativa: null,
    efectoEstructurado: null,
    ...configuracion
});

export const POLITICAS_DECISION_COMPARACION = Object.freeze({
    "t-student-una-muestra": politica({
        estimando: "media respecto a un valor de referencia",
        razones: [
            "La variable de resultado es cuantitativa.",
            "Se analiza una sola muestra frente a un valor teórico o de referencia.",
            "La inferencia se formula sobre la media poblacional."
        ],
        supuestos: [
            "Independencia de las observaciones.",
            "Distribución aproximadamente normal o tamaño muestral suficiente para la inferencia sobre la media.",
            "Ausencia de valores atípicos altamente influyentes."
        ],
        efectoEstructurado: {
            principal: "Diferencia entre la media observada y el valor de referencia",
            estandarizado: "d de Cohen para una muestra",
            intervaloConfianza: true
        }
    }),

    "wilcoxon-una-muestra": politica({
        estimando: "localización o distribución respecto a un valor de referencia",
        razones: [
            "Se analiza una sola muestra.",
            "La variable es ordinal o la inferencia sobre la media no resulta adecuada.",
            "La decisión se basa en rangos con signo."
        ],
        supuestos: [
            "Observaciones independientes.",
            "Variable al menos ordinal.",
            "Distribución aproximadamente simétrica de las diferencias cuando se interpreta como contraste de localización."
        ],
        advertencias: [
            "No debe describirse automáticamente como una prueba de medianas sin verificar las condiciones de simetría e interpretación."
        ],
        efectoEstructurado: {
            principal: "Diferencia de localización basada en rangos",
            estandarizado: "Correlación biserial por rangos",
            intervaloConfianza: true
        }
    }),

    "t-student-independientes": politica({
        estadoDecision: ESTADOS_DECISION.CONDICIONADA,
        estimando: "diferencia de medias entre dos grupos independientes",
        razones: [
            "La variable de resultado es cuantitativa.",
            "Se comparan exactamente dos grupos independientes.",
            "El objetivo inferencial es comparar medias.",
            "Se ha indicado homogeneidad de varianzas."
        ],
        supuestos: [
            "Independencia de las observaciones.",
            "Normalidad aproximada de los residuos o tamaños muestrales que sostengan la inferencia.",
            "Homogeneidad de varianzas entre los grupos.",
            "Ausencia de valores atípicos altamente influyentes."
        ],
        advertencias: [
            "La prueba t de Welch suele ser preferible cuando la igualdad de varianzas es incierta."
        ],
        alternativa: {
            id: "t-welch-independientes",
            condicion: "Utilizarla cuando las varianzas sean desiguales, dudosas o los tamaños de los grupos estén desbalanceados."
        },
        efectoEstructurado: {
            principal: "Diferencia de medias",
            estandarizado: "g de Hedges",
            intervaloConfianza: true
        }
    }),

    "t-welch-independientes": politica({
        estimando: "diferencia de medias entre dos grupos independientes",
        razones: [
            "La variable de resultado es cuantitativa.",
            "Se comparan dos grupos independientes.",
            "El objetivo inferencial es comparar medias.",
            "La prueba no exige igualdad de varianzas."
        ],
        supuestos: [
            "Independencia de las observaciones.",
            "Normalidad aproximada de los residuos o tamaños muestrales suficientes.",
            "Ausencia de valores atípicos altamente influyentes."
        ],
        alternativa: {
            id: "mann-whitney",
            condicion: "Considerarla cuando la variable sea ordinal o el objetivo sea comparar distribuciones o rangos, no simplemente como sustituto automático por falta de normalidad."
        },
        efectoEstructurado: {
            principal: "Diferencia de medias",
            estandarizado: "g de Hedges",
            intervaloConfianza: true
        }
    }),

    "mann-whitney": politica({
        estimando: "diferencia de distribución, probabilidad de superioridad o rangos entre dos grupos independientes",
        razones: [
            "Se comparan dos grupos independientes.",
            "La variable es ordinal o el objetivo científico se expresa mediante rangos o distribuciones.",
            "La inferencia no depende de un modelo normal para las medias."
        ],
        supuestos: [
            "Independencia entre grupos.",
            "Variable al menos ordinal.",
            "Formas de distribución comparables si se desea interpretar el resultado como diferencia de localización."
        ],
        advertencias: [
            "No debe presentarse automáticamente como una comparación de medianas.",
            "La falta de normalidad, por sí sola, no determina que esta prueba sea superior a un método robusto para medias."
        ],
        alternativa: {
            id: "t-welch-independientes",
            condicion: "Preferirla cuando el estimando de interés sea la diferencia de medias y los datos permitan una inferencia robusta sobre ese parámetro."
        },
        efectoEstructurado: {
            principal: "Probabilidad de superioridad o diferencia basada en rangos",
            estandarizado: "Delta de Cliff o correlación biserial por rangos",
            intervaloConfianza: true
        }
    }),

    "t-student-relacionadas": politica({
        estimando: "media de las diferencias entre dos mediciones relacionadas",
        razones: [
            "Las dos mediciones pertenecen a los mismos participantes o a pares vinculados.",
            "La variable de resultado es cuantitativa.",
            "La inferencia se formula sobre la media de las diferencias."
        ],
        supuestos: [
            "Independencia entre pares o participantes.",
            "Normalidad aproximada de las diferencias, no necesariamente de cada medición por separado.",
            "Ausencia de diferencias atípicas altamente influyentes."
        ],
        efectoEstructurado: {
            principal: "Media de las diferencias",
            estandarizado: "d de Cohen para datos pareados",
            intervaloConfianza: true
        }
    }),

    "wilcoxon-relacionadas": politica({
        estimando: "cambio de localización o distribución entre dos mediciones relacionadas",
        razones: [
            "Las observaciones están relacionadas.",
            "La variable es ordinal o la inferencia sobre la media de las diferencias no resulta adecuada.",
            "La comparación se basa en rangos con signo."
        ],
        supuestos: [
            "Independencia entre pares.",
            "Variable al menos ordinal.",
            "Simetría aproximada de las diferencias cuando se interpreta como cambio de localización."
        ],
        advertencias: [
            "No equivale automáticamente a una prueba de medianas pareadas."
        ],
        efectoEstructurado: {
            principal: "Cambio basado en rangos",
            estandarizado: "Correlación biserial por rangos",
            intervaloConfianza: true
        }
    }),

    "anova-un-factor": politica({
        estadoDecision: ESTADOS_DECISION.CONDICIONADA,
        estimando: "diferencias de medias entre tres o más grupos independientes",
        razones: [
            "La variable de resultado es cuantitativa.",
            "Se comparan tres o más grupos independientes.",
            "El objetivo inferencial es comparar medias.",
            "Se ha indicado homogeneidad de varianzas."
        ],
        supuestos: [
            "Independencia de las observaciones.",
            "Normalidad aproximada de los residuos.",
            "Homogeneidad de varianzas.",
            "Ausencia de valores atípicos altamente influyentes."
        ],
        advertencias: [
            "Después de un resultado global significativo se requieren comparaciones múltiples planificadas o post hoc."
        ],
        alternativa: {
            id: "anova-welch",
            condicion: "Utilizarla cuando las varianzas sean desiguales o exista desbalance entre tamaños muestrales."
        },
        efectoEstructurado: {
            principal: "Diferencias de medias",
            estandarizado: "Omega cuadrado",
            intervaloConfianza: true
        }
    }),

    "anova-welch": politica({
        estimando: "diferencias de medias entre tres o más grupos independientes",
        razones: [
            "La variable de resultado es cuantitativa.",
            "Se comparan tres o más grupos independientes.",
            "El objetivo inferencial es comparar medias.",
            "La prueba admite heterogeneidad de varianzas."
        ],
        supuestos: [
            "Independencia de las observaciones.",
            "Normalidad aproximada de los residuos o tamaños muestrales suficientes.",
            "Ausencia de valores atípicos altamente influyentes."
        ],
        advertencias: [
            "Las comparaciones posteriores deben ser compatibles con varianzas desiguales, por ejemplo Games–Howell."
        ],
        alternativa: {
            id: "kruskal-wallis",
            condicion: "Considerarla cuando la variable sea ordinal o el objetivo se exprese mediante rangos o distribuciones."
        },
        efectoEstructurado: {
            principal: "Diferencias de medias",
            estandarizado: "Omega cuadrado ajustado",
            intervaloConfianza: true
        }
    }),

    "kruskal-wallis": politica({
        estimando: "diferencias de distribución o rangos entre tres o más grupos independientes",
        razones: [
            "Se comparan tres o más grupos independientes.",
            "La variable es ordinal o el objetivo se expresa mediante rangos o distribuciones.",
            "La inferencia no depende de un modelo normal para las medias."
        ],
        supuestos: [
            "Independencia entre grupos.",
            "Variable al menos ordinal.",
            "Formas de distribución comparables si se interpreta como diferencia de localización."
        ],
        advertencias: [
            "Un resultado global significativo requiere comparaciones posteriores con control del error por multiplicidad.",
            "No debe interpretarse automáticamente como una comparación de medianas."
        ],
        alternativa: {
            id: "anova-welch",
            condicion: "Preferirla cuando el estimando de interés sean las medias y el diseño permita una inferencia robusta sobre ellas."
        },
        efectoEstructurado: {
            principal: "Diferencia global basada en rangos",
            estandarizado: "Épsilon cuadrado",
            intervaloConfianza: true
        }
    }),

    "anova-medidas-repetidas": politica({
        estadoDecision: ESTADOS_DECISION.CONDICIONADA,
        estimando: "diferencias de medias entre tres o más mediciones relacionadas",
        razones: [
            "Las mediciones corresponden a los mismos participantes o unidades relacionadas.",
            "La variable de resultado es cuantitativa.",
            "El objetivo inferencial es comparar medias a través de ocasiones o condiciones."
        ],
        supuestos: [
            "Independencia entre participantes.",
            "Normalidad aproximada de los residuos.",
            "Esfericidad cuando existen más de dos niveles, o aplicación de una corrección apropiada.",
            "Ausencia de valores atípicos altamente influyentes."
        ],
        advertencias: [
            "Los datos faltantes, intervalos desiguales o estructuras complejas pueden requerir modelos mixtos."
        ],
        alternativa: {
            id: "modelo-mixto-lineal",
            condicion: "Considerarlo cuando existan datos incompletos, tiempos irregulares, covariables o estructuras de correlación más complejas."
        },
        efectoEstructurado: {
            principal: "Diferencias de medias entre ocasiones o condiciones",
            estandarizado: "Eta cuadrado parcial u omega cuadrado generalizado",
            intervaloConfianza: true
        }
    }),

    friedman: politica({
        estimando: "diferencias de rangos entre tres o más mediciones relacionadas",
        razones: [
            "Las mediciones están relacionadas.",
            "La variable es ordinal o el objetivo se expresa mediante rangos.",
            "Se comparan tres o más condiciones u ocasiones."
        ],
        supuestos: [
            "Independencia entre participantes.",
            "Variable al menos ordinal.",
            "Mismas unidades evaluadas en todas las condiciones consideradas."
        ],
        advertencias: [
            "Un resultado global significativo requiere comparaciones posteriores pareadas con ajuste por multiplicidad."
        ],
        alternativa: {
            id: "modelo-mixto-ordinal",
            condicion: "Considerarlo cuando existan datos faltantes, covariables o una estructura longitudinal más compleja."
        },
        efectoEstructurado: {
            principal: "Diferencia global basada en rangos",
            estandarizado: "W de Kendall",
            intervaloConfianza: true
        }
    })
});

export function obtenerPoliticaDecision(id) {
    return POLITICAS_DECISION_COMPARACION[id] || null;
}
