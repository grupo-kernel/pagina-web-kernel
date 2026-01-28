import { createQuienesSomos } from "../components/QuienesSomos/CreateQuienesSomos.js";
import { initAccordion } from "../Controllers/QuienesSomos/Accordion.controller.js";
import { initDescriptionToggle } from "../Controllers/QuienesSomos/Description.controller.js";

export function CreatePageQuienesSomos() {
    const page = createQuienesSomos();

    initAccordion(page);
    initDescriptionToggle(page);

    return page;
}