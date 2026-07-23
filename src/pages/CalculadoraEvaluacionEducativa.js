import {
    analizarEvaluacionEducativa
} from "../utils/evaluacionEducativa.js";
import {
    crearPanelGraficosEvaluacion
} from "../utils/graficosEvaluacionEducativa.js";

export function CalculadoraEvaluacionEducativa() {
    const section = document.createElement("section");
    let ultimoResultado = null;

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-emerald-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-cyan-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-emerald-300 text-xs md:text-sm font-black mb-3">
                    Análisis clásico de pruebas
                </p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Evaluación educativa
                </h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Examine la calidad de las preguntas, la fiabilidad de la prueba, el funcionamiento de los distractores y la distribución de las puntuaciones.
                </p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Dificultad</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Discriminación</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Punto-biserial</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">KR-20</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Distractores</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.68fr_1.32fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                    Preparación de los datos
                </p>
                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Una persona por fila y una pregunta por columna
                </h2>
                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${guia(
                        "Respuestas por alternativa",
                        "Introduzca A, B, C, D u otras etiquetas y escriba la clave correcta en el campo correspondiente."
                    )}
                    ${guia(
                        "Matriz 0/1",
                        "Utilice 1 para respuesta correcta y 0 para incorrecta cuando los datos ya estén puntuados."
                    )}
                    ${guia(
                        "Identificador",
                        "Puede reservar la primera columna para el código o nombre del estudiante; esa columna no se puntuará."
                    )}
                    ${guia(
                        "Grupos extremos",
                        "La discriminación compara los grupos superior e inferior. El 27 % es el criterio clásico más utilizado."
                    )}
                    ${guia(
                        "Distractores",
                        "Un distractor es funcional cuando atrae una proporción suficiente de estudiantes y es elegido más por el grupo inferior."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Los indicadores no sustituyen la revisión curricular ni demuestran por sí solos validez. Una pregunta puede ser difícil y, aun así, ser apropiada para el propósito de la prueba.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-evaluacion-educativa"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Tipo de datos</span>
                        <select name="modo" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-100">
                            <option value="opciones">Alternativas con clave</option>
                            <option value="binario">Matriz codificada 0/1</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Grupos extremos</span>
                        <select name="proporcionGrupos" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-100">
                            <option value="0.25">25 %</option>
                            <option value="0.27" selected>27 %</option>
                            <option value="0.33">33 %</option>
                        </select>
                    </label>

                    <label class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-800">
                        <input type="checkbox" name="tieneEncabezados" checked class="w-5 h-5 rounded border-slate-300 text-emerald-700 focus:ring-emerald-500" />
                        Primera fila = encabezados
                    </label>

                    <label class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-800">
                        <input type="checkbox" name="tieneId" checked class="w-5 h-5 rounded border-slate-300 text-emerald-700 focus:ring-emerald-500" />
                        Primera columna = identificador
                    </label>
                </div>

                <label class="block mt-6" data-campo-clave>
                    <span class="block text-sm font-black text-slate-800 mb-2">Clave de respuestas</span>
                    <input
                        type="text"
                        name="clave"
                        placeholder="Ej.: A, C, B, D, A"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 font-mono focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500"
                    />
                    <span class="block text-xs text-slate-500 mt-2">
                        Escriba una respuesta por pregunta, separada por coma, punto y coma o tabulación.
                    </span>
                </label>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">Respuestas de los estudiantes</span>
                    <textarea
                        name="datos"
                        rows="17"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500"
                        placeholder="Estudiante, P1, P2, P3\nE01, A, C, B\nE02, B, C, B"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Las filas incompletas se excluirán y se informará su cantidad.
                    </span>
                </label>

                <div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 class="font-black text-slate-900">Importar archivo</h3>
                            <p class="text-sm text-slate-600 mt-1">Admite CSV o TXT con la misma estructura.</p>
                        </div>
                        <input
                            type="file"
                            name="archivo"
                            accept=".csv,.txt,text/csv,text/plain"
                            class="block text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-900 file:px-4 file:py-3 file:font-black file:text-white hover:file:bg-slate-800"
                        />
                    </div>
                </div>

                <div
                    id="mensaje-error-evaluacion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button type="submit" class="inline-flex items-center justify-center bg-emerald-700 text-white font-black rounded-xl px-7 py-4 hover:bg-emerald-800 transition-colors shadow-lg">
                        Analizar evaluación
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button type="button" data-action="cargar-opciones" class="inline-flex items-center justify-center border border-emerald-300 text-emerald-800 font-black rounded-xl px-6 py-4 hover:bg-emerald-50 transition-colors">Ejemplo con alternativas</button>
                    <button type="button" data-action="cargar-binario" class="inline-flex items-center justify-center border border-sky-300 text-sky-800 font-black rounded-xl px-6 py-4 hover:bg-sky-50 transition-colors">Ejemplo 0/1</button>
                    <button type="button" data-action="limpiar" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors">Limpiar</button>
                </div>
            </form>
        </section>

        <section id="resultados-evaluacion-educativa" class="hidden mt-8" aria-live="polite"></section>
    `;

    const formulario = section.querySelector(
        "#formulario-evaluacion-educativa"
    );
    const mensajeError = section.querySelector(
        "#mensaje-error-evaluacion"
    );
    const resultados = section.querySelector(
        "#resultados-evaluacion-educativa"
    );
    const campoClave = formulario.querySelector(
        "[data-campo-clave]"
    );
    const archivo = formulario.elements.archivo;

    const actualizarModo = () => {
        const binario = formulario.elements.modo.value === "binario";
        campoClave.classList.toggle("hidden", binario);
        formulario.elements.clave.disabled = binario;
    };

    actualizarModo();
    formulario.elements.modo.addEventListener(
        "change",
        actualizarModo
    );

    archivo.addEventListener("change", async () => {
        const seleccionado = archivo.files?.[0];
        if (!seleccionado) return;

        try {
            formulario.elements.datos.value = await seleccionado.text();
            ocultarError(mensajeError);
        } catch {
            mostrarError(
                mensajeError,
                "No fue posible leer el archivo seleccionado."
            );
        }
    });

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        ocultarError(mensajeError);

        try {
            const solicitud = obtenerSolicitud(formulario);
            ultimoResultado = analizarEvaluacionEducativa(solicitud);
            resultados.innerHTML = crearVistaResultados(
                ultimoResultado
            );
            resultados.classList.remove("hidden");
            resultados.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } catch (error) {
            resultados.classList.add("hidden");
            mostrarError(
                mensajeError,
                error instanceof Error
                    ? error.message
                    : "No fue posible analizar la evaluación."
            );
        }
    });

    section.addEventListener("click", async (event) => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;
        const accion = boton.dataset.action;

        if (accion === "volver-laboratorio") {
            window.location.hash = "/laboratorioKernel";
            return;
        }
        if (accion === "cargar-opciones") {
            cargarEjemploOpciones(formulario);
            actualizarModo();
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }
        if (accion === "cargar-binario") {
            cargarEjemploBinario(formulario);
            actualizarModo();
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }
        if (accion === "limpiar") {
            formulario.reset();
            formulario.elements.modo.value = "opciones";
            formulario.elements.tieneEncabezados.checked = true;
            formulario.elements.tieneId.checked = true;
            formulario.elements.datos.value = "";
            formulario.elements.clave.value = "";
            actualizarModo();
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }
        if (!ultimoResultado) return;

        if (accion === "exportar-csv") {
            exportarCsv(ultimoResultado);
        } else if (accion === "copiar-reporte") {
            try {
                await navigator.clipboard.writeText(
                    construirReporte(ultimoResultado)
                );
                const texto = boton.textContent;
                boton.textContent = "Reporte copiado";
                setTimeout(() => {
                    boton.textContent = texto;
                }, 1600);
            } catch {
                mostrarError(
                    mensajeError,
                    "El navegador no permitió copiar el reporte."
                );
            }
        } else if (accion === "imprimir") {
            window.print();
        }
    });

    return section;
}

function guia(titulo, texto) {
    return `
        <div>
            <h3 class="font-black text-slate-900 mb-1">${titulo}</h3>
            <p>${texto}</p>
        </div>
    `;
}

function detectarDelimitador(linea) {
    if (linea.includes("\t")) return "\t";
    if (linea.includes(";")) return ";";
    return ",";
}

function esAusente(valor) {
    return ["", "NA", "N/A", ".", "NULL", "MISSING"]
        .includes(String(valor ?? "").trim().toUpperCase());
}

function separarClave(texto) {
    return String(texto ?? "")
        .split(/[,;\t]+/)
        .map((valor) => valor.trim())
        .filter(Boolean);
}

function obtenerSolicitud(formulario) {
    const texto = formulario.elements.datos.value.trim();

    if (!texto) {
        throw new Error(
            "Introduzca las respuestas antes de analizar la evaluación."
        );
    }

    const lineas = texto
        .split(/\r?\n/)
        .map((linea) => linea.trim())
        .filter(Boolean);
    const delimitador = detectarDelimitador(lineas[0]);
    const filas = lineas.map((linea) =>
        linea.split(delimitador).map((valor) => valor.trim())
    );
    const tieneEncabezados =
        formulario.elements.tieneEncabezados.checked;
    const tieneId = formulario.elements.tieneId.checked;
    let encabezados = tieneEncabezados
        ? filas.shift()
        : null;

    if (!filas.length) {
        throw new Error("No se encontraron filas de estudiantes.");
    }

    const numeroColumnas = filas[0].length;

    if (!filas.every((fila) => fila.length === numeroColumnas)) {
        throw new Error(
            "Todas las filas deben contener la misma cantidad de columnas."
        );
    }
    if (encabezados && encabezados.length !== numeroColumnas) {
        throw new Error(
            "La fila de encabezados no coincide con la cantidad de columnas."
        );
    }

    if (!encabezados) {
        encabezados = Array.from(
            { length: numeroColumnas },
            (_, indice) =>
                tieneId && indice === 0
                    ? "Estudiante"
                    : `Pregunta ${indice + (tieneId ? 0 : 1)}`
        );
    }

    let filasExcluidas = 0;
    const completas = filas.filter((fila) => {
        if (fila.some(esAusente)) {
            filasExcluidas += 1;
            return false;
        }
        return true;
    });
    const idsEstudiantes = tieneId
        ? completas.map((fila) => fila[0])
        : completas.map(
            (_, indice) => `E${String(indice + 1).padStart(3, "0")}`
        );
    const respuestas = completas.map((fila) =>
        tieneId ? fila.slice(1) : fila
    );
    const nombresItems = tieneId
        ? encabezados.slice(1)
        : encabezados;
    const modo = formulario.elements.modo.value;
    const clave = modo === "opciones"
        ? separarClave(formulario.elements.clave.value)
        : [];

    return {
        respuestas,
        clave,
        nombresItems,
        idsEstudiantes,
        modo,
        proporcionGrupos: Number(
            formulario.elements.proporcionGrupos.value
        ),
        filasExcluidas
    };
}

function cargarEjemploOpciones(formulario) {
    formulario.elements.modo.value = "opciones";
    formulario.elements.tieneEncabezados.checked = true;
    formulario.elements.tieneId.checked = true;
    formulario.elements.proporcionGrupos.value = "0.27";
    formulario.elements.clave.value = "A, C, B, D, A, B, C, D";
    formulario.elements.datos.value = `Estudiante, P1, P2, P3, P4, P5, P6, P7, P8
E01, A, C, B, D, A, B, C, D
E02, A, C, B, D, A, B, C, D
E03, A, C, B, D, A, B, C, D
E04, A, C, B, D, A, B, C, D
E05, A, C, B, D, A, B, C, D
E06, A, C, B, D, A, B, C, A
E07, A, C, B, D, A, B, A, D
E08, A, C, B, D, A, D, C, D
E09, A, C, B, A, A, B, C, D
E10, A, C, D, D, A, B, C, D
E11, A, C, B, D, C, B, C, D
E12, A, B, B, D, A, B, C, D
E13, B, C, B, D, A, B, C, D
E14, A, C, B, C, A, D, C, D
E15, A, C, D, D, B, B, C, D
E16, B, C, B, A, A, B, D, D
E17, A, B, D, D, A, C, C, A
E18, C, C, B, B, B, B, C, D
E19, A, D, A, D, A, C, D, B
E20, B, B, D, C, C, A, A, D
E21, C, D, A, B, B, D, C, A
E22, D, B, C, A, C, C, B, B
E23, B, A, D, C, D, A, A, C
E24, C, B, A, B, C, D, D, A
E25, D, A, C, A, B, C, B, C
E26, B, D, A, C, D, A, D, B
E27, C, A, D, B, B, D, A, C
E28, D, B, A, C, C, A, B, A
E29, B, D, C, A, D, C, A, B
E30, C, A, D, B, B, A, D, C`;
}

function cargarEjemploBinario(formulario) {
    formulario.elements.modo.value = "binario";
    formulario.elements.tieneEncabezados.checked = true;
    formulario.elements.tieneId.checked = true;
    formulario.elements.proporcionGrupos.value = "0.27";
    formulario.elements.clave.value = "";
    formulario.elements.datos.value = `Estudiante, P1, P2, P3, P4, P5, P6
E01, 1, 1, 1, 1, 1, 1
E02, 1, 1, 1, 1, 1, 0
E03, 1, 1, 1, 1, 0, 1
E04, 1, 1, 1, 0, 1, 1
E05, 1, 1, 0, 1, 1, 1
E06, 1, 0, 1, 1, 1, 0
E07, 1, 1, 1, 0, 0, 1
E08, 1, 1, 0, 1, 0, 1
E09, 1, 0, 1, 1, 0, 0
E10, 0, 1, 1, 0, 1, 1
E11, 1, 0, 0, 1, 1, 0
E12, 0, 1, 0, 1, 0, 1
E13, 1, 0, 1, 0, 0, 0
E14, 0, 1, 0, 0, 1, 0
E15, 0, 0, 1, 0, 0, 1
E16, 1, 0, 0, 0, 0, 0
E17, 0, 1, 0, 0, 0, 0
E18, 0, 0, 1, 0, 0, 0
E19, 0, 0, 0, 1, 0, 0
E20, 0, 0, 0, 0, 1, 0
E21, 0, 0, 0, 0, 0, 1
E22, 0, 0, 0, 0, 0, 0
E23, 1, 0, 0, 1, 0, 0
E24, 0, 1, 1, 0, 0, 0`;
}

function formatear(valor, decimales = 4) {
    if (!Number.isFinite(Number(valor))) return "—";

    return Number(valor).toLocaleString("es-DO", {
        maximumFractionDigits: decimales
    });
}

function porcentaje(valor, decimales = 1) {
    if (!Number.isFinite(Number(valor))) return "—";
    return `${(Number(valor) * 100).toLocaleString("es-DO", {
        maximumFractionDigits: decimales
    })} %`;
}

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function tarjetaMetrica(etiqueta, valor, ayuda) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">${etiqueta}</p>
            <p class="text-2xl font-black text-slate-900 break-words">${valor}</p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">${ayuda}</p>
        </article>
    `;
}

function tablaItems(resultado) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Indicadores de dificultad, discriminación y fiabilidad por pregunta
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Pregunta</th>
                        <th scope="col" class="px-4 py-3 text-right">p</th>
                        <th scope="col" class="px-4 py-3 text-left">Dificultad</th>
                        <th scope="col" class="px-4 py-3 text-right">D</th>
                        <th scope="col" class="px-4 py-3 text-left">Discriminación</th>
                        <th scope="col" class="px-4 py-3 text-right">rpb</th>
                        <th scope="col" class="px-4 py-3 text-right">KR-20 sin ítem</th>
                        <th scope="col" class="px-4 py-3 text-left">Decisión</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${resultado.items.map((item) => `
                        <tr class="${item.recomendacion.decision === "Revisión urgente" ? "bg-red-50" : item.recomendacion.decision.includes("Revisar") ? "bg-amber-50" : ""}">
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900 min-w-[160px]">${item.indice}. ${escapar(item.nombre)}</th>
                            <td class="px-4 py-3 text-right">${formatear(item.dificultad, 3)}</td>
                            <td class="px-4 py-3">${escapar(item.clasificacionDificultad)}</td>
                            <td class="px-4 py-3 text-right font-black">${formatear(item.discriminacion, 3)}</td>
                            <td class="px-4 py-3">${escapar(item.clasificacionDiscriminacion)}</td>
                            <td class="px-4 py-3 text-right">${formatear(item.puntoBiserial, 3)}</td>
                            <td class="px-4 py-3 text-right">${formatear(item.alfaSiSeElimina, 3)}</td>
                            <td class="px-4 py-3 min-w-[260px]"><strong>${escapar(item.recomendacion.decision)}.</strong> ${escapar(item.recomendacion.razon)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function panelDistractores(resultado) {
    if (resultado.modo !== "opciones") {
        return `
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El análisis de distractores requiere respuestas por alternativa y una clave.
            </div>
        `;
    }

    return `
        <div class="space-y-5">
            ${resultado.distractores.map((item) => `
                <article class="rounded-2xl border ${item.posibleClaveErronea ? "border-red-300 bg-red-50" : "border-slate-200 bg-white"} p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                        <div>
                            <h3 class="text-xl font-black text-slate-900">${item.indice}. ${escapar(item.nombre)}</h3>
                            <p class="text-sm text-slate-500 mt-1">Clave: <strong>${escapar(item.clave)}</strong></p>
                        </div>
                        <span class="rounded-full px-4 py-2 text-xs font-black ${item.posibleClaveErronea ? "bg-red-100 text-red-800" : item.distractoresNoFuncionales ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}">
                            ${item.posibleClaveErronea ? "Revisar posible clave" : `${item.distractoresNoFuncionales} distractores no funcionales`}
                        </span>
                    </div>
                    <div class="overflow-x-auto rounded-xl border border-slate-200">
                        <table class="min-w-full text-sm">
                            <caption class="sr-only">
                                Distribución de respuestas para ${escapar(item.nombre)}
                            </caption>
                            <thead class="bg-slate-100 text-slate-700">
                                <tr>
                                    <th scope="col" class="px-3 py-2 text-left">Opción</th>
                                    <th scope="col" class="px-3 py-2 text-right">Total</th>
                                    <th scope="col" class="px-3 py-2 text-right">Grupo superior</th>
                                    <th scope="col" class="px-3 py-2 text-right">Grupo inferior</th>
                                    <th scope="col" class="px-3 py-2 text-left">Lectura</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 bg-white">
                                ${item.opciones.map((opcion) => `
                                    <tr class="${opcion.esClave ? "bg-emerald-50" : ""}">
                                        <th scope="row" class="px-3 py-2 text-left font-black">${escapar(opcion.opcion)}${opcion.esClave ? " ✓" : ""}</th>
                                        <td class="px-3 py-2 text-right">${opcion.seleccionTotal} (${porcentaje(opcion.proporcionTotal)})</td>
                                        <td class="px-3 py-2 text-right">${opcion.seleccionSuperior} (${porcentaje(opcion.proporcionSuperior)})</td>
                                        <td class="px-3 py-2 text-right">${opcion.seleccionInferior} (${porcentaje(opcion.proporcionInferior)})</td>
                                        <td class="px-3 py-2 min-w-[260px]">${escapar(opcion.observacion)}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function tablaPuntuaciones(resultado) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[420px]">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Puntuación y porcentaje obtenidos por estudiante
                </caption>
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Estudiante</th>
                        <th scope="col" class="px-4 py-3 text-right">Puntuación</th>
                        <th scope="col" class="px-4 py-3 text-right">Porcentaje</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${resultado.puntuaciones
                        .sort((a, b) => b.total - a.total)
                        .map((fila) => `
                            <tr>
                                <th scope="row" class="px-4 py-3 text-left font-black">${escapar(fila.id)}</th>
                                <td class="px-4 py-3 text-right">${fila.total} / ${resultado.k}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.porcentaje, 1)} %</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function crearVistaResultados(resultado) {
    const urgentes = resultado.items.filter(
        (item) => item.recomendacion.decision === "Revisión urgente"
    ).length;
    const conservar = resultado.items.filter(
        (item) => item.recomendacion.decision === "Conservar"
    ).length;

    return `
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-emerald-300 text-xs font-black mb-2">Calidad de la prueba</p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">Resultados de evaluación educativa</h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        Se analizaron ${resultado.n} estudiantes y ${resultado.k} preguntas. Cada grupo extremo contiene ${resultado.gruposExtremos.tamano} estudiantes.
                    </p>
                </div>
                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${urgentes ? "bg-red-500/20 text-red-200 border border-red-400/30" : "bg-emerald-500/20 text-emerald-200 border border-emerald-400/30"}">
                    ${urgentes ? `${urgentes} preguntas urgentes` : "Sin alertas urgentes"}
                </span>
            </div>
            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-7">
            ${tarjetaMetrica("Estudiantes", resultado.n, "Filas completas utilizadas")}
            ${tarjetaMetrica("Preguntas", resultado.k, "Ítems analizados")}
            ${tarjetaMetrica("KR-20", formatear(resultado.fiabilidad.kr20, 4), "Consistencia interna de la prueba")}
            ${tarjetaMetrica("Media", `${formatear(resultado.resumenPuntuaciones.media, 2)} / ${resultado.k}`, "Puntuación promedio")}
            ${tarjetaMetrica("Desviación", formatear(resultado.resumenPuntuaciones.desviacion, 3), "Dispersión de las puntuaciones")}
            ${tarjetaMetrica("Conservar", `${conservar} / ${resultado.k}`, "Preguntas sin alertas automáticas")}
        </section>

        ${resultado.advertencias.length ? `
            <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <h2 class="text-2xl font-black text-amber-950 mb-4">Advertencias</h2>
                <ul class="space-y-3 text-amber-950">
                    ${resultado.advertencias.map((texto) => `<li class="flex gap-3"><span class="font-black">!</span><span>${escapar(texto)}</span></li>`).join("")}
                </ul>
            </section>
        ` : ""}

        ${crearPanelGraficosEvaluacion(resultado)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Análisis por pregunta</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Dificultad, discriminación y decisión</h2>
            <p class="text-slate-600 leading-relaxed mb-6">La recomendación automática orienta la revisión, pero no sustituye el juicio del docente ni la correspondencia con los objetivos curriculares.</p>
            ${tablaItems(resultado)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Alternativas de respuesta</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Análisis de distractores</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Revise opciones poco seleccionadas, distractores que atraen al grupo superior y posibles inconsistencias de clave.</p>
            ${panelDistractores(resultado)}
        </section>

        <section class="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-7">
            <article class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
                <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
                <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general</h2>
                <ul class="space-y-3 text-emerald-950 leading-relaxed">
                    ${resultado.interpretacion.map((texto) => `<li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${escapar(texto)}</span></li>`).join("")}
                </ul>
            </article>

            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">Resultados individuales</p>
                <h2 class="text-3xl font-black text-slate-900 mb-5">Puntuaciones por estudiante</h2>
                ${tablaPuntuaciones(resultado)}
            </article>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Dificultad, discriminación y punto-biserial dependen de la muestra y del propósito de la prueba. No elimine automáticamente una pregunta por un único indicador. Revise la clave, el contenido, la cobertura curricular, la redacción, el comportamiento de los distractores y las consecuencias de la decisión evaluativa.
            </p>
        </section>
    `;
}

function construirReporte(resultado) {
    const lineas = [
        "EVALUACIÓN EDUCATIVA — LABORATORIO KERNEL",
        "",
        `Estudiantes: ${resultado.n}`,
        `Preguntas: ${resultado.k}`,
        `KR-20: ${formatear(resultado.fiabilidad.kr20, 4)}`,
        `Media: ${formatear(resultado.resumenPuntuaciones.media, 3)} de ${resultado.k}`,
        `Desviación estándar: ${formatear(resultado.resumenPuntuaciones.desviacion, 3)}`,
        "",
        "Resultados por pregunta:"
    ];

    resultado.items.forEach((item) => {
        lineas.push(
            `${item.nombre}: dificultad = ${formatear(item.dificultad, 3)}, discriminación = ${formatear(item.discriminacion, 3)}, rpb = ${formatear(item.puntoBiserial, 3)}, decisión = ${item.recomendacion.decision}.`
        );
    });
    lineas.push("", "Interpretación:");
    resultado.interpretacion.forEach(
        (texto) => lineas.push(`- ${texto}`)
    );
    lineas.push(
        "",
        "Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."
    );

    return lineas.join("\n");
}

function celdaCsv(valor) {
    return `"${String(valor ?? "").replaceAll('"', '""')}"`;
}

function exportarCsv(resultado) {
    const filas = [
        ["EVALUACIÓN EDUCATIVA"],
        ["Estudiantes", resultado.n],
        ["Preguntas", resultado.k],
        ["KR-20", resultado.fiabilidad.kr20],
        ["Media", resultado.resumenPuntuaciones.media],
        ["Desviación estándar", resultado.resumenPuntuaciones.desviacion],
        [],
        [
            "Pregunta",
            "Clave",
            "Dificultad",
            "Clasificación dificultad",
            "Discriminación",
            "Clasificación discriminación",
            "Punto-biserial",
            "KR-20 si se elimina",
            "Distractores no funcionales",
            "Decisión",
            "Razón"
        ],
        ...resultado.items.map((item) => [
            item.nombre,
            item.clave,
            item.dificultad,
            item.clasificacionDificultad,
            item.discriminacion,
            item.clasificacionDiscriminacion,
            item.puntoBiserial,
            item.alfaSiSeElimina,
            item.distractoresNoFuncionales,
            item.recomendacion.decision,
            item.recomendacion.razon
        ]),
        [],
        ["Estudiante", "Puntuación", "Porcentaje"],
        ...resultado.puntuaciones.map((fila) => [
            fila.id,
            fila.total,
            fila.porcentaje
        ]),
        [],
        [
            "Créditos",
            "Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"
        ]
    ];

    if (resultado.modo === "opciones") {
        filas.push([], [
            "Pregunta",
            "Opción",
            "Es clave",
            "Selección total",
            "Proporción total",
            "Selección superior",
            "Proporción superior",
            "Selección inferior",
            "Proporción inferior",
            "Lectura"
        ]);
        resultado.distractores.forEach((item) => {
            item.opciones.forEach((opcion) => {
                filas.push([
                    item.nombre,
                    opcion.opcion,
                    opcion.esClave ? "Sí" : "No",
                    opcion.seleccionTotal,
                    opcion.proporcionTotal,
                    opcion.seleccionSuperior,
                    opcion.proporcionSuperior,
                    opcion.seleccionInferior,
                    opcion.proporcionInferior,
                    opcion.observacion
                ]);
            });
        });
    }

    const contenido = filas
        .map((fila) => fila.map(celdaCsv).join(","))
        .join("\n");
    const blob = new Blob(["\ufeff", contenido], {
        type: "text/csv;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = "evaluacion-educativa-kernel.csv";
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function mostrarError(contenedor, mensaje) {
    contenedor.textContent = mensaje;
    contenedor.classList.remove("hidden");
}

function ocultarError(contenedor) {
    contenedor.textContent = "";
    contenedor.classList.add("hidden");
}
