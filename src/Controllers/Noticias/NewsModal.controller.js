import { newsData } from "../../data/newsData.js";
import { noticiaMMehb2026 } from "../../data/newsMMehb2026.js";
import { noticiaMescyt2026 } from "../../data/newsMescyt2026.js";
import { newsModal } from "../../components/Noticias/NewsModal.js";

const IDS_ESPECIALES = new Set([noticiaMMehb2026.id, noticiaMescyt2026.id]);
const TODAS_LAS_NOTICIAS = Object.freeze([
    noticiaMMehb2026,
    noticiaMescyt2026,
    ...newsData.filter((item) => !IDS_ESPECIALES.has(item.id))
]);

export function initNewsModalController(rootElement) {
    if (!rootElement) return;

    rootElement.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-news-btn], [data-news-card]");
        if (!trigger || !rootElement.contains(trigger)) return;

        const newsId = trigger.dataset.newsBtn || trigger.dataset.newsCard;
        const selectedNews = TODAS_LAS_NOTICIAS.find(
            (news) => String(news.id) === String(newsId)
        );

        if (!selectedNews) {
            console.warn("No se encontró la noticia con id:", newsId);
            return;
        }

        openNewsModal(selectedNews);
    });
}

function openNewsModal(news) {
    document.querySelector("#newsModal")?.remove();

    const wrapper = document.createElement("div");
    wrapper.innerHTML = newsModal(news);

    const modal = wrapper.firstElementChild;
    if (!modal) {
        console.warn("No se pudo crear el modal de noticia.");
        return;
    }

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    const closeModal = () => {
        modal.remove();
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
    };

    const handleEscape = (event) => {
        if (event.key === "Escape") closeModal();
    };

    modal.querySelectorAll("[data-close-modal]").forEach((button) => {
        button.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", handleEscape);
    modal.querySelector("[data-close-modal]")?.focus();
}
