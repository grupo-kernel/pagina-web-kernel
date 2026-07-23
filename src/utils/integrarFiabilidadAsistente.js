let destruirSelector = null;

function cerrarSelector({ restaurarFoco = true } = {}) {
    if (destruirSelector) {
        const destruir = destruirSelector;
        destruirSelector = null;
        destruir(restaurarFoco);
        return;
    }

    document.querySelector("[data-selector-instrumento='true']")?.remove();
}

function crearSelectorInstrumento() {
    cerrarSelector({ restaurarFoco: false });

    const elementoAnterior = document.activeElement;
    const overflowAnterior = document.body.style.overflow;
    const fondo = document.createElement("div");
    fondo.dataset.selectorInstrumento = "true";
    fondo.className = `
        fixed inset-0 z-[500]
        bg-slate-950/70 backdrop-blur-sm
        flex items-center justify-center
        overflow-y-auto p-4
    `;
    fondo.innerHTML = `
        <section
            class="w-full max-w-4xl max-h-[calc(100svh-2rem)] rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-selector-instrumento"
            aria-describedby="descripcion-selector-instrumento"
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
                        aria-label="Cerrar el selector de tipo de instrumento"
                    >
                        ×
                    </button>
                </div>
                <p id="descripcion-selector-instrumento" class="text-slate-200 leading-relaxed mt-4 max-w-3xl">
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
                        class="mt-auto rounded-xl bg-amber-700 px-6 py-4 text-white font-black hover:bg-amber-800 transition-colors"
                        aria-label="Abrir la calculadora de cuestionarios y fiabilidad"
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
                        aria-label="Abrir la calculadora de evaluación educativa"
                    >
                        Analizar prueba
                    </button>
                </article>
            </div>
        </section>
    `;

    const controlesFoco = () => [...fondo.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter((control) => control.getAttribute("aria-hidden") !== "true");

    const manejarTecla = (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            cerrarSelector();
            return;
        }

        if (event.key !== "Tab") return;
        const controles = controlesFoco();
        if (!controles.length) {
            event.preventDefault();
            return;
        }

        const primero = controles[0];
        const ultimo = controles.at(-1);
        if (event.shiftKey && document.activeElement === primero) {
            event.preventDefault();
            ultimo.focus();
        } else if (!event.shiftKey && document.activeElement === ultimo) {
            event.preventDefault();
            primero.focus();
        }
    };

    const manejarCambioRuta = () => {
        cerrarSelector({ restaurarFoco: false });
    };

    destruirSelector = (restaurarFoco) => {
        document.removeEventListener("keydown", manejarTecla);
        window.removeEventListener("hashchange", manejarCambioRuta);
        fondo.remove();
        document.body.style.overflow = overflowAnterior;

        if (
            restaurarFoco &&
            elementoAnterior instanceof HTMLElement &&
            elementoAnterior.isConnected
        ) {
            elementoAnterior.focus();
        }
    };

    fondo.addEventListener("click", (event) => {
        const ruta = event.target.closest(
            "[data-route-instrumento]"
        )?.dataset.routeInstrumento;

        if (ruta) {
            cerrarSelector({ restaurarFoco: false });
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
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", manejarTecla);
    window.addEventListener("hashchange", manejarCambioRuta);
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
