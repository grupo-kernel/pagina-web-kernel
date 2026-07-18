export function primerPeriodoComponent() {
    const section = document.createElement("section");

    section.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8";

    section.innerHTML = `
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-[#5580C1]">
                    Primer período
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del primer corte
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y las calificaciones
                    correspondientes a 1AC y 2PP. Cada estudiante debe ocupar
                    una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                <i class="bx bx-spreadsheet text-4xl text-[#5580C1]"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-primer-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula, 1AC y 2PP
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia tres columnas desde Excel en este orden:
                    matrícula Banner, acumulado del primer parcial y primer
                    parcial. La matrícula debe tener el formato A00108671.
                    No es necesario incluir encabezados.
                </p>

                <textarea
                    id="banner-primer-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-[#5580C1] focus:ring-2 focus:ring-blue-100"
                    placeholder="A00108671    8    2
A00122336    9    19
A00116736    13    7"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-primer-process"
                        type="button"
                        class="flex-1 rounded-xl bg-[#5580C1] px-5 py-3 font-black text-white transition hover:bg-[#416aa8]"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-primer-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-primer-message"
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
                            Comprueba los datos antes de descargar los archivos.
                        </p>
                    </div>

                    <span
                        id="banner-primer-count"
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
                    >
                        0 estudiantes
                    </span>
                </div>

                <div class="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200">
                    <table class="w-full min-w-[520px] border-collapse text-left text-sm">
                        <thead class="sticky top-0 bg-slate-100 text-slate-700">
                            <tr>
                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    #
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    Matrícula
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    1AC
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    2PP
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    Total
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-primer-preview">
                            <tr>
                                <td
                                    colspan="5"
                                    class="px-4 py-10 text-center text-slate-400"
                                >
                                    Todavía no se han procesado datos.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        id="banner-primer-download-1ac"
                        type="button"
                        disabled
                        class="rounded-xl bg-blue-600 px-5 py-3 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Descargar 1AC
                    </button>

                    <button
                        id="banner-primer-download-2pp"
                        type="button"
                        disabled
                        class="rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Descargar 2PP
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p class="text-sm font-black text-blue-900">
                    1AC · Acumulado
                </p>

                <p class="mt-2 text-sm text-blue-800">
                    Debe contener valores entre 0 y 15 puntos.
                </p>
            </div>

            <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p class="text-sm font-black text-emerald-900">
                    2PP · Primer parcial
                </p>

                <p class="mt-2 text-sm text-emerald-800">
                    Debe contener valores entre 0 y 20 puntos.
                </p>
            </div>

            <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p class="text-sm font-black text-amber-900">
                    Total del primer corte
                </p>

                <p class="mt-2 text-sm text-amber-800">
                    La suma de 1AC y 2PP no debe superar 35 puntos.
                </p>
            </div>
        </div>
    `;

    const input = section.querySelector("#banner-primer-input");
    const processButton = section.querySelector(
        "#banner-primer-process"
    );
    const clearButton = section.querySelector(
        "#banner-primer-clear"
    );
    const message = section.querySelector(
        "#banner-primer-message"
    );
    const preview = section.querySelector(
        "#banner-primer-preview"
    );
    const count = section.querySelector(
        "#banner-primer-count"
    );
    const download1AC = section.querySelector(
        "#banner-primer-download-1ac"
    );
    const download2PP = section.querySelector(
        "#banner-primer-download-2pp"
    );

    let processedRecords = [];

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

    function hideMessage() {
        message.textContent = "";
        message.classList.add("hidden");
    }

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

            if (values.length !== 3) {
                errors.push(
                    `Línea ${lineNumber}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`
                );
                return;
            }

            const matricula = normalizeMatricula(values[0]);
            const grade1AC = Number(normalizeGrade(values[1]));
            const grade2PP = Number(normalizeGrade(values[2]));

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

            if (!Number.isFinite(grade1AC)) {
                errors.push(
                    `Línea ${lineNumber}: la calificación 1AC no es numérica.`
                );
                return;
            }

            if (!Number.isFinite(grade2PP)) {
                errors.push(
                    `Línea ${lineNumber}: la calificación 2PP no es numérica.`
                );
                return;
            }

            if (grade1AC < 0 || grade1AC > 15) {
                errors.push(
                    `Línea ${lineNumber}: 1AC debe estar entre 0 y 15.`
                );
                return;
            }

            if (grade2PP < 0 || grade2PP > 20) {
                errors.push(
                    `Línea ${lineNumber}: 2PP debe estar entre 0 y 20.`
                );
                return;
            }

            const total = grade1AC + grade2PP;

            if (total > 35) {
                errors.push(
                    `Línea ${lineNumber}: la suma de 1AC y 2PP no puede superar 35 puntos.`
                );
                return;
            }

            matriculas.add(matricula);

            records.push({
                matricula,
                grade1AC,
                grade2PP,
                total
            });
        });

        return {
            records,
            errors
        };
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

    function renderPreview(records) {
        if (records.length === 0) {
            preview.innerHTML = `
                <tr>
                    <td
                        colspan="5"
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

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${formatGrade(record.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${formatGrade(record.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${formatGrade(record.total)}
                        </td>
                    </tr>
                `;
            })
            .join("");

        count.textContent = `${records.length} estudiante${
            records.length === 1 ? "" : "s"
        }`;
    }

    function createCsv(records, gradeKey, columnName) {
        const separator = ";";

        const rows = [
            ["MATRICULA", columnName],
            ...records.map(record => [
                record.matricula,
                formatGrade(record[gradeKey])
            ])
        ];

        return rows
            .map(row => row.join(separator))
            .join("\r\n");
    }

    function downloadCsv(content, fileName) {
        const bom = "\uFEFF";

        const blob = new Blob(
            [bom + content],
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

        download1AC.disabled = true;
        download2PP.disabled = true;

        hideMessage();
        input.focus();
    }

    processButton.addEventListener("click", () => {
        const text = input.value.trim();

        if (!text) {
            processedRecords = [];
            renderPreview([]);

            download1AC.disabled = true;
            download2PP.disabled = true;

            showMessage(
                "Debes pegar al menos una fila con matrícula, 1AC y 2PP.",
                "error"
            );

            return;
        }

        const { records, errors } = parseRows(text);

        if (errors.length > 0) {
            processedRecords = [];
            renderPreview([]);

            download1AC.disabled = true;
            download2PP.disabled = true;

            showMessage(
                errors.join(" "),
                "error"
            );

            return;
        }

        processedRecords = records;

        renderPreview(processedRecords);

        download1AC.disabled = false;
        download2PP.disabled = false;

        showMessage(
            `Los datos de ${records.length} estudiante${
                records.length === 1 ? "" : "s"
            } fueron validados correctamente.`
        );
    });

    clearButton.addEventListener("click", resetTool);

    download1AC.addEventListener("click", () => {
        if (processedRecords.length === 0) {
            return;
        }

        const csv = createCsv(
            processedRecords,
            "grade1AC",
            "1AC"
        );

        downloadCsv(
            csv,
            "Banner_APEC_Primer_Periodo_1AC.csv"
        );
    });

    download2PP.addEventListener("click", () => {
        if (processedRecords.length === 0) {
            return;
        }

        const csv = createCsv(
            processedRecords,
            "grade2PP",
            "2PP"
        );

        downloadCsv(
            csv,
            "Banner_APEC_Primer_Periodo_2PP.csv"
        );
    });

    return section;
}
