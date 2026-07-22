import{i as k,h as w,g as $,e as C,d as M,c as E,b as j,a as S,f as T}from"./fichasMetodologicasTamanoMuestra-Bzm_BI0V.js";const q=[k,w,$,C,M,E,j,S,T];function x(a){return String(a??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function A(a,t){const e=x(`${a} ${t.nombre}`);return e.includes("tamano de muestra")||e.includes("potencia estadistica")?"Planificación muestral":e.includes("regresion")?"Regresión":e.includes("fiabilidad")||e.includes("cronbach")||e.includes("omega")?"Instrumentos":e.includes("evaluacion educativa")||e.includes("analisis clasico")||e.includes("dificultad")?"Evaluación educativa":e.includes("pearson")||e.includes("spearman")||e.includes("kendall")||e.includes("correlacion")?"Correlación":e.includes("chi-cuadrado")||e.includes("fisher")||e.includes("cramer")||e.includes("categorica")?"Asociación categórica":e.includes("anova")||e.includes("kruskal")||e.includes("friedman")||e.includes("varios grupos")?"Tres o más grupos":e.includes("t de")||e.includes("mann")||e.includes("wilcoxon")||e.includes("dos grupos")||e.includes("pareadas")?"Dos grupos":"Otros procedimientos"}function L(a,t){const e=x(`${a} ${t.nombre} ${(t.alternativas||[]).join(" ")}`),s=["mann","wilcoxon","kruskal","friedman","spearman","kendall","fisher"].some(d=>e.includes(d)),r=e.includes("fiabilidad")||e.includes("evaluacion educativa"),l=e.includes("tamano de muestra")||e.includes("potencia estadistica");return r?"Psicométrica":l?"Planificación":s?"No paramétrica":"Paramétrica o modelización"}function N(a,t){const e=x(`${a} ${t.nombre}`);return e.includes("tamano de muestra")||e.includes("potencia estadistica")?"calculadoraTamanoMuestraPotencia":e.includes("fiabilidad")||e.includes("cronbach")||e.includes("omega")?"calculadoraFiabilidadCuestionarios":e.includes("evaluacion educativa")||e.includes("analisis clasico")?"calculadoraEvaluacionEducativa":e.includes("regresion logistica")?"calculadoraRegresionLogistica":e.includes("regresion de poisson")||e.includes("binomial negativa")?"calculadoraRegresionConteo":e.includes("regresion lineal")?"calculadoraRegresion":e.includes("pearson")||e.includes("spearman")||e.includes("kendall")?"calculadoraRelacionVariables":e.includes("chi-cuadrado")||e.includes("fisher")||e.includes("cramer")?"calculadoraAsociacionCategorica":e.includes("anova de medidas repetidas")||e.includes("friedman")||e.includes("mediciones relacionadas")?"calculadoraTresOMasMedicionesRelacionadas":e.includes("anova")||e.includes("kruskal")?"calculadoraTresOMasGrupos":e.includes("pareadas")||e.includes("wilcoxon")||e.includes("muestras relacionadas")?"calculadoraDosMuestrasRelacionadas":e.includes("student")||e.includes("welch")||e.includes("mann")?"calculadoraDosGrupos":null}function R(a,t,e,s){return x([a,t.nombre,t.definicion,e,s,...t.cuandoUsar||[],...t.supuestos||[],...t.alternativas||[]].join(" "))}function g(){const a=new Map;return q.forEach(t=>{Object.entries(t||{}).forEach(([e,s])=>{if(!s?.nombre)return;const r=A(e,s),l=L(e,s);a.set(e,{id:e,...s,categoria:r,tipo:l,ruta:N(e,s),palabrasClave:R(e,s,r,l)})})}),[...a.values()].sort((t,e)=>t.nombre.localeCompare(e.nombre,"es"))}function z(){return[...new Set(g().map(a=>a.categoria))].sort((a,t)=>a.localeCompare(t,"es"))}function o(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function P(a){return String(a??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}function b(a,t="text-slate-700"){return!Array.isArray(a)||!a.length?'<p class="text-slate-500">No se especifican elementos adicionales.</p>':`<ul class="space-y-3 ${t}">${a.map(e=>`
        <li class="flex items-start gap-3 leading-relaxed">
            <span class="mt-1 shrink-0 w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-black">✓</span>
            <span>${o(e)}</span>
        </li>
    `).join("")}</ul>`}function D(a){return`
        <article class="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col" data-ficha-id="${o(a.id)}">
            <div class="flex items-start justify-between gap-4 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center font-black">${o(a.nombre.slice(0,1))}</div>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black text-slate-600">${o(a.tipo)}</span>
            </div>
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">${o(a.categoria)}</p>
            <h3 class="text-2xl font-black text-slate-900 mb-3">${o(a.nombre)}</h3>
            <p class="text-slate-600 leading-relaxed text-sm line-clamp-4">${o(a.definicion)}</p>
            <div class="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                <button type="button" data-action="consultar-ficha" data-ficha="${o(a.id)}" class="flex-1 rounded-xl bg-sky-700 px-5 py-3 text-white font-black hover:bg-sky-800 transition-colors">Consultar ficha</button>
                ${a.ruta?`<button type="button" data-action="abrir-calculadora" data-ruta="${o(a.ruta)}" class="rounded-xl border border-sky-300 px-5 py-3 text-sky-800 font-black hover:bg-sky-50 transition-colors">Calcular</button>`:""}
            </div>
        </article>
    `}function n(a,t,e=""){return`
        <section class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm ${e}">
            <h3 class="text-2xl font-black text-slate-900 mb-5">${o(a)}</h3>
            ${t}
        </section>
    `}function v(a){return[a.reporteAPA||"No existe una plantilla específica de reporte.","",`Tamaño del efecto recomendado: ${a.efecto||"consulte la ficha"}`,"","Incluya el diseño, tamaño muestral, supuestos revisados, estimación puntual, intervalo de confianza, valor p cuando corresponda y relevancia práctica."].join(`
`)}function F(a){return`
        <div class="fixed inset-0 z-[110] bg-slate-950/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto" data-modal-biblioteca="true" role="dialog" aria-modal="true" aria-labelledby="titulo-ficha-biblioteca">
            <article class="w-full max-w-6xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 shadow-2xl overflow-hidden">
                <header class="relative overflow-hidden bg-slate-950 text-white px-6 py-8 md:px-10">
                    <div class="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-sky-500/20"></div>
                    <div class="relative z-10 flex items-start justify-between gap-5">
                        <div>
                            <p class="uppercase tracking-widest text-sky-300 text-xs font-black mb-2">${o(a.categoria)} · ${o(a.tipo)}</p>
                            <h2 id="titulo-ficha-biblioteca" class="text-3xl md:text-5xl font-black leading-tight">${o(a.nombre)}</h2>
                            <p class="text-slate-200 leading-relaxed mt-4 max-w-4xl">${o(a.definicion)}</p>
                        </div>
                        <button type="button" data-action="cerrar-ficha" class="shrink-0 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xl font-black hover:bg-white/20" aria-label="Cerrar ficha">×</button>
                    </div>
                    <div class="relative z-10 flex flex-wrap gap-3 mt-7">
                        <button type="button" data-action="copiar-reporte-ficha" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black">Copiar modelo de reporte</button>
                        ${a.ruta?`<button type="button" data-action="abrir-calculadora" data-ruta="${o(a.ruta)}" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black">Abrir calculadora</button>`:""}
                    </div>
                </header>
                <div class="p-5 md:p-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
                    ${n("Cuándo utilizarla",b(a.cuandoUsar))}
                    ${n("Supuestos",b(a.supuestos))}
                    ${n("Hipótesis",`
                        <div class="space-y-4">
                            <div class="rounded-2xl bg-slate-50 border border-slate-200 p-5"><strong class="block text-slate-900 mb-2">H₀</strong><p class="text-slate-700 leading-relaxed">${o(a.hipotesis?.h0||"No se formula una hipótesis nula única.")}</p></div>
                            <div class="rounded-2xl bg-sky-50 border border-sky-200 p-5"><strong class="block text-sky-950 mb-2">H₁</strong><p class="text-sky-900 leading-relaxed">${o(a.hipotesis?.h1||"Consulte el objetivo específico del análisis.")}</p></div>
                        </div>
                    `)}
                    ${n("Estadístico e interpretación",`<p class="text-slate-700 leading-relaxed">${o(a.estadistico||"No especificado.")}</p><div class="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5"><strong class="block text-violet-950 mb-2">Tamaño del efecto</strong><p class="text-violet-900 leading-relaxed">${o(a.efecto||"No especificado.")}</p></div>`)}
                    ${n("Modelo de reporte",`<pre class="whitespace-pre-wrap rounded-2xl bg-slate-950 text-slate-100 p-5 text-sm leading-relaxed overflow-x-auto">${o(v(a))}</pre>`)}
                    ${n("Alternativas",b(a.alternativas))}
                    ${n("Post hoc o seguimiento",b(a.posthoc))}
                    ${n("Errores frecuentes",b(a.erroresFrecuentes,"text-red-900"),"border-red-200")}
                    ${n("Ejemplo aplicado",`<p class="text-slate-700 leading-relaxed">${o(a.ejemplo||"No disponible.")}</p>`)}
                    ${n("Referencias",b(a.referencias,"text-slate-600"))}
                </div>
            </article>
        </div>
    `}function H(a){document.querySelector("[data-modal-biblioteca]")?.remove(),document.body.insertAdjacentHTML("beforeend",F(a));const t=document.querySelector("[data-modal-biblioteca]");if(!t)return;const e=()=>{document.removeEventListener("keydown",s),t.remove()},s=r=>{r.key==="Escape"&&e()};t.addEventListener("click",async r=>{const l=r.target.closest("[data-action]");if(r.target===t){e();return}if(l){if(l.dataset.action==="cerrar-ficha")e();else if(l.dataset.action==="abrir-calculadora"){const d=l.dataset.ruta;e(),window.location.hash=`/${d}`}else if(l.dataset.action==="copiar-reporte-ficha")try{await navigator.clipboard.writeText(v(a));const d=l.textContent;l.textContent="Modelo copiado",setTimeout(()=>{l.isConnected&&(l.textContent=d)},1400)}catch{l.textContent="No fue posible copiar"}}}),document.addEventListener("keydown",s),t.querySelector("[data-action='cerrar-ficha']")?.focus()}function O(a){const t=new Map;return a.forEach(e=>{t.set(e.categoria,(t.get(e.categoria)||0)+1)}),[...t].sort((e,s)=>s[1]-e[1]).slice(0,4).map(([e,s])=>`
            <article class="rounded-2xl border border-white/15 bg-white/10 px-5 py-4">
                <p class="text-2xl font-black">${s}</p>
                <p class="text-sm text-slate-200">${o(e)}</p>
            </article>
        `).join("")}function I(){const a=g(),t=[...new Set(a.map(i=>i.tipo))].sort((i,c)=>i.localeCompare(c,"es")),e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans",e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-violet-700/20"></div>
            <div class="relative z-10">
                <button type="button" data-action="volver-laboratorio" class="text-sky-300 font-black mb-7">← Volver al laboratorio</button>
                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">Centro de consulta científica</p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">Biblioteca metodológica</h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-4xl">Consulte definiciones, supuestos, hipótesis, tamaños del efecto, modelos de reporte, alternativas y errores frecuentes.</p>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">${O(a)}</div>
            </div>
        </header>
        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr_0.8fr] gap-5">
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Buscar procedimiento</span><input type="search" data-busqueda-biblioteca placeholder="Ej.: Welch, Spearman, regresión, fiabilidad…" class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-600" /></label>
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Categoría</span><select data-categoria-biblioteca class="w-full rounded-xl border border-slate-300 px-4 py-3"><option value="">Todas</option>${z().map(i=>`<option>${o(i)}</option>`).join("")}</select></label>
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Tipo</span><select data-tipo-biblioteca class="w-full rounded-xl border border-slate-300 px-4 py-3"><option value="">Todos</option>${t.map(i=>`<option>${o(i)}</option>`).join("")}</select></label>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5 text-sm text-slate-600"><p data-conteo-biblioteca></p><button type="button" data-action="limpiar-filtros" class="font-black text-sky-700 hover:text-sky-900">Limpiar filtros</button></div>
        </section>
        <section data-resultados-biblioteca class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8"></section>
        <section data-vacio-biblioteca class="hidden mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center"><h2 class="text-2xl font-black text-amber-950 mb-2">No encontramos coincidencias</h2><p class="text-amber-900">Pruebe otro término o elimine algún filtro.</p></section>
    `;const s=e.querySelector("[data-busqueda-biblioteca]"),r=e.querySelector("[data-categoria-biblioteca]"),l=e.querySelector("[data-tipo-biblioteca]"),d=e.querySelector("[data-resultados-biblioteca]"),h=e.querySelector("[data-conteo-biblioteca]"),y=e.querySelector("[data-vacio-biblioteca]"),f=()=>{const i=P(s.value),c=r.value,u=l.value,p=a.filter(m=>(!i||m.palabrasClave.includes(i))&&(!c||m.categoria===c)&&(!u||m.tipo===u));d.innerHTML=p.map(D).join(""),h.textContent=`${p.length} de ${a.length} fichas metodológicas`,y.classList.toggle("hidden",p.length>0)};return[s,r,l].forEach(i=>{i.addEventListener(i===s?"input":"change",f)}),e.addEventListener("click",i=>{const c=i.target.closest("[data-action]");if(!c)return;const u=c.dataset.action;if(u==="volver-laboratorio")window.location.hash="/laboratorioKernel";else if(u==="limpiar-filtros")s.value="",r.value="",l.value="",f();else if(u==="consultar-ficha"){const p=a.find(m=>m.id===c.dataset.ficha);p&&H(p)}else u==="abrir-calculadora"&&(window.location.hash=`/${c.dataset.ruta}`)}),f(),e}export{I as BibliotecaMetodologica};
