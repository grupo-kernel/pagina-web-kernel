import {
    CATALOGO_SERVICIOS,
    CATEGORIAS_SERVICIOS
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

function nombreCategoria(id) {
    return CATEGORIAS_SERVICIOS.find((categoria) => categoria.id === id)?.nombre
        || "Servicio especializado";
}

function crearPestanaCategoria(categoria, activa = false) {
    return `
        <button
            type="button"
            data-filtro-servicio="${escapar(categoria.id)}"
            aria-pressed="${activa}"
            class="shrink-0 rounded-full border px-4 py-2 text-sm font-black transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 ${activa
                ? "border-sky-700 bg-sky-700 text-white shadow-md"
                : "border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-800"}"
        >
            ${escapar(categoria.nombre)}
        </button>
    `;
}

function crearTarjetaServicio(servicio) {
    const textoBusqueda = normalizar([
        servicio.titulo,
        servicio.resumen,
        servicio.descripcion,
        nombreCategoria(servicio.categoria),
        ...(servicio.incluye || []),
        ...(servicio.dirigidoA || [])
    ].join(" "));

    return `
        <article
            data-servicio-card
            data-servicio-id="${escapar(servicio.id)}"
            data-categoria="${escapar(servicio.categoria)}"
            data-busqueda="${escapar(textoBusqueda)}"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
        >
            <div class="mb-5 flex items-start justify-between gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-sky-800 transition-transform duration-300 group-hover:scale-110">
                    ${iconoLaboratorio(servicio.icono, "text-3xl")}
                </div>
                ${servicio.destacado
                    ? '<span class="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-amber-800">Destacado</span>'
                    : ""}
            </div>

            <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">
                ${escapar(nombreCategoria(servicio.categoria))}
            </p>
            <h3 class="text-xl font-black leading-tight text-slate-900 md:text-2xl">
                ${escapar(servicio.titulo)}
            </h3>
            <p class="mt-4 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                ${escapar(servicio.resumen)}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                ${(servicio.incluye || []).slice(0, 2).map((elemento) => `
                    <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                        ${escapar(elemento.replace(/\.$/, ""))}
                    </span>
                `).join("")}
            </div>

            <button
                type="button"
                data-servicio-detalle="${escapar(servicio.id)}"
                class="mt-6 inline-flex items-center justify-between gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-black text-sky-800 transition-colors hover:border-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                aria-label="Explorar el alcance de ${escapar(servicio.titulo)}"
            >
                Explorar servicio
                ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
            </button>
        </article>
    `;
}

function listaElementos(elementos) {
    return `
        <ul class="space-y-3">
            ${(elementos || []).map((elemento) => `
                <li class="flex items-start gap-3 text-sm leading-relaxed text-slate-700 md:text-base">
                    <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                        ${iconoLaboratorio("bx-check-shield", "text-sm")}
                    </span>
                    <span>${escapar(elemento)}</span>
                </li>
            `).join("")}
        </ul>
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
                                ${escapar(nombreCategoria(servicio.categoria))}
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
                <p class="mt-6 max-w-4xl text-base leading-relaxed text-slate-200 md:text-lg">
                    ${escapar(servicio.descripcion)}
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8 px-6 py-7 md:px-9 md:py-9 lg:grid-cols-2">
                <section aria-labelledby="titulo-incluye-servicio">
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Alcance orientativo</p>
                    <h3 id="titulo-incluye-servicio" class="mb-5 text-xl font-black text-slate-900 md:text-2xl">El servicio puede incluir</h3>
                    ${listaElementos(servicio.incluye)}
                </section>

                <section aria-labelledby="titulo-dirigido-servicio">
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-violet-700">Público principal</p>
                    <h3 id="titulo-dirigido-servicio" class="mb-5 text-xl font-black text-slate-900 md:text-2xl">Dirigido a</h3>
                    ${listaElementos(servicio.dirigidoA)}
                </section>
            </div>

            <div class="border-t border-slate-200 bg-slate-50 px-6 py-6 md:px-9">
                <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p class="max-w-2xl text-sm leading-relaxed text-slate-600">
                        El alcance, los productos de trabajo y el calendario se definen después de revisar la necesidad específica del proyecto.
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

        <div class="relative z-10">
            <div class="grid grid-cols-1 gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                    <p class="mb-2 text-sm font-black uppercase tracking-widest text-sky-700">Servicios científicos y académicos</p>
                    <h2 id="titulo-catalogo-servicios" class="max-w-4xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                        Explore cómo podemos apoyar su proyecto
                    </h2>
                    <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                        El catálogo reúne áreas de acompañamiento sustentadas en la experiencia del grupo en investigación, estadística, matemática computacional, educación y desarrollo de herramientas científicas.
                    </p>
                </div>

                <aside class="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
                    <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">Atención personalizada</p>
                    <h3 class="mt-2 text-2xl font-black">Cada solicitud se delimita antes de iniciar</h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-300">
                        Revisamos el objetivo, el estado del proyecto y los productos esperados para proponer un alcance responsable y verificable.
                    </p>
                    <a href="#/contacto" class="mt-5 inline-flex items-center gap-2 font-black text-sky-300 hover:text-white">
                        Contactar al grupo
                        ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
                    </a>
                </aside>
            </div>

            <div class="mt-9 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm md:p-5">
                <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div class="min-w-0 flex-1">
                        <label for="buscador-catalogo-servicios" class="sr-only">Buscar en el catálogo de servicios</label>
                        <div class="relative">
                            <span class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                                ${iconoLaboratorio("bx-grid-alt", "text-xl")}
                            </span>
                            <input
                                id="buscador-catalogo-servicios"
                                type="search"
                                data-buscador-servicios
                                autocomplete="off"
                                placeholder="Buscar por necesidad, método o área..."
                                class="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100 md:text-base"
                            />
                        </div>
                    </div>
                    <p data-contador-servicios class="shrink-0 text-sm font-bold text-slate-500" aria-live="polite">
                        ${CATALOGO_SERVICIOS.length} servicios disponibles
                    </p>
                </div>

                <div class="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar servicios por categoría">
                    ${CATEGORIAS_SERVICIOS.map((categoria, indice) => crearPestanaCategoria(categoria, indice === 0)).join("")}
                </div>
            </div>

            <div data-rejilla-servicios class="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                ${CATALOGO_SERVICIOS.map(crearTarjetaServicio).join("")}
            </div>

            <div data-vacio-servicios class="mt-7 hidden rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                    ${iconoLaboratorio("bx-grid-alt", "text-3xl")}
                </div>
                <h3 class="mt-4 text-xl font-black text-slate-900">No encontramos coincidencias</h3>
                <p class="mt-2 text-sm text-slate-600">Pruebe otra palabra o seleccione una categoría diferente.</p>
            </div>
        </div>

        <dialog
            data-dialogo-servicio
            class="m-auto max-h-[90vh] w-[min(94vw,980px)] overflow-y-auto rounded-[2rem] bg-transparent p-0 shadow-2xl backdrop:bg-slate-950/75"
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
