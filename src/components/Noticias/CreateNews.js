import { newsData } from "../../data/newsData.js";
import { newsHero } from "./NewsHero.js";
import { newsGrid } from "./NewsGrid.js";
import { newsCTA } from "./NewsCTA.js";

export function createNews() {
    const section = document.createElement("section");

    section.className = `
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;

    const orderedNews = [...newsData].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });

    const featuredNews = orderedNews.find(news => news.featured) || orderedNews[0];

    section.innerHTML = `
        ${newsHero(featuredNews)}
        ${newsGrid(orderedNews)}
        ${newsCTA()}
    `;

    return section;
}
