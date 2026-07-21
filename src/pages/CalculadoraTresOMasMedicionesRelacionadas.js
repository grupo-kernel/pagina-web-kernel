import {
    analizarTresOMasMedicionesRelacionadas
} from "../utils/estadisticaTresOMasMedicionesRelacionadas.js";

export function CalculadoraTresOMasMedicionesRelacionadas() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-fuchsia-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-violet-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-comparacion"
                    class="inline-flex items-center gap-2 text-fuchsia-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="uppercase tracking-[0.20em] text-fuchsia-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Tres o más mediciones relacionadas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Compare tres o más momentos o condiciones evaluados sobre las mismas personas mediante ANOVA de medidas repetidas o la prueba de Friedman.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia por filas
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correcciones de esfericidad
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Post hoc con Holm
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearGuia(
                        "ANOVA de medidas repetidas",
                        "Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones."
                    )}
                    ${crearGuia(
                        "Prueba de Friedman",
                        "Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Orden de los participantes
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Cada fila debe corresponder al mismo participante en todas las mediciones. No ordene las columnas de forma independiente.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Datos completos
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta versión requiere la misma cantidad de observaciones en todas las mediciones. Los datos incompletos deben analizarse mediante modelos mixtos u otros procedimientos adecuados.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-mediciones-relacionadas"
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
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="anova-medidas-repetidas">
                                ANOVA de medidas repetidas
                            </option>
                            <option value="friedman">
                                Prueba de Friedman
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900">
                            Mediciones o condiciones
                        </h2>
                        <p class="text-sm text-slate-500 mt-1">
                            Introduzca al menos tres columnas relacionadas.
                        </p>
                    </div>

                    <button
                        type="button"
                        data-action="agregar-medicion"
                        class="inline-flex items-center justify-center rounded-xl border border-fuchsia-300 text-fuchsia-700 font-black px-5 py-3 hover:bg-fuchsia-50 transition-colors"
                    >
                        + Agregar medición
                    </button>
                </div>

                <div
                    id="contenedor-mediciones"
                    class="grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                    ${crearTarjetaMedicion(1)}
                    ${crearTarjetaMedicion(2)}
                    ${crearTarjetaMedicion(3)}
                </div>

                <div
                    id="mensaje-error-mediciones-relacionadas"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-fuchsia-700 text-white font-black rounded-xl px-7 py-4 hover:bg-fuchsia-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-fuchsia-300 text-fuchsia-700 font-black rounded-xl px-6 py-4 hover:bg-fuchsia-50 transition-colors"
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
            id="resultados-mediciones-relacionadas"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector(
        "#formulario-mediciones-relacionadas"
    );
    const contenedorMediciones = section.querySelector(
        "#contenedor-mediciones"
    );
    const mensajeError = section.querySelector(
        "#mensaje-error-mediciones-relacionadas"
    );
    const resultados = section.querySelector(
        "#resultados-mediciones-relacionadas"
    );

    let siguienteMedicion = 4;

    const pruebaRecomendada = sessionStorage.getItem(
        "kernel-prueba-tres-relacionadas"
    );

    if (
        [
            "anova-medidas-repetidas",
            "friedman"
        ].includes(pruebaRecomendada)
    ) {
        formulario.elements.prueba.value =
            pruebaRecomendada;
    }

    sessionStorage.removeItem(
        "kernel-prueba-tres-relacionadas"
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

                const mediciones = obtenerMediciones(
                    contenedorMediciones
                );
                const nivelConfianza = Number(
                    formulario.elements
                        .nivelConfianza.value
                );
                const resultado =
                    analizarTresOMasMedicionesRelacionadas({
                        mediciones,
                        prueba,
                        nivelConfianza
                    });

                resultados.innerHTML =
                    crearVistaResultados(resultado);
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

            if (accion === "agregar-medicion") {
                contenedorMediciones.insertAdjacentHTML(
                    "beforeend",
                    crearTarjetaMedicion(
                        siguienteMedicion,
                        true
                    )
                );
                siguienteMedicion += 1;
                resultados.classList.add("hidden");
                return;
            }

            if (accion === "eliminar-medicion") {
                const tarjetas =
                    contenedorMediciones.querySelectorAll(
                        "[data-medicion]"
                    );

                if (tarjetas.length <= 3) {
                    mostrarError(
                        mensajeError,
                        "El análisis requiere al menos tres mediciones."
                    );
                    return;
                }

                boton.closest("[data-medicion]")?.remove();
                resultados.classList.add("hidden");
                return;
            }

            if (accion === "cargar-ejemplo") {
                cargarEjemplo(
                    formulario,
                    contenedorMediciones
                );
                siguienteMedicion = 4;
                ocultarError(mensajeError);
                resultados.classList.add("hidden");
                return;
            }

            if (accion === "limpiar") {
                formulario.reset();
                contenedorMediciones.innerHTML = `
                    ${crearTarjetaMedicion(1)}
                    ${crearTarjetaMedicion(2)}
                    ${crearTarjetaMedicion(3)}
                `;
                siguienteMedicion = 4;
                resultados.innerHTML = "";
                resultados.classList.add("hidden");
                ocultarError(mensajeError);
            }
        }
    );

    return section;
}

