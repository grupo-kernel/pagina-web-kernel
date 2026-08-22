const KERF_LOGO = "/assets/logo-kerf-20260821.png?v=20260821-2";

export function createHeader() {
    return `
        <div class="flex w-full items-center justify-between gap-4">
            <a href="#/home" class="flex min-w-0 items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100" aria-label="Ir a la portada del Grupo de Investigación Ker(F)">
                <img
                    class="h-16 w-16 shrink-0 object-contain md:h-[72px] md:w-[72px]"
                    src="${KERF_LOGO}"
                    alt="Logotipo del Grupo de Investigación Ker(F)"
                    title="Grupo de Investigación Ker(F)"
                    width="72"
                    height="72"
                    decoding="async"
                    fetchpriority="high"
                />
                <span class="min-w-0">
                    <span class="block truncate text-xl font-black text-slate-950 md:text-2xl xl:text-3xl">Ker(F)</span>
                    <span class="hidden text-xs font-semibold text-slate-500 sm:block">Grupo de Investigación</span>
                </span>
            </a>
            <button
                type="button"
                data-action="open-menu"
                aria-label="Abrir menú de navegación"
                aria-expanded="false"
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 lg:hidden"
            >
                <i aria-hidden="true" class="bx bx-menu text-3xl"></i>
            </button>
        </div>
    `;
}
