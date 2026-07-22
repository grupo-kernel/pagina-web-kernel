import kernel from "../../../favicon.ico";

export function Footer() {
    return `<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-4 text-white">
            <img
                class="h-16 w-16 rounded-full object-contain"
                width="64"
                height="64"
                src="${kernel}"
                alt="Logo del Grupo de Investigación Kernel"
                title="El Kernel"
                loading="lazy"
                decoding="async"
            >
            <div class="flex flex-col">
                <h5 class="text-xs font-bold md:text-sm lg:text-xl">Grupo de Investigación</h5>
                <p class="mt-1.5 text-xs font-light lg:text-lg">Explorando EDP no lineales, métodos iterativos, computación científica y educación matemática.</p>
            </div>
        </div>

        <div class="mt-6 flex flex-col text-white md:mt-0">
            <h5 class="mb-2 text-xs font-bold text-footer-contacto md:text-sm lg:text-xl">Contacto</h5>
            <ul class="text-xs md:text-sm lg:text-lg lg:leading-9">
                <li><a class="underline" href="mailto:mleonardos@unapec.edu.do">mleonardos@unapec.edu.do</a></li>
                <li>República Dominicana</li>
                <li><a class="underline text-footer-contacto" href="https://www.grupoelkernel.com">grupoelkernel.com</a></li>
            </ul>
        </div>

        <div class="mt-6 md:mt-0">
            <ul class="flex items-center justify-between gap-3 md:gap-5 lg:gap-8">
                <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="ISFODOSU" href="https://www.isfodosu.edu.do" target="_blank" rel="noopener noreferrer">ISFODOSU</a></li>
                <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="UASD" href="https://uasd.edu.do" target="_blank" rel="noopener noreferrer">UASD</a></li>
                <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="UNAPEC" href="https://unapec.edu.do" target="_blank" rel="noopener noreferrer">UNAPEC</a></li>
            </ul>
        </div>
    </div>
    <div class="max-w-7xl mx-auto px-3 text-xs text-white md:mt-8 md:text-sm lg:text-lg mt-2.5">
        <p>© 2026 Grupo de Investigación El Kernel — Todos los derechos reservados</p>
    </div>`;
}
