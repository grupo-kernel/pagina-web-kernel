import { renderMMehbPoster } from "./MMehbPoster.js";

function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export function newsCard({
    id,
    title,
    date,
    image,
    imageAlt,
    excerpt,
    category = "Noticia",
    imageFit = "contain",
    visualType = "image"
}) {
    const imgClass = imageFit === "cover" ? "object-cover" : "object-contain";
    const esPosterMMehb = visualType === "mmehb-2026";
    const altoVisual = esPosterMMehb ? "h-[430px] md:h-[500px]" : "h-64 md:h-72 2xl:h-96";

    const visual = esPosterMMehb
        ? renderMMehbPoster({ compacto: true })
        : image
            ? `
                <img
                    src="${safeText(image)}"
                    alt="${safeText(imageAlt || title)}"
                    class="h-full w-full ${imgClass} rounded-xl"
                    loading="lazy"
                />
              `
            : `
                <div class="flex h-full w-full items-center justify-center font-bold text-slate-400">
                    Imagen no disponible
                </div>
              `;

    return `
        <article
            data-news-card="${safeText(id)}"
            class="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div class="${altoVisual} flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 p-3">
                ${visual}
            </div>

            <div class="flex flex-1 flex-col space-y-3 p-5">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <span class="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0b5963]">
                        ${safeText(category)}
                    </span>
                    <span class="text-sm font-semibold text-slate-500">${safeText(date)}</span>
                </div>

                <h3 class="text-lg font-black leading-tight text-slate-900 2xl:text-2xl">${safeText(title)}</h3>
                <p class="text-sm leading-relaxed text-slate-600 2xl:text-xl">${safeText(excerpt)}</p>

                <button
                    type="button"
                    data-news-btn="${safeText(id)}"
                    aria-label="Ver detalles de la noticia ${safeText(title)}"
                    class="mt-auto self-start font-black text-[#0b5963] transition hover:text-[#063e46] hover:underline 2xl:text-xl"
                >
                    Más detalles →
                </button>
            </div>
        </article>
    `;
}
