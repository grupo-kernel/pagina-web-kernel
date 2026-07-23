import {
    ajustarRegresionLogisticaBinaria,
    predecirRegresionLogistica
} from "../utils/regresionLogisticaBinaria.js";
import {
    crearPanelGraficosLogistica
} from "../utils/graficosRegresionLogistica.js";
import {
    prepararExportacionCalculadora
} from "../utils/exportacionesCalculadoras.js";

export function CalculadoraRegresionLogistica() {
    const section = document.createElement("section");
    let ultimoModelo = null;
    let ultimosMetadatos = null;

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-rose-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <div class="flex flex-wrap gap-4 mb-7">
                    <button
                        type="button"
                        data-action="volver-regresion"
                        class="inline-flex items-center gap-2 text-rose-300 font-black hover:text-white transition-colors"
                    >
                        <span aria-hidden="true">←</span>
                        Modelos de regresión
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors"
                    >
                        Laboratorio
                    </button>
                </div>

                <p class="uppercase tracking-[0.20em] text-rose-300 text-xs md:text-sm font-black mb-3">
                    Modelización de resultados binarios
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión logística binaria
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime la probabilidad de un evento codificado como 0 o 1, interprete razones de probabilidades, evalúe discriminación y calibración, y realice nuevas predicciones.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Odds ratios</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Curva ROC y AUC</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Calibración</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Clasificación</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                    Preparación de datos
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Una observación por fila
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearGuia(
                        "Resultado binario",
                        "La primera columna debe contener exclusivamente 0 y 1. Defina con claridad qué representa el evento codificado como 1."
                    )}
                    ${crearGuia(
                        "Predictores",
                        "Coloque después una columna por cada variable explicativa cuantitativa o previamente codificada."
                    )}
                    ${crearGuia(
                        "Encabezados",
                        "La primera fila puede contener nombres de variables. Sin encabezados se asignarán Y, X1, X2, …"
                    )}
                    ${crearGuia(
                        "Interpretación",
                        "Una razón de probabilidades mayor que 1 indica aumento de las odds del evento; una menor que 1 indica disminución, manteniendo constantes los demás predictores."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Advertencia metodológica
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La regresión logística no demuestra causalidad. Requiere observaciones independientes, tamaño muestral suficiente, ausencia de colinealidad severa y revisión de separación completa, influencia y calibración.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion-logistica"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Umbral de clasificación
                        </span>
                        <input
                            type="number"
                            name="umbral"
                            min="0.01"
                            max="0.99"
                            step="0.01"
                            value="0.50"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        />
                    </label>

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-rose-700 focus:ring-rose-500"
                            />
                            Incluir intercepto
                        </span>
                    </label>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Datos por filas
                    </span>
                    <textarea
                        name="datos"
                        rows="15"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        placeholder="Aprobó, Horas, Asistencia\n0, 2, 60\n1, 7, 90"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Use punto para los decimales.
                    </span>
                </label>

                <label class="block mt-5">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Importar CSV o TXT
                    </span>
                    <input
                        type="file"
                        name="archivo"
                        accept=".csv,.txt,text/csv,text/plain"
                        class="block w-full text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-rose-50 file:px-5 file:py-3 file:font-black file:text-rose-700 hover:file:bg-rose-100"
                    />
                </label>

                <div
                    id="mensaje-error-logistica"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-rose-700 text-white font-black rounded-xl px-7 py-4 hover:bg-rose-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo logístico
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-rose-300 text-rose-700 font-black rounded-xl px-6 py-4 hover:bg-rose-50 transition-colors"
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
            id="resultados-regresion-logistica"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector("#formulario-regresion-logistica");
    const mensajeError = section.querySelector("#mensaje-error-logistica");
    const resultados = section.querySelector("#resultados-regresion-logistica");

    formulario.elements.archivo.addEventListener("change", async () => {
        const archivo = formulario.elements.archivo.files?.[0];
        if (!archivo) return;

        try {
            formulario.elements.datos.value = await archivo.text();
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
            const { solicitud, metadatos } = obtenerSolicitud(formulario);
            const modelo = ajustarRegresionLogisticaBinaria(solicitud);

            ultimoModelo = modelo;
            ultimosMetadatos = metadatos;
            resultados.innerHTML = crearVistaResultados(
                modelo,
                metadatos
            );
            prepararExportacionCalculadora({
                contenedor: resultados,
                nombre: "regresion-logistica-binaria",
                datos: {
                    solicitud,
                    metadatos: ultimosMetadatos,
                    modelo: ultimoModelo
                }
            });
            resultados.classList.remove("hidden");
            resultados.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } catch (error) {
            resultados.classList.add("hidden");
            ultimoModelo = null;
            ultimosMetadatos = null;
            mostrarError(
                mensajeError,
                error instanceof Error
                    ? error.message
                    : "No fue posible ajustar el modelo logístico."
            );
        }
    });

    section.addEventListener("submit", (event) => {
        const formularioPrediccion = event.target.closest(
            "#formulario-prediccion-logistica"
        );

        if (!formularioPrediccion || !ultimoModelo) return;

        event.preventDefault();
        const valores = [
            ...formularioPrediccion.querySelectorAll(
                "[data-predictor]"
            )
        ].map((input) =>
            input.value.trim() === ""
                ? NaN
                : Number(input.value)
        );
        const salida = formularioPrediccion.querySelector(
            "#resultado-prediccion-logistica"
        );

        try {
            const prediccion = predecirRegresionLogistica(
                ultimoModelo,
                valores,
                ultimoModelo.clasificacion.umbral
            );

            salida.innerHTML = `
                <div class="rounded-2xl border border-rose-200 bg-white p-5 text-rose-950">
                    <p class="text-sm font-black uppercase tracking-widest text-rose-700 mb-2">
                        Predicción estimada
                    </p>
                    <p class="text-3xl font-black">
                        Probabilidad = ${formatear(prediccion.probabilidad * 100, 2)} %
                    </p>
                    <p class="mt-2 text-sm leading-relaxed">
                        Con umbral ${formatear(prediccion.umbral, 2)}, la clase predicha es <strong>${prediccion.clasePredicha}</strong>. Esta predicción debe interpretarse dentro del rango y población estudiados.
                    </p>
                </div>
            `;
        } catch (error) {
            salida.innerHTML = `
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${escaparHtml(error.message)}
                </div>
            `;
        }
    });

    section.addEventListener("click", async (event) => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;

        switch (boton.dataset.action) {
            case "volver-regresion":
                window.location.hash = "/regresionModelos";
                break;
            case "volver-laboratorio":
                window.location.hash = "/laboratorioKernel";
                break;
            case "cargar-ejemplo":
                cargarEjemplo(formulario);
                resultados.classList.add("hidden");
                ocultarError(mensajeError);
                break;
            case "limpiar":
                formulario.reset();
                formulario.elements.umbral.value = "0.50";
                resultados.classList.add("hidden");
                ultimoModelo = null;
                ultimosMetadatos = null;
                ocultarError(mensajeError);
                break;
            case "exportar-csv":
                if (ultimoModelo && ultimosMetadatos) {
                    exportarCsv(ultimoModelo, ultimosMetadatos);
                }
                break;
            case "copiar-reporte":
                if (ultimoModelo && ultimosMetadatos) {
                    await copiarReporte(
                        ultimoModelo,
                        ultimosMetadatos,
                        boton
                    );
                }
                break;
            case "imprimir":
                window.print();
                break;
            default:
                break;
        }
    });

    return section;
}

