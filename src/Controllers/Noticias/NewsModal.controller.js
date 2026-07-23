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
let cerrarModalNoticiaActivo = null;

export function initNewsModalController(rootElement) {
    if (!rootElement) return;

    rootElement.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-news-btn]");
        if (!trigger || !rootElement.contains(trigger)) return;

        const newsId = trigger.dataset.newsBtn || trigger.dataset.newsCard;
        const selectedNews = TODAS_LAS_NOTICIAS.find(
            (news) => String(news.id) === String(newsId)
        );

        if (!selectedNews) {
            console.warn("No se encontró la noticia con id:", newsId);
            return;
        }

        openNewsModal(selectedNews, trigger);
    });
}

function openNewsModal(news, trigger) {
    cerrarModalNoticiaActivo?.({ restaurarFoco: false });

    const wrapper = document.createElement("div");
    wrapper.innerHTML = newsModal(news);

    const modal = wrapper.firstElementChild;
    if (!modal) {
        console.warn("No se pudo crear el modal de noticia.");
        return;
    }

    const overflowAnterior = document.body.style.overflow;
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    const previouslyFocused =
        trigger instanceof HTMLElement ? trigger : document.activeElement;
    let cerrado = false;

    const closeModal = ({ restaurarFoco = true } = {}) => {
        if (cerrado) return;
        cerrado = true;
        modal.remove();
        document.body.style.overflow = overflowAnterior;
        document.removeEventListener("keydown", handleKeyboard);
        window.removeEventListener("hashchange", handleHashChange);
        if (cerrarModalNoticiaActivo === closeModal) {
            cerrarModalNoticiaActivo = null;
        }

        if (
            restaurarFoco &&
            previouslyFocused instanceof HTMLElement &&
            previouslyFocused.isConnected
        ) {
            previouslyFocused.focus();
        }
    };

    const handleHashChange = () => {
        closeModal({ restaurarFoco: false });
    };

    const handleKeyboard = (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closeModal();
            return;
        }

        if (event.key !== "Tab") return;

        const focusable = Array.from(
            modal.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
        ).filter(
            (element) =>
                element instanceof HTMLElement &&
                element.getAttribute("aria-hidden") !== "true"
        );

        if (!focusable.length) {
            event.preventDefault();
            modal.focus();
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };

    modal.querySelectorAll("[data-close-modal]").forEach((button) => {
        button.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    cerrarModalNoticiaActivo = closeModal;
    document.addEventListener("keydown", handleKeyboard);
    window.addEventListener("hashchange", handleHashChange);
    modal.querySelector("[data-close-modal]")?.focus();
}
