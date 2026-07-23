import {
    ajustarRegresionConteo,
    predecirRegresionConteo
} from "../utils/regresionConteo.js";
import {
    crearPanelGraficosConteo
} from "../utils/graficosRegresionConteo.js";
import {
    prepararExportacionCalculadora
} from "../utils/exportacionesCalculadoras.js";

export function CalculadoraRegresionConteo() {
    const section = document.createElement("section");
    let ultimoResultado = null;
    let ultimosMetadatos = null;

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-amber-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-emerald-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modelos"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a modelos de regresión
                </button>

                <p class="uppercase tracking-[0.20em] text-amber-300 text-xs md:text-sm font-black mb-3">
                    Modelos lineales generalizados
                </p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión para variables de conteo
                </h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Ajuste modelos de Poisson o binomial negativa, evalúe la sobredispersión y estime razones de tasas de incidencia con exposición opcional.
                </p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Poisson</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Binomial negativa</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">IRR e intervalos</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Exposición y tasas</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                    Preparación metodológica
                </p>
                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Organice un conteo por fila
                </h2>
                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${guia(
                        "Variable dependiente",
                        "La primera columna debe contener enteros no negativos: número de eventos, errores, visitas, publicaciones u otros conteos."
                    )}
                    ${guia(
                        "Predictores",
                        "Añada una columna por cada variable explicativa. Los coeficientes exponenciados se interpretan como razones de tasas de incidencia."
                    )}
                    ${guia(
                        "Exposición",
                        "Cuando las observaciones tienen tiempos o poblaciones en riesgo diferentes, coloque la exposición positiva en la última columna y active la opción correspondiente."
                    )}
                    ${guia(
                        "Elección del modelo",
                        "Poisson supone igualdad aproximada entre media y varianza condicional. La binomial negativa incorpora un parámetro adicional para sobredispersión."
                    )}
                </div>
                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">Advertencia</h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Una cantidad excesiva de ceros puede requerir modelos inflados en ceros o hurdle. La herramienta mostrará una alerta, pero no sustituye la revisión del diseño y del proceso generador de datos.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion-conteo"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Modelo</span>
                        <select name="modelo" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500">
                            <option value="automatico">Selección automática</option>
                            <option value="poisson">Regresión de Poisson</option>
                            <option value="negativa">Regresión binomial negativa</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Nivel de confianza</span>
                        <select name="nivelConfianza" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500">
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <div class="space-y-3 pt-1 md:pt-7">
                        <label class="flex items-center gap-3 text-sm font-black text-slate-800">
                            <input type="checkbox" name="incluirIntercepto" checked class="w-5 h-5 rounded border-slate-300 text-amber-700 focus:ring-amber-500" />
                            Incluir intercepto
                        </label>
                        <label class="flex items-center gap-3 text-sm font-black text-slate-800">
                            <input type="checkbox" name="usarExposicion" class="w-5 h-5 rounded border-slate-300 text-amber-700 focus:ring-amber-500" />
                            Última columna = exposición
                        </label>
                    </div>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">Datos por filas</span>
                    <textarea
                        name="datos"
                        rows="15"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        placeholder="Eventos, Horas, Asistencia\n1, 2, 70\n3, 4, 78\n5, 6, 85"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. La primera fila puede contener nombres.
                    </span>
                </label>

                <div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 class="font-black text-slate-900">Importar archivo</h3>
                            <p class="text-sm text-slate-600 mt-1">Admite archivos CSV o TXT con la misma estructura de columnas.</p>
                        </div>
                        <input type="file" name="archivo" accept=".csv,.txt,text/csv,text/plain" class="block text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-900 file:px-4 file:py-3 file:font-black file:text-white hover:file:bg-slate-800" />
                    </div>
                </div>

                <div id="mensaje-error-conteo" class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900" role="alert" aria-live="polite"></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button type="submit" class="inline-flex items-center justify-center bg-amber-600 text-white font-black rounded-xl px-7 py-4 hover:bg-amber-700 transition-colors shadow-lg">
                        Ajustar modelo
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button type="button" data-action="cargar-ejemplo" class="inline-flex items-center justify-center border border-amber-300 text-amber-800 font-black rounded-xl px-6 py-4 hover:bg-amber-50 transition-colors">Cargar ejemplo</button>
                    <button type="button" data-action="limpiar" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors">Limpiar</button>
                </div>
            </form>
        </section>

        <section id="resultados-regresion-conteo" class="hidden mt-8" aria-live="polite"></section>
    `;

    const formulario = section.querySelector("#formulario-regresion-conteo");
    const error = section.querySelector("#mensaje-error-conteo");
    const resultados = section.querySelector("#resultados-regresion-conteo");
    const archivo = formulario.elements.archivo;

    aplicarRecomendacionAsistente(formulario);

    archivo.addEventListener("change", async () => {
        const seleccionado = archivo.files?.[0];
        if (!seleccionado) return;
        try {
            formulario.elements.datos.value = await seleccionado.text();
            ocultarError(error);
        } catch {
            mostrarError(error, "No fue posible leer el archivo seleccionado.");
        }
    });

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        ocultarError(error);

        try {
            const solicitud = obtenerSolicitud(formulario);
            ultimoResultado = ajustarRegresionConteo(solicitud);
            ultimosMetadatos = solicitud.metadatos;
            resultados.innerHTML = crearVistaResultados(
                ultimoResultado,
                ultimosMetadatos
            );
            prepararExportacionCalculadora({
                contenedor: resultados,
                nombre: "regresion-conteo",
                datos: {
                    solicitud,
                    metadatos: ultimosMetadatos,
                    resultado: ultimoResultado
                }
            });
            resultados.classList.remove("hidden");
            resultados.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (err) {
            resultados.classList.add("hidden");
            mostrarError(
                error,
                err instanceof Error ? err.message : "No fue posible ajustar el modelo de conteo."
            );
        }
    });

    section.addEventListener("click", async (event) => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;
        const accion = boton.dataset.action;

        if (accion === "volver-modelos") {
            window.location.hash = "/regresionModelos";
            return;
        }
        if (accion === "cargar-ejemplo") {
            cargarEjemplo(formulario);
            resultados.classList.add("hidden");
            ocultarError(error);
            return;
        }
        if (accion === "limpiar") {
            formulario.reset();
            formulario.elements.incluirIntercepto.checked = true;
            formulario.elements.datos.value = "";
            resultados.classList.add("hidden");
            ocultarError(error);
            return;
        }
        if (!ultimoResultado) return;

        if (accion === "exportar-csv") {
            exportarCsv(ultimoResultado, ultimosMetadatos);
        } else if (accion === "copiar-reporte") {
            try {
                await navigator.clipboard.writeText(
                    construirReporte(ultimoResultado, ultimosMetadatos)
                );
                boton.textContent = "Reporte copiado";
                setTimeout(() => { boton.textContent = "Copiar interpretación"; }, 1600);
            } catch {
                mostrarError(error, "El navegador no permitió copiar el reporte.");
            }
        } else if (accion === "imprimir") {
            window.print();
        }
    });

    section.addEventListener("submit", (event) => {
        const prediccion = event.target.closest("#formulario-prediccion-conteo");
        if (!prediccion || !ultimoResultado) return;
        event.preventDefault();

        const contenedor = prediccion.querySelector("#resultado-prediccion-conteo");
        try {
            const valores = [...prediccion.querySelectorAll("[data-predictor]")]
                .sort((a, b) => Number(a.dataset.predictor) - Number(b.dataset.predictor))
                .map((entrada) =>
                    entrada.value.trim() === ""
                        ? NaN
                        : Number(entrada.value)
                );
            const exposicion =
                prediccion.elements.exposicion.value.trim() === ""
                    ? NaN
                    : Number(prediccion.elements.exposicion.value);
            const predicho = predecirRegresionConteo(
                ultimoResultado,
                valores,
                exposicion
            );
            contenedor.innerHTML = `
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                    <p class="text-sm font-black uppercase tracking-widest text-emerald-700 mb-2">Predicción del modelo</p>
                    <p class="text-3xl font-black">${formatear(predicho.conteoEsperado, 4)} eventos esperados</p>
                    <p class="mt-2 leading-relaxed">Tasa estimada: ${formatear(predicho.tasa, 5)} por unidad de exposición. Exposición utilizada: ${formatear(predicho.exposicion, 4)}.</p>
                </div>
            `;
        } catch (err) {
            contenedor.innerHTML = `<div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">${escapar(err.message)}</div>`;
        }
    });

    return section;
}

