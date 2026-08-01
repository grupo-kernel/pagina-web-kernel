import{f as Q,a as B,b as J,c as Y,d as X,e as Z,g as ee,h as ae,i as oe,o as ie,j as re}from"./metadatosFichasMetodologicas-BbzfSE5K.js";const ne=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:["si","monotonica"]},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}],x=Object.freeze({DEFINITIVA:"definitiva",CONDICIONADA:"condicionada",INFORMACION_INSUFICIENTE:"informacion-insuficiente",CASO_NO_CUBIERTO:"caso-no-cubierto"}),c=a=>Object.freeze({estadoDecision:x.DEFINITIVA,estimando:"",razones:[],supuestos:[],advertencias:[],alternativa:null,efectoEstructurado:null,...a}),se=Object.freeze({"t-student-una-muestra":c({estimando:"media respecto a un valor de referencia",razones:["La variable de resultado es cuantitativa.","Se analiza una sola muestra frente a un valor teórico o de referencia.","La inferencia se formula sobre la media poblacional."],supuestos:["Independencia de las observaciones.","Distribución aproximadamente normal o tamaño muestral suficiente para la inferencia sobre la media.","Ausencia de valores atípicos altamente influyentes."],efectoEstructurado:{principal:"Diferencia entre la media observada y el valor de referencia",estandarizado:"d de Cohen para una muestra",intervaloConfianza:!0}}),"wilcoxon-una-muestra":c({estimando:"localización o distribución respecto a un valor de referencia",razones:["Se analiza una sola muestra.","La variable es ordinal o la inferencia sobre la media no resulta adecuada.","La decisión se basa en rangos con signo."],supuestos:["Observaciones independientes.","Variable al menos ordinal.","Distribución aproximadamente simétrica de las diferencias cuando se interpreta como contraste de localización."],advertencias:["No debe describirse automáticamente como una prueba de medianas sin verificar las condiciones de simetría e interpretación."],efectoEstructurado:{principal:"Diferencia de localización basada en rangos",estandarizado:"Correlación biserial por rangos",intervaloConfianza:!0}}),"t-student-independientes":c({estadoDecision:x.CONDICIONADA,estimando:"diferencia de medias entre dos grupos independientes",razones:["La variable de resultado es cuantitativa.","Se comparan exactamente dos grupos independientes.","El objetivo inferencial es comparar medias.","Se ha indicado homogeneidad de varianzas."],supuestos:["Independencia de las observaciones.","Normalidad aproximada de los residuos o tamaños muestrales que sostengan la inferencia.","Homogeneidad de varianzas entre los grupos.","Ausencia de valores atípicos altamente influyentes."],advertencias:["La prueba t de Welch suele ser preferible cuando la igualdad de varianzas es incierta."],alternativa:{id:"t-welch-independientes",condicion:"Utilizarla cuando las varianzas sean desiguales, dudosas o los tamaños de los grupos estén desbalanceados."},efectoEstructurado:{principal:"Diferencia de medias",estandarizado:"g de Hedges",intervaloConfianza:!0}}),"t-welch-independientes":c({estimando:"diferencia de medias entre dos grupos independientes",razones:["La variable de resultado es cuantitativa.","Se comparan dos grupos independientes.","El objetivo inferencial es comparar medias.","La prueba no exige igualdad de varianzas."],supuestos:["Independencia de las observaciones.","Normalidad aproximada de los residuos o tamaños muestrales suficientes.","Ausencia de valores atípicos altamente influyentes."],alternativa:{id:"mann-whitney",condicion:"Considerarla cuando la variable sea ordinal o el objetivo sea comparar distribuciones o rangos, no simplemente como sustituto automático por falta de normalidad."},efectoEstructurado:{principal:"Diferencia de medias",estandarizado:"g de Hedges",intervaloConfianza:!0}}),"mann-whitney":c({estimando:"diferencia de distribución, probabilidad de superioridad o rangos entre dos grupos independientes",razones:["Se comparan dos grupos independientes.","La variable es ordinal o el objetivo científico se expresa mediante rangos o distribuciones.","La inferencia no depende de un modelo normal para las medias."],supuestos:["Independencia entre grupos.","Variable al menos ordinal.","Formas de distribución comparables si se desea interpretar el resultado como diferencia de localización."],advertencias:["No debe presentarse automáticamente como una comparación de medianas.","La falta de normalidad, por sí sola, no determina que esta prueba sea superior a un método robusto para medias."],alternativa:{id:"t-welch-independientes",condicion:"Preferirla cuando el estimando de interés sea la diferencia de medias y los datos permitan una inferencia robusta sobre ese parámetro."},efectoEstructurado:{principal:"Probabilidad de superioridad o diferencia basada en rangos",estandarizado:"Delta de Cliff o correlación biserial por rangos",intervaloConfianza:!0}}),"t-student-relacionadas":c({estimando:"media de las diferencias entre dos mediciones relacionadas",razones:["Las dos mediciones pertenecen a los mismos participantes o a pares vinculados.","La variable de resultado es cuantitativa.","La inferencia se formula sobre la media de las diferencias."],supuestos:["Independencia entre pares o participantes.","Normalidad aproximada de las diferencias, no necesariamente de cada medición por separado.","Ausencia de diferencias atípicas altamente influyentes."],efectoEstructurado:{principal:"Media de las diferencias",estandarizado:"d de Cohen para datos pareados",intervaloConfianza:!0}}),"wilcoxon-relacionadas":c({estimando:"cambio de localización o distribución entre dos mediciones relacionadas",razones:["Las observaciones están relacionadas.","La variable es ordinal o la inferencia sobre la media de las diferencias no resulta adecuada.","La comparación se basa en rangos con signo."],supuestos:["Independencia entre pares.","Variable al menos ordinal.","Simetría aproximada de las diferencias cuando se interpreta como cambio de localización."],advertencias:["No equivale automáticamente a una prueba de medianas pareadas."],efectoEstructurado:{principal:"Cambio basado en rangos",estandarizado:"Correlación biserial por rangos",intervaloConfianza:!0}}),"anova-un-factor":c({estadoDecision:x.CONDICIONADA,estimando:"diferencias de medias entre tres o más grupos independientes",razones:["La variable de resultado es cuantitativa.","Se comparan tres o más grupos independientes.","El objetivo inferencial es comparar medias.","Se ha indicado homogeneidad de varianzas."],supuestos:["Independencia de las observaciones.","Normalidad aproximada de los residuos.","Homogeneidad de varianzas.","Ausencia de valores atípicos altamente influyentes."],advertencias:["Después de un resultado global significativo se requieren comparaciones múltiples planificadas o post hoc."],alternativa:{id:"anova-welch",condicion:"Utilizarla cuando las varianzas sean desiguales o exista desbalance entre tamaños muestrales."},efectoEstructurado:{principal:"Diferencias de medias",estandarizado:"Omega cuadrado",intervaloConfianza:!0}}),"anova-welch":c({estimando:"diferencias de medias entre tres o más grupos independientes",razones:["La variable de resultado es cuantitativa.","Se comparan tres o más grupos independientes.","El objetivo inferencial es comparar medias.","La prueba admite heterogeneidad de varianzas."],supuestos:["Independencia de las observaciones.","Normalidad aproximada de los residuos o tamaños muestrales suficientes.","Ausencia de valores atípicos altamente influyentes."],advertencias:["Las comparaciones posteriores deben ser compatibles con varianzas desiguales, por ejemplo Games–Howell."],alternativa:{id:"kruskal-wallis",condicion:"Considerarla cuando la variable sea ordinal o el objetivo se exprese mediante rangos o distribuciones."},efectoEstructurado:{principal:"Diferencias de medias",estandarizado:"Omega cuadrado ajustado",intervaloConfianza:!0}}),"kruskal-wallis":c({estimando:"diferencias de distribución o rangos entre tres o más grupos independientes",razones:["Se comparan tres o más grupos independientes.","La variable es ordinal o el objetivo se expresa mediante rangos o distribuciones.","La inferencia no depende de un modelo normal para las medias."],supuestos:["Independencia entre grupos.","Variable al menos ordinal.","Formas de distribución comparables si se interpreta como diferencia de localización."],advertencias:["Un resultado global significativo requiere comparaciones posteriores con control del error por multiplicidad.","No debe interpretarse automáticamente como una comparación de medianas."],alternativa:{id:"anova-welch",condicion:"Preferirla cuando el estimando de interés sean las medias y el diseño permita una inferencia robusta sobre ellas."},efectoEstructurado:{principal:"Diferencia global basada en rangos",estandarizado:"Épsilon cuadrado",intervaloConfianza:!0}}),"anova-medidas-repetidas":c({estadoDecision:x.CONDICIONADA,estimando:"diferencias de medias entre tres o más mediciones relacionadas",razones:["Las mediciones corresponden a los mismos participantes o unidades relacionadas.","La variable de resultado es cuantitativa.","El objetivo inferencial es comparar medias a través de ocasiones o condiciones."],supuestos:["Independencia entre participantes.","Normalidad aproximada de los residuos.","Esfericidad cuando existen más de dos niveles, o aplicación de una corrección apropiada.","Ausencia de valores atípicos altamente influyentes."],advertencias:["Los datos faltantes, intervalos desiguales o estructuras complejas pueden requerir modelos mixtos."],alternativa:{id:"modelo-mixto-lineal",condicion:"Considerarlo cuando existan datos incompletos, tiempos irregulares, covariables o estructuras de correlación más complejas."},efectoEstructurado:{principal:"Diferencias de medias entre ocasiones o condiciones",estandarizado:"Eta cuadrado parcial u omega cuadrado generalizado",intervaloConfianza:!0}}),friedman:c({estimando:"diferencias de rangos entre tres o más mediciones relacionadas",razones:["Las mediciones están relacionadas.","La variable es ordinal o el objetivo se expresa mediante rangos.","Se comparan tres o más condiciones u ocasiones."],supuestos:["Independencia entre participantes.","Variable al menos ordinal.","Mismas unidades evaluadas en todas las condiciones consideradas."],advertencias:["Un resultado global significativo requiere comparaciones posteriores pareadas con ajuste por multiplicidad."],alternativa:{id:"modelo-mixto-ordinal",condicion:"Considerarlo cuando existan datos faltantes, covariables o una estructura longitudinal más compleja."},efectoEstructurado:{principal:"Diferencia global basada en rangos",estandarizado:"W de Kendall",intervaloConfianza:!0}})});function te(a){return se[a]||null}function de(a,e){return Array.isArray(e)?e.includes(a):a===e}function ce(a,e){return Object.entries(e).every(([o,d])=>de(a[o],d))}function I(a){return Object.keys(a.condiciones).length}function le(a){return ne.filter(e=>ce(a,e.condiciones)).sort((e,o)=>I(o)-I(e))}function ue(a){const e=Object.entries(a||{}).filter(([,o])=>o!==""&&o!==null&&o!==void 0).map(([o])=>o);return{id:"sin-regla",prueba:"Revisión metodológica requerida",pruebaPrincipal:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada.",estadoDecision:e.length?x.CASO_NO_CUBIERTO:x.INFORMACION_INSUFICIENTE,estimando:"",razones:[],supuestos:[],advertencias:["No se debe forzar una recomendación cuando la información metodológica es insuficiente o el diseño aún no está cubierto."],alternativa:null,efectoEstructurado:null,diagnosticoMotor:{reglasCompatibles:0,respuestasPresentes:e}}}function pe(a,e){const o=te(a.id),d={id:a.id,...a.resultado};return{...d,pruebaPrincipal:d.prueba,estadoDecision:o?.estadoDecision||x.DEFINITIVA,estimando:o?.estimando||"",razones:[...o?.razones||[]],supuestos:[...o?.supuestos||[]],advertencias:[...o?.advertencias||[]],alternativa:o?.alternativa?{...o.alternativa}:null,efectoEstructurado:o?.efectoEstructurado?{...o.efectoEstructurado}:null,diagnosticoMotor:{reglasCompatibles:e.length,reglaSeleccionada:a.id,especificidad:I(a),alternativasCompatibles:e.slice(1).map(i=>i.id)}}}function k(a){const e=le(a),o=e[0];return o?pe(o,e):ue(a)}function K(a){const e=Q[a]||B[a]||J[a]||Y[a]||X[a]||Z[a]||ee[a]||ae[a]||oe[a]||ie(a);if(e)return{...e,...re(a)||{}}}const me=Object.freeze({"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis","anova-medidas-repetidas":"anova-medidas-repetidas",friedman:"friedman",pearson:"pearson","spearman-cuantitativas":"spearman","spearman-ordinales":"spearman",kendall:"kendall","punto-biserial":"punto-biserial","chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-2x2","fisher-exacta-2x2":"fisher-exacta-2x2","chi-cuadrado-independencia-rxc":"chi-cuadrado-independencia-rxc","fisher-freeman-halton":"fisher-freeman-halton","chi-cuadrado-independencia-comparacion":"chi-cuadrado-independencia-rxc","regresion-lineal-simple":"regresion-lineal-simple","regresion-lineal-multiple":"regresion-lineal-multiple","regresion-logistica-binaria-simple":"regresion-logistica-binaria-simple","regresion-logistica-binaria-multiple":"regresion-logistica-binaria-multiple","regresion-poisson":"regresion-poisson","regresion-binomial-negativa":"regresion-binomial-negativa","evaluar-sobredispersion":"evaluar-sobredispersion"}),be=Object.freeze({student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},pearson:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},spearman:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},kendall:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"punto-biserial":{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"chi-cuadrado-independencia-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-exacta-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"chi-cuadrado-independencia-rxc":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-freeman-halton":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"regresion-lineal-simple":{almacenamiento:"kernel-tipo-modelo-regresion",valor:"simple",ruta:"calculadoraRegresion"},"regresion-lineal-multiple":{almacenamiento:"kernel-tipo-modelo-regresion",valor:"multiple",ruta:"calculadoraRegresion"},"regresion-logistica-binaria-simple":{almacenamiento:null,ruta:"calculadoraRegresionLogistica"},"regresion-logistica-binaria-multiple":{almacenamiento:null,ruta:"calculadoraRegresionLogistica"},"regresion-poisson":{almacenamiento:"kernel-modelo-conteo",valor:"poisson",ruta:"calculadoraRegresionConteo"},"regresion-binomial-negativa":{almacenamiento:"kernel-modelo-conteo",valor:"negativa",ruta:"calculadoraRegresionConteo"},"evaluar-sobredispersion":{almacenamiento:null,ruta:"calculadoraRegresionConteo"}});function Ae(){const a=document.createElement("section");a.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const e={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};a.innerHTML=`
        <div id="asistente-pruebas">
            ${L()}
        </div>
    `;const o=a.querySelector("#asistente-pruebas");o.setAttribute("aria-live","polite"),o.setAttribute("aria-atomic","false");const d=()=>{const r=o.querySelector("h1");r&&(r.setAttribute("tabindex","-1"),r.focus({preventScroll:!0}))},i=r=>{o.innerHTML=r,window.scrollTo({top:0,behavior:"auto"}),d()},m=()=>{Object.assign(e,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},s=()=>{e.pantalla="resultado-comparacion",i(fe(e))},g=()=>{e.pantalla="resultado-relacion",i(xe(e))},C=()=>{e.pantalla="resultado-asociacion",i(he(e))},h=()=>{e.pantalla="resultado-prediccion",i(ye(e))},N=r=>{if(e.pantalla==="objetivo"){if(Object.assign(e,{objetivo:r,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),r==="comparar"){e.pantalla="tipo-variable",i(D());return}if(r==="relacionar"){e.pantalla="tipo-relacion",i(R());return}if(r==="asociar"){e.pantalla="tipo-asociacion",i(T());return}if(r==="predecir"){e.pantalla="tipo-resultado",i(F());return}if(r==="instrumento"){e.pantalla="tipo-instrumento",i(Re());return}i(Pe(r)),e.pantalla="desarrollo";return}if(e.pantalla==="tipo-variable"){Object.assign(e,{tipoVariable:r,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),e.pantalla="numero-grupos",i(j());return}if(e.pantalla==="numero-grupos"){if(Object.assign(e,{numeroGrupos:r,relacion:"",normalidad:"",varianzas:""}),r==="uno"){if(e.relacion="una-muestra",e.tipoVariable==="categorica"){s();return}e.pantalla="normalidad",i(w());return}e.pantalla="relacion-muestras",i(S(e));return}if(e.pantalla==="relacion-muestras"){if(Object.assign(e,{relacion:r,normalidad:"",varianzas:""}),e.tipoVariable==="categorica"){s();return}e.pantalla="normalidad",i(w());return}if(e.pantalla==="normalidad"){if(e.normalidad=r,e.varianzas="",e.tipoVariable==="cuantitativa"&&r==="si"&&e.relacion==="independientes"&&e.numeroGrupos!=="uno"){e.pantalla="varianzas",i(q());return}s();return}if(e.pantalla==="varianzas"){e.varianzas=r,s();return}if(e.pantalla==="tipo-relacion"){if(Object.assign(e,{tipoRelacion:r,normalidad:"",linealidad:"",empates:""}),r==="dicotomica-cuantitativa"){g();return}if(r==="ordinales"){e.pantalla="empates",i(W());return}e.pantalla="normalidad-relacion",i(O());return}if(e.pantalla==="normalidad-relacion"){e.normalidad=r,e.linealidad="",e.pantalla="linealidad",i(H());return}if(e.pantalla==="linealidad"){e.linealidad=r,g();return}if(e.pantalla==="empates"){e.empates=r,g();return}if(e.pantalla==="tipo-asociacion"){Object.assign(e,{tipoAsociacion:r,frecuenciasEsperadas:""}),e.pantalla="frecuencias-esperadas",i(U());return}if(e.pantalla==="frecuencias-esperadas"){e.frecuenciasEsperadas=r,C();return}if(e.pantalla==="tipo-resultado"){Object.assign(e,{tipoResultado:r,numeroPredictores:"",sobredispersion:""}),e.pantalla="numero-predictores",i($());return}if(e.pantalla==="numero-predictores"){if(e.numeroPredictores=r,e.sobredispersion="",e.tipoResultado==="conteo"){e.pantalla="sobredispersion",i(G());return}h();return}if(e.pantalla==="sobredispersion"){e.sobredispersion=r,h();return}},_=()=>{const u={"tipo-variable":()=>["objetivo",f()],"numero-grupos":()=>["tipo-variable",D()],"relacion-muestras":()=>["numero-grupos",j()],normalidad:()=>e.numeroGrupos==="uno"?["numero-grupos",j()]:["relacion-muestras",S(e)],varianzas:()=>["normalidad",w()],"tipo-relacion":()=>["objetivo",f()],"normalidad-relacion":()=>["tipo-relacion",R()],linealidad:()=>["normalidad-relacion",O()],empates:()=>["tipo-relacion",R()],"tipo-asociacion":()=>["objetivo",f()],"tipo-resultado":()=>["objetivo",f()],"tipo-instrumento":()=>["objetivo",f()],"numero-predictores":()=>["tipo-resultado",F()],sobredispersion:()=>["numero-predictores",$()],"resultado-prediccion":()=>e.tipoResultado==="conteo"?["sobredispersion",G()]:["numero-predictores",$()],"frecuencias-esperadas":()=>["tipo-asociacion",T()],"resultado-asociacion":()=>["frecuencias-esperadas",U()],"resultado-comparacion":()=>e.varianzas?["varianzas",q()]:e.tipoVariable==="categorica"?e.numeroGrupos==="uno"?["numero-grupos",j()]:["relacion-muestras",S(e)]:["normalidad",w()],"resultado-relacion":()=>e.tipoRelacion==="ordinales"?["empates",W()]:e.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",R()]:e.linealidad?["linealidad",H()]:["normalidad-relacion",O()]}[e.pantalla];if(!u){e.pantalla="objetivo",i(f());return}const[l,z]=u();e.pantalla=l,i(z)};return o.addEventListener("click",r=>{const u=r.target.closest("[data-action], [data-value]");if(!u)return;const l=u.dataset.action,z=u.dataset.value;if(z){N(z);return}if(l==="ejecutar-prueba"){const p=u.dataset.prueba;if(!p)return;const b=be[p];if(!b)return;b.almacenamiento&&sessionStorage.setItem(b.almacenamiento,b.valor||p),window.location.hash=`/${b.ruta}`;return}if(l==="abrir-ruta"){const p=u.dataset.ruta;p&&(window.location.hash=`/${p}`);return}if(l==="ver-ficha"){const p=u.dataset.fichaId,b=K(p);if(!b)return;e.pantallaAnterior=e.pantalla,e.fichaActual=p,e.pantalla="ficha-metodologica",i(ze(b,p));return}if(l==="volver-resultado"){if(e.objetivo==="comparar"){s();return}if(e.objetivo==="relacionar"){g();return}if(e.objetivo==="asociar"){C();return}e.objetivo==="predecir"&&h();return}l==="iniciar"&&(e.pantalla="objetivo",i(f())),l==="volver"&&_(),(l==="volver-inicio"||l==="reiniciar")&&(m(),i(L())),l==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),a}function L(){return`
        <section class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-12 md:px-12 md:py-16 shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-bold hover:text-white transition-colors mb-8"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-4">
                    Asistente metodológico inteligente
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6">
                    ¿Qué prueba estadística debo utilizar?
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Responda algunas preguntas sobre el objetivo, las variables y el diseño de su investigación. El sistema le orientará hacia la prueba estadística más adecuada.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-4xl">
                    ${P("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${P("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${P("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${P("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
                </div>

                <button
                    type="button"
                    data-action="iniciar"
                    class="mt-10 inline-flex items-center justify-center bg-white text-blue-700 font-black text-lg rounded-xl px-8 py-4 shadow-lg hover:bg-sky-50 transition-colors"
                >
                    Iniciar asistente
                    <span class="ml-3" aria-hidden="true">→</span>
                </button>
            </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            ${M("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${M("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${M("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function f(){return t({paso:1,total:null,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function D(){return t({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function j(){return t({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function S(a){const e=a.numeroGrupos==="dos"?"los dos grupos":"los grupos";return t({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${e} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function w(){return t({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function q(){return t({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function R(){return t({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function T(){return t({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function F(){return t({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function $(){return t({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function G(){return t({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function U(){return t({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function O(){return t({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function H(){return t({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function W(){return t({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function t({paso:a,total:e,tituloPaso:o,pregunta:d,descripcion:i,opciones:m,accionVolver:s="volver"}){const g=e?Math.round(a/e*100):null;return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            ${e?`Paso ${a} de ${e}`:"Paso inicial"}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${o}
                        </h1>
                    </div>

                    ${e?`<span class="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Progreso: ${g} %</span>`:""}
                </div>

                ${e?`
                        <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden" aria-hidden="true">
                            <div
                                class="h-full bg-sky-400 rounded-full"
                                style="width: ${g}%"
                            ></div>
                        </div>
                    `:""}
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                    ${d}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${i}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${m.map(([C,h,N])=>ke(C,h,N)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${s}"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Volver
                    </button>

                    <p class="text-sm text-slate-500 font-semibold">
                        Seleccione una opción para continuar.
                    </p>
                </div>
            </div>
        </section>
    `}function ve(a){const{tipoVariable:e,numeroGrupos:o,relacion:d,normalidad:i,varianzas:m}=a;if(e==="categorica")return o==="uno"?n("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):d==="relacionadas"?o==="dos"?n("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):n("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):n("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const s=e==="ordinal"||i==="no"||i==="no-se";return o==="uno"?s?n("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):n("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):o==="dos"?d==="relacionadas"?s?n("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):n("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):s?n("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):m==="si"?n("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):n("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):d==="relacionadas"?s?n("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):n("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):s?n("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):m==="si"?n("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):n("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function ge(a){return a.tipoRelacion==="dicotomica-cuantitativa"?n("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):a.tipoRelacion==="ordinales"?a.empates==="si"||a.empates==="no-se"?n("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):n("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):a.linealidad==="no-monotonica"?{id:"relacion-no-monotonica",nombre:"No resumir la relación con un único coeficiente de correlación",razon:"Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.",categoria:"Relación entre variables",tipo:"Exploración gráfica y modelización no lineal",efecto:"Reporte gráfico, R² de un modelo adecuado y medidas de ajuste.",reporte:"Presente el diagrama de dispersión, describa la forma observada y ajuste un modelo coherente con esa estructura. Informe los parámetros del modelo, sus intervalos de confianza, R² o medidas de ajuste y el análisis de residuos. No utilice Pearson o Spearman como resumen principal."}:a.linealidad==="no-se"?n("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada."):a.normalidad!=="si"?n("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):a.linealidad==="si"?n("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):a.linealidad==="monotonica"?n("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):n("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function n(a,e,o){return{nombre:a,razon:e,efecto:o}}function E(a){return{id:a.id,nombre:a.prueba,razon:a.descripcion,categoria:a.categoria,tipo:a.tipo,efecto:a.efecto}}function fe(a){const e=k(a),o=e.id==="sin-regla"?ve(a):E(e);return A(o)}function xe(a){const e=k(a),o=e.id==="sin-regla"?ge(a):E(e);return A(o)}function he(a){const e=k(a),o=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:E(e);return A(o)}function ye(a){const e=k(a),o=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:E(e);return A(o)}function Ce(a){return me[a]||""}function A(a){const e=a.id&&K(a.id),o=Ce(a.id);return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Recomendación metodológica
                </p>

                <h1 class="text-3xl md:text-4xl font-black">
                    ${a.nombre}
                </h1>

                ${a.categoria||a.tipo?`
                            <div class="flex flex-wrap gap-3 mt-5">
                                ${a.categoria?`
                                            <span class="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                                                Categoría: ${a.categoria}
                                            </span>
                                        `:""}

                                ${a.tipo?`
                                            <span class="inline-flex items-center rounded-full bg-sky-300 text-slate-950 px-4 py-2 text-sm font-black">
                                                Tipo: ${a.tipo}
                                            </span>
                                        `:""}
                            </div>
                        `:""}
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${V("¿Por qué?",a.razon)}

                    ${V(e?.etiquetaEfecto||"Tamaño del efecto",a.efecto)}

                    ${V("Reporte recomendado",a.reporte||"Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
                </div>

                <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h2 class="font-black text-amber-900 mb-2">
                        Advertencia metodológica
                    </h2>

                    <p class="text-amber-900 leading-relaxed">
                        Esta recomendación orienta la selección inicial. Antes del análisis definitivo deben revisarse el diseño muestral, los valores atípicos, el tamaño de la muestra, los supuestos específicos y la calidad de la medición.
                    </p>
                </div>

                ${o?`
                            <div class="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                    <div>
                                        <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                                            Herramienta de análisis
                                        </p>

                                        <h2 class="text-xl font-black text-slate-900 mb-2">
                                            Ejecute esta prueba con sus propios datos
                                        </h2>

                                        <p class="text-slate-600 leading-relaxed">
                                            Introduzca sus datos y obtenga el estadístico, el valor p, los descriptivos, el tamaño del efecto y, cuando corresponda, las comparaciones posteriores.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        data-action="ejecutar-prueba"
                                        data-prueba="${o}"
                                        class="shrink-0 inline-flex items-center justify-center bg-emerald-700 text-white font-black rounded-xl px-6 py-4 hover:bg-emerald-800 transition-colors shadow-lg"
                                    >
                                        Ejecutar esta prueba
                                        <span
                                            class="ml-2"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        `:""}

                ${e?`
                            <div class="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                    <div>
                                        <p class="uppercase tracking-widest text-blue-700 text-xs font-black mb-2">
                                            Biblioteca metodológica
                                        </p>

                                        <h2 class="text-xl font-black text-slate-900 mb-2">
                                            Consulte la ficha completa de esta prueba
                                        </h2>

                                        <p class="text-slate-600 leading-relaxed">
                                            Revise sus hipótesis, supuestos, tamaño del efecto, reporte APA, alternativas, errores frecuentes y referencias.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        data-action="ver-ficha"
                                        data-ficha-id="${a.id}"
                                        class="shrink-0 inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-4 hover:bg-blue-800 transition-colors shadow-lg"
                                    >
                                        Ver ficha metodológica
                                        <span
                                            class="ml-2"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        `:""}

                <div class="flex flex-col sm:flex-row gap-3 mt-10">
                    <button
                        type="button"
                        data-action="volver"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Revisar respuesta
                    </button>

                    <button
                        type="button"
                        data-action="reiniciar"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors"
                    >
                        Iniciar de nuevo
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors"
                    >
                        Volver al laboratorio
                    </button>
                </div>
            </div>
        </section>
    `}function ze(a,e){return`
        <section class="rounded-3xl border border-blue-200 bg-white shadow-xl overflow-hidden">
            <header class="relative overflow-hidden bg-slate-950 text-white px-6 py-10 md:px-10 md:py-12">
                <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/20"></div>

                <div class="relative z-10">
                    <button
                        type="button"
                        data-action="volver-resultado"
                        class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                    >
                        ← Volver al resultado
                    </button>

                    <p class="uppercase tracking-[0.20em] text-sky-300 text-xs font-black mb-3">
                        Biblioteca metodológica
                    </p>

                    <h1 class="text-3xl md:text-5xl font-black leading-tight">
                        ${a.nombre}
                    </h1>

                    <p class="text-slate-300 mt-4 text-sm font-semibold">
                        Código interno: ${e}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${y("¿Qué es?",a.definicion)}

                ${y("Objetivo",a.objetivo)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${v("¿Cuándo utilizarla?",a.cuandoUsar)}

                    ${a.cuandoNoUsar?.length?v("¿Cuándo no utilizarla?",a.cuandoNoUsar,"advertencia"):v("Supuestos",a.supuestos)}
                </div>

                ${a.cuandoNoUsar?.length?v("Supuestos",a.supuestos):""}

                ${je(a.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${y("Estadístico de prueba",a.estadistico)}

                    ${y(a.etiquetaEfecto||"Tamaño del efecto",a.efecto)}
                </div>

                ${we(a.reporteAPA)}

                ${a.posthoc?.length?v("Análisis posteriores",a.posthoc):""}

                ${a.alternativas?.length?v("Pruebas y procedimientos alternativos",a.alternativas):""}

                ${a.erroresFrecuentes?.length?v("Errores frecuentes",a.erroresFrecuentes,"advertencia"):""}

                ${y("Ejemplo de investigación",a.ejemplo)}

                ${a.referencias?.length?v("Referencias recomendadas",a.referencias,"referencias"):""}

                <div class="flex flex-col sm:flex-row gap-3 mt-10 pt-8 border-t border-slate-200">
                    <button
                        type="button"
                        data-action="volver-resultado"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Volver al resultado
                    </button>

                    <button
                        type="button"
                        data-action="reiniciar"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors"
                    >
                        Iniciar otro análisis
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors"
                    >
                        Volver al laboratorio
                    </button>
                </div>
            </div>
        </section>
    `}function y(a,e){return e?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `:""}function v(a,e=[],o="normal"){if(!e.length)return"";const d=o==="advertencia"?"border-amber-200 bg-amber-50":o==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",i=o==="advertencia"?"text-amber-950":o==="referencias"?"text-sky-950":"text-slate-900",m=o==="advertencia"?"text-amber-900":o==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${d} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${i} mb-4">
                ${a}
            </h2>

            <ul class="space-y-3">
                ${e.map(s=>`
                            <li class="flex items-start gap-3 ${m} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${s}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function je(a){return a?`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-violet-950 mb-5">
                Hipótesis estadísticas
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis nula, H₀
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${a.h0}
                    </p>
                </div>

                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis alternativa, H₁
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${a.h1}
                    </p>
                </div>
            </div>
        </article>
    `:""}function we(a){return a?`
        <article class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm mt-6">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Plantilla de redacción
            </p>

            <h2 class="text-xl font-black text-emerald-950 mb-4">
                Reporte según normas APA
            </h2>

            <div class="rounded-xl border border-emerald-200 bg-white p-5">
                <p class="font-mono text-slate-800 leading-relaxed">
                    ${a}
                </p>
            </div>

            <p class="text-sm text-emerald-900 mt-4 leading-relaxed">
                Sustituya los marcadores por los resultados reales obtenidos en su análisis.
            </p>
        </article>
    `:""}function Re(){return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">
                    Paso 2 de 2 · Evaluación de instrumentos
                </p>
                <h1 class="text-3xl md:text-4xl font-black">
                    ¿Qué tipo de instrumento desea analizar?
                </h1>
                <p class="mt-4 max-w-3xl text-slate-200 leading-relaxed">
                    Seleccione la herramienta según la estructura de las respuestas y el propósito de la evaluación.
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 px-6 py-8 md:px-10 md:py-10">
                <article class="rounded-3xl border border-amber-200 bg-amber-50 p-6 flex flex-col">
                    <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                        Escala o cuestionario
                    </p>
                    <h2 class="text-2xl font-black text-slate-900 mb-3">
                        Fiabilidad de cuestionarios
                    </h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Analice alfa de Cronbach, omega, KR-20, correlación ítem–total, recodificación e intervalos bootstrap.
                    </p>
                    <button
                        type="button"
                        data-action="abrir-ruta"
                        data-ruta="calculadoraFiabilidadCuestionarios"
                        class="mt-auto rounded-xl bg-amber-600 px-6 py-4 text-white font-black hover:bg-amber-700 transition-colors"
                    >
                        Analizar cuestionario →
                    </button>
                </article>

                <article class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Prueba de conocimientos
                    </p>
                    <h2 class="text-2xl font-black text-slate-900 mb-3">
                        Evaluación educativa
                    </h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Examine dificultad, discriminación, punto-biserial, KR-20 y funcionamiento de distractores.
                    </p>
                    <button
                        type="button"
                        data-action="abrir-ruta"
                        data-ruta="calculadoraEvaluacionEducativa"
                        class="mt-auto rounded-xl bg-emerald-700 px-6 py-4 text-white font-black hover:bg-emerald-800 transition-colors"
                    >
                        Analizar prueba →
                    </button>
                </article>

                <div class="md:col-span-2">
                    <button
                        type="button"
                        data-action="volver"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50"
                    >
                        ← Elegir otro objetivo
                    </button>
                </div>
            </div>
        </section>
    `}function Pe(a){return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">
                Próxima ampliación
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                ${{predecir:"Predicción y modelización",otro:"Otros análisis"}[a]||"Módulo metodológico"}
            </h1>

            <p class="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Esta rama se incorporará en una fase posterior. Ya están activas la comparación de grupos, la relación entre variables, la asociación categórica, la predicción y la evaluación de instrumentos.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    type="button"
                    data-action="volver"
                    class="border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50"
                >
                    ← Elegir otro objetivo
                </button>

                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800"
                >
                    Volver al laboratorio
                </button>
            </div>
        </section>
    `}function V(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function P(a,e,o){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${a}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${e}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${o}
                </p>
            </div>
        </article>
    `}function M(a,e){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function ke(a,e,o){return`
        <button
            type="button"
            data-value="${a}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${e}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${o}
            </span>
        </button>
    `}export{Ae as AsistentePruebas,be as DESTINOS_PRUEBAS_ASISTENTE,me as PRUEBAS_EJECUTABLES_ASISTENTE};
