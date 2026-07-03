import { createNews } from "../components/Noticias/CreateNews.js";
import { initNewsModalController } from "../Controllers/Noticias/NewsModal.controller.js";

export function CreatePageNews() {
    const page = createNews();

    initNewsModalController(page);

    return page;
}
