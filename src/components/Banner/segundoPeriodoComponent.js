export function segundoPeriodoComponent() {
    const section = document.createElement("section");

    section.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8";

    section.innerHTML = `
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-emerald-600">
                    Segundo período
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del segundo corte
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y la calificación total
                    correspondiente a 3SP. Cada estudiante debe ocupar una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                <i class="bx bx-book-reader text-4xl text-emerald-600"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-segundo-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula y 3SP
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia dos columnas desde Excel: matrícula Banner y
                    calificación del segundo período. La matrícula debe tener
                    el formato A00108671. No incluyas encabezados.
                </p>

                <textarea
                    id="banner-segundo-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    placeholder="A00108671    28
A00122336    32
A00116736    25"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-segundo-process"
                        type="button"
                        class="flex-1 rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-segundo-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-segundo-message"
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
                        id="banner-segundo-count"
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
                                    3SP
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-segundo-preview">
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
                    id="banner-segundo-download"
                    type="button"
                    disabled
                    class="mt-5 w-full rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Descargar 3SP
                </button>
            </div>
        </div>

        <div class="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p class="font-black text-emerald-900">
                3SP · Segundo Parcial
            </p>

            <p class="mt-2 text-sm leading-relaxed text-emerald-800">
                Esta calificación ya contiene las prácticas acumuladas y el
                segundo parcial. Debe estar entre 0 y 35 puntos.
            </p>
        </div>
    `;

    const input = section.querySelector("#banner-segundo-input");
    const processButton = section.querySelector(
        "#banner-segundo-process"
    );
    const clearButton = section.querySelector(
        "#banner-segundo-clear"
    );
    const message = section.querySelector(
        "#banner-segundo-message"
    );
    const preview = section.querySelector(
        "#banner-segundo-preview"
    );
    const count = section.querySelector(
        "#banner-segundo-count"
    );
    const downloadButton = section.querySelector(
        "#banner-segundo-download"
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
                    `Línea ${lineNumber}: deben existir exactamente dos columnas: matrícula y 3SP.`
                );
                return;
            }

            const matricula = normalizeMatricula(values[0]);
            const grade3SP = Number(normalizeGrade(values[1]));

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

            if (!Number.isFinite(grade3SP)) {
                errors.push(
                    `Línea ${lineNumber}: la calificación 3SP no es numérica.`
                );
                return;
            }

            if (grade3SP < 0 || grade3SP > 35) {
                errors.push(
                    `Línea ${lineNumber}: 3SP debe estar entre 0 y 35.`
                );
                return;
            }

            matriculas.add(matricula);

            records.push({
                matricula,
                grade3SP
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
                            ${formatGrade(record.grade3SP)}
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
            ["MATRICULA", "3SP"],
            ...records.map(record => [
                record.matricula,
                formatGrade(record.grade3SP)
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
                "Debes pegar al menos una fila con matrícula y 3SP.",
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
            "Banner_APEC_Segundo_Periodo_3SP.csv"
        );
    });

    return section;
}
