export function primerPeriodoComponent() {
    const section = document.createElement("section");

    section.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8";

    section.innerHTML = `
        <div>
            <p class="mb-2 text-sm font-black uppercase tracking-wide text-[#5580C1]">
                Primer período
            </p>

            <h3 class="text-2xl font-black text-slate-800">
                Publicación del primer corte
            </h3>

            <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                Pegue desde Excel las matrículas y las calificaciones
                correspondientes a 1AC y 2PP.
            </p>
        </div>
    `;

    return section;
}
