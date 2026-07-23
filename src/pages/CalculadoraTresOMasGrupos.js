import {
    analizarTresOMasGrupos
} from "../utils/estadisticaTresOMasGrupos.js";
import {
    prepararExportacionCalculadora
} from "../utils/exportacionesCalculadoras.js";

export function CalculadoraTresOMasGrupos() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-comparacion"
                    class="inline-flex items-center gap-2 text-indigo-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="uppercase tracking-[0.20em] text-indigo-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Tres o más grupos independientes
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Compare tres o más grupos mediante ANOVA de un factor, ANOVA de Welch o Kruskal–Wallis, con descriptivos, tamaños del efecto y comparaciones post hoc.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Grupos independientes
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Post hoc integrado
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearGuia(
                        "ANOVA de un factor",
                        "Variable cuantitativa, normalidad aproximada y varianzas homogéneas."
                    )}
                    ${crearGuia(
                        "ANOVA de Welch",
                        "Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes."
                    )}
                    ${crearGuia(
                        "Kruskal–Wallis",
                        "Datos ordinales, distribuciones no normales o presencia importante de valores atípicos."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Diseño admitido
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Cada observación debe pertenecer a un solo grupo. Para mediciones repetidas sobre las mismas personas debe utilizarse otro módulo.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Entrada de datos
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Escriba o pegue los valores separados por espacios, saltos de línea o punto y coma. La coma decimal también es admitida.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-tres-grupos"
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
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="anova-un-factor">ANOVA de un factor</option>
                            <option value="anova-welch">ANOVA de Welch</option>
                            <option value="kruskal-wallis">Kruskal–Wallis</option>
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
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-1">
                            Datos por grupo
                        </p>
                        <h2 class="text-2xl font-black text-slate-900">
                            Introduzca al menos tres grupos
                        </h2>
                    </div>

                    <button
                        type="button"
                        data-action="agregar-grupo"
                        class="inline-flex items-center justify-center rounded-xl border border-indigo-300 text-indigo-700 font-black px-5 py-3 hover:bg-indigo-50 transition-colors"
                    >
                        + Agregar grupo
                    </button>
                </div>

                <div
                    id="contenedor-grupos"
                    class="grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                    ${crearTarjetaGrupo(1)}
                    ${crearTarjetaGrupo(2)}
                    ${crearTarjetaGrupo(3)}
                </div>

                <div
                    id="mensaje-error-tres-grupos"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-indigo-700 text-white font-black rounded-xl px-7 py-4 hover:bg-indigo-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-indigo-300 text-indigo-700 font-black rounded-xl px-6 py-4 hover:bg-indigo-50 transition-colors"
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
            id="resultados-tres-grupos"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector("#formulario-tres-grupos");
    const contenedorGrupos = section.querySelector("#contenedor-grupos");
    const mensajeError = section.querySelector("#mensaje-error-tres-grupos");
    const resultados = section.querySelector("#resultados-tres-grupos");

    let siguienteGrupo = 4;

    const pruebaRecomendada = sessionStorage.getItem(
        "kernel-prueba-tres-grupos"
    );

    if (
        [
            "anova-un-factor",
            "anova-welch",
            "kruskal-wallis"
        ].includes(pruebaRecomendada)
    ) {
        formulario.elements.prueba.value = pruebaRecomendada;
    }

    sessionStorage.removeItem("kernel-prueba-tres-grupos");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        ocultarError(mensajeError);

        try {
            const prueba = formulario.elements.prueba.value;

            if (!prueba) {
                throw new Error(
                    "Seleccione la prueba estadística que desea ejecutar."
                );
            }

            const grupos = obtenerGrupos(contenedorGrupos);
            const nivelConfianza = Number(
                formulario.elements.nivelConfianza.value
            );
            const solicitud = {
                grupos,
                prueba,
                nivelConfianza
            };

            const resultado =
                analizarTresOMasGrupos(solicitud);

            resultados.innerHTML = crearVistaResultados(resultado);
            resultados.classList.remove("hidden");
            prepararExportacionCalculadora({
                contenedor: resultados,
                nombre: "comparacion-tres-o-mas-grupos",
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
    });

    section.addEventListener("input", (event) => {
        if (event.target.matches("textarea[data-valores-grupo]")) {
            actualizarContadorGrupo(
                event.target.closest("[data-grupo]")
            );
        }
    });

    section.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-action]");

        if (!boton) {
            return;
        }

        const accion = boton.dataset.action;

        if (accion === "volver-comparacion") {
            window.location.hash = "/comparacionGrupos";
            return;
        }

        if (accion === "agregar-grupo") {
            contenedorGrupos.insertAdjacentHTML(
                "beforeend",
                crearTarjetaGrupo(siguienteGrupo)
            );
            siguienteGrupo += 1;
            ocultarError(mensajeError);
            return;
        }

        if (accion === "eliminar-grupo") {
            const tarjetas = contenedorGrupos.querySelectorAll(
                "[data-grupo]"
            );

            if (tarjetas.length <= 3) {
                mostrarError(
                    mensajeError,
                    "El análisis requiere al menos tres grupos."
                );
                return;
            }

            boton.closest("[data-grupo]")?.remove();
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }

        if (accion === "cargar-ejemplo") {
            cargarEjemplo(
                formulario,
                contenedorGrupos
            );
            siguienteGrupo = 4;
            ocultarError(mensajeError);
            resultados.classList.add("hidden");
            return;
        }

        if (accion === "limpiar") {
            formulario.reset();
            contenedorGrupos.innerHTML = `
                ${crearTarjetaGrupo(1)}
                ${crearTarjetaGrupo(2)}
                ${crearTarjetaGrupo(3)}
            `;
            siguienteGrupo = 4;
            resultados.innerHTML = "";
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
        }
    });

    return section;
}

