export const fichasMetodologicasComplementarias = {
    "t-student-una-muestra": {
        nombre: "t de Student para una muestra",
        objetivo:
            "Contrastar si la media poblacional de una variable cuantitativa difiere de un valor de referencia especificado antes del análisis.",
        definicion:
            "Prueba paramétrica que compara la media observada en una muestra con un valor teórico, normativo o previamente establecido.",
        cuandoUsar: [
            "Se dispone de una sola muestra de observaciones independientes.",
            "La variable analizada es cuantitativa.",
            "El valor de referencia fue establecido antes de examinar los resultados.",
            "La distribución es aproximadamente normal o la media muestral es suficientemente estable."
        ],
        cuandoNoUsar: [
            "Cuando se comparan dos grupos o dos mediciones de las mismas personas.",
            "Cuando el valor de referencia fue elegido después de observar los datos.",
            "Cuando existen valores atípicos extremos o asimetría grave en una muestra pequeña."
        ],
        hipotesis: {
            h0: "La media poblacional es igual al valor de referencia.",
            h1: "La media poblacional difiere del valor de referencia."
        },
        supuestos: [
            "Observaciones independientes.",
            "Variable cuantitativa.",
            "Normalidad aproximada, especialmente en muestras pequeñas.",
            "Ausencia de valores atípicos extremos no explicados."
        ],
        estadistico:
            "El estadístico t divide la diferencia entre la media muestral y el valor de referencia por el error estándar de la media, con n − 1 grados de libertad.",
        efecto:
            "d de Cohen para una muestra, diferencia media con intervalo de confianza y, cuando sea pertinente, una diferencia estandarizada corregida.",
        reporteAPA:
            "t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d = valor.",
        posthoc: [],
        alternativas: [
            "Prueba de rangos con signo de Wilcoxon para una muestra cuando no resulte razonable la inferencia sobre la media bajo normalidad.",
            "Intervalo de confianza de la media cuando el objetivo principal sea estimar y no contrastar.",
            "Procedimientos robustos o bootstrap cuando existan asimetría o valores atípicos relevantes."
        ],
        erroresFrecuentes: [
            "Confundir el valor de referencia con la media de una segunda muestra.",
            "Interpretar la ausencia de significación como demostración de igualdad.",
            "Omitir la diferencia media y su intervalo de confianza.",
            "Ignorar valores atípicos que influyen fuertemente en la media."
        ],
        ejemplo:
            "Se contrasta si la puntuación media de razonamiento matemático de una cohorte difiere del valor normativo de 70 puntos.",
        referencias: [
            "Student. (1908). The probable error of a mean.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.",
            "Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."
        ]
    },

    "wilcoxon-una-muestra": {
        nombre: "Prueba de rangos con signo de Wilcoxon para una muestra",
        objetivo:
            "Contrastar la localización de una distribución respecto de un valor de referencia utilizando las magnitudes y los signos de las diferencias.",
        definicion:
            "Prueba no paramétrica basada en los rangos de las diferencias no nulas entre cada observación y un valor de referencia.",
        cuandoUsar: [
            "Se dispone de una sola muestra independiente.",
            "La variable es al menos ordinal o cuantitativa.",
            "No es razonable utilizar la t de una muestra.",
            "Las diferencias respecto del valor de referencia pueden ordenarse por magnitud."
        ],
        cuandoNoUsar: [
            "Cuando solo interesa comparar signos, sin asumir simetría de las diferencias.",
            "Cuando la muestra contiene únicamente categorías nominales.",
            "Cuando las observaciones no son independientes."
        ],
        hipotesis: {
            h0: "La distribución de las diferencias está centrada en cero; bajo simetría, la mediana coincide con el valor de referencia.",
            h1: "La distribución de las diferencias no está centrada en cero."
        },
        supuestos: [
            "Observaciones independientes.",
            "Variable al menos ordinal.",
            "Diferencias ordenables respecto del valor de referencia.",
            "Distribución aproximadamente simétrica si se interpreta como contraste de la mediana."
        ],
        estadistico:
            "Se ordenan las diferencias absolutas no nulas, se recuperan sus signos y se comparan las sumas de rangos positivos y negativos.",
        efecto:
            "Correlación biserial por rangos, r basado en el estadístico normalizado y estimación de Hodges–Lehmann cuando esté disponible.",
        reporteAPA:
            "W = valor, z = valor cuando corresponda, p = valor, estimación de localización = valor, r = valor.",
        posthoc: [],
        alternativas: [
            "t de Student para una muestra cuando la inferencia sobre la media y sus supuestos sean apropiados.",
            "Prueba de los signos cuando no sea razonable asumir simetría.",
            "Bootstrap para estimar un intervalo de confianza de una medida de localización."
        ],
        erroresFrecuentes: [
            "Afirmar que siempre contrasta la mediana sin revisar la simetría.",
            "Conservar diferencias iguales a cero como si aportaran rango.",
            "Informar únicamente el valor p.",
            "Confundirla con la versión para dos mediciones relacionadas."
        ],
        ejemplo:
            "Se evalúa si el nivel ordinal de dificultad percibida por un grupo difiere del punto central de una escala.",
        referencias: [
            "Wilcoxon, F. (1945). Individual comparisons by ranking methods.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.",
            "Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."
        ]
    },

    "correlacion-biserial": {
        nombre: "Correlación biserial",
        objetivo:
            "Estimar la relación entre una variable cuantitativa y una dicotomía artificial que representa la división de una variable continua subyacente.",
        definicion:
            "Coeficiente paramétrico que corrige la correlación punto-biserial cuando una variable continua subyacente fue dicotomizada mediante un punto de corte.",
        cuandoUsar: [
            "Una variable es cuantitativa.",
            "La segunda variable fue dicotomizada artificialmente desde una variable continua subyacente.",
            "La distribución continua subyacente puede modelarse razonablemente como normal.",
            "Se conoce la proporción de observaciones a cada lado del punto de corte."
        ],
        cuandoNoUsar: [
            "Cuando la dicotomía es genuina, caso en el que corresponde la correlación punto-biserial.",
            "Cuando no es plausible una variable continua subyacente aproximadamente normal.",
            "Cuando la dicotomización se realizó con varios puntos de corte."
        ],
        hipotesis: {
            h0: "La correlación biserial poblacional es igual a cero.",
            h1: "La correlación biserial poblacional difiere de cero."
        },
        supuestos: [
            "Observaciones independientes.",
            "Variable cuantitativa con variabilidad suficiente.",
            "Dicotomía obtenida mediante un punto de corte de una variable continua.",
            "Normalidad aproximada de la variable latente y relación lineal con la variable cuantitativa."
        ],
        estadistico:
            "Ajusta la diferencia estandarizada entre las medias de los dos grupos mediante las proporciones observadas y la altura de la distribución normal en el punto de corte.",
        efecto:
            "El coeficiente biserial expresa la dirección y magnitud estimada de la relación con la variable continua subyacente.",
        reporteAPA:
            "rb = valor, p = valor, IC 95 % [LI, LS], n = valor; describa el punto de corte y la variable continua original.",
        posthoc: [],
        alternativas: [
            "Correlación punto-biserial para una dicotomía genuina.",
            "Pearson con la variable continua original cuando esté disponible.",
            "Regresión lineal o logística según la dirección del objetivo analítico."
        ],
        erroresFrecuentes: [
            "Utilizarla con una dicotomía genuina.",
            "Omitir el punto de corte utilizado.",
            "Suponer una variable latente normal sin justificación.",
            "Interpretar la asociación como causalidad."
        ],
        ejemplo:
            "Se relaciona el rendimiento cuantitativo con una clasificación artificial de motivación baja o alta obtenida al dividir una escala continua.",
        referencias: [
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "bondad-ajuste-categorica": {
        nombre: "Prueba binomial o chi-cuadrado de bondad de ajuste",
        objetivo:
            "Contrastar si las frecuencias observadas de una variable categórica coinciden con proporciones teóricas especificadas previamente.",
        definicion:
            "Procedimiento para comparar una distribución categórica observada con una distribución esperada; utiliza una prueba binomial para dos categorías o chi-cuadrado para varias categorías.",
        cuandoUsar: [
            "Se analiza una única variable categórica.",
            "Las proporciones esperadas están definidas antes de examinar los datos.",
            "Cada observación pertenece a una sola categoría.",
            "Las observaciones son independientes."
        ],
        cuandoNoUsar: [
            "Cuando se estudia la relación entre dos variables categóricas.",
            "Cuando las categorías se solapan.",
            "Cuando las frecuencias esperadas son demasiado pequeñas para la aproximación chi-cuadrado."
        ],
        hipotesis: {
            h0: "Las proporciones poblacionales coinciden con la distribución teórica especificada.",
            h1: "Al menos una proporción poblacional difiere de la distribución teórica."
        },
        supuestos: [
            "Observaciones independientes.",
            "Categorías mutuamente excluyentes y exhaustivas.",
            "Frecuencias absolutas, no porcentajes aislados.",
            "Frecuencias esperadas adecuadas para la aproximación chi-cuadrado."
        ],
        estadistico:
            "La versión chi-cuadrado suma, sobre las categorías, el cociente entre la diferencia cuadrática observada-esperada y la frecuencia esperada. Para dos categorías puede utilizarse la distribución binomial exacta.",
        efecto:
            "w de Cohen, diferencias entre proporciones observadas y esperadas y residuos estandarizados por categoría.",
        reporteAPA:
            "χ²(gl, N = n) = valor, p = valor, w = valor; informe las frecuencias observadas y esperadas. Para dos categorías: prueba binomial exacta, p = valor.",
        posthoc: [
            "Examinar residuos ajustados por categoría.",
            "Corregir por comparaciones múltiples si se contrastan categorías individualmente."
        ],
        alternativas: [
            "Prueba binomial exacta para dos categorías.",
            "Métodos exactos o Monte Carlo cuando las frecuencias esperadas sean pequeñas.",
            "Modelos multinomiales cuando se incorporen predictores."
        ],
        erroresFrecuentes: [
            "Confundir bondad de ajuste con independencia.",
            "Estimar las proporciones esperadas a partir de los mismos datos sin ajustar los grados de libertad.",
            "Aplicar la prueba a porcentajes sin conocer el tamaño muestral.",
            "No identificar las categorías responsables de un resultado global."
        ],
        ejemplo:
            "Se contrasta si las preferencias por cuatro recursos didácticos siguen proporciones iguales.",
        referencias: [
            "Agresti, A. (2019). An Introduction to Categorical Data Analysis.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    mcnemar: {
        nombre: "Prueba de McNemar",
        objetivo:
            "Contrastar si cambia una respuesta dicotómica entre dos mediciones relacionadas o entre pares emparejados.",
        definicion:
            "Prueba para datos dicotómicos pareados que utiliza los pares discordantes para evaluar la igualdad de las proporciones marginales.",
        cuandoUsar: [
            "La respuesta tiene exactamente dos categorías.",
            "Se realizan dos mediciones sobre las mismas unidades o pares emparejados.",
            "El interés se centra en el cambio de proporción.",
            "Cada par es independiente de los demás."
        ],
        cuandoNoUsar: [
            "Cuando las dos muestras son independientes.",
            "Cuando existen tres o más mediciones relacionadas.",
            "Cuando la respuesta tiene más de dos categorías sin una extensión apropiada."
        ],
        hipotesis: {
            h0: "Las probabilidades de los dos tipos de cambio discordante son iguales.",
            h1: "Las probabilidades de los dos tipos de cambio discordante difieren."
        },
        supuestos: [
            "Respuesta dicotómica.",
            "Emparejamiento correcto entre las dos mediciones.",
            "Independencia entre pares.",
            "Uso de una versión exacta cuando el número de pares discordantes es pequeño."
        ],
        estadistico:
            "El estadístico compara los dos conteos discordantes de la tabla pareada 2 × 2; la inferencia puede ser exacta o asintótica.",
        efecto:
            "Odds ratio de pares discordantes, diferencia de proporciones pareadas e intervalo de confianza.",
        reporteAPA:
            "Prueba de McNemar, χ²(1) = valor, p = valor, OR pareada = valor, IC 95 % [LI, LS]; indique los pares discordantes.",
        posthoc: [],
        alternativas: [
            "Prueba exacta de McNemar cuando hay pocos pares discordantes.",
            "Prueba Q de Cochran para tres o más mediciones dicotómicas relacionadas.",
            "Regresión logística condicional o modelos mixtos para diseños más complejos."
        ],
        erroresFrecuentes: [
            "Aplicar chi-cuadrado de independencia a datos pareados.",
            "Analizar solo los porcentajes marginales y omitir los pares discordantes.",
            "Usar la aproximación asintótica con muy pocos cambios.",
            "Confundir ausencia de cambio global con acuerdo entre mediciones."
        ],
        ejemplo:
            "Se compara la proporción de estudiantes que resuelve correctamente un problema antes y después de una intervención.",
        referencias: [
            "Agresti, A. (2019). An Introduction to Categorical Data Analysis.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "q-cochran": {
        nombre: "Prueba Q de Cochran",
        objetivo:
            "Contrastar la igualdad de proporciones de una respuesta dicotómica en tres o más condiciones relacionadas.",
        definicion:
            "Extensión de la prueba de McNemar para comparar una respuesta binaria observada en tres o más tratamientos, momentos o condiciones sobre las mismas unidades.",
        cuandoUsar: [
            "La respuesta es dicotómica.",
            "Existen tres o más mediciones o condiciones relacionadas.",
            "Todas las unidades aportan una respuesta en cada condición.",
            "Las unidades son independientes entre sí."
        ],
        cuandoNoUsar: [
            "Cuando las condiciones corresponden a grupos independientes.",
            "Cuando la respuesta es ordinal o cuantitativa.",
            "Cuando hay solamente dos mediciones, caso en el que corresponde McNemar."
        ],
        hipotesis: {
            h0: "Las proporciones de respuesta positiva son iguales en todas las condiciones.",
            h1: "Al menos una condición presenta una proporción diferente."
        },
        supuestos: [
            "Respuesta binaria con codificación consistente.",
            "Mediciones relacionadas y diseño completo.",
            "Independencia entre unidades.",
            "Cantidad suficiente de información para la aproximación asintótica."
        ],
        estadistico:
            "Q compara la variación entre los totales de las condiciones con la variación disponible dentro de las unidades y se contrasta con una distribución chi-cuadrado de k − 1 grados de libertad.",
        efecto:
            "Diferencias de proporciones relacionadas, medidas de concordancia y comparaciones pareadas acompañadas de intervalos.",
        reporteAPA:
            "Q(gl) = valor, p = valor, N = valor; informe las proporciones por condición y los análisis posteriores corregidos.",
        posthoc: [
            "Comparaciones de McNemar por pares con corrección por multiplicidad.",
            "Intervalos de confianza para las diferencias de proporciones relacionadas."
        ],
        alternativas: [
            "McNemar para exactamente dos condiciones.",
            "Modelos logísticos mixtos o GEE para covariables, datos incompletos o estructuras longitudinales."
        ],
        erroresFrecuentes: [
            "Aplicarla a proporciones de grupos independientes.",
            "No realizar seguimiento después de un resultado global significativo.",
            "Usar comparaciones de McNemar sin corrección por multiplicidad.",
            "Ignorar datos faltantes que rompen el diseño completo."
        ],
        ejemplo:
            "Se compara la proporción de respuestas correctas de los mismos estudiantes bajo tres modalidades de presentación de un problema.",
        referencias: [
            "Agresti, A. (2019). An Introduction to Categorical Data Analysis.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "chi-cuadrado-independencia-comparacion": {
        nombre: "Chi-cuadrado para comparar distribuciones categóricas",
        objetivo:
            "Evaluar si la distribución de una variable categórica difiere entre dos o más grupos independientes.",
        definicion:
            "Aplicación de la prueba chi-cuadrado de independencia a una tabla formada por grupos independientes y categorías de respuesta.",
        cuandoUsar: [
            "Los grupos son independientes.",
            "La variable resultado es categórica.",
            "Los datos son frecuencias absolutas.",
            "Las frecuencias esperadas permiten la aproximación chi-cuadrado."
        ],
        cuandoNoUsar: [
            "Cuando las mediciones son repetidas o pareadas.",
            "Cuando existen frecuencias esperadas pequeñas sin utilizar una alternativa exacta.",
            "Cuando cada persona puede aparecer en más de una celda."
        ],
        hipotesis: {
            h0: "La distribución de categorías es la misma en todos los grupos.",
            h1: "La distribución de categorías difiere en al menos un grupo."
        },
        supuestos: [
            "Observaciones independientes.",
            "Categorías mutuamente excluyentes.",
            "Frecuencias absolutas.",
            "Frecuencias esperadas adecuadas."
        ],
        estadistico:
            "El estadístico chi-cuadrado compara las frecuencias observadas en cada combinación grupo-categoría con las esperadas bajo una distribución común.",
        efecto:
            "Phi para una tabla 2 × 2 y V de Cramer para tablas de mayor dimensión, acompañados de residuos ajustados.",
        reporteAPA:
            "χ²(gl, N = n) = valor, p = valor, V = valor; presente las frecuencias o porcentajes por grupo.",
        posthoc: [
            "Examinar residuos ajustados.",
            "Realizar comparaciones de proporciones con corrección por multiplicidad cuando sea necesario."
        ],
        alternativas: [
            "Prueba exacta de Fisher o Fisher–Freeman–Halton con frecuencias pequeñas.",
            "Regresión logística o multinomial cuando se deban controlar covariables."
        ],
        erroresFrecuentes: [
            "Tratar observaciones relacionadas como independientes.",
            "Interpretar asociación como causalidad.",
            "No informar V de Cramer o Phi.",
            "Comparar porcentajes sin considerar sus denominadores."
        ],
        ejemplo:
            "Se compara la distribución de niveles de desempeño entre tres modalidades independientes de enseñanza.",
        referencias: [
            "Agresti, A. (2019). An Introduction to Categorical Data Analysis.",
            "Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."
        ]
    },

    "evaluar-sobredispersion": {
        nombre: "Diagnóstico de sobredispersión en datos de conteo",
        objetivo:
            "Determinar si la variabilidad condicional excede la compatible con un modelo de Poisson antes de elegir el modelo de conteo.",
        definicion:
            "Evaluación diagnóstica que combina conocimiento del proceso generador, dispersión residual y comparación de modelos para decidir entre Poisson y alternativas como la binomial negativa.",
        cuandoUsar: [
            "La variable dependiente es un conteo no negativo.",
            "Aún no se conoce si Poisson describe adecuadamente la dispersión.",
            "Se dispone de un modelo de Poisson inicial con los predictores y la exposición pertinentes.",
            "Se desea justificar la selección del modelo de conteo."
        ],
        cuandoNoUsar: [
            "Cuando la variable no es un conteo.",
            "Cuando se compara únicamente la media y la varianza marginales sin considerar predictores ni exposición.",
            "Cuando el problema principal es exceso estructural de ceros, truncamiento o dependencia no modelada."
        ],
        hipotesis: {
            h0: "La dispersión condicional es compatible con el modelo de Poisson especificado.",
            h1: "Existe variabilidad adicional que el modelo de Poisson no explica adecuadamente."
        },
        supuestos: [
            "Conteos enteros no negativos.",
            "Exposición correctamente incorporada.",
            "Predictores y forma funcional razonablemente especificados.",
            "Independencia o estructura de dependencia modelada.",
            "Revisión conjunta de residuos, ceros y observaciones influyentes."
        ],
        estadistico:
            "Se examinan índices de dispersión basados en Pearson o deviance, residuos y comparación de ajuste entre Poisson y binomial negativa; ningún cociente aislado sustituye la revisión del modelo.",
        efecto:
            "Índice de dispersión, parámetro de dispersión, residuos, AIC, BIC y cambio en las estimaciones e intervalos de las IRR.",
        reporteAPA:
            "Informe el modelo de Poisson inicial, índice de dispersión, evidencia residual, comparación con la binomial negativa y justificación de la selección final.",
        posthoc: [],
        alternativas: [
            "Regresión binomial negativa cuando persista sobredispersión.",
            "Modelos inflados en ceros o hurdle cuando exista un proceso específico de ceros.",
            "Modelos mixtos o GEE cuando haya dependencia entre observaciones."
        ],
        erroresFrecuentes: [
            "Comparar solamente la media y la varianza marginales.",
            "Atribuir toda sobredispersión a una distribución incorrecta sin revisar predictores omitidos.",
            "Seleccionar por AIC sin comprobar la interpretación y los residuos.",
            "Ignorar exceso de ceros, exposición desigual o agrupamiento."
        ],
        ejemplo:
            "Antes de modelar el número de ausencias, se ajusta Poisson y se revisan la dispersión residual y el ajuste relativo de una binomial negativa.",
        referencias: [
            "Cameron, A. C., & Trivedi, P. K. (2013). Regression Analysis of Count Data.",
            "Hilbe, J. M. (2014). Modeling Count Data."
        ]
    }
};
