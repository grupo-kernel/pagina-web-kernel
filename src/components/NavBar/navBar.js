function itemRuta(ruta, etiqueta, icono) {
    return `
        <li>
            <button
                type="button"
                data-route="${ruta}"
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
            >
                <span>${etiqueta}</span>
                <i aria-hidden="true" class="bx ${icono} shrink-0 text-2xl"></i>
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
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 2xl:text-base"
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
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
            >
                <span class="flex items-center gap-2">
                    <i aria-hidden="true" class="bx ${icono} shrink-0 text-2xl"></i>
                    <span>${etiqueta}</span>
                </span>
                <i data-submenu-caret aria-hidden="true" class="bx bx-caret-down shrink-0 text-xl transition-transform"></i>
            </button>

            <ul
                id="${id}"
                data-submenu-panel
                class="
                    relative
                    z-[260]
                    mt-2
                    hidden
                    w-full
                    flex-col
                    gap-1
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-2
                    text-slate-800
                    shadow-2xl

                    lg:absolute
                    lg:left-0
                    lg:top-[calc(100%+0.35rem)]
                    lg:z-[260]
                    lg:mt-0
                    lg:w-72
                    lg:min-w-72
                "
            >
                ${elementos.join("")}
            </ul>
        </li>
    `;
}

export function createNavBar() {
    return `
        <div class="mb-7 flex w-full items-center justify-between border-b border-zinc-500 px-2.5 pb-2.5 lg:hidden">
            <span class="text-4xl font-medium">El Kernel</span>
            <button type="button" data-action="close-navBar" aria-label="Cerrar navegación" class="rounded-xl p-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100">
                <i aria-hidden="true" class="bx bx-x text-6xl"></i>
            </button>
        </div>

        <ul class="relative z-[230] flex w-full flex-col gap-2 p-3 text-black lg:flex-row lg:items-center lg:justify-end lg:gap-2 lg:p-0 xl:gap-4">
            ${itemRuta("home", "Portada", "bx-home")}

            ${submenu({
                id: "submenu-nosotros",
                etiqueta: "Nosotros",
                icono: "bx-group",
                elementos: [
                    itemSubmenu("quienesSomos", "Quiénes somos", "bx-info-circle"),
                    itemSubmenu("equipment", "Equipo", "bx-group")
                ]
            })}

            ${submenu({
                id: "submenu-nuestro-trabajo",
                etiqueta: "Nuestro Trabajo",
                icono: "bx-briefcase-alt-2",
                elementos: [
                    itemSubmenu("lineas", "Líneas de investigación", "bx-git-branch"),
                    itemSubmenu("proyectos", "Proyectos", "bx-bulb"),
                    itemSubmenu("publicaciones", "Publicaciones", "bx-book-open"),
                    itemSubmenu("herramientas", "Herramientas", "bx-wrench")
                ]
            })}

            <li>
                <button
                    type="button"
                    data-route="laboratorioKernel"
                    class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
                >
                    <span class="flex flex-col leading-none lg:items-center lg:text-center">
                        <span>Laboratorio Inteligente</span>
                        <span class="mt-1 text-xs font-semibold text-slate-500 xl:text-sm">de Investigación</span>
                    </span>
                    <i aria-hidden="true" class="bx bx-bar-chart-alt-2 shrink-0 text-2xl"></i>
                </button>
            </li>

            ${itemRuta("noticias", "Noticias", "bx-news")}
            ${itemRuta("contacto", "Contacto", "bx-envelope")}
        </ul>
    `;
}