function crearGuia(titulo, descripcion) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${titulo}
            </h3>
            <p class="text-sm leading-relaxed">
                ${descripcion}
            </p>
        </article>
    `;
}

function crearTarjetaGrupo(indice) {
    return `
        <article
            data-grupo
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <label class="min-w-0 flex-1">
                    <span class="block text-xs uppercase tracking-widest font-black text-indigo-700 mb-2">
                        Nombre del grupo
                    </span>
                    <input
                        type="text"
                        data-nombre-grupo
                        value="Grupo ${indice}"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                    >
                </label>

                <button
                    type="button"
                    data-action="eliminar-grupo"
                    class="shrink-0 mt-6 rounded-xl border border-red-200 bg-white text-red-700 font-black px-4 py-3 hover:bg-red-50 transition-colors"
                    aria-label="Eliminar grupo"
                    title="Eliminar grupo"
                >
                    ×
                </button>
            </div>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                    <span>Valores</span>
                    <span
                        data-contador-grupo
                        class="text-xs font-bold text-slate-500"
                    >
                        0 valores
                    </span>
                </span>
                <textarea
                    data-valores-grupo
                    rows="9"
                    placeholder="72\n75\n78\n74"
                    class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                ></textarea>
            </label>
        </article>
    `;
}

function obtenerGrupos(contenedor) {
    return [...contenedor.querySelectorAll("[data-grupo]")].map(
        (tarjeta, indice) => {
            const nombre = tarjeta
                .querySelector("[data-nombre-grupo]")
                .value.trim();

            if (!nombre) {
                throw new Error(
                    `El grupo ${indice + 1} debe tener un nombre.`
                );
            }

            const texto = tarjeta
                .querySelector("[data-valores-grupo]")
                .value;

            return {
                nombre,
                valores: convertirTextoEnMuestra(
                    texto,
                    nombre
                )
            };
        }
    );
}

function convertirTextoEnMuestra(texto, nombre) {
    const contenido = texto.trim();

    if (!contenido) {
        throw new Error(`${nombre} no contiene datos.`);
    }

    const elementos = contenido
        .split(/[\s;]+/)
        .filter(Boolean);

    const valores = elementos.map((elemento) =>
        Number(elemento.replace(",", "."))
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

function actualizarContadorGrupo(tarjeta) {
    if (!tarjeta) {
        return;
    }

    const campo = tarjeta.querySelector(
        "[data-valores-grupo]"
    );
    const contador = tarjeta.querySelector(
        "[data-contador-grupo]"
    );
    const cantidad = contarValores(campo.value);

    contador.textContent = cantidad === 1
        ? "1 valor"
        : `${cantidad} valores`;
}

function cargarEjemplo(formulario, contenedor) {
    contenedor.innerHTML = `
        ${crearTarjetaGrupo(1)}
        ${crearTarjetaGrupo(2)}
        ${crearTarjetaGrupo(3)}
    `;

    const ejemplos = [
        {
            nombre: "Método tradicional",
            valores: "72\n75\n78\n74\n76\n73\n77\n75"
        },
        {
            nombre: "Aprendizaje colaborativo",
            valores: "80\n82\n79\n84\n81\n83\n78\n82"
        },
        {
            nombre: "Aula invertida",
            valores: "88\n85\n90\n87\n89\n86\n91\n88"
        }
    ];

    [...contenedor.querySelectorAll("[data-grupo]")]
        .forEach((tarjeta, indice) => {
            tarjeta.querySelector(
                "[data-nombre-grupo]"
            ).value = ejemplos[indice].nombre;

            tarjeta.querySelector(
                "[data-valores-grupo]"
            ).value = ejemplos[indice].valores;

            actualizarContadorGrupo(tarjeta);
        });

    if (!formulario.elements.prueba.value) {
        formulario.elements.prueba.value =
            "anova-un-factor";
    }
}

function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.remove("hidden");
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.classList.add("hidden");
}

function escaparHTML(valor) {
    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatearNumero(valor, digitos = 4) {
    if (valor === Infinity) {
        return "∞";
    }

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

function crearVistaResultados(resultado) {
    const alfaTexto = resultado.alfa.toFixed(2);
    const confianzaTexto = Math.round(
        resultado.nivelConfianza * 100
    );

    const conclusion = resultado.significativo
        ? `Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${alfaTexto}, correspondiente a un nivel de confianza del ${confianzaTexto} %.`
        : `No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${alfaTexto}, correspondiente a un nivel de confianza del ${confianzaTexto} %.`;

    return `
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${escaparHTML(resultado.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${escaparHTML(resultado.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${crearIndicador(
                        resultado.estadistico.simbolo,
                        formatearNumero(
                            resultado.estadistico.valor
                        ),
                        "Estadístico global"
                    )}
                    ${crearIndicador(
                        "p",
                        formatearValorP(resultado.valorP),
                        "Valor de significación"
                    )}
                    ${crearIndicador(
                        "k",
                        resultado.numeroGrupos,
                        "Número de grupos"
                    )}
                    ${crearIndicador(
                        "N",
                        resultado.nTotal,
                        "Tamaño total"
                    )}
                </div>

                ${crearTablaDescriptivos(resultado)}
                ${crearDetallesGlobales(resultado)}
                ${crearTamanioEfecto(resultado)}
                ${crearTablaPostHoc(resultado)}

                <article class="mt-6 rounded-2xl border ${
                    resultado.significativo
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-slate-200 bg-slate-50"
                } p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${conclusion}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La prueba global indica si existe al menos una diferencia, pero no identifica por sí sola cuáles grupos difieren. Las comparaciones post hoc deben interpretarse junto con sus valores p ajustados, intervalos de confianza, tamaños del efecto y relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `;
}

function crearIndicador(simbolo, valor, etiqueta) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${escaparHTML(simbolo)}
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

function crearTablaDescriptivos(resultado) {
    const esKruskal = resultado.id === "kruskal-wallis";

    return `
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div class="px-6 py-5 border-b border-slate-200">
                <h3 class="text-xl font-black text-slate-900">
                    Estadísticos descriptivos por grupo
                </h3>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full min-w-[850px] text-sm">
                    <caption class="sr-only">
                        Estadísticos descriptivos de cada grupo independiente
                    </caption>
                    <thead class="bg-slate-50 text-slate-700">
                        <tr>
                            <th scope="col" class="text-left px-5 py-4 font-black">Grupo</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">n</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">Media</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">Mediana</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">DE</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">Varianza</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">Mín.</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">Máx.</th>
                            ${
                                esKruskal
                                    ? '<th scope="col" class="text-right px-4 py-4 font-black">Rango medio</th>'
                                    : ""
                            }
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${resultado.grupos
                            .map(
                                (grupo) => `
                                    <tr>
                                        <th scope="row" class="px-5 py-4 text-left font-bold text-slate-900">
                                            ${escaparHTML(grupo.nombre)}
                                        </th>
                                        <td class="px-4 py-4 text-right">${grupo.n}</td>
                                        <td class="px-4 py-4 text-right">${formatearNumero(grupo.media)}</td>
                                        <td class="px-4 py-4 text-right">${formatearNumero(grupo.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${formatearNumero(grupo.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${formatearNumero(grupo.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${formatearNumero(grupo.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${formatearNumero(grupo.maximo)}</td>
                                        ${
                                            esKruskal
                                                ? `<td class="px-4 py-4 text-right">${formatearNumero(grupo.rangoMedio)}</td>`
                                                : ""
                                        }
                                    </tr>
                                `
                            )
                            .join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}

function crearDetallesGlobales(resultado) {
    if (resultado.id === "anova-un-factor") {
        const tabla = resultado.tablaAnova;

        return `
            <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 overflow-hidden">
                <div class="px-6 py-5 border-b border-blue-200">
                    <h3 class="text-xl font-black text-blue-950">
                        Tabla ANOVA
                    </h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[650px] text-sm">
                        <caption class="sr-only">
                            Descomposición de la varianza del ANOVA de un factor
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col" class="text-left px-5 py-4 font-black">Fuente</th>
                                <th scope="col" class="text-right px-4 py-4 font-black">SC</th>
                                <th scope="col" class="text-right px-4 py-4 font-black">gl</th>
                                <th scope="col" class="text-right px-4 py-4 font-black">CM</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-blue-100">
                            ${crearFilaAnova("Entre grupos", tabla.entreGrupos)}
                            ${crearFilaAnova("Dentro de grupos", tabla.dentroGrupos)}
                            ${crearFilaAnova("Total", tabla.total)}
                        </tbody>
                    </table>
                </div>
            </article>
        `;
    }

    if (resultado.id === "anova-welch") {
        return `
            <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Ajuste de Welch
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${crearDato(
                        "gl del numerador",
                        formatearNumero(
                            resultado.gradosLibertad.numerador
                        )
                    )}
                    ${crearDato(
                        "gl del denominador",
                        formatearNumero(
                            resultado.gradosLibertad.denominador
                        )
                    )}
                    ${crearDato(
                        "Media ponderada",
                        formatearNumero(
                            resultado.mediaPonderada
                        )
                    )}
                    ${crearDato(
                        "Factor de corrección",
                        formatearNumero(
                            resultado.componentesWelch
                                .denominadorCorreccion
                        )
                    )}
                </dl>
            </article>
        `;
    }

    return `
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${crearDato(
                    "Grados de libertad",
                    formatearNumero(
                        resultado.gradosLibertad.valor
                    )
                )}
                ${crearDato(
                    "H sin corrección",
                    formatearNumero(
                        resultado.estadistico.sinCorreccion
                    )
                )}
                ${crearDato(
                    "Factor por empates",
                    formatearNumero(
                        resultado.empates.factorCorreccion
                    )
                )}
                ${crearDato(
                    "Grupos de valores empatados",
                    resultado.empates.cantidadGruposEmpatados
                )}
            </dl>
        </article>
    `;
}

function crearFilaAnova(nombre, fila) {
    return `
        <tr>
            <th scope="row" class="px-5 py-4 text-left font-bold text-slate-900">
                ${nombre}
            </th>
            <td class="px-4 py-4 text-right">
                ${formatearNumero(fila.sumaCuadrados)}
            </td>
            <td class="px-4 py-4 text-right">
                ${formatearNumero(fila.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right">
                ${formatearNumero(fila.cuadradoMedio)}
            </td>
        </tr>
    `;
}

function crearTamanioEfecto(resultado) {
    let datos;

    if (resultado.id === "anova-un-factor") {
        datos = [
            ["Eta cuadrado, η²", resultado.tamanioEfecto.etaCuadrado],
            ["Omega cuadrado, ω²", resultado.tamanioEfecto.omegaCuadrado]
        ];
    } else if (resultado.id === "anova-welch") {
        datos = [
            [
                "Omega cuadrado aproximado",
                resultado.tamanioEfecto
                    .omegaCuadradoAproximado
            ]
        ];
    } else {
        datos = [
            [
                "Épsilon cuadrado, ε²",
                resultado.tamanioEfecto.epsilonCuadrado
            ]
        ];
    }

    return `
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${datos
                    .map(([nombre, valor]) =>
                        crearDato(
                            nombre,
                            formatearNumero(valor)
                        )
                    )
                    .join("")}
                ${crearDato(
                    "Magnitud orientativa",
                    escaparHTML(
                        resultado.tamanioEfecto
                            .interpretacion
                    )
                )}
            </dl>
            ${
                resultado.tamanioEfecto.nota
                    ? `<p class="text-sm text-amber-900 mt-4">${escaparHTML(resultado.tamanioEfecto.nota)}</p>`
                    : ""
            }
        </article>
    `;
}

function crearTablaPostHoc(resultado) {
    const postHoc = resultado.postHoc;

    if (!postHoc?.comparaciones?.length) {
        return "";
    }

    return `
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${escaparHTML(postHoc.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${escaparHTML(postHoc.metodo)}
                </p>
                <p class="text-sm font-bold mt-3 ${
                    postHoc.recomendado
                        ? "text-emerald-800"
                        : "text-slate-600"
                }">
                    ${
                        postHoc.recomendado
                            ? "La prueba global fue significativa; estas comparaciones ayudan a localizar las diferencias."
                            : "La prueba global no fue significativa; las comparaciones se muestran con fines descriptivos y deben interpretarse con cautela."
                    }
                </p>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full min-w-[980px] text-sm">
                    <caption class="sr-only">
                        Comparaciones múltiples entre grupos con valores p ajustados
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col" class="text-left px-5 py-4 font-black">Comparación</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">Diferencia</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">Estadístico</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">gl</th>
                            <th scope="col" class="text-right px-4 py-4 font-black">p ajustado</th>
                            <th scope="col" class="text-left px-4 py-4 font-black">IC</th>
                            <th scope="col" class="text-center px-4 py-4 font-black">Resultado</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-fuchsia-100">
                        ${postHoc.comparaciones
                            .map(crearFilaPostHoc)
                            .join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}

function crearFilaPostHoc(comparacion) {
    const diferencia =
        comparacion.diferenciaMedias ??
        comparacion.diferenciaRangos;

    const estadistico =
        comparacion.estadisticoQ ??
        comparacion.estadisticoZ;

    const valorP =
        comparacion.valorPAjustado ??
        comparacion.valorP;

    const intervalo = comparacion.intervaloConfianza
        ? `${formatearNumero(comparacion.intervaloConfianza.inferior)} a ${formatearNumero(comparacion.intervaloConfianza.superior)}`
        : "—";

    return `
        <tr>
            <th scope="row" class="px-5 py-4 text-left font-bold text-slate-900">
                ${escaparHTML(comparacion.grupo1)} vs. ${escaparHTML(comparacion.grupo2)}
            </th>
            <td class="px-4 py-4 text-right">
                ${formatearNumero(diferencia)}
            </td>
            <td class="px-4 py-4 text-right">
                ${formatearNumero(estadistico)}
            </td>
            <td class="px-4 py-4 text-right">
                ${formatearNumero(comparacion.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${formatearValorP(valorP)}
            </td>
            <td class="px-4 py-4">
                ${intervalo}
            </td>
            <td class="px-4 py-4 text-center">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${
                    comparacion.significativo
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-200 text-slate-700"
                }">
                    ${
                        comparacion.significativo
                            ? "Significativa"
                            : "No significativa"
                    }
                </span>
            </td>
        </tr>
    `;
}

function crearDato(etiqueta, valor) {
    return `
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${etiqueta}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${valor}
            </dd>
        </div>
    `;
}
