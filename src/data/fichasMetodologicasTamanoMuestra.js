export const fichasMetodologicasTamanoMuestra = {
    "tamano-muestra-potencia": {
        nombre: "Tamaño de muestra y potencia estadística",
        definicion:
            "Proceso de planificación que determina cuántas unidades de análisis se requieren para alcanzar una precisión o potencia predefinida bajo un diseño, nivel de significación y tamaño del efecto especificados.",
        cuandoUsar: [
            "Antes de iniciar la recolección de datos.",
            "Cuando se necesita justificar el tamaño de la muestra en un protocolo, tesis o artículo.",
            "Cuando se desea evaluar la potencia aproximada de una muestra ya disponible.",
            "Cuando deben incorporarse pérdidas, población finita o efecto de diseño."
        ],
        hipotesis: {
            h0:
                "La formulación depende de la prueba principal; bajo H₀ el efecto poblacional es nulo o no supera el criterio definido.",
            h1:
                "El efecto poblacional alcanza al menos la magnitud mínima considerada relevante para el estudio."
        },
        supuestos: [
            "El análisis principal y su diseño están definidos antes de calcular.",
            "El tamaño del efecto o margen de error tiene una justificación empírica o sustantiva.",
            "Las observaciones cumplen la estructura de independencia o dependencia asumida.",
            "La tasa de pérdidas y el efecto de diseño son razonables para la población y el procedimiento de muestreo.",
            "Los parámetros utilizados representan el escenario que se pretende estudiar."
        ],
        estadistico:
            "El cálculo combina cuantiles de las distribuciones de referencia, tamaño del efecto, alpha, potencia y estructura del diseño. Para modelos complejos pueden utilizarse aproximaciones, distribuciones no centrales o simulación.",
        efecto:
            "Debe informar el parámetro usado: d o dz de Cohen, f o f², w, correlación esperada, odds ratio, diferencia de proporciones, desviación estándar o margen de error.",
        reporteAPA:
            "El tamaño muestral se estimó a priori para [diseño], con α = valor, potencia = valor y tamaño del efecto = valor. El cálculo inicial fue n = valor y se ajustó por [pérdidas/efecto de diseño/población finita], obteniéndose un tamaño final de n = valor.",
        posthoc: [
            "Realizar análisis de sensibilidad con varios tamaños del efecto.",
            "Comparar escenarios de potencia de 80 %, 90 % y 95 %.",
            "Recalcular cuando cambie el diseño o la asignación entre grupos."
        ],
        alternativas: [
            "Simulación Monte Carlo para modelos complejos.",
            "Métodos bayesianos de precisión o decisión.",
            "Diseños secuenciales o adaptativos cuando están justificados."
        ],
        erroresFrecuentes: [
            "Calcular el tamaño después de observar los resultados para justificar un valor p.",
            "Elegir arbitrariamente un efecto grande para reducir la muestra.",
            "Confundir potencia observada con evidencia sobre la hipótesis.",
            "No ajustar por pérdidas o muestreo por conglomerados.",
            "Usar una fórmula incompatible con el análisis principal."
        ],
        ejemplo:
            "Se planifica comparar dos estrategias didácticas esperando d = 0.50, α = 0.05, potencia de 80 % y 10 % de pérdidas.",
        referencias: [
            "Cohen, J. (1988). Statistical Power Analysis for the Behavioral Sciences.",
            "Faul, F., Erdfelder, E., Lang, A.-G., & Buchner, A. (2007). G*Power 3.",
            "Lakens, D. (2022). Sample Size Justification."
        ]
    }
};
