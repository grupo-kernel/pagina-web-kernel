import {
    analizarMuestrasRelacionadas
} from "../utils/estadisticaDosMuestrasRelacionadas.js";
import {
    prepararExportacionCalculadora
} from "../utils/exportacionesCalculadoras.js";

export function CalculadoraDosMuestrasRelacionadas() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-comparacion"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de dos mediciones relacionadas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice datos antes-después, mediciones repetidas o pares emparejados mediante la t de Student para muestras relacionadas o la prueba de rangos con signo de Wilcoxon.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia por filas
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Resultados interpretados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Instrucciones
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Cómo organizar las parejas
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearPaso(
                        1,
                        "Pegue la primera medición en la columna izquierda y la segunda en la derecha."
                    )}
                    ${crearPaso(
                        2,
                        "Cada fila debe corresponder al mismo participante, unidad o par emparejado."
                    )}
                    ${crearPaso(
                        3,
                        "Las dos columnas deben contener exactamente la misma cantidad de observaciones."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Convención de la diferencia
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Se calcula diferencia = medición 1 − medición 2. Un valor positivo indica que la primera medición es mayor.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Diseño admitido
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta calculadora corresponde a dos mediciones relacionadas. No debe utilizarse para grupos independientes sin emparejamiento.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-muestras-relacionadas"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="student-pareada">
                                t de Student para muestras relacionadas
                            </option>
                            <option value="wilcoxon">
                                Rangos con signo de Wilcoxon
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${crearCampoMedicion(
                        "medicion1",
                        "Medición 1",
                        "contador-medicion-1",
                        "18\n20\n17.5\n19\n21"
                    )}
                    ${crearCampoMedicion(
                        "medicion2",
                        "Medición 2",
                        "contador-medicion-2",
                        "16\n18.5\n16\n17\n19"
                    )}
                </div>

                <div
                    id="mensaje-error-relacionadas"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-violet-700 text-white font-black rounded-xl px-7 py-4 hover:bg-violet-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-violet-300 text-violet-700 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors"
                    >
                        Cargar datos de ejemplo
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
            id="resultados-muestras-relacionadas"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector(
        "#formulario-muestras-relacionadas"
    );
    const mensajeError = section.querySelector(
        "#mensaje-error-relacionadas"
    );
    const resultados = section.querySelector(
        "#resultados-muestras-relacionadas"
    );
    const campoMedicion1 =
        formulario.elements.medicion1;
    const campoMedicion2 =
        formulario.elements.medicion2;
    const contadorMedicion1 = section.querySelector(
        "#contador-medicion-1"
    );
    const contadorMedicion2 = section.querySelector(
        "#contador-medicion-2"
    );

    const pruebaRecomendada =
        sessionStorage.getItem(
            "kernel-prueba-dos-relacionadas"
        );

    if (
        ["student-pareada", "wilcoxon"].includes(
            pruebaRecomendada
        )
    ) {
        formulario.elements.prueba.value =
            pruebaRecomendada;
    }

    sessionStorage.removeItem(
        "kernel-prueba-dos-relacionadas"
    );

    const actualizarContadores = () => {
        contadorMedicion1.textContent =
            crearTextoContador(
                contarValores(
                    campoMedicion1.value
                )
            );
        contadorMedicion2.textContent =
            crearTextoContador(
                contarValores(
                    campoMedicion2.value
                )
            );
    };

    campoMedicion1.addEventListener(
        "input",
        actualizarContadores
    );
    campoMedicion2.addEventListener(
        "input",
        actualizarContadores
    );

    formulario.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();
            ocultarError(mensajeError);

            try {
                const prueba =
                    formulario.elements.prueba.value;

                if (!prueba) {
                    throw new Error(
                        "Seleccione la prueba estadística que desea ejecutar."
                    );
                }

                const medicion1 =
                    convertirTextoEnMuestra(
                        campoMedicion1.value,
                        "La medición 1"
                    );
                const medicion2 =
                    convertirTextoEnMuestra(
                        campoMedicion2.value,
                        "La medición 2"
                    );
                const nivelConfianza = Number(
                    formulario.elements
                        .nivelConfianza.value
                );
                const solicitud = {
                    medicion1,
                    medicion2,
                    prueba,
                    nivelConfianza
                };

                const resultado =
                    analizarMuestrasRelacionadas(
                        solicitud
                    );

                resultados.innerHTML =
                    crearVistaResultados(
                        resultado,
                        nivelConfianza
                    );
                resultados.classList.remove(
                    "hidden"
                );
                prepararExportacionCalculadora({
                    contenedor: resultados,
                    nombre:
                        "comparacion-mediciones-relacionadas",
                    datos: {
                        solicitud,
                        resultado
                    }
                });
                resultados.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } catch (error) {
                resultados.classList.add(
                    "hidden"
                );
                mostrarError(
                    mensajeError,
                    error instanceof Error
                        ? error.message
                        : "No fue posible ejecutar el análisis."
                );
            }
        }
    );

    section.addEventListener(
        "click",
        (event) => {
            const boton = event.target.closest(
                "[data-action]"
            );

            if (!boton) {
                return;
            }

            const accion = boton.dataset.action;

            if (accion === "volver-comparacion") {
                window.location.hash =
                    "/comparacionGrupos";
                return;
            }

            if (accion === "cargar-ejemplo") {
                if (!formulario.elements.prueba.value) {
                    formulario.elements.prueba.value =
                        "student-pareada";
                }

                campoMedicion1.value =
                    "18\n20\n17.5\n19\n21\n16\n22\n18.5";
                campoMedicion2.value =
                    "16\n18.5\n16\n17\n19\n15\n20\n17";
                actualizarContadores();
                ocultarError(mensajeError);
                resultados.classList.add(
                    "hidden"
                );
                return;
            }

            if (accion === "limpiar") {
                formulario.reset();
                campoMedicion1.value = "";
                campoMedicion2.value = "";
                actualizarContadores();
                ocultarError(mensajeError);
                resultados.innerHTML = "";
                resultados.classList.add(
                    "hidden"
                );
            }
        }
    );

    return section;
}

