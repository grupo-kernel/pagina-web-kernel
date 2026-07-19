export function createNavBar() {
    const wrapper = `
        <div class="lg:hidden border-b-zinc-500 border-b pb-2.5 w-full flex px-2.5 justify-between items-center mb-7">
            <span class="text-4xl font-medium">El Kernel</span>
            <i data-action="close-navBar" class="text-6xl cursor-pointer bx bx-x"></i>
        </div>

        <ul class="flex w-full text-black flex-col lg:flex-row p-4 gap-4 xl:gap-9">

            <li data-route="home"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Portada</span>
                <i class="bx bx-home text-3xl"></i>
            </li>

            <!-- Nosotros -->
            <li data-action="open-subMenu"
                class="gap-1 text-nowrap lg:relative 2xl:text-3xl hover:cursor-pointer font-medium items-center text-lg xl:text-2xl">

                <div class="flex justify-between">
                    <span>Nosotros</span>
                    <i class="text-3xl bx bx-caret-down"></i>
                </div>

                <ul class="flex-col mt-2.5 text-lg lg:text-base hidden w-full lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56 lg:bg-white lg:shadow-2xl">

                    <li data-route="quienesSomos"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Quiénes Somos</span>
                    </li>

                    <li data-route="equipment"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Equipo</span>
                    </li>

                </ul>

            </li>

            <!-- Nuestro Trabajo -->
            <li data-action="open-subMenu"
                class="lg:relative gap-1 2xl:text-3xl text-nowrap hover:cursor-pointer font-medium items-center text-lg xl:text-2xl">

                <div class="flex justify-between">
                    <span>Nuestro Trabajo</span>
                    <i class="text-3xl bx bx-caret-down"></i>
                </div>

                <ul class="flex-col mt-2.5 text-lg lg:text-base hidden w-full lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56 lg:bg-white lg:shadow-2xl">

                    <li data-route="lineas"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Líneas</span>
                    </li>

                    <li data-route="proyectos"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Proyectos</span>
                    </li>

                    <li data-route="publicaciones"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Publicaciones</span>
                    </li>

                    <li data-route="herramientas"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Herramientas</span>
                    </li>

                </ul>

            </li>

            <!-- Laboratorio Inteligente -->
            <li data-route="laboratorioKernel"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Laboratorio Inteligente de Investigación</span>
                <i class="bx bx-bar-chart-alt-2 text-3xl"></i>
            </li>

            <!-- Noticias -->
            <li data-route="noticias"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Noticias</span>
                <i class="bx bx-news text-3xl"></i>
            </li>

            <!-- Contacto -->
            <li data-route="contacto"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Contacto</span>
                <i class="bx bx-envelope text-3xl"></i>
            </li>

        </ul>
    `;

    return wrapper;
}
