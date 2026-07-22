const fichaRegresionLineal = {
    nombre: "Regresión lineal",
    definicion:
        "Modelo que representa el valor medio de una variable dependiente cuantitativa como combinación lineal de uno o varios predictores, estimando los coeficientes habitualmente mediante mínimos cuadrados ordinarios.",
    cuandoUsar: [
        "La variable dependiente es cuantitativa continua.",
        "Se desea explicar cambios medios, controlar covariables o realizar predicciones.",
        "La relación entre la respuesta y cada predictor cuantitativo es aproximadamente lineal, manteniendo constantes los demás.",
        "El diseño y la teoría justifican la inclusión de los predictores."
    ],
    hipotesis: {
        h0: "En la prueba global, todos los coeficientes de pendiente son iguales a cero; para cada predictor, su coeficiente parcial es igual a cero.",
        h1: "Al menos un coeficiente de pendiente difiere de cero; en la prueba individual, el coeficiente del predictor evaluado difiere de cero."
    },
    supuestos: [
        "Independencia entre las observaciones y estructura de dependencia correctamente modelada.",
        "Relación aproximadamente lineal entre respuesta y predictores cuantitativos.",
        "Varianza residual aproximadamente constante.",
        "Residuos aproximadamente normales para la inferencia clásica, especialmente en muestras pequeñas.",
        "Ausencia de multicolinealidad severa.",
        "Ausencia de observaciones excesivamente influyentes sin explicación sustantiva."
    ],
    estadistico:
        "El modelo se evalúa mediante una prueba F global y pruebas t para los coeficientes. R² resume la proporción de variabilidad explicada en la muestra y R² ajustado penaliza la inclusión de predictores adicionales.",
    efecto:
        "Coeficientes no estandarizados con intervalos de confianza, coeficientes estandarizados cuando sean comparables, R², R² ajustado y medidas de error como RMSE o MAE.",
    reporteAPA:
        "Informe F(gl1, gl2), p, R², R² ajustado, coeficientes B, errores estándar, t, p e IC 95 %. Describa los diagnósticos de residuos, colinealidad e influencia.",
    posthoc: [],
    alternativas: [
        "Transformaciones o términos polinómicos cuando la forma no es lineal y existe justificación.",
        "Regresión robusta cuando hay heterocedasticidad o valores influyentes que no pueden resolverse mediante revisión de datos.",
        "Modelos mixtos o de medidas repetidas cuando las observaciones están agrupadas o correlacionadas.",
        "Modelos generalizados cuando la variable dependiente no es continua y aproximadamente normal."
    ],
    erroresFrecuentes: [
        "Interpretar asociación como causalidad sin un diseño que la sustente.",
        "Elegir predictores únicamente por valores p obtenidos en la misma muestra.",
        "Informar R² sin revisar residuos, colinealidad y observaciones influyentes.",
        "Extrapolar fuera del rango observado.",
        "Comparar la magnitud de coeficientes no estandarizados medidos en escalas distintas.",
        "Confundir un resultado estadísticamente significativo con utilidad práctica o predictiva."
    ],
    ejemplo:
        "Se modela la calificación final a partir de horas de estudio, asistencia y puntuación diagnóstica inicial.",
    referencias: [
        "Harrell, F. E. (2015). Regression Modeling Strategies.",
        "Kutner, M. H., Nachtsheim, C. J., Neter, J., & Li, W. (2005). Applied Linear Statistical Models.",
        "James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."
    ]
};

const fichaRegresionLogistica = {
    nombre: "Regresión logística binaria",
    definicion:
        "Modelo lineal generalizado que relaciona uno o varios predictores con la probabilidad de un evento dicotómico mediante la función logit y estima razones de probabilidades ajustadas.",
    cuandoUsar: [
        "La variable dependiente contiene exactamente dos categorías codificadas, por ejemplo 0 y 1.",
        "Se desea explicar o predecir la probabilidad de un evento.",
        "Se requiere controlar simultáneamente uno o varios predictores.",
        "La cantidad de eventos y no eventos es suficiente para la complejidad del modelo."
    ],
    hipotesis: {
        h0: "En la prueba global, todos los coeficientes de los predictores son iguales a cero; en cada prueba Wald, el coeficiente evaluado es igual a cero y su odds ratio es igual a 1.",
        h1: "Al menos un coeficiente difiere de cero; para el predictor evaluado, su odds ratio difiere de 1."
    },
    supuestos: [
        "Resultado correctamente codificado y definición explícita de la categoría considerada evento.",
        "Independencia entre observaciones o estructura de dependencia modelada adecuadamente.",
        "Relación aproximadamente lineal entre cada predictor cuantitativo y el logit del evento.",
        "Ausencia de multicolinealidad severa.",
        "Ausencia de separación completa o cuasicompleta.",
        "Tamaño muestral y número de eventos suficientes para estimar los parámetros.",
        "Revisión de observaciones influyentes, discriminación y calibración."
    ],
    estadistico:
        "La prueba de razón de verosimilitudes compara el modelo con un modelo nulo. Las pruebas Wald evalúan coeficientes individuales. La curva ROC y el AUC resumen discriminación, mientras que la calibración compara probabilidades estimadas y frecuencias observadas.",
    efecto:
        "Odds ratios ajustadas con intervalos de confianza, pseudo-R², AUC, sensibilidad, especificidad, F1, medidas de calibración y criterios de información como AIC y BIC.",
    reporteAPA:
        "Informe χ² de razón de verosimilitudes, gl, p, pseudo-R², coeficientes B, errores estándar, z, p, OR e IC 95 %. Describa AUC, umbral, sensibilidad, especificidad, calibración y diagnósticos de influencia.",
    posthoc: [],
    alternativas: [
        "Regresión logística penalizada cuando existe separación o alta dimensionalidad.",
        "Regresión logística multinomial cuando el resultado tiene más de dos categorías nominales.",
        "Regresión ordinal cuando las categorías poseen un orden natural.",
        "Modelos mixtos o GEE cuando las observaciones están agrupadas o repetidas."
    ],
    erroresFrecuentes: [
        "Interpretar una odds ratio como riesgo relativo sin considerar la frecuencia del evento.",
        "No indicar cuál categoría fue codificada como 1.",
        "Usar la exactitud como única medida con clases desequilibradas.",
        "Elegir automáticamente el umbral 0.50 sin considerar el costo de falsos positivos y falsos negativos.",
        "Confundir discriminación elevada con buena calibración.",
        "Interpretar significación estadística como causalidad o utilidad clínica/educativa automática."
    ],
    ejemplo:
        "Se estima la probabilidad de aprobar una asignatura a partir de horas de estudio, asistencia y rendimiento previo.",
    referencias: [
        "Hosmer, D. W., Lemeshow, S., & Sturdivant, R. X. (2013). Applied Logistic Regression.",
        "Harrell, F. E. (2015). Regression Modeling Strategies.",
        "Steyerberg, E. W. (2019). Clinical Prediction Models."
    ]
};

export const fichasMetodologicasRegresion = {
    "regresion-lineal-simple": {
        ...fichaRegresionLineal,
        nombre: "Regresión lineal simple"
    },
    "regresion-lineal-multiple": {
        ...fichaRegresionLineal,
        nombre: "Regresión lineal múltiple"
    },
    "regresion-logistica-binaria-simple": {
        ...fichaRegresionLogistica,
        nombre: "Regresión logística binaria simple"
    },
    "regresion-logistica-binaria-multiple": {
        ...fichaRegresionLogistica,
        nombre: "Regresión logística binaria múltiple"
    }
};
