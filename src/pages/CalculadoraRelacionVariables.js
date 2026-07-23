import {
    analizarRelacionVariables
} from "../utils/estadisticaRelacionVariables.js";
import {
    prepararExportacionCalculadora
} from "../utils/exportacionesCalculadoras.js";

export function CalculadoraRelacionVariables() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modulo"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a correlación y asociación
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Relación entre variables
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice dos variables emparejadas mediante Pearson, Spearman, Kendall o correlación punto-biserial.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia fila por fila
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Intervalos de confianza
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Visualización integrada
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué coeficiente corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearGuia(
                        "Pearson",
                        "Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes."
                    )}
                    ${crearGuia(
                        "Spearman",
                        "Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad."
                    )}
                    ${crearGuia(
                        "Kendall",
                        "Variables ordinales, muestras pequeñas o presencia importante de valores empatados."
                    )}
                    ${crearGuia(
                        "Punto-biserial",
                        "Una variable dicotómica genuina y una variable cuantitativa."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Correspondencia de las filas
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La primera observación de la variable X debe corresponder a la primera observación de Y, y así sucesivamente.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-relacion-variables"
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
                            <option value="pearson">Correlación de Pearson</option>
                            <option value="spearman">Rho de Spearman</option>
                            <option value="kendall">Tau-b de Kendall</option>
                            <option value="punto-biserial">Correlación punto-biserial</option>
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
                    ${crearTarjetaVariable("x", "Variable X")}
                    ${crearTarjetaVariable("y", "Variable Y")}
                </div>

                <label
                    id="campo-categoria-positiva"
                    class="hidden block mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5"
                >
                    <span class="block text-sm font-black text-violet-900 mb-2">
                        Categoría codificada como 1
                    </span>
                    <input
                        type="text"
                        name="categoriaPositiva"
                        placeholder="Opcional; por ejemplo: Tutoría"
                        class="w-full rounded-xl border border-violet-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                    >
                    <span class="block text-xs text-violet-800 mt-2">
                        Esta categoría determina el signo de la correlación punto-biserial.
                    </span>
                </label>

                <div
                    id="mensaje-error-relacion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
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
            id="resultados-relacion-variables"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector(
        "#formulario-relacion-variables"
    );
    const mensajeError = section.querySelector(
        "#mensaje-error-relacion"
    );
    const resultados = section.querySelector(
        "#resultados-relacion-variables"
    );
    const campoCategoriaPositiva = section.querySelector(
        "#campo-categoria-positiva"
    );

    const pruebaRecomendada = sessionStorage.getItem(
        "kernel-prueba-relacion-variables"
    );

    if (
        [
            "pearson",
            "spearman",
            "kendall",
            "punto-biserial"
        ].includes(pruebaRecomendada)
    ) {
        formulario.elements.prueba.value =
            pruebaRecomendada;
    }

    sessionStorage.removeItem(
        "kernel-prueba-relacion-variables"
    );
    actualizarTipoEntrada(
        formulario,
        campoCategoriaPositiva
    );

    formulario.elements.prueba.addEventListener(
        "change",
        () => {
            actualizarTipoEntrada(
                formulario,
                campoCategoriaPositiva
            );
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
        }
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
                        "Seleccione el coeficiente de relación que desea calcular."
                    );
                }

                const nombreX =
                    formulario.elements.nombreX.value.trim() ||
                    "Variable X";
                const nombreY =
                    formulario.elements.nombreY.value.trim() ||
                    "Variable Y";
                const textoX =
                    formulario.elements.valoresX.value;
                const textoY =
                    formulario.elements.valoresY.value;
                const esPuntoBiserial =
                    prueba === "punto-biserial";
                const x = esPuntoBiserial
                    ? convertirTextoCategorias(
                        textoX,
                        nombreX
                    )
                    : convertirTextoNumerico(
                        textoX,
                        nombreX
                    );
                const y = convertirTextoNumerico(
                    textoY,
                    nombreY
                );
                const categoriaPositiva =
                    formulario.elements
                        .categoriaPositiva.value.trim() ||
                    null;
                const nivelConfianza = Number(
                    formulario.elements
                        .nivelConfianza.value
                );
                const solicitud = {
                    x,
                    y,
                    prueba,
                    nivelConfianza,
                    nombreX,
                    nombreY,
                    categoriaPositiva
                };
                const resultado =
                    analizarRelacionVariables(
                        solicitud
                    );

                resultados.innerHTML =
                    crearVistaResultados(resultado);
                resultados.classList.remove("hidden");
                prepararExportacionCalculadora({
                    contenedor: resultados,
                    nombre: "relacion-entre-variables",
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
                resultados.classList.add("hidden");
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

            if (accion === "volver-modulo") {
                window.location.hash =
                    "/correlacionAsociacion";
                return;
            }

            if (accion === "cargar-ejemplo") {
                cargarEjemplo(formulario);
                actualizarTipoEntrada(
                    formulario,
                    campoCategoriaPositiva
                );
                actualizarContadores(formulario);
                resultados.classList.add("hidden");
                ocultarError(mensajeError);
                return;
            }

            if (accion === "limpiar") {
                formulario.reset();
                formulario.elements.nombreX.value =
                    "Variable X";
                formulario.elements.nombreY.value =
                    "Variable Y";
                actualizarTipoEntrada(
                    formulario,
                    campoCategoriaPositiva
                );
                actualizarContadores(formulario);
                resultados.innerHTML = "";
                resultados.classList.add("hidden");
                ocultarError(mensajeError);
            }
        }
    );

    formulario.addEventListener(
        "input",
        () => actualizarContadores(formulario)
    );

    return section;
}

