const MODELOS_REGRESION = {
    "regresión lineal simple": {
        ruta: "calculadoraRegresion",
        tipo: "simple",
        texto:
            "Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y un predictor."
    },
    "regresión lineal múltiple": {
        ruta: "calculadoraRegresion",
        tipo: "multiple",
        texto:
            "Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y dos o más predictores."
    },
    "regresión logística binaria simple": {
        ruta: "calculadoraRegresionLogistica",
        tipo: "simple",
        texto:
            "Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y un predictor."
    },
    "regresión logística binaria múltiple": {
        ruta: "calculadoraRegresionLogistica",
        tipo: "multiple",
        texto:
            "Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y dos o más predictores."
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

    bloque.dataset.ejecutarModeloRegresion = "true";
    bloque.className =
        "mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-6";
    bloque.innerHTML = `
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
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
                class="shrink-0 inline-flex items-center justify-center bg-rose-700 text-white font-black rounded-xl px-6 py-4 hover:bg-rose-800 transition-colors shadow-lg"
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

            sessionStorage.setItem(
                "kernel-tipo-modelo-regresion",
                boton.dataset.tipoRegresion || ""
            );
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

export function iniciarIntegracionRegresionAsistente() {
    const observador = new MutationObserver(
        integrarResultado
    );

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    integrarResultado();
}
