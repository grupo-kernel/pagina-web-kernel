import{k as w,i as k,h as $,g as C,e as E,d as j,c as M,b as S,a as A,f as N,j as q}from"./metadatosFichasMetodologicas-BbzfSE5K.js";const L=[w,k,$,C,E,j,M,S,A,N];function T(e){return String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function F(e,o,t,l){return T([e,o.nombre,o.objetivo,o.definicion,t,l,...o.cuandoUsar||[],...o.cuandoNoUsar||[],...o.supuestos||[],...o.alternativas||[],...o.erroresFrecuentes||[]].join(" "))}function h(){const e=new Map;return L.forEach(o=>{Object.entries(o||{}).forEach(([t,l])=>{if(!l?.nombre)return;const b=q(t)||{categoria:"Sin clasificar",tipo:"Sin clasificar",ruta:null},{categoria:n,tipo:u}=b;e.set(t,{id:t,...l,...b,palabrasClave:F(t,l,n,u)})})}),[...e.values()].sort((o,t)=>o.nombre.localeCompare(t.nombre,"es"))}function z(){return[...new Set(h().map(e=>e.categoria))].sort((e,o)=>e.localeCompare(o,"es"))}function a(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function H(e){return String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}let v=null;function x(e,o="text-slate-700",t={}){const{vacio:l="No se especifican elementos adicionales.",simbolo:b="✓",claseIcono:n="bg-sky-100 text-sky-700"}=t;return!Array.isArray(e)||!e.length?`<p class="text-slate-500">${a(l)}</p>`:`<ul class="space-y-3 ${o}">${e.map(u=>`
        <li class="flex items-start gap-3 leading-relaxed">
            <span class="mt-1 shrink-0 w-5 h-5 rounded-full ${n} flex items-center justify-center text-xs font-black" aria-hidden="true">${a(b)}</span>
            <span>${a(u)}</span>
        </li>
    `).join("")}</ul>`}function R(e){return`
        <article class="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col" data-ficha-id="${a(e.id)}">
            <div class="flex items-start justify-between gap-4 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center font-black">${a(e.nombre.slice(0,1))}</div>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black text-slate-600">${a(e.tipo)}</span>
            </div>
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">${a(e.categoria)}</p>
            <h3 class="text-2xl font-black text-slate-900 mb-3">${a(e.nombre)}</h3>
            <p class="text-slate-600 leading-relaxed text-sm line-clamp-4">${a(e.definicion)}</p>
            <div class="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                <button type="button" data-action="consultar-ficha" data-ficha="${a(e.id)}" class="flex-1 rounded-xl bg-sky-700 px-5 py-3 text-white font-black hover:bg-sky-800 transition-colors" aria-label="Consultar la ficha metodológica de ${a(e.nombre)}">Consultar ficha</button>
                ${e.ruta?`<button type="button" data-action="abrir-calculadora" data-ruta="${a(e.ruta)}" class="rounded-xl border border-sky-300 px-5 py-3 text-sky-800 font-black hover:bg-sky-50 transition-colors" aria-label="Abrir la calculadora de ${a(e.nombre)}">Calcular</button>`:""}
            </div>
        </article>
    `}function d(e,o,t=""){return`
        <section class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm ${t}">
            <h3 class="text-2xl font-black text-slate-900 mb-5">${a(e)}</h3>
            ${o}
        </section>
    `}function y(e){return[e.reporteAPA||"No existe una plantilla específica de reporte.","",`${e.etiquetaEfecto||"Tamaño del efecto"}: ${e.efecto||"consulte la ficha"}`,"","Incluya el diseño, tamaño muestral, supuestos revisados, estimación puntual, intervalo de confianza, valor p cuando corresponda y relevancia práctica."].join(`
`)}function B(e){return`
        <div class="fixed inset-0 z-[500] bg-slate-950/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto" data-modal-biblioteca="true" role="dialog" aria-modal="true" aria-labelledby="titulo-ficha-biblioteca" aria-describedby="descripcion-ficha-biblioteca">
            <article class="w-full max-w-6xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 shadow-2xl overflow-hidden">
                <header class="relative overflow-hidden bg-slate-950 text-white px-6 py-8 md:px-10">
                    <div class="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-sky-500/20"></div>
                    <div class="relative z-10 flex items-start justify-between gap-5">
                        <div>
                            <p class="uppercase tracking-widest text-sky-300 text-xs font-black mb-2">${a(e.categoria)} · ${a(e.tipo)}</p>
                            <h2 id="titulo-ficha-biblioteca" class="text-3xl md:text-5xl font-black leading-tight">${a(e.nombre)}</h2>
                            <p id="descripcion-ficha-biblioteca" class="text-slate-200 leading-relaxed mt-4 max-w-4xl">${a(e.definicion)}</p>
                        </div>
                        <button type="button" data-action="cerrar-ficha" class="shrink-0 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xl font-black hover:bg-white/20" aria-label="Cerrar la ficha de ${a(e.nombre)}">×</button>
                    </div>
                    <div class="relative z-10 flex flex-wrap gap-3 mt-7">
                        <button type="button" data-action="copiar-reporte-ficha" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black">Copiar modelo de reporte</button>
                        ${e.ruta?`<button type="button" data-action="abrir-calculadora" data-ruta="${a(e.ruta)}" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black">Abrir calculadora</button>`:""}
                    </div>
                </header>
                <div class="p-5 md:p-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
                    ${e.objetivo?d("Objetivo",`<p class="text-slate-700 leading-relaxed">${a(e.objetivo)}</p>`):""}
                    ${d("Cuándo utilizarla",x(e.cuandoUsar))}
                    ${e.cuandoNoUsar?.length?d("Cuándo no utilizarla",x(e.cuandoNoUsar,"text-amber-950",{simbolo:"!",claseIcono:"bg-amber-100 text-amber-800"}),"border-amber-200"):""}
                    ${d("Supuestos",x(e.supuestos))}
                    ${d("Hipótesis",`
                        <div class="space-y-4">
                            <div class="rounded-2xl bg-slate-50 border border-slate-200 p-5"><strong class="block text-slate-900 mb-2">H₀</strong><p class="text-slate-700 leading-relaxed">${a(e.hipotesis?.h0||"No se formula una hipótesis nula única.")}</p></div>
                            <div class="rounded-2xl bg-sky-50 border border-sky-200 p-5"><strong class="block text-sky-950 mb-2">H₁</strong><p class="text-sky-900 leading-relaxed">${a(e.hipotesis?.h1||"Consulte el objetivo específico del análisis.")}</p></div>
                        </div>
                    `)}
                    ${d("Estadístico e interpretación",`<p class="text-slate-700 leading-relaxed">${a(e.estadistico||"No especificado.")}</p><div class="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5"><strong class="block text-violet-950 mb-2">${a(e.etiquetaEfecto||"Tamaño del efecto")}</strong><p class="text-violet-900 leading-relaxed">${a(e.efecto||"No especificado.")}</p></div>`)}
                    ${d("Modelo de reporte",`<pre class="whitespace-pre-wrap rounded-2xl bg-slate-950 text-slate-100 p-5 text-sm leading-relaxed overflow-x-auto">${a(y(e))}</pre>`)}
                    ${d("Alternativas",x(e.alternativas))}
                    ${d("Post hoc o seguimiento",x(e.posthoc,"text-slate-700",{vacio:"No aplica para este procedimiento."}))}
                    ${d("Errores frecuentes",x(e.erroresFrecuentes,"text-red-900",{simbolo:"!",claseIcono:"bg-red-100 text-red-700"}),"border-red-200")}
                    ${d("Ejemplo aplicado",`<p class="text-slate-700 leading-relaxed">${a(e.ejemplo||"No disponible.")}</p>`)}
                    ${d("Referencias",x(e.referencias,"text-slate-600"))}
                </div>
            </article>
        </div>
    `}function D(e){v?.({restaurarFoco:!1});const o=document.activeElement,t=document.body.style.overflow;document.body.insertAdjacentHTML("beforeend",B(e));const l=document.querySelector("[data-modal-biblioteca]");if(!l)return;document.body.style.overflow="hidden";const b=()=>[...l.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(i=>i.getAttribute("aria-hidden")!=="true"),n=({restaurarFoco:i=!0}={})=>{document.removeEventListener("keydown",g),window.removeEventListener("hashchange",u),l.remove(),document.body.style.overflow=t,v===n&&(v=null),i&&o instanceof HTMLElement&&o.isConnected&&o.focus()},u=()=>{n({restaurarFoco:!1})},g=i=>{if(i.key==="Escape"){i.preventDefault(),n();return}if(i.key!=="Tab")return;const r=b();if(!r.length){i.preventDefault();return}const s=r[0],c=r.at(-1);i.shiftKey&&document.activeElement===s?(i.preventDefault(),c.focus()):!i.shiftKey&&document.activeElement===c&&(i.preventDefault(),s.focus())};l.addEventListener("click",async i=>{const r=i.target.closest("[data-action]");if(i.target===l){n();return}if(r){if(r.dataset.action==="cerrar-ficha")n();else if(r.dataset.action==="abrir-calculadora"){const s=r.dataset.ruta;n({restaurarFoco:!1}),window.location.hash=`/${s}`}else if(r.dataset.action==="copiar-reporte-ficha")try{await navigator.clipboard.writeText(y(e));const s=r.textContent;r.textContent="Modelo copiado",setTimeout(()=>{r.isConnected&&(r.textContent=s)},1400)}catch{r.textContent="No fue posible copiar"}}}),v=n,document.addEventListener("keydown",g),window.addEventListener("hashchange",u),l.querySelector("[data-action='cerrar-ficha']")?.focus()}function I(e){const o=new Map;return e.forEach(t=>{o.set(t.categoria,(o.get(t.categoria)||0)+1)}),[...o].sort((t,l)=>l[1]-t[1]).slice(0,4).map(([t,l])=>`
            <article class="rounded-2xl border border-white/15 bg-white/10 px-5 py-4">
                <p class="text-2xl font-black">${l}</p>
                <p class="text-sm text-slate-200">${a(t)}</p>
            </article>
        `).join("")}function O(){const e=h(),o=[...new Set(e.map(s=>s.tipo))].sort((s,c)=>s.localeCompare(c,"es")),t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans",t.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-violet-700/20"></div>
            <div class="relative z-10">
                <button type="button" data-action="volver-laboratorio" class="text-sky-300 font-black mb-7">← Volver al laboratorio</button>
                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">Centro de consulta científica</p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">Biblioteca metodológica</h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-4xl">Consulte definiciones, supuestos, hipótesis, tamaños del efecto, modelos de reporte, alternativas y errores frecuentes.</p>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">${I(e)}</div>
            </div>
        </header>
        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr_0.8fr] gap-5">
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Buscar procedimiento</span><input type="search" data-busqueda-biblioteca placeholder="Ej.: Welch, Spearman, regresión, fiabilidad…" class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-600" /></label>
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Categoría</span><select data-categoria-biblioteca class="w-full rounded-xl border border-slate-300 px-4 py-3"><option value="">Todas</option>${z().map(s=>`<option>${a(s)}</option>`).join("")}</select></label>
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Tipo</span><select data-tipo-biblioteca class="w-full rounded-xl border border-slate-300 px-4 py-3"><option value="">Todos</option>${o.map(s=>`<option>${a(s)}</option>`).join("")}</select></label>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5 text-sm text-slate-600"><p data-conteo-biblioteca role="status" aria-live="polite" aria-atomic="true"></p><button type="button" data-action="limpiar-filtros" class="font-black text-sky-700 hover:text-sky-900">Limpiar filtros</button></div>
        </section>
        <section data-resultados-biblioteca class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8"></section>
        <section data-vacio-biblioteca class="hidden mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center"><h2 class="text-2xl font-black text-amber-950 mb-2">No encontramos coincidencias</h2><p class="text-amber-900">Pruebe otro término o elimine algún filtro.</p></section>
    `;const l=t.querySelector("[data-busqueda-biblioteca]"),b=t.querySelector("[data-categoria-biblioteca]"),n=t.querySelector("[data-tipo-biblioteca]"),u=t.querySelector("[data-resultados-biblioteca]"),g=t.querySelector("[data-conteo-biblioteca]"),i=t.querySelector("[data-vacio-biblioteca]"),r=()=>{const s=H(l.value),c=b.value,p=n.value,m=e.filter(f=>(!s||f.palabrasClave.includes(s))&&(!c||f.categoria===c)&&(!p||f.tipo===p));u.innerHTML=m.map(R).join(""),g.textContent=`${m.length} de ${e.length} fichas metodológicas`,i.classList.toggle("hidden",m.length>0)};return[l,b,n].forEach(s=>{s.addEventListener(s===l?"input":"change",r)}),t.addEventListener("click",s=>{const c=s.target.closest("[data-action]");if(!c)return;const p=c.dataset.action;if(p==="volver-laboratorio")window.location.hash="/laboratorioKernel";else if(p==="limpiar-filtros")l.value="",b.value="",n.value="",r();else if(p==="consultar-ficha"){const m=e.find(f=>f.id===c.dataset.ficha);m&&D(m)}else p==="abrir-calculadora"&&(window.location.hash=`/${c.dataset.ruta}`)}),r(),t}export{O as BibliotecaMetodologica};
