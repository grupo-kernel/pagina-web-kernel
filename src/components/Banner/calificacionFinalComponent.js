export function calificacionFinalComponent() {
    const section = document.createElement("section");

    section.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8";

    section.innerHTML = `
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-rose-600">
                    Calificación final
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del examen final
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y las calificaciones
                    correspondientes a 4EF. Cada estudiante debe ocupar una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-50">
                <i class="bx bx-award text-4xl text-rose-600"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-final-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula y 4EF
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia dos columnas desde Excel: matrícula Banner y
                    calificación del examen final. La matrícula debe tener el
                    formato A00108671. No incluyas encabezados.
                </p>

                <textarea
                    id="banner-final-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100"
                    placeholder="A00108671    24
A00122336    28
A00116736    20"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-final-process"
                        type="button"
                        class="flex-1 rounded-xl bg-rose-600 px-5 py-3 font-black text-white transition hover:bg-rose-700"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-final-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-final-message"
                    class="mt-4 hidden rounded-xl border px-4 py-3 text-sm font-semibold"
                ></div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-black text-slate-800">
                            Vista previa
                        </p>

                        <p class="mt-1 text-xs text-slate-500">
                            Comprueba los datos antes de descargar el archivo.
                        </p>
                    </div>

                    <span
                        id="banner-final-count"
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
                    >
                        0 estudiantes
                    </span>
                </div>

                <div class="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200">
                    <table class="w-full min-w-[420px] border-collapse text-left text-sm">
                        <thead class="sticky top-0 bg-slate-100 text-slate-700">
                            <tr>
                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    #
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    Matrícula
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    4EF
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-final-preview">
                            <tr>
                                <td
                                    colspan="3"
                                    class="px-4 py-10 text-center text-slate-400"
                                >
                                    Todavía no se han procesado datos.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button
                    id="banner-final-download"
                    type="button"
                    disabled
                    class="mt-5 w-full rounded-xl bg-rose-600 px-5 py-3 font-black text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Descargar 4EF
                </button>
            </div>
        </div>

        <div class="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <p class="font-black text-rose-900">
                4EF · Examen Final
            </p>

            <p class="mt-2 text-sm leading-relaxed text-rose-800">
                La calificación del examen final debe estar entre 0 y
                30 puntos.
            </p>
        </div>
    `;

    const input = section.querySelector("#banner-final-input");
    const processButton = section.querySelector(
        "#banner-final-process"
    );
    const clearButton = section.querySelector(
        "#banner-final-clear"
    );
    const message = section.querySelector(
        "#banner-final-message"
    );
    const preview = section.querySelector(
        "#banner-final-preview"
    );
    const count = section.querySelector(
        "#banner-final-count"
    );
    const downloadButton = section.querySelector(
        "#banner-final-download"
    );

    let processedRecords = [];

    function normalizeMatricula(value) {
        return String(value)
            .normalize("NFKC")
            .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
            .replace(/\u00A0/g, "")
            .replace(/\s+/g, "")
            .trim()
            .toUpperCase();
    }

    function normalizeGrade(value) {
        return String(value)
            .normalize("NFKC")
            .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
            .replace(/\u00A0/g, "")
            .replace(",", ".")
            .trim();
    }

    function splitRow(line) {
        const cleanLine = String(line)
            .normalize("NFKC")
            .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
            .trim();

        if (cleanLine.includes("\t")) {
            return cleanLine
                .split("\t")
                .map(value => value.trim())
                .filter(value => value !== "");
        }

        if (cleanLine.includes(";")) {
            return cleanLine
                .split(";")
                .map(value => value.trim())
                .filter(value => value !== "");
        }

        return cleanLine
            .split(/\s+/)
            .map(value => value.trim())
            .filter(value => value !== "");
    }

    function formatGrade(value) {
        return Number.isInteger(value)
            ? String(value)
            : value
                  .toFixed(2)
                  .replace(/0+$/, "")
                  .replace(/\.$/, "");
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function showMessage(text, type = "success") {
        message.textContent = text;

        message.classList.remove(
            "hidden",
            "border-red-200",
            "bg-red-50",
            "text-red-800",
            "border-emerald-200",
            "bg-emerald-50",
            "text-emerald-800"
        );

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

    function parseRows(text) {
        const lines = text
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(Boolean);

        const records = [];
        const errors = [];
        const matriculas = new Set();

        lines.forEach((line, index) => {
            const lineNumber = index + 1;
            const values = splitRow(line);

            if (values.length !== 2) {
                errors.push(
                    `Línea ${lineNumber}: deben existir exactamente dos columnas: matrícula y 4EF.`
                );
                return;
            }

            const matricula = normalizeMatricula(values[0]);
            const grade4EF = Number(normalizeGrade(values[1]));

            if (!/^A[0-9]{8}$/.test(matricula)) {
                errors.push(
                    `Línea ${lineNumber}: la matrícula "${matricula}" no es válida. Debe tener el formato A00108671.`
                );
                return;
            }

            if (matriculas.has(matricula)) {
                errors.push(
                    `Línea ${lineNumber}: la matrícula ${matricula} está repetida.`
                );
                return;
            }

            if (!Number.isFinite(grade4EF)) {
                errors.push(
                    `Línea ${lineNumber}: la calificación 4EF no es numérica.`
                );
                return;
            }

            if (grade4EF < 0 || grade4EF > 30) {
                errors.push(
                    `Línea ${lineNumber}: 4EF debe estar entre 0 y 30.`
                );
                return;
            }

            matriculas.add(matricula);

            records.push({
                matricula,
                grade4EF
            });
        });

        return {
            records,
            errors
        };
    }

    function renderPreview(records) {
        if (records.length === 0) {
            preview.innerHTML = `
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `;

            count.textContent = "0 estudiantes";
            return;
        }

        preview.innerHTML = records
            .map((record, index) => {
                return `
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${index + 1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${escapeHtml(record.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${formatGrade(record.grade4EF)}
                        </td>
                    </tr>
                `;
            })
            .join("");

        count.textContent = `${records.length} estudiante${
            records.length === 1 ? "" : "s"
        }`;
    }

    function createCsv(records) {
        const rows = [
            ["MATRICULA", "4EF"],
            ...records.map(record => [
                record.matricula,
                formatGrade(record.grade4EF)
            ])
        ];

        return rows
            .map(row => row.join(";"))
            .join("\r\n");
    }

    function downloadCsv(content, fileName) {
        const blob = new Blob(
            ["\uFEFF" + content],
            {
                type: "text/csv;charset=utf-8;"
            }
        );

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        link.remove();

        window.setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
    }

    function resetTool() {
        processedRecords = [];
        input.value = "";
        renderPreview([]);
        downloadButton.disabled = true;
        message.textContent = "";
        message.classList.add("hidden");
        input.focus();
    }

    processButton.addEventListener("click", () => {
        const text = input.value.trim();

        if (!text) {
            processedRecords = [];
            renderPreview([]);
            downloadButton.disabled = true;

            showMessage(
                "Debes pegar al menos una fila con matrícula y 4EF.",
                "error"
            );

            return;
        }

        const { records, errors } = parseRows(text);

        if (errors.length > 0) {
            processedRecords = [];
            renderPreview([]);
            downloadButton.disabled = true;

            showMessage(
                errors.join(" "),
                "error"
            );

            return;
        }

        processedRecords = records;
        renderPreview(records);
        downloadButton.disabled = false;

        showMessage(
            `Los datos de ${records.length} estudiante${
                records.length === 1 ? "" : "s"
            } fueron validados correctamente.`
        );
    });

    clearButton.addEventListener("click", resetTool);

    downloadButton.addEventListener("click", () => {
        if (processedRecords.length === 0) {
            return;
        }

        downloadCsv(
            createCsv(processedRecords),
            "Banner_APEC_Examen_Final_4EF.csv"
        );
    });

    return section;
}
