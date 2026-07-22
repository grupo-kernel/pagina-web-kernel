function d(){const a=document.createElement("section");return a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Módulo de relación y asociación
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Correlación y asociación
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione si desea estudiar la relación entre variables cuantitativas u ordinales, o la asociación entre variables categóricas.
                </p>
            </div>
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8">
            ${r({etiqueta:"Disponible",titulo:"Relación entre variables",descripcion:"Analice la intensidad, dirección y significación de la relación entre dos variables mediante Pearson, Spearman, Kendall o correlación punto-biserial.",elementos:["Correlación de Pearson","Rho de Spearman","Tau-b de Kendall","Correlación punto-biserial"],ruta:"calculadoraRelacionVariables",textoBoton:"Abrir calculadora de correlación",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${r({etiqueta:"Disponible",titulo:"Asociación entre variables categóricas",descripcion:"Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.",elementos:["Chi-cuadrado de independencia","Fisher y Fisher–Freeman–Halton","Residuos ajustados","Phi, V de Cramer y odds ratio"],ruta:"calculadoraAsociacionCategorica",textoBoton:"Abrir calculadora de asociación",clases:{borde:"border-indigo-200",fondo:"bg-indigo-50",texto:"text-indigo-700",boton:"bg-indigo-700 hover:bg-indigo-800"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Seleccione primero la estructura de sus variables
            </h2>
            <p class="text-slate-700 leading-relaxed max-w-4xl">
                Pearson, Spearman y Kendall requieren observaciones emparejadas fila por fila. La correlación punto-biserial combina una variable dicotómica genuina con una variable cuantitativa. Para dos variables categóricas utilice la calculadora de asociación mediante tablas de contingencia.
            </p>
        </section>
    `,a.addEventListener("click",o=>{const t=o.target.closest("[data-route], [data-action]");if(!t)return;if(t.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const i=t.dataset.route;i&&(window.location.hash=`/${i}`)}),a}function r({etiqueta:a,titulo:o,descripcion:t,elementos:i,ruta:l,textoBoton:s,deshabilitada:n=!1,clases:e}){return`
        <article class="h-full rounded-3xl border ${e.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${e.fondo} ${e.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${a}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${o}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${t}
                </p>

                <div class="rounded-2xl ${e.fondo} border ${e.borde} p-5 mb-7">
                    <ul class="space-y-2 text-slate-700">
                        ${i.map(c=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${e.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${c}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    ${l?`data-route="${l}"`:""}
                    ${n?"disabled":""}
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${e.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${s}
                    ${n?"":'<span class="ml-2" aria-hidden="true">→</span>'}
                </button>
            </div>
        </article>
    `}export{d as CorrelacionAsociacion};
