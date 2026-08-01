import {
    analizarUnaMuestra
} from "../utils/estadisticaUnaMuestra.js";
import {
    prepararExportacionCalculadora
} from "../utils/exportacionesCalculadoras.js";

const CLAVE_PRUEBA = "kernel-prueba-una-muestra";
const CLAVE_MODO = "kernel-calculadora-una-muestra-activa";

export function CalculadoraUnaMuestra() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-2xl md:px-12 md:py-14">
            <div class="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-cyan-500/20"></div>
            <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modulo"
                    class="mb-7 inline-flex items-center gap-2 font-black text-cyan-300 transition-colors hover:text-white"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="mb-3 text-xs font-black uppercase tracking-[0.20em] text-cyan-300 md:text-sm">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="mb-5 text-4xl font-black leading-tight md:text-6xl">
                    Comparación de una muestra
                </h1>

                <p class="max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                    Compare una muestra cuantitativa u ordinal con un valor teórico mediante la t de Student o la prueba de rangos con signo de Wilcoxon.
                </p>

                <div class="mt-7 flex flex-wrap gap-3">
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                        Valor de referencia configurable
                    </span>
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                        Intervalo de confianza
                    </span>
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                        Tamaño del efecto
                    </span>
                </div>
            </div>
        </header>

        <section class="mt-8 grid grid-cols-1 gap-7 xl:grid-cols-[0.72fr_1.28fr]">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
                <p class="mb-2 text-xs font-black uppercase tracking-widest text-cyan-700">
                    Selección metodológica
                </p>

                <h2 class="mb-5 text-2xl font-black text-slate-900">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600">
                    ${crearGuia(
                        "t de Student para una muestra",
                        "Utilícela cuando el objetivo sea comparar la media con un valor de referencia y la distribución sea aproximadamente normal o el tamaño muestral permita una inferencia razonable."
                    )}
                    ${crearGuia(
                        "Wilcoxon de una muestra",
                        "Utilícela con variables ordinales o cuando el estimando basado en rangos sea más apropiado. No debe interpretarse automáticamente como una prueba de la mediana sin justificar la simetría."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="mb-2 font-black text-amber-950">
                        Antes de calcular
                    </h3>
                    <p class="text-sm leading-relaxed text-amber-900">
                        Revise valores atípicos, escala de medición, independencia de las observaciones y el significado científico del valor de referencia.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-una-muestra"
                class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8"
                novalidate
            >
                <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <label class="block md:col-span-1">
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                        >
                            <option value="t-una-muestra">t de Student para una muestra</option>
                            <option value="wilcoxon-una-muestra">Wilcoxon de una muestra</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Valor de referencia
                        </span>
                        <input
                            type="text"
                            inputmode="decimal"
                            name="valorReferencia"
                            value="70"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                        >
                    </label>

                    <label class="block">
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <label class="mt-6 block">
                    <span class="mb-2 flex items-center justify-between gap-3 text-sm font-black text-slate-800">
                        <span>Valores de la muestra</span>
                        <span data-contador class="text-xs font-bold text-slate-500">0 valores</span>
                    </span>
                    <textarea
                        name="valores"
                        rows="12"
                        placeholder="72&#10;68&#10;75&#10;71&#10;74"
                        class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                    ></textarea>
                    <span class="mt-2 block text-xs leading-relaxed text-slate-500">
                        Separe los valores mediante saltos de línea, espacios o punto y coma. Puede utilizar coma decimal.
                    </span>
                </label>

                <div
                    id="mensaje-error-una-muestra"
                    class="mt-6 hidden rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center rounded-xl bg-cyan-700 px-7 py-4 font-black text-white shadow-lg transition-colors hover:bg-cyan-800"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center rounded-xl border border-cyan-300 px-6 py-4 font-black text-cyan-700 transition-colors hover:bg-cyan-50"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 font-black text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-una-muestra"
            class="mt-8 hidden"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector(
        "#formulario-una-muestra"
    );
    const mensajeError = section.querySelector(
        "#mensaje-error-una-muestra"
    );
    const resultados = section.querySelector(
        "#resultados-una-muestra"
    );
    const contador = section.querySelector("[data-contador]");

    const pruebaRecomendada = sessionStorage.getItem(CLAVE_PRUEBA);
    if (["t-una-muestra", "wilcoxon-una-muestra"].includes(pruebaRecomendada)) {
        formulario.elements.prueba.value = pruebaRecomendada;
    }
    sessionStorage.removeItem(CLAVE_PRUEBA);

    const actualizarContador = () => {
        try {
            const cantidad = convertirTextoNumerico(
                formulario.elements.valores.value,
                false
            ).length;
            contador.textContent = `${cantidad} ${cantidad === 1 ? "valor" : "valores"}`;
        } catch {
            contador.textContent = "Revisar datos";
        }
    };

    formulario.addEventListener("input", actualizarContador);

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        ocultarError(mensajeError);

        try {
            const solicitud = {
                prueba: formulario.elements.prueba.value,
                valorReferencia: convertirNumeroCampo(
                    formulario.elements.valorReferencia.value,
                    "El valor de referencia"
                ),
                nivelConfianza: Number(
                    formulario.elements.nivelConfianza.value
                ),
                valores: convertirTextoNumerico(
                    formulario.elements.valores.value,
                    true
                )
            };

            const resultado = analizarUnaMuestra(solicitud);
            resultados.innerHTML = crearVistaResultados(
                resultado,
                solicitud.nivelConfianza
            );
            resultados.classList.remove("hidden");

            prepararExportacionCalculadora({
                contenedor: resultados,
                nombre: "comparacion-una-muestra",
                datos: { solicitud, resultado }
            });

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
                    : "No fue posible ejecutar el análisis."
            );
        }
    });

    section.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;

        if (boton.dataset.action === "volver-modulo") {
            sessionStorage.removeItem(CLAVE_MODO);
            window.location.hash = "/comparacionGrupos";
            return;
        }

        if (boton.dataset.action === "cargar-ejemplo") {
            formulario.elements.valorReferencia.value = "70";
            formulario.elements.valores.value = [
                72, 68, 75, 71, 74, 69, 73, 76, 70, 72, 74, 71
            ].join("\n");
            actualizarContador();
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }

        if (boton.dataset.action === "limpiar") {
            formulario.reset();
            formulario.elements.valorReferencia.value = "70";
            resultados.innerHTML = "";
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            actualizarContador();
        }
    });

    actualizarContador();
    return section;
}

