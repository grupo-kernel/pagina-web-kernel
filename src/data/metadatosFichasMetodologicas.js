export const METADATOS_FICHAS_METODOLOGICAS = Object.freeze({
    "t-student-una-muestra": {
        categoria: "Una muestra",
        tipo: "Paramétrica",
        ruta: null
    },
    "wilcoxon-una-muestra": {
        categoria: "Una muestra",
        tipo: "No paramétrica",
        ruta: null
    },
    "t-student-independientes": {
        categoria: "Dos grupos independientes",
        tipo: "Paramétrica",
        ruta: "calculadoraDosGrupos"
    },
    "t-welch-independientes": {
        categoria: "Dos grupos independientes",
        tipo: "Paramétrica robusta",
        ruta: "calculadoraDosGrupos"
    },
    "mann-whitney": {
        categoria: "Dos grupos independientes",
        tipo: "No paramétrica",
        ruta: "calculadoraDosGrupos"
    },
    "t-student-relacionadas": {
        categoria: "Dos mediciones relacionadas",
        tipo: "Paramétrica",
        ruta: "calculadoraDosMuestrasRelacionadas"
    },
    "wilcoxon-relacionadas": {
        categoria: "Dos mediciones relacionadas",
        tipo: "No paramétrica",
        ruta: "calculadoraDosMuestrasRelacionadas"
    },
    "anova-un-factor": {
        categoria: "Tres o más grupos independientes",
        tipo: "Paramétrica",
        ruta: "calculadoraTresOMasGrupos"
    },
    "anova-welch": {
        categoria: "Tres o más grupos independientes",
        tipo: "Paramétrica robusta",
        ruta: "calculadoraTresOMasGrupos"
    },
    "kruskal-wallis": {
        categoria: "Tres o más grupos independientes",
        tipo: "No paramétrica",
        ruta: "calculadoraTresOMasGrupos"
    },
    "anova-medidas-repetidas": {
        categoria: "Tres o más mediciones relacionadas",
        tipo: "Paramétrica",
        ruta: "calculadoraTresOMasMedicionesRelacionadas"
    },
    friedman: {
        categoria: "Tres o más mediciones relacionadas",
        tipo: "No paramétrica",
        ruta: "calculadoraTresOMasMedicionesRelacionadas"
    },
    pearson: {
        categoria: "Relación entre variables",
        tipo: "Paramétrica",
        ruta: "calculadoraRelacionVariables"
    },
    "spearman-cuantitativas": {
        categoria: "Relación entre variables",
        tipo: "No paramétrica",
        ruta: "calculadoraRelacionVariables"
    },
    "spearman-ordinales": {
        categoria: "Relación entre variables ordinales",
        tipo: "No paramétrica",
        ruta: "calculadoraRelacionVariables"
    },
    kendall: {
        categoria: "Relación entre variables ordinales",
        tipo: "No paramétrica",
        ruta: "calculadoraRelacionVariables"
    },
    "punto-biserial": {
        categoria: "Relación entre variables",
        tipo: "Paramétrica",
        ruta: "calculadoraRelacionVariables"
    },
    "correlacion-biserial": {
        categoria: "Relación entre variables",
        tipo: "Paramétrica",
        ruta: null
    },
    "relacion-no-monotonica": {
        categoria: "Relación entre variables",
        tipo: "Modelización no lineal",
        ruta: null,
        etiquetaEfecto: "Medidas de ajuste"
    },
    "chi-cuadrado-independencia-2x2": {
        categoria: "Asociación categórica",
        tipo: "No paramétrica",
        ruta: "calculadoraAsociacionCategorica"
    },
    "fisher-exacta-2x2": {
        categoria: "Asociación categórica",
        tipo: "Exacta",
        ruta: "calculadoraAsociacionCategorica"
    },
    "chi-cuadrado-independencia-rxc": {
        categoria: "Asociación categórica",
        tipo: "No paramétrica",
        ruta: "calculadoraAsociacionCategorica"
    },
    "fisher-freeman-halton": {
        categoria: "Asociación categórica",
        tipo: "Exacta",
        ruta: "calculadoraAsociacionCategorica"
    },
    "bondad-ajuste-categorica": {
        categoria: "Una muestra categórica",
        tipo: "Categórica",
        ruta: null
    },
    mcnemar: {
        categoria: "Dos mediciones relacionadas",
        tipo: "No paramétrica",
        ruta: null
    },
    "q-cochran": {
        categoria: "Tres o más mediciones relacionadas",
        tipo: "No paramétrica",
        ruta: null
    },
    "chi-cuadrado-independencia-comparacion": {
        categoria: "Asociación categórica",
        tipo: "No paramétrica",
        ruta: "calculadoraAsociacionCategorica"
    },
    "regresion-lineal-simple": {
        categoria: "Regresión",
        tipo: "Modelo lineal",
        ruta: "calculadoraRegresion",
        etiquetaEfecto: "Efecto y ajuste"
    },
    "regresion-lineal-multiple": {
        categoria: "Regresión",
        tipo: "Modelo lineal multivariable",
        ruta: "calculadoraRegresion",
        etiquetaEfecto: "Efectos ajustados y ajuste"
    },
    "regresion-logistica-binaria-simple": {
        categoria: "Regresión",
        tipo: "Modelo lineal generalizado",
        ruta: "calculadoraRegresionLogistica",
        etiquetaEfecto: "Efecto y ajuste"
    },
    "regresion-logistica-binaria-multiple": {
        categoria: "Regresión",
        tipo: "Modelo lineal generalizado multivariable",
        ruta: "calculadoraRegresionLogistica",
        etiquetaEfecto: "Efectos ajustados y ajuste"
    },
    "regresion-poisson": {
        categoria: "Regresión",
        tipo: "Modelo lineal generalizado",
        ruta: "calculadoraRegresionConteo",
        etiquetaEfecto: "Efectos y ajuste"
    },
    "regresion-binomial-negativa": {
        categoria: "Regresión",
        tipo: "Modelo lineal generalizado",
        ruta: "calculadoraRegresionConteo",
        etiquetaEfecto: "Efectos y ajuste"
    },
    "evaluar-sobredispersion": {
        categoria: "Regresión",
        tipo: "Diagnóstico del modelo",
        ruta: "calculadoraRegresionConteo",
        etiquetaEfecto: "Indicadores diagnósticos"
    },
    "fiabilidad-cuestionario": {
        categoria: "Instrumentos",
        tipo: "Psicométrica",
        ruta: "calculadoraFiabilidadCuestionarios",
        etiquetaEfecto: "Indicadores de fiabilidad"
    },
    "evaluacion-educativa-clasica": {
        categoria: "Evaluación educativa",
        tipo: "Psicométrica",
        ruta: "calculadoraEvaluacionEducativa",
        etiquetaEfecto: "Indicadores de calidad"
    },
    "tamano-muestra-potencia": {
        categoria: "Planificación muestral",
        tipo: "Planificación",
        ruta: "calculadoraTamanoMuestraPotencia",
        etiquetaEfecto: "Parámetros de planificación"
    }
});

