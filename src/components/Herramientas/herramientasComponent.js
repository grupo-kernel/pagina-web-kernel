import { bannerComponent } from "../Banner/bannerComponent.js";
import { parseXmeraRows, generateXmeraCode } from "../../utils/xmeraCalificaciones.js";

export function herramientasComponent() {
    const container = document.createElement("section");

    container.className = "w-full max-w-7xl mx-auto px-4 py-8";

    container.innerHTML = `
        <div class="mb-8 text-center">
            <p class="mb-2 text-sm font-bold uppercase tracking-wide text-sky-600">
                Grupo de Investigación Ker(F)
            </p>

            <h1 class="text-3xl font-black leading-tight text-slate-800 md:text-4xl">
                Herramientas Académicas
            </h1>

            <p class="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 md:text-base">
                Utilidades digitales para facilitar tareas docentes, académicas
                y administrativas.
            </p>
        </div>

        <div class="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
                id="tab-xmera"
                type="button"
                class="rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition"
            >
                ITLA · Xmera
            </button>

            <button
                id="tab-banner"
                type="button"
                class="rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100"
            >
                APEC · Banner
            </button>
        </div>

        <div id="panel-xmera">
            <div class="rounded-3xl border border-sky-100 bg-white p-6 shadow-xl md:p-8">
                <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-bold uppercase tracking-wide text-sky-600">
                            ITLA · Xmera
                        </p>

                        <h2 class="text-2xl font-black text-slate-800 md:text-3xl">
                            Generador de calificaciones para Xmera
                        </h2>

                        <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                            Copia desde Excel tres columnas: matrícula,
                            prácticas/asignaciones y parcial, en ese orden y
                            sin encabezados. Cada estudiante debe ocupar una línea.
                        </p>
                    </div>

                    <div class="shrink-0">
                        <i class="bx bx-code-alt text-6xl text-sky-600"></i>
                    </div>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <label
                            for="xmera-input"
                            class="mb-2 block text-sm font-black text-slate-800"
                        >
                            Matrículas y calificaciones
                        </label>

                        <p class="mb-4 text-sm text-slate-500">
                            Prácticas/asignaciones: de 0 a 60. Parcial: de 0 a 20,
                            siempre dentro del máximo de cada casilla de Xmera.
                            Una celda vacía conserva la nota existente; 0 coloca cero.
                        </p>

                        <textarea
                            id="xmera-input"
                            rows="14"
                            spellcheck="false"
                            class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                            placeholder="2025-0893&#9;45&#9;18&#10;2021-2267&#9;52&#9;16"
                        ></textarea>

                        <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                            <button
                                id="xmera-generate"
                                type="button"
                                class="flex-1 rounded-xl bg-sky-600 px-5 py-3 font-bold text-white transition hover:bg-sky-700"
                            >
                                Generar código
                            </button>

                            <button
                                id="xmera-clear"
                                type="button"
                                class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-100"
                            >
                                Limpiar
                            </button>
                        </div>

                        <div
                            id="xmera-message"
                            role="status"
                            aria-live="polite"
                            class="mt-4 hidden rounded-xl px-4 py-3 text-sm font-semibold"
                        ></div>
                    </div>

                    <div class="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p class="text-sm font-black text-white">
                                    Código generado
                                </p>

                                <p class="mt-1 text-xs text-slate-400">
                                    Completa las coincidencias por matrícula y pulsa
                                    «Guardar Calificaciones» en Xmera.
                                </p>
                            </div>

                            <button
                                id="xmera-copy"
                                type="button"
                                disabled
                                class="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Copiar código
                            </button>
                        </div>

                        <pre
                            id="xmera-output"
                            class="min-h-[350px] max-h-[520px] overflow-auto whitespace-pre-wrap break-words rounded-xl bg-black/30 p-4 font-mono text-sm text-emerald-300"
                        ></pre>
                    </div>
                </div>

                <div class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <p class="font-black text-amber-900">
                        Antes de guardar
                    </p>

                    <p class="mt-2 text-sm text-amber-800">
                        La segunda columna se coloca en «Prácticas» o «Asignaciones»,
                        según la pantalla. Mantén las tres columnas, aunque una nota
                        esté vacía. No se convierten las notas ni se cambia su escala.
                        Si alguna supera el límite de su casilla, el proceso se detiene
                        antes de modificar las notas.
                    </p>
                </div>

                <ol class="mt-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                    <li>En ITLA, abre «Digitar Calificación» en la sección y el parcial correspondientes.</li>
                    <li>Revisa el interruptor «Publicar»: el código conserva su estado.</li>
                    <li>Genera y copia el código. Pégalo en la consola de esa pantalla y pulsa Enter.
                        En Chrome o Edge: Ctrl + Mayús + J en Windows; ⌘ + ⌥ + J en Mac.</li>
                    <li>Comprueba el aviso de guardado de Xmera. Solo se completan las matrículas
                        cargadas en la página; las ausentes se enumeran en la consola.</li>
                </ol>
                <p class="mt-4 text-sm text-slate-500">Las calificaciones se procesan en tu navegador; esta herramienta no las envía al sitio de Ker(F).</p>
            </div>
        </div>

        <div id="panel-banner" class="hidden"></div>
    `;

    const input = container.querySelector("#xmera-input");
    const output = container.querySelector("#xmera-output");
    const generateButton = container.querySelector("#xmera-generate");
    const copyButton = container.querySelector("#xmera-copy");
    const clearButton = container.querySelector("#xmera-clear");
    const message = container.querySelector("#xmera-message");

    const tabXmera = container.querySelector("#tab-xmera");
    const tabBanner = container.querySelector("#tab-banner");
    const panelXmera = container.querySelector("#panel-xmera");
    const panelBanner = container.querySelector("#panel-banner");

    function resetOutput() {
        output.textContent = "";
        copyButton.disabled = true;
    }

    function showMessage(text, type = "success") {
        message.textContent = text;

        message.classList.remove(
            "hidden",
            "border",
            "border-emerald-200",
            "bg-emerald-50",
            "text-emerald-800",
            "border-red-200",
            "bg-red-50",
            "text-red-800"
        );

        message.classList.add("border");

        if (type === "error") {
            message.classList.add(
                "border-red-200",
                "bg-red-50",
                "text-red-800"
            );
        } else {
            message.classList.add(
                "border-emerald-200",
                "bg-emerald-50",
                "text-emerald-800"
            );
        }
    }

    function activateTab(activeTab) {
        const showXmera = activeTab === "xmera";

        panelXmera.classList.toggle("hidden", !showXmera);
        panelBanner.classList.toggle("hidden", showXmera);

        tabXmera.className = showXmera
            ? "rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition"
            : "rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100";

        tabBanner.className = !showXmera
            ? "rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"
            : "rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100";
    }

    generateButton.addEventListener("click", () => {
        resetOutput();

        try {
            const records = parseXmeraRows(input.value);
            output.textContent = generateXmeraCode(records);
            copyButton.disabled = false;

            showMessage(
                `Código listo: ${records.length} matrícula${records.length === 1 ? "" : "s"}. Se guardarán únicamente las coincidencias de la página abierta.`
            );
        } catch (error) {
            showMessage(error.message, "error");
        }
    });

    input.addEventListener("input", () => {
        resetOutput();
        message.textContent = "";
        message.classList.add("hidden");
    });

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(
                output.textContent
            );

            showMessage(
                "El código fue copiado al portapapeles."
            );
        } catch (error) {
            console.error(
                "No fue posible copiar el código:",
                error
            );

            showMessage(
                "No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.",
                "error"
            );
        }
    });

    clearButton.addEventListener("click", () => {
        input.value = "";

        resetOutput();

        message.textContent = "";
        message.classList.add("hidden");

        input.focus();
    });

    try {
        const bannerSection = bannerComponent();

        if (bannerSection instanceof HTMLElement) {
            panelBanner.appendChild(bannerSection);
        } else {
            throw new Error(
                "bannerComponent() no devolvió un elemento HTML válido."
            );
        }
    } catch (error) {
        console.error(
            "No fue posible cargar el módulo Banner:",
            error
        );

        panelBanner.innerHTML = `
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `;
    }

    tabXmera.addEventListener("click", () => {
        activateTab("xmera");
    });

    tabBanner.addEventListener("click", () => {
        activateTab("banner");
    });

    activateTab("xmera");

    return container;
}

