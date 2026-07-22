export function createNavBar() {
    return `
        <div class="lg:hidden border-b border-zinc-200 pb-3 w-full flex px-3 justify-between items-center mb-5">
            <span class="text-3xl font-black text-slate-900">El Kernel</span>
            <button
                type="button"
                data-action="close-navBar"
                class="flex h-12 w-12 items-center justify-center rounded-xl text-4xl text-slate-800 hover:bg-slate-100"
                aria-label="Cerrar menú principal"
            >
                <i aria-hidden="true" class="bx bx-x"></i>
            </button>
        </div>

        <ul class="flex w-full flex-col gap-2 overflow-visible p-3 text-black lg:flex-row lg:items-center lg:justify-end lg:gap-2 lg:p-0 xl:gap-4">
            <li
                data-route="home"
                class="flex cursor-pointer items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 lg:text-base xl:text-lg 2xl:text-xl"
            >
                <span>Portada</span>
                <i aria-hidden="true" class="bx bx-home text-xl"></i>
            </li>

            <li data-submenu class="relative whitespace-nowrap">
                <button
                    type="button"
                    data-action="open-subMenu"
                    aria-expanded="false"
                    aria-controls="submenu-nosotros"
                    class="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:text-base xl:text-lg 2xl:text-xl"
                >
                    <span>Nosotros</span>
                    <i aria-hidden="true" class="bx bx-caret-down text-xl transition-transform"></i>
                </button>

                <ul
                    id="submenu-nosotros"
                    data-submenu-panel
                    class="z-[240] mt-2 hidden w-full flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-2 text-base shadow-2xl ring-1 ring-slate-950/5 lg:absolute lg:left-0 lg:top-[calc(100%+0.35rem)] lg:mt-0 lg:min-w-[16rem]"
                >
                    <li data-route="quienesSomos" class="cursor-pointer rounded-xl px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white">
                        <span>Quiénes somos</span>
                    </li>
                    <li data-route="equipment" class="cursor-pointer rounded-xl px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white">
                        <span>Equipo</span>
                    </li>
                </ul>
            </li>

            <li data-submenu class="relative whitespace-nowrap">
                <button
                    type="button"
                    data-action="open-subMenu"
                    aria-expanded="false"
                    aria-controls="submenu-nuestro-trabajo"
                    class="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:text-base xl:text-lg 2xl:text-xl"
                >
                    <span>Nuestro trabajo</span>
                    <i aria-hidden="true" class="bx bx-caret-down text-xl transition-transform"></i>
                </button>

                <ul
                    id="submenu-nuestro-trabajo"
                    data-submenu-panel
                    class="z-[240] mt-2 hidden w-full flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-2 text-base shadow-2xl ring-1 ring-slate-950/5 lg:absolute lg:left-0 lg:top-[calc(100%+0.35rem)] lg:mt-0 lg:min-w-[17rem]"
                >
                    <li data-route="lineas" class="cursor-pointer rounded-xl px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white">
                        <span>Líneas de investigación</span>
                    </li>
                    <li data-route="proyectos" class="cursor-pointer rounded-xl px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white">
                        <span>Proyectos</span>
                    </li>
                    <li data-route="publicaciones" class="cursor-pointer rounded-xl px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white">
                        <span>Publicaciones</span>
                    </li>
                    <li data-route="herramientas" class="cursor-pointer rounded-xl bg-sky-50 px-4 py-3 font-black text-sky-800 transition-colors hover:bg-sky-700 hover:text-white">
                        <span class="flex items-center justify-between gap-3">
                            Herramientas
                            <i aria-hidden="true" class="bx bx-wrench text-xl"></i>
                        </span>
                    </li>
                </ul>
            </li>

            <li
                data-route="laboratorioKernel"
                class="flex cursor-pointer items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 lg:text-base xl:text-lg 2xl:text-xl"
            >
                <span class="flex flex-col leading-none lg:items-center lg:text-center">
                    <span>Laboratorio Inteligente</span>
                    <span class="mt-1 text-xs font-semibold text-slate-500 xl:text-sm">de Investigación</span>
                </span>
                <i aria-hidden="true" class="bx bx-bar-chart-alt-2 text-xl"></i>
            </li>

            <li
                data-route="noticias"
                class="flex cursor-pointer items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 lg:text-base xl:text-lg 2xl:text-xl"
            >
                <span>Noticias</span>
                <i aria-hidden="true" class="bx bx-news text-xl"></i>
            </li>

            <li
                data-route="contacto"
                class="flex cursor-pointer items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 lg:text-base xl:text-lg 2xl:text-xl"
            >
                <span>Contacto</span>
                <i aria-hidden="true" class="bx bx-envelope text-xl"></i>
            </li>
        </ul>
    `;
}
