import { newsCard } from "./NewsCard.js";

export function newsGrid(newsList = []) {
    const cards = newsList
        .map(news => newsCard(news))
        .join("");

    const cardGrid = `
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${cards}
            </div>
        </section>
    `;

    return cardGrid;
}
