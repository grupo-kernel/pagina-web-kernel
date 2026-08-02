import{c as x}from"./authService-CgfoSPdf.js";import{M as d,i as a}from"./index-Cmr_g5yj.js";import"./firebase-BzP43VG7.js";const s=e=>Object.freeze(e),u=Object.freeze([s({numero:"01",id:"orientar",titulo:"Orientar",descripcion:"Defina el objetivo, el tipo de variable y el diseño antes de elegir una prueba.",icono:"bx-check-shield",estado:"Disponible",detalleEstado:"Asistente KSDE 2.0",accion:s({tipo:"ruta",valor:"asistentePruebas",etiqueta:"Iniciar orientación"}),fondoIcono:"bg-blue-100",colorIcono:"text-blue-700",bordeIcono:"border-blue-200"}),s({numero:"02",id:"analizar",titulo:"Analizar",descripcion:"Seleccione una herramienta, introduzca sus datos y ejecute el procedimiento estadístico.",icono:"bx-calculator",estado:"Disponible",detalleEstado:"Catálogo de análisis",accion:s({tipo:"ancla",valor:"catalogo-analisis",etiqueta:"Ver herramientas"}),fondoIcono:"bg-emerald-100",colorIcono:"text-emerald-700",bordeIcono:"border-emerald-200"}),s({numero:"03",id:"interpretar",titulo:"Interpretar",descripcion:"Examine el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto.",icono:"bx-line-chart",estado:"Disponible",detalleEstado:"Intérprete de resultados",accion:s({tipo:"ancla",valor:"interpretador-resultados",etiqueta:"Interpretar resultado"}),fondoIcono:"bg-amber-100",colorIcono:"text-amber-700",bordeIcono:"border-amber-200"}),s({numero:"04",id:"reportar",titulo:"Reportar",descripcion:"Utilice las orientaciones de cada herramienta para comunicar resultados con rigor y contexto.",icono:"bx-edit-alt",estado:"Disponible",detalleEstado:"Generador de reporte",accion:s({tipo:"ancla",valor:"generador-reporte",etiqueta:"Generar reporte"}),fondoIcono:"bg-violet-100",colorIcono:"text-violet-700",bordeIcono:"border-violet-200"})]),b=Object.freeze([s({id:"preparar-describir",titulo:"Preparar y describir",descripcion:"Conozca la estructura de sus datos y planifique el tamaño necesario antes de la inferencia.",icono:"bx-bar-chart-alt-2",modulos:s(["estadistica-descriptiva","tamano-muestra"])}),s({id:"comparar-relacionar",titulo:"Comparar y relacionar",descripcion:"Contraste grupos, mediciones y relaciones entre variables cuantitativas o categóricas.",icono:"bx-group",modulos:s(["comparacion-grupos","correlacion-asociacion"])}),s({id:"modelar-evaluar",titulo:"Modelar y evaluar",descripcion:"Construya modelos y estudie la calidad de instrumentos, ítems y evaluaciones.",icono:"bx-trending-up",modulos:s(["regresion","cuestionarios-fiabilidad","evaluacion-educativa"])}),s({id:"consultar-aprender",titulo:"Consultar y aprender",descripcion:"Revise fundamentos, supuestos, alternativas, errores frecuentes y formas de reporte.",icono:"bx-library",modulos:s(["biblioteca-metodologica"])})]),p="asistente-pruebas",m=new Map(d.map(e=>[e.id,e]));function t(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(e){return`
        <ul class="mt-6 space-y-3">
            ${e.map(r=>`
                <li class="flex items-start gap-3 text-sm leading-relaxed">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-current" aria-hidden="true">
                        ✓
                    </span>
                    <span>${t(r)}</span>
                </li>
            `).join("")}
        </ul>
    `}function g(){return`
        <article class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-sky-600 p-7 text-white shadow-xl md:p-9">
            <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10"></div>
            <div class="relative z-10 flex h-full flex-col">
                <div class="mb-6 flex items-start justify-between gap-4">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-sky-100">
                        ${a("bx-check-shield","text-3xl")}
                    </div>
                    <span class="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-sky-100">
                        Recomendado
                    </span>
                </div>

                <p class="mb-2 text-xs font-black uppercase tracking-[0.20em] text-sky-100">
                    Modo guiado
                </p>
                <h2 class="text-3xl font-black leading-tight md:text-4xl">
                    Necesito orientación
                </h2>
                <p class="mt-4 max-w-xl leading-relaxed text-blue-50">
                    El asistente KSDE 2.0 organiza su problema, identifica la prueba más adecuada y explica los supuestos que debe revisar.
                </p>

                ${f(["Para usuarios que todavía no han elegido una prueba.","Preguntas breves sobre objetivo, variables y diseño.","Recomendación conectada con la calculadora correspondiente."])}

                <a
                    href="#/asistentePruebas"
                    data-route="asistentePruebas"
                    class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-blue-800 shadow-lg transition-colors hover:bg-sky-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 sm:w-fit"
                    aria-label="Iniciar la orientación estadística guiada"
                >
                    Iniciar orientación
                    ${a("bx-right-arrow-alt","text-xl")}
                </a>
            </div>
        </article>
    `}function h(){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl md:p-9">
            <div class="flex h-full flex-col">
                <div class="mb-6 flex items-start justify-between gap-4">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-100 text-emerald-700">
                        ${a("bx-grid-alt","text-3xl")}
                    </div>
                    <span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-slate-600">
                        Acceso rápido
                    </span>
                </div>

                <p class="mb-2 text-xs font-black uppercase tracking-[0.20em] text-emerald-700">
                    Modo directo
                </p>
                <h2 class="text-3xl font-black leading-tight text-slate-950 md:text-4xl">
                    Ya sé qué análisis necesito
                </h2>
                <p class="mt-4 max-w-xl leading-relaxed text-slate-600">
                    Entre directamente al catálogo organizado por objetivo y seleccione la herramienta que desea utilizar.
                </p>

                <ul class="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
                    ${["Para usuarios que conocen el procedimiento requerido.","Herramientas agrupadas por propósito de investigación.","Acceso sin repetir el recorrido del asistente."].map(e=>`
                        <li class="flex items-start gap-3">
                            <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-black text-emerald-700" aria-hidden="true">✓</span>
                            <span>${t(e)}</span>
                        </li>
                    `).join("")}
                </ul>

                <button
                    type="button"
                    data-scroll-target="catalogo-analisis"
                    class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-black text-white shadow-lg transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-300 sm:w-fit"
                    aria-label="Ir al catálogo directo de herramientas"
                >
                    Ver catálogo de análisis
                    ${a("bx-right-arrow-alt","text-xl")}
                </button>
            </div>
        </article>
    `}function v(e){return e.accion?e.accion.tipo==="ruta"?`
            <a
                href="#/${t(e.accion.valor)}"
                data-route="${t(e.accion.valor)}"
                class="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:underline"
            >
                ${t(e.accion.etiqueta)}
                ${a("bx-right-arrow-alt","text-xl")}
            </a>
        `:`
        <button
            type="button"
            data-scroll-target="${t(e.accion.valor)}"
            class="mt-5 inline-flex items-center gap-2 text-left text-sm font-black text-emerald-700 hover:text-emerald-900 focus:outline-none focus-visible:underline"
        >
            ${t(e.accion.etiqueta)}
            ${a("bx-right-arrow-alt","text-xl")}
        </button>
    `:`
            <span class="mt-5 inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-600">
                ${t(e.detalleEstado)}
            </span>
        `}function w(e){return`
        <li class="relative h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start justify-between gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border ${e.fondoIcono} ${e.colorIcono} ${e.bordeIcono}">
                    ${a(e.icono,"text-2xl")}
                </div>
                <span class="text-sm font-black tracking-widest text-slate-300" aria-hidden="true">
                    ${t(e.numero)}
                </span>
            </div>

            <div class="mt-5 flex flex-wrap items-center gap-2">
                <h3 class="text-xl font-black text-slate-950">${t(e.titulo)}</h3>
                <span class="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-wider text-slate-500">
                    ${t(e.estado)}
                </span>
            </div>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">${t(e.descripcion)}</p>
            ${v(e)}
        </li>
    `}function y(e){return`
        <article class="h-full" data-modulo-id="${t(e.id)}">
            <a
                href="#/${t(e.ruta)}"
                data-route="${t(e.ruta)}"
                class="group block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#bdd8d2] hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#bdd8d2]"
                aria-label="Abrir el módulo ${t(e.titulo)}"
            >
                <div class="flex h-full items-start gap-4">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${e.fondoIcono} ${e.colorIcono} ${e.bordeIcono}">
                        ${a(e.icono,"text-2xl")}
                    </div>
                    <div class="flex h-full min-w-0 flex-col">
                        <h4 class="mb-2 text-lg font-black text-slate-900">${t(e.titulo)}</h4>
                        <p class="text-sm leading-relaxed text-slate-600">${t(e.descripcion)}</p>
                        <span class="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-black text-[#0f5b5d] transition-colors group-hover:text-[#0a4648]" aria-hidden="true">
                            Abrir herramienta
                            ${a("bx-right-arrow-alt","text-xl")}
                        </span>
                    </div>
                </div>
            </a>
        </article>
    `}function k(e){const r=e.modulos.map(l=>m.get(l)).filter(Boolean);return`
        <article class="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 md:p-7" data-grupo-catalogo="${t(e.id)}">
            <header class="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div class="flex items-start gap-4">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm">
                        ${a(e.icono,"text-2xl")}
                    </div>
                    <div>
                        <h3 class="text-2xl font-black text-slate-950">${t(e.titulo)}</h3>
                        <p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">${t(e.descripcion)}</p>
                    </div>
                </div>
                <span class="inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600">
                    ${r.length} ${r.length===1?"herramienta":"herramientas"}
                </span>
            </header>

            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                ${r.map(y).join("")}
            </div>
        </article>
    `}function c(e){e&&(window.location.hash=`/${e}`)}function $(e,r){const l=document.getElementById(r);if(!l||!e.contains(l))return;const o=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;l.scrollIntoView({behavior:o?"auto":"smooth",block:"start"}),l.focus({preventScroll:!0})}function E(){const e=d.filter(o=>o.id!==p).length,r=document.createElement("section");r.className="w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans",r.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-2xl md:px-12 md:py-16">
            <div class="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-700/25"></div>
            <div class="absolute right-10 top-10 hidden h-28 w-28 rotate-6 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-sky-300 lg:flex">
                ${a("bx-brain","text-6xl")}
            </div>

            <button
                id="cerrar-sesion-kernel"
                type="button"
                class="relative z-20 mb-8 ml-auto flex rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/20 disabled:cursor-wait disabled:opacity-60 sm:absolute sm:right-5 sm:top-5 sm:mb-0"
            >
                Cerrar sesión
            </button>

            <div class="relative z-10 max-w-4xl">
                <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sky-300">
                    ${a("bx-atom","text-xl")}
                    <span class="text-xs font-black uppercase tracking-[0.20em] md:text-sm">Grupo de Investigación El Kernel</span>
                </div>

                <h1 class="mb-6 max-w-3xl text-4xl font-black leading-tight md:text-6xl">Laboratorio Inteligente de Investigación</h1>
                <p class="max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                    Organice su proceso estadístico desde la selección de la prueba hasta la interpretación y comunicación de los resultados.
                </p>

                <div class="mt-8 flex flex-wrap gap-3">
                    <span class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-sky-300">
                        ${a("bx-check-shield","text-xl")}<span class="text-white">Orientación KSDE 2.0</span>
                    </span>
                    <span class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-emerald-300">
                        ${a("bx-calculator","text-xl")}<span class="text-white">${e} herramientas directas</span>
                    </span>
                    <span class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-amber-300">
                        ${a("bx-book-open","text-xl")}<span class="text-white">Apoyo metodológico</span>
                    </span>
                </div>
            </div>
        </header>

        <section class="mt-12" aria-labelledby="como-comenzar-laboratorio">
            <div class="mb-7 max-w-3xl">
                <p class="mb-2 text-sm font-black uppercase tracking-widest text-[#0D6EFD]">Punto de entrada</p>
                <h2 id="como-comenzar-laboratorio" class="text-3xl font-black text-slate-950 md:text-4xl">¿Cómo desea comenzar?</h2>
                <p class="mt-3 leading-relaxed text-slate-600">
                    Seleccione el recorrido que corresponda a su nivel de seguridad metodológica. Ambos conducen a las mismas herramientas validadas.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                ${g()}
                ${h()}
            </div>
        </section>

        <section class="mt-14" aria-labelledby="flujo-laboratorio">
            <div class="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div class="max-w-3xl">
                    <p class="mb-2 text-sm font-black uppercase tracking-widest text-[#0D6EFD]">Ruta de trabajo</p>
                    <h2 id="flujo-laboratorio" class="text-3xl font-black text-slate-950 md:text-4xl">Orientar → Analizar → Interpretar → Reportar</h2>
                    <p class="mt-3 leading-relaxed text-slate-600">
                        El laboratorio organiza las decisiones en una secuencia comprensible sin obligar a los usuarios expertos a recorrer pasos innecesarios.
                    </p>
                </div>
                <p class="text-sm font-semibold text-slate-500">Cuatro etapas conectadas</p>
            </div>

            <ol class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                ${u.map(w).join("")}
            </ol>
        </section>

        <section
            id="catalogo-analisis"
            tabindex="-1"
            class="mt-16 scroll-mt-28 focus:outline-none"
            aria-labelledby="titulo-catalogo-analisis"
        >
            <div class="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div class="max-w-3xl">
                    <p class="mb-2 text-sm font-black uppercase tracking-widest text-emerald-700">Modo directo</p>
                    <h2 id="titulo-catalogo-analisis" class="text-3xl font-black text-slate-950 md:text-4xl">Seleccione el área de análisis</h2>
                    <p class="mt-3 leading-relaxed text-slate-600">
                        Las herramientas se agrupan por la tarea científica que desea realizar, no por una lista aislada de nombres técnicos.
                    </p>
                </div>
                <div class="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                    ${a("bx-grid-alt","text-xl")}
                    ${e} herramientas organizadas
                </div>
            </div>

            <div class="space-y-7">
                ${b.map(k).join("")}
            </div>

            <aside class="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-6 md:p-8">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div class="flex items-start gap-4">
                        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-700">
                            ${a("bx-help-circle","text-2xl")}
                        </div>
                        <div>
                            <h3 class="text-xl font-black text-slate-950">¿La clasificación directa no coincide con su problema?</h3>
                            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                                Regrese al modo guiado para que KSDE 2.0 determine qué información falta y cuál es la ruta metodológica más adecuada.
                            </p>
                        </div>
                    </div>
                    <a
                        href="#/asistentePruebas"
                        data-route="asistentePruebas"
                        class="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-black text-white shadow-md transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                    >
                        Abrir asistente
                        ${a("bx-right-arrow-alt","text-xl")}
                    </a>
                </div>
            </aside>
        </section>
    `,r.addEventListener("click",o=>{const i=o.target.closest("[data-route]");if(i&&r.contains(i)){o.preventDefault(),c(i.dataset.route);return}const n=o.target.closest("[data-scroll-target]");n&&r.contains(n)&&$(r,n.dataset.scrollTarget)});const l=r.querySelector("#cerrar-sesion-kernel");return l?.addEventListener("click",async()=>{l.disabled=!0,l.textContent="Cerrando…";try{await x(),c("home")}catch(o){console.error("[Kernel] No fue posible cerrar la sesión.",o),l.disabled=!1,l.textContent="Cerrar sesión"}}),r}export{E as LaboratorioKernel};
