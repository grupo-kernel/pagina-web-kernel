import { newsData } from "../../data/newsData.js";
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

    section.className = `
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;

    const orderedNews = ordenarNoticias(newsData);
    const featuredNews = orderedNews.find(news => news.featured) || orderedNews[0];

    console.log("Total noticias:", newsData.length);
    console.log("Primera noticia original:", newsData[0]?.id, newsData[0]?.title);
    console.log("Primera noticia ordenada:", orderedNews[0]?.id, orderedNews[0]?.title);
    console.log("Noticia destacada:", featuredNews?.id, featuredNews?.title);

    section.innerHTML = `
        ${newsHero(featuredNews)}
        ${newsGrid(orderedNews)}
        ${newsCTA()}
    `;

    return section;
}
