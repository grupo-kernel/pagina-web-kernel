export function calificacionFinalComponent() {
    const section = document.createElement("section");

    section.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8";

    section.innerHTML = `
        <div>
            <p class="mb-2 text-sm font-black uppercase tracking-wide text-[#5580C1]">
                Calificación final
            </p>

            <h3 class="text-2xl font-black text-slate-800">
                Publicación del examen final
            </h3>

            <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                Aquí se preparará la publicación del componente
                4EF correspondiente al examen final.
            </p>
        </div>
    `;

    return section;
}
