const fichaRegresionLinealSimple = {
    nombre: "Regresión lineal simple",
    objetivo:
        "Explicar o predecir el valor medio de una variable cuantitativa mediante un único predictor.",
    definicion:
        "Modelo que representa el valor medio de una variable dependiente cuantitativa como una función lineal de un solo predictor, estimada habitualmente mediante mínimos cuadrados ordinarios.",
    cuandoUsar: [
        "La variable dependiente es cuantitativa continua.",
        "Existe un único predictor definido por la pregunta de investigación.",
        "Se desea estimar el cambio medio de la respuesta por unidad del predictor o realizar predicciones.",
        "La relación observada es aproximadamente lineal en el rango estudiado."
    ],
    cuandoNoUsar: [
        "Cuando deben controlarse simultáneamente otros predictores o factores de confusión.",
        "Cuando la variable dependiente es dicotómica, ordinal o un conteo.",
        "Cuando la relación es claramente no lineal y una recta carece de justificación.",
        "Cuando las observaciones son dependientes y esa estructura no está modelada."
    ],
    hipotesis: {
        h0: "La pendiente poblacional es igual a cero; el predictor no presenta una asociación lineal con la media de la respuesta.",
        h1: "La pendiente poblacional difiere de cero."
    },
    supuestos: [
        "Independencia entre las observaciones.",
        "Relación aproximadamente lineal entre la respuesta y el predictor.",
        "Varianza residual aproximadamente constante.",
        "Residuos aproximadamente normales para la inferencia clásica, especialmente en muestras pequeñas.",
        "Ausencia de observaciones excesivamente influyentes sin explicación sustantiva."
    ],
    estadistico:
        "La prueba t evalúa la pendiente y es equivalente a la prueba F global con un predictor. R² resume la proporción de variabilidad de la respuesta asociada linealmente con ese predictor.",
    efecto:
        "Pendiente no estandarizada con intervalo de confianza, coeficiente estandarizado o r cuando sea pertinente, R² y medidas de error como RMSE o MAE.",
    reporteAPA:
        "Informe F(1, gl2), p, R², pendiente B, error estándar, t, p e IC 95 %. Describa el rango del predictor y los diagnósticos de linealidad, residuos e influencia.",
    posthoc: [],
    alternativas: [
        "Correlación de Pearson cuando el objetivo se limita a cuantificar una asociación lineal simétrica.",
        "Términos polinómicos, splines u otros modelos no lineales cuando la forma lo justifique.",
        "Regresión robusta cuando persisten heterocedasticidad u observaciones influyentes.",
        "Regresión lineal múltiple cuando deban incorporarse dos o más predictores."
    ],
    erroresFrecuentes: [
        "Interpretar la pendiente observacional como un efecto causal.",
        "Extrapolar fuera del rango observado del predictor.",
        "Omitir el diagrama de dispersión y el análisis de residuos.",
        "Confundir una pendiente significativa con una capacidad predictiva elevada.",
        "Introducir varios predictores y continuar denominando simple al modelo."
    ],
    ejemplo:
        "Se modela la calificación final únicamente a partir de las horas semanales de estudio.",
    referencias: [
        "Kutner, M. H., Nachtsheim, C. J., Neter, J., & Li, W. (2005). Applied Linear Statistical Models.",
        "James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."
    ]
};

