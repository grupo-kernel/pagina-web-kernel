import { renderMMehbPoster } from "./MMehbPoster.js";
import { renderMescytPoster } from "./MescytPoster.js";

function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderVisualDestacado(featuredNews) {
    if (featuredNews?.visualType === "mmehb-2026") return renderMMehbPoster();
    if (featuredNews?.visualType === "mescyt-cic-2026") return renderMescytPoster();

    const imgClass = featuredNews?.imageFit === "cover" ? "object-cover" : "object-contain";

    if (featuredNews?.image) {
        return `
            <img
                src="${safeText(featuredNews.image)}"
                alt="${safeText(featuredNews.imageAlt || featuredNews.title)}"
                class="h-full max-h-[680px] w-full rounded-2xl ${imgClass}"
                loading="eager"
            />
        `;
    }

    return `<div class="flex h-full w-full items-center justify-center font-bold text-slate-400">Imagen no disponible</div>`;
}

export function newsHero(featuredNews = null) {
    if (!featuredNews) return "";

    return `
        <section class="w-full px-4 py-10 sm:px-6 md:py-14 lg:px-10" aria-labelledby="titulo-noticia-destacada">
            <div class="mx-auto grid max-w-[1600px] grid-cols-1 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
                <div class="min-h-[520px] bg-slate-100 p-4 md:p-6 lg:min-h-[680px]">
                    ${renderVisualDestacado(featuredNews)}
                </div>

                <div class="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                    <div class="mb-5 flex flex-wrap items-center gap-3">
                        <span class="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0b5963]">${safeText(featuredNews.category || "Noticia destacada")}</span>
                        <span class="text-sm font-bold text-slate-500">${safeText(featuredNews.date)}</span>
                    </div>

                    <h2 id="titulo-noticia-destacada" class="text-3xl font-black leading-tight text-slate-950 md:text-5xl">${safeText(featuredNews.title)}</h2>
                    <p class="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">${safeText(featuredNews.excerpt)}</p>

                    ${Array.isArray(featuredNews.tags) && featuredNews.tags.length
                        ? `<div class="mt-6 flex flex-wrap gap-2">${featuredNews.tags.map((tag) => `<span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">${safeText(tag)}</span>`).join("")}</div>`
                        : ""}

                    <button type="button" data-news-btn="${safeText(featuredNews.id)}" class="mt-8 inline-flex self-start items-center justify-center gap-2 rounded-xl bg-[#0b5963] px-6 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#063e46]">
                        Leer noticia destacada →
                    </button>
                </div>
            </div>
        </section>
    `;
}
