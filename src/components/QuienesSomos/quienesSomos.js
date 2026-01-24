import { createHero } from "./hero.js";
import { createDescription } from "./description.js";
import { createAccordion } from "./AccordionItem.js";

export function createQuienesSomos() {
  return `
    <section class="w-full">
      ${createHero()}
      ${createDescription()}
      ${createAccordion()}
    </section>
    `;

}