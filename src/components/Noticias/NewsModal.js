function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function safeUrl(value) {
    const url = String(value ?? "").trim();

    if (!url) {
        return "#";
    }

    if (/^(https?:\/\/|mailto:|#\/|\/)/i.test(url)) {
        return safeText(url);
    }

    return "#";
}

function normalizeGalleryItem(item) {
    if (typeof item === "string") {
        return {
            src: item,
            caption: ""
        };
    }

    return {
        src: item?.src || item?.image || "",
        caption: item?.caption || item?.title || ""
    };
}

function renderParagraphs(content) {
    const paragraphs = content?.paragraphs || [];

    return paragraphs
        .map(paragraph => `
            <p class="text-gray-700 leading-relaxed text-base md:text-lg">
                ${safeText(paragraph)}
            </p>
        `)
        .join("");
}

function renderList(content) {
    const list = content?.list || [];

    if (!list.length) {
        return "";
    }

    return `
        <div class="bg-sky-50 border border-sky-100 rounded-2xl p-5">
            <h3 class="text-slate-900 font-black text-lg mb-3">
                Aspectos destacados
            </h3>

            <ul class="space-y-2">
                ${list.map(item => `
                    <li class="flex gap-2 text-gray-700 leading-relaxed">
                        <span class="text-sky-600 font-black">•</span>
                        <span>${safeText(item)}</span>
                    </li>
                `).join("")}
            </ul>
        </div>
    `;
}

function renderTags(tags) {
    if (!Array.isArray(tags) || !tags.length) {
        return "";
    }

    return `
        <div class="flex flex-wrap gap-2 mt-4">
            ${tags.map(tag => `
                <span class="
                    inline-flex items-center rounded-full
                    bg-slate-100 text-slate-600 border border-slate-200
                    px-3 py-1 text-xs font-bold
                ">
                    ${safeText(tag)}
                </span>
            `).join("")}
        </div>
    `;
}

function renderTalks(talks) {
    if (!Array.isArray(talks) || !talks.length) {
        return "";
    }

    return `
        <section class="space-y-4">
            <div>
                <p class="text-sky-600 font-black uppercase tracking-wide text-xs mb-1">
                    Simposio
                </p>

                <h3 class="text-2xl font-black text-slate-900">
                    Ponencias presentadas
                </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${talks.map(talk => `
                    <article class="
                        bg-white border border-slate-200 rounded-2xl
                        p-4 shadow-sm hover:shadow-md transition
                    ">
                        ${
                            talk.image
                                ? `
                                    <div class="
                                        h-56 bg-slate-50 rounded-xl mb-4
                                        flex items-center justify-center
                                        overflow-hidden p-2 border border-slate-100
                                    ">
                                        <img
                                            src="${safeText(talk.image)}"
                                            alt="${safeText(talk.title)}"
                                            class="w-full h-full object-contain rounded-lg"
                                            loading="lazy"
                                        >
                                    </div>
                                  `
                                : ""
                        }

                        <div class="flex items-center gap-2 mb-3">
                            <span class="
                                bg-sky-600 text-white w-8 h-8 rounded-full
                                flex items-center justify-center font-black text-sm
                            ">
                                ${safeText(talk.order)}
                            </span>

                            <p class="text-sky-700 font-black text-sm leading-tight">
                                ${safeText(talk.speaker)}
                            </p>
                        </div>

                        <h4 class="text-slate-900 font-black leading-tight mb-2">
                            ${safeText(talk.title)}
                        </h4>

                        ${
                            talk.subtitle
                                ? `
                                    <p class="text-slate-500 font-bold text-sm mb-2 leading-snug">
                                        ${safeText(talk.subtitle)}
                                    </p>
                                  `
                                : ""
                        }

                        ${
                            talk.summary
                                ? `
                                    <p class="text-slate-600 text-sm leading-relaxed">
                                        ${safeText(talk.summary)}
                                    </p>
                                  `
                                : ""
                        }
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function renderGallery(gallery, title) {
    const items = (gallery || [])
        .map(normalizeGalleryItem)
        .filter(item => item.src);

    if (!items.length) {
        return "";
    }

    return `
        <section class="space-y-4">
            <div>
                <p class="text-sky-600 font-black uppercase tracking-wide text-xs mb-1">
                    Registro visual
                </p>

                <h3 class="text-2xl font-black text-slate-900">
                    Galería de la actividad
                </h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${items.map(item => `
                    <figure class="
                        bg-slate-50 border border-slate-200 rounded-2xl
                        p-3 shadow-sm
                    ">
                        <a href="${safeText(item.src)}"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="
                               block h-64 md:h-72 rounded-xl
                               bg-white overflow-hidden
                           ">
                            <img
                                src="${safeText(item.src)}"
                                alt="${safeText(item.caption || title)}"
                                class="w-full h-full object-contain rounded-xl"
                                loading="lazy"
                            >
                        </a>

                        ${
                            item.caption
                                ? `
                                    <figcaption class="mt-3 text-sm text-slate-600 leading-relaxed font-semibold">
                                        ${safeText(item.caption)}
                                    </figcaption>
                                  `
                                : ""
                        }
                    </figure>
                `).join("")}
            </div>
        </section>
    `;
}

export function newsModal({
    title,
    date,
    image,
    imageAlt,
    excerpt,
    category = "Noticia",
    content = { paragraphs: [], list: [] },
    articleURL,
    gallery = [],
    talks = [],
    tags = []
}) {
    const paragraphs = renderParagraphs(content);
    const list = renderList(content);
    const talksHtml = renderTalks(talks);
    const galleryHtml = renderGallery(gallery, title);
    const tagsHtml = renderTags(tags);

    const nwModal = `
        <div
            role="dialog"
            aria-modal="true"
            id="newsModal"
            class="
                fixed inset-0 bg-black/70 backdrop-blur-sm
                flex items-center justify-center z-50 p-4
            "
        >
            <div class="
                bg-white w-full max-w-6xl
                rounded-3xl shadow-2xl relative animate-modalIn
                max-h-[92vh] flex flex-col overflow-hidden
            ">

                <div class="relative p-5 md:p-7 border-b border-gray-200 bg-white">
                    <div class="pr-12">
                        <span class="
                            inline-flex items-center rounded-full
                            bg-sky-50 text-sky-700 border border-sky-100
                            px-3 py-1 text-xs font-black uppercase tracking-wide mb-3
                        ">
                            ${safeText(category)}
                        </span>

                        <h2 class="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
                            ${safeText(title)}
                        </h2>

                        ${
                            date
                                ? `
                                    <p class="text-slate-400 font-bold mt-2">
                                        ${safeText(date)}
                                    </p>
                                  `
                                : ""
                        }
                    </div>

                    <button
                        type="button"
                        data-close-modal
                        class="
                            absolute top-5 right-5 w-10 h-10
                            flex items-center justify-center rounded-full
                            bg-slate-900 hover:bg-sky-700
                            text-white text-lg font-bold transition
                        "
                        aria-label="Cerrar noticia"
                    >
                        ✕
                    </button>
                </div>

                <div class="p-5 md:p-7 overflow-y-auto flex-1 space-y-8">

                    ${
                        image
                            ? `
                                <div class="
                                    w-full h-72 md:h-[520px]
                                    bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100
                                    border border-slate-200 rounded-2xl
                                    flex items-center justify-center
                                    overflow-hidden p-3
                                ">
                                    <img
                                        src="${safeText(image)}"
                                        alt="${safeText(imageAlt || title)}"
                                        class="w-full h-full object-contain rounded-xl"
                                        loading="lazy"
                                    >
                                </div>
                              `
                            : ""
                    }

                    <div class="max-w-4xl space-y-5">
                        ${
                            excerpt
                                ? `
                                    <p class="
                                        text-lg md:text-xl text-slate-700
                                        font-semibold leading-relaxed
                                        border-l-4 border-sky-500 pl-4
                                    ">
                                        ${safeText(excerpt)}
                                    </p>
                                  `
                                : ""
                        }

                        ${paragraphs}
                        ${list}
                        ${tagsHtml}
                    </div>

                    ${talksHtml}
                    ${galleryHtml}

                </div>

                <div class="
                    p-4 md:p-5 border-t border-gray-200
                    flex flex-wrap justify-end gap-3 bg-white
                ">

                    ${
                        articleURL
                            ? `
                                <a href="${safeUrl(articleURL)}"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="
                                       px-5 py-2.5 rounded-full
                                       bg-blue-600 text-white font-bold
                                       hover:bg-blue-700 transition
                                   ">
                                    Leer artículo
                                </a>
                              `
                            : ""
                    }

                    <button
                        type="button"
                        data-close-modal
                        class="
                            px-5 py-2.5 rounded-full
                            border border-gray-300 text-gray-700 font-bold
                            hover:bg-gray-100 transition
                        "
                    >
                        Cerrar
                    </button>

                </div>
            </div>
        </div>
    `;

    return nwModal;
}
