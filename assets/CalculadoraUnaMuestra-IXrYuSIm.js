import{p as g,a as h}from"./estadisticaDosMuestrasRelacionadas-BqGxjkhn.js";import{p as w}from"./exportacionesCalculadoras-CyqpoDub.js";import"./jstat-DiDocX-r.js";import"./index-qgiCDO7O.js";function x(e,a){const t=Number(typeof e=="string"?e.trim().replace(",","."):e);if(!Number.isFinite(t))throw new TypeError(`${a} debe ser un número finito.`);return t}function v(e){if(!Array.isArray(e))throw new TypeError("La muestra debe proporcionarse como un arreglo de valores.");const a=e.map((t,r)=>{const o=Number(typeof t=="string"?t.trim().replace(",","."):t);if(!Number.isFinite(o))throw new TypeError(`La muestra contiene un valor no numérico en la posición ${r+1}.`);return o});if(a.length<2)throw new RangeError("La muestra debe contener al menos dos observaciones.");return a}function y(e){const a=[...e].sort((r,o)=>r-o),t=Math.floor(a.length/2);return a.length%2?a[t]:(a[t-1]+a[t])/2}function E(e){const a=[];for(let t=0;t<e.length;t+=1)for(let r=t;r<e.length;r+=1)a.push((e[t]+e[r])/2);return y(a)}function k(e,a,t={}){const r=v(e),o=x(a,"El valor de referencia"),n=new Array(r.length).fill(o),s=h(r,n,t),c=s.intervaloConfianza,i={...c,inferior:c.inferior+o,superior:c.superior+o};return{id:"t-student-una-muestra",nombre:"t de Student para una muestra",metodo:"Prueba bilateral de la media de una muestra respecto a un valor de referencia",muestra:s.medicion1,valorReferencia:o,diferenciaMedia:s.diferenciaMedia,errorEstandar:s.errorEstandar,estadistico:s.estadistico,gradosLibertad:s.gradosLibertad,valorP:s.valorP,intervaloConfianzaMedia:i,intervaloConfianzaDiferencia:c,tamanioEfecto:{dCohen:s.tamanioEfecto.dZ,gHedges:s.tamanioEfecto.gZ,correccionHedges:s.tamanioEfecto.correccionHedges??1}}}function $(e,a){const t=v(e),r=x(a,"El valor de referencia"),o=new Array(t.length).fill(r),n=g(t,o),s=n.diferencias.valores;return{id:"wilcoxon-una-muestra",nombre:"Prueba de rangos con signo de Wilcoxon para una muestra",metodoValorP:n.metodoValorP,muestra:n.medicion1,valorReferencia:r,diferencias:n.diferencias,medianaDiferencias:n.diferencias.mediana,estimadorHodgesLehmann:E(s),nEfectivo:n.nEfectivo,cantidadCeros:n.cantidadCeros,sumaRangosPositivos:n.sumaRangosPositivos,sumaRangosNegativos:n.sumaRangosNegativos,estadistico:n.estadistico,estadisticoZ:n.estadisticoZ,valorP:n.valorP,correccionEmpates:n.correccionEmpates,tamanioEfecto:{correlacionBiserialRangos:n.tamanioEfecto.correlacionBiserialRangos,r:n.tamanioEfecto.r}}}function L({valores:e,valorReferencia:a,prueba:t,nivelConfianza:r=.95}){switch(t){case"t-una-muestra":return k(e,a,{nivelConfianza:r});case"wilcoxon-una-muestra":return $(e,a);default:throw new Error("La prueba de una muestra solicitada no está disponible.")}}const p="kernel-prueba-una-muestra",C="kernel-calculadora-una-muestra-activa";function V(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-2xl md:px-12 md:py-14">
            <div class="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-cyan-500/20"></div>
            <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modulo"
                    class="mb-7 inline-flex items-center gap-2 font-black text-cyan-300 transition-colors hover:text-white"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="mb-3 text-xs font-black uppercase tracking-[0.20em] text-cyan-300 md:text-sm">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="mb-5 text-4xl font-black leading-tight md:text-6xl">
                    Comparación de una muestra
                </h1>

                <p class="max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                    Compare una muestra cuantitativa u ordinal con un valor teórico mediante la t de Student o la prueba de rangos con signo de Wilcoxon.
                </p>

                <div class="mt-7 flex flex-wrap gap-3">
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                        Valor de referencia configurable
                    </span>
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                        Intervalo de confianza
                    </span>
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                        Tamaño del efecto
                    </span>
                </div>
            </div>
        </header>

        <section class="mt-8 grid grid-cols-1 gap-7 xl:grid-cols-[0.72fr_1.28fr]">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
                <p class="mb-2 text-xs font-black uppercase tracking-widest text-cyan-700">
                    Selección metodológica
                </p>

                <h2 class="mb-5 text-2xl font-black text-slate-900">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600">
                    ${b("t de Student para una muestra","Utilícela cuando el objetivo sea comparar la media con un valor de referencia y la distribución sea aproximadamente normal o el tamaño muestral permita una inferencia razonable.")}
                    ${b("Wilcoxon de una muestra","Utilícela con variables ordinales o cuando el estimando basado en rangos sea más apropiado. No debe interpretarse automáticamente como una prueba de la mediana sin justificar la simetría.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="mb-2 font-black text-amber-950">
                        Antes de calcular
                    </h3>
                    <p class="text-sm leading-relaxed text-amber-900">
                        Revise valores atípicos, escala de medición, independencia de las observaciones y el significado científico del valor de referencia.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-una-muestra"
                class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8"
                novalidate
            >
                <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <label class="block md:col-span-1">
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                        >
                            <option value="t-una-muestra">t de Student para una muestra</option>
                            <option value="wilcoxon-una-muestra">Wilcoxon de una muestra</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Valor de referencia
                        </span>
                        <input
                            type="text"
                            inputmode="decimal"
                            name="valorReferencia"
                            value="70"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                        >
                    </label>

                    <label class="block">
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <label class="mt-6 block">
                    <span class="mb-2 flex items-center justify-between gap-3 text-sm font-black text-slate-800">
                        <span>Valores de la muestra</span>
                        <span data-contador class="text-xs font-bold text-slate-500">0 valores</span>
                    </span>
                    <textarea
                        name="valores"
                        rows="12"
                        placeholder="72&#10;68&#10;75&#10;71&#10;74"
                        class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                    ></textarea>
                    <span class="mt-2 block text-xs leading-relaxed text-slate-500">
                        Separe los valores mediante saltos de línea, espacios o punto y coma. Puede utilizar coma decimal.
                    </span>
                </label>

                <div
                    id="mensaje-error-una-muestra"
                    class="mt-6 hidden rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center rounded-xl bg-cyan-700 px-7 py-4 font-black text-white shadow-lg transition-colors hover:bg-cyan-800"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center rounded-xl border border-cyan-300 px-6 py-4 font-black text-cyan-700 transition-colors hover:bg-cyan-50"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 font-black text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-una-muestra"
            class="mt-8 hidden"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-una-muestra"),t=e.querySelector("#mensaje-error-una-muestra"),r=e.querySelector("#resultados-una-muestra"),o=e.querySelector("[data-contador]"),n=sessionStorage.getItem(p);["t-una-muestra","wilcoxon-una-muestra"].includes(n)&&(a.elements.prueba.value=n),sessionStorage.removeItem(p);const s=()=>{try{const c=f(a.elements.valores.value,!1).length;o.textContent=`${c} ${c===1?"valor":"valores"}`}catch{o.textContent="Revisar datos"}};return a.addEventListener("input",s),a.addEventListener("submit",c=>{c.preventDefault(),m(t);try{const i={prueba:a.elements.prueba.value,valorReferencia:N(a.elements.valorReferencia.value,"El valor de referencia"),nivelConfianza:Number(a.elements.nivelConfianza.value),valores:f(a.elements.valores.value,!0)},d=L(i);r.innerHTML=j(d,i.nivelConfianza),r.classList.remove("hidden"),w({contenedor:r,nombre:"comparacion-una-muestra",datos:{solicitud:i,resultado:d}}),r.scrollIntoView({behavior:"smooth",block:"start"})}catch(i){r.classList.add("hidden"),R(t,i instanceof Error?i.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",c=>{const i=c.target.closest("[data-action]");if(i){if(i.dataset.action==="volver-modulo"){sessionStorage.removeItem(C),window.location.hash="/comparacionGrupos";return}if(i.dataset.action==="cargar-ejemplo"){a.elements.valorReferencia.value="70",a.elements.valores.value=[72,68,75,71,74,69,73,76,70,72,74,71].join(`
`),s(),r.classList.add("hidden"),m(t);return}i.dataset.action==="limpiar"&&(a.reset(),a.elements.valorReferencia.value="70",r.innerHTML="",r.classList.add("hidden"),m(t),s())}}),s(),e}function b(e,a){return`
        <article class="flex items-start gap-4">
            <span class="mt-1 h-3 w-3 shrink-0 rounded-full bg-cyan-500"></span>
            <div>
                <h3 class="mb-1 font-black text-slate-900">${e}</h3>
                <p class="text-sm leading-relaxed">${a}</p>
            </div>
        </article>
    `}function N(e,a){const t=Number(String(e).trim().replace(",","."));if(!Number.isFinite(t))throw new Error(`${a} debe ser numérico.`);return t}function f(e,a){const t=e.trim();if(!t){if(a)throw new Error("Introduzca los valores de la muestra.");return[]}const r=t.split(/[\s;]+/).filter(Boolean),o=r.map(s=>Number(s.replace(",","."))),n=o.findIndex(s=>!Number.isFinite(s));if(n!==-1)throw new Error(`La muestra contiene un valor no válido: "${r[n]}".`);if(a&&o.length<2)throw new Error("Introduzca al menos dos observaciones.");return o}function m(e){e.textContent="",e.classList.add("hidden")}function R(e,a){e.textContent=a,e.classList.remove("hidden")}function l(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{maximumFractionDigits:a}).format(e):"No disponible"}function M(e){return Number.isFinite(e)?e<.001?"< 0.001":l(e,4):"No disponible"}function z(e){const a=Math.abs(e);return Number.isFinite(a)?a<.1?"Prácticamente nulo":a<.3?"Pequeño":a<.5?"Moderado":"Grande":"No disponible"}function u(e,a,t=""){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs font-black uppercase tracking-widest text-slate-500">${e}</p>
            <p class="mt-2 text-2xl font-black text-slate-950">${a}</p>
            ${t?`<p class="mt-2 text-sm leading-relaxed text-slate-600">${t}</p>`:""}
        </article>
    `}function j(e,a){const t=1-a,r=e.valorP<t,o=e.id==="t-student-una-muestra",n=o?e.tamanioEfecto.gHedges:e.tamanioEfecto.correlacionBiserialRangos,s=o?"g de Hedges":"Correlación biserial por rangos",c=o?`${l(e.intervaloConfianzaMedia.inferior)} a ${l(e.intervaloConfianzaMedia.superior)}`:"No calculado para esta implementación",i=l(o?e.muestra.media:e.estimadorHodgesLehmann),d=o?"Media muestral":"Estimador de Hodges–Lehmann";return`
        <header class="rounded-t-3xl bg-cyan-800 px-6 py-8 text-white md:px-10">
            <p class="mb-2 text-xs font-black uppercase tracking-widest text-cyan-100">
                Resultado del análisis
            </p>
            <h2 class="text-3xl font-black md:text-4xl">${e.nombre}</h2>
            <p class="mt-3 text-cyan-50">
                Valor de referencia: <strong>${l(e.valorReferencia)}</strong>
            </p>
        </header>

        <div class="rounded-b-3xl border border-t-0 border-cyan-200 bg-slate-50 px-6 py-8 shadow-xl md:px-10">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                ${u(d,i,o?`Mediana: ${l(e.muestra.mediana)}`:`Mediana de diferencias: ${l(e.medianaDiferencias)}`)}
                ${u(e.estadistico.simbolo,l(e.estadistico.valor),o?`gl = ${l(e.gradosLibertad,0)}`:`n efectivo = ${e.nEfectivo}`)}
                ${u("Valor p bilateral",M(e.valorP),r?`Existe evidencia al nivel α = ${l(t,3)}.`:`No existe evidencia suficiente al nivel α = ${l(t,3)}.`)}
                ${u(s,l(n),`Magnitud: ${z(n)}`)}
            </div>

            <div class="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                    <h3 class="text-xl font-black text-blue-950">
                        Estimación e intervalo
                    </h3>
                    <dl class="mt-4 space-y-3 text-blue-950">
                        <div class="flex flex-col justify-between gap-1 sm:flex-row">
                            <dt class="font-bold">Intervalo de confianza</dt>
                            <dd>${c}</dd>
                        </div>
                        <div class="flex flex-col justify-between gap-1 sm:flex-row">
                            <dt class="font-bold">Diferencia respecto al valor teórico</dt>
                            <dd>${l(o?e.diferenciaMedia:e.estimadorHodgesLehmann)}</dd>
                        </div>
                        <div class="flex flex-col justify-between gap-1 sm:flex-row">
                            <dt class="font-bold">Tamaño muestral</dt>
                            <dd>${e.muestra.n}</dd>
                        </div>
                    </dl>
                </article>

                <article class="rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-amber-200 bg-amber-50"} p-6">
                    <h3 class="text-xl font-black ${r?"text-emerald-950":"text-amber-950"}">
                        Interpretación orientativa
                    </h3>
                    <p class="mt-3 leading-relaxed ${r?"text-emerald-900":"text-amber-900"}">
                        ${r?"Los datos aportan evidencia estadística de una diferencia respecto al valor de referencia. La conclusión sustantiva debe considerar la magnitud del efecto y el contexto de medición.":"Los datos no aportan evidencia estadística suficiente de una diferencia respecto al valor de referencia. Esto no demuestra igualdad; revise precisión, potencia y relevancia práctica."}
                    </p>
                    ${o?"":`<p class="mt-3 text-sm leading-relaxed text-amber-900">${e.metodoValorP}</p>`}
                </article>
            </div>

            <div class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <h3 class="text-xl font-black text-slate-950">Reporte recomendado</h3>
                <p class="mt-3 leading-relaxed text-slate-700">
                    Informe la prueba utilizada, el tamaño muestral, el valor de referencia, el estadístico, los grados de libertad cuando correspondan, el valor p, la estimación con intervalo de confianza y el tamaño del efecto. Describa también los supuestos revisados y cualquier valor atípico relevante.
                </p>
            </div>
        </div>
    `}export{V as CalculadoraUnaMuestra};
