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

            <div class="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p class="font-black text-slate-800">
                        1AC · Acumulado Primer Parcial
                    </p>

                    <p class="mt-2 text-sm text-slate-500">
                        Calificación máxima: 15 puntos.
                    </p>
                </div>

                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p class="font-black text-slate-800">
                        2PP · Primer Parcial
                    </p>

                    <p class="mt-2 text-sm text-slate-500">
                        Calificación máxima: 20 puntos.
                    </p>
                </div>
            </div>

            <div class="mt-6">
                <label
                    for="banner-primer-periodo-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Pegar desde Excel
                </label>

                <p class="mb-3 text-sm text-slate-500">
                    Formato esperado: matrícula, 1AC y 2PP.
                </p>

                <textarea
                    id="banner-primer-periodo-input"
                    rows="12"
                    spellcheck="false"
                    class="w-full resize-y rounded-2xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-[#5580C1] focus:ring-2 focus:ring-blue-100"
                    placeholder="A00124754    13    18
A00124733    15    17
A00125011    14    20"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        data-action="validate-first-period"
                        class="rounded-xl bg-[#5580C1] px-5 py-3 font-bold text-white transition hover:bg-[#446da8]"
                    >
                        Validar datos
                    </button>

                    <button
                        type="button"
                        data-action="clear-first-period"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>
            </div>
        </div>
    `;

    return section;
}