function crearGuia(titulo, texto) {
    return `
        <div>
            <h3 class="font-black text-slate-900 mb-1">${titulo}</h3>
            <p>${texto}</p>
        </div>
    `;
}

function separarFila(fila) {
    return fila
        .trim()
        .split(/[,;\t]/)
        .map((valor) => valor.trim());
}

function obtenerSolicitud(formulario) {
    const texto = formulario.elements.datos.value.trim();

    if (!texto) {
        throw new Error(
            "Introduzca los datos antes de ajustar el modelo."
        );
    }

    const filas = texto
        .split(/\r?\n+/)
        .map(separarFila)
        .filter((fila) => fila.length && fila.some(Boolean));

    if (filas.length < 9) {
        throw new Error(
            "Introduzca al menos ocho observaciones y, cuando corresponda, una fila de encabezados."
        );
    }

    const primeraNumerica = filas[0].every(
        (valor) =>
            valor !== "" &&
            Number.isFinite(Number(valor))
    );
    const nombres = primeraNumerica
        ? filas[0].map(
            (_, indice) => indice === 0 ? "Y" : `X${indice}`
        )
        : filas.shift();
    const numeroColumnas = nombres.length;

    if (numeroColumnas < 2) {
        throw new Error(
            "Se requieren al menos dos columnas: resultado binario y un predictor."
        );
    }

    if (!filas.every((fila) => fila.length === numeroColumnas)) {
        throw new Error(
            "Todas las filas deben tener la misma cantidad de columnas."
        );
    }

    const matriz = filas.map((fila, indiceFila) =>
        fila.map((valor, indiceColumna) => {
            if (valor === "") {
                throw new Error(
                    `La celda de la fila ${indiceFila + 1}, columna ${indiceColumna + 1} está vacía.`
                );
            }
            const numero = Number(valor);

            if (!Number.isFinite(numero)) {
                throw new Error(
                    `El valor de la fila ${indiceFila + 1}, columna ${indiceColumna + 1} no es numérico.`
                );
            }

            return numero;
        })
    );
    const respuesta = matriz.map((fila) => fila[0]);

    if (!respuesta.every((valor) => valor === 0 || valor === 1)) {
        throw new Error(
            "La primera columna debe contener únicamente valores 0 y 1."
        );
    }

    const umbral = Number(formulario.elements.umbral.value);

    return {
        solicitud: {
            y: respuesta,
            X: Array.from(
                { length: numeroColumnas - 1 },
                (_, columna) => matriz.map(
                    (fila) => fila[columna + 1]
                )
            ),
            nombresPredictores: nombres.slice(1),
            incluirIntercepto:
                formulario.elements.incluirIntercepto.checked,
            nivelConfianza: Number(
                formulario.elements.nivelConfianza.value
            ),
            umbral
        },
        metadatos: {
            nombreDependiente: nombres[0],
            nombresPredictores: nombres.slice(1)
        }
    };
}