function crearGuia(titulo, texto) {
    return `
        <article class="flex items-start gap-4">
            <span class="mt-1 h-3 w-3 shrink-0 rounded-full bg-cyan-500"></span>
            <div>
                <h3 class="mb-1 font-black text-slate-900">${titulo}</h3>
                <p class="text-sm leading-relaxed">${texto}</p>
            </div>
        </article>
    `;
}

function convertirNumeroCampo(valor, nombre) {
    const numero = Number(
        String(valor).trim().replace(",", ".")
    );

    if (!Number.isFinite(numero)) {
        throw new Error(`${nombre} debe ser numérico.`);
    }

    return numero;
}

function convertirTextoNumerico(texto, exigirMinimo) {
    const contenido = texto.trim();
    if (!contenido) {
        if (exigirMinimo) {
            throw new Error("Introduzca los valores de la muestra.");
        }
        return [];
    }

    const elementos = contenido
        .split(/[\s;]+/)
        .filter(Boolean);
    const valores = elementos.map((elemento) =>
        Number(elemento.replace(",", "."))
    );
    const invalido = valores.findIndex(
        (valor) => !Number.isFinite(valor)
    );

    if (invalido !== -1) {
        throw new Error(
            `La muestra contiene un valor no válido: "${elementos[invalido]}".`
        );
    }

    if (exigirMinimo && valores.length < 2) {
        throw new Error(
            "Introduzca al menos dos observaciones."
        );
    }

    return valores;
}

function ocultarError(contenedor) {
    contenedor.textContent = "";
    contenedor.classList.add("hidden");
}

function mostrarError(contenedor, mensaje) {
    contenedor.textContent = mensaje;
    contenedor.classList.remove("hidden");
}

function formatoNumero(valor, decimales = 4) {
    if (!Number.isFinite(valor)) return "No disponible";
    return new Intl.NumberFormat("es-DO", {
        maximumFractionDigits: decimales
    }).format(valor);
}

function formatoP(valor) {
    if (!Number.isFinite(valor)) return "No disponible";
    return valor < 0.001
        ? "< 0.001"
        : formatoNumero(valor, 4);
}

function magnitudEfecto(valor) {
    const absoluto = Math.abs(valor);
    if (!Number.isFinite(absoluto)) return "No disponible";
    if (absoluto < 0.1) return "Prácticamente nulo";
    if (absoluto < 0.3) return "Pequeño";
    if (absoluto < 0.5) return "Moderado";
    return "Grande";
}

