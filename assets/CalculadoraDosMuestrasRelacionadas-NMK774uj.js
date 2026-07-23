import{a as j}from"./estadisticaDosMuestrasRelacionadas-C0D8qKdR.js";import{p as L}from"./exportacionesCalculadoras-C-2g2EIK.js";import"./jstat-DiDocX-r.js";import"./index-D9akd3km.js";function F(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-comparacion"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de dos mediciones relacionadas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice datos antes-después, mediciones repetidas o pares emparejados mediante la t de Student para muestras relacionadas o la prueba de rangos con signo de Wilcoxon.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia por filas
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Resultados interpretados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Instrucciones
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Cómo organizar las parejas
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${f(1,"Pegue la primera medición en la columna izquierda y la segunda en la derecha.")}
                    ${f(2,"Cada fila debe corresponder al mismo participante, unidad o par emparejado.")}
                    ${f(3,"Las dos columnas deben contener exactamente la misma cantidad de observaciones.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Convención de la diferencia
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Se calcula diferencia = medición 1 − medición 2. Un valor positivo indica que la primera medición es mayor.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Diseño admitido
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta calculadora corresponde a dos mediciones relacionadas. No debe utilizarse para grupos independientes sin emparejamiento.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-muestras-relacionadas"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="student-pareada">
                                t de Student para muestras relacionadas
                            </option>
                            <option value="wilcoxon">
                                Rangos con signo de Wilcoxon
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${w("medicion1","Medición 1","contador-medicion-1",`18
20
17.5
19
21`)}
                    ${w("medicion2","Medición 2","contador-medicion-2",`16
18.5
16
17
19`)}
                </div>

                <div
                    id="mensaje-error-relacionadas"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-violet-700 text-white font-black rounded-xl px-7 py-4 hover:bg-violet-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-violet-300 text-violet-700 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>
                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-muestras-relacionadas"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-muestras-relacionadas"),n=e.querySelector("#mensaje-error-relacionadas"),o=e.querySelector("#resultados-muestras-relacionadas"),r=a.elements.medicion1,s=a.elements.medicion2,l=e.querySelector("#contador-medicion-1"),m=e.querySelector("#contador-medicion-2"),p=sessionStorage.getItem("kernel-prueba-dos-relacionadas");["student-pareada","wilcoxon"].includes(p)&&(a.elements.prueba.value=p),sessionStorage.removeItem("kernel-prueba-dos-relacionadas");const u=()=>{l.textContent=E(y(r.value)),m.textContent=E(y(s.value))};return r.addEventListener("input",u),s.addEventListener("input",u),a.addEventListener("submit",x=>{x.preventDefault(),v(n);try{const c=a.elements.prueba.value;if(!c)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const d=k(r.value,"La medición 1"),C=k(s.value,"La medición 2"),g=Number(a.elements.nivelConfianza.value),h={medicion1:d,medicion2:C,prueba:c,nivelConfianza:g},$=j(h);o.innerHTML=R($,g),o.classList.remove("hidden"),L({contenedor:o,nombre:"comparacion-mediciones-relacionadas",datos:{solicitud:h,resultado:$}}),o.scrollIntoView({behavior:"smooth",block:"start"})}catch(c){o.classList.add("hidden"),z(n,c instanceof Error?c.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",x=>{const c=x.target.closest("[data-action]");if(!c)return;const d=c.dataset.action;if(d==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(d==="cargar-ejemplo"){a.elements.prueba.value||(a.elements.prueba.value="student-pareada"),r.value=`18
20
17.5
19
21
16
22
18.5`,s.value=`16
18.5
16
17
19
15
20
17`,u(),v(n),o.classList.add("hidden");return}d==="limpiar"&&(a.reset(),r.value="",s.value="",u(),v(n),o.innerHTML="",o.classList.add("hidden"))}),e}function f(e,a){return`
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${e}
            </span>
            <p>${a}</p>
        </div>
    `}function w(e,a,n,o){return`
        <label class="block">
            <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                <span>${a}</span>
                <span
                    id="${n}"
                    class="text-xs font-bold text-slate-500"
                >
                    0 valores
                </span>
            </span>
            <textarea
                name="${e}"
                rows="13"
                placeholder="${o}"
                class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
            ></textarea>
        </label>
    `}function k(e,a){const n=e.trim();if(!n)throw new Error(`${a} no contiene datos.`);const o=n.split(/[\s;]+/).filter(Boolean),r=o.map(l=>Number(l.replace(",","."))),s=r.findIndex(l=>!Number.isFinite(l));if(s!==-1)throw new Error(`${a} contiene un valor no válido: "${o[s]}".`);if(r.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return r}function y(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function E(e){return e===1?"1 valor":`${e} valores`}function z(e,a){e.textContent=a,e.classList.remove("hidden")}function v(e){e.textContent="",e.classList.add("hidden")}function i(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function D(e){return Number.isFinite(e)?e<.001?"< 0.001":i(e,4):"—"}function R(e,a=.95){const n=1-a,o=e.valorP<n,r=n.toFixed(2),s=Math.round(a*100),l=e.id==="t-student-relacionadas"?e.diferenciaMedia:e.diferencias.mediana,m=N(l),p=o?`Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${r}, correspondiente a un nivel de confianza del ${s} %. ${m}`:`No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${r}, correspondiente a un nivel de confianza del ${s} %. ${m}`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${e.metodo||e.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${b(e.estadistico.simbolo,i(e.estadistico.valor),"Estadístico")}
                    ${b("p",D(e.valorP),"Valor bilateral")}
                    ${b("n",e.nParejas,"Parejas originales")}
                    ${b("Δ",i(l),e.id==="t-student-relacionadas"?"Diferencia media":"Diferencia mediana")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${M("Medición 1",e.medicion1)}
                    ${M("Medición 2",e.medicion2)}
                </div>

                ${S(e.diferencias)}
                ${I(e)}

                <article class="mt-6 rounded-2xl border ${o?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${p}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La diferencia se calculó como medición 1 − medición 2. La significación estadística debe interpretarse junto con el intervalo de confianza, el tamaño del efecto, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function N(e){return Number.isFinite(e)?e>0?"La dirección estimada favorece valores mayores en la medición 1.":e<0?"La dirección estimada favorece valores mayores en la medición 2.":"La diferencia central estimada es igual a cero.":""}function b(e,a,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function M(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${t("Media",i(a.media))}
                ${t("Mediana",i(a.mediana))}
                ${t("Desviación estándar",i(a.desviacionEstandar))}
                ${t("Varianza",i(a.varianza))}
                ${t("Mínimo",i(a.minimo))}
                ${t("Máximo",i(a.maximo))}
            </dl>
        </article>
    `}function S(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${t("Media",i(e.media))}
                ${t("Mediana",i(e.mediana))}
                ${t("Desviación estándar",i(e.desviacionEstandar))}
                ${t("Varianza",i(e.varianza))}
                ${t("Mínimo",i(e.minimo))}
                ${t("Máximo",i(e.maximo))}
            </dl>
        </article>
    `}function I(e){if(e.id==="wilcoxon-relacionadas")return`
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${t("Rangos positivos, W+",i(e.sumaRangosPositivos))}
                    ${t("Rangos negativos, W−",i(e.sumaRangosNegativos))}
                    ${t("Parejas no nulas",e.nEfectivo)}
                    ${t("Diferencias iguales a cero",e.cantidadCeros)}
                    ${t("z aproximado",i(e.estadisticoZ))}
                    ${t("Correlación biserial de rangos",i(e.tamanioEfecto.correlacionBiserialRangos))}
                    ${t("Correlación r",i(e.tamanioEfecto.r))}
                    ${t("Grupos de empates",e.cantidadGruposEmpatados)}
                </dl>
            </article>
        `;const a=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${t("Diferencia media",i(e.diferenciaMedia))}
                ${t("Error estándar",i(e.errorEstandar))}
                ${t("Grados de libertad",i(e.gradosLibertad))}
                ${t(`IC ${a.nivel*100} %: límite inferior`,i(a.inferior))}
                ${t(`IC ${a.nivel*100} %: límite superior`,i(a.superior))}
                ${t("d_z de Cohen",i(e.tamanioEfecto.dZ))}
                ${t("g_z corregida",i(e.tamanioEfecto.gZ))}
                ${t("Correlación entre mediciones",i(e.tamanioEfecto.correlacionPareada))}
            </dl>
        </article>
    `}function t(e,a){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${a}
            </dd>
        </div>
    `}export{F as CalculadoraDosMuestrasRelacionadas};
