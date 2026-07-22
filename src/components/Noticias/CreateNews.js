import { newsData } from "../../data/newsData.js";
import { noticiaMMehb2026 } from "../../data/newsMMehb2026.js";
import { newsHero } from "./NewsHero.js";
import { newsGrid } from "./NewsGrid.js";
import { newsCTA } from "./NewsCTA.js";

function ordenarNoticias(newsList = []) {
    return [...newsList].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
}

export function createNews() {
    const section = document.createElement("section");
    section.className = "w-full bg-slate-100 font-sans";

    const orderedNews = ordenarNoticias([noticiaMMehb2026, ...newsData.filter((item) => item.id !== noticiaMMehb2026.id)]);
    const featuredNews = orderedNews.find((news) => news.featured) || orderedNews[0];

    section.innerHTML = `
        <header class="bg-[#071820] px-4 py-10 text-white md:px-8 md:py-14">
            <div class="mx-auto max-w-[1600px]">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Actualidad, eventos y resultados</p>
                <h1 class="mt-3 text-4xl font-black md:text-6xl">Noticias del Grupo El Kernel</h1>
                <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Participaciones internacionales, publicaciones, defensas, proyectos, actividades de formación y transferencia científica.</p>
            </div>
        </header>
        ${newsHero(featuredNews)}
        ${newsGrid(orderedNews)}
        ${newsCTA()}
    `;

    return section;
}
