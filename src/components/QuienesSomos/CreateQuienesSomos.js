import { createHero } from "./hero.js";
import { createDescription } from "./description.js";
import { createAccordion } from "./AccordionItem.js";


export function createQuienesSomos() {
  const section = document.createElement('section');
  section.classList.add('w-full');

  section.innerHTML = `
    ${createHero()}
    ${createDescription()}
    ${createAccordion()}
  
  `;

  return section;
}