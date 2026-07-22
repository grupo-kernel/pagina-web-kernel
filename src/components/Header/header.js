import kernel from "../../assets/ElKernel.png";

export function createHeader() {
    return `
        <div class="flex w-full items-center justify-between gap-4">
            <a href="#/home" class="flex min-w-0 items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100" aria-label="Ir a la portada de El Kernel">
                <img class="h-12 w-12 shrink-0 rounded-xl object-contain md:h-14 md:w-14" src="${kernel}" alt="Logo del Grupo de Investigación El Kernel" title="El Kernel" />
                <span class="min-w-0">
                    <span class="block truncate text-xl font-black text-slate-950 md:text-2xl xl:text-3xl">El Kernel</span>
                    <span class="hidden text-xs font-semibold text-slate-500 sm:block">Investigación y servicios científicos</span>
                </span>
            </a>
            <button
                type="button"
                data-action="open-menu"
                aria-label="Abrir menú de navegación"
                aria-expanded="false"
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:hidden"
            >
                <i aria-hidden="true" class="bx bx-menu text-3xl"></i>
            </button>
        </div>
    `;
}
