import { contenidoCards } from "./CardContenido.js";
import { renderSingleCard } from "./CardRender.js";

export function CardEquipo() {
    let currentIndex = 0;
    let autoplayInterval; 
    const container = document.createElement('div');
    container.className = "relative flex flex-col gap-7 w-full items-center";

    const getCardsPerPage = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const nextSlide = () => {
        const itemsPerPage = getCardsPerPage();
        if (currentIndex + itemsPerPage >= contenidoCards.length) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        renderSlider();
    };

    const prevSlide = () => {
        const itemsPerPage = getCardsPerPage();
        if (currentIndex <= 0) {
            currentIndex = contenidoCards.length - itemsPerPage;
        } else {
            currentIndex--;
        }
        renderSlider();
    };

   
    const startAutoplay = () => {
        stopAutoplay(); 
        autoplayInterval = setInterval(nextSlide, 5000); 
    };

    const stopAutoplay = () => {
        if (autoplayInterval) clearInterval(autoplayInterval);
    };

    const renderSlider = () => {
        const itemsPerPage = getCardsPerPage();
        
        container.innerHTML = `
            <div id="cards-wrapper" class="flex items-center justify-center gap-8 w-full lg:w-full md:w-2xl min-h-150">
            </div>
            <div class="absolute w-full flex items-center justify-between inset-y-0 -px-4 pointer-events-none"> 
                <button id="prev-btn" class="pointer-events-auto bg-white/80 rounded-full shadow-lg hover:bg-sky-100 transition p-2">
                    <i class="bx bx-caret-left text-5xl lg:text-7xl"></i>
                </button>
                <button id="next-btn" class="pointer-events-auto bg-white/80 rounded-full shadow-lg hover:bg-sky-100 transition p-2">
                    <i class="bx bx-caret-right text-5xl lg:text-7xl"></i>
                </button>
            </div>
            <div class="bg-sky-800 rounded-xl w-full max-w-300 p-4 text-center text-white"> 
                <h1>Conoce más sobre el trabajo de nuestros investigadores</h1>
                <p class="cursor-pointer font-bold underline">Leer más</p>
            </div>
        `;

        const wrapper = container.querySelector('#cards-wrapper');
        const visibleCards = contenidoCards.slice(currentIndex, currentIndex + itemsPerPage);
        
        visibleCards.forEach(docente => {
            wrapper.appendChild(renderSingleCard(docente));
        });

       
        container.querySelector('#prev-btn').onclick = () => {
            prevSlide();
            startAutoplay(); 
        };

        container.querySelector('#next-btn').onclick = () => {
            nextSlide();
            startAutoplay();
        };
    };

  
    document.addEventListener("visibilitychange", () => {
        document.hidden ? stopAutoplay() : startAutoplay();
    });

    window.addEventListener('resize', () => {
        currentIndex = 0;
        renderSlider();
    });

    renderSlider();
    startAutoplay(); 

    return container;
}