function guia(titulo, texto) {
    return `<div><h3 class="font-black text-slate-900 mb-1">${titulo}</h3><p>${texto}</p></div>`;
}

function separarFila(fila) {
    return fila.trim().split(/[,;\t]/).map((valor) => valor.trim());
}

function obtenerSolicitud(formulario) {
    const texto = formulario.elements.datos.value.trim();
    if (!texto) throw new Error("Introduzca los datos antes de ajustar el modelo.");

    const filas = texto.split(/\n+/).map(separarFila).filter((fila) => fila.length);
    if (filas.length < 7) {
        throw new Error("Introduzca al menos seis observaciones y, opcionalmente, una fila de encabezados.");
    }

    const primeraNumerica = filas[0].every(
        (valor) =>
            valor !== "" &&
            Number.isFinite(Number(valor))
    );
    const nombres = primeraNumerica
        ? filas[0].map((_, i) => i === 0 ? "Conteo" : `X${i}`)
        : filas.shift();
    const columnas = nombres.length;
    const usarExposicion = formulario.elements.usarExposicion.checked;
    const minimoColumnas = usarExposicion ? 3 : 2;

    if (columnas < minimoColumnas) {
        throw new Error(
            usarExposicion
                ? "Se requieren conteo, al menos un predictor y exposición."
                : "Se requieren conteo y al menos un predictor."
        );
    }
    if (!filas.every((fila) => fila.length === columnas)) {
        throw new Error("Todas las filas deben tener la misma cantidad de columnas.");
    }

    const matriz = filas.map((fila, i) =>
        fila.map((valor, j) => {
            if (valor === "") {
                throw new Error(
                    `La celda de la fila ${i + 1}, columna ${j + 1} está vacía.`
                );
            }
            const numero = Number(valor);
            if (!Number.isFinite(numero)) {
                throw new Error(`El valor de la fila ${i + 1}, columna ${j + 1} no es numérico.`);
            }
            return numero;
        })
    );
    const indiceExposicion = usarExposicion ? columnas - 1 : -1;
    const indicesPredictores = Array.from(
        { length: columnas - 1 - (usarExposicion ? 1 : 0) },
        (_, i) => i + 1
    );
    const nombreDependiente = nombres[0] || "Conteo";

    return {
        y: matriz.map((fila) => fila[0]),
        X: indicesPredictores.map((columna) => matriz.map((fila) => fila[columna])),
        nombresPredictores: indicesPredictores.map((columna) => nombres[columna]),
        incluirIntercepto: formulario.elements.incluirIntercepto.checked,
        exposicion: usarExposicion
            ? matriz.map((fila) => fila[indiceExposicion])
            : null,
        modelo: formulario.elements.modelo.value,
        nivelConfianza: Number(formulario.elements.nivelConfianza.value),
        metadatos: {
            nombreDependiente,
            nombreExposicion: usarExposicion ? nombres[indiceExposicion] : "Exposición igual a 1"
        }
    };
}

