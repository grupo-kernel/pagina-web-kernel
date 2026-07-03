import { newsData } from "../../data/newsData.js";
import { newsModal } from "../../components/Noticias/NewsModal.js";

function ordenarNoticias(newsList = []) {
    return [...newsList].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
}

export function initNewsModalController(rootElement) {
    if (!rootElement) {
        return;
    }

    const orderedNews = ordenarNoticias(newsData);

    rootElement.addEventListener("click", event => {
        const trigger = event.target.closest("[data-news-btn], [data-news-card]");

        if (!trigger || !rootElement.contains(trigger)) {
            return;
        }

        const newsId = trigger.dataset.newsBtn || trigger.dataset.newsCard;

        const selectedNews = orderedNews.find(
            news => String(news.id) === String(newsId)
        );

        if (!selectedNews) {
            console.warn("No se encontró la noticia con id:", newsId);
            return;
        }

        openNewsModal(selectedNews);
    });
}

function openNewsModal(news) {
    const previousModal = document.querySelector("#newsModal");

    if (previousModal) {
        previousModal.remove();
    }

    const wrapper = document.createElement("div");
    wrapper.innerHTML = newsModal(news);

    const modal = wrapper.firstElementChild;

    if (!modal) {
        return;
    }

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    function closeModal() {
        modal.remove();
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
    }

    function handleEscape(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }

    modal.querySelectorAll("[data-close-modal]").forEach(button => {
        button.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", handleEscape);
}