const fichaRegresionLinealMultiple = {
    nombre: "Regresión lineal múltiple",
    objetivo:
        "Explicar o predecir una variable cuantitativa mediante dos o más predictores y estimar asociaciones parciales manteniendo constantes los demás.",
    definicion:
        "Modelo que representa el valor medio de una variable dependiente cuantitativa como combinación lineal de uno o varios predictores, estimando los coeficientes habitualmente mediante mínimos cuadrados ordinarios.",
    cuandoUsar: [
        "La variable dependiente es cuantitativa continua.",
        "Se desea explicar cambios medios, controlar covariables o realizar predicciones.",
        "La relación entre la respuesta y cada predictor cuantitativo es aproximadamente lineal, manteniendo constantes los demás.",
        "El diseño y la teoría justifican la inclusión de los predictores."
    ],
    cuandoNoUsar: [
        "Cuando la variable dependiente no es cuantitativa continua.",
        "Cuando el tamaño muestral no permite estimar de forma estable la cantidad de parámetros propuesta.",
        "Cuando los predictores son redundantes o existe multicolinealidad que impide interpretar los efectos parciales.",
        "Cuando la dependencia, no linealidad o heterocedasticidad esenciales no pueden modelarse adecuadamente."
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

const fichaRegresionLogisticaSimple = {
    nombre: "Regresión logística binaria simple",
    objetivo:
        "Modelar la probabilidad de un resultado dicotómico mediante un único predictor.",
    definicion:
        "Modelo lineal generalizado que relaciona un predictor con la probabilidad de un evento dicotómico mediante la función logit.",
    cuandoUsar: [
        "La variable dependiente contiene exactamente dos categorías y se define explícitamente el evento.",
        "Existe un único predictor establecido por la pregunta de investigación.",
        "Se desea estimar una odds ratio no ajustada o predecir la probabilidad del evento.",
        "La cantidad de eventos y no eventos permite estimar la pendiente."
    ],
    cuandoNoUsar: [
        "Cuando deben controlarse factores de confusión o varios predictores simultáneamente.",
        "Cuando la respuesta tiene más de dos categorías.",
        "Cuando existe separación completa sin utilizar un método penalizado apropiado.",
        "Cuando las observaciones agrupadas o repetidas se tratan como independientes."
    ],
    hipotesis: {
        h0: "El coeficiente del predictor es igual a cero y su odds ratio es igual a 1.",
        h1: "El coeficiente del predictor difiere de cero y su odds ratio difiere de 1."
    },
    supuestos: [
        "Resultado correctamente codificado y categoría del evento claramente definida.",
        "Independencia entre observaciones.",
        "Relación aproximadamente lineal entre un predictor cuantitativo y el logit del evento.",
        "Ausencia de separación completa o cuasicompleta.",
        "Cantidad suficiente de eventos y no eventos.",
        "Revisión de observaciones influyentes, discriminación y calibración."
    ],
    estadistico:
        "La prueba de razón de verosimilitudes compara el modelo de un predictor con el modelo de solo intercepto; la prueba Wald evalúa su coeficiente. La curva ROC y el AUC resumen discriminación.",
    efecto:
        "Odds ratio no ajustada con intervalo de confianza, coeficiente B, pseudo-R², AUC y medidas de calibración.",
    reporteAPA:
        "Informe χ² de razón de verosimilitudes, gl, p, coeficiente B, error estándar, z, p, OR e IC 95 %. Identifique el evento y describa discriminación, calibración e influencia.",
    posthoc: [],
    alternativas: [
        "Regresión logística binaria múltiple cuando deban controlarse otros predictores.",
        "Regresión logística penalizada cuando existe separación o pocos eventos.",
        "Regresión logística multinomial u ordinal cuando el resultado no es dicotómico.",
        "Modelos mixtos o GEE cuando las observaciones están agrupadas o repetidas."
    ],
    erroresFrecuentes: [
        "No indicar cuál categoría fue codificada como evento.",
        "Interpretar la odds ratio como riesgo relativo.",
        "Presentar una odds ratio simple como si estuviera ajustada por covariables.",
        "Usar solamente exactitud para evaluar la predicción.",
        "Confundir discriminación elevada con calibración adecuada."
    ],
    ejemplo:
        "Se estima la probabilidad de aprobar una asignatura únicamente a partir de las horas semanales de estudio.",
    referencias: [
        "Hosmer, D. W., Lemeshow, S., & Sturdivant, R. X. (2013). Applied Logistic Regression.",
        "Harrell, F. E. (2015). Regression Modeling Strategies."
    ]
};

const fichaRegresionLogisticaMultiple = {
    nombre: "Regresión logística binaria múltiple",
    objetivo:
        "Modelar la probabilidad de un resultado dicotómico mediante varios predictores y estimar odds ratios ajustadas.",
    definicion:
        "Modelo lineal generalizado que relaciona uno o varios predictores con la probabilidad de un evento dicotómico mediante la función logit y estima razones de probabilidades ajustadas.",
    cuandoUsar: [
        "La variable dependiente contiene exactamente dos categorías codificadas, por ejemplo 0 y 1.",
        "Se desea explicar o predecir la probabilidad de un evento.",
        "Se requiere controlar simultáneamente uno o varios predictores.",
        "La cantidad de eventos y no eventos es suficiente para la complejidad del modelo."
    ],
    cuandoNoUsar: [
        "Cuando la respuesta no posee exactamente dos categorías.",
        "Cuando la cantidad de eventos es insuficiente para la complejidad del modelo.",
        "Cuando existe separación completa sin regularización o corrección apropiada.",
        "Cuando la dependencia entre observaciones no está modelada."
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

const fichaPoisson = {
    nombre: "Regresión de Poisson",
    definicion:
        "Modelo lineal generalizado con enlace logarítmico para una variable de conteo, cuya media condicional se modela como función exponencial de los predictores y de una exposición opcional.",
    cuandoUsar: [
        "La variable dependiente contiene enteros no negativos.",
        "Los conteos representan eventos observados durante una exposición, tiempo o población en riesgo.",
        "La media y la varianza condicional son aproximadamente compatibles con Poisson.",
        "Se desean estimar razones de tasas de incidencia ajustadas."
    ],
    hipotesis: {
        h0: "En la prueba global, todos los coeficientes de los predictores son iguales a cero; individualmente, la IRR del predictor es igual a 1.",
        h1: "Al menos un coeficiente difiere de cero; individualmente, la IRR del predictor difiere de 1."
    },
    supuestos: [
        "Conteos enteros no negativos y definición adecuada de la unidad de observación.",
        "Independencia entre observaciones o estructura de dependencia modelada.",
        "Exposición positiva correctamente incorporada mediante un offset cuando difiere entre observaciones.",
        "Relación aproximadamente lineal entre predictores cuantitativos y el logaritmo de la tasa esperada.",
        "Ausencia de multicolinealidad severa.",
        "Dispersión condicional compatible con Poisson y ausencia de exceso grave de ceros no modelado.",
        "Revisión de residuos, leverage y observaciones influyentes."
    ],
    estadistico:
        "La prueba de razón de verosimilitudes compara el modelo con un modelo nulo. Las pruebas Wald evalúan coeficientes individuales. La dispersión de Pearson, la deviance, AIC y BIC ayudan a revisar el ajuste.",
    efecto:
        "Razones de tasas de incidencia —IRR— con intervalos de confianza, pseudo-R², deviance, AIC, BIC y medidas de error o calibración del conteo.",
    reporteAPA:
        "Informe χ² de razón de verosimilitudes, gl, p, coeficientes B, errores estándar, z, p, IRR e IC 95 %. Indique la exposición, el índice de dispersión, AIC, BIC y los diagnósticos de residuos e influencia.",
    posthoc: [],
    alternativas: [
        "Regresión binomial negativa cuando existe sobredispersión.",
        "Modelo inflado en ceros cuando hay más ceros de los esperados por el proceso de conteo.",
        "Modelo hurdle cuando el proceso que genera ceros difiere del proceso que genera conteos positivos.",
        "Modelos mixtos o GEE para conteos agrupados o repetidos."
    ],
    erroresFrecuentes: [
        "Aplicar Poisson sin comprobar la sobredispersión.",
        "Omitir la exposición cuando los períodos o poblaciones en riesgo son diferentes.",
        "Interpretar la IRR como diferencia absoluta de conteos.",
        "Confundir asociación con causalidad.",
        "Ignorar exceso de ceros y observaciones influyentes.",
        "Comparar tasas sin mantener constante la unidad de exposición."
    ],
    ejemplo:
        "Se modela el número de ausencias estudiantiles según carga académica, distancia al centro y meses de seguimiento.",
    referencias: [
        "Cameron, A. C., & Trivedi, P. K. (2013). Regression Analysis of Count Data.",
        "Hilbe, J. M. (2014). Modeling Count Data.",
        "Agresti, A. (2015). Foundations of Linear and Generalized Linear Models."
    ]
};

const fichaBinomialNegativa = {
    ...fichaPoisson,
    nombre: "Regresión binomial negativa",
    definicion:
        "Modelo lineal generalizado para conteos que amplía Poisson mediante un parámetro de dispersión, permitiendo que la varianza condicional sea mayor que la media.",
    cuandoUsar: [
        "La variable dependiente contiene enteros no negativos.",
        "Existe sobredispersión persistente bajo Poisson.",
        "La varianza aumenta más rápidamente que la media condicional.",
        "Se desean estimar razones de tasas ajustadas sin subestimar los errores estándar."
    ],
    supuestos: [
        "Conteos enteros no negativos.",
        "Independencia entre observaciones o dependencia modelada adecuadamente.",
        "Exposición positiva correctamente incorporada cuando corresponde.",
        "Relación aproximadamente lineal entre predictores cuantitativos y el logaritmo de la tasa esperada.",
        "Ausencia de multicolinealidad severa.",
        "Forma de sobredispersión compatible con la parametrización binomial negativa utilizada.",
        "Revisión de exceso de ceros, residuos e influencia."
    ],
    estadistico:
        "La razón de verosimilitudes evalúa el modelo global. El parámetro de dispersión cuantifica la heterogeneidad adicional. AIC y BIC permiten comparar con Poisson cuando ambos modelos se ajustan a los mismos datos.",
    efecto:
        "IRR ajustadas con intervalos de confianza, parámetro de dispersión, pseudo-R², deviance, AIC y BIC.",
    reporteAPA:
        "Informe χ² global, gl, p, parámetro de dispersión, coeficientes B, errores estándar, z, p, IRR e IC 95 %. Compare AIC con Poisson y describa la exposición, los residuos y las observaciones influyentes.",
    alternativas: [
        "Poisson cuando la dispersión es compatible con la igualdad media-varianza.",
        "Modelos inflados en ceros o hurdle cuando existe un proceso específico que genera ceros.",
        "Modelos mixtos binomiales negativos para datos agrupados o longitudinales.",
        "Modelos de conteo con truncamiento cuando ciertos valores no pueden observarse por diseño."
    ],
    erroresFrecuentes: [
        "Seleccionarla únicamente porque produce un AIC ligeramente menor, sin evidencia de sobredispersión.",
        "Interpretar el parámetro de dispersión como tamaño del efecto sustantivo.",
        "Omitir la exposición o usar una unidad de exposición inconsistente.",
        "Ignorar exceso de ceros, truncamiento o dependencia entre observaciones.",
        "Interpretar IRR como efectos causales sin un diseño apropiado."
    ],
    ejemplo:
        "Se modela el número de errores en evaluaciones digitales cuando la variabilidad entre estudiantes supera claramente la esperada bajo Poisson.",
    referencias: [
        "Cameron, A. C., & Trivedi, P. K. (2013). Regression Analysis of Count Data.",
        "Hilbe, J. M. (2011). Negative Binomial Regression.",
        "Agresti, A. (2015). Foundations of Linear and Generalized Linear Models."
    ]
};

export const fichasMetodologicasRegresion = {
    "regresion-lineal-simple": fichaRegresionLinealSimple,
    "regresion-lineal-multiple": fichaRegresionLinealMultiple,
    "regresion-logistica-binaria-simple": fichaRegresionLogisticaSimple,
    "regresion-logistica-binaria-multiple": fichaRegresionLogisticaMultiple,
    "regresion-poisson": fichaPoisson,
    "regresion-binomial-negativa": fichaBinomialNegativa
};
