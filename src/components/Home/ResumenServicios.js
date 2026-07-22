import {
    CATALOGO_SERVICIOS,
    CATEGORIAS_SERVICIOS
} from "../../data/catalogoServicios.js";
import { iconoLaboratorio } from "../../utils/iconosLaboratorio.js";

const CLAVE_FILTRO_SERVICIOS = "kernel-services-filter";

const CAPACIDADES = Object.freeze([
    Object.freeze({
        titulo: "Investigación y producción científica",
        descripcion: "Proyectos de I+D+i, tesis, publicación, edición y comunicación científica.",
        icono: "bx-book-open",
        categoria: "investigacion"
    }),
    Object.freeze({
        titulo: "Estadística y metodología",
        descripcion: "Diseño de estudios, muestreo, instrumentos, análisis e informes reproducibles.",
        icono: "bx-bar-chart-alt-2",
        categoria: "matematica-datos"
    }),
    Object.freeze({
        titulo: "Matemática computacional y optimización",
        descripcion: "Modelización, simulación, métodos numéricos, algoritmos y decisiones bajo restricciones.",
        icono: "bx-atom",
        categoria: "matematica-datos"
    }),
    Object.freeze({
        titulo: "Ciencia de datos, IA y software científico",
        descripcion: "Modelos predictivos, tableros, automatización, prototipos y transferencia tecnológica.",
        icono: "bx-grid-alt",
        categoria: "tecnologia-transferencia"
    }),
    Object.freeze({
        titulo: "Educación, posgrado y diseño curricular",
        descripcion: "Maestrías, programas académicos, sílabos, formación docente, evaluación y calidad.",
        icono: "bx-group",
        categoria: "educacion"
    }),
    Object.freeze({
        titulo: "Riesgo, finanzas y soluciones sectoriales",
        descripcion: "Actuaría, econometría, políticas públicas, logística, industria y apoyo a decisiones.",
        icono: "bx-trending-up",
        categoria: "riesgo-finanzas"
    })
]);

const DESTACADOS = Object.freeze([1, 7, 12, 15]);

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function tarjetaCapacidad(capacidad) {
    const categoria = CATEGORIAS_SERVICIOS.find((item) => item.id === capacidad.categoria);

    return `
        <a
            href="#/servicios"
            data-resumen-filtro="${escapar(capacidad.categoria)}"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f5b5d]/30 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 md:p-6"
        >
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-[#0f5b5d] transition-transform group-hover:scale-110">
                ${iconoLaboratorio(capacidad.icono, "text-3xl")}
            </span>
            <h3 class="mt-5 text-xl font-black leading-tight text-slate-950">${escapar(capacidad.titulo)}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">${escapar(capacidad.descripcion)}</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f5b5d]">
                Explorar ${escapar(categoria?.rango || "servicios")}
                ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
            </span>
        </a>
    `;
}

function tarjetaDestacado(servicio) {
    return `
        <article class="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:p-6">
            <div class="flex items-start justify-between gap-4">
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d5a54a]/30 bg-[#d5a54a]/10 text-[#efc86f]">
                    ${iconoLaboratorio(servicio.icono, "text-2xl")}
                </span>
                <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black text-slate-300">${String(servicio.numero).padStart(2, "0")}</span>
            </div>
            <h3 class="mt-5 text-xl font-black leading-tight text-white">${escapar(servicio.tituloCorto)}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-300">${escapar(servicio.resumen)}</p>
            <a href="#/servicios" class="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#efc86f] hover:text-white">
                Ver alcance y entregables
                ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
            </a>
        </article>
    `;
}

export function CrearResumenServicios() {
    const section = document.createElement("section");
    section.id = "servicios-portada";
    section.className = "mx-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-lg sm:mx-6 lg:mx-8 xl:mx-10";
    section.setAttribute("aria-labelledby", "titulo-servicios-portada");

    const serviciosDestacados = DESTACADOS
        .map((numero) => CATALOGO_SERVICIOS.find((servicio) => servicio.numero === numero))
        .filter(Boolean);

    section.innerHTML = `
        <div class="px-5 py-10 md:px-8 md:py-14 xl:px-10">
            <div class="grid grid-cols-1 gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                    <p class="text-sm font-black uppercase tracking-[0.18em] text-[#b37a2a]">Servicios profesionales y académicos</p>
                    <h2 id="titulo-servicios-portada" class="mt-3 max-w-4xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">Capacidades organizadas para resolver necesidades concretas</h2>
                    <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">La portada presenta las capacidades principales. El catálogo completo reúne 20 áreas con alcance técnico, componentes, entregables, modalidades y principios de trabajo.</p>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
                    <a href="#/servicios" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                        Ver los 20 servicios
                        ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
                    </a>
                    <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c38d36] bg-white px-5 py-3.5 font-black text-[#805615] transition hover:bg-amber-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-100">
                        Solicitar diagnóstico
                        ${iconoLaboratorio("bx-check-shield", "text-xl")}
                    </a>
                </div>
            </div>

            <div class="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                ${CAPACIDADES.map(tarjetaCapacidad).join("")}
            </div>
        </div>

        <div class="bg-[#071820] px-5 py-10 text-white md:px-8 md:py-12 xl:px-10">
            <div class="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Servicios destacados</p>
                    <h2 class="mt-2 text-2xl font-black md:text-4xl">Cuatro puertas de entrada al catálogo</h2>
                </div>
                <p class="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">Cada solicitud se delimita antes de iniciar; el alcance, responsables, aliados, entregables, calendario y tarifa se definen después del diagnóstico.</p>
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                ${serviciosDestacados.map(tarjetaDestacado).join("")}
            </div>
        </div>
    `;

    section.addEventListener("click", (event) => {
        const acceso = event.target.closest("[data-resumen-filtro]");
        if (!acceso || !section.contains(acceso)) return;

        try {
            window.sessionStorage.setItem(CLAVE_FILTRO_SERVICIOS, acceso.dataset.resumenFiltro || "todos");
        } catch (error) {
            console.warn("[Kernel] No fue posible conservar el filtro del catálogo.", error);
        }
    });

    return section;
}