function crearPaso(numero, texto) {
    return `
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${numero}
            </span>
            <p>${texto}</p>
        </div>
    `;
}

function crearCampoMedicion(
    nombre,
    titulo,
    contadorId,
    placeholder
) {
    return `
        <label class="block">
            <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                <span>${titulo}</span>
                <span
                    id="${contadorId}"
                    class="text-xs font-bold text-slate-500"
                >
                    0 valores
                </span>
            </span>
            <textarea
                name="${nombre}"
                rows="13"
                placeholder="${placeholder}"
                class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
            ></textarea>
        </label>
    `;
}

function convertirTextoEnMuestra(texto, nombre) {
    const contenido = texto.trim();

    if (!contenido) {
        throw new Error(
            `${nombre} no contiene datos.`
        );
    }

    const elementos = contenido
        .split(/[\s;]+/)
        .filter(Boolean);
    const valores = elementos.map(
        (elemento) =>
            Number(
                elemento.replace(",", ".")
            )
    );
    const posicionInvalida = valores.findIndex(
        (valor) => !Number.isFinite(valor)
    );

    if (posicionInvalida !== -1) {
        throw new Error(
            `${nombre} contiene un valor no válido: "${
                elementos[posicionInvalida]
            }".`
        );
    }

    if (valores.length < 2) {
        throw new Error(
            `${nombre} debe contener al menos dos observaciones.`
        );
    }

    return valores;
}

function contarValores(texto) {
    if (!texto.trim()) {
        return 0;
    }

    return texto
        .trim()
        .split(/[\s;]+/)
        .filter(Boolean)
        .length;
}

function crearTextoContador(cantidad) {
    return cantidad === 1
        ? "1 valor"
        : `${cantidad} valores`;
}

function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.remove("hidden");
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.classList.add("hidden");
}

function formatearNumero(valor, digitos = 4) {
    if (!Number.isFinite(valor)) {
        return "—";
    }

    return new Intl.NumberFormat("es-DO", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digitos
    }).format(valor);
}

function formatearValorP(valorP) {
    if (!Number.isFinite(valorP)) {
        return "—";
    }

    if (valorP < 0.001) {
        return "< 0.001";
    }

    return formatearNumero(valorP, 4);
}

function crearVistaResultados(
    resultado,
    nivelConfianza = 0.95
) {
    const alfa = 1 - nivelConfianza;
    const significativo =
        resultado.valorP < alfa;
    const alfaTexto = alfa.toFixed(2);
    const confianzaTexto = Math.round(
        nivelConfianza * 100
    );
    const indicadorDireccion =
        resultado.id ===
        "t-student-relacionadas"
            ? resultado.diferenciaMedia
            : resultado.diferencias.mediana;
    const textoDireccion =
        crearTextoDireccion(
            indicadorDireccion
        );
    const textoConclusion = significativo
        ? `Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${alfaTexto}, correspondiente a un nivel de confianza del ${confianzaTexto} %. ${textoDireccion}`
        : `No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${alfaTexto}, correspondiente a un nivel de confianza del ${confianzaTexto} %. ${textoDireccion}`;

    return `
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${resultado.nombre}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${resultado.metodo || resultado.metodoValorP || ""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${crearTarjetaIndicador(
                        resultado.estadistico.simbolo,
                        formatearNumero(
                            resultado.estadistico.valor
                        ),
                        "Estadístico"
                    )}
                    ${crearTarjetaIndicador(
                        "p",
                        formatearValorP(
                            resultado.valorP
                        ),
                        "Valor bilateral"
                    )}
                    ${crearTarjetaIndicador(
                        "n",
                        resultado.nParejas,
                        "Parejas originales"
                    )}
                    ${crearTarjetaIndicador(
                        "Δ",
                        formatearNumero(
                            indicadorDireccion
                        ),
                        resultado.id ===
                        "t-student-relacionadas"
                            ? "Diferencia media"
                            : "Diferencia mediana"
                    )}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${crearResumenMedicion(
                        "Medición 1",
                        resultado.medicion1
                    )}
                    ${crearResumenMedicion(
                        "Medición 2",
                        resultado.medicion2
                    )}
                </div>

                ${crearResumenDiferencias(
                    resultado.diferencias
                )}
                ${crearDetallesPrueba(resultado)}

                <article class="mt-6 rounded-2xl border ${
                    significativo
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-slate-200 bg-slate-50"
                } p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${textoConclusion}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La diferencia se calculó como medición 1 − medición 2. La significación estadística debe interpretarse junto con el intervalo de confianza, el tamaño del efecto, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `;
}

