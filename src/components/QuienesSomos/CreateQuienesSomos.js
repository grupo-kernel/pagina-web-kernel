import { createHero } from "./hero.js";
import { createDescription } from "./description.js";
import { createAccordion } from "./AccordionItem.js";

export function createQuienesSomos() {
    const section = document.createElement("section");
    section.className = "w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";

    section.innerHTML = `
        <div class="mx-auto max-w-[1600px]">
            <header class="relative overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
                <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"></div>
                <div class="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Identidad, propósito y forma de trabajo</p>
                        <h1 class="mt-3 text-4xl font-black leading-tight md:text-6xl">Quiénes somos</h1>
                        <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">El Kernel es un grupo dominicano de investigación y servicios científicos que integra matemática aplicada, computación, estadística, educación e innovación para producir conocimiento verificable y transferible.</p>
                    </div>
                    <aside class="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <p class="text-sm font-black text-emerald-200">Nuestro compromiso institucional</p>
                        <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                            <li>• Rigor científico y metodológico.</li>
                            <li>• Confidencialidad e integridad académica.</li>
                            <li>• Reproducibilidad y documentación.</li>
                            <li>• Formación, colaboración y transferencia.</li>
                        </ul>
                    </aside>
                </div>
            </header>

            <div class="mt-8 space-y-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-lg md:p-9">
                ${createHero()}
                ${createDescription()}
                ${createAccordion()}
            </div>

            <section class="mt-8 rounded-[2rem] bg-gradient-to-r from-[#0f5b5d] to-[#071820] px-6 py-8 text-white shadow-xl md:px-10">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div><p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Colaboración científica</p><h2 class="mt-2 text-2xl font-black md:text-3xl">Investigación, servicios y alianzas con alcance verificable</h2><p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">Trabajamos con universidades, centros de investigación, instituciones públicas, empresas y comunidades académicas.</p></div>
                    <div class="flex flex-col gap-3 sm:flex-row"><a href="#/equipment" class="rounded-xl bg-white px-5 py-3 text-center font-black text-[#071820]">Conocer el equipo</a><a href="#/diagnosticoServicios" class="rounded-xl bg-[#d5a54a] px-5 py-3 text-center font-black text-[#071820]">Solicitar diagnóstico</a></div>
                </div>
            </section>
        </div>
    `;

    return section;
}
