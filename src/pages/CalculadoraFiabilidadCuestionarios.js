import {
    analizarFiabilidadCuestionario
} from "../utils/fiabilidadCuestionarios.js";
import {
    crearPanelGraficosFiabilidad
} from "../utils/graficosFiabilidadCuestionarios.js";

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
                    Examine la consistencia interna, la contribución de cada ítem y la estructura unidimensional aproximada de una escala o cuestionario.
                </p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Alfa de Cronbach</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Omega aproximado</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Análisis de ítems</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Ítems invertidos</span>
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
                        "La primera fila puede contener los nombres de los ítems. Si no existen, se asignarán Ítem 1, Ítem 2, etc."
                    )}
                    ${guia(
                        "Ítems invertidos",
                        "Indique sus posiciones —por ejemplo 3, 6— o sus nombres. La herramienta aplicará la recodificación mínimo + máximo − respuesta."
                    )}
                    ${guia(
                        "Datos ausentes",
                        "Las filas con celdas vacías, NA, N/A, punto o null se excluyen completamente y se informa la cantidad descartada."
                    )}
                    ${guia(
                        "Interpretación",
                        "La fiabilidad no demuestra validez ni unidimensionalidad. Las decisiones deben considerar contenido, teoría, muestra y análisis factorial."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Requisito mínimo
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Se requieren al menos cinco participantes completos y tres ítems con variabilidad. Para conclusiones estables suele necesitarse una muestra considerablemente mayor.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-fiabilidad-cuestionarios"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Mínimo de la escala
                        </span>
                        <input
                            type="number"
                            step="any"
                            name="minimoEscala"
                            value="1"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        />
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Máximo de la escala
                        </span>
                        <input
                            type="number"
                            step="any"
                            name="maximoEscala"
                            value="5"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        />
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Ítems invertidos
                        </span>
                        <input
                            type="text"
                            name="itemsInvertidos"
                            placeholder="Ej.: 3, 6"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        />
                    </label>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Respuestas del cuestionario
                    </span>
                    <textarea
                        name="datos"
                        rows="16"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        placeholder="Ítem 1, Ítem 2, Ítem 3\n4, 5, 4\n3, 4, 3"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Para números decimales utilice punto.
                    </span>
                </label>

                <div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 class="font-black text-slate-900">
                                Importar archivo
                            </h3>
                            <p class="text-sm text-slate-600 mt-1">
                                Admite CSV o TXT con la misma estructura de filas y columnas.
                            </p>
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
                        class="inline-flex items-center justify-center bg-amber-600 text-white font-black rounded-xl px-7 py-4 hover:bg-amber-700 transition-colors shadow-lg"
                    >
                        Analizar fiabilidad
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-amber-300 text-amber-800 font-black rounded-xl px-6 py-4 hover:bg-amber-50 transition-colors"
                    >
                        Cargar ejemplo
                    </button>
                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-fiabilidad-cuestionarios"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
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
            ultimoResultado = analizarFiabilidadCuestionario(solicitud);
            resultados.innerHTML = crearVistaResultados(ultimoResultado);
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
            cargarEjemplo(formulario);
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }
        if (accion === "limpiar") {
            formulario.reset();
            formulario.elements.minimoEscala.value = "1";
            formulario.elements.maximoEscala.value = "5";
            formulario.elements.datos.value = "";
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
                const textoOriginal = boton.textContent;
                boton.textContent = "Reporte copiado";
                setTimeout(() => {
                    boton.textContent = textoOriginal;
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
    const normalizado = String(valor ?? "").trim().toLowerCase();
    return ["", "na", "n/a", ".", "null", "missing"].includes(
        normalizado
    );
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

    if (lineas.length < 6) {
        throw new Error(
            "Se requieren al menos cinco participantes y, opcionalmente, una fila de encabezados."
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
            "El archivo debe contener al menos tres columnas de ítems."
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

        const numerica = fila.map((valor, indiceColumna) => {
            const numero = Number(valor);

            if (!Number.isFinite(numero)) {
                throw new Error(
                    `La fila ${indiceFila + 1}, columna ${indiceColumna + 1}, contiene un valor no numérico.`
                );
            }

            return numero;
        });
        matriz.push(numerica);
    });

    const itemsInvertidos = resolverItemsInvertidos(
        formulario.elements.itemsInvertidos.value,
        nombresItems
    );

    return {
        matriz,
        nombresItems,
        itemsInvertidos,
        minimoEscala: Number(
            formulario.elements.minimoEscala.value
        ),
        maximoEscala: Number(
            formulario.elements.maximoEscala.value
        ),
        filasExcluidas
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
        .split(/[,;\s]+/)
        .map((token) => token.trim())
        .filter(Boolean)
        .map((token) => {
            const posicion = Number(token);

            if (Number.isInteger(posicion)) {
                if (posicion < 1 || posicion > nombresItems.length) {
                    throw new Error(
                        `El ítem invertido ${token} no existe en el cuestionario.`
                    );
                }
                return posicion - 1;
            }

            const indice = mapaNombres.get(token.toLowerCase());
            if (indice === undefined) {
                throw new Error(
                    `No se encontró el ítem invertido llamado “${token}”. Use su posición numérica cuando el nombre contenga espacios.`
                );
            }
            return indice;
        });
}

function cargarEjemplo(formulario) {
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
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">
                ${etiqueta}
            </p>
            <p class="text-2xl font-black text-slate-900 break-words">
                ${valor}
            </p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                ${ayuda}
            </p>
        </article>
    `;
}

function crearTablaItems(resultado) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Ítem</th>
                        <th class="px-4 py-3 text-right">Media</th>
                        <th class="px-4 py-3 text-right">DE</th>
                        <th class="px-4 py-3 text-right">Ítem–total</th>
                        <th class="px-4 py-3 text-right">Alfa sin ítem</th>
                        <th class="px-4 py-3 text-right">Carga</th>
                        <th class="px-4 py-3 text-left">Revisión</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${resultado.items.map((item) => `
                        <tr class="${item.alertas.length ? "bg-amber-50" : ""}">
                            <td class="px-4 py-3 font-black text-slate-900">
                                ${item.indice}. ${escapar(item.nombre)}
                                ${item.invertido ? '<span class="ml-2 rounded-full bg-violet-100 px-2 py-1 text-[10px] text-violet-800">Invertido</span>' : ""}
                            </td>
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

function crearVistaResultados(resultado) {
    return `
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">
                        Consistencia interna
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        Resultados de fiabilidad
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El análisis utilizó ${resultado.n} participantes y ${resultado.k} ítems. Se recodificaron ${resultado.itemsInvertidos.length} ítems invertidos.
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

        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-7">
            ${tarjetaMetrica("Participantes", resultado.n, "Filas completas utilizadas")}
            ${tarjetaMetrica("Ítems", resultado.k, "Variables que forman la escala")}
            ${tarjetaMetrica("Alfa", formatear(resultado.fiabilidad.alfaCronbach, 4), "Consistencia interna no estandarizada")}
            ${tarjetaMetrica("Alfa est.", formatear(resultado.fiabilidad.alfaEstandarizado, 4), "Basado en correlaciones interítem")}
            ${tarjetaMetrica("Omega", formatear(resultado.fiabilidad.omegaTotalAproximado, 4), "Aproximación unidimensional")}
            ${tarjetaMetrica("Spearman–Brown", formatear(resultado.fiabilidad.spearmanBrown, 4), "División alternada de los ítems")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                Advertencias metodológicas
            </p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">
                Condiciones que deben considerarse
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${resultado.advertencias.map((texto) => `
                    <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 leading-relaxed">
                        ${escapar(texto)}
                    </div>
                `).join("")}
            </div>
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                Diagnóstico por ítem
            </p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">
                Estadísticos y contribución de cada ítem
            </h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Las alertas automáticas orientan la revisión, pero la eliminación de un ítem debe justificarse mediante contenido, teoría y evidencia adicional.
            </p>
            ${crearTablaItems(resultado)}
        </section>

        ${crearPanelGraficosFiabilidad(resultado)}

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Interpretación guiada
            </p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">
                Lectura general del instrumento
            </h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${resultado.interpretacion.map((texto) => `
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${escapar(texto)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Criterio metodológico
            </h2>
            <p>
                No establezca puntos de corte rígidos como única evidencia. Informe el alfa y el omega, describa la muestra, especifique los ítems invertidos, revise la dimensionalidad y presente las correlaciones ítem–total. Cuando el instrumento tenga varias dimensiones, calcule la fiabilidad por subescala en lugar de combinar indiscriminadamente todos los ítems.
            </p>
        </section>
    `;
}

function construirReporte(resultado) {
    const lineas = [
        "CUESTIONARIOS Y FIABILIDAD — LABORATORIO KERNEL",
        "",
        `Participantes: ${resultado.n}`,
        `Ítems: ${resultado.k}`,
        `Ítems invertidos: ${resultado.itemsInvertidos.join(", ") || "ninguno"}`,
        `Alfa de Cronbach: ${formatear(resultado.fiabilidad.alfaCronbach, 4)}`,
        `Alfa estandarizado: ${formatear(resultado.fiabilidad.alfaEstandarizado, 4)}`,
        `Omega total aproximado: ${formatear(resultado.fiabilidad.omegaTotalAproximado, 4)}`,
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
    const filas = [
        ["CUESTIONARIOS Y FIABILIDAD"],
        ["Participantes", resultado.n],
        ["Ítems", resultado.k],
        ["Alfa de Cronbach", resultado.fiabilidad.alfaCronbach],
        ["Alfa estandarizado", resultado.fiabilidad.alfaEstandarizado],
        ["Omega total aproximado", resultado.fiabilidad.omegaTotalAproximado],
        ["Spearman-Brown", resultado.fiabilidad.spearmanBrown],
        ["Correlación interítem media", resultado.fiabilidad.correlacionInteritemMedia],
        [],
        [
            "Ítem",
            "Invertido",
            "Media",
            "DE",
            "Correlación ítem-total",
            "Alfa si se elimina",
            "Carga un factor",
            "Unicidad",
            "Alertas"
        ],
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
        ["Puntuación total por participante"],
        ...resultado.puntuacionesTotales.map((valor, indice) => [
            indice + 1,
            valor
        ]),
        [],
        [
            "Créditos",
            "Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"
        ]
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
