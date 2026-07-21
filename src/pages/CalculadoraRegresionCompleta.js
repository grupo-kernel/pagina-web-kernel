import {
    ajustarRegresion,
    predecirRegresion
} from "../utils/regresionLinealMultiple.js";
import {
    crearPanelGraficosRegresion
} from "../utils/graficosRegresion.js";

export function CalculadoraRegresionCompleta() {
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
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-sky-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">
                    Modelización y predicción
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión lineal y múltiple
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime relaciones lineales mediante mínimos cuadrados, evalúe la significación del modelo, examine sus supuestos y realice nuevas predicciones con una interpretación guiada.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Regresión simple</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Regresión múltiple</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Diagnósticos gráficos</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Predicción</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                    Preparación de datos
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Organice una observación por fila
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearGuia(
                        "Variable dependiente",
                        "La primera columna debe contener la variable que desea explicar o predecir."
                    )}
                    ${crearGuia(
                        "Predictores",
                        "Coloque después una columna por cada variable explicativa. La regresión simple utiliza un predictor y la múltiple utiliza dos o más."
                    )}
                    ${crearGuia(
                        "Encabezados",
                        "La primera fila puede contener nombres de variables. En ausencia de encabezados se asignarán Y, X1, X2, …"
                    )}
                    ${crearGuia(
                        "Separadores",
                        "Separe columnas con coma, punto y coma o tabulación. Para decimales utilice punto."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Antes de interpretar
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La regresión lineal supone relación aproximadamente lineal, independencia, varianza residual estable y ausencia de multicolinealidad severa. Los gráficos y diagnósticos del resultado ayudan a revisar estas condiciones.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Tipo de modelo
                        </span>
                        <select
                            name="tipoModelo"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="simple">Regresión lineal simple</option>
                            <option value="multiple">Regresión lineal múltiple</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-indigo-700 focus:ring-indigo-500"
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
                        rows="14"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        placeholder="Rendimiento, Horas\n55, 1\n61, 2\n64, 3"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Puede pegar datos desde Excel o Google Sheets utilizando tabulaciones.
                    </span>
                </label>

                <div class="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                    <label class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-5 py-3 hover:bg-slate-50 transition-colors cursor-pointer">
                        <input
                            type="file"
                            name="archivoDatos"
                            accept=".csv,.txt,text/csv,text/plain"
                            class="hidden"
                        />
                        Importar CSV o TXT
                    </label>
                    <span data-nombre-archivo class="text-xs text-slate-500"></span>
                </div>

                <div
                    id="mensaje-error-regresion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-indigo-700 text-white font-black rounded-xl px-7 py-4 hover:bg-indigo-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-indigo-300 text-indigo-700 font-black rounded-xl px-6 py-4 hover:bg-indigo-50 transition-colors"
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
            id="resultados-regresion"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector("#formulario-regresion");
    const mensajeError = section.querySelector("#mensaje-error-regresion");
    const resultados = section.querySelector("#resultados-regresion");
    const nombreArchivo = section.querySelector("[data-nombre-archivo]");

    formulario.elements.tipoModelo.addEventListener("change", () => {
        actualizarMarcador(formulario);
        resultados.classList.add("hidden");
        ocultarError(mensajeError);
    });

    formulario.elements.archivoDatos.addEventListener("change", async () => {
        const archivo = formulario.elements.archivoDatos.files?.[0];

        if (!archivo) return;

        try {
            formulario.elements.datos.value = await archivo.text();
            nombreArchivo.textContent = `Archivo cargado: ${archivo.name}`;
            resultados.classList.add("hidden");
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
            const preparado = obtenerSolicitud(formulario);
            ultimoModelo = ajustarRegresion(preparado.solicitud);
            ultimosMetadatos = preparado.metadatos;

            resultados.innerHTML = crearVistaResultados(
                ultimoModelo,
                ultimosMetadatos
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
                    : "No fue posible ajustar el modelo."
            );
        }
    });

    section.addEventListener("submit", (event) => {
        if (event.target.id !== "formulario-prediccion-regresion") {
            return;
        }

        event.preventDefault();

        const salida = section.querySelector(
            "#resultado-prediccion-regresion"
        );

        try {
            const valores = [
                ...event.target.querySelectorAll("[data-predictor]")
            ].map((entrada) => Number(entrada.value));
            const prediccion = predecirRegresion(
                ultimoModelo,
                valores
            );

            salida.innerHTML = `
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Predicción puntual
                    </p>
                    <p class="text-3xl font-black text-emerald-950">
                        ${escaparHtml(ultimosMetadatos.nombreDependiente)} estimado = ${formatear(prediccion, 6)}
                    </p>
                    <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                        Esta es una estimación puntual basada en el modelo ajustado. Su uso fuera del rango observado de los predictores implica extrapolación y requiere especial cautela.
                    </p>
                </div>
            `;
        } catch (error) {
            salida.innerHTML = `
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${escaparHtml(error instanceof Error ? error.message : "No fue posible calcular la predicción.")}
                </div>
            `;
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
            nombreArchivo.textContent = "";
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }

        if (accion === "limpiar") {
            formulario.reset();
            actualizarMarcador(formulario);
            formulario.elements.datos.value = "";
            nombreArchivo.textContent = "";
            ultimoModelo = null;
            ultimosMetadatos = null;
            resultados.innerHTML = "";
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }

        if (!ultimoModelo || !ultimosMetadatos) return;

        if (accion === "exportar-csv") {
            exportarCsv(ultimoModelo, ultimosMetadatos);
            return;
        }

        if (accion === "imprimir") {
            window.print();
            return;
        }

        if (accion === "copiar-reporte") {
            try {
                await navigator.clipboard.writeText(
                    construirReporteTexto(
                        ultimoModelo,
                        ultimosMetadatos
                    )
                );
                boton.textContent = "Reporte copiado";
                window.setTimeout(() => {
                    boton.textContent = "Copiar interpretación";
                }, 1800);
            } catch {
                boton.textContent = "No se pudo copiar";
            }
        }
    });

    actualizarMarcador(formulario);
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

function actualizarMarcador(formulario) {
    const multiple = formulario.elements.tipoModelo.value === "multiple";
    formulario.elements.datos.placeholder = multiple
        ? "Rendimiento, Horas, Asistencia\n65, 2, 70\n72, 4, 78\n80, 6, 85"
        : "Rendimiento, Horas\n65, 2\n72, 4\n80, 6";
}

function separarFila(fila) {
    return fila
        .trim()
        .split(/[,;\t]+/)
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
        .filter((fila) => fila.some((valor) => valor !== ""));

    if (filas.length < 4) {
        throw new Error(
            "Se requieren al menos tres observaciones y, cuando se utilizan encabezados, una fila adicional para sus nombres."
        );
    }

    const primeraNumerica = filas[0].every(
        (valor) => Number.isFinite(Number(valor))
    );
    const nombres = primeraNumerica
        ? filas[0].map(
            (_, indice) => indice === 0 ? "Y" : `X${indice}`
        )
        : filas.shift().map((nombre, indice) =>
            nombre || (indice === 0 ? "Y" : `X${indice}`)
        );
    const numeroColumnas = nombres.length;

    if (numeroColumnas < 2) {
        throw new Error(
            "Se requieren al menos dos columnas: la variable dependiente y un predictor."
        );
    }

    if (!filas.every((fila) => fila.length === numeroColumnas)) {
        throw new Error(
            "Todas las filas deben contener la misma cantidad de columnas."
        );
    }

    const matriz = filas.map((fila, indiceFila) =>
        fila.map((valor, indiceColumna) => {
            const convertido = Number(valor);

            if (!Number.isFinite(convertido)) {
                throw new Error(
                    `El valor de la fila ${indiceFila + 1}, columna ${indiceColumna + 1} no es numérico.`
                );
            }

            return convertido;
        })
    );
    const tipo = formulario.elements.tipoModelo.value;

    if (tipo === "simple" && numeroColumnas !== 2) {
        throw new Error(
            "La regresión lineal simple requiere exactamente dos columnas: Y y X."
        );
    }

    if (tipo === "multiple" && numeroColumnas < 3) {
        throw new Error(
            "La regresión múltiple requiere la variable dependiente y al menos dos predictores."
        );
    }

    return {
        solicitud: {
            y: matriz.map((fila) => fila[0]),
            X: Array.from(
                { length: numeroColumnas - 1 },
                (_, columna) =>
                    matriz.map((fila) => fila[columna + 1])
            ),
            nombresPredictores: nombres.slice(1),
            incluirIntercepto:
                formulario.elements.incluirIntercepto.checked,
            nivelConfianza: Number(
                formulario.elements.nivelConfianza.value
            )
        },
        metadatos: {
            nombreDependiente: nombres[0],
            nombresPredictores: nombres.slice(1),
            nivelConfianza: Number(
                formulario.elements.nivelConfianza.value
            ),
            datosOriginales: matriz
        }
    };
}

function cargarEjemplo(formulario) {
    const multiple = formulario.elements.tipoModelo.value === "multiple";

    formulario.elements.datos.value = multiple
        ? `Rendimiento; Horas; Asistencia
58; 1; 62
63; 2; 68
67; 3; 70
71; 4; 74
74; 5; 79
79; 6; 82
83; 7; 86
86; 8; 90
89; 9; 92
93; 10; 96`
        : `Rendimiento; Horas
55; 1
61; 2
64; 3
70; 4
72; 5
78; 6
81; 7
87; 8
89; 9
94; 10`;
}

function formatear(valor, decimales = 4) {
    if (valor === null || valor === undefined) return "—";
    if (valor === Infinity) return "∞";
    if (valor === -Infinity) return "−∞";
    if (!Number.isFinite(valor)) return "—";

    return new Intl.NumberFormat("es-DO", {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimales
    }).format(valor);
}

function formatearP(valor) {
    if (valor === null || valor === undefined) return "—";
    if (valor < 0.001) return "< 0.001";
    return formatear(valor, 4);
}

function escaparHtml(valor) {
    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function ecuacionModelo(modelo, nombreDependiente) {
    const partes = [];

    modelo.coeficientes.forEach((fila, indice) => {
        const valor = fila.estimacion;
        const magnitud = formatear(Math.abs(valor), 6);

        if (indice === 0 && modelo.incluirIntercepto) {
            partes.push(formatear(valor, 6));
            return;
        }

        const signo = valor >= 0 && partes.length ? "+" : "−";
        const termino = escaparHtml(fila.termino);

        if (!partes.length) {
            partes.push(
                `${valor < 0 ? "−" : ""}${magnitud}·${termino}`
            );
        } else {
            partes.push(`${signo} ${magnitud}·${termino}`);
        }
    });

    return `${escaparHtml(nombreDependiente)}̂ = ${partes.join(" ")}`;
}

function tarjetaMetrica(etiqueta, valor, detalle = "") {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="uppercase tracking-widest text-slate-500 text-[11px] font-black mb-2">
                ${etiqueta}
            </p>
            <p class="text-3xl font-black text-slate-900">
                ${valor}
            </p>
            ${detalle ? `
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                    ${detalle}
                </p>
            ` : ""}
        </article>
    `;
}

function crearAlertas(modelo) {
    const alertas = [];
    const vifMaximo = modelo.diagnosticos.vif.length
        ? Math.max(...modelo.diagnosticos.vif.map((fila) => fila.vif))
        : null;
    const residuosExtremos = modelo.diagnosticos.residuosEstandarizados
        .filter((valor) => Math.abs(valor) > 2).length;
    const dw = modelo.diagnosticos.durbinWatson;

    if (vifMaximo >= 10) {
        alertas.push({
            nivel: "alto",
            texto: "Se detectó multicolinealidad severa porque al menos un VIF es igual o superior a 10."
        });
    } else if (vifMaximo >= 5) {
        alertas.push({
            nivel: "medio",
            texto: "Existe indicio de multicolinealidad moderada porque al menos un VIF es igual o superior a 5."
        });
    }

    if (modelo.diagnosticos.observacionesInfluyentes.length) {
        alertas.push({
            nivel: "medio",
            texto: `Se identificaron ${modelo.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`
        });
    }

    if (residuosExtremos) {
        alertas.push({
            nivel: "medio",
            texto: `${residuosExtremos} observaciones presentan residuos estandarizados con magnitud mayor que 2.`
        });
    }

    if (dw !== null && (dw < 1.5 || dw > 2.5)) {
        alertas.push({
            nivel: "medio",
            texto: "El estadístico de Durbin–Watson se aleja del intervalo orientativo 1.5–2.5; revise la independencia serial de los residuos."
        });
    }

    if (modelo.n < 20) {
        alertas.push({
            nivel: "informativo",
            texto: "El tamaño muestral es reducido; los intervalos, valores p y diagnósticos pueden ser sensibles a observaciones individuales."
        });
    }

    if (!alertas.length) {
        alertas.push({
            nivel: "favorable",
            texto: "Los criterios automáticos no muestran alertas importantes; confirme esta lectura mediante los gráficos y el contexto de la investigación."
        });
    }

    const estilos = {
        alto: "border-red-200 bg-red-50 text-red-950",
        medio: "border-amber-200 bg-amber-50 text-amber-950",
        informativo: "border-sky-200 bg-sky-50 text-sky-950",
        favorable: "border-emerald-200 bg-emerald-50 text-emerald-950"
    };

    return `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${alertas.map((alerta) => `
                <div class="rounded-2xl border p-5 ${estilos[alerta.nivel]}">
                    <p class="font-bold leading-relaxed">
                        ${escaparHtml(alerta.texto)}
                    </p>
                </div>
            `).join("")}
        </div>
    `;
}

function tablaCoeficientes(modelo) {
    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Término</th>
                        <th class="px-4 py-3 text-right">Coeficiente</th>
                        <th class="px-4 py-3 text-right">Error estándar</th>
                        <th class="px-4 py-3 text-right">t</th>
                        <th class="px-4 py-3 text-right">p</th>
                        <th class="px-4 py-3 text-right">IC inferior</th>
                        <th class="px-4 py-3 text-right">IC superior</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${modelo.coeficientes.map((fila) => `
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${escaparHtml(fila.termino)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.estimacion, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.errorEstandar, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.t, 4)}</td>
                            <td class="px-4 py-3 text-right font-black ${fila.p < 0.05 ? "text-emerald-700" : "text-slate-700"}">${formatearP(fila.p)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.intervaloConfianza.inferior, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.intervaloConfianza.superior, 6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function tablaAnova(modelo) {
    const filas = [
        {
            fuente: "Modelo",
            sc: modelo.anova.sumaCuadradosModelo,
            gl: modelo.anova.gradosLibertadModelo,
            mc: modelo.anova.mediaCuadraticaModelo,
            f: modelo.anova.f,
            p: modelo.anova.p
        },
        {
            fuente: "Error",
            sc: modelo.anova.sumaCuadradosError,
            gl: modelo.anova.gradosLibertadError,
            mc: modelo.anova.mediaCuadraticaError,
            f: null,
            p: null
        },
        {
            fuente: "Total",
            sc: modelo.anova.sumaCuadradosTotal,
            gl: modelo.anova.gradosLibertadTotal,
            mc: null,
            f: null,
            p: null
        }
    ];

    return `
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Fuente</th>
                        <th class="px-4 py-3 text-right">Suma de cuadrados</th>
                        <th class="px-4 py-3 text-right">gl</th>
                        <th class="px-4 py-3 text-right">Media cuadrática</th>
                        <th class="px-4 py-3 text-right">F</th>
                        <th class="px-4 py-3 text-right">p</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${filas.map((fila) => `
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${fila.fuente}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.sc, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.gl, 0)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.mc, 6)}</td>
                            <td class="px-4 py-3 text-right">${formatear(fila.f, 4)}</td>
                            <td class="px-4 py-3 text-right font-black">${formatearP(fila.p)}</td>
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
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Predictor</th>
                        <th class="px-4 py-3 text-right">Tolerancia</th>
                        <th class="px-4 py-3 text-right">VIF</th>
                        <th class="px-4 py-3 text-left">Lectura</th>
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
                                <td class="px-4 py-3 font-black text-slate-900">${escaparHtml(fila.variable)}</td>
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
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[440px]">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th class="px-4 py-3 text-right">Obs.</th>
                        <th class="px-4 py-3 text-right">Observado</th>
                        <th class="px-4 py-3 text-right">Predicho</th>
                        <th class="px-4 py-3 text-right">Residuo</th>
                        <th class="px-4 py-3 text-right">Residuo est.</th>
                        <th class="px-4 py-3 text-right">Leverage</th>
                        <th class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${modelo.datosGrafico.map((fila) => {
                        const alerta =
                            Math.abs(fila.residuoEstandarizado) > 2 ||
                            fila.distanciaCook > 4 / modelo.n;

                        return `
                            <tr class="${alerta ? "bg-red-50" : ""}">
                                <td class="px-4 py-3 text-right font-black">${fila.observacion}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.observado, 6)}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.predicho, 6)}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.residuo, 6)}</td>
                                <td class="px-4 py-3 text-right">${formatear(fila.residuoEstandarizado, 4)}</td>
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

function formularioPrediccion(modelo, metadatos) {
    return `
        <form id="formulario-prediccion-regresion" class="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Aplicación del modelo
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-indigo-950 mb-3">
                Realizar una nueva predicción
            </h2>
            <p class="text-indigo-900 leading-relaxed mb-6 max-w-4xl">
                Introduzca un valor para cada predictor. Antes de usar el resultado, compruebe que los valores se encuentren dentro o cerca del rango estudiado.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${modelo.nombresPredictores.map((nombre, indice) => `
                    <label class="block">
                        <span class="block text-sm font-black text-indigo-950 mb-2">
                            ${escaparHtml(nombre)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${indice}"
                            class="w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                            placeholder="Valor de ${escaparHtml(nombre)}"
                        />
                    </label>
                `).join("")}
            </div>

            <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-700 px-7 py-4 text-white font-black hover:bg-indigo-800 transition-colors shadow-lg"
            >
                Calcular predicción
            </button>

            <div id="resultado-prediccion-regresion" class="mt-5" aria-live="polite"></div>
        </form>
    `;
}

function crearVistaResultados(modelo, metadatos) {
    const significativo =
        modelo.anova.p !== null && modelo.anova.p < 0.05;
    const porcentaje = formatear(modelo.ajuste.r2 * 100, 2);

    return `
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-sky-300 text-xs font-black mb-2">
                        Modelo estimado
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        ${modelo.tipoModelo === "regresion-lineal-simple" ? "Regresión lineal simple" : "Regresión lineal múltiple"}
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El modelo utiliza ${modelo.n} observaciones y ${modelo.numeroPredictores} predictor${modelo.numeroPredictores === 1 ? "" : "es"}. Explica ${porcentaje} % de la variabilidad observada.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${significativo ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/30" : "bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${significativo ? "Modelo global significativo" : "Modelo global no significativo al 5 %"}
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
            ${tarjetaMetrica("R²", formatear(modelo.ajuste.r2, 4), "Proporción explicada por el modelo")}
            ${tarjetaMetrica("R² ajustado", formatear(modelo.ajuste.r2Ajustado, 4), "Ajustado por cantidad de predictores")}
            ${tarjetaMetrica("RMSE", formatear(modelo.ajuste.rmse, 4), "Error cuadrático medio en unidades de Y")}
            ${tarjetaMetrica("MAE", formatear(modelo.ajuste.mae, 4), "Error absoluto medio")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${crearAlertas(modelo)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Inferencia individual</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes del modelo</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Cada prueba t contrasta si el coeficiente correspondiente difiere de cero, manteniendo constantes los demás predictores.</p>
            ${tablaCoeficientes(modelo)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Prueba global</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">ANOVA de la regresión</h2>
            <p class="text-slate-600 leading-relaxed mb-6">La prueba F evalúa si el conjunto de predictores mejora la explicación de la variable dependiente frente a un modelo sin capacidad explicativa.</p>
            ${tablaAnova(modelo)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y factor de inflación de la varianza</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Como orientación, VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${tablaVif(modelo)}
        </section>

        <section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            ${tarjetaMetrica("Durbin–Watson", formatear(modelo.diagnosticos.durbinWatson, 4), "Valores cercanos a 2 son compatibles con ausencia de autocorrelación de primer orden")}
            ${tarjetaMetrica("Observaciones influyentes", formatear(modelo.diagnosticos.observacionesInfluyentes.length, 0), "Criterios combinados de Cook, leverage y residuo estandarizado")}
            ${tarjetaMetrica("Error estándar", formatear(modelo.ajuste.errorEstandarEstimacion, 4), "Desviación típica estimada de los residuos")}
        </section>

        ${crearPanelGraficosRegresion(
            modelo,
            metadatos.nombreDependiente
        )}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Valores ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo estandarizado elevado o distancia de Cook superior a 4/n.</p>
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
            ${formularioPrediccion(modelo, metadatos)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Un valor p significativo o un R² elevado no demuestran causalidad ni garantizan utilidad predictiva externa. La validez del modelo depende del diseño de la investigación, la calidad de los datos, el cumplimiento razonable de los supuestos, la ausencia de sesgos importantes y la validación con información independiente cuando el objetivo sea predecir.
            </p>
        </section>
    `;
}

function construirReporteTexto(modelo, metadatos) {
    const lineas = [
        "REGRESIÓN LINEAL Y MÚLTIPLE — LABORATORIO KERNEL",
        "",
        `Variable dependiente: ${metadatos.nombreDependiente}`,
        `Predictores: ${modelo.nombresPredictores.join(", ")}`,
        `n = ${modelo.n}`,
        `R² = ${formatear(modelo.ajuste.r2, 4)}`,
        `R² ajustado = ${formatear(modelo.ajuste.r2Ajustado, 4)}`,
        `F = ${formatear(modelo.anova.f, 4)}`,
        `p del modelo = ${formatearP(modelo.anova.p)}`,
        `RMSE = ${formatear(modelo.ajuste.rmse, 4)}`,
        `Durbin–Watson = ${formatear(modelo.diagnosticos.durbinWatson, 4)}`,
        "",
        "Coeficientes:"
    ];

    modelo.coeficientes.forEach((fila) => {
        lineas.push(
            `${fila.termino}: b = ${formatear(fila.estimacion, 6)}, t = ${formatear(fila.t, 4)}, p ${formatearP(fila.p)}`
        );
    });

    lineas.push("", "Interpretación:");
    modelo.interpretacion.forEach((texto) => lineas.push(`- ${texto}`));
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
        ["REGRESIÓN LINEAL Y MÚLTIPLE"],
        ["Variable dependiente", metadatos.nombreDependiente],
        ["Predictores", modelo.nombresPredictores.join(", ")],
        ["n", modelo.n],
        ["R2", modelo.ajuste.r2],
        ["R2 ajustado", modelo.ajuste.r2Ajustado],
        ["RMSE", modelo.ajuste.rmse],
        ["MAE", modelo.ajuste.mae],
        ["F", modelo.anova.f],
        ["p del modelo", modelo.anova.p],
        ["Durbin-Watson", modelo.diagnosticos.durbinWatson],
        [],
        [
            "Término",
            "Coeficiente",
            "Error estándar",
            "t",
            "p",
            "IC inferior",
            "IC superior"
        ],
        ...modelo.coeficientes.map((fila) => [
            fila.termino,
            fila.estimacion,
            fila.errorEstandar,
            fila.t,
            fila.p,
            fila.intervaloConfianza.inferior,
            fila.intervaloConfianza.superior
        ]),
        [],
        [
            "Observación",
            "Observado",
            "Predicho",
            "Residuo",
            "Residuo estandarizado",
            "Leverage",
            "Distancia de Cook"
        ],
        ...modelo.datosGrafico.map((fila) => [
            fila.observacion,
            fila.observado,
            fila.predicho,
            fila.residuo,
            fila.residuoEstandarizado,
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
        .map((fila) => fila.map(csvCelda).join(";"))
        .join("\r\n");
    const blob = new Blob(
        [`\ufeff${contenido}`],
        { type: "text/csv;charset=utf-8" }
    );
    const enlace = document.createElement("a");

    enlace.href = URL.createObjectURL(blob);
    enlace.download = "regresion-lineal-multiple-kernel.csv";
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
    URL.revokeObjectURL(enlace.href);
}

function mostrarError(contenedor, mensaje) {
    contenedor.textContent = mensaje;
    contenedor.classList.remove("hidden");
    contenedor.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function ocultarError(contenedor) {
    contenedor.textContent = "";
    contenedor.classList.add("hidden");
}
