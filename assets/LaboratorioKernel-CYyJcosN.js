import{e as x,c as b,M as n,i as t,a as u}from"./index-BTdhJNzF.js";function r(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function o({titulo:e,descripcion:a,iconoNombre:s,fondo:i,color:l,borde:d}){return`
        <article class="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border ${i} ${l} ${d}">
                ${t(s,"text-3xl")}
            </div>
            <h2 class="mb-3 text-2xl font-black text-slate-900">${r(e)}</h2>
            <p class="leading-relaxed text-slate-600">${r(a)}</p>
        </article>
    `}function p(e){return`
        <article class="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-modulo-id="${r(e.id)}">
            <div class="flex h-full items-start gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${e.fondoIcono} ${e.colorIcono} ${e.bordeIcono}">
                    ${t(e.icono,"text-3xl")}
                </div>
                <div class="flex h-full min-w-0 flex-col">
                    <h3 class="mb-2 text-xl font-black text-slate-900">${r(e.titulo)}</h3>
                    <p class="text-sm leading-relaxed text-slate-600">${r(e.descripcion)}</p>
                    <button
                        type="button"
                        data-route="${r(e.ruta)}"
                        class="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-black text-[#0D6EFD] transition-colors hover:text-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                        aria-label="Explorar ${r(e.titulo)}"
                    >
                        Explorar
                        ${t("bx-right-arrow-alt","text-xl")}
                    </button>
                </div>
            </div>
        </article>
    `}function c(e){e&&(window.location.hash=`/${e}`)}async function m(){if(!await x())return b(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans",a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-2xl md:px-12 md:py-16">
            <div class="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-700/25"></div>
            <div class="absolute right-10 top-10 hidden h-28 w-28 rotate-6 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-sky-300 lg:flex">
                ${t("bx-brain","text-6xl")}
            </div>

            <button
                id="cerrar-sesion-kernel"
                type="button"
                class="absolute right-5 top-5 z-20 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/20 disabled:cursor-wait disabled:opacity-60"
            >
                Cerrar sesión
            </button>

            <div class="relative z-10 max-w-4xl">
                <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sky-300">
                    ${t("bx-atom","text-xl")}
                    <span class="text-xs font-black uppercase tracking-[0.20em] md:text-sm">Grupo de Investigación El Kernel</span>
                </div>

                <h1 class="mb-6 max-w-3xl text-4xl font-black leading-tight md:text-6xl">Laboratorio Inteligente de Investigación</h1>
                <p class="max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                    Plataforma científica para comprender, seleccionar y aplicar métodos estadísticos y metodológicos con rigor, claridad y orientación práctica.
                </p>

                <div class="mt-8 flex flex-wrap gap-3">
                    <span class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-sky-300">
                        ${t("bx-book-open","text-xl")}<span class="text-white">Aprendizaje guiado</span>
                    </span>
                    <span class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-amber-300">
                        ${t("bx-check-shield","text-xl")}<span class="text-white">Selección inteligente</span>
                    </span>
                    <span class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-emerald-300">
                        ${t("bx-calculator","text-xl")}<span class="text-white">Herramientas de análisis</span>
                    </span>
                </div>
            </div>
        </header>

        <section class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            ${o({titulo:"Aprender",descripcion:"Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.",iconoNombre:"bx-book-open",fondo:"bg-sky-100",color:"text-sky-700",borde:"border-sky-200"})}
            ${o({titulo:"Decidir",descripcion:"Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.",iconoNombre:"bx-check-shield",fondo:"bg-amber-100",color:"text-amber-700",borde:"border-amber-200"})}
            ${o({titulo:"Analizar",descripcion:"Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.",iconoNombre:"bx-calculator",fondo:"bg-emerald-100",color:"text-emerald-700",borde:"border-emerald-200"})}
        </section>

        <section class="mt-12 rounded-3xl bg-gradient-to-r from-blue-700 to-sky-600 px-6 py-8 text-white shadow-xl md:px-10">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div class="flex items-start gap-5">
                    <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                        ${t("bx-help-circle","text-4xl")}
                    </div>
                    <div>
                        <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-100">Asistente metodológico</p>
                        <h2 class="mb-2 text-2xl font-black md:text-3xl">¿No sabe qué prueba estadística utilizar?</h2>
                        <p class="max-w-3xl leading-relaxed text-sky-50">Responda unas preguntas sobre su investigación y el laboratorio le orientará hacia el procedimiento más adecuado.</p>
                    </div>
                </div>
                <button
                    type="button"
                    data-route="asistentePruebas"
                    class="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-blue-700 shadow-lg transition-colors hover:bg-sky-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                    aria-label="Iniciar el asistente metodológico"
                >
                    ${t("bx-check-shield","text-2xl")}
                    Iniciar asistente
                </button>
            </div>
        </section>

        <section class="mt-14">
            <div class="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="mb-2 text-sm font-black uppercase tracking-widest text-[#0D6EFD]">Áreas del laboratorio</p>
                    <h2 class="text-3xl font-black text-slate-900 md:text-4xl">Explore según su necesidad de investigación</h2>
                </div>
                <div class="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                    ${t("bx-grid-alt","text-xl")}
                    ${n.length} módulos especializados
                </div>
            </div>
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                ${n.map(p).join("")}
            </div>
        </section>
    `,a.addEventListener("click",i=>{const l=i.target.closest("[data-route]");!l||!a.contains(l)||c(l.dataset.route)});const s=a.querySelector("#cerrar-sesion-kernel");return s?.addEventListener("click",async()=>{s.disabled=!0,s.textContent="Cerrando…";try{await u(),c("home")}catch(i){console.error("[Kernel] No fue posible cerrar la sesión.",i),s.disabled=!1,s.textContent="Cerrar sesión"}}),a}export{m as LaboratorioKernel};
