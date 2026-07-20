import {
    analizarDosGrupos
} from "../utils/estadisticaDosGrupos.js";

export function CalculadoraDosGrupos() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

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
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de dos grupos independientes
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Introduzca los datos de ambos grupos y ejecute una prueba t de Student, una prueba t de Welch o una prueba U de Mann–Whitney.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>

                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Los datos no salen del navegador
                    </span>

                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Resultados interpretados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-blue-700 text-xs font-black mb-2">
                    Instrucciones
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Cómo introducir los datos
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            1
                        </span>

                        <p>
                            Pegue una columna de Excel en cada grupo o escriba los valores manualmente.
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            2
                        </span>

                        <p>
                            Separe los valores mediante saltos de línea, espacios o punto y coma.
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            3
                        </span>

                        <p>
                            Puede utilizar punto o coma decimal, por ejemplo: 18.5 o 18,5.
                        </p>
                    </div>
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Importante
                    </h3>

                    <p class="text-sm text-amber-900 leading-relaxed">
                        No utilice la coma para separar observaciones. La coma se interpreta como separador decimal.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Diseño admitido
                    </h3>

                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta calculadora corresponde a dos grupos independientes. Para mediciones pareadas o relacionadas se habilitará un módulo específico.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-dos-grupos"
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
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        >
                            <option value="">
                                Seleccione una prueba
                            </option>

                            <option value="student">
                                t de Student: varianzas iguales
                            </option>

                            <option value="welch">
                                t de Welch: varianzas diferentes
                            </option>

                            <option value="mann-whitney">
                                U de Mann–Whitney
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>

                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        >
                            <option value="0.90">
                                90 %
                            </option>

                            <option value="0.95" selected>
                                95 %
                            </option>

                            <option value="0.99">
                                99 %
                            </option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    <label class="block">
                        <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                            <span>Datos del grupo 1</span>

                            <span
                                id="contador-grupo-1"
                                class="text-xs font-bold text-slate-500"
                            >
                                0 valores
                            </span>
                        </span>

                        <textarea
                            name="grupo1"
                            rows="13"
                            placeholder="18
20
17.5
19
21"
                            class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        ></textarea>
                    </label>

                    <label class="block">
                        <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                            <span>Datos del grupo 2</span>

                            <span
                                id="contador-grupo-2"
                                class="text-xs font-bold text-slate-500"
                            >
                                0 valores
                            </span>
                        </span>

                        <textarea
                            name="grupo2"
                            rows="13"
                            placeholder="15
16.5
17
14
18"
                            class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        ></textarea>
                    </label>
                </div>

                <div
                    id="mensaje-error"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-7 py-4 hover:bg-blue-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-blue-300 text-blue-700 font-black rounded-xl px-6 py-4 hover:bg-blue-50 transition-colors"
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
            id="resultados-dos-grupos"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario =
        section.querySelector(
            "#formulario-dos-grupos"
        );

    const mensajeError =
        section.querySelector(
            "#mensaje-error"
        );

    const resultados =
        section.querySelector(
            "#resultados-dos-grupos"
        );

    const resultados =
    section.querySelector(
        "#resultados-dos-grupos"
    );

const pruebasDisponibles = [
    "student",
    "welch",
    "mann-whitney"
];

const pruebaRecomendada =
    sessionStorage.getItem(
        "kernel-prueba-dos-grupos"
    );

if (
    pruebasDisponibles.includes(
        pruebaRecomendada
    )
) {
    formulario.elements.prueba.value =
        pruebaRecomendada;
}

sessionStorage.removeItem(
    "kernel-prueba-dos-grupos"
);

const campoGrupo1 =
    formulario.elements.grupo1;

