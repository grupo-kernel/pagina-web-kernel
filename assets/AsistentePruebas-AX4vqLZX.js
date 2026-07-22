import{f as K,a as U,b as Q,c as B,d as Y,e as J,g as X,h as Z,o as _}from"./fichasMetodologicasTamanoMuestra-Bzm_BI0V.js";const aa=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:["si","monotonica"]},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function ea(e,a){return Array.isArray(a)?a.includes(e):e===a}function oa(e,a){return Object.entries(a).every(([o,i])=>ea(e[o],i))}function ia(e){return aa.filter(o=>oa(e,o.condiciones)).sort((o,i)=>Object.keys(i.condiciones).length-Object.keys(o.condiciones).length)[0]||null}function R(e){const a=ia(e);return a?{id:a.id,...a.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}function I(e){return K[e]||U[e]||Q[e]||B[e]||Y[e]||J[e]||X[e]||Z[e]||_(e)}function fa(){const e=document.createElement("section");e.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const a={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};e.innerHTML=`
        <div id="asistente-pruebas">
            ${q()}
        </div>
    `;const o=e.querySelector("#asistente-pruebas"),i=r=>{o.innerHTML=r,window.scrollTo({top:0,behavior:"auto"})},u=()=>{Object.assign(a,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},c=()=>{a.pantalla="resultado-comparacion",i(sa(a))},t=()=>{a.pantalla="resultado-relacion",i(ta(a))},v=()=>{a.pantalla="resultado-asociacion",i(ca(a))},g=()=>{a.pantalla="resultado-prediccion",i(da(a))},k=r=>{if(a.pantalla==="objetivo"){if(Object.assign(a,{objetivo:r,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),r==="comparar"){a.pantalla="tipo-variable",i(O());return}if(r==="relacionar"){a.pantalla="tipo-relacion",i(y());return}if(r==="asociar"){a.pantalla="tipo-asociacion",i(L());return}if(r==="predecir"){a.pantalla="tipo-resultado",i(T());return}i(ba(r)),a.pantalla="desarrollo";return}if(a.pantalla==="tipo-variable"){Object.assign(a,{tipoVariable:r,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),a.pantalla="numero-grupos",i(x());return}if(a.pantalla==="numero-grupos"){if(Object.assign(a,{numeroGrupos:r,relacion:"",normalidad:"",varianzas:""}),r==="uno"){if(a.relacion="una-muestra",a.tipoVariable==="categorica"){c();return}a.pantalla="normalidad",i(h());return}a.pantalla="relacion-muestras",i(V(a));return}if(a.pantalla==="relacion-muestras"){if(Object.assign(a,{relacion:r,normalidad:"",varianzas:""}),a.tipoVariable==="categorica"){c();return}a.pantalla="normalidad",i(h());return}if(a.pantalla==="normalidad"){if(a.normalidad=r,a.varianzas="",a.tipoVariable==="cuantitativa"&&r==="si"&&a.relacion==="independientes"&&a.numeroGrupos!=="uno"){a.pantalla="varianzas",i(G());return}c();return}if(a.pantalla==="varianzas"){a.varianzas=r,c();return}if(a.pantalla==="tipo-relacion"){if(Object.assign(a,{tipoRelacion:r,normalidad:"",linealidad:"",empates:""}),r==="dicotomica-cuantitativa"){t();return}if(r==="ordinales"){a.pantalla="empates",i(H());return}a.pantalla="normalidad-relacion",i(M());return}if(a.pantalla==="normalidad-relacion"){a.normalidad=r,a.linealidad="",a.pantalla="linealidad",i(W());return}if(a.pantalla==="linealidad"){a.linealidad=r,t();return}if(a.pantalla==="empates"){a.empates=r,t();return}if(a.pantalla==="tipo-asociacion"){Object.assign(a,{tipoAsociacion:r,frecuenciasEsperadas:""}),a.pantalla="frecuencias-esperadas",i(D());return}if(a.pantalla==="frecuencias-esperadas"){a.frecuenciasEsperadas=r,v();return}if(a.pantalla==="tipo-resultado"){Object.assign(a,{tipoResultado:r,numeroPredictores:"",sobredispersion:""}),a.pantalla="numero-predictores",i(A());return}if(a.pantalla==="numero-predictores"){if(a.numeroPredictores=r,a.sobredispersion="",a.tipoResultado==="conteo"){a.pantalla="sobredispersion",i(F());return}g();return}if(a.pantalla==="sobredispersion"){a.sobredispersion=r,g();return}},z=()=>{const l={"tipo-variable":()=>["objetivo",m()],"numero-grupos":()=>["tipo-variable",O()],"relacion-muestras":()=>["numero-grupos",x()],normalidad:()=>a.numeroGrupos==="uno"?["numero-grupos",x()]:["relacion-muestras",V(a)],varianzas:()=>["normalidad",h()],"tipo-relacion":()=>["objetivo",m()],"normalidad-relacion":()=>["tipo-relacion",y()],linealidad:()=>["normalidad-relacion",M()],empates:()=>["tipo-relacion",y()],"tipo-asociacion":()=>["objetivo",m()],"tipo-resultado":()=>["objetivo",m()],"numero-predictores":()=>["tipo-resultado",T()],sobredispersion:()=>["numero-predictores",A()],"resultado-prediccion":()=>a.tipoResultado==="conteo"?["sobredispersion",F()]:["numero-predictores",A()],"frecuencias-esperadas":()=>["tipo-asociacion",L()],"resultado-asociacion":()=>["frecuencias-esperadas",D()],"resultado-comparacion":()=>a.varianzas?["varianzas",G()]:a.tipoVariable==="categorica"?a.numeroGrupos==="uno"?["numero-grupos",x()]:["relacion-muestras",V(a)]:["normalidad",h()],"resultado-relacion":()=>a.tipoRelacion==="ordinales"?["empates",H()]:a.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",y()]:a.linealidad?["linealidad",W()]:["normalidad-relacion",M()]}[a.pantalla];if(!l){a.pantalla="objetivo",i(m());return}const[d,f]=l();a.pantalla=d,i(f)};return o.addEventListener("click",r=>{const l=r.target.closest("[data-action], [data-value]");if(!l)return;const d=l.dataset.action,f=l.dataset.value;if(f){k(f);return}if(d==="ejecutar-prueba"){const p=l.dataset.prueba;if(!p)return;const E={student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},pearson:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},spearman:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},kendall:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"punto-biserial":{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"chi-cuadrado-independencia-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-exacta-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"chi-cuadrado-independencia-rxc":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-freeman-halton":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"}}[p];if(!E)return;sessionStorage.setItem(E.almacenamiento,p),window.location.hash=`/${E.ruta}`;return}if(d==="ver-ficha"){const p=l.dataset.fichaId,$=I(p);if(!$)return;a.pantallaAnterior=a.pantalla,a.fichaActual=p,a.pantalla="ficha-metodologica",i(ua($,p));return}if(d==="volver-resultado"){if(a.objetivo==="comparar"){c();return}if(a.objetivo==="relacionar"){t();return}if(a.objetivo==="asociar"){v();return}a.objetivo==="predecir"&&g();return}d==="iniciar"&&(a.pantalla="objetivo",i(m())),d==="volver"&&z(),(d==="volver-inicio"||d==="reiniciar")&&(u(),i(q())),d==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),e}function q(){return`
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
                    ${j("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${j("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${j("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${j("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
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
            ${S("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${S("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${S("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function m(){return s({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function O(){return s({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function x(){return s({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function V(e){const a=e.numeroGrupos==="dos"?"los dos grupos":"los grupos";return s({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${a} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function h(){return s({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function G(){return s({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function y(){return s({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function L(){return s({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function T(){return s({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function A(){return s({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function F(){return s({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function D(){return s({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function M(){return s({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function W(){return s({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function H(){return s({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function s({paso:e,total:a,tituloPaso:o,pregunta:i,descripcion:u,opciones:c,accionVolver:t="volver"}){const v=Math.round(e/a*100);return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${e} de ${a}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${o}
                        </h1>
                    </div>

                    <span class="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Progreso: ${v} %
                    </span>
                </div>

                <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <div
                        class="h-full bg-sky-400 rounded-full"
                        style="width: ${v}%"
                    ></div>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                    ${i}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${u}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${c.map(([g,k,z])=>va(g,k,z)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${t}"
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
    `}function ra(e){const{tipoVariable:a,numeroGrupos:o,relacion:i,normalidad:u,varianzas:c}=e;if(a==="categorica")return o==="uno"?n("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):i==="relacionadas"?o==="dos"?n("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):n("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):n("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const t=a==="ordinal"||u==="no"||u==="no-se";return o==="uno"?t?n("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):n("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):o==="dos"?i==="relacionadas"?t?n("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):n("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):t?n("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):c==="si"?n("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):n("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):i==="relacionadas"?t?n("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):n("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):t?n("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):c==="si"?n("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):n("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function na(e){return e.tipoRelacion==="dicotomica-cuantitativa"?n("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):e.tipoRelacion==="ordinales"?e.empates==="si"||e.empates==="no-se"?n("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):n("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="no-monotonica"?{id:"relacion-no-monotonica",nombre:"No resumir la relación con un único coeficiente de correlación",razon:"Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.",categoria:"Relación entre variables",tipo:"Exploración gráfica y modelización no lineal",efecto:"Reporte gráfico, R² de un modelo adecuado y medidas de ajuste.",reporte:"Presente el diagrama de dispersión, describa la forma observada y ajuste un modelo coherente con esa estructura. Informe los parámetros del modelo, sus intervalos de confianza, R² o medidas de ajuste y el análisis de residuos. No utilice Pearson o Spearman como resumen principal."}:e.linealidad==="no-se"?n("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada."):e.normalidad!=="si"?n("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="si"?n("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):e.linealidad==="monotonica"?n("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):n("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function n(e,a,o){return{nombre:e,razon:a,efecto:o}}function C(e){return{id:e.id,nombre:e.prueba,razon:e.descripcion,categoria:e.categoria,tipo:e.tipo,efecto:e.efecto}}function sa(e){const a=R(e),o=a.id==="sin-regla"?ra(e):C(a);return w(o)}function ta(e){const a=R(e),o=a.id==="sin-regla"?na(e):C(a);return w(o)}function ca(e){const a=R(e),o=a.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:C(a);return w(o)}function da(e){const a=R(e),o=a.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:C(a);return w(o)}function la(e){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis","anova-medidas-repetidas":"anova-medidas-repetidas",friedman:"friedman",pearson:"pearson","spearman-cuantitativas":"spearman","spearman-ordinales":"spearman",kendall:"kendall","punto-biserial":"punto-biserial","chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-2x2","fisher-exacta-2x2":"fisher-exacta-2x2","chi-cuadrado-independencia-rxc":"chi-cuadrado-independencia-rxc","fisher-freeman-halton":"fisher-freeman-halton"}[e]||""}function w(e){const a=e.id&&I(e.id),o=la(e.id);return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Recomendación metodológica
                </p>

                <h1 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h1>

                ${e.categoria||e.tipo?`
                            <div class="flex flex-wrap gap-3 mt-5">
                                ${e.categoria?`
                                            <span class="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                                                Categoría: ${e.categoria}
                                            </span>
                                        `:""}

                                ${e.tipo?`
                                            <span class="inline-flex items-center rounded-full bg-sky-300 text-slate-950 px-4 py-2 text-sm font-black">
                                                Tipo: ${e.tipo}
                                            </span>
                                        `:""}
                            </div>
                        `:""}
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${N("¿Por qué?",e.razon)}

                    ${N("Tamaño del efecto",e.efecto)}

                    ${N("Reporte recomendado",e.reporte||"Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
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

                ${a?`
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
                                        data-ficha-id="${e.id}"
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
    `}function ua(e,a){return`
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
                        ${e.nombre}
                    </h1>

                    <p class="text-slate-300 mt-4 text-sm font-semibold">
                        Código interno: ${a}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${P("¿Qué es?",e.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${b("¿Cuándo utilizarla?",e.cuandoUsar)}

                    ${b("Supuestos",e.supuestos)}
                </div>

                ${pa(e.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${P("Estadístico de prueba",e.estadistico)}

                    ${P("Tamaño del efecto",e.efecto)}
                </div>

                ${ma(e.reporteAPA)}

                ${e.posthoc?.length?b("Análisis posteriores",e.posthoc):""}

                ${e.alternativas?.length?b("Pruebas y procedimientos alternativos",e.alternativas):""}

                ${e.erroresFrecuentes?.length?b("Errores frecuentes",e.erroresFrecuentes,"advertencia"):""}

                ${P("Ejemplo de investigación",e.ejemplo)}

                ${e.referencias?.length?b("Referencias recomendadas",e.referencias,"referencias"):""}

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
    `}function P(e,a){return a?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `:""}function b(e,a=[],o="normal"){if(!a.length)return"";const i=o==="advertencia"?"border-amber-200 bg-amber-50":o==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",u=o==="advertencia"?"text-amber-950":o==="referencias"?"text-sky-950":"text-slate-900",c=o==="advertencia"?"text-amber-900":o==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${i} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${u} mb-4">
                ${e}
            </h2>

            <ul class="space-y-3">
                ${a.map(t=>`
                            <li class="flex items-start gap-3 ${c} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${t}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function pa(e){return e?`
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
                        ${e.h0}
                    </p>
                </div>

                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis alternativa, H₁
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${e.h1}
                    </p>
                </div>
            </div>
        </article>
    `:""}function ma(e){return e?`
        <article class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm mt-6">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Plantilla de redacción
            </p>

            <h2 class="text-xl font-black text-emerald-950 mb-4">
                Reporte según normas APA
            </h2>

            <div class="rounded-xl border border-emerald-200 bg-white p-5">
                <p class="font-mono text-slate-800 leading-relaxed">
                    ${e}
                </p>
            </div>

            <p class="text-sm text-emerald-900 mt-4 leading-relaxed">
                Sustituya los marcadores por los resultados reales obtenidos en su análisis.
            </p>
        </article>
    `:""}function ba(e){return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">
                Próxima ampliación
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                ${{predecir:"Predicción y modelización",instrumento:"Evaluación de instrumentos",otro:"Otros análisis"}[e]||"Módulo metodológico"}
            </h1>

            <p class="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Esta rama se incorporará en la siguiente fase. Ya están activas la comparación de grupos, la relación entre variables y la asociación categórica.
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
    `}function N(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `}function j(e,a,o){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${e}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${a}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${o}
                </p>
            </div>
        </article>
    `}function S(e,a){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `}function va(e,a,o){return`
        <button
            type="button"
            data-value="${e}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${a}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${o}
            </span>
        </button>
    `}export{fa as AsistentePruebas};
