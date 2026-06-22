import { createHero } from "./hero.js";
import { createDescription } from "./description.js";
import { createAccordion } from "./AccordionItem.js";

export function createQuienesSomos() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `;

    section.innerHTML = `
        ${createHero()}
        ${createDescription()}
        ${createAccordion()}
    `;

    return section;
}