function crearTarjetaResultado(titulo, valor, detalle = "") {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs font-black uppercase tracking-widest text-slate-500">${titulo}</p>
            <p class="mt-2 text-2xl font-black text-slate-950">${valor}</p>
            ${detalle ? `<p class="mt-2 text-sm leading-relaxed text-slate-600">${detalle}</p>` : ""}
        </article>
    `;
}

function crearVistaResultados(resultado, nivelConfianza) {
    const alfa = 1 - nivelConfianza;
    const significativo = resultado.valorP < alfa;
    const esT = resultado.id === "t-student-una-muestra";

    const efecto = esT
        ? resultado.tamanioEfecto.gHedges
        : resultado.tamanioEfecto.correlacionBiserialRangos;
    const nombreEfecto = esT
        ? "g de Hedges"
        : "Correlación biserial por rangos";

    const intervalo = esT
        ? `${formatoNumero(resultado.intervaloConfianzaMedia.inferior)} a ${formatoNumero(resultado.intervaloConfianzaMedia.superior)}`
        : "No calculado para esta implementación";

    const estimacionCentral = esT
        ? formatoNumero(resultado.muestra.media)
        : formatoNumero(resultado.estimadorHodgesLehmann);
    const etiquetaCentral = esT
        ? "Media muestral"
        : "Estimador de Hodges–Lehmann";

    return `
        <header class="rounded-t-3xl bg-cyan-800 px-6 py-8 text-white md:px-10">
            <p class="mb-2 text-xs font-black uppercase tracking-widest text-cyan-100">
                Resultado del análisis
            </p>
            <h2 class="text-3xl font-black md:text-4xl">${resultado.nombre}</h2>
            <p class="mt-3 text-cyan-50">
                Valor de referencia: <strong>${formatoNumero(resultado.valorReferencia)}</strong>
            </p>
        </header>

        <div class="rounded-b-3xl border border-t-0 border-cyan-200 bg-slate-50 px-6 py-8 shadow-xl md:px-10">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                ${crearTarjetaResultado(
                    etiquetaCentral,
                    estimacionCentral,
                    esT
                        ? `Mediana: ${formatoNumero(resultado.muestra.mediana)}`
                        : `Mediana de diferencias: ${formatoNumero(resultado.medianaDiferencias)}`
                )}
                ${crearTarjetaResultado(
                    resultado.estadistico.simbolo,
                    formatoNumero(resultado.estadistico.valor),
                    esT
                        ? `gl = ${formatoNumero(resultado.gradosLibertad, 0)}`
                        : `n efectivo = ${resultado.nEfectivo}`
                )}
                ${crearTarjetaResultado(
                    "Valor p bilateral",
                    formatoP(resultado.valorP),
                    significativo
                        ? `Existe evidencia al nivel α = ${formatoNumero(alfa, 3)}.`
                        : `No existe evidencia suficiente al nivel α = ${formatoNumero(alfa, 3)}.`
                )}
                ${crearTarjetaResultado(
                    nombreEfecto,
                    formatoNumero(efecto),
                    `Magnitud: ${magnitudEfecto(efecto)}`
                )}
            </div>

            <div class="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                    <h3 class="text-xl font-black text-blue-950">
                        Estimación e intervalo
                    </h3>
                    <dl class="mt-4 space-y-3 text-blue-950">
                        <div class="flex flex-col justify-between gap-1 sm:flex-row">
                            <dt class="font-bold">Intervalo de confianza</dt>
                            <dd>${intervalo}</dd>
                        </div>
                        <div class="flex flex-col justify-between gap-1 sm:flex-row">
                            <dt class="font-bold">Diferencia respecto al valor teórico</dt>
                            <dd>${formatoNumero(
                                esT
                                    ? resultado.diferenciaMedia
                                    : resultado.estimadorHodgesLehmann
                            )}</dd>
                        </div>
                        <div class="flex flex-col justify-between gap-1 sm:flex-row">
                            <dt class="font-bold">Tamaño muestral</dt>
                            <dd>${resultado.muestra.n}</dd>
                        </div>
                    </dl>
                </article>

                <article class="rounded-2xl border ${significativo ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"} p-6">
                    <h3 class="text-xl font-black ${significativo ? "text-emerald-950" : "text-amber-950"}">
                        Interpretación orientativa
                    </h3>
                    <p class="mt-3 leading-relaxed ${significativo ? "text-emerald-900" : "text-amber-900"}">
                        ${significativo
                            ? "Los datos aportan evidencia estadística de una diferencia respecto al valor de referencia. La conclusión sustantiva debe considerar la magnitud del efecto y el contexto de medición."
                            : "Los datos no aportan evidencia estadística suficiente de una diferencia respecto al valor de referencia. Esto no demuestra igualdad; revise precisión, potencia y relevancia práctica."}
                    </p>
                    ${!esT
                        ? `<p class="mt-3 text-sm leading-relaxed text-amber-900">${resultado.metodoValorP}</p>`
                        : ""}
                </article>
            </div>

            <div class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <h3 class="text-xl font-black text-slate-950">Reporte recomendado</h3>
                <p class="mt-3 leading-relaxed text-slate-700">
                    Informe la prueba utilizada, el tamaño muestral, el valor de referencia, el estadístico, los grados de libertad cuando correspondan, el valor p, la estimación con intervalo de confianza y el tamaño del efecto. Describa también los supuestos revisados y cualquier valor atípico relevante.
                </p>
            </div>
        </div>
    `;
}
