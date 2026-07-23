const MODELOS_REGRESION = {
    "regresión lineal simple": {
        ruta: "calculadoraRegresion",
        tipo: "simple",
        almacenamiento: "kernel-tipo-modelo-regresion",
        clase: "rose",
        texto:
            "Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y un predictor."
    },
    "regresión lineal múltiple": {
        ruta: "calculadoraRegresion",
        tipo: "multiple",
        almacenamiento: "kernel-tipo-modelo-regresion",
        clase: "rose",
        texto:
            "Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y dos o más predictores."
    },
    "regresión logística binaria simple": {
        ruta: "calculadoraRegresionLogistica",
        tipo: "simple",
        almacenamiento: null,
        clase: "rose",
        texto:
            "Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y un predictor."
    },
    "regresión logística binaria múltiple": {
        ruta: "calculadoraRegresionLogistica",
        tipo: "multiple",
        almacenamiento: null,
        clase: "rose",
        texto:
            "Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y dos o más predictores."
    },
    "regresión de poisson": {
        ruta: "calculadoraRegresionConteo",
        tipo: "poisson",
        almacenamiento: "kernel-modelo-conteo",
        clase: "amber",
        texto:
            "Abra la calculadora de conteo y ajuste un modelo de Poisson con una variable dependiente formada por enteros no negativos."
    },
    "regresión binomial negativa": {
        ruta: "calculadoraRegresionConteo",
        tipo: "negativa",
        almacenamiento: "kernel-modelo-conteo",
        clase: "amber",
        texto:
            "Abra la calculadora de conteo y ajuste un modelo binomial negativo cuando exista sobredispersión respecto a Poisson."
    }
};

function localizarRecomendacion() {
    const encabezados = [
        ...document.querySelectorAll("main h1")
    ];

    for (const encabezado of encabezados) {
        const clave = encabezado.textContent
            .trim()
            .toLowerCase();
        const modelo = MODELOS_REGRESION[clave];

        if (modelo) {
            return {
                encabezado,
                modelo
            };
        }
    }

    return null;
}

function crearBloque(modelo) {
    const bloque = document.createElement("div");
    const conteo = modelo.clase === "amber";
    const borde = conteo ? "border-amber-200" : "border-rose-200";
    const fondo = conteo ? "bg-amber-50" : "bg-rose-50";
    const textoColor = conteo ? "text-amber-700" : "text-rose-700";
    const botonColor = conteo
        ? "bg-amber-700 hover:bg-amber-800"
        : "bg-rose-700 hover:bg-rose-800";

    bloque.dataset.ejecutarModeloRegresion = "true";
    bloque.className =
        `mt-8 rounded-2xl border ${borde} ${fondo} p-6`;
    bloque.innerHTML = `
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
                <p class="uppercase tracking-widest ${textoColor} text-xs font-black mb-2">
                    Herramienta de modelización
                </p>
                <h2 class="text-xl font-black text-slate-900 mb-2">
                    Ejecute este modelo con sus propios datos
                </h2>
                <p class="text-slate-600 leading-relaxed">
                    ${modelo.texto} Obtendrá coeficientes, intervalos de confianza, diagnósticos gráficos, predicción e interpretación guiada.
                </p>
            </div>

            <button
                type="button"
                data-route-regresion="${modelo.ruta}"
                data-tipo-regresion="${modelo.tipo}"
                ${modelo.almacenamiento
                    ? `data-almacenamiento-regresion="${modelo.almacenamiento}"`
                    : ""}
                class="shrink-0 inline-flex items-center justify-center ${botonColor} text-white font-black rounded-xl px-6 py-4 transition-colors shadow-lg"
            >
                Ejecutar este modelo
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </div>
    `;

    bloque.querySelector("button")?.addEventListener(
        "click",
        (event) => {
            const boton = event.currentTarget;
            const almacenamiento =
                boton.dataset.almacenamientoRegresion;

            if (almacenamiento) {
                sessionStorage.setItem(
                    almacenamiento,
                    boton.dataset.tipoRegresion || ""
                );
            }
            window.location.hash =
                `/${boton.dataset.routeRegresion}`;
        }
    );

    return bloque;
}

function integrarResultado() {
    const resultado = localizarRecomendacion();

    if (!resultado) return;

    const contenedor = resultado.encabezado.closest("section");

    if (
        !contenedor ||
        contenedor.querySelector(
            "[data-ejecutar-modelo-regresion='true']"
        ) ||
        contenedor.querySelector(
            "[data-action='ejecutar-prueba']"
        )
    ) {
        return;
    }

    const cuerpo = contenedor.querySelector(
        "header + div"
    ) || contenedor;

    cuerpo.appendChild(
        crearBloque(resultado.modelo)
    );
}

function aplicarTipoRegresionGuardado() {
    const formulario = document.querySelector(
        "#formulario-regresion"
    );
    const selector = formulario?.elements?.tipoModelo;
    if (!selector) return;

    const tipo = sessionStorage.getItem(
        "kernel-tipo-modelo-regresion"
    );
    if (tipo !== "simple" && tipo !== "multiple") return;

    selector.value = tipo;
    selector.dispatchEvent(new Event("change", {
        bubbles: true
    }));
    sessionStorage.removeItem(
        "kernel-tipo-modelo-regresion"
    );
}

export function iniciarIntegracionRegresionAsistente() {
    const observador = new MutationObserver(
        () => {
            integrarResultado();
            aplicarTipoRegresionGuardado();
        }
    );

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    integrarResultado();
    aplicarTipoRegresionGuardado();
}