function crearGuia(titulo, texto) {
    return `
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${titulo}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${texto}
                </p>
            </div>
        </article>
    `;
}

function crearTarjetaVariable(clave, titulo) {
    const mayuscula =
        clave.toUpperCase();

    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <label class="block mb-4">
                <span
                    data-etiqueta-nombre="${clave}"
                    class="block text-sm font-black text-slate-700 mb-2"
                >
                    Nombre de ${titulo}
                </span>
                <input
                    type="text"
                    name="nombre${mayuscula}"
                    value="${titulo}"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                >
            </label>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-700 mb-2">
                    <span data-etiqueta-valores="${clave}">
                        Valores de ${titulo}
                    </span>
                    <span
                        data-contador="${clave}"
                        class="text-xs font-bold text-slate-500"
                    >
                        0 valores
                    </span>
                </span>
                <textarea
                    name="valores${mayuscula}"
                    rows="11"
                    placeholder="12&#10;15&#10;18&#10;20"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                ></textarea>
            </label>
        </article>
    `;
}

function actualizarTipoEntrada(
    formulario,
    campoCategoriaPositiva
) {
    const prueba =
        formulario.elements.prueba.value;
    const esPuntoBiserial =
        prueba === "punto-biserial";
    const etiquetaX = formulario.querySelector(
        '[data-etiqueta-valores="x"]'
    );
    const etiquetaY = formulario.querySelector(
        '[data-etiqueta-valores="y"]'
    );
    const textoX =
        formulario.elements.valoresX;

    campoCategoriaPositiva.classList.toggle(
        "hidden",
        !esPuntoBiserial
    );

    etiquetaX.textContent = esPuntoBiserial
        ? "Categorías dicotómicas"
        : "Valores de Variable X";
    etiquetaY.textContent = esPuntoBiserial
        ? "Valores cuantitativos"
        : "Valores de Variable Y";
    textoX.placeholder = esPuntoBiserial
        ? "Sin tutoría\nTutoría\nSin tutoría\nTutoría"
        : "12\n15\n18\n20";
}

function convertirTextoNumerico(texto, nombre) {
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
    const posicionInvalida =
        valores.findIndex(
            (valor) => !Number.isFinite(valor)
        );

    if (posicionInvalida !== -1) {
        throw new Error(
            `${nombre} contiene un valor no válido: "${elementos[posicionInvalida]}".`
        );
    }

    return valores;
}

function convertirTextoCategorias(texto, nombre) {
    const contenido = texto.trim();

    if (!contenido) {
        throw new Error(
            `${nombre} no contiene categorías.`
        );
    }

    const categorias = contenido
        .split(/\n|;/)
        .map((valor) => valor.trim())
        .filter(Boolean);

    if (categorias.length < 3) {
        throw new Error(
            `${nombre} debe contener al menos tres categorías emparejadas.`
        );
    }

    return categorias;
}

function contarEntradas(texto, esCategorica) {
    if (!texto.trim()) {
        return 0;
    }

    return texto
        .trim()
        .split(
            esCategorica
                ? /\n|;/
                : /[\s;]+/
        )
        .map((valor) => valor.trim())
        .filter(Boolean)
        .length;
}

function actualizarContadores(formulario) {
    const esCategorica =
        formulario.elements.prueba.value ===
        "punto-biserial";
    const cantidadX = contarEntradas(
        formulario.elements.valoresX.value,
        esCategorica
    );
    const cantidadY = contarEntradas(
        formulario.elements.valoresY.value,
        false
    );

    formulario.querySelector(
        '[data-contador="x"]'
    ).textContent =
        `${cantidadX} ${cantidadX === 1 ? "valor" : "valores"}`;
    formulario.querySelector(
        '[data-contador="y"]'
    ).textContent =
        `${cantidadY} ${cantidadY === 1 ? "valor" : "valores"}`;
}

function cargarEjemplo(formulario) {
    const prueba =
        formulario.elements.prueba.value ||
        "pearson";

    formulario.elements.prueba.value = prueba;
    formulario.elements.nivelConfianza.value =
        "0.95";

    if (prueba === "punto-biserial") {
        formulario.elements.nombreX.value =
            "Participación en tutoría";
        formulario.elements.nombreY.value =
            "Calificación final";
        formulario.elements.valoresX.value =
            "Sin tutoría\nSin tutoría\nTutoría\nSin tutoría\nTutoría\nTutoría\nSin tutoría\nTutoría\nSin tutoría\nTutoría\nTutoría\nSin tutoría";
        formulario.elements.valoresY.value =
            "62\n68\n78\n65\n84\n80\n70\n88\n66\n82\n86\n69";
        formulario.elements.categoriaPositiva.value =
            "Tutoría";
        return;
    }

    formulario.elements.nombreX.value =
        prueba === "pearson"
            ? "Horas de estudio"
            : "Nivel de participación";
    formulario.elements.nombreY.value =
        prueba === "pearson"
            ? "Calificación"
            : "Nivel de logro";

    if (prueba === "pearson") {
        formulario.elements.valoresX.value =
            "2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13";
        formulario.elements.valoresY.value =
            "55\n61\n60\n68\n72\n74\n79\n83\n82\n89\n93\n96";
        return;
    }

    formulario.elements.valoresX.value =
        "1\n2\n2\n3\n3\n4\n4\n5\n5\n5\n4\n3";
    formulario.elements.valoresY.value =
        "2\n1\n2\n3\n4\n3\n5\n5\n4\n5\n4\n3";
}

function formatearNumero(valor, digitos = 4) {
    if (!Number.isFinite(valor)) {
        return valor === Infinity
            ? "∞"
            : valor === -Infinity
                ? "−∞"
                : "—";
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

function escaparHTML(valor) {
    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function crearVistaResultados(resultado) {
    const confianza = Math.round(
        resultado.nivelConfianza * 100
    );
    const significativo =
        resultado.significativo;
    const conclusion = significativo
        ? `Se observa una relación estadísticamente significativa al nivel α = ${resultado.alfa.toFixed(2)}.`
        : `No se observa una relación estadísticamente significativa al nivel α = ${resultado.alfa.toFixed(2)}.`;

    return `
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${escaparHTML(resultado.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${escaparHTML(resultado.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${crearIndicador(
                        resultado.coeficiente.simbolo,
                        formatearNumero(
                            resultado.coeficiente.valor
                        ),
                        "Coeficiente"
                    )}
                    ${crearIndicador(
                        "p",
                        formatearValorP(
                            resultado.valorP
                        ),
                        "Valor p bilateral"
                    )}
                    ${crearIndicador(
                        "n",
                        resultado.n,
                        "Pares completos"
                    )}
                    ${crearIndicador(
                        resultado.estadistico.simbolo,
                        formatearNumero(
                            resultado.estadistico.valor
                        ),
                        resultado.gradosLibertad === null
                            ? "Estadístico inferencial"
                            : `gl = ${resultado.gradosLibertad}`
                    )}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${crearResumenRelacion(resultado)}
                    ${crearIntervalo(resultado)}
                </div>

                ${crearGrafico(resultado)}
                ${crearDescriptivos(resultado)}
                ${crearDetallesEspecificos(resultado)}
                ${crearDiagnosticos(resultado)}

                <article class="mt-6 rounded-2xl border ${
                    significativo
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-slate-200 bg-slate-50"
                } p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${conclusion} La relación es ${resultado.tamanioEfecto.direccion.toLowerCase()} y su magnitud orientativa es ${resultado.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${confianza} %. Una correlación no demuestra causalidad y debe interpretarse junto con el diseño, el gráfico y la calidad de las mediciones.
                    </p>
                </article>
            </div>
        </section>
    `;
}

function crearIndicador(
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

function crearResumenRelacion(resultado) {
    const rCuadrado =
        resultado.tamanioEfecto.rCuadrado;

    return `
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Magnitud y dirección
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${crearDato(
                    "Coeficiente",
                    resultado.tamanioEfecto.valor
                )}
                ${crearDato(
                    "Magnitud",
                    resultado.tamanioEfecto.magnitud,
                    true
                )}
                ${crearDato(
                    "Dirección",
                    resultado.tamanioEfecto.direccion,
                    true
                )}
                ${
                    Number.isFinite(rCuadrado)
                        ? crearDato(
                            "R² descriptivo",
                            rCuadrado
                        )
                        : ""
                }
            </dl>
        </article>
    `;
}

function crearIntervalo(resultado) {
    const intervalo =
        resultado.intervaloConfianza;

    return `
        <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Intervalo de confianza
            </h3>
            ${
                intervalo?.disponible
                    ? `
                        <dl class="grid grid-cols-2 gap-4">
                            ${crearDato(
                                "Límite inferior",
                                intervalo.inferior
                            )}
                            ${crearDato(
                                "Límite superior",
                                intervalo.superior
                            )}
                        </dl>
                    `
                    : `
                        <p class="text-blue-900 leading-relaxed">
                            El intervalo no está disponible para este tamaño muestral.
                        </p>
                    `
            }
            <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                ${escaparHTML(
                    intervalo?.metodo || ""
                )}
            </p>
        </article>
    `;
}

function crearDato(
    etiqueta,
    valor,
    esTexto = false
) {
    return `
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${etiqueta}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${
                    esTexto
                        ? escaparHTML(valor)
                        : formatearNumero(valor)
                }
            </dd>
        </div>
    `;
}

function crearDescriptivos(resultado) {
    if (resultado.id === "punto-biserial") {
        const grupo0 =
            resultado.grupos.categoriaCero;
        const grupo1 =
            resultado.grupos.categoriaUno;

        return `
            <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <h3 class="text-xl font-black text-slate-900">
                        Descriptivos por categoría
                    </h3>
                </header>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[700px] text-sm">
                        <caption class="sr-only">
                            Estadísticos descriptivos de la variable cuantitativa por categoría
                        </caption>
                        <thead class="bg-slate-100 text-slate-700">
                            <tr>
                                <th scope="col" class="text-left px-5 py-3">Categoría</th>
                                <th scope="col" class="text-right px-5 py-3">n</th>
                                <th scope="col" class="text-right px-5 py-3">Media</th>
                                <th scope="col" class="text-right px-5 py-3">Mediana</th>
                                <th scope="col" class="text-right px-5 py-3">DE</th>
                                <th scope="col" class="text-right px-5 py-3">Mínimo</th>
                                <th scope="col" class="text-right px-5 py-3">Máximo</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            ${crearFilaGrupo(grupo0)}
                            ${crearFilaGrupo(grupo1)}
                        </tbody>
                    </table>
                </div>
            </article>
        `;
    }

    return `
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Descriptivos de las variables
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[700px] text-sm">
                    <caption class="sr-only">
                        Estadísticos descriptivos de las variables analizadas
                    </caption>
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th scope="col" class="text-left px-5 py-3">Variable</th>
                            <th scope="col" class="text-right px-5 py-3">Media</th>
                            <th scope="col" class="text-right px-5 py-3">Mediana</th>
                            <th scope="col" class="text-right px-5 py-3">DE</th>
                            <th scope="col" class="text-right px-5 py-3">Mínimo</th>
                            <th scope="col" class="text-right px-5 py-3">Máximo</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${crearFilaVariable(
                            resultado.variables.x
                        )}
                        ${crearFilaVariable(
                            resultado.variables.y
                        )}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}

function crearFilaVariable(variable) {
    return `
        <tr>
            <th scope="row" class="px-5 py-3 text-left font-bold text-slate-900">
                ${escaparHTML(variable.nombre)}
            </th>
            <td class="px-5 py-3 text-right">${formatearNumero(variable.media)}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(variable.mediana)}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(variable.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(variable.minimo)}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(variable.maximo)}</td>
        </tr>
    `;
}

function crearFilaGrupo(grupo) {
    return `
        <tr>
            <th scope="row" class="px-5 py-3 text-left font-bold text-slate-900">
                ${escaparHTML(grupo.categoria)}
            </th>
            <td class="px-5 py-3 text-right">${grupo.n}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(grupo.media)}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(grupo.mediana)}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(grupo.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(grupo.minimo)}</td>
            <td class="px-5 py-3 text-right">${formatearNumero(grupo.maximo)}</td>
        </tr>
    `;
}

function crearDetallesEspecificos(resultado) {
    if (resultado.id === "pearson") {
        return `
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Detalles de Pearson
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${crearDato(
                        "Covarianza",
                        resultado.detalles.covarianza
                    )}
                    ${crearDato(
                        "R²",
                        resultado.tamanioEfecto.rCuadrado
                    )}
                    ${crearDato(
                        "Grados de libertad",
                        resultado.gradosLibertad
                    )}
                </dl>
            </article>
        `;
    }

    if (resultado.id === "spearman") {
        return `
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Rangos y empates
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${crearDato(
                        "Valores empatados en X",
                        resultado.empates
                            .cantidadValoresEmpatadosX
                    )}
                    ${crearDato(
                        "Valores empatados en Y",
                        resultado.empates
                            .cantidadValoresEmpatadosY
                    )}
                </dl>
            </article>
        `;
    }

    if (resultado.id === "kendall") {
        return `
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Pares concordantes, discordantes y empates
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${crearDato("Total de pares", resultado.pares.total)}
                    ${crearDato("Concordantes", resultado.pares.concordantes)}
                    ${crearDato("Discordantes", resultado.pares.discordantes)}
                    ${crearDato("Empates solo en X", resultado.pares.empatesSoloX)}
                    ${crearDato("Empates solo en Y", resultado.pares.empatesSoloY)}
                    ${crearDato("Empates en ambas", resultado.pares.empatesAmbas)}
                </dl>
            </article>
        `;
    }

    return `
        <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h3 class="text-xl font-black text-sky-950 mb-4">
                Comparación entre categorías
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${crearDato(
                    "Diferencia de medias",
                    resultado.grupos.diferenciaMedias
                )}
                ${crearDato(
                    "Categoría codificada como 1",
                    resultado.variables.dicotomica
                        .categoriaUno,
                    true
                )}
            </dl>
            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                ${escaparHTML(
                    resultado.detalles
                        .interpretacionDireccion
                )}
            </p>
        </article>
    `;
}

function crearDiagnosticos(resultado) {
    return `
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${resultado.diagnosticos
                    .map(
                        (texto) => `
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${escaparHTML(texto)}</span>
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        </article>
    `;
}

function crearGrafico(resultado) {
    if (resultado.id === "punto-biserial") {
        return crearGraficoPuntoBiserial(resultado);
    }

    return crearDiagramaDispersion(resultado);
}

function crearDiagramaDispersion(resultado) {
    const datos = resultado.datosGrafico;
    const ancho = 760;
    const alto = 380;
    const margen = 55;
    const xs = datos.map((punto) => punto.x);
    const ys = datos.map((punto) => punto.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const rangoX = maxX - minX || 1;
    const rangoY = maxY - minY || 1;
    const escalarX = (valor) =>
        margen +
        (
            (valor - minX) / rangoX
        ) *
        (ancho - 2 * margen);
    const escalarY = (valor) =>
        alto - margen -
        (
            (valor - minY) / rangoY
        ) *
        (alto - 2 * margen);
    const puntos = datos
        .map(
            (punto) => `
                <circle
                    cx="${escalarX(punto.x)}"
                    cy="${escalarY(punto.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${escaparHTML(`${punto.x}, ${punto.y}`)}</title>
                </circle>
            `
        )
        .join("");

    return `
        <article
            data-grafico-exportable="true"
            data-grafico-id="diagrama-dispersion"
            class="mt-6 rounded-2xl border border-slate-200 bg-white p-6"
        >
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Diagrama de dispersión
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${ancho} ${alto}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Diagrama de dispersión de las variables"
                >
                    <line x1="${margen}" y1="${alto - margen}" x2="${ancho - margen}" y2="${alto - margen}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${margen}" y1="${margen}" x2="${margen}" y2="${alto - margen}" class="stroke-slate-400" stroke-width="2"></line>
                    ${puntos}
                    <text x="${ancho / 2}" y="${alto - 12}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${escaparHTML(resultado.variables.x.nombre)}
                    </text>
                    <text x="18" y="${alto / 2}" text-anchor="middle" transform="rotate(-90 18 ${alto / 2})" class="fill-slate-700 text-sm font-bold">
                        ${escaparHTML(resultado.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `;
}

function crearGraficoPuntoBiserial(resultado) {
    const datos = resultado.datosGrafico;
    const categorias =
        resultado.variables.dicotomica
            .categorias;
    const ancho = 760;
    const alto = 380;
    const margen = 60;
    const valores = datos.map(
        (punto) => punto.valor
    );
    const minY = Math.min(...valores);
    const maxY = Math.max(...valores);
    const rangoY = maxY - minY || 1;
    const posiciones = [
        ancho * 0.32,
        ancho * 0.68
    ];
    const escalarY = (valor) =>
        alto - margen -
        (
            (valor - minY) / rangoY
        ) *
        (alto - 2 * margen);
    const puntos = datos
        .map((punto, indice) => {
            const posicion =
                punto.codigo === 0
                    ? posiciones[0]
                    : posiciones[1];
            const desplazamiento =
                ((indice % 5) - 2) * 6;

            return `
                <circle
                    cx="${posicion + desplazamiento}"
                    cy="${escalarY(punto.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${escaparHTML(`${punto.categoria}: ${punto.valor}`)}</title>
                </circle>
            `;
        })
        .join("");

    return `
        <article
            data-grafico-exportable="true"
            data-grafico-id="comparacion-punto-biserial"
            class="mt-6 rounded-2xl border border-slate-200 bg-white p-6"
        >
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Distribución por categoría
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${ancho} ${alto}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Distribución de valores por categoría"
                >
                    <line x1="${margen}" y1="${alto - margen}" x2="${ancho - margen}" y2="${alto - margen}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${margen}" y1="${margen}" x2="${margen}" y2="${alto - margen}" class="stroke-slate-400" stroke-width="2"></line>
                    ${puntos}
                    <text x="${posiciones[0]}" y="${alto - 20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${escaparHTML(categorias[0])}
                    </text>
                    <text x="${posiciones[1]}" y="${alto - 20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${escaparHTML(categorias[1])}
                    </text>
                </svg>
            </div>
        </article>
    `;
}

function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.remove("hidden");
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.classList.add("hidden");
}
