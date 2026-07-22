import { navSliderBtns } from "../../Controllers/navSliderBtns/navSliderBtns.js";
import { SliderController } from "../../Controllers/Slider/Slider.controller.js";

export function CreateSliderComponentHome() {
    const slider = `
        <section class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 via-sky-700 to-cyan-600 px-6 py-9 text-white shadow-2xl md:px-10 md:py-12">
            <div class="absolute -top-28 -right-20 h-72 w-72 rounded-full bg-white/10"></div>
            <div class="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-slate-950/10"></div>

            <div class="relative z-10 grid grid-cols-1 items-center gap-9 xl:grid-cols-[0.82fr_1.18fr]">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.20em] text-cyan-100">
                        Instituciones y alianzas
                    </p>
                    <h2 class="mt-3 text-3xl font-black leading-tight md:text-5xl">
                        Colaboración para producir conocimiento con impacto
                    </h2>
                    <p class="mt-5 max-w-2xl text-base leading-relaxed text-sky-50 md:text-lg">
                        El Grupo Kernel articula investigación, formación avanzada y desarrollo de herramientas con instituciones nacionales e internacionales.
                    </p>

                    <div class="mt-6 flex flex-wrap gap-2 text-sm font-black">
                        <span class="rounded-full border border-white/25 bg-white/10 px-4 py-2">UNAPEC</span>
                        <span class="rounded-full border border-white/25 bg-white/10 px-4 py-2">ISFODOSU</span>
                        <span class="rounded-full border border-white/25 bg-white/10 px-4 py-2">UASD</span>
                    </div>

                    <div id="btnsGroup" class="mt-8 flex flex-wrap gap-3">
                        <button
                            type="button"
                            data-route="equipment"
                            class="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black"
                        >
                            <i class="bx bx-group text-xl" aria-hidden="true"></i>
                            Equipo
                        </button>
                        <button
                            type="button"
                            data-route="publicaciones"
                            class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20"
                        >
                            <i class="bx bx-article text-xl" aria-hidden="true"></i>
                            Publicaciones
                        </button>
                        <button
                            type="button"
                            data-route="noticias"
                            class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20"
                        >
                            <i class="bx bx-megaphone text-xl" aria-hidden="true"></i>
                            Noticias
                        </button>
                    </div>
                </div>

                <div id="containerFather" class="relative rounded-3xl border border-white/25 bg-white/10 p-4 shadow-2xl backdrop-blur-md md:p-6">
                    <button
                        id="arrowL"
                        type="button"
                        aria-label="Institución anterior"
                        class="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/90 text-white shadow-xl transition hover:bg-black active:scale-95 md:left-5 md:h-12 md:w-12"
                    >
                        <i class="bx bx-arrow-back text-2xl" aria-hidden="true"></i>
                    </button>

                    <button
                        id="arrowR"
                        type="button"
                        aria-label="Institución siguiente"
                        class="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/90 text-white shadow-xl transition hover:bg-black active:scale-95 md:right-5 md:h-12 md:w-12"
                    >
                        <i class="bx bx-right-arrow-alt text-3xl" aria-hidden="true"></i>
                    </button>

                    <div
                        id="contenedorSlide"
                        class="flex min-h-[280px] w-full items-center justify-center px-12 md:min-h-[340px] md:px-16"
                        aria-live="polite"
                    ></div>

                    <p class="mt-3 text-center text-xs font-bold text-sky-100">
                        El carrusel se detiene al colocar el cursor o el foco sobre esta sección.
                    </p>
                </div>
            </div>
        </section>
    `;

    const element = document.createElement("div");
    element.innerHTML = slider;
    const slideNode = element.firstElementChild;

    SliderController(
        slideNode.querySelector("#containerFather")
    );
    navSliderBtns(
        slideNode.querySelector("#btnsGroup")
    );

    return slideNode;
}
