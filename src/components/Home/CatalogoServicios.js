import {
    CATALOGO_META,
    CATALOGO_SERVICIOS,
    CATEGORIAS_SERVICIOS,
    MODALIDADES_SERVICIO,
    PAQUETES_INSTITUCIONALES,
    PRINCIPIOS_SERVICIO,
    PROCESO_SERVICIO,
    PROPUESTA_VALOR,
    SECTORES_DESTINATARIOS
} from "../../data/catalogoServicios.js";
import { iconoLaboratorio } from "../../utils/iconosLaboratorio.js";

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function normalizar(texto) {
    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function crearFiltroCategoria(categoria, activa = false) {
    return `
        <button
            type="button"
            data-filtro-servicio="${escapar(categoria.id)}"
            aria-pressed="${activa}"
            class="shrink-0 rounded-full border px-4 py-2 text-sm font-black transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 ${activa
                ? "border-sky-700 bg-sky-700 text-white shadow-md"
                : "border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-800"}"
        >
            <span>${escapar(categoria.nombre)}</span>
            <span class="ml-1 text-xs opacity-75">${escapar(categoria.rango)}</span>
        </button>
    `;
}

function crearTarjetaServicio(servicio) {
    const textoBusqueda = normalizar([
        servicio.numero,
        servicio.titulo,
        servicio.tituloCorto,
        servicio.resumen,
        servicio.descripcion,
        servicio.categoriaNombre,
        ...(servicio.subservicios || []),
        servicio.entregables
    ].join(" "));

    return `
        <article
            data-servicio-card
            data-servicio-id="${escapar(servicio.id)}"
            data-categoria="${escapar(servicio.categoria)}"
            data-busqueda="${escapar(textoBusqueda)}"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:p-6"
        >
            <div class="mb-5 flex items-start justify-between gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-sky-800 transition-transform duration-300 group-hover:scale-110">
                    ${iconoLaboratorio(servicio.icono, "text-3xl")}
                </div>
                <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-600">
                    ${String(servicio.numero).padStart(2, "0")}
                </span>
            </div>

            <p class="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-sky-700">
                ${escapar(servicio.categoriaNombre)}
            </p>
            <h3 class="text-xl font-black leading-tight text-slate-950 md:text-2xl">
                ${escapar(servicio.tituloCorto)}
            </h3>
            <p class="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                ${escapar(servicio.titulo)}
            </p>
            <p class="mt-4 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                ${escapar(servicio.resumen)}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                ${(servicio.subservicios || []).slice(0, 2).map((elemento) => {
                    const etiqueta = elemento.split(":")[0];
                    return `
                        <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                            ${escapar(etiqueta)}
                        </span>
                    `;
                }).join("")}
            </div>

            <button
                type="button"
                data-servicio-detalle="${escapar(servicio.id)}"
                class="mt-6 inline-flex items-center justify-between gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-black text-sky-800 transition-colors hover:border-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                aria-label="Explorar ${escapar(servicio.titulo)}"
            >
                Explorar servicio
                ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
            </button>
        </article>
    `;
}

function crearTarjetaValor(item) {
    return `
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 class="font-black text-white">${escapar(item.titulo)}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-300">${escapar(item.descripcion)}</p>
        </article>
    `;
}

function crearPaquete(paquete) {
    return `
        <article class="min-w-[280px] flex-1 rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm md:min-w-[330px]">
            <div class="flex items-center justify-between gap-3">
                <span class="rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-amber-900">Paquete ${paquete.numero}</span>
                ${iconoLaboratorio("bx-grid-alt", "text-2xl text-amber-800")}
            </div>
            <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${escapar(paquete.titulo)}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-700">${escapar(paquete.descripcion)}</p>
        </article>
    `;
}

function crearPaso(paso) {
    return `
        <li class="relative flex gap-4 pb-6 last:pb-0">
            <span class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-black text-white shadow-md">
                ${paso.numero}
            </span>
            <div class="pt-1">
                <h4 class="font-black text-slate-950">${escapar(paso.titulo)}</h4>
                <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapar(paso.descripcion)}</p>
            </div>
        </li>
    `;
}

function crearModalidad(modalidad) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-4">
            <h4 class="font-black text-slate-950">${escapar(modalidad.titulo)}</h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">${escapar(modalidad.descripcion)}</p>
        </article>
    `;
}

function crearPrincipio(principio) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div class="flex items-start gap-3">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">P${principio.numero}</span>
                <div>
                    <h4 class="font-black text-slate-950">${escapar(principio.titulo)}</h4>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapar(principio.descripcion)}</p>
                </div>
            </div>
        </article>
    `;
}

