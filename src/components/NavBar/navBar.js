function itemRuta(ruta, etiqueta, icono, clases = "") {
    return `
        <li class="${clases}">
            <button
                type="button"
                data-route="${ruta}"
                class="flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:w-auto lg:justify-center lg:px-2 lg:py-2 lg:text-sm xl:px-3 xl:text-base 2xl:text-lg"
            >
                <span>${etiqueta}</span>
                <i aria-hidden="true" class="bx ${icono} shrink-0 text-2xl lg:text-xl"></i>
            </button>
        </li>
    `;
}

function itemSubmenu(ruta, etiqueta, icono) {
    return `
        <li>
            <button
                type="button"
                data-route="${ruta}"
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-slate-700 transition-colors hover:bg-[#0f5b5d] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 2xl:text-base"
            >
                <i aria-hidden="true" class="bx ${icono} shrink-0 text-xl"></i>
                <span>${etiqueta}</span>
            </button>
        </li>
    `;
}

function submenu({ id, etiqueta, icono, elementos }) {
    return `
        <li data-submenu class="relative min-w-0">
            <button
                type="button"
                data-action="toggle-submenu"
                aria-expanded="false"
                aria-controls="${id}"
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:w-auto lg:px-2 lg:py-2 lg:text-sm xl:px-3 xl:text-base 2xl:text-lg"
            >
                <span class="flex items-center gap-2">
                    <i aria-hidden="true" class="bx ${icono} shrink-0 text-2xl lg:text-xl"></i>
                    <span>${etiqueta}</span>
                </span>
                <i data-submenu-caret aria-hidden="true" class="bx bx-caret-down shrink-0 text-xl transition-transform"></i>
            </button>

            <ul
                id="${id}"
                data-submenu-panel
                class="relative z-[260] mt-2 hidden w-full flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-2xl lg:absolute lg:left-0 lg:top-full lg:z-[260] lg:mt-2 lg:w-72 lg:min-w-72"
            >
                ${elementos.join("")}
            </ul>
        </li>
    `;
}

function accesoDiagnostico() {
    return `
        <li class="mt-2 lg:mt-0 lg:ml-1">
            <button
                type="button"
                data-route="diagnosticoServicios"
                class="flex w-full items-center justify-between gap-3 rounded-xl bg-[#d5a54a] px-4 py-3 text-left text-base font-black text-[#06141a] shadow-md transition hover:bg-[#efc86f] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 lg:w-auto lg:justify-center lg:px-4 lg:py-2.5 lg:text-sm xl:text-base"
            >
                <span>Solicitar diagnóstico</span>
                <i aria-hidden="true" class="bx bx-right-arrow-alt shrink-0 text-2xl"></i>
            </button>
        </li>
    `;
}

export function createNavBar() {
    return `
        <div class="mb-5 flex w-full items-center justify-between border-b border-slate-200 px-3 pb-4 lg:hidden">
            <div>
                <p class="text-2xl font-black text-slate-950">El Kernel</p>
                <p class="mt-1 text-xs font-semibold text-slate-500">Investigación y servicios científicos</p>
            </div>
            <button type="button" data-action="close-navBar" aria-label="Cerrar navegación" class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                <i aria-hidden="true" class="bx bx-x text-3xl"></i>
            </button>
        </div>

        <ul class="relative z-[230] flex min-h-full w-full flex-col gap-1 p-3 text-black lg:min-h-0 lg:flex-row lg:items-center lg:justify-end lg:gap-0.5 lg:p-0 xl:gap-1">
            ${itemRuta("home", "Portada", "bx-home")}
            ${itemRuta("servicios", "Servicios", "bx-grid-alt")}
            ${itemRuta("laboratorioKernel", "Laboratorio", "bx-bar-chart-alt-2")}

            ${submenu({
                id: "submenu-nuestro-trabajo",
                etiqueta: "Investigación",
                icono: "bx-briefcase-alt-2",
                elementos: [
                    itemSubmenu("lineas", "Líneas de investigación", "bx-git-branch"),
                    itemSubmenu("proyectos", "Proyectos", "bx-bulb"),
                    itemSubmenu("publicaciones", "Publicaciones", "bx-book-open"),
                    itemSubmenu("herramientas", "Herramientas", "bx-wrench")
                ]
            })}

            ${submenu({
                id: "submenu-nosotros",
                etiqueta: "Nosotros",
                icono: "bx-group",
                elementos: [
                    itemSubmenu("quienesSomos", "Quiénes somos", "bx-info-circle"),
                    itemSubmenu("equipment", "Equipo", "bx-group")
                ]
            })}

            ${itemRuta("noticias", "Noticias", "bx-news", "lg:hidden 2xl:block")}
            ${itemRuta("contacto", "Contacto", "bx-envelope", "lg:hidden xl:block")}
            ${accesoDiagnostico()}
        </ul>
    `;
}
