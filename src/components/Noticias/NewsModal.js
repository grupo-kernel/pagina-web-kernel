import { renderMMehbPoster } from "./MMehbPoster.js";

function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export function newsModal({
    title,
    date,
    category,
    visualType,
    content = { paragraphs: [], list: [] },
    articleURL
}) {
    const paragraphs = (content.paragraphs || [])
        .map((paragraph) => `<p>${safeText(paragraph)}</p>`)
        .join("");

    const list = (content.list || []).length
        ? `<ul class="space-y-3">${content.list.map((item) => `<li class="flex items-start gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0b5963]"></span><span>${safeText(item)}</span></li>`).join("")}</ul>`
        : "";

    const poster = visualType === "mmehb-2026"
        ? `<div class="mb-7">${renderMMehbPoster()}</div>`
        : "";

    return `
        <div role="dialog" aria-modal="true" aria-labelledby="titulo-modal-noticia" id="newsModal" class="fixed inset-0 z-[500] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm md:p-6">
            <article class="flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                <header class="relative border-b border-slate-200 bg-[#071820] px-6 py-6 text-white md:px-9">
                    <div class="pr-12">
                        <div class="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-widest text-cyan-200">
                            <span>${safeText(category || "Noticia")}</span>
                            <span aria-hidden="true">·</span>
                            <span>${safeText(date || "")}</span>
                        </div>
                        <h2 id="titulo-modal-noticia" class="mt-3 text-2xl font-black leading-tight md:text-4xl">${safeText(title)}</h2>
                    </div>
                    <button type="button" data-close-modal aria-label="Cerrar noticia" class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl font-black text-white transition hover:bg-white hover:text-slate-950">×</button>
                </header>

                <div class="flex-1 overflow-y-auto px-5 py-6 md:px-9 md:py-8">
                    ${poster}
                    <div class="space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">${paragraphs}</div>
                    ${list ? `<section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-7"><h3 class="mb-5 text-xl font-black text-slate-950">Datos principales</h3>${list}</section>` : ""}
                </div>

                <footer class="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-5 py-5 sm:flex-row sm:justify-end md:px-9">
                    ${articleURL ? `<a href="${safeText(articleURL)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl bg-[#0b5963] px-5 py-3 font-black text-white transition hover:bg-[#063e46]">Consultar sitio oficial</a>` : ""}
                    <button type="button" data-close-modal class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100">Cerrar</button>
                </footer>
            </article>
        </div>
    `;
}
