export function createNavBar() {
    return `
        <div class="mb-7 flex w-full items-center justify-between border-b border-b-zinc-500 px-2.5 pb-2.5 lg:hidden">
            <span class="text-4xl font-medium">El Kernel</span>
            <button type="button" data-action="close-navBar" class="flex h-12 w-12 items-center justify-center rounded-full" aria-label="Cerrar navegación">
                <i class="bx bx-x text-6xl"></i>
            </button>
        </div>

        <ul class="relative z-[210] flex w-full flex-col items-stretch gap-4 overflow-visible p-4 text-black lg:flex-row lg:items-center xl:gap-9">
            <li
                data-route="home"
                class="flex cursor-pointer items-center justify-between gap-1 whitespace-nowrap text-lg font-medium lg:justify-start xl:text-2xl 2xl:text-3xl"
            >
                <span>Portada</span>
                <i class="bx bx-home text-3xl"></i>
            </li>

            <li data-action="open-subMenu" class="relative z-[220] whitespace-nowrap text-lg font-medium xl:text-2xl 2xl:text-3xl">
                <button
                    type="button"
                    data-submenu-trigger
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-controls="submenu-nosotros"
                    class="flex w-full items-center justify-between gap-1 rounded-lg text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                >
                    <span>Nosotros</span>
                    <i class="bx bx-caret-down text-3xl"></i>
                </button>

                <ul
                    id="submenu-nosotros"
                    class="z-[300] mt-2.5 hidden w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-lg shadow-2xl lg:absolute lg:left-0 lg:top-full lg:mt-3 lg:min-w-64 lg:p-2 lg:text-base"
                >
                    <li data-route="quienesSomos" class="cursor-pointer rounded-lg px-4 py-3 hover:bg-sky-800 hover:text-white 2xl:text-2xl">
                        <span>Quiénes somos</span>
                    </li>
                    <li data-route="equipment" class="cursor-pointer rounded-lg px-4 py-3 hover:bg-sky-800 hover:text-white 2xl:text-2xl">
                        <span>Equipo</span>
                    </li>
                </ul>
            </li>

            <li data-action="open-subMenu" class="relative z-[220] whitespace-nowrap text-lg font-medium xl:text-2xl 2xl:text-3xl">
                <button
                    type="button"
                    data-submenu-trigger
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-controls="submenu-nuestro-trabajo"
                    class="flex w-full items-center justify-between gap-1 rounded-lg text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                >
                    <span>Nuestro Trabajo</span>
                    <i class="bx bx-caret-down text-3xl"></i>
                </button>

                <ul
                    id="submenu-nuestro-trabajo"
                    class="z-[300] mt-2.5 hidden w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-lg shadow-2xl lg:absolute lg:left-0 lg:top-full lg:mt-3 lg:min-w-72 lg:p-2 lg:text-base"
                >
                    <li data-route="lineas" class="cursor-pointer rounded-lg px-4 py-3 hover:bg-sky-800 hover:text-white 2xl:text-2xl">
                        <span>Líneas de investigación</span>
                    </li>
                    <li data-route="proyectos" class="cursor-pointer rounded-lg px-4 py-3 hover:bg-sky-800 hover:text-white 2xl:text-2xl">
                        <span>Proyectos</span>
                    </li>
                    <li data-route="publicaciones" class="cursor-pointer rounded-lg px-4 py-3 hover:bg-sky-800 hover:text-white 2xl:text-2xl">
                        <span>Publicaciones</span>
                    </li>
                    <li data-route="herramientas" class="cursor-pointer rounded-lg px-4 py-3 hover:bg-sky-800 hover:text-white 2xl:text-2xl">
                        <span class="flex items-center gap-2">
                            <i class="bx bx-wrench text-xl"></i>
                            Herramientas
                        </span>
                    </li>
                </ul>
            </li>

            <li
                data-route="laboratorioKernel"
                class="flex cursor-pointer items-center justify-center gap-2 text-base font-medium xl:text-xl 2xl:text-2xl"
            >
                <span class="flex flex-col items-center text-center leading-none">
                    <span class="whitespace-nowrap">Laboratorio Inteligente</span>
                    <span class="mt-1 whitespace-nowrap text-sm font-semibold text-slate-600 xl:text-base 2xl:text-lg">de Investigación</span>
                </span>
                <i class="bx bx-bar-chart-alt-2 shrink-0 text-2xl"></i>
            </li>

            <li
                data-route="noticias"
                class="flex cursor-pointer items-center justify-between gap-1 whitespace-nowrap text-lg font-medium lg:justify-start xl:text-2xl 2xl:text-3xl"
            >
                <span>Noticias</span>
                <i class="bx bx-news text-3xl"></i>
            </li>

            <li
                data-route="contacto"
                class="flex cursor-pointer items-center justify-between gap-1 whitespace-nowrap text-lg font-medium lg:justify-start xl:text-2xl 2xl:text-3xl"
            >
                <span>Contacto</span>
                <i class="bx bx-envelope text-3xl"></i>
            </li>
        </ul>
    `;
}