function aplicarRecomendacionAsistente(formulario) {
    const recomendacion = sessionStorage.getItem("kernel-modelo-conteo");
    if (recomendacion === "poisson" || recomendacion === "negativa") {
        formulario.elements.modelo.value = recomendacion;
    }
    sessionStorage.removeItem("kernel-modelo-conteo");
}

function cargarEjemplo(formulario) {
    formulario.elements.modelo.value = "automatico";
    formulario.elements.usarExposicion.checked = true;
    formulario.elements.incluirIntercepto.checked = true;
    formulario.elements.datos.value = `Incidentes, HorasCapacitacion, Personal, Exposicion
0, 1, 8, 1.0
1, 2, 10, 1.0
0, 2, 9, 0.8
3, 3, 12, 1.2
1, 4, 11, 1.0
4, 4, 14, 1.1
2, 5, 13, 1.0
7, 5, 16, 1.3
3, 6, 15, 1.0
9, 6, 18, 1.4
4, 7, 17, 1.1
12, 7, 20, 1.5
6, 8, 19, 1.2
15, 8, 22, 1.6
8, 9, 21, 1.2
18, 9, 24, 1.7
10, 10, 23, 1.3
22, 10, 26, 1.8`;
}

function formatear(valor, decimales = 4) {
    if (valor === null || valor === undefined || !Number.isFinite(Number(valor))) return "—";
    return Number(valor).toLocaleString("es-DO", { maximumFractionDigits: decimales });
}

