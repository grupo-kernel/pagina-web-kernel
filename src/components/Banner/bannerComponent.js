export function bannerComponent() {
    const container = document.createElement("section");

    container.className =
        "w-full max-w-7xl mx-auto px-4 py-8";

    container.innerHTML = `
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
            <p class="mb-2 text-sm font-black uppercase tracking-wide text-[#5580C1]">
                APEC · Ellucian Banner
            </p>

            <h2 class="text-2xl font-black text-slate-800 md:text-3xl">
                Generador de calificaciones para Banner
            </h2>

            <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                Esta herramienta permitirá crear, validar y exportar las
                calificaciones correspondientes a los componentes 1AC, 2PP,
                3SP y 4EF.
            </p>

            <div class="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <p class="font-bold text-slate-700">
                    Módulo Banner en construcción
                </p>

                <p class="mt-2 text-sm text-slate-500">
                    Próximo paso: importar las matrículas y los nombres de los
                    estudiantes desde Excel.
                </p>
            </div>
        </div>
    `;

    return container;
}