function crearSubservicios(servicio) {
    return `
        <ol class="grid grid-cols-1 gap-3 lg:grid-cols-2">
            ${(servicio.subservicios || []).map((elemento, indice) => `
                <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    <span class="mt-0.5 flex h-8 min-w-8 items-center justify-center rounded-full bg-sky-100 px-2 text-xs font-black text-sky-800">
                        ${servicio.numero}.${indice + 1}
                    </span>
                    <span>${escapar(elemento)}</span>
                </li>
            `).join("")}
        </ol>
    `;
}

function contenidoDialogo(servicio) {
    const asunto = encodeURIComponent(`Solicitud de servicio: ${servicio.titulo}`);

    return `
        <div class="relative overflow-hidden rounded-[2rem] bg-white">
            <div class="bg-slate-950 px-6 py-7 text-white md:px-9 md:py-9">
                <div class="flex items-start justify-between gap-5">
                    <div class="flex min-w-0 items-start gap-4">
                        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sky-300">
                            ${iconoLaboratorio(servicio.icono, "text-3xl")}
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">
                                Servicio ${String(servicio.numero).padStart(2, "0")} · ${escapar(servicio.categoriaNombre)}
                            </p>
                            <h2 class="mt-2 text-2xl font-black leading-tight md:text-4xl">
                                ${escapar(servicio.titulo)}
                            </h2>
                        </div>
                    </div>
                    <button
                        type="button"
                        data-cerrar-dialogo-servicio
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40"
                        aria-label="Cerrar detalle del servicio"
                    >
                        <span aria-hidden="true" class="text-2xl leading-none">×</span>
                    </button>
                </div>
                <p class="mt-6 max-w-5xl text-base leading-relaxed text-slate-200 md:text-lg">
                    ${escapar(servicio.descripcion)}
                </p>
            </div>

            <div class="space-y-8 px-6 py-7 md:px-9 md:py-9">
                <section aria-labelledby="titulo-componentes-servicio">
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Componentes del servicio</p>
                    <h3 id="titulo-componentes-servicio" class="mb-5 text-xl font-black text-slate-950 md:text-2xl">
                        Alcance técnico y académico
                    </h3>
                    ${crearSubservicios(servicio)}
                </section>

                <section class="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 md:p-6" aria-labelledby="titulo-entregables-servicio">
                    <p class="text-xs font-black uppercase tracking-widest text-emerald-800">Entregables habituales</p>
                    <h3 id="titulo-entregables-servicio" class="mt-2 text-xl font-black text-slate-950">Productos posibles</h3>
                    <p class="mt-3 leading-relaxed text-slate-700">${escapar(servicio.entregables)}</p>
                </section>
            </div>

            <div class="border-t border-slate-200 bg-slate-50 px-6 py-6 md:px-9">
                <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p class="max-w-2xl text-sm leading-relaxed text-slate-600">
                        El alcance, los responsables, los aliados requeridos, los productos, el calendario y la tarifa se definen después del diagnóstico inicial.
                    </p>
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <a
                            href="mailto:mleonardos@unapec.edu.do?subject=${asunto}"
                            class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 transition hover:border-sky-400 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                        >
                            Escribir por correo
                            ${iconoLaboratorio("bx-right-arrow-alt", "text-lg")}
                        </a>
                        <a
                            href="#/contacto"
                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-black text-white shadow-md transition hover:bg-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                        >
                            Solicitar información
                            ${iconoLaboratorio("bx-right-arrow-alt", "text-lg")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function CrearCatalogoServicios() {
    const section = document.createElement("section");
    section.id = "catalogo-servicios";
    section.className =
        "relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-9 shadow-lg md:px-8 md:py-12 xl:px-10";
    section.setAttribute("aria-labelledby", "titulo-catalogo-servicios");

    section.innerHTML = `
        <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>
        <div class="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl"></div>

        <div class="relative z-10 space-y-10">
            <header class="grid grid-cols-1 gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                    <p class="mb-2 text-sm font-black uppercase tracking-widest text-sky-700">Catálogo institucional 2026</p>
                    <h2 id="titulo-catalogo-servicios" class="max-w-5xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                        ${escapar(CATALOGO_META.titulo)}
                    </h2>
                    <p class="mt-4 text-sm font-bold text-slate-500 md:text-base">${escapar(CATALOGO_META.subtitulo)}</p>
                    <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg">
                        ${escapar(CATALOGO_META.introduccion)}
                    </p>
                    <p class="mt-5 border-l-4 border-amber-500 pl-4 text-base font-black italic text-slate-800 md:text-lg">
                        “${escapar(CATALOGO_META.lema)}”
                    </p>
                </div>

                <aside class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl">
                    <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">Alcance responsable</p>
                    <h3 class="mt-2 text-2xl font-black">Cada solicitud se delimita antes de iniciar</h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-300">${escapar(CATALOGO_META.notaAlcance)}</p>
                    <a href="#/contacto" class="mt-5 inline-flex items-center gap-2 font-black text-sky-300 hover:text-white">
                        Contactar al grupo
                        ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
                    </a>
                </aside>
            </header>

            <section class="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Resumen del catálogo">
                ${[
                    [CATALOGO_SERVICIOS.length, "áreas de servicio"],
                    [CATEGORIAS_SERVICIOS.length - 1, "bloques temáticos"],
                    [PAQUETES_INSTITUCIONALES.length, "paquetes sugeridos"],
                    [PROCESO_SERVICIO.length, "etapas de trabajo"]
                ].map(([valor, etiqueta]) => `
                    <article class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                        <p class="text-3xl font-black text-sky-800">${valor}</p>
                        <p class="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">${etiqueta}</p>
                    </article>
                `).join("")}
            </section>

            <section class="rounded-3xl bg-slate-950 p-5 text-white md:p-6" aria-labelledby="titulo-propuesta-valor">
                <div class="mb-5">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-300">Propuesta de valor</p>
                    <h3 id="titulo-propuesta-valor" class="mt-2 text-2xl font-black md:text-3xl">Rigor, adaptación y transferencia</h3>
                </div>
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    ${PROPUESTA_VALOR.map(crearTarjetaValor).join("")}
                </div>
            </section>

            <section aria-labelledby="titulo-explorar-servicios">
                <div class="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm md:p-5">
                    <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                        <div class="min-w-0 flex-1">
                            <label for="buscador-catalogo-servicios" class="sr-only">Buscar en el catálogo de servicios</label>
                            <input
                                id="buscador-catalogo-servicios"
                                type="search"
                                data-buscador-servicios
                                autocomplete="off"
                                placeholder="Buscar por necesidad, método, sector o área..."
                                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100 md:text-base"
                            />
                        </div>
                        <p data-contador-servicios class="shrink-0 text-sm font-bold text-slate-500" aria-live="polite">
                            ${CATALOGO_SERVICIOS.length} servicios disponibles
                        </p>
                    </div>

                    <div class="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar servicios por categoría">
                        ${CATEGORIAS_SERVICIOS.map((categoria, indice) => crearFiltroCategoria(categoria, indice === 0)).join("")}
                    </div>
                </div>

                <div class="mt-7 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-sky-700">Exploración digital</p>
                        <h3 id="titulo-explorar-servicios" class="mt-1 text-2xl font-black text-slate-950 md:text-3xl">Seleccione un servicio para conocer su alcance</h3>
                    </div>
                </div>

                <div data-rejilla-servicios class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    ${CATALOGO_SERVICIOS.map(crearTarjetaServicio).join("")}
                </div>

                <div data-vacio-servicios class="mt-7 hidden rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
                    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        ${iconoLaboratorio("bx-grid-alt", "text-3xl")}
                    </div>
                    <h3 class="mt-4 text-xl font-black text-slate-950">No encontramos coincidencias</h3>
                    <p class="mt-2 text-sm text-slate-600">Pruebe otra palabra o seleccione una categoría diferente.</p>
                </div>
            </section>

            <section aria-labelledby="titulo-paquetes-institucionales">
                <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-amber-700">Ofertas fáciles de comunicar y contratar</p>
                        <h3 id="titulo-paquetes-institucionales" class="mt-1 text-2xl font-black text-slate-950 md:text-3xl">Paquetes institucionales sugeridos</h3>
                    </div>
                    <p class="max-w-2xl text-sm leading-relaxed text-slate-600">Los paquetes agrupan varios componentes del catálogo y se ajustan al alcance real de cada institución o proyecto.</p>
                </div>
                <div class="mt-6 flex gap-4 overflow-x-auto pb-3">
                    ${PAQUETES_INSTITUCIONALES.map(crearPaquete).join("")}
                </div>
            </section>

            <section class="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]" aria-labelledby="titulo-como-trabajamos">
                <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-700">Proceso estándar</p>
                    <h3 id="titulo-como-trabajamos" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Cómo se desarrolla un servicio</h3>
                    <ol class="relative mt-6 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-sky-200">
                        ${PROCESO_SERVICIO.map(crearPaso).join("")}
                    </ol>
                </article>

                <div class="space-y-5">
                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm" open>
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Modalidades de contratación</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${MODALIDADES_SERVICIO.map(crearModalidad).join("")}
                        </div>
                    </details>

                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Principios transversales</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${PRINCIPIOS_SERVICIO.map(crearPrincipio).join("")}
                        </div>
                    </details>

                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Sectores y públicos destinatarios</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <ul class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${SECTORES_DESTINATARIOS.map((sector) => `
                                <li class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                                    <span class="mt-0.5 text-sky-700">${iconoLaboratorio("bx-check-shield", "text-lg")}</span>
                                    <span>${escapar(sector)}</span>
                                </li>
                            `).join("")}
                        </ul>
                    </details>
                </div>
            </section>

            <section class="rounded-3xl bg-gradient-to-r from-sky-800 to-blue-950 px-6 py-8 text-white shadow-xl md:px-9" aria-labelledby="titulo-cta-catalogo">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-sky-200">Próximo paso</p>
                        <h3 id="titulo-cta-catalogo" class="mt-2 text-2xl font-black md:text-3xl">Conversemos sobre la necesidad que desea resolver</h3>
                        <p class="mt-3 max-w-3xl text-sm leading-relaxed text-sky-100 md:text-base">La reunión inicial permite identificar el servicio, paquete o alianza más adecuado y definir un alcance verificable.</p>
                    </div>
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <a href="mailto:mleonardos@unapec.edu.do?subject=Solicitud%20de%20informaci%C3%B3n%20sobre%20servicios" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-black text-white hover:bg-white/20">
                            Escribir por correo
                        </a>
                        <a href="#/contacto" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-sky-900 shadow-lg hover:bg-sky-50">
                            Solicitar información
                            ${iconoLaboratorio("bx-right-arrow-alt", "text-lg")}
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <dialog
            data-dialogo-servicio
            class="m-auto max-h-[92vh] w-[min(96vw,1180px)] overflow-y-auto rounded-[2rem] bg-transparent p-0 shadow-2xl backdrop:bg-slate-950/80"
            aria-label="Detalle del servicio"
        ></dialog>
    `;

    const tarjetas = [...section.querySelectorAll("[data-servicio-card]")];
    const botonesFiltro = [...section.querySelectorAll("[data-filtro-servicio]")];
    const buscador = section.querySelector("[data-buscador-servicios]");
    const contador = section.querySelector("[data-contador-servicios]");
    const vacio = section.querySelector("[data-vacio-servicios]");
    const dialogo = section.querySelector("[data-dialogo-servicio]");

    let categoriaActiva = "todos";
    let ultimoDisparador = null;

    function actualizarCatalogo() {
        const consulta = normalizar(buscador?.value);
        let visibles = 0;

        tarjetas.forEach((tarjeta) => {
            const coincideCategoria = categoriaActiva === "todos"
                || tarjeta.dataset.categoria === categoriaActiva;
            const coincideBusqueda = !consulta
                || String(tarjeta.dataset.busqueda || "").includes(consulta);
            const visible = coincideCategoria && coincideBusqueda;

            tarjeta.classList.toggle("hidden", !visible);
            if (visible) visibles += 1;
        });

        if (contador) {
            contador.textContent = `${visibles} servicio${visibles === 1 ? "" : "s"} disponible${visibles === 1 ? "" : "s"}`;
        }
        vacio?.classList.toggle("hidden", visibles !== 0);
    }

    botonesFiltro.forEach((boton) => {
        boton.addEventListener("click", () => {
            categoriaActiva = boton.dataset.filtroServicio || "todos";

            botonesFiltro.forEach((control) => {
                const activo = control === boton;
                control.setAttribute("aria-pressed", String(activo));
                control.classList.toggle("border-sky-700", activo);
                control.classList.toggle("bg-sky-700", activo);
                control.classList.toggle("text-white", activo);
                control.classList.toggle("shadow-md", activo);
                control.classList.toggle("border-slate-300", !activo);
                control.classList.toggle("bg-white", !activo);
                control.classList.toggle("text-slate-700", !activo);
            });

            actualizarCatalogo();
        });
    });

    buscador?.addEventListener("input", actualizarCatalogo);

    section.addEventListener("click", (event) => {
        const disparador = event.target.closest("[data-servicio-detalle]");
        if (!disparador || !section.contains(disparador)) return;

        const servicio = CATALOGO_SERVICIOS.find(
            (item) => item.id === disparador.dataset.servicioDetalle
        );
        if (!servicio || !dialogo) return;

        ultimoDisparador = disparador;
        dialogo.innerHTML = contenidoDialogo(servicio);

        if (typeof dialogo.showModal === "function") {
            dialogo.showModal();
        } else {
            dialogo.setAttribute("open", "");
        }

        dialogo.querySelector("[data-cerrar-dialogo-servicio]")?.focus();
    });

    dialogo?.addEventListener("click", (event) => {
        if (event.target === dialogo || event.target.closest("[data-cerrar-dialogo-servicio]")) {
            dialogo.close?.();
            dialogo.removeAttribute("open");
        }
    });

    dialogo?.addEventListener("close", () => {
        ultimoDisparador?.focus();
        ultimoDisparador = null;
    });

    return section;
}
