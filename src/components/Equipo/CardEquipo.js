import { renderSingleCard } from "./CardRender.js";
import { contenidoCards } from "../../data/CardContenido.js";

export function CardEquipo() {
    let currentIndex = 0;
    let autoplayInterval = null;
    let resizeTimer = null;

    const container = document.createElement("section");
    container.className = "w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";

    const getCardsPerPage = () => {
        if (window.innerWidth >= 1280) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const getMaxIndex = () => {
        const itemsPerPage = getCardsPerPage();
        return Math.max(contenidoCards.length - itemsPerPage, 0);
    };

    const normalizeIndex = () => {
        const maxIndex = getMaxIndex();

        if (currentIndex > maxIndex) {
            currentIndex = 0;
        }

        if (currentIndex < 0) {
            currentIndex = maxIndex;
        }
    };

    const nextSlide = () => {
        const maxIndex = getMaxIndex();

        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        renderSlider();
    };

    const prevSlide = () => {
        const maxIndex = getMaxIndex();

        if (currentIndex <= 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex--;
        }

        renderSlider();
    };

    const startAutoplay = () => {
        stopAutoplay();

        if (contenidoCards.length > getCardsPerPage()) {
            autoplayInterval = setInterval(nextSlide, 4500);
        }
    };

    const stopAutoplay = () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    };

    const renderDots = () => {
        const itemsPerPage = getCardsPerPage();
        const pages = Math.max(contenidoCards.length - itemsPerPage + 1, 1);

        return Array.from({ length: pages }).map((_, index) => `
            <button
                type="button"
                data-dot-index="${index}"
                aria-label="Ir al grupo ${index + 1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex ? "bg-[#5580C1] w-8" : "bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("");
    };

    const renderSlider = () => {
        if (!contenidoCards || contenidoCards.length === 0) {
            container.innerHTML = `
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;

            return;
        }

        normalizeIndex();

        const itemsPerPage = getCardsPerPage();
        const visibleCards = contenidoCards.slice(currentIndex, currentIndex + itemsPerPage);

        container.innerHTML = `
            <div class="w-full text-center">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h2 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Equipo de investigación
                </h2>

                <p class="text-slate-500 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                    Conoce a los investigadores que integran el grupo, sus áreas de trabajo y sus aportes
                    a la matemática aplicada, el análisis numérico, la optimización, el álgebra y la formación matemática.
                </p>
            </div>

            <div class="relative w-full">

                <div id="cards-wrapper"
                    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full min-h-[560px] items-stretch">
                </div>

                <button
                    id="prev-btn"
                    type="button"
                    aria-label="Anterior"
                    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-30
                    bg-white/90 text-slate-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl
                    flex items-center justify-center hover:bg-sky-100 transition active:scale-90 border border-slate-200">

                    <i class="bx bx-caret-left text-4xl md:text-5xl"></i>
                </button>

                <button
                    id="next-btn"
                    type="button"
                    aria-label="Siguiente"
                    class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-30
                    bg-white/90 text-slate-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl
                    flex items-center justify-center hover:bg-sky-100 transition active:scale-90 border border-slate-200">

                    <i class="bx bx-caret-right text-4xl md:text-5xl"></i>
                </button>
            </div>

            <div class="flex items-center justify-center gap-2">
                ${renderDots()}
            </div>

            <div class="w-full bg-[#1E1E1E] rounded-3xl p-6 md:p-8 text-center text-white shadow-2xl relative overflow-hidden">

                <div class="absolute -right-10 -bottom-10 w-28 h-28 bg-white/10 rounded-full"></div>
                <div class="absolute left-8 top-8 w-14 h-14 bg-[#96B4E1]/30 rounded-full"></div>

                <div class="relative z-10">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-2">
                        Equipo Kernel
                    </p>

                    <h3 class="text-xl md:text-2xl font-black mb-2">
                        Conoce más sobre el trabajo de nuestros investigadores
                    </h3>

                    <p class="text-white/70 max-w-2xl mx-auto mb-4 text-sm md:text-base leading-relaxed">
                        Explora su formación académica, publicaciones, líneas de investigación y proyectos científicos.
                    </p>

                    <a href="#formacion-academica"
                       class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full transition-colors">
                        Leer más
                    </a>
                </div>
            </div>
        `;

        const wrapper = container.querySelector("#cards-wrapper");

        visibleCards.forEach(docente => {
            wrapper.appendChild(renderSingleCard(docente));
        });

        const prevBtn = container.querySelector("#prev-btn");
        const nextBtn = container.querySelector("#next-btn");

        if (prevBtn) {
            prevBtn.onclick = () => {
                prevSlide();
                startAutoplay();
            };
        }

        if (nextBtn) {
            nextBtn.onclick = () => {
                nextSlide();
                startAutoplay();
            };
        }

        container.querySelectorAll("[data-dot-index]").forEach(dot => {
            dot.onclick = () => {
                currentIndex = parseInt(dot.dataset.dotIndex);
                renderSlider();
                startAutoplay();
            };
        });
    };

    container.addEventListener("mouseenter", stopAutoplay);
    container.addEventListener("mouseleave", startAutoplay);

    document.addEventListener("visibilitychange", () => {
        document.hidden ? stopAutoplay() : startAutoplay();
    });

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
            currentIndex = 0;
            renderSlider();
            startAutoplay();
        }, 150);
    });

    renderSlider();
    startAutoplay();

    return container;
}
