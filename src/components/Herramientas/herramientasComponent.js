import { bannerComponent } from "../Banner/bannerComponent.js";

export function herramientasComponent() {
    const container = document.createElement("section");

    container.className = "w-full max-w-7xl mx-auto px-4 py-8";

    container.innerHTML = `
        <div class="mb-8 text-center">
            <p class="mb-2 text-sm font-bold uppercase tracking-wide text-sky-600">
                Grupo de Investigación Kernel
            </p>

            <h1 class="text-3xl font-black leading-tight text-slate-800 md:text-4xl">
                Herramientas Académicas
            </h1>

            <p class="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 md:text-base">
                Utilidades digitales para facilitar tareas docentes, académicas
                y administrativas.
            </p>
        </div>

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
                        Pega las matrículas y calificaciones desde Excel o
                        escríbelas manualmente. Cada estudiante debe ocupar
                        una línea.
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
                        Ejemplo: matrícula, primera nota y segunda nota.
                        Puedes separar los valores con espacios,
                        tabulaciones, comas o punto y coma.
                    </p>

                    <textarea
                        id="xmera-input"
                        rows="14"
                        spellcheck="false"
                        class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        placeholder="20250893    18    4
20212267    13    5
202010828    19
20252000     0"
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
                                Copia este código y pégalo en Xmera.
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
                    >var data_todo = {
};</pre>
                </div>
            </div>

            <div class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p class="font-black text-amber-900">
                    Formato admitido
                </p>

                <p class="mt-2 text-sm text-amber-800">
                    Cada línea debe comenzar con una matrícula y contener al
                    menos una calificación numérica. Las filas vacías serán
                    ignoradas.
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

    function resetOutput() {
        output.textContent = "var data_todo = {\n};";
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
                errors.push(
                    `Línea ${lineNumber}: falta la matrícula.`
                );
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

            if (
                numericGrades.some(
                    value => !Number.isFinite(value)
                )
            ) {
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

        return {
            records,
            errors
        };
    }

    function generateCode(records) {
        const rows = records.map(({ matricula, grades }) => {
            return `  "${matricula}":[${grades.join(",")}]`;
        });

        return `var data_todo = {
${rows.join(",\n")}
};

var contenedor = document.querySelector(
  ".standardTable, form.form-table-special, table"
);

if (!contenedor) {
  console.log("No se encontró la tabla de calificaciones.");
} else {
  var filas = contenedor.querySelectorAll("tbody tr");

  if (filas.length === 0) {
    filas = contenedor.querySelectorAll("tr");
  }

  function asignarValor(input, valor) {
    var descriptor = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(input),
      "value"
    );

    if (descriptor && descriptor.set) {
      descriptor.set.call(input, valor);
    } else {
      input.value = valor;
    }

    input.dispatchEvent(
      new Event("input", { bubbles: true })
    );

    input.dispatchEvent(
      new Event("change", { bubbles: true })
    );

    input.dispatchEvent(
      new Event("blur", { bubbles: true })
    );
  }

  filas.forEach(function(fila) {
    try {
      var celdas = fila.querySelectorAll("td");

      if (celdas.length === 0) {
        return;
      }

      var matricula = celdas[0].innerText
        .trim()
        .replace(/[^0-9]/g, "");

      if (!matricula) {
        return;
      }

      if (
        Object.prototype.hasOwnProperty.call(
          data_todo,
          matricula
        )
      ) {
        var notas = data_todo[matricula];

        var inputs = fila.querySelectorAll(
          "input[type='number'], input[type='text']"
        );

        for (
          var i = 0;
          i < notas.length && i < inputs.length;
          i++
        ) {
          asignarValor(inputs[i], notas[i]);
        }

        console.log(
          matricula + " aplicada correctamente"
        );
      } else {
        console.log(
          matricula + " sin notas"
        );
      }
    } catch (error) {
      console.log(
        "Problema con una fila:",
        error
      );
    }
  });

  console.log("Proceso de asignación finalizado.");
}`;
    }

    generateButton.addEventListener("click", () => {
        const text = input.value.trim();

        if (!text) {
            resetOutput();

            showMessage(
                "Debes introducir al menos una matrícula con sus calificaciones.",
                "error"
            );

            return;
        }

        const { records, errors } = parseRows(text);

        if (errors.length > 0) {
            resetOutput();

            showMessage(
                errors.join(" "),
                "error"
            );

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
            bannerSection.classList.add("mt-14");
            container.appendChild(bannerSection);
        } else {
            console.error(
                "bannerComponent() no devolvió un elemento HTML válido."
            );
        }
    } catch (error) {
        console.error(
            "No fue posible cargar el módulo Banner:",
            error
        );

        const bannerError = document.createElement("div");

        bannerError.className =
            "mt-14 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800";

        bannerError.innerHTML = `
            <p class="font-black">
                No fue posible cargar el módulo Banner
            </p>

            <p class="mt-2 text-sm">
                Revisa la consola del navegador para identificar
                el componente que produjo el error.
            </p>
        `;

        container.appendChild(bannerError);
    }

    return container;
}
