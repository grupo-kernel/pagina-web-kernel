import {
    analizarProporcionesRelacionadas
} from "../utils/estadisticaProporcionesRelacionadas.js";
import {
    prepararExportacionCalculadora
} from "../utils/exportacionesCalculadoras.js";

const CLAVE_PRUEBA = "kernel-prueba-proporciones-relacionadas";
const CLAVE_MODO = "kernel-calculadora-proporciones-relacionadas-activa";

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatear(valor, decimales = 4) {
    if (!Number.isFinite(valor)) return "—";
    return valor.toLocaleString("es-DO", {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales
    });
}

function formatearP(valor) {
    if (!Number.isFinite(valor)) return "—";
    if (valor < 0.0001) return "< 0.0001";
    return formatear(valor, 4);
}

function convertirMatriz(texto, columnasEsperadas) {
    const lineas = texto
        .split(/\r?\n/)
        .map((linea) => linea.trim())
        .filter(Boolean);

    if (lineas.length < 2) {
        throw new Error("Introduzca al menos dos filas, una por participante o unidad relacionada.");
    }

    return lineas.map((linea, indice) => {
        const valores = linea
            .split(/[\s,;]+/)
            .filter(Boolean);

        if (valores.length !== columnasEsperadas) {
            throw new Error(
                `La fila ${indice + 1} debe contener exactamente ${columnasEsperadas} valores.`
            );
        }

        return valores.map((valor) => {
            const numero = Number(valor);
            if (numero !== 0 && numero !== 1) {
                throw new Error(
                    `La fila ${indice + 1} contiene "${valor}". Utilice únicamente 0 y 1.`
                );
            }
            return numero;
        });
    });
}

function convertirEtiquetas(texto, cantidad) {
    const etiquetas = texto
        .split(/[;,]+/)
        .map((etiqueta) => etiqueta.trim())
        .filter(Boolean);

    if (!etiquetas.length) {
        return Array.from({ length: cantidad }, (_, indice) =>
            `Condición ${indice + 1}`
        );
    }

    if (etiquetas.length !== cantidad) {
        throw new Error(`Introduzca exactamente ${cantidad} etiquetas separadas por comas.`);
    }

    if (new Set(etiquetas).size !== etiquetas.length) {
        throw new Error("Las etiquetas de las condiciones deben ser diferentes.");
    }

    return etiquetas;
}

