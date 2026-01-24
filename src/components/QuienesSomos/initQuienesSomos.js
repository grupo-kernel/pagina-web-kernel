import { initAccordion } from "../../Controllers/QuienesSomos/Accordion.controller.js";
import { initDescriptionToggle } from "../../Controllers/QuienesSomos/Description.controller.js";

export function initQuienesSomos(container) {
  if (!container) return;

  initAccordion(container);
  initDescriptionToggle(container);
}
