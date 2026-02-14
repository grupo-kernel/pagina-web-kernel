import { createNews } from "../components/Noticias/CreateNews";
import { initNewsModalController } from "../Controllers/Noticias/NewsModal.controller";

export function CreatePageNews() {
    const page = createNews();

    initNewsModalController(page);

    return page;
}