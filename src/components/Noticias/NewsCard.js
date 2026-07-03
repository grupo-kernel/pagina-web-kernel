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
    imageFit = "contain"
}) {
    const imgClass =
        imageFit === "cover"
            ? "object-cover"
            : "object-contain";

    const nwCard = `
        <article
            data-news-card="${safeText(id)}"
            class="
                bg-white rounded-2xl overflow-hidden shadow-sm
                hover:shadow-xl transition duration-300 cursor-pointer
                border border-gray-100 flex flex-col h-full
            "
        >

            <div class="
                h-64 md:h-72 2xl:h-96
                overflow-hidden rounded-t-2xl
                bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100
                flex items-center justify-center
                p-3
            ">
                ${
                    image
                        ? `
                            <img
                                src="${safeText(image)}"
                                alt="${safeText(imageAlt || title)}"
                                class="w-full h-full ${imgClass} rounded-xl"
                                loading="lazy"
                            />
                          `
                        : `
                            <div class="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                                Imagen no disponible
                            </div>
                          `
                }
            </div>

            <div class="p-4 space-y-3 flex flex-col flex-1">

                <div class="flex items-center justify-between gap-3">
                    <span class="
                        inline-flex items-center rounded-full
                        bg-sky-50 text-sky-700 border border-sky-100
                        px-3 py-1 text-xs 2xl:text-lg
                        font-black uppercase tracking-wide
                    ">
                        ${safeText(category)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${safeText(date)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${safeText(title)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${safeText(excerpt)}
                </p>

                <button
                    type="button"
                    data-news-btn="${safeText(id)}"
                    aria-label="Ver detalles de la noticia ${safeText(title)}"
                    class="
                        mt-auto self-start lg:text-base 2xl:text-xl
                        font-bold text-blue-600
                        hover:text-blue-700 transition
                        underline-offset-4 hover:underline
                    "
                >
                    Más detalles
                </button>

            </div>
        </article>
    `;

    return nwCard;
}