const CAMPOS_DECISION_METODOLOGICA = Object.freeze({
    "t-student-independientes": {
        objetivo:
            "Comparar las medias de dos grupos independientes bajo un modelo de varianzas poblacionales iguales.",
        cuandoNoUsar: [
            "Cuando las observaciones están emparejadas o corresponden a mediciones repetidas.",
            "Cuando la homogeneidad de varianzas no es razonable; en ese caso se prefiere Welch.",
            "Cuando la escala o la distribución hacen inadecuada la comparación de medias."
        ]
    },
    "t-welch-independientes": {
        objetivo:
            "Comparar las medias de dos grupos independientes sin imponer igualdad de varianzas poblacionales.",
        cuandoNoUsar: [
            "Cuando las observaciones están relacionadas o pareadas.",
            "Cuando la pregunta no se refiere a una diferencia de medias.",
            "Cuando valores atípicos extremos o distribuciones inadecuadas hacen poco representativa la media."
        ]
    },
    "mann-whitney": {
        objetivo:
            "Comparar la distribución o dominancia probabilística de dos grupos independientes mediante rangos.",
        cuandoNoUsar: [
            "Cuando las observaciones son pareadas.",
            "Cuando se pretende interpretar el resultado exclusivamente como diferencia de medianas sin formas de distribución comparables.",
            "Cuando la variable es nominal y no puede ordenarse."
        ]
    },
    "t-student-relacionadas": {
        objetivo:
            "Comparar las medias de dos mediciones relacionadas a partir de la media de sus diferencias pareadas.",
        cuandoNoUsar: [
            "Cuando los grupos son independientes.",
            "Cuando no puede establecerse la correspondencia entre pares.",
            "Cuando las diferencias contienen valores atípicos extremos o no admiten una inferencia razonable sobre su media."
        ]
    },
    "wilcoxon-relacionadas": {
        objetivo:
            "Comparar dos mediciones relacionadas mediante los rangos y signos de sus diferencias no nulas.",
        cuandoNoUsar: [
            "Cuando las muestras son independientes.",
            "Cuando la variable no posee al menos una escala ordinal.",
            "Cuando se interpreta como prueba de medianas pese a una distribución muy asimétrica de las diferencias."
        ]
    },
    "anova-un-factor": {
        objetivo:
            "Contrastar la igualdad de las medias de tres o más grupos independientes bajo homogeneidad de varianzas.",
        cuandoNoUsar: [
            "Cuando las observaciones son repetidas o están emparejadas.",
            "Cuando la heterogeneidad de varianzas es importante; en ese caso se prefiere ANOVA de Welch.",
            "Cuando la variable resultado no es cuantitativa o la media no constituye un resumen apropiado."
        ]
    },
    "anova-welch": {
        objetivo:
            "Contrastar la igualdad de las medias de tres o más grupos independientes permitiendo varianzas desiguales.",
        cuandoNoUsar: [
            "Cuando las mediciones están relacionadas.",
            "Cuando la variable resultado no es cuantitativa.",
            "Cuando valores atípicos extremos o formas distributivas inadecuadas impiden interpretar con seguridad las medias."
        ]
    },
    "kruskal-wallis": {
        objetivo:
            "Comparar las distribuciones de tres o más grupos independientes mediante rangos.",
        cuandoNoUsar: [
            "Cuando las mediciones están relacionadas.",
            "Cuando la variable es nominal.",
            "Cuando se pretende concluir una diferencia de medianas sin revisar la forma de las distribuciones."
        ]
    },
    "anova-medidas-repetidas": {
        objetivo:
            "Comparar las medias de tres o más mediciones realizadas sobre las mismas unidades de análisis.",
        cuandoNoUsar: [
            "Cuando los grupos son independientes.",
            "Cuando faltan mediciones de forma incompatible con el diseño completo y no se utiliza un modelo apropiado.",
            "Cuando la esfericidad o sus correcciones no pueden abordarse de manera adecuada."
        ]
    },
    friedman: {
        objetivo:
            "Comparar tres o más mediciones relacionadas mediante rangos dentro de cada unidad de análisis.",
        cuandoNoUsar: [
            "Cuando los grupos son independientes.",
            "Cuando la variable no es al menos ordinal.",
            "Cuando existen datos faltantes que impiden formar bloques completos sin una estrategia metodológica apropiada."
        ]
    },
    pearson: {
        objetivo:
            "Cuantificar la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",
        cuandoNoUsar: [
            "Cuando la relación no es lineal.",
            "Cuando valores atípicos influyentes dominan el coeficiente.",
            "Cuando las variables son ordinales o la inferencia clásica no resulta justificable."
        ]
    },
    kendall: {
        objetivo:
            "Cuantificar la concordancia ordinal entre dos variables considerando pares concordantes, discordantes y empates.",
        cuandoNoUsar: [
            "Cuando las categorías son nominales y no poseen orden.",
            "Cuando la relación cambia de dirección y no es monotónica.",
            "Cuando el objetivo requiere predicción o control de covariables."
        ]
    },
    "punto-biserial": {
        objetivo:
            "Cuantificar la relación entre una dicotomía genuina y una variable cuantitativa.",
        cuandoNoUsar: [
            "Cuando la dicotomía procede de cortar artificialmente una variable continua.",
            "Cuando la variable categórica posee más de dos niveles.",
            "Cuando las observaciones no son independientes."
        ]
    },
    "relacion-no-monotonica": {
        objetivo:
            "Describir y modelar una relación que cambia de dirección y que no puede resumirse adecuadamente con una correlación lineal o monotónica.",
        cuandoNoUsar: [
            "Cuando el diagrama muestra una relación lineal o monotónica bien representada por un coeficiente más simple.",
            "Cuando no existe sustento teórico ni validación para la forma flexible propuesta.",
            "Cuando se pretende seleccionar el modelo solo por el mayor R² en la misma muestra."
        ]
    },
    "chi-cuadrado-independencia-2x2": {
        objetivo:
            "Evaluar la asociación entre dos variables dicotómicas en una tabla de contingencia 2 × 2.",
        cuandoNoUsar: [
            "Cuando las observaciones están pareadas.",
            "Cuando las frecuencias esperadas son pequeñas y se requiere una prueba exacta.",
            "Cuando los datos disponibles son porcentajes sin frecuencias absolutas."
        ]
    },
    "fisher-exacta-2x2": {
        objetivo:
            "Evaluar exactamente la asociación entre dos variables dicotómicas en una tabla 2 × 2.",
        cuandoNoUsar: [
            "Cuando las observaciones están relacionadas.",
            "Cuando la tabla tiene más de dos filas o columnas.",
            "Cuando se pretende ajustar por covariables."
        ]
    },
    "chi-cuadrado-independencia-rxc": {
        objetivo:
            "Evaluar la asociación entre dos variables categóricas en una tabla de contingencia r × c.",
        cuandoNoUsar: [
            "Cuando las observaciones están relacionadas.",
            "Cuando las frecuencias esperadas son inadecuadas para la aproximación.",
            "Cuando se requiere controlar covariables o modelar una respuesta categórica."
        ]
    },
    "fisher-freeman-halton": {
        objetivo:
            "Evaluar de forma exacta o mediante Monte Carlo la asociación en una tabla r × c con frecuencias pequeñas.",
        cuandoNoUsar: [
            "Cuando las observaciones no son independientes.",
            "Cuando la tabla es 2 × 2 y basta la prueba exacta de Fisher convencional.",
            "Cuando se requiere ajustar por covariables."
        ]
    },
    "regresion-poisson": {
        objetivo:
            "Modelar un conteo o una tasa mediante predictores cuando la dispersión condicional es compatible con Poisson.",
        cuandoNoUsar: [
            "Cuando la respuesta no es un conteo entero no negativo.",
            "Cuando persiste sobredispersión importante, exceso estructural de ceros o dependencia no modelada.",
            "Cuando se omite una exposición necesaria para comparar tasas."
        ]
    },
    "regresion-binomial-negativa": {
        objetivo:
            "Modelar un conteo sobredisperso mediante un parámetro adicional de heterogeneidad.",
        cuandoNoUsar: [
            "Cuando la dispersión es compatible con Poisson y no se justifica el parámetro adicional.",
            "Cuando la respuesta no es un conteo entero no negativo.",
            "Cuando el problema principal es truncamiento, exceso estructural de ceros o dependencia no modelada."
        ]
    },
    "fiabilidad-cuestionario": {
        objetivo:
            "Evaluar la consistencia interna y la contribución de los ítems a una puntuación o subescala definida.",
        cuandoNoUsar: [
            "Cuando los ítems no pretenden medir una puntuación común.",
            "Cuando se desea demostrar validez o unidimensionalidad únicamente mediante un coeficiente de fiabilidad.",
            "Cuando se mezclan subescalas diferentes en un único coeficiente."
        ]
    },
    "evaluacion-educativa-clasica": {
        objetivo:
            "Examinar la calidad técnica de una prueba educativa y de sus ítems después de una aplicación.",
        cuandoNoUsar: [
            "Cuando no existe una clave de corrección válida o una codificación consistente.",
            "Cuando la muestra no permite interpretar con estabilidad los indicadores.",
            "Cuando se pretende sustituir la revisión curricular o demostrar validez solo con estadísticas de ítems."
        ]
    },
    "tamano-muestra-potencia": {
        objetivo:
            "Planificar el tamaño muestral o evaluar potencia a partir del diseño, el efecto relevante, alpha y la potencia objetivo.",
        cuandoNoUsar: [
            "Cuando el diseño real no coincide con el modelo de cálculo seleccionado.",
            "Cuando el tamaño del efecto se elige sin justificación sustantiva, piloto o evidencia previa.",
            "Cuando diseños complejos requieren simulación o métodos especializados que la herramienta no implementa."
        ]
    }
});

export function obtenerMetadatosFichaMetodologica(id) {
    const metadatos = METADATOS_FICHAS_METODOLOGICAS[id];
    if (!metadatos) return null;

    return {
        ...metadatos,
        ...(CAMPOS_DECISION_METODOLOGICA[id] || {})
    };
}