const campoGrupo2 =
    formulario.elements.grupo2;

    const contadorGrupo1 =
        section.querySelector(
            "#contador-grupo-1"
        );

    const contadorGrupo2 =
        section.querySelector(
            "#contador-grupo-2"
        );

    const actualizarContadores = () => {
        contadorGrupo1.textContent =
            crearTextoContador(
                contarValores(campoGrupo1.value)
            );

        contadorGrupo2.textContent =
            crearTextoContador(
                contarValores(campoGrupo2.value)
            );
    };

    campoGrupo1.addEventListener(
        "input",
        actualizarContadores
    );

    campoGrupo2.addEventListener(
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

                const grupo1 =
                    convertirTextoEnMuestra(
                        campoGrupo1.value,
                        "El grupo 1"
                    );

                const grupo2 =
                    convertirTextoEnMuestra(
                        campoGrupo2.value,
                        "El grupo 2"
                    );

                const nivelConfianza =
                    Number(
                        formulario.elements
                            .nivelConfianza
                            .value
                    );

                const resultado =
                    analizarDosGrupos({
                        grupo1,
                        grupo2,
                        prueba,
                        nivelConfianza
                    });

                resultados.innerHTML =
                    crearVistaResultados(
                        resultado
                    );

                resultados.classList.remove(
                    "hidden"
                );

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
            const boton =
                event.target.closest(
                    "[data-action]"
                );

            if (!boton) {
                return;
            }

            const accion =
                boton.dataset.action;

            if (
                accion ===
                "volver-laboratorio"
            ) {
                window.location.hash =
                    "/laboratorioKernel";
                return;
            }

            if (
                accion ===
                "cargar-ejemplo"
            ) {
                if (!formulario.elements.prueba.value) {
                formulario.elements.prueba.value =
                "welch";
            }

                campoGrupo1.value =
                    "18\n20\n17.5\n19\n21\n16\n22\n18.5";

                campoGrupo2.value =
                    "14\n15\n17\n13.5\n18\n16\n15.5\n14.5";

                actualizarContadores();
                ocultarError(mensajeError);
                resultados.classList.add(
                    "hidden"
                );

                return;
            }

            if (accion === "limpiar") {
                formulario.reset();

                campoGrupo1.value = "";
                campoGrupo2.value = "";

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

function convertirTextoEnMuestra(
    texto,
    nombre
) {
    const contenido =
        texto.trim();

    if (!contenido) {
        throw new Error(
            `${nombre} no contiene datos.`
        );
    }

    const elementos =
        contenido
            .split(/[\s;]+/)
            .filter(Boolean);

    const valores =
        elementos.map(
            (elemento) =>
                Number(
                    elemento.replace(
                        ",",
                        "."
                    )
                )
        );

    const posicionInvalida =
        valores.findIndex(
            (valor) =>
                !Number.isFinite(valor)
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

function mostrarError(
    elemento,
    mensaje
) {
    elemento.textContent = mensaje;
    elemento.classList.remove("hidden");
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.classList.add("hidden");
}

function formatearNumero(
    valor,
    digitos = 4
) {
    if (!Number.isFinite(valor)) {
        return "—";
    }

    return new Intl.NumberFormat(
        "es-DO",
        {
            minimumFractionDigits: 0,
            maximumFractionDigits:
                digitos
        }
    ).format(valor);
}

function formatearValorP(valorP) {
    if (!Number.isFinite(valorP)) {
        return "—";
    }

    if (valorP < 0.001) {
        return "< 0.001";
    }

    return formatearNumero(
        valorP,
        4
    );
}

function crearVistaResultados(resultado) {
    const significativo =
        resultado.valorP < 0.05;

    const textoConclusion =
        significativo
            ? "Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = 0.05."
            : "No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = 0.05.";

    return `
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>

                <h2 class="text-3xl md:text-4xl font-black">
                    ${resultado.nombre}
                </h2>

                <p class="text-emerald-100 mt-3 font-semibold">
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
                        "n₁",
                        resultado.grupo1.n,
                        "Grupo 1"
                    )}

                    ${crearTarjetaIndicador(
                        "n₂",
                        resultado.grupo2.n,
                        "Grupo 2"
                    )}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${crearResumenGrupo(
                        "Grupo 1",
                        resultado.grupo1
                    )}

                    ${crearResumenGrupo(
                        "Grupo 2",
                        resultado.grupo2
                    )}
                </div>

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
                        La significación estadística no sustituye la valoración del tamaño del efecto, el intervalo de confianza, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `;
}

function crearTarjetaIndicador(
    simbolo,
    valor,
    etiqueta
) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
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

function crearResumenGrupo(
    titulo,
    resumen
) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${titulo}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${crearDato(
                    "Media",
                    formatearNumero(
                        resumen.media
                    )
                )}

                ${crearDato(
                    "Mediana",
                    formatearNumero(
                        resumen.mediana
                    )
                )}

                ${crearDato(
                    "Desviación estándar",
                    formatearNumero(
                        resumen.desviacionEstandar
                    )
                )}

                ${crearDato(
                    "Varianza",
                    formatearNumero(
                        resumen.varianza
                    )
                )}

                ${crearDato(
                    "Mínimo",
                    formatearNumero(
                        resumen.minimo
                    )
                )}

                ${crearDato(
                    "Máximo",
                    formatearNumero(
                        resumen.maximo
                    )
                )}
            </dl>
        </article>
    `;
}

function crearDetallesPrueba(resultado) {
    if (
        resultado.id ===
        "mann-whitney"
    ) {
        return `
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${crearDato(
                        "Suma de rangos, grupo 1",
                        formatearNumero(
                            resultado.sumaRangos1
                        )
                    )}

                    ${crearDato(
                        "Suma de rangos, grupo 2",
                        formatearNumero(
                            resultado.sumaRangos2
                        )
                    )}

                    ${crearDato(
                        "U₁",
                        formatearNumero(
                            resultado.estadistico.u1
                        )
                    )}

                    ${crearDato(
                        "U₂",
                        formatearNumero(
                            resultado.estadistico.u2
                        )
                    )}

                    ${crearDato(
                        "z",
                        formatearNumero(
                            resultado.estadisticoZ
                        )
                    )}

                    ${crearDato(
                        "Delta de Cliff",
                        formatearNumero(
                            resultado.tamanioEfecto
                                .deltaCliff
                        )
                    )}

                    ${crearDato(
                        "Correlación r",
                        formatearNumero(
                            resultado.tamanioEfecto.r
                        )
                    )}
                </dl>
            </article>
        `;
    }

    const intervalo =
        resultado.intervaloConfianza;

    return `
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${crearDato(
                    "Diferencia de medias",
                    formatearNumero(
                        resultado.diferenciaMedias
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
                    `IC ${
                        intervalo.nivel * 100
                    } %: límite inferior`,
                    formatearNumero(
                        intervalo.inferior
                    )
                )}

                ${crearDato(
                    `IC ${
                        intervalo.nivel * 100
                    } %: límite superior`,
                    formatearNumero(
                        intervalo.superior
                    )
                )}

                ${crearDato(
                    "d de Cohen",
                    formatearNumero(
                        resultado.tamanioEfecto
                            .dCohen
                    )
                )}

                ${crearDato(
                    "g de Hedges",
                    formatearNumero(
                        resultado.tamanioEfecto
                            .gHedges
                    )
                )}
            </dl>
        </article>
    `;
}

function crearDato(
    etiqueta,
    valor
) {
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