function crearTextoDireccion(valor) {
    if (!Number.isFinite(valor)) {
        return "";
    }

    if (valor > 0) {
        return "La dirección estimada favorece valores mayores en la medición 1.";
    }

    if (valor < 0) {
        return "La dirección estimada favorece valores mayores en la medición 2.";
    }

    return "La diferencia central estimada es igual a cero.";
}

function crearTarjetaIndicador(
    simbolo,
    valor,
    etiqueta
) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${simbolo}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${valor}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${etiqueta}
            </p>
        </article>
    `;
}

function crearResumenMedicion(titulo, resumen) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${titulo}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${crearDato(
                    "Media",
                    formatearNumero(resumen.media)
                )}
                ${crearDato(
                    "Mediana",
                    formatearNumero(resumen.mediana)
                )}
                ${crearDato(
                    "Desviación estándar",
                    formatearNumero(
                        resumen.desviacionEstandar
                    )
                )}
                ${crearDato(
                    "Varianza",
                    formatearNumero(resumen.varianza)
                )}
                ${crearDato(
                    "Mínimo",
                    formatearNumero(resumen.minimo)
                )}
                ${crearDato(
                    "Máximo",
                    formatearNumero(resumen.maximo)
                )}
            </dl>
        </article>
    `;
}

function crearResumenDiferencias(diferencias) {
    return `
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${crearDato(
                    "Media",
                    formatearNumero(diferencias.media)
                )}
                ${crearDato(
                    "Mediana",
                    formatearNumero(diferencias.mediana)
                )}
                ${crearDato(
                    "Desviación estándar",
                    formatearNumero(
                        diferencias.desviacionEstandar
                    )
                )}
                ${crearDato(
                    "Varianza",
                    formatearNumero(diferencias.varianza)
                )}
                ${crearDato(
                    "Mínimo",
                    formatearNumero(diferencias.minimo)
                )}
                ${crearDato(
                    "Máximo",
                    formatearNumero(diferencias.maximo)
                )}
            </dl>
        </article>
    `;
}

function crearDetallesPrueba(resultado) {
    if (
        resultado.id ===
        "wilcoxon-relacionadas"
    ) {
        return `
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${crearDato(
                        "Rangos positivos, W+",
                        formatearNumero(
                            resultado.sumaRangosPositivos
                        )
                    )}
                    ${crearDato(
                        "Rangos negativos, W−",
                        formatearNumero(
                            resultado.sumaRangosNegativos
                        )
                    )}
                    ${crearDato(
                        "Parejas no nulas",
                        resultado.nEfectivo
                    )}
                    ${crearDato(
                        "Diferencias iguales a cero",
                        resultado.cantidadCeros
                    )}
                    ${crearDato(
                        "z aproximado",
                        formatearNumero(
                            resultado.estadisticoZ
                        )
                    )}
                    ${crearDato(
                        "Correlación biserial de rangos",
                        formatearNumero(
                            resultado.tamanioEfecto
                                .correlacionBiserialRangos
                        )
                    )}
                    ${crearDato(
                        "Correlación r",
                        formatearNumero(
                            resultado.tamanioEfecto.r
                        )
                    )}
                    ${crearDato(
                        "Grupos de empates",
                        resultado.cantidadGruposEmpatados
                    )}
                </dl>
            </article>
        `;
    }

    const intervalo = resultado.intervaloConfianza;

    return `
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${crearDato(
                    "Diferencia media",
                    formatearNumero(
                        resultado.diferenciaMedia
                    )
                )}
                ${crearDato(
                    "Error estándar",
                    formatearNumero(
                        resultado.errorEstandar
                    )
                )}
                ${crearDato(
                    "Grados de libertad",
                    formatearNumero(
                        resultado.gradosLibertad
                    )
                )}
                ${crearDato(
                    `IC ${intervalo.nivel * 100} %: límite inferior`,
                    formatearNumero(
                        intervalo.inferior
                    )
                )}
                ${crearDato(
                    `IC ${intervalo.nivel * 100} %: límite superior`,
                    formatearNumero(
                        intervalo.superior
                    )
                )}
                ${crearDato(
                    "d_z de Cohen",
                    formatearNumero(
                        resultado.tamanioEfecto.dZ
                    )
                )}
                ${crearDato(
                    "g_z corregida",
                    formatearNumero(
                        resultado.tamanioEfecto.gZ
                    )
                )}
                ${crearDato(
                    "Correlación entre mediciones",
                    formatearNumero(
                        resultado.tamanioEfecto
                            .correlacionPareada
                    )
                )}
            </dl>
        </article>
    `;
}

function crearDato(etiqueta, valor) {
    return `
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${etiqueta}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${valor}
            </dd>
        </div>
    `;
}
