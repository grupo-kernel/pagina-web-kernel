import { createHero } from "./hero.js";
import { createDescription } from "./description.js";
import { createAccordion } from "./AccordionItem.js";

export function createQuienesSomos() {
  const section = document.createElement('section');
  section.classList.add(
    'w-full',
    'tabletBig:w-7xl'
    
  );

  section.innerHTML = `
    ${createHero()}
    ${createDescription()}
    ${createAccordion()}
  `;

  return section;
}