function cargarEjemplo(formulario) {
    formulario.elements.datos.value = `Aprobó, HorasEstudio, Asistencia
0, 1.0, 55
0, 1.5, 60
0, 2.0, 58
0, 2.2, 64
0, 2.8, 62
0, 3.0, 68
0, 3.5, 66
1, 3.8, 72
0, 4.0, 70
1, 4.2, 75
0, 4.5, 69
1, 4.8, 78
1, 5.0, 80
0, 5.2, 73
1, 5.5, 82
1, 5.8, 84
0, 6.0, 76
1, 6.2, 86
1, 6.5, 88
1, 6.8, 90
1, 7.0, 87
1, 7.5, 92
1, 8.0, 94
1, 8.5, 96`;
    formulario.elements.nivelConfianza.value = "0.95";
    formulario.elements.umbral.value = "0.50";
    formulario.elements.incluirIntercepto.checked = true;
}

function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.remove("hidden");
    elemento.scrollIntoView({ behavior: "smooth", block: "center" });
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.classList.add("hidden");
}

function escaparHtml(valor) {
    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatear(valor, decimales = 4) {
    if (valor === null || valor === undefined) return "—";
    if (!Number.isFinite(valor)) return valor > 0 ? "∞" : "—";

    return Number(valor).toLocaleString("es-DO", {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimales
    });
}

function formatearP(valor) {
    if (valor === null || valor === undefined || !Number.isFinite(valor)) {
        return "no disponible";
    }

    return valor < 0.001 ? "< 0.001" : `= ${formatear(valor, 4)}`;
}

function tarjetaMetrica(titulo, valor, descripcion) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <p class="text-xs uppercase tracking-widest font-black text-slate-500 mb-2">
                ${titulo}
            </p>
            <p class="text-3xl font-black text-slate-950">
                ${valor}
            </p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                ${descripcion}
            </p>
        </article>
    `;
}

function ecuacionModelo(modelo, nombreDependiente) {
    const terminos = modelo.coeficientes.map((fila, indice) => {
        const valor = fila.estimacion;
        const absoluto = formatear(Math.abs(valor), 6);
        const signo = valor < 0 ? "−" : indice === 0 ? "" : "+";
        const variable = fila.termino === "Intercepto"
            ? ""
            : ` · ${escaparHtml(fila.termino)}`;

        return `${signo} ${absoluto}${variable}`.trim();
    });

    return `logit[P(${escaparHtml(nombreDependiente)}=1)] = ${terminos.join(" ")}`;
}

function crearAlertas(modelo) {
    const alertas = [];
    const proporcionMenor = Math.min(
        modelo.distribucionRespuesta.proporcionPositivos,
        1 - modelo.distribucionRespuesta.proporcionPositivos
    );

    if (modelo.convergencia.posibleSeparacion) {
        alertas.push({
            nivel: "alto",
            titulo: "Posible separación completa",
            texto: "La clasificación perfecta y los coeficientes extremos pueden producir estimaciones inestables. Revise los datos y considere métodos penalizados."
        });
    }

    if (
        modelo.calibracion.p !== null &&
        modelo.calibracion.p < (modelo.alfa ?? 0.05)
    ) {
        alertas.push({
            nivel: "medio",
            titulo: "Calibración cuestionable",
            texto: "Hosmer–Lemeshow resulta significativo. Examine el gráfico de calibración, la forma funcional y posibles interacciones."
        });
    }

    if (modelo.diagnosticos.vif.some((fila) => fila.vif >= 10)) {
        alertas.push({
            nivel: "alto",
            titulo: "Multicolinealidad severa",
            texto: "Al menos un predictor presenta VIF de 10 o más. Los coeficientes y sus errores estándar pueden ser inestables."
        });
    } else if (modelo.diagnosticos.vif.some((fila) => fila.vif >= 5)) {
        alertas.push({
            nivel: "medio",
            titulo: "Multicolinealidad moderada",
            texto: "Al menos un predictor presenta VIF entre 5 y 10. Revise redundancia conceptual y correlaciones entre predictores."
        });
    }

    if (modelo.diagnosticos.observacionesInfluyentes.length) {
        alertas.push({
            nivel: "medio",
            titulo: "Observaciones influyentes",
            texto: `Se identificaron ${modelo.diagnosticos.observacionesInfluyentes.length} casos mediante residuos, leverage o distancia de Cook.`
        });
    }

    if (proporcionMenor < 0.20) {
        alertas.push({
            nivel: "medio",
            titulo: "Clases desequilibradas",
            texto: "La categoría menos frecuente representa menos del 20 % de la muestra. La exactitud global puede ser engañosa; priorice sensibilidad, especificidad, F1 y AUC."
        });
    }

    if (modelo.roc.auc < 0.60) {
        alertas.push({
            nivel: "medio",
            titulo: "Discriminación limitada",
            texto: "El AUC es menor que 0.60. El modelo apenas separa las categorías y requiere revisión sustantiva o nuevos predictores."
        });
    }

    if (!alertas.length) {
        return `
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <strong class="block mb-1">Sin alertas automáticas prioritarias</strong>
                Los indicadores revisados no muestran problemas graves, pero la validación del diseño y los supuestos sigue siendo necesaria.
            </div>
        `;
    }

    return `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${alertas.map((alerta) => {
                const clases = alerta.nivel === "alto"
                    ? "border-red-200 bg-red-50 text-red-950"
                    : "border-amber-200 bg-amber-50 text-amber-950";

                return `
                    <article class="rounded-2xl border p-5 ${clases}">
                        <h3 class="font-black mb-2">${alerta.titulo}</h3>
                        <p class="text-sm leading-relaxed">${alerta.texto}</p>
                    </article>
                `;
            }).join("")}
        </div>
    `;
}

function tablaCoeficientes(modelo) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Coeficientes y razones de momios del modelo logístico
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Término</th>
                        <th scope="col" class="px-4 py-3 text-right">B</th>
                        <th scope="col" class="px-4 py-3 text-right">Error est.</th>
                        <th scope="col" class="px-4 py-3 text-right">z</th>
                        <th scope="col" class="px-4 py-3 text-right">p</th>
                        <th scope="col" class="px-4 py-3 text-right">OR</th>
                        <th scope="col" class="px-4 py-3 text-right">IC de OR</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${modelo.coeficientes.map((fila) => `
                        <tr class="${fila.p < (modelo.alfa ?? 0.05) ? "bg-rose-50" : ""}">
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${escaparHtml(fila.termino)}</th>
                            <td class="px-4 py-3 text-right">${formatear(fila.estimacion, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.errorEstandar, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.z, 4)}</td>
                            <td class="px-4 py-3 text-right font-black">${formatearP(fila.p)}</td>
                            <td class="px-4 py-3 text-right font-black">${formatear(fila.oddsRatio, 5)}</td>
                            <td class="px-4 py-3 text-right">[${formatear(fila.intervaloOddsRatio.inferior, 5)}, ${formatear(fila.intervaloOddsRatio.superior, 5)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function tablaAjuste(modelo) {
    const filas = [
        ["Log-verosimilitud", modelo.ajuste.logVerosimilitud],
        ["Deviance", modelo.ajuste.deviance],
        ["AIC", modelo.ajuste.aic],
        ["BIC", modelo.ajuste.bic],
        ["R² de McFadden", modelo.ajuste.r2McFadden],
        ["R² de Cox–Snell", modelo.ajuste.r2CoxSnell],
        ["R² de Nagelkerke", modelo.ajuste.r2Nagelkerke]
    ];

    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Indicadores de ajuste del modelo logístico
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Indicador</th>
                        <th scope="col" class="px-4 py-3 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${filas.map(([nombre, valor]) => `
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${nombre}</th>
                            <td class="px-4 py-3 text-right">${formatear(valor, 6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function tablaClasificacion(modelo) {
    const m = modelo.clasificacion;
    const filas = [
        ["Exactitud", m.exactitud],
        ["Sensibilidad", m.sensibilidad],
        ["Especificidad", m.especificidad],
        ["Precisión positiva", m.precision],
        ["Valor predictivo negativo", m.valorPredictivoNegativo],
        ["F1", m.f1],
        ["Exactitud balanceada", m.exactitudBalanceada]
    ];

    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Métricas de clasificación del modelo logístico
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Métrica</th>
                        <th scope="col" class="px-4 py-3 text-right">Resultado</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${filas.map(([nombre, valor]) => `
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${nombre}</th>
                            <td class="px-4 py-3 text-right">${valor === null ? "—" : `${formatear(valor * 100, 2)} %`}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function tablaVif(modelo) {
    if (!modelo.diagnosticos.vif.length) {
        return `
            <p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El VIF no aplica cuando el modelo contiene un solo predictor.
            </p>
        `;
    }

    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Diagnóstico de multicolinealidad mediante tolerancia y VIF
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Predictor</th>
                        <th scope="col" class="px-4 py-3 text-right">Tolerancia</th>
                        <th scope="col" class="px-4 py-3 text-right">VIF</th>
                        <th scope="col" class="px-4 py-3 text-left">Lectura</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${modelo.diagnosticos.vif.map((fila) => {
                        const lectura = fila.vif >= 10
                            ? "Severa"
                            : fila.vif >= 5
                                ? "Moderada"
                                : "Sin evidencia relevante";

                        return `
                            <tr>
                                <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${escaparHtml(fila.variable)}</th>
                                <td class="px-4 py-3 text-right">${formatear(fila.tolerancia, 4)}</td>
                                <td class="px-4 py-3 text-right font-black">${formatear(fila.vif, 4)}</td>
                                <td class="px-4 py-3">${lectura}</td>
                            </tr>
                        `;
                    }).join("")}
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
                    Diagnósticos de clasificación, residuos e influencia por observación
                </caption>
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-right">Obs.</th>
                        <th scope="col" class="px-4 py-3 text-right">Y</th>
                        <th scope="col" class="px-4 py-3 text-right">Probabilidad</th>
                        <th scope="col" class="px-4 py-3 text-right">Clase</th>
                        <th scope="col" class="px-4 py-3 text-right">Residuo Pearson</th>
                        <th scope="col" class="px-4 py-3 text-right">Residuo deviance</th>
                        <th scope="col" class="px-4 py-3 text-right">Leverage</th>
                        <th scope="col" class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${modelo.datosGrafico.map((fila) => {
                        const alerta =
                            Math.abs(fila.residuoPearson) > 2 ||
                            fila.distanciaCook > 4 / modelo.n ||
                            fila.leverage >
                                2 * (modelo.numeroPredictores + 1) / modelo.n;

                        return `
                            <tr class="${alerta ? "bg-red-50" : ""}">
                                <th scope="row" class="px-4 py-3 text-right font-black">${fila.observacion}</th>
                                <td class="px-4 py-3 text-right">${fila.observado}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.probabilidad, 6)}</td>
                                <td class="px-4 py-3 text-right font-black">${fila.clasePredicha}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.residuoPearson, 4)}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.residuoDeviance, 4)}</td>
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

function formularioPrediccion(modelo) {
    return `
        <form id="formulario-prediccion-logistica" class="rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                Aplicación del modelo
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-rose-950 mb-3">
                Estimar una nueva probabilidad
            </h2>
            <p class="text-rose-900 leading-relaxed mb-6 max-w-4xl">
                Introduzca un valor para cada predictor. Evite extrapolar fuera del rango observado y no interprete la probabilidad como certeza individual.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${modelo.nombresPredictores.map((nombre, indice) => `
                    <label class="block">
                        <span class="block text-sm font-black text-rose-950 mb-2">
                            ${escaparHtml(nombre)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${indice}"
                            class="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                            placeholder="Valor de ${escaparHtml(nombre)}"
                        />
                    </label>
                `).join("")}
            </div>

            <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-xl bg-rose-700 px-7 py-4 text-white font-black hover:bg-rose-800 transition-colors shadow-lg"
            >
                Calcular probabilidad
            </button>

            <div id="resultado-prediccion-logistica" class="mt-5" aria-live="polite"></div>
        </form>
    `;
}

function crearVistaResultados(modelo, metadatos) {
    const significativo =
        modelo.pruebaGlobal.p !== null &&
        modelo.pruebaGlobal.p < (modelo.alfa ?? 0.05);

    return `
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-rose-300 text-xs font-black mb-2">
                        Modelo estimado
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        Regresión logística binaria
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El modelo utiliza ${modelo.n} observaciones, ${modelo.numeroPredictores} predictor${modelo.numeroPredictores === 1 ? "" : "es"} y convergió en ${modelo.convergencia.iteraciones} iteraciones.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${significativo ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/30" : "bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${significativo ? "Modelo global significativo" : `Modelo global no significativo con α = ${(modelo.alfa ?? 0.05).toFixed(3)}`}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${ecuacionModelo(modelo, metadatos.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${tarjetaMetrica("χ² global", formatear(modelo.pruebaGlobal.chiCuadrado, 4), `p ${formatearP(modelo.pruebaGlobal.p)}`)}
            ${tarjetaMetrica("R² Nagelkerke", formatear(modelo.ajuste.r2Nagelkerke, 4), "Pseudo-R² escalado entre 0 y 1")}
            ${tarjetaMetrica("AUC", formatear(modelo.roc.auc, 4), "Capacidad discriminativa global")}
            ${tarjetaMetrica("Exactitud", `${formatear(modelo.clasificacion.exactitud * 100, 2)} %`, `Umbral ${formatear(modelo.clasificacion.umbral, 2)}`)}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${crearAlertas(modelo)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Efectos individuales</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes y razones de probabilidades</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Cada prueba Wald contrasta si el coeficiente difiere de cero. La OR expresa el cambio multiplicativo de las odds por una unidad del predictor, manteniendo constantes los demás.
            </p>
            ${tablaCoeficientes(modelo)}
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Ajuste relativo</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Indicadores del modelo</h2>
                <p class="text-slate-600 leading-relaxed mb-6">AIC y BIC sirven principalmente para comparar modelos estimados sobre la misma muestra y variable dependiente; valores menores son preferibles.</p>
                ${tablaAjuste(modelo)}
            </article>

            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Rendimiento de clasificación</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Métricas con el umbral seleccionado</h2>
                <p class="text-slate-600 leading-relaxed mb-6">Cambiar el umbral modifica sensibilidad, especificidad y los errores de clasificación; debe elegirse según el objetivo y costo de los errores.</p>
                ${tablaClasificacion(modelo)}
            </article>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y VIF</h2>
            <p class="text-slate-600 leading-relaxed mb-6">VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${tablaVif(modelo)}
        </section>

        ${crearPanelGraficosLogistica(
            modelo,
            metadatos.nombreDependiente
        )}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Probabilidades y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo elevado, leverage o distancia de Cook. Nunca elimine casos únicamente por un criterio automático.</p>
            ${tablaDiagnosticos(modelo)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${modelo.interpretacion.map((texto) => `
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${escaparHtml(texto)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${formularioPrediccion(modelo)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                La significación estadística de un coeficiente no implica importancia práctica. Las razones de probabilidades dependen de la escala de cada predictor y no equivalen directamente a cambios de probabilidad. Para fines predictivos, el modelo debe evaluarse con validación externa o partición de datos, especialmente cuando se seleccionaron variables utilizando la misma muestra.
            </p>
        </section>
    `;
}

function construirReporteTexto(modelo, metadatos) {
    const lineas = [
        "REGRESIÓN LOGÍSTICA BINARIA — LABORATORIO KERNEL",
        "",
        `Variable dependiente: ${metadatos.nombreDependiente} (evento = 1)`,
        `Predictores: ${modelo.nombresPredictores.join(", ")}`,
        `n = ${modelo.n}`,
        `χ² global = ${formatear(modelo.pruebaGlobal.chiCuadrado, 4)}`,
        `p del modelo ${formatearP(modelo.pruebaGlobal.p)}`,
        `R² Nagelkerke = ${formatear(modelo.ajuste.r2Nagelkerke, 4)}`,
        `AUC = ${formatear(modelo.roc.auc, 4)}`,
        `Exactitud = ${formatear(modelo.clasificacion.exactitud * 100, 2)} %`,
        `Sensibilidad = ${modelo.clasificacion.sensibilidad === null ? "no calculable" : `${formatear(modelo.clasificacion.sensibilidad * 100, 2)} %`}`,
        `Especificidad = ${modelo.clasificacion.especificidad === null ? "no calculable" : `${formatear(modelo.clasificacion.especificidad * 100, 2)} %`}`,
        "",
        "Coeficientes:"
    ];

    modelo.coeficientes.forEach((fila) => {
        lineas.push(
            `${fila.termino}: B = ${formatear(fila.estimacion, 6)}, OR = ${formatear(fila.oddsRatio, 5)}, z = ${formatear(fila.z, 4)}, p ${formatearP(fila.p)}`
        );
    });

    lineas.push("", "Interpretación:");
    modelo.interpretacion.forEach(
        (texto) => lineas.push(`- ${texto}`)
    );
    lineas.push(
        "",
        "Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."
    );

    return lineas.join("\n");
}

function csvCelda(valor) {
    const texto = String(valor ?? "").replaceAll('"', '""');
    return `"${texto}"`;
}

function exportarCsv(modelo, metadatos) {
    const filas = [
        ["REGRESIÓN LOGÍSTICA BINARIA"],
        ["Variable dependiente", metadatos.nombreDependiente],
        ["Predictores", modelo.nombresPredictores.join(", ")],
        ["n", modelo.n],
        ["Chi-cuadrado global", modelo.pruebaGlobal.chiCuadrado],
        ["p del modelo", modelo.pruebaGlobal.p],
        ["R2 McFadden", modelo.ajuste.r2McFadden],
        ["R2 Cox-Snell", modelo.ajuste.r2CoxSnell],
        ["R2 Nagelkerke", modelo.ajuste.r2Nagelkerke],
        ["AIC", modelo.ajuste.aic],
        ["BIC", modelo.ajuste.bic],
        ["AUC", modelo.roc.auc],
        ["Umbral", modelo.clasificacion.umbral],
        ["Exactitud", modelo.clasificacion.exactitud],
        ["Sensibilidad", modelo.clasificacion.sensibilidad],
        ["Especificidad", modelo.clasificacion.especificidad],
        [],
        [
            "Término",
            "Coeficiente",
            "Error estándar",
            "z",
            "p",
            "Odds ratio",
            "IC OR inferior",
            "IC OR superior"
        ],
        ...modelo.coeficientes.map((fila) => [
            fila.termino,
            fila.estimacion,
            fila.errorEstandar,
            fila.z,
            fila.p,
            fila.oddsRatio,
            fila.intervaloOddsRatio.inferior,
            fila.intervaloOddsRatio.superior
        ]),
        [],
        [
            "Observación",
            "Observado",
            "Probabilidad",
            "Clase predicha",
            "Residuo Pearson",
            "Residuo deviance",
            "Leverage",
            "Distancia de Cook"
        ],
        ...modelo.datosGrafico.map((fila) => [
            fila.observacion,
            fila.observado,
            fila.probabilidad,
            fila.clasePredicha,
            fila.residuoPearson,
            fila.residuoDeviance,
            fila.leverage,
            fila.distanciaCook
        ]),
        [],
        [
            "Diseño y desarrollo",
            "Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"
        ]
    ];
    const contenido = filas
        .map((fila) => fila.map(csvCelda).join(","))
        .join("\n");
    const blob = new Blob(
        ["\ufeff", contenido],
        { type: "text/csv;charset=utf-8" }
    );
    const enlace = document.createElement("a");

    enlace.href = URL.createObjectURL(blob);
    enlace.download = "regresion-logistica-binaria-kernel.csv";
    enlace.click();
    URL.revokeObjectURL(enlace.href);
}

async function copiarReporte(modelo, metadatos, boton) {
    const texto = construirReporteTexto(modelo, metadatos);
    const original = boton.textContent;

    try {
        await navigator.clipboard.writeText(texto);
        boton.textContent = "Reporte copiado";
    } catch {
        const area = document.createElement("textarea");
        area.value = texto;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        boton.textContent = "Reporte copiado";
    }

    window.setTimeout(() => {
        boton.textContent = original;
    }, 1800);
}
