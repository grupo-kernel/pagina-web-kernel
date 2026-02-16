import { newsData } from "../../data/newsData.js";
import { newsModal } from "../../components/Noticias/NewsModal.js";

export function initNewsModalController(container) {
    if (!container) return;

    container.addEventListener("click", handleOpenClick);

    document.addEventListener("click", handleCloseClick);
    document.addEventListener("keydown", handleKeydown);
}


function handleOpenClick(event) {
    const openButton = event.target.closest("[data-news-btn]");
    if (!openButton) return;

    const id = openButton.dataset.newsBtn;
    const news = newsData.find(n => n.id === id);
    if (!news) return;

    openModal(news);
}

function handleCloseClick(event) {
    const closeButton = event.target.closest("[data-close-modal]");
    const overlayClick = event.target.id === "newsModal";

    if (closeButton || overlayClick) {
        closeModal();
    }
}

function handleKeydown(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}



function openModal(news) {
    closeModal();

    document.body.insertAdjacentHTML(
        "beforeend",
        newsModal(news)
    );

    document.body.classList.add("overflow-hidden");
}

function closeModal() {
    const modal = document.getElementById("newsModal");
    if (!modal) return;

    modal.remove();
    document.body.classList.remove("overflow-hidden");
}
