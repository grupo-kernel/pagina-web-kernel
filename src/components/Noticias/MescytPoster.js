import kernelLogo from "../../assets/ElKernel.png";
import congreso1 from "../../assets/congreso1.jpeg";
import congreso2 from "../../assets/congreso2.jpeg";
import congreso3 from "../../assets/congreso3.jpeg";
import congreso4 from "../../assets/congreso4.jpeg";
import congreso5 from "../../assets/congreso5.jpeg";
import congreso6 from "../../assets/congreso6.jpeg";
import congreso7 from "../../assets/congreso7.jpeg";
import congreso8 from "../../assets/congreso8.jpeg";
import congreso9 from "../../assets/congreso9.jpeg";

const REGISTRO_PANEL = Object.freeze([
    congreso3,
    congreso1,
    congreso2,
    congreso4,
    congreso5,
    congreso6,
    congreso7,
    congreso8,
    congreso9
]);

const PONENTES = Object.freeze([
    {
        nombre: "Miguel A. Leonardo Sepúlveda",
        tema: "Funciones peso y método Singh–Sharma de quinto orden"
    },
    {
        nombre: "Natanael Ureña Castillo",
        tema: "Algoritmos híbridos cuasi-Newton con correctores de alto orden"
    },
    {
        nombre: "Antmel Rodríguez Cabral",
        tema: "Familia generalizada de Traub y método óptimo de cuarto orden"
    }
]);

function renderRegistroFotografico(compacto) {
    if (compacto) {
        return `
            <section class="relative min-h-0 flex-1 overflow-hidden bg-slate-900">
                <img
                    src="${REGISTRO_PANEL[0]}"
                    alt="Panel científico del Grupo El Kernel en el XXI CIC 2026"
                    class="h-full min-h-[220px] w-full object-cover"
                    loading="lazy"
                />
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-4 pb-4 pt-14 text-white">
                    <p class="text-[10px] font-black uppercase tracking-[0.18em] text-red-200">Panel científico del Grupo El Kernel</p>
                    <p class="mt-1 text-sm font-black leading-tight">Tres ponencias sobre análisis numérico, sistemas no lineales y optimización</p>
                </div>
            </section>
        `;
    }

    return `
        <section class="bg-slate-100 p-3 md:p-5" aria-label="Registro fotográfico del panel científico">
            <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                ${REGISTRO_PANEL.map((imagen, index) => `
                    <figure class="${index === 0 ? "col-span-2 row-span-2 min-h-[280px] md:min-h-[360px]" : "h-32 md:h-[174px]"} overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                        <img
                            src="${imagen}"
                            alt="Registro fotográfico ${index + 1} del panel científico del Grupo El Kernel en el XXI CIC 2026"
                            class="h-full w-full object-cover"
                            loading="${index === 0 ? "eager" : "lazy"}"
                        />
                    </figure>
                `).join("")}
            </div>
        </section>
    `;
}

function renderPonentes(compacto) {
    if (compacto) return "";

    return `
        <section class="grid grid-cols-1 gap-3 border-t border-slate-200 bg-white px-4 py-5 md:grid-cols-3 md:px-7">
            ${PONENTES.map((ponente, index) => `
                <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p class="text-[10px] font-black uppercase tracking-[0.16em] text-[#b21722]">Ponencia ${index + 1}</p>
                    <h3 class="mt-2 text-sm font-black leading-tight text-[#082f5b]">${ponente.nombre}</h3>
                    <p class="mt-2 text-xs leading-relaxed text-slate-600">${ponente.tema}</p>
                </article>
            `).join("")}
        </section>
    `;
}

export function renderMescytPoster({ compacto = false } = {}) {
    return `
        <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-[#082f5b] shadow-xl" aria-label="Registro del panel científico del Grupo El Kernel en el XXI Congreso Internacional de Investigación Científica 2026">
            <header class="relative overflow-hidden bg-gradient-to-r from-[#082f5b] via-[#0b4a87] to-[#082f5b] px-4 py-5 text-white md:px-7 md:py-7">
                <div class="absolute -right-10 -top-14 h-40 w-40 rounded-full border-[18px] border-red-500/25"></div>
                <div class="relative z-10 flex items-center justify-between gap-4">
                    <div class="flex min-w-0 items-center gap-3">
                        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md md:h-14 md:w-14">
                            <img src="${kernelLogo}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" />
                        </span>
                        <div class="min-w-0">
                            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-sky-200 md:text-[11px]">Grupo de Investigación El Kernel</p>
                            <p class="truncate text-base font-black md:text-xl">Panel científico</p>
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

            ${renderRegistroFotografico(compacto)}
            ${renderPonentes(compacto)}

            <footer class="bg-[#082f5b] px-4 py-4 text-white md:px-7">
                <div class="flex flex-col gap-2 text-[10px] font-semibold sm:flex-row sm:items-end sm:justify-between md:text-xs">
                    <span><strong>Formato:</strong> panel científico integrado por tres ponencias · duración aproximada: una hora</span>
                    <span class="font-black text-red-200">MESCyT · XXI CIC 2026</span>
                </div>
            </footer>
        </div>
    `;
}
