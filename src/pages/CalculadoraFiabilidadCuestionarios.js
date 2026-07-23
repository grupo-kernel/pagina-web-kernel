import {
    analizarFiabilidadCuestionarioAvanzada
} from "../utils/fiabilidadCuestionariosAvanzada.js";
import {
    crearPanelGraficosFiabilidad
} from "../utils/graficosFiabilidadCuestionarios.js";
import {
    prepararExportacionCalculadora
} from "../utils/exportacionesCalculadoras.js";

export function CalculadoraFiabilidadCuestionarios() {
    const section = document.createElement("section");
    let ultimoResultado = null;

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-amber-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-violet-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-amber-300 text-xs md:text-sm font-black mb-3">
                    Evaluación de instrumentos
                </p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Cuestionarios y fiabilidad
                </h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Examine la consistencia interna, la contribución de cada ítem, la precisión de las estimaciones y la estructura unidimensional aproximada de una escala.
                </p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Alfa de Cronbach</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Omega aproximado</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">KR-20</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Bootstrap</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Análisis de ítems</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.68fr_1.32fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                    Organización de los datos
                </p>
                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Una persona por fila y un ítem por columna
                </h2>
                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${guia(
                        "Encabezados",
                        "La primera fila puede contener nombres. En ausencia de encabezados se asignarán Ítem 1, Ítem 2, etc."
                    )}
                    ${guia(
                        "Ítems invertidos",
                        "Indique posiciones separadas por coma —por ejemplo 3, 6— o nombres completos separados por punto y coma."
                    )}
                    ${guia(
                        "Datos ausentes",
                        "Las filas con celdas vacías, NA, N/A, punto, null o missing se excluyen mediante eliminación listwise."
                    )}
                    ${guia(
                        "KR-20",
                        "Se calcula automáticamente cuando todos los ítems recodificados contienen únicamente 0 y 1."
                    )}
                    ${guia(
                        "Bootstrap",
                        "Los intervalos percentiles cuantifican la incertidumbre muestral de alfa y omega; no corrigen problemas de dimensionalidad."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La consistencia interna no demuestra validez, unidimensionalidad ni estabilidad temporal. No elimine ítems únicamente para aumentar un coeficiente.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-fiabilidad-cuestionarios"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                    ${campoNumero("Mínimo de la escala", "minimoEscala", "1")}
                    ${campoNumero("Máximo de la escala", "maximoEscala", "5")}

                    <label class="block xl:col-span-2">
                        <span class="block text-sm font-black text-slate-800 mb-2">Ítems invertidos</span>
                        <input
                            type="text"
                            name="itemsInvertidos"
                            placeholder="Ej.: 3, 6"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        />
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Confianza</span>
                        <select name="nivelBootstrap" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100">
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-[0.45fr_1.55fr] gap-5 mt-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Remuestras bootstrap</span>
                        <select name="numeroRemuestras" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100">
                            <option value="200">200 — rápida</option>
                            <option value="500" selected>500 — recomendada</option>
                            <option value="1000">1,000 — más estable</option>
                        </select>
                    </label>

                    <div class="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-950 leading-relaxed">
                        Las remuestras se generan con una semilla reproducible. Con muestras pequeñas, los intervalos pueden ser amplios o inestables.
                    </div>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">Respuestas del cuestionario</span>
                    <textarea
                        name="datos"
                        rows="16"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        placeholder="Ítem 1, Ítem 2, Ítem 3\n4, 5, 4\n3, 4, 3"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Para decimales utilice punto.
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
                    id="mensaje-error-fiabilidad"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        data-action="analizar"
                        class="inline-flex items-center justify-center bg-amber-700 text-white font-black rounded-xl px-7 py-4 hover:bg-amber-800 transition-colors shadow-lg disabled:opacity-60"
                    >
                        Analizar fiabilidad
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button type="button" data-action="cargar-ejemplo" class="inline-flex items-center justify-center border border-amber-300 text-amber-800 font-black rounded-xl px-6 py-4 hover:bg-amber-50 transition-colors">Cargar ejemplo</button>
                    <button type="button" data-action="cargar-dicotomico" class="inline-flex items-center justify-center border border-violet-300 text-violet-800 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors">Ejemplo KR-20</button>
                    <button type="button" data-action="limpiar" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors">Limpiar</button>
                </div>
            </form>
        </section>

        <section id="resultados-fiabilidad-cuestionarios" class="hidden mt-8" aria-live="polite"></section>
    `;

    const formulario = section.querySelector(
        "#formulario-fiabilidad-cuestionarios"
    );
    const mensajeError = section.querySelector(
        "#mensaje-error-fiabilidad"
    );
    const resultados = section.querySelector(
        "#resultados-fiabilidad-cuestionarios"
    );
    const archivo = formulario.elements.archivo;
    const botonAnalizar = formulario.querySelector(
        "[data-action='analizar']"
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

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();
        ocultarError(mensajeError);
        const textoOriginal = botonAnalizar.innerHTML;
        botonAnalizar.disabled = true;
        botonAnalizar.textContent = "Calculando intervalos…";

        try {
            await new Promise((resolver) =>
                window.requestAnimationFrame(resolver)
            );
            const solicitud = obtenerSolicitud(formulario);
            ultimoResultado =
                analizarFiabilidadCuestionarioAvanzada(solicitud);
            resultados.innerHTML = crearVistaResultados(
                ultimoResultado
            );
            prepararExportacionCalculadora({
                contenedor: resultados,
                nombre: "fiabilidad-cuestionarios",
                datos: {
                    solicitud,
                    resultado: ultimoResultado
                }
            });
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
                    : "No fue posible analizar la fiabilidad."
            );
        } finally {
            botonAnalizar.disabled = false;
            botonAnalizar.innerHTML = textoOriginal;
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
        if (accion === "cargar-ejemplo") {
            cargarEjemploLikert(formulario);
            reiniciarResultados(resultados, mensajeError);
            return;
        }
        if (accion === "cargar-dicotomico") {
            cargarEjemploDicotomico(formulario);
            reiniciarResultados(resultados, mensajeError);
            return;
        }
        if (accion === "limpiar") {
            formulario.reset();
            formulario.elements.minimoEscala.value = "1";
            formulario.elements.maximoEscala.value = "5";
            formulario.elements.nivelBootstrap.value = "0.95";
            formulario.elements.numeroRemuestras.value = "500";
            formulario.elements.datos.value = "";
            reiniciarResultados(resultados, mensajeError);
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
                const original = boton.textContent;
                boton.textContent = "Reporte copiado";
                setTimeout(() => {
                    boton.textContent = original;
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

function campoNumero(etiqueta, nombre, valor) {
    return `
        <label class="block">
            <span class="block text-sm font-black text-slate-800 mb-2">${etiqueta}</span>
            <input
                type="number"
                step="any"
                name="${nombre}"
                value="${valor}"
                class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
            />
        </label>
    `;
}

function guia(titulo, texto) {
    return `<div><h3 class="font-black text-slate-900 mb-1">${titulo}</h3><p>${texto}</p></div>`;
}

function detectarDelimitador(linea) {
    if (linea.includes("\t")) return "\t";
    if (linea.includes(";")) return ";";
    return ",";
}

function esAusente(valor) {
    return ["", "na", "n/a", ".", "null", "missing"]
        .includes(String(valor ?? "").trim().toLowerCase());
}

function obtenerSolicitud(formulario) {
    const texto = formulario.elements.datos.value.trim();

    if (!texto) {
        throw new Error(
            "Introduzca las respuestas antes de analizar la fiabilidad."
        );
    }

    const lineas = texto
        .split(/\r?\n/)
        .map((linea) => linea.trim())
        .filter(Boolean);

    if (lineas.length < 5) {
        throw new Error(
            "Se requieren al menos cinco participantes completos."
        );
    }

    const delimitador = detectarDelimitador(lineas[0]);
    const filas = lineas.map((linea) =>
        linea.split(delimitador).map((valor) => valor.trim())
    );
    const primeraNumerica = filas[0].every(
        (valor) => !esAusente(valor) && Number.isFinite(Number(valor))
    );
    const nombresItems = primeraNumerica
        ? filas[0].map((_, indice) => `Ítem ${indice + 1}`)
        : filas.shift();
    const k = nombresItems.length;

    if (k < 3) {
        throw new Error(
            "El cuestionario debe contener al menos tres columnas de ítems."
        );
    }
    if (!filas.every((fila) => fila.length === k)) {
        throw new Error(
            "Todas las filas deben contener la misma cantidad de columnas."
        );
    }

    let filasExcluidas = 0;
    const matriz = [];

    filas.forEach((fila, indiceFila) => {
        if (fila.some(esAusente)) {
            filasExcluidas += 1;
            return;
        }

        matriz.push(
            fila.map((valor, indiceColumna) => {
                const numero = Number(valor);

                if (!Number.isFinite(numero)) {
                    throw new Error(
                        `La fila ${indiceFila + 1}, columna ${indiceColumna + 1}, contiene un valor no numérico.`
                    );
                }

                return numero;
            })
        );
    });

    return {
        matriz,
        nombresItems,
        itemsInvertidos: resolverItemsInvertidos(
            formulario.elements.itemsInvertidos.value,
            nombresItems
        ),
        minimoEscala: Number(
            formulario.elements.minimoEscala.value
        ),
        maximoEscala: Number(
            formulario.elements.maximoEscala.value
        ),
        filasExcluidas,
        numeroRemuestras: Number(
            formulario.elements.numeroRemuestras.value
        ),
        nivelConfianzaBootstrap: Number(
            formulario.elements.nivelBootstrap.value
        )
    };
}

function resolverItemsInvertidos(texto, nombresItems) {
    if (!texto.trim()) return [];

    const mapaNombres = new Map(
        nombresItems.map((nombre, indice) => [
            nombre.trim().toLowerCase(),
            indice
        ])
    );

    return texto
        .split(/[,;]+/)
        .map((token) => token.trim())
        .filter(Boolean)
        .map((token) => {
            const posicion = Number(token);

            if (Number.isInteger(posicion)) {
                if (posicion < 1 || posicion > nombresItems.length) {
                    throw new Error(
                        `El ítem invertido ${token} no existe.`
                    );
                }
                return posicion - 1;
            }

            const indice = mapaNombres.get(token.toLowerCase());
            if (indice === undefined) {
                throw new Error(
                    `No se encontró el ítem invertido llamado “${token}”.`
                );
            }
            return indice;
        });
}

function cargarEjemploLikert(formulario) {
    formulario.elements.minimoEscala.value = "1";
    formulario.elements.maximoEscala.value = "5";
    formulario.elements.itemsInvertidos.value = "6";
    formulario.elements.datos.value = `Planificacion, Persistencia, Autonomia, Participacion, Confianza, Desmotivacion
4, 4, 3, 4, 4, 2
3, 4, 3, 3, 4, 2
5, 5, 4, 5, 5, 1
2, 3, 2, 3, 2, 4
4, 5, 4, 4, 5, 1
3, 3, 3, 4, 3, 3
5, 4, 5, 5, 4, 1
2, 2, 3, 2, 2, 5
4, 4, 4, 3, 4, 2
3, 4, 2, 3, 3, 3
5, 5, 5, 4, 5, 1
1, 2, 2, 2, 1, 5
4, 3, 4, 4, 4, 2
3, 3, 2, 4, 3, 3
5, 4, 4, 5, 5, 1
2, 3, 3, 2, 3, 4
4, 5, 3, 4, 4, 2
3, 2, 3, 3, 2, 4
5, 5, 4, 5, 4, 1
2, 2, 2, 3, 2, 5
4, 4, 5, 4, 5, 1
3, 3, 4, 3, 3, 3
5, 4, 5, 4, 5, 1
2, 3, 2, 2, 3, 4`;
}

function cargarEjemploDicotomico(formulario) {
    formulario.elements.minimoEscala.value = "0";
    formulario.elements.maximoEscala.value = "1";
    formulario.elements.itemsInvertidos.value = "";
    formulario.elements.datos.value = `Item1, Item2, Item3, Item4, Item5, Item6
1,1,1,1,1,1
1,1,1,0,1,1
1,1,0,1,1,1
1,0,1,1,1,0
0,1,1,1,0,1
1,1,1,1,1,0
0,0,1,1,0,1
1,0,1,0,1,0
0,1,0,1,0,1
1,1,0,0,1,0
0,0,1,0,0,1
1,0,0,1,1,0
0,1,1,0,0,1
0,0,0,1,0,0
1,1,1,1,0,1
0,1,0,0,1,0
1,0,1,1,0,1
0,0,1,0,1,0
1,1,0,1,1,1
0,1,1,0,1,0
1,0,0,1,0,1
0,0,0,0,0,0
1,1,1,0,1,1
0,1,0,1,0,0
1,0,1,0,1,1
0,0,1,1,0,0
1,1,0,1,1,0
0,1,1,0,0,0
1,0,0,1,0,0
0,0,0,0,1,0`;
}

function reiniciarResultados(resultados, mensajeError) {
    resultados.classList.add("hidden");
    resultados.innerHTML = "";
    ocultarError(mensajeError);
}

function formatear(valor, decimales = 4) {
    if (!Number.isFinite(Number(valor))) return "—";

    return Number(valor).toLocaleString("es-DO", {
        maximumFractionDigits: decimales
    });
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

function formatearIntervalo(intervalo) {
    if (
        !Number.isFinite(intervalo?.inferior) ||
        !Number.isFinite(intervalo?.superior)
    ) {
        return "No disponible";
    }

    return `[${formatear(intervalo.inferior, 4)}, ${formatear(intervalo.superior, 4)}]`;
}

function crearTablaItems(resultado) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Estadísticos de fiabilidad y revisión por ítem
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Ítem</th>
                        <th scope="col" class="px-4 py-3 text-right">Media</th>
                        <th scope="col" class="px-4 py-3 text-right">DE</th>
                        <th scope="col" class="px-4 py-3 text-right">Ítem–total</th>
                        <th scope="col" class="px-4 py-3 text-right">Alfa sin ítem</th>
                        <th scope="col" class="px-4 py-3 text-right">Carga</th>
                        <th scope="col" class="px-4 py-3 text-left">Revisión</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${resultado.items.map((item) => `
                        <tr class="${item.alertas.length ? "bg-amber-50" : ""}">
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">
                                ${item.indice}. ${escapar(item.nombre)}
                                ${item.invertido ? '<span class="ml-2 rounded-full bg-violet-100 px-2 py-1 text-[10px] text-violet-800">Invertido</span>' : ""}
                            </th>
                            <td class="px-4 py-3 text-right">${formatear(item.media, 3)}</td>
                            <td class="px-4 py-3 text-right">${formatear(item.desviacion, 3)}</td>
                            <td class="px-4 py-3 text-right font-black">${formatear(item.correlacionItemTotal, 3)}</td>
                            <td class="px-4 py-3 text-right">${formatear(item.alfaSiSeElimina, 3)}</td>
                            <td class="px-4 py-3 text-right">${formatear(item.cargaUnFactor, 3)}</td>
                            <td class="px-4 py-3 text-slate-700 min-w-[260px]">
                                ${item.alertas.length
                                    ? item.alertas.map(escapar).join(" ")
                                    : "Sin alerta automática."}
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function crearPares(titulo, pares, tipo) {
    const clase = tipo === "negativo"
        ? "border-red-200 bg-red-50 text-red-950"
        : "border-violet-200 bg-violet-50 text-violet-950";

    if (!pares.length) {
        return `
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <strong>${titulo}:</strong> no se detectaron pares mediante el criterio automático.
            </div>
        `;
    }

    return `
        <div class="rounded-2xl border ${clase} p-5">
            <h3 class="font-black mb-3">${titulo}</h3>
            <div class="space-y-2 text-sm">
                ${pares.map((fila) => `
                    <p>
                        <strong>${escapar(fila.itemA)}</strong> –
                        <strong>${escapar(fila.itemB)}</strong>:
                        r = ${formatear(fila.correlacion, 3)}
                    </p>
                `).join("")}
            </div>
        </div>
    `;
}

function crearVistaResultados(resultado) {
    const bootstrap = resultado.intervalosBootstrap;
    const kr20 = resultado.kr20;

    return `
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">Consistencia interna</p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">Resultados de fiabilidad</h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        Se analizaron ${resultado.n} participantes y ${resultado.k} ítems. Se recodificaron ${resultado.itemsInvertidos.length} ítems invertidos y se excluyeron ${resultado.filasExcluidas} filas incompletas.
                    </p>
                </div>
                <span class="inline-flex self-start rounded-2xl bg-amber-500/20 text-amber-200 border border-amber-400/30 px-5 py-3 font-black">
                    Alfa = ${formatear(resultado.fiabilidad.alfaCronbach, 3)}
                </span>
            </div>
            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4 mt-7">
            ${tarjetaMetrica("Participantes", resultado.n, "Filas completas")}
            ${tarjetaMetrica("Ítems", resultado.k, "Componentes de la escala")}
            ${tarjetaMetrica("Alfa", formatear(resultado.fiabilidad.alfaCronbach, 4), "No estandarizado")}
            ${tarjetaMetrica("Alfa est.", formatear(resultado.fiabilidad.alfaEstandarizado, 4), "Matriz de correlaciones")}
            ${tarjetaMetrica("Omega", formatear(resultado.fiabilidad.omegaTotalAproximado, 4), "Aproximación de un factor")}
            ${tarjetaMetrica("KR-20", kr20.aplica ? formatear(kr20.valor, 4) : "No aplica", "Ítems dicotómicos 0/1")}
            ${tarjetaMetrica("Spearman–Brown", formatear(resultado.fiabilidad.spearmanBrown, 4), "División par–impar")}
        </section>

        <section class="mt-8 rounded-3xl border border-sky-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">Precisión muestral</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Intervalos bootstrap</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Método percentil con ${bootstrap.numeroRemuestras.toLocaleString("es-DO")} remuestras y nivel de confianza de ${(bootstrap.nivelConfianza * 100).toFixed(0)} %.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                ${tarjetaMetrica(
                    "IC del alfa",
                    formatearIntervalo(bootstrap.alfa),
                    `${bootstrap.alfa.remuestrasValidas} remuestras válidas`
                )}
                ${tarjetaMetrica(
                    "IC del omega",
                    formatearIntervalo(bootstrap.omega),
                    `${bootstrap.omega.remuestrasValidas} remuestras válidas`
                )}
            </div>
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-amber-950 mb-4">Advertencias metodológicas</h2>
            <ul class="space-y-3 text-amber-950 leading-relaxed">
                ${resultado.advertencias.map((texto) => `
                    <li class="flex gap-3"><span class="font-black">!</span><span>${escapar(texto)}</span></li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Diagnóstico por ítem</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Contribución de cada ítem</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Revise conjuntamente la correlación ítem–total, el alfa si se elimina, la carga aproximada y el contenido sustantivo.
            </p>
            ${crearTablaItems(resultado)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">Relaciones interítem</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Redundancia y correlaciones negativas</h2>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
                ${crearPares(
                    "Pares potencialmente redundantes (r ≥ 0.80)",
                    resultado.diagnosticosAvanzados.paresRedundantes,
                    "redundante"
                )}
                ${crearPares(
                    "Pares con correlación negativa (r ≤ −0.20)",
                    resultado.diagnosticosAvanzados.paresNegativos,
                    "negativo"
                )}
            </div>
        </section>

        ${crearPanelGraficosFiabilidad(resultado)}

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del instrumento</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${resultado.interpretacion.map((texto) => `
                    <li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${escapar(texto)}</span></li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Alfa, omega y KR-20 evalúan consistencia interna bajo supuestos diferentes, pero ninguno demuestra por sí solo validez. Antes de modificar el instrumento, examine la dimensionalidad, el contenido, la formulación de los ítems, la población y el propósito de la medición.
            </p>
        </section>
    `;
}

function construirReporte(resultado) {
    const b = resultado.intervalosBootstrap;
    const lineas = [
        "CUESTIONARIOS Y FIABILIDAD — LABORATORIO KERNEL",
        "",
        `Participantes: ${resultado.n}`,
        `Ítems: ${resultado.k}`,
        `Alfa de Cronbach: ${formatear(resultado.fiabilidad.alfaCronbach, 4)}`,
        `IC bootstrap del alfa: ${formatearIntervalo(b.alfa)}`,
        `Alfa estandarizado: ${formatear(resultado.fiabilidad.alfaEstandarizado, 4)}`,
        `Omega aproximado: ${formatear(resultado.fiabilidad.omegaTotalAproximado, 4)}`,
        `IC bootstrap del omega: ${formatearIntervalo(b.omega)}`,
        `KR-20: ${resultado.kr20.aplica ? formatear(resultado.kr20.valor, 4) : "No aplica"}`,
        `Spearman–Brown: ${formatear(resultado.fiabilidad.spearmanBrown, 4)}`,
        `Correlación interítem media: ${formatear(resultado.fiabilidad.correlacionInteritemMedia, 4)}`,
        "",
        "Interpretación:"
    ];

    resultado.interpretacion.forEach((texto) =>
        lineas.push(`- ${texto}`)
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
    const b = resultado.intervalosBootstrap;
    const filas = [
        ["CUESTIONARIOS Y FIABILIDAD"],
        ["Participantes", resultado.n],
        ["Ítems", resultado.k],
        ["Alfa de Cronbach", resultado.fiabilidad.alfaCronbach],
        ["IC alfa inferior", b.alfa.inferior],
        ["IC alfa superior", b.alfa.superior],
        ["Alfa estandarizado", resultado.fiabilidad.alfaEstandarizado],
        ["Omega aproximado", resultado.fiabilidad.omegaTotalAproximado],
        ["IC omega inferior", b.omega.inferior],
        ["IC omega superior", b.omega.superior],
        ["KR-20", resultado.kr20.valor],
        ["Spearman-Brown", resultado.fiabilidad.spearmanBrown],
        ["Correlación interítem media", resultado.fiabilidad.correlacionInteritemMedia],
        [],
        ["Ítem", "Invertido", "Media", "DE", "Ítem-total", "Alfa sin ítem", "Carga", "Unicidad", "Alertas"],
        ...resultado.items.map((item) => [
            item.nombre,
            item.invertido ? "Sí" : "No",
            item.media,
            item.desviacion,
            item.correlacionItemTotal,
            item.alfaSiSeElimina,
            item.cargaUnFactor,
            item.unicidad,
            item.alertas.join(" ")
        ]),
        [],
        ["Pares redundantes"],
        ["Ítem A", "Ítem B", "Correlación"],
        ...resultado.diagnosticosAvanzados.paresRedundantes.map((fila) => [
            fila.itemA,
            fila.itemB,
            fila.correlacion
        ]),
        [],
        ["Créditos", "Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]
    ];
    const contenido = filas
        .map((fila) => fila.map(celdaCsv).join(","))
        .join("\n");
    const blob = new Blob(["\ufeff", contenido], {
        type: "text/csv;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = "fiabilidad-cuestionario-kernel.csv";
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
