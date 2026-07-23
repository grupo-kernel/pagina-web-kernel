import kernelLogo from "../../assets/ElKernel.png";
import miguel from "../../assets/sep.png";
import natanael from "../../assets/nat.png";
import antmel from "../../assets/ant.png";

const PONENTES = Object.freeze([
    {
        numero: "01",
        nombre: "Miguel A. Leonardo Sepúlveda",
        foto: miguel,
        tema: "Funciones peso y método Singh–Sharma de quinto orden",
        area: "Sistemas no lineales · Burgers discretizado"
    },
    {
        numero: "02",
        nombre: "Natanael Ureña Castillo",
        foto: natanael,
        tema: "Algoritmos híbridos cuasi-Newton con correctores de alto orden",
        area: "Optimización sin restricciones"
    },
    {
        numero: "03",
        nombre: "Antmel Rodríguez Cabral",
        foto: antmel,
        tema: "Familia generalizada de Traub y método óptimo de cuarto orden",
        area: "Sistemas no lineales · análisis dinámico"
    }
]);

function tarjetaPonente(ponente, compacto) {
    return `
        <article class="overflow-hidden rounded-2xl border border-white/15 bg-white text-[#082f5b] shadow-lg">
            <div class="relative ${compacto ? "h-24" : "h-36 md:h-44"} overflow-hidden bg-slate-100">
                <img src="${ponente.foto}" alt="${ponente.nombre}" class="h-full w-full object-cover object-top" />
                <span class="absolute left-2 top-2 rounded-lg bg-[#06386f] px-2 py-1 text-[10px] font-black text-white">${ponente.numero}</span>
            </div>
            <div class="p-3 ${compacto ? "text-[10px]" : "text-xs md:p-4 md:text-sm"}">
                <h3 class="font-black leading-tight">${ponente.nombre}</h3>
                <p class="mt-2 font-bold leading-snug text-[#b21722]">${ponente.tema}</p>
                <p class="mt-2 leading-snug text-slate-600">${ponente.area}</p>
            </div>
        </article>
    `;
}

export function renderMescytPoster({ compacto = false } = {}) {
    return `
        <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-[#082f5b] shadow-xl" aria-label="Flyer digital del XXI Congreso Internacional de Investigación Científica 2026">
            <header class="relative overflow-hidden bg-gradient-to-r from-[#082f5b] via-[#0b4a87] to-[#082f5b] px-4 py-5 text-white md:px-7 md:py-7">
                <div class="absolute -right-10 -top-14 h-40 w-40 rounded-full border-[18px] border-red-500/25"></div>
                <div class="relative z-10 flex items-center justify-between gap-4">
                    <div class="flex min-w-0 items-center gap-3">
                        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md md:h-14 md:w-14">
                            <img src="${kernelLogo}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" />
                        </span>
                        <div class="min-w-0">
                            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-sky-200 md:text-[11px]">Grupo de Investigación El Kernel</p>
                            <p class="truncate text-base font-black md:text-xl">Tres ponencias científicas</p>
                        </div>
                    </div>
                    <span class="rounded-full border border-red-200/40 bg-red-600 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white md:text-[11px]">1 de julio de 2026</span>
                </div>

                <div class="relative z-10 mt-5">
                    <p class="text-xs font-black uppercase tracking-[0.18em] text-red-200 md:text-sm">Gobierno de la República Dominicana · MESCyT</p>
                    <h2 class="mt-2 ${compacto ? "text-3xl" : "text-4xl md:text-6xl"} font-black leading-[0.95]">XXI CIC 2026</h2>
                    <p class="mt-3 max-w-4xl ${compacto ? "text-sm" : "text-base md:text-xl"} font-black leading-tight">XXI Congreso Internacional de Investigación Científica</p>
                    <p class="mt-2 text-xs font-semibold text-sky-100 md:text-sm">Semana Dominicana de Ciencia y Tecnología 2026 · Santo Domingo, República Dominicana</p>
                </div>
            </header>

            <section class="border-b-4 border-red-600 bg-slate-50 px-4 py-4 md:px-7">
                <p class="text-[10px] font-black uppercase tracking-[0.18em] text-[#b21722] md:text-xs">Simposio del Grupo El Kernel</p>
                <p class="mt-1 ${compacto ? "text-sm" : "text-lg md:text-2xl"} font-black leading-tight text-[#082f5b]">Análisis numérico, métodos iterativos, sistemas no lineales y optimización</p>
            </section>

            <section class="grid flex-1 grid-cols-3 gap-2 bg-gradient-to-b from-white to-slate-100 p-3 md:gap-4 md:p-6">
                ${PONENTES.map((ponente) => tarjetaPonente(ponente, compacto)).join("")}
            </section>

            <footer class="bg-[#082f5b] px-4 py-4 text-white md:px-7">
                <div class="flex flex-col gap-2 text-[10px] font-semibold sm:flex-row sm:items-end sm:justify-between md:text-xs">
                    <span><strong>Formato:</strong> simposio de tres ponencias · duración aproximada: una hora</span>
                    <span class="font-black text-red-200">MESCyT · XXI CIC 2026</span>
                </div>
            </footer>
        </div>
    `;
}