function crearGuia(titulo, texto) {
    return `
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-fuchsia-500"></span>
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

function crearTarjetaMedicion(
    numero,
    eliminable = false
) {
    return `
        <article
            data-medicion
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <h3 class="font-black text-slate-900">
                    Medición ${numero}
                </h3>
                ${
                    eliminable
                        ? `
                            <button
                                type="button"
                                data-action="eliminar-medicion"
                                class="text-sm font-black text-red-600 hover:text-red-800"
                            >
                                Eliminar
                            </button>
                        `
                        : ""
                }
            </div>

            <label class="block mb-4">
                <span class="block text-sm font-black text-slate-700 mb-2">
                    Nombre
                </span>
                <input
                    type="text"
                    data-campo="nombre"
                    value="Medición ${numero}"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                >
            </label>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-700 mb-2">
                    <span>Valores</span>
                    <span class="text-xs font-bold text-slate-500" data-contador>
                        0 valores
                    </span>
                </span>
                <textarea
                    data-campo="valores"
                    rows="10"
                    placeholder="18\n20\n17.5\n19"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                ></textarea>
            </label>
        </article>
    `;
}

function convertirTextoEnValores(texto, nombre) {
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

    if (valores.length < 2) {
        throw new Error(
            `${nombre} debe contener al menos dos observaciones.`
        );
    }

    return valores;
}

function obtenerMediciones(contenedor) {
    const tarjetas = [
        ...contenedor.querySelectorAll(
            "[data-medicion]"
        )
    ];

    if (tarjetas.length < 3) {
        throw new Error(
            "El análisis requiere al menos tres mediciones."
        );
    }

    return tarjetas.map(
        (tarjeta, indice) => {
            const campoNombre =
                tarjeta.querySelector(
                    '[data-campo="nombre"]'
                );
            const campoValores =
                tarjeta.querySelector(
                    '[data-campo="valores"]'
                );
            const nombre =
                campoNombre.value.trim() ||
                `Medición ${indice + 1}`;

            return {
                nombre,
                valores:
                    convertirTextoEnValores(
                        campoValores.value,
                        nombre
                    )
            };
        }
    );
}

function cargarEjemplo(
    formulario,
    contenedor
) {
    formulario.elements.prueba.value =
        formulario.elements.prueba.value ||
        "anova-medidas-repetidas";
    contenedor.innerHTML = `
        ${crearTarjetaMedicion(1)}
        ${crearTarjetaMedicion(2)}
        ${crearTarjetaMedicion(3)}
    `;

    const nombres = [
        "Diagnóstico inicial",
        "Evaluación intermedia",
        "Evaluación final"
    ];
    const valores = [
    "12\n15\n11\n14\n13\n16\n10\n15",
    "15\n17\n14\n16\n16\n18\n13\n17",
    "18\n21\n17\n19\n20\n21\n15\n20"
    ];
    const tarjetas = [
        ...contenedor.querySelectorAll(
            "[data-medicion]"
        )
    ];

    tarjetas.forEach((tarjeta, indice) => {
        tarjeta.querySelector(
            '[data-campo="nombre"]'
        ).value = nombres[indice];
        tarjeta.querySelector(
            '[data-campo="valores"]'
        ).value = valores[indice];
        actualizarContadorTarjeta(tarjeta);
    });
}

function actualizarContadorTarjeta(tarjeta) {
    const campo = tarjeta.querySelector(
        '[data-campo="valores"]'
    );
    const contador = tarjeta.querySelector(
        "[data-contador]"
    );
    const cantidad = campo.value.trim()
        ? campo.value
            .trim()
            .split(/[\s;]+/)
            .filter(Boolean)
            .length
        : 0;

    contador.textContent = cantidad === 1
        ? "1 valor"
        : `${cantidad} valores`;
}

document.addEventListener("input", (event) => {
    const campo = event.target.closest(
        '#formulario-mediciones-relacionadas [data-campo="valores"]'
    );

    if (!campo) {
        return;
    }

    const tarjeta = campo.closest(
        "[data-medicion]"
    );

    if (tarjeta) {
        actualizarContadorTarjeta(tarjeta);
    }
});

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
        return valor === Infinity ? "∞" : "—";
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
    const esAnova =
        resultado.id ===
        "anova-medidas-repetidas";
    const valorPPrincipal = esAnova
        ? resultado.esfericidad
            .greenhouseGeisser.valorP
        : resultado.valorP;
    const significativo =
        valorPPrincipal < resultado.alfa;
    const confianza = Math.round(
        resultado.nivelConfianza * 100
    );
    const nombreCorreccion = esAnova
        ? "Greenhouse–Geisser"
        : "sin corrección adicional";
    const conclusion = significativo
        ? `Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${resultado.alfa.toFixed(2)}. Para la decisión principal se utilizó ${nombreCorreccion}.`
        : `No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${resultado.alfa.toFixed(2)}. Para la decisión principal se utilizó ${nombreCorreccion}.`;

    return `
        <section class="rounded-3xl border border-fuchsia-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-fuchsia-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-fuchsia-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${resultado.nombre}
                </h2>
                <p class="text-fuchsia-100 mt-3 font-semibold">
                    ${resultado.metodo}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${crearIndicador(
                        resultado.estadistico.simbolo,
                        formatearNumero(
                            resultado.estadistico.valor
                        ),
                        "Estadístico global"
                    )}
                    ${crearIndicador(
                        "p",
                        formatearValorP(
                            valorPPrincipal
                        ),
                        esAnova
                            ? "Valor p Greenhouse–Geisser"
                            : "Valor p bilateral"
                    )}
                    ${crearIndicador(
                        "n",
                        resultado.nSujetos,
                        "Participantes completos"
                    )}
                    ${crearIndicador(
                        "k",
                        resultado.numeroMediciones,
                        "Mediciones"
                    )}
                </div>

                ${crearTablaDescriptivos(resultado)}
                ${
                    esAnova
                        ? crearDetallesAnova(resultado)
                        : crearDetallesFriedman(resultado)
                }
                ${crearPostHoc(resultado.postHoc)}

                <article class="mt-6 rounded-2xl border ${
                    significativo
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
                        Nivel de confianza: ${confianza} %. Interprete el resultado global junto con el tamaño del efecto y revise las comparaciones post hoc únicamente cuando el contraste global sea significativo.
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
            <p class="text-sm font-black text-fuchsia-700 mb-1">
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

function crearTablaDescriptivos(resultado) {
    return `
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Descriptivos por medición
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[760px] text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-3">Medición</th>
                            <th class="text-right px-5 py-3">n</th>
                            <th class="text-right px-5 py-3">Media</th>
                            <th class="text-right px-5 py-3">Mediana</th>
                            <th class="text-right px-5 py-3">DE</th>
                            <th class="text-right px-5 py-3">Mínimo</th>
                            <th class="text-right px-5 py-3">Máximo</th>
                            ${
                                resultado.id === "friedman"
                                    ? '<th class="text-right px-5 py-3">Rango medio</th>'
                                    : ""
                            }
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${resultado.mediciones
                            .map(
                                (medicion) => `
                                    <tr>
                                        <td class="px-5 py-3 font-bold text-slate-900">${medicion.nombre}</td>
                                        <td class="px-5 py-3 text-right">${medicion.n}</td>
                                        <td class="px-5 py-3 text-right">${formatearNumero(medicion.media)}</td>
                                        <td class="px-5 py-3 text-right">${formatearNumero(medicion.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${formatearNumero(medicion.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${formatearNumero(medicion.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${formatearNumero(medicion.maximo)}</td>
                                        ${
                                            resultado.id === "friedman"
                                                ? `<td class="px-5 py-3 text-right">${formatearNumero(medicion.rangoMedio)}</td>`
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

function crearDetallesAnova(resultado) {
    const tabla = resultado.tablaAnova;
    const gg = resultado.esfericidad
        .greenhouseGeisser;
    const hf = resultado.esfericidad
        .huynhFeldt;

    return `
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Tabla del ANOVA intra-sujetos
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${crearDato("SC mediciones", tabla.mediciones.sumaCuadrados)}
                    ${crearDato("gl mediciones", tabla.mediciones.gradosLibertad)}
                    ${crearDato("CM mediciones", tabla.mediciones.cuadradoMedio)}
                    ${crearDato("SC sujetos", tabla.sujetos.sumaCuadrados)}
                    ${crearDato("SC error", tabla.error.sumaCuadrados)}
                    ${crearDato("gl error", tabla.error.gradosLibertad)}
                    ${crearDato("CM error", tabla.error.cuadradoMedio)}
                    ${crearDato("SC total", tabla.total.sumaCuadrados)}
                </dl>
            </article>

            <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Esfericidad y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${crearDato("ε Greenhouse–Geisser", gg.epsilon)}
                    ${crearDato("p Greenhouse–Geisser", gg.valorP, true)}
                    ${crearDato("ε Huynh–Feldt", hf.epsilon)}
                    ${crearDato("p Huynh–Feldt", hf.valorP, true)}
                    ${crearDato("Eta cuadrado parcial", resultado.tamanioEfecto.etaCuadradoParcial)}
                    ${crearDato("Eta cuadrado generalizado", resultado.tamanioEfecto.etaCuadradoGeneralizado)}
                </dl>
                <p class="mt-4 text-sm text-violet-900 leading-relaxed">
                    Magnitud orientativa: ${resultado.tamanioEfecto.interpretacion}. ${resultado.esfericidad.nota}
                </p>
            </article>
        </div>
    `;
}

function crearDetallesFriedman(resultado) {
    return `
        <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Rangos, empates y concordancia
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${crearDato("Grados de libertad", resultado.gradosLibertad.valor)}
                ${crearDato("Factor de corrección por empates", resultado.empates.factorCorreccion)}
                ${crearDato("Grupos de empates", resultado.empates.cantidadGruposEmpatados)}
                ${crearDato("W de Kendall", resultado.tamanioEfecto.kendallW)}
                ${crearDato("Magnitud", resultado.tamanioEfecto.interpretacion, false, true)}
            </dl>
        </article>
    `;
}

function crearDato(
    etiqueta,
    valor,
    esP = false,
    esTexto = false
) {
    const contenido = esTexto
        ? valor
        : esP
            ? formatearValorP(valor)
            : formatearNumero(valor);

    return `
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${etiqueta}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${contenido}
            </dd>
        </div>
    `;
}

function crearPostHoc(postHoc) {
    if (!postHoc?.comparaciones?.length) {
        return "";
    }

    return `
        <article class="mt-6 rounded-2xl border border-emerald-200 bg-white overflow-hidden">
            <header class="bg-emerald-50 border-b border-emerald-200 px-6 py-5">
                <h3 class="text-xl font-black text-emerald-950">
                    ${postHoc.nombre}
                </h3>
                <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                    ${postHoc.metodo}
                    ${
                        postHoc.recomendado
                            ? " El contraste global es significativo y estas comparaciones ayudan a localizar las diferencias."
                            : " El contraste global no es significativo; las comparaciones se muestran únicamente con fines exploratorios."
                    }
                </p>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[860px] text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-3">Comparación</th>
                            <th class="text-right px-5 py-3">Estadístico</th>
                            <th class="text-right px-5 py-3">p sin ajustar</th>
                            <th class="text-right px-5 py-3">p Holm</th>
                            <th class="text-center px-5 py-3">Conclusión</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${postHoc.comparaciones
                            .map(
                                (comparacion) => {
                                    const esT =
                                        postHoc.id ===
                                        "t-pareadas-holm";
                                    const estadistico = esT
                                        ? comparacion.estadisticoT
                                        : comparacion.estadisticoW;

                                    return `
                                        <tr>
                                            <td class="px-5 py-3 font-bold text-slate-900">
                                                ${comparacion.medicion1} vs. ${comparacion.medicion2}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${formatearNumero(estadistico)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${formatearValorP(comparacion.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${formatearValorP(comparacion.valorPAjustado)}
                                            </td>
                                            <td class="px-5 py-3 text-center">
                                                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${
                                                    comparacion.significativo
                                                        ? "bg-emerald-100 text-emerald-800"
                                                        : "bg-slate-100 text-slate-700"
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
                            )
                            .join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}