function tarjetaMetrica(titulo, valor, detalle = "") {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs font-black uppercase tracking-widest text-slate-500">${escapar(titulo)}</p>
            <p class="mt-2 text-2xl font-black text-slate-950">${escapar(valor)}</p>
            ${detalle ? `<p class="mt-2 text-sm leading-relaxed text-slate-600">${escapar(detalle)}</p>` : ""}
        </article>
    `;
}

function tablaCondiciones(resumen) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="w-full border-collapse text-sm">
                <thead class="bg-slate-100 text-slate-700">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left font-black">Condición</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">Sí (1)</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">No (0)</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">Proporción</th>
                    </tr>
                </thead>
                <tbody>
                    ${resumen.map((fila) => `
                        <tr class="border-t border-slate-200">
                            <th scope="row" class="px-4 py-3 text-left font-bold text-slate-800">${escapar(fila.etiqueta)}</th>
                            <td class="px-4 py-3 text-right text-slate-700">${fila.exitos}</td>
                            <td class="px-4 py-3 text-right text-slate-700">${fila.fracasos}</td>
                            <td class="px-4 py-3 text-right font-bold text-slate-900">${formatear(fila.proporcion * 100, 2)} %</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function vistaMcNemar(resultado) {
    const tabla = resultado.tablaPareada;
    const intervalo = resultado.intervaloConfianzaDiferencia;

    return `
        <section class="overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-xl">
            <header class="bg-emerald-700 px-6 py-7 text-white md:px-9">
                <p class="text-xs font-black uppercase tracking-widest text-emerald-100">Resultado</p>
                <h2 class="mt-2 text-3xl font-black">${escapar(resultado.nombre)}</h2>
                <p class="mt-3 max-w-3xl leading-relaxed text-emerald-50">${escapar(resultado.metodo)}</p>
            </header>

            <div class="space-y-7 px-6 py-8 md:px-9">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    ${tarjetaMetrica(resultado.estadistico.simbolo, formatear(resultado.estadistico.valor), "Estadístico del contraste")}
                    ${tarjetaMetrica("Valor p", formatearP(resultado.valorP), resultado.significativo ? "Evidencia de cambio al nivel seleccionado" : "No se detecta un cambio estadísticamente significativo")}
                    ${tarjetaMetrica("Pares discordantes", String(resultado.discordantes), "Son los pares que determinan la prueba")}
                    ${tarjetaMetrica("Diferencia pareada", `${formatear(resultado.diferenciaProporciones * 100, 2)} pp`, "Condición 2 menos condición 1")}
                </div>

                ${tablaCondiciones(resultado.resumenCondiciones)}

                <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <article class="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                        <h3 class="text-lg font-black text-cyan-950">Tabla pareada</h3>
                        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <div class="rounded-xl bg-white p-3"><dt class="font-bold text-slate-600">0 → 0</dt><dd class="mt-1 text-xl font-black">${tabla.ambosNo}</dd></div>
                            <div class="rounded-xl bg-white p-3"><dt class="font-bold text-slate-600">0 → 1</dt><dd class="mt-1 text-xl font-black">${tabla.cambio01}</dd></div>
                            <div class="rounded-xl bg-white p-3"><dt class="font-bold text-slate-600">1 → 0</dt><dd class="mt-1 text-xl font-black">${tabla.cambio10}</dd></div>
                            <div class="rounded-xl bg-white p-3"><dt class="font-bold text-slate-600">1 → 1</dt><dd class="mt-1 text-xl font-black">${tabla.ambosSi}</dd></div>
                        </dl>
                    </article>

                    <article class="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                        <h3 class="text-lg font-black text-blue-950">Tamaño del efecto</h3>
                        <dl class="mt-4 space-y-3 text-sm text-blue-950">
                            <div><dt class="font-bold">Odds ratio pareada</dt><dd class="mt-1 text-xl font-black">${formatear(resultado.tamanioEfecto.oddsRatioPareada)}</dd></div>
                            <div><dt class="font-bold">IC de la diferencia</dt><dd class="mt-1 font-semibold">[${formatear(intervalo.inferior * 100, 2)}, ${formatear(intervalo.superior * 100, 2)}] puntos porcentuales</dd></div>
                        </dl>
                    </article>
                </div>

                ${resultado.advertencias.length ? `
                    <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
                        <h3 class="font-black">Advertencia metodológica</h3>
                        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">${resultado.advertencias.map((texto) => `<li>${escapar(texto)}</li>`).join("")}</ul>
                    </div>
                ` : ""}
            </div>
        </section>
    `;
}

function tablaComparaciones(comparaciones) {
    if (!comparaciones.length) return "";

    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="w-full border-collapse text-sm">
                <thead class="bg-slate-100 text-slate-700">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left font-black">Comparación</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">p exacta</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">p Holm</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">Diferencia</th>
                        <th scope="col" class="px-4 py-3 text-center font-black">Conclusión</th>
                    </tr>
                </thead>
                <tbody>
                    ${comparaciones.map((fila) => `
                        <tr class="border-t border-slate-200">
                            <th scope="row" class="px-4 py-3 text-left font-bold text-slate-800">${escapar(fila.condicion1)} vs. ${escapar(fila.condicion2)}</th>
                            <td class="px-4 py-3 text-right">${formatearP(fila.valorP)}</td>
                            <td class="px-4 py-3 text-right font-bold">${formatearP(fila.valorPAjustadoHolm)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.diferenciaProporciones * 100, 2)} pp</td>
                            <td class="px-4 py-3 text-center">
                                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${fila.significativaAjustada ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-700"}">
                                    ${fila.significativaAjustada ? "Significativa" : "No significativa"}
                                </span>
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function vistaCochran(resultado) {
    return `
        <section class="overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-xl">
            <header class="bg-violet-700 px-6 py-7 text-white md:px-9">
                <p class="text-xs font-black uppercase tracking-widest text-violet-100">Resultado global</p>
                <h2 class="mt-2 text-3xl font-black">Prueba Q de Cochran</h2>
                <p class="mt-3 max-w-3xl leading-relaxed text-violet-50">${escapar(resultado.metodo)}</p>
            </header>

            <div class="space-y-7 px-6 py-8 md:px-9">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    ${tarjetaMetrica("Q", formatear(resultado.estadistico.valor), "Estadístico global")}
                    ${tarjetaMetrica("Grados de libertad", String(resultado.gradosLibertad), `${resultado.k} condiciones relacionadas`)}
                    ${tarjetaMetrica("Valor p", formatearP(resultado.valorP), resultado.significativo ? "Existen diferencias globales" : "No se detectan diferencias globales")}
                    ${tarjetaMetrica("W equivalente", formatear(resultado.tamanioEfecto.wKendallEquivalente), "Indicador global del tamaño del efecto")}
                </div>

                ${tablaCondiciones(resultado.resumenCondiciones)}

                <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 class="text-xl font-black text-slate-950">Comparaciones posteriores</h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                        Se aplicó McNemar exacta a cada par de condiciones y se controló la multiplicidad mediante el ajuste de Holm.
                    </p>
                    <div class="mt-5">${tablaComparaciones(resultado.comparacionesPosteriores)}</div>
                </article>

                ${resultado.advertencias.length ? `
                    <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
                        <h3 class="font-black">Advertencia metodológica</h3>
                        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">${resultado.advertencias.map((texto) => `<li>${escapar(texto)}</li>`).join("")}</ul>
                    </div>
                ` : ""}
            </div>
        </section>
    `;
}

function crearGuia(titulo, texto) {
    return `
        <article class="flex items-start gap-4">
            <span class="mt-1 h-3 w-3 shrink-0 rounded-full bg-fuchsia-500"></span>
            <div>
                <h3 class="font-black text-slate-900">${escapar(titulo)}</h3>
                <p class="mt-1 text-sm leading-relaxed">${escapar(texto)}</p>
            </div>
        </article>
    `;
}

export function CalculadoraProporcionesRelacionadas() {
    const section = document.createElement("section");
    section.className = "w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans";
    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-2xl md:px-12 md:py-14">
            <div class="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-fuchsia-500/20"></div>
            <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-violet-700/20"></div>
            <div class="relative z-10 max-w-4xl">
                <button type="button" data-action="volver-modulo" class="mb-7 inline-flex items-center gap-2 font-black text-fuchsia-300 hover:text-white">
                    <span aria-hidden="true">←</span> Volver a comparación de grupos
                </button>
                <p class="mb-3 text-xs font-black uppercase tracking-[0.20em] text-fuchsia-300 md:text-sm">Motor estadístico del Grupo El Kernel</p>
                <h1 class="mb-5 text-4xl font-black leading-tight md:text-6xl">Proporciones relacionadas</h1>
                <p class="max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                    Compare respuestas dicotómicas de las mismas personas mediante McNemar o Q de Cochran.
                </p>
                <div class="mt-7 flex flex-wrap gap-3">
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">Datos 0/1</span>
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">Diseños antes-después</span>
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">Post hoc con Holm</span>
                </div>
            </div>
        </header>

        <section class="mt-8 grid grid-cols-1 gap-7 xl:grid-cols-[0.72fr_1.28fr]">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
                <p class="mb-2 text-xs font-black uppercase tracking-widest text-fuchsia-700">Selección metodológica</p>
                <h2 class="mb-5 text-2xl font-black text-slate-900">¿Qué prueba corresponde?</h2>
                <div class="space-y-5 text-slate-600">
                    ${crearGuia("McNemar", "Dos mediciones relacionadas de una misma respuesta dicotómica, por ejemplo antes y después.")}
                    ${crearGuia("Q de Cochran", "Tres o más condiciones o momentos relacionados con respuesta binaria en cada participante.")}
                </div>
                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950">Estructura de los datos</h3>
                    <p class="mt-2 text-sm leading-relaxed text-amber-900">
                        Cada fila representa una persona y cada columna una condición. Use 1 para presencia/éxito/sí y 0 para ausencia/fracaso/no.
                    </p>
                </div>
            </aside>

            <form id="formulario-proporciones-relacionadas" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8" novalidate>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <label class="block">
                        <span class="mb-2 block text-sm font-black text-slate-800">Prueba estadística</span>
                        <select name="prueba" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100">
                            <option value="mcnemar">McNemar: dos mediciones</option>
                            <option value="q-cochran">Q de Cochran: tres o más mediciones</option>
                        </select>
                    </label>

                    <label class="block" data-campo-condiciones>
                        <span class="mb-2 block text-sm font-black text-slate-800">Número de condiciones</span>
                        <input type="number" name="numeroCondiciones" min="3" max="8" value="3" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100">
                    </label>

                    <label class="block" data-campo-metodo>
                        <span class="mb-2 block text-sm font-black text-slate-800">Método de McNemar</span>
                        <select name="metodoMcNemar" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100">
                            <option value="automatico">Automático</option>
                            <option value="exacta">Exacto</option>
                            <option value="asintotica">Chi-cuadrado con continuidad</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="mb-2 block text-sm font-black text-slate-800">Nivel de confianza</span>
                        <select name="nivelConfianza" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100">
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <label class="mt-6 block">
                    <span class="mb-2 block text-sm font-black text-slate-800">Etiquetas de las condiciones</span>
                    <input type="text" name="etiquetas" value="Antes, Después" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100">
                    <span class="mt-2 block text-xs text-slate-500">Separe las etiquetas mediante comas.</span>
                </label>

                <label class="mt-6 block">
                    <span class="mb-2 flex items-center justify-between gap-3 text-sm font-black text-slate-800">
                        <span>Matriz de respuestas</span>
                        <span data-contador class="text-xs font-bold text-slate-500">0 filas</span>
                    </span>
                    <textarea name="matriz" rows="14" placeholder="1 1&#10;1 0&#10;0 1&#10;0 0" class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"></textarea>
                </label>

                <div id="mensaje-error-proporciones" class="mt-6 hidden rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900" role="alert" aria-live="polite"></div>

                <div class="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row">
                    <button type="submit" class="inline-flex items-center justify-center rounded-xl bg-fuchsia-700 px-7 py-4 font-black text-white shadow-lg hover:bg-fuchsia-800">Ejecutar análisis <span class="ml-2" aria-hidden="true">→</span></button>
                    <button type="button" data-action="cargar-ejemplo" class="inline-flex items-center justify-center rounded-xl border border-fuchsia-300 px-6 py-4 font-black text-fuchsia-700 hover:bg-fuchsia-50">Cargar datos de ejemplo</button>
                    <button type="button" data-action="limpiar" class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 font-black text-slate-700 hover:bg-slate-50">Limpiar</button>
                </div>
            </form>
        </section>

        <section id="resultados-proporciones-relacionadas" class="mt-8 hidden" aria-live="polite"></section>
    `;

    const formulario = section.querySelector("#formulario-proporciones-relacionadas");
    const resultados = section.querySelector("#resultados-proporciones-relacionadas");
    const mensajeError = section.querySelector("#mensaje-error-proporciones");
    const contador = section.querySelector("[data-contador]");
    const campoCondiciones = section.querySelector("[data-campo-condiciones]");
    const campoMetodo = section.querySelector("[data-campo-metodo]");

    const sincronizar = () => {
        const esMcNemar = formulario.elements.prueba.value === "mcnemar";
        campoCondiciones.classList.toggle("hidden", esMcNemar);
        campoMetodo.classList.toggle("hidden", !esMcNemar);
        const cantidad = esMcNemar
            ? 2
            : Math.max(3, Math.min(8, Number(formulario.elements.numeroCondiciones.value) || 3));
        formulario.elements.etiquetas.value = esMcNemar
            ? "Antes, Después"
            : Array.from({ length: cantidad }, (_, indice) => `Condición ${indice + 1}`).join(", ");
        resultados.classList.add("hidden");
    };

    const actualizarContador = () => {
        const filas = formulario.elements.matriz.value
            .split(/\r?\n/)
            .filter((linea) => linea.trim()).length;
        contador.textContent = `${filas} ${filas === 1 ? "fila" : "filas"}`;
    };

    const pruebaRecomendada = sessionStorage.getItem(CLAVE_PRUEBA);
    if (["mcnemar", "q-cochran"].includes(pruebaRecomendada)) {
        formulario.elements.prueba.value = pruebaRecomendada;
    }
    sessionStorage.removeItem(CLAVE_PRUEBA);
    sincronizar();

    formulario.elements.prueba.addEventListener("change", sincronizar);
    formulario.elements.numeroCondiciones.addEventListener("change", sincronizar);
    formulario.elements.matriz.addEventListener("input", actualizarContador);

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        mensajeError.classList.add("hidden");

        try {
            const prueba = formulario.elements.prueba.value;
            const cantidad = prueba === "mcnemar"
                ? 2
                : Math.max(3, Math.min(8, Number(formulario.elements.numeroCondiciones.value) || 3));
            const matriz = convertirMatriz(formulario.elements.matriz.value, cantidad);
            const etiquetas = convertirEtiquetas(formulario.elements.etiquetas.value, cantidad);
            const solicitud = {
                matriz,
                etiquetas,
                prueba,
                nivelConfianza: Number(formulario.elements.nivelConfianza.value),
                metodoMcNemar: formulario.elements.metodoMcNemar.value
            };
            const resultado = analizarProporcionesRelacionadas(solicitud);

            resultados.innerHTML = prueba === "mcnemar"
                ? vistaMcNemar(resultado)
                : vistaCochran(resultado);
            resultados.classList.remove("hidden");
            prepararExportacionCalculadora({
                contenedor: resultados,
                nombre: prueba === "mcnemar" ? "mcnemar" : "q-cochran",
                datos: { solicitud, resultado }
            });
            resultados.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (error) {
            resultados.classList.add("hidden");
            mensajeError.textContent = error instanceof Error
                ? error.message
                : "No fue posible ejecutar el análisis.";
            mensajeError.classList.remove("hidden");
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
            const prueba = formulario.elements.prueba.value;
            if (prueba === "mcnemar") {
                formulario.elements.etiquetas.value = "Antes, Después";
                formulario.elements.matriz.value = [
                    "1 1", "1 1", "1 0", "0 1", "0 1", "0 1",
                    "0 1", "0 1", "0 1", "0 1", "0 0", "0 0"
                ].join("\n");
            } else {
                formulario.elements.numeroCondiciones.value = "3";
                formulario.elements.etiquetas.value = "Método A, Método B, Método C";
                formulario.elements.matriz.value = [
                    "1 1 0", "1 1 0", "1 1 0", "1 0 0", "1 0 0", "1 0 0",
                    "1 1 1", "1 1 0", "0 1 0", "1 0 0", "1 0 1", "0 0 0"
                ].join("\n");
            }
            actualizarContador();
            resultados.classList.add("hidden");
            mensajeError.classList.add("hidden");
            return;
        }

        if (boton.dataset.action === "limpiar") {
            formulario.elements.matriz.value = "";
            resultados.innerHTML = "";
            resultados.classList.add("hidden");
            mensajeError.classList.add("hidden");
            actualizarContador();
        }
    });

    return section;
}
