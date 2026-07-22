function cerrarSelector() {
    document.querySelector(
        "[data-selector-instrumento='true']"
    )?.remove();
}

function crearSelectorInstrumento() {
    cerrarSelector();

    const fondo = document.createElement("div");
    fondo.dataset.selectorInstrumento = "true";
    fondo.className = `
        fixed inset-0 z-[100]
        bg-slate-950/70 backdrop-blur-sm
        flex items-center justify-center
        p-4
    `;
    fondo.innerHTML = `
        <section
            class="w-full max-w-4xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-selector-instrumento"
        >
            <header class="bg-slate-950 text-white px-6 py-7 md:px-9">
                <div class="flex items-start justify-between gap-5">
                    <div>
                        <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">
                            Tipo de instrumento
                        </p>
                        <h2 id="titulo-selector-instrumento" class="text-3xl font-black">
                            ¿Qué desea evaluar?
                        </h2>
                    </div>
                    <button
                        type="button"
                        data-action="cerrar-selector-instrumento"
                        class="rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-black hover:bg-white/20"
                        aria-label="Cerrar"
                    >
                        ×
                    </button>
                </div>
                <p class="text-slate-200 leading-relaxed mt-4 max-w-3xl">
                    Seleccione la herramienta según la naturaleza de las respuestas y el propósito del análisis.
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 md:p-9">
                <article class="rounded-3xl border border-amber-200 bg-amber-50 p-6 flex flex-col">
                    <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                        Escala o cuestionario
                    </p>
                    <h3 class="text-2xl font-black text-slate-900 mb-3">
                        Cuestionarios y fiabilidad
                    </h3>
                    <p class="text-slate-600 leading-relaxed mb-5">
                        Para respuestas Likert, escalas de actitudes, percepción, motivación u otros constructos medidos mediante varios ítems.
                    </p>
                    <ul class="space-y-2 text-sm text-slate-700 mb-6">
                        <li>✓ Alfa de Cronbach y omega</li>
                        <li>✓ KR-20 para ítems 0/1</li>
                        <li>✓ Correlación ítem–total</li>
                        <li>✓ Bootstrap y redundancia</li>
                    </ul>
                    <button
                        type="button"
                        data-route-instrumento="calculadoraFiabilidadCuestionarios"
                        class="mt-auto rounded-xl bg-amber-600 px-6 py-4 text-white font-black hover:bg-amber-700 transition-colors"
                    >
                        Analizar cuestionario
                    </button>
                </article>

                <article class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Prueba de conocimientos
                    </p>
                    <h3 class="text-2xl font-black text-slate-900 mb-3">
                        Evaluación educativa
                    </h3>
                    <p class="text-slate-600 leading-relaxed mb-5">
                        Para exámenes con respuestas correctas e incorrectas, preguntas de opción múltiple y análisis de distractores.
                    </p>
                    <ul class="space-y-2 text-sm text-slate-700 mb-6">
                        <li>✓ Dificultad y discriminación</li>
                        <li>✓ Correlación punto-biserial</li>
                        <li>✓ KR-20 de la prueba</li>
                        <li>✓ Calidad de distractores</li>
                    </ul>
                    <button
                        type="button"
                        data-route-instrumento="calculadoraEvaluacionEducativa"
                        class="mt-auto rounded-xl bg-emerald-700 px-6 py-4 text-white font-black hover:bg-emerald-800 transition-colors"
                    >
                        Analizar prueba
                    </button>
                </article>
            </div>
        </section>
    `;

    fondo.addEventListener("click", (event) => {
        const ruta = event.target.closest(
            "[data-route-instrumento]"
        )?.dataset.routeInstrumento;

        if (ruta) {
            cerrarSelector();
            window.location.hash = `/${ruta}`;
            return;
        }

        if (
            event.target === fondo ||
            event.target.closest(
                "[data-action='cerrar-selector-instrumento']"
            )
        ) {
            cerrarSelector();
        }
    });

    document.body.appendChild(fondo);
    fondo.querySelector(
        "[data-route-instrumento]"
    )?.focus();
}

function manejarSeleccionInstrumento(event) {
    const boton = event.target.closest(
        "#asistente-pruebas [data-value='instrumento']"
    );

    if (!boton) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    crearSelectorInstrumento();
}

export function iniciarIntegracionFiabilidadAsistente() {
    document.addEventListener(
        "click",
        manejarSeleccionInstrumento,
        true
    );
}
