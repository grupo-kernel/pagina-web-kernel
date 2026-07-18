export function herramientasComponent() {
    const container = document.createElement("section");

    container.className = "w-full max-w-7xl mx-auto px-4 py-8";

    container.innerHTML = `
        <div class="mb-8 text-center">
            <p class="text-sky-600 font-bold uppercase tracking-wide text-sm mb-2">
                Grupo de Investigación Kernel
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                Herramientas Académicas
            </h1>

            <p class="text-slate-500 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                Utilidades digitales para facilitar tareas docentes, académicas
                y administrativas.
            </p>
        </div>

        <div class="bg-white rounded-3xl shadow-xl border border-sky-100 p-6 md:p-8">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                    <p class="text-sky-600 text-sm font-bold uppercase tracking-wide mb-2">
                        Primera herramienta
                    </p>

                    <h2 class="text-2xl md:text-3xl font-black text-slate-800">
                        Generador de calificaciones para Xmera
                    </h2>

                    <p class="text-slate-500 mt-3 max-w-3xl leading-relaxed">
                        Pega las matrículas y calificaciones desde Excel o escríbelas
                        manualmente. Cada estudiante debe ocupar una línea.
                    </p>
                </div>

                <div class="shrink-0">
                    <i class="bx bx-code-alt text-6xl text-sky-600"></i>
                </div>
            </div>

            <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                    <label
                        for="xmera-input"
                        class="block text-sm font-black text-slate-800 mb-2"
                    >
                        Matrículas y calificaciones
                    </label>

                    <p class="text-sm text-slate-500 mb-4">
                        Ejemplo: matrícula, primera nota y segunda nota.
                        Puedes separar los valores con espacios, tabulaciones, comas
                        o punto y coma.
                    </p>

                    <textarea
                        id="xmera-input"
                        rows="14"
                        spellcheck="false"
                        class="w-full rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 resize-y"
                        placeholder="20250893    18    4
20212267    13    5
202010828    19
20252000     0"
                    ></textarea>

                    <div class="mt-4 flex flex-col sm:flex-row gap-3">
                        <button
                            id="xmera-generate"
                            type="button"
                            class="flex-1 rounded-xl bg-sky-600 px-5 py-3 font-bold text-white hover:bg-sky-700 transition"
                        >
                            Generar código
                        </button>

                        <button
                            id="xmera-clear"
                            type="button"
                            class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 hover:bg-slate-100 transition"
                        >
                            Limpiar
                        </button>
                    </div>

                    <div
                        id="xmera-message"
                        class="hidden mt-4 rounded-xl px-4 py-3 text-sm font-semibold"
                    ></div>
                </div>

                <div class="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <div>
                            <p class="text-sm font-black text-white">
                                Código generado
                            </p>

                            <p class="text-xs text-slate-400 mt-1">
                                Copia este código y pégalo en Xmera.
                            </p>
                        </div>

                        <button
                            id="xmera-copy"
                            type="button"
                            disabled
                            class="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/20 transition disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Copiar código
                        </button>
                    </div>

                    <pre
                        id="xmera-output"
                        class="min-h-[350px] max-h-[520px] overflow-auto whitespace-pre-wrap break-words rounded-xl bg-black/30 p-4 font-mono text-sm text-emerald-300"
                    >var data_todo = {
};</pre>
                </div>
            </div>

            <div class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p class="font-black text-amber-900">
                    Formato admitido
                </p>

                <p class="text-sm text-amber-800 mt-2">
                    Cada línea debe comenzar con una matrícula y contener al menos
                    una calificación numérica. Las filas vacías serán ignoradas.
                </p>
            </div>
        </div>
    `;

    const input = container.querySelector("#xmera-input");
    const output = container.querySelector("#xmera-output");
    const generateButton = container.querySelector("#xmera-generate");
    const copyButton = container.querySelector("#xmera-copy");
    const clearButton = container.querySelector("#xmera-clear");
    const message = container.querySelector("#xmera-message");

    function showMessage(text, type = "success") {
        message.textContent = text;
        message.classList.remove(
            "hidden",
            "bg-emerald-50",
            "text-emerald-800",
            "border",
            "border-emerald-200",
            "bg-red-50",
            "text-red-800",
            "border-red-200"
        );

        message.classList.add("border");

        if (type === "error") {
            message.classList.add(
                "bg-red-50",
                "text-red-800",
                "border-red-200"
            );
        } else {
            message.classList.add(
                "bg-emerald-50",
                "text-emerald-800",
                "border-emerald-200"
            );
        }
    }

    function parseRows(text) {
        const lines = text
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(Boolean);

        const records = [];
        const errors = [];
        const matriculas = new Set();

        lines.forEach((line, index) => {
            const values = line
                .split(/[\t,; ]+/)
                .map(value => value.trim())
                .filter(Boolean);

            const lineNumber = index + 1;
            const matricula = values[0];
            const grades = values.slice(1);

            if (!matricula) {
                errors.push(`Línea ${lineNumber}: falta la matrícula.`);
                return;
            }

            if (!/^\d+$/.test(matricula)) {
                errors.push(
                    `Línea ${lineNumber}: la matrícula "${matricula}" no es válida.`
                );
                return;
            }

            if (matriculas.has(matricula)) {
                errors.push(
                    `Línea ${lineNumber}: la matrícula ${matricula} está repetida.`
                );
                return;
            }

            if (grades.length === 0) {
                errors.push(
                    `Línea ${lineNumber}: falta al menos una calificación.`
                );
                return;
            }

            const numericGrades = grades.map(value => Number(value));

            if (numericGrades.some(value => !Number.isFinite(value))) {
                errors.push(
                    `Línea ${lineNumber}: existe una calificación no numérica.`
                );
                return;
            }

            matriculas.add(matricula);

            records.push({
                matricula,
                grades: numericGrades
            });
        });

        return { records, errors };
    }

    function generateCode(records) {
        const rows = records.map(({ matricula, grades }) => {
            return `  "${matricula}":[${grades.join(",")}]`;
        });

        return `var data_todo = {\n${rows.join(",\n")}\n};`;
    }

    generateButton.addEventListener("click", () => {
        const text = input.value.trim();

        if (!text) {
            output.textContent = "var data_todo = {\n};";
            copyButton.disabled = true;
            showMessage(
                "Debes introducir al menos una matrícula con sus calificaciones.",
                "error"
            );
            return;
        }

        const { records, errors } = parseRows(text);

        if (errors.length > 0) {
            output.textContent = "var data_todo = {\n};";
            copyButton.disabled = true;
            showMessage(errors.join(" "), "error");
            return;
        }

        output.textContent = generateCode(records);
        copyButton.disabled = false;

        showMessage(
            `Código generado correctamente para ${records.length} estudiante${
                records.length === 1 ? "" : "s"
            }.`
        );
    });

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(output.textContent);
            showMessage("El código fue copiado al portapapeles.");
        } catch (error) {
            showMessage(
                "No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.",
                "error"
            );
        }
    });

    clearButton.addEventListener("click", () => {
        input.value = "";
        output.textContent = "var data_todo = {\n};";
        copyButton.disabled = true;
        message.classList.add("hidden");
        input.focus();
    });

    return container;
}
