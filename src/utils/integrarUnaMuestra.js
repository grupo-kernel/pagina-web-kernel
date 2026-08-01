const CLAVE_MODO = "kernel-calculadora-una-muestra-activa";
const CLAVE_PRUEBA = "kernel-prueba-una-muestra";
const RUTA_CONTENEDORA = "calculadoraDosGrupos";

let renderizando = false;

function normalizar(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

function rutaActual() {
    return window.location.hash.replace("#/", "") || "home";
}

function activarCalculadora(prueba = "") {
    sessionStorage.setItem(CLAVE_MODO, "true");

    if (prueba) {
        sessionStorage.setItem(CLAVE_PRUEBA, prueba);
    } else {
        sessionStorage.removeItem(CLAVE_PRUEBA);
    }

    window.location.hash = `/${RUTA_CONTENEDORA}`;
}

function crearTarjetaUnaMuestra() {
    const article = document.createElement("article");
    article.dataset.calculadoraUnaMuestraCard = "true";
    article.className =
        "h-full rounded-3xl border border-cyan-200 bg-white p-6 shadow-xl md:p-8";
    article.innerHTML = `
        <div class="flex h-full flex-col">
            <div class="mb-5 inline-flex self-start rounded-full bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-700">
                Una muestra
            </div>

            <h2 class="mb-4 text-3xl font-black text-slate-900">
                Comparación con un valor de referencia
            </h2>

            <p class="mb-6 leading-relaxed text-slate-600">
                Compare la media o la localización de una sola muestra con un valor teórico, normativo o de referencia.
            </p>

            <div class="mb-7 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                <h3 class="mb-3 font-black text-slate-900">
                    Pruebas disponibles
                </h3>
                <ul class="space-y-2 text-slate-700">
                    <li class="flex items-start gap-3">
                        <span class="font-black text-cyan-700" aria-hidden="true">✓</span>
                        <span>t de Student para una muestra</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="font-black text-cyan-700" aria-hidden="true">✓</span>
                        <span>Rangos con signo de Wilcoxon para una muestra</span>
                    </li>
                </ul>
            </div>

            <button
                type="button"
                data-action-una-muestra="abrir"
                class="mt-auto inline-flex items-center justify-center rounded-xl bg-cyan-700 px-6 py-4 font-black text-white shadow-lg transition-colors hover:bg-cyan-800"
            >
                Abrir calculadora de una muestra
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </div>
    `;

    article.querySelector("button")?.addEventListener(
        "click",
        () => activarCalculadora()
    );

    return article;
}

function integrarTarjetaComparacion() {
    const titulo = [...document.querySelectorAll("main h1")].find(
        (elemento) =>
            normalizar(elemento.textContent) ===
            "comparacion de grupos y mediciones"
    );

    const pagina = titulo?.closest("section");
    if (
        !pagina ||
        pagina.querySelector(
            "[data-calculadora-una-muestra-card='true']"
        )
    ) {
        return;
    }

    const catalogo = [...pagina.children].find(
        (elemento) =>
            elemento.tagName === "SECTION" &&
            elemento.classList.contains("grid")
    );

    catalogo?.prepend(crearTarjetaUnaMuestra());
}

function identificarRecomendacionUnaMuestra() {
    const encabezados = [...document.querySelectorAll("main h1")];

    for (const encabezado of encabezados) {
        const titulo = normalizar(encabezado.textContent);
        const contenedor = encabezado.closest("section");
        const textoCompleto = normalizar(contenedor?.textContent);
        const esUnaMuestra = textoCompleto.includes(
            "categoria: comparacion de una muestra"
        );

        if (!esUnaMuestra) continue;

        if (titulo === "t de student para una muestra") {
            return {
                contenedor,
                prueba: "t-una-muestra",
                descripcion:
                    "Abra la calculadora con la t de Student seleccionada para comparar la media de su muestra con el valor de referencia."
            };
        }

        if (
            titulo ===
            "prueba de rangos con signo de wilcoxon"
        ) {
            return {
                contenedor,
                prueba: "wilcoxon-una-muestra",
                descripcion:
                    "Abra la calculadora con Wilcoxon seleccionado para comparar la localización basada en rangos con el valor de referencia."
            };
        }
    }

    return null;
}

function crearBloqueAsistente(recomendacion) {
    const bloque = document.createElement("div");
    bloque.dataset.ejecutarUnaMuestra = "true";
    bloque.className =
        "mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-6";
    bloque.innerHTML = `
        <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <p class="mb-2 text-xs font-black uppercase tracking-widest text-cyan-700">
                    Herramienta de análisis
                </p>
                <h2 class="mb-2 text-xl font-black text-slate-900">
                    Ejecute esta prueba con sus propios datos
                </h2>
                <p class="leading-relaxed text-slate-600">
                    ${recomendacion.descripcion} Obtendrá descriptivos, valor p, estimación, intervalo de confianza cuando corresponda y tamaño del efecto.
                </p>
            </div>

            <button
                type="button"
                data-prueba-una-muestra="${recomendacion.prueba}"
                class="shrink-0 inline-flex items-center justify-center rounded-xl bg-cyan-700 px-6 py-4 font-black text-white shadow-lg transition-colors hover:bg-cyan-800"
            >
                Ejecutar esta prueba
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </div>
    `;

    bloque.querySelector("button")?.addEventListener(
        "click",
        () => activarCalculadora(recomendacion.prueba)
    );

    return bloque;
}

function integrarResultadoAsistente() {
    const recomendacion = identificarRecomendacionUnaMuestra();

    if (
        !recomendacion?.contenedor ||
        recomendacion.contenedor.querySelector(
            "[data-ejecutar-una-muestra='true']"
        ) ||
        recomendacion.contenedor.querySelector(
            "[data-action='ejecutar-prueba']"
        )
    ) {
        return;
    }

    const cuerpo = recomendacion.contenedor.querySelector(
        "header + div"
    ) || recomendacion.contenedor;

    cuerpo.appendChild(
        crearBloqueAsistente(recomendacion)
    );
}

async function mostrarCalculadoraUnaMuestra() {
    if (
        rutaActual() !== RUTA_CONTENEDORA ||
        sessionStorage.getItem(CLAVE_MODO) !== "true"
    ) {
        return;
    }

    const main = document.querySelector("#main");
    if (
        !main ||
        main.querySelector("#formulario-una-muestra") ||
        renderizando
    ) {
        return;
    }

    const contenidoPreparado = main.querySelector(
        "#formulario-dos-grupos"
    );
    if (!contenidoPreparado) return;

    renderizando = true;

    try {
        const modulo = await import(
            "../pages/CalculadoraUnaMuestra.js"
        );

        if (
            rutaActual() !== RUTA_CONTENEDORA ||
            sessionStorage.getItem(CLAVE_MODO) !== "true"
        ) {
            return;
        }

        main.replaceChildren(
            modulo.CalculadoraUnaMuestra()
        );
        document.title =
            "Comparación de una muestra | El Kernel";
    } catch (error) {
        console.error(
            "[Kernel] No fue posible abrir la calculadora de una muestra.",
            error
        );
    } finally {
        renderizando = false;
    }
}

function limpiarModoAlSalir() {
    if (rutaActual() !== RUTA_CONTENEDORA) {
        sessionStorage.removeItem(CLAVE_MODO);
        sessionStorage.removeItem(CLAVE_PRUEBA);
    }
}

export function iniciarIntegracionUnaMuestra() {
    const actualizar = () => {
        integrarTarjetaComparacion();
        integrarResultadoAsistente();
        mostrarCalculadoraUnaMuestra();
    };

    const observador = new MutationObserver(actualizar);
    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    window.addEventListener("hashchange", () => {
        limpiarModoAlSalir();
        actualizar();
    });

    actualizar();
}
