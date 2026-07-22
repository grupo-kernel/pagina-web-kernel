import kernel from "../../assets/ElKernel.png";

export function Footer() {
    const anio = new Date().getFullYear();

    return `
        <div class="mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between md:gap-8">
            <div class="flex items-center gap-4 text-white">
                <img class="h-[72px] w-[72px] rounded-full object-contain" src="${kernel}" alt="Logo del Grupo de Investigación El Kernel" loading="lazy" />
                <div>
                    <h5 class="text-sm font-bold md:text-base lg:text-xl">Grupo de Investigación El Kernel</h5>
                    <p class="mt-1 text-xs font-light lg:text-base">EDPs no lineales, métodos iterativos, optimización y educación matemática.</p>
                </div>
            </div>

            <div class="mt-6 flex flex-col text-white md:mt-0">
                <h5 class="mb-2 text-xs font-bold text-footer-contacto md:text-sm lg:text-xl">Contacto</h5>
                <ul class="text-xs leading-7 md:text-sm lg:text-base">
                    <li><a class="underline" href="mailto:mleonardos@unapec.edu.do">mleonardos@unapec.edu.do</a></li>
                    <li>República Dominicana</li>
                    <li><a class="text-footer-contacto underline" target="_blank" rel="noopener noreferrer" href="https://www.grupoelkernel.com">grupoelkernel.com</a></li>
                </ul>
            </div>

            <nav class="mt-6 md:mt-0" aria-label="Instituciones vinculadas">
                <ul class="flex items-center gap-3 md:gap-5 lg:gap-8">
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="ISFODOSU" href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer">ISFODOSU</a></li>
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="UASD" href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer">UASD</a></li>
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="UNAPEC" href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer">UNAPEC</a></li>
                </ul>
            </nav>
        </div>
        <div class="mx-auto mt-3 max-w-7xl px-4 pb-4 text-xs text-white md:mt-8 md:text-sm lg:text-base">
            <p>© ${anio} Grupo de Investigación El Kernel — Todos los derechos reservados.</p>
        </div>
    `;
}