function formatearP(valor) {
    if (valor === null || !Number.isFinite(Number(valor))) return "—";
    return valor < 0.001 ? "< 0.001" : `= ${Number(valor).toFixed(4)}`;
}

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function nombreModelo(modelo) {
    return modelo.tipoModelo === "poisson"
        ? "Regresión de Poisson"
        : "Regresión binomial negativa";
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

function tablaCoeficientes(modelo) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Coeficientes y razones de incidencia del modelo de conteo
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Término</th>
                        <th scope="col" class="px-4 py-3 text-right">B</th>
                        <th scope="col" class="px-4 py-3 text-right">EE</th>
                        <th scope="col" class="px-4 py-3 text-right">z</th>
                        <th scope="col" class="px-4 py-3 text-right">p</th>
                        <th scope="col" class="px-4 py-3 text-right">IRR</th>
                        <th scope="col" class="px-4 py-3 text-right">IC de la IRR</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${modelo.coeficientes.map((fila) => `
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${escapar(fila.termino)}</th>
                            <td class="px-4 py-3 text-right">${formatear(fila.estimacion, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.errorEstandar, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.z, 4)}</td>
                            <td class="px-4 py-3 text-right">${formatearP(fila.p)}</td>
                            <td class="px-4 py-3 text-right font-black">${formatear(fila.irr, 5)}</td>
                            <td class="px-4 py-3 text-right">[${formatear(fila.intervaloIrr.inferior, 5)}, ${formatear(fila.intervaloIrr.superior, 5)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function tablaVif(modelo) {
    if (!modelo.diagnosticos.vif.length) {
        return `<p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">El VIF no aplica a un modelo con un solo predictor.</p>`;
    }

    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Diagnóstico de multicolinealidad mediante tolerancia y VIF
                </caption>
                <thead class="bg-slate-100 text-slate-700">
                    <tr><th scope="col" class="px-4 py-3 text-left">Predictor</th><th scope="col" class="px-4 py-3 text-right">Tolerancia</th><th scope="col" class="px-4 py-3 text-right">VIF</th><th scope="col" class="px-4 py-3 text-left">Lectura</th></tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${modelo.diagnosticos.vif.map((fila) => `
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black">${escapar(fila.variable)}</th>
                            <td class="px-4 py-3 text-right">${formatear(fila.tolerancia, 4)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.vif, 4)}</td>
                            <td class="px-4 py-3">${fila.vif >= 10 ? "Severa" : fila.vif >= 5 ? "Moderada" : "Aceptable"}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function tablaDiagnosticos(modelo) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[460px]">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Diagnósticos del modelo de conteo por observación
                </caption>
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-right">Obs.</th>
                        <th scope="col" class="px-4 py-3 text-right">Observado</th>
                        <th scope="col" class="px-4 py-3 text-right">Ajustado</th>
                        <th scope="col" class="px-4 py-3 text-right">Tasa</th>
                        <th scope="col" class="px-4 py-3 text-right">Residuo P.</th>
                        <th scope="col" class="px-4 py-3 text-right">Leverage</th>
                        <th scope="col" class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${modelo.datosGrafico.map((fila) => {
                        const alerta = Math.abs(fila.residuoPearson) > 2 || fila.distanciaCook > 4 / modelo.n;
                        return `
                            <tr class="${alerta ? "bg-red-50" : ""}">
                                <th scope="row" class="px-4 py-3 text-right font-black">${fila.observacion}</th>
                                <td class="px-4 py-3 text-right">${fila.observado}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.ajustado, 5)}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.tasaAjustada, 5)}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.residuoPearson, 4)}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.leverage, 4)}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.distanciaCook, 5)}</td>
                            </tr>
                        `;
                    }).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function alertas(resultado) {
    const modelo = resultado.seleccionado;
    const mensajes = [];
    if (modelo.dispersion.indice > 1.5 && modelo.tipoModelo === "poisson") {
        mensajes.push("El modelo de Poisson conserva sobredispersión importante; revise la binomial negativa o una especificación alternativa.");
    }
    if (modelo.diagnosticos.razonCeros !== null && modelo.diagnosticos.razonCeros > 1.5) {
        mensajes.push("La cantidad de ceros observada supera ampliamente la esperada; considere modelos inflados en ceros o hurdle.");
    }
    if (modelo.diagnosticos.vif.some((fila) => fila.vif >= 5)) {
        mensajes.push("Existe multicolinealidad moderada o severa en al menos un predictor.");
    }
    if (modelo.diagnosticos.observacionesInfluyentes.length) {
        mensajes.push(`Se identificaron ${modelo.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`);
    }
    if (!mensajes.length) {
        mensajes.push("Los diagnósticos automáticos no detectaron alertas severas; aun así, revise los gráficos y la coherencia sustantiva del modelo.");
    }

    return `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${mensajes.map((texto) => `<div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 leading-relaxed">${escapar(texto)}</div>`).join("")}</div>`;
}

function formularioPrediccion(modelo) {
    return `
        <form id="formulario-prediccion-conteo" class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Aplicación del modelo</p>
            <h2 class="text-2xl md:text-3xl font-black text-emerald-950 mb-3">Predecir un nuevo conteo</h2>
            <p class="text-emerald-900 leading-relaxed mb-6 max-w-4xl">Introduzca los predictores y la exposición. Evite extrapolar fuera del rango observado.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${modelo.nombresPredictores.map((nombre, i) => `
                    <label class="block"><span class="block text-sm font-black text-emerald-950 mb-2">${escapar(nombre)}</span><input type="number" step="any" required data-predictor="${i}" class="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
                `).join("")}
                <label class="block"><span class="block text-sm font-black text-emerald-950 mb-2">Exposición</span><input type="number" step="any" min="0.000001" value="1" required name="exposicion" class="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
            </div>
            <button type="submit" class="mt-6 rounded-xl bg-emerald-700 px-7 py-4 text-white font-black hover:bg-emerald-800 transition-colors shadow-lg">Calcular predicción</button>
            <div id="resultado-prediccion-conteo" class="mt-5" aria-live="polite"></div>
        </form>
    `;
}

function crearVistaResultados(resultado, metadatos) {
    const modelo = resultado.seleccionado;
    const significativo =
        modelo.pruebaGlobal.p !== null &&
        modelo.pruebaGlobal.p < (modelo.alfa ?? 0.05);

    return `
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">Modelo seleccionado</p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">${nombreModelo(modelo)}</h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">${escapar(resultado.comparacion.criterioSeleccion)}</p>
                </div>
                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${significativo ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/30" : "bg-amber-500/20 text-amber-200 border border-amber-400/30"}">${significativo ? "Modelo global significativo" : `Modelo global no significativo con α = ${(modelo.alfa ?? 0.05).toFixed(3)}`}</span>
            </div>
            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-7">
            ${tarjetaMetrica("n", modelo.n, "Observaciones utilizadas")}
            ${tarjetaMetrica("AIC", formatear(modelo.ajuste.aic, 3), "Menor es preferible entre modelos comparables")}
            ${tarjetaMetrica("BIC", formatear(modelo.ajuste.bic, 3), "Penaliza con mayor fuerza la complejidad")}
            ${tarjetaMetrica("Dispersión φ", formatear(modelo.dispersion.indice, 3), "Pearson χ² dividido por gl residuales")}
            ${tarjetaMetrica("Pseudo-R²", formatear(modelo.ajuste.r2McFadden, 4), "McFadden frente al modelo nulo")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y comprobaciones</h2>
            ${alertas(resultado)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Inferencia</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes y razones de tasas</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Una IRR mayor que 1 indica aumento de la tasa esperada; una IRR menor que 1 indica reducción, manteniendo constantes los demás predictores.</p>
            ${tablaCoeficientes(modelo)}
        </section>

        <section class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
            ${tarjetaMetrica("χ² global", formatear(modelo.pruebaGlobal.chiCuadrado, 4), `gl = ${modelo.pruebaGlobal.gradosLibertad}; p ${formatearP(modelo.pruebaGlobal.p)}`)}
            ${tarjetaMetrica("Deviance", formatear(modelo.ajuste.deviance, 4), "Discrepancia respecto al modelo saturado")}
            ${tarjetaMetrica("Ceros obs./esp.", `${modelo.diagnosticos.cerosObservados} / ${formatear(modelo.diagnosticos.cerosEsperados, 2)}`, "Permite detectar exceso orientativo de ceros")}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y VIF</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Revise especialmente VIF de 5 o más antes de interpretar efectos parciales.</p>
            ${tablaVif(modelo)}
        </section>

        ${crearPanelGraficosConteo(resultado)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Conteos ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas superan criterios automáticos de residuo o influencia.</p>
            ${tablaDiagnosticos(modelo)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del modelo</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${resultado.interpretacion.map((texto) => `<li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${escapar(texto)}</span></li>`).join("")}
            </ul>
        </section>

        <section class="mt-8">${formularioPrediccion(modelo)}</section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>La variable dependiente analizada fue <strong>${escapar(metadatos.nombreDependiente)}</strong>. La exposición se interpretó como <strong>${escapar(metadatos.nombreExposicion)}</strong>. No interprete una IRR como efecto causal sin un diseño que lo justifique, y no seleccione modelos únicamente por AIC sin revisar la teoría, los residuos, la dispersión y el proceso generador de ceros.</p>
        </section>
    `;
}

function construirReporte(resultado, metadatos) {
    const modelo = resultado.seleccionado;
    const lineas = [
        "REGRESIÓN PARA VARIABLES DE CONTEO — LABORATORIO KERNEL",
        "",
        `Modelo: ${nombreModelo(modelo)}`,
        `Variable dependiente: ${metadatos.nombreDependiente}`,
        `Predictores: ${modelo.nombresPredictores.join(", ")}`,
        `n = ${modelo.n}`,
        `AIC = ${formatear(modelo.ajuste.aic, 4)}`,
        `BIC = ${formatear(modelo.ajuste.bic, 4)}`,
        `Dispersión = ${formatear(modelo.dispersion.indice, 4)}`,
        `χ² global = ${formatear(modelo.pruebaGlobal.chiCuadrado, 4)}, p ${formatearP(modelo.pruebaGlobal.p)}`,
        "",
        "Coeficientes:"
    ];
    modelo.coeficientes.forEach((fila) => {
        lineas.push(`${fila.termino}: B = ${formatear(fila.estimacion, 6)}, IRR = ${formatear(fila.irr, 5)}, p ${formatearP(fila.p)}`);
    });
    lineas.push("", "Interpretación:");
    resultado.interpretacion.forEach((texto) => lineas.push(`- ${texto}`));
    lineas.push("", "Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo.");
    return lineas.join("\n");
}

function celdaCsv(valor) {
    return `"${String(valor ?? "").replaceAll('"', '""')}"`;
}

function exportarCsv(resultado, metadatos) {
    const modelo = resultado.seleccionado;
    const filas = [
        ["REGRESIÓN PARA VARIABLES DE CONTEO"],
        ["Modelo", nombreModelo(modelo)],
        ["Variable dependiente", metadatos.nombreDependiente],
        ["Predictores", modelo.nombresPredictores.join(", ")],
        ["n", modelo.n],
        ["AIC", modelo.ajuste.aic],
        ["BIC", modelo.ajuste.bic],
        ["Dispersión", modelo.dispersion.indice],
        ["Chi-cuadrado global", modelo.pruebaGlobal.chiCuadrado],
        ["p global", modelo.pruebaGlobal.p],
        [],
        ["Término", "B", "EE", "z", "p", "IRR", "IC IRR inferior", "IC IRR superior"],
        ...modelo.coeficientes.map((fila) => [
            fila.termino,
            fila.estimacion,
            fila.errorEstandar,
            fila.z,
            fila.p,
            fila.irr,
            fila.intervaloIrr.inferior,
            fila.intervaloIrr.superior
        ]),
        [],
        ["Observación", "Observado", "Ajustado", "Tasa", "Exposición", "Residuo Pearson", "Leverage", "Cook"],
        ...modelo.datosGrafico.map((fila) => [
            fila.observacion,
            fila.observado,
            fila.ajustado,
            fila.tasaAjustada,
            fila.exposicion,
            fila.residuoPearson,
            fila.leverage,
            fila.distanciaCook
        ]),
        [],
        ["Créditos", "Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]
    ];
    const contenido = "\uFEFF" + filas.map((fila) => fila.map(celdaCsv).join(",")).join("\n");
    const blob = new Blob([contenido], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "regresion-conteo-kernel.csv";
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
