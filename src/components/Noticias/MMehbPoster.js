import kernelLogo from "../../assets/ElKernel.webp";

function tamanoClase(compacto) {
    return compacto
        ? {
            marco: "min-h-[340px] p-4",
            titulo: "text-3xl",
            subtitulo: "text-sm",
            nombres: "text-xs",
            formula: "text-[10px]"
        }
        : {
            marco: "min-h-[520px] p-6 md:p-8",
            titulo: "text-4xl md:text-6xl",
            subtitulo: "text-base md:text-lg",
            nombres: "text-sm md:text-base",
            formula: "text-xs md:text-sm"
        };
}

export function renderMMehbPoster({ compacto = false } = {}) {
    const clases = tamanoClase(compacto);

    return `
        <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#082f52] text-white shadow-xl ${clases.marco}" aria-label="Flyer digital de MME&HB 2026">
            <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-2xl"></div>
            <div class="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-amber-300/10 blur-2xl"></div>

            <div class="relative z-10 flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div class="flex min-w-0 items-center gap-3">
                    <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
                        <img src="${kernelLogo}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" />
                    </span>
                    <div class="min-w-0">
                        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">Grupo de Investigación</p>
                        <p class="truncate text-lg font-black">El Kernel</p>
                    </div>
                </div>
                <span class="rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-200">Participación científica</span>
            </div>

            <div class="relative z-10 mt-5">
                <p class="font-black uppercase tracking-[0.18em] text-cyan-200 ${clases.subtitulo}">Universitat Politècnica de València · 12–15 julio 2026</p>
                <h2 class="mt-2 font-black leading-[0.95] ${clases.titulo}">MME&amp;HB 2026</h2>
                <p class="mt-3 max-w-3xl font-bold leading-tight ${clases.subtitulo}">Mathematical Modelling in Engineering &amp; Human Behaviour</p>
                <p class="mt-2 text-xs font-semibold text-slate-300">XXVIII Congreso Internacional · Instituto Universitario de Matemática Multidisciplinar (IMM)</p>
            </div>

            <div class="relative z-10 mt-5 grid grid-cols-2 gap-3">
                <article class="rounded-xl border border-white/15 bg-white/8 p-3">
                    <p class="font-mono leading-relaxed text-cyan-100 ${clases.formula}">y⁽ᵏ⁾ = x⁽ᵏ⁾ − [F′(x⁽ᵏ⁾)]⁻¹F(x⁽ᵏ⁾)</p>
                    <p class="mt-2 text-[10px] font-black uppercase tracking-wider text-amber-200">Funciones peso y métodos iterativos</p>
                </article>
                <article class="rounded-xl border border-white/15 bg-white/8 p-3">
                    <p class="font-mono leading-relaxed text-cyan-100 ${clases.formula}">H(0)=H′(0)=1, &nbsp; G(0)=G′(0)=0</p>
                    <p class="mt-2 text-[10px] font-black uppercase tracking-wider text-amber-200">Convergencia local y análisis numérico</p>
                </article>
            </div>

            <div class="relative z-10 mt-5 rounded-2xl border border-cyan-200/20 bg-white/8 p-4">
                <p class="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Representación de El Kernel</p>
                <ol class="mt-3 space-y-2 ${clases.nombres}">
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">1</span><span><strong>Miguel A. Leonardo Sepúlveda</strong><br><span class="text-slate-300">Métodos iterativos · sistemas no lineales · EDPs</span></span></li>
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">2</span><span><strong>Natanael Ureña Castillo</strong><br><span class="text-slate-300">Optimización · algoritmos híbridos · cuasi-Newton</span></span></li>
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">3</span><span><strong>Antmel Rodríguez Cabral</strong><br><span class="text-slate-300">Análisis numérico · estabilidad · dinámica</span></span></li>
                </ol>
            </div>

            <div class="relative z-10 mt-auto pt-5">
                <div class="flex flex-col gap-1 border-t border-white/15 pt-4 text-xs text-slate-300 sm:flex-row sm:items-end sm:justify-between">
                    <span><strong class="text-white">IMM · ETS Informática, Edificio 1E</strong><br>València, España</span>
                    <span class="font-black text-amber-200">MME&amp;HB 2026</span>
                </div>
            </div>
        </div>
    `;
}
