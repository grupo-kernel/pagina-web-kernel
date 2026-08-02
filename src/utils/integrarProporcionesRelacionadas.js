const CLAVE_MODO = "kernel-calculadora-proporciones-relacionadas-activa";
const CLAVE_PRUEBA = "kernel-prueba-proporciones-relacionadas";
const RUTA_CONTENEDORA = "calculadoraDosMuestrasRelacionadas";

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

function crearTarjeta() {
    const article = document.createElement("article");
    article.dataset.proporcionesRelacionadasCard = "true";
    article.className =
        "h-full rounded-3xl border border-fuchsia-200 bg-white p-6 shadow-xl md:p-8";
    article.innerHTML = `
        <div class="flex h-full flex-col">
            <div class="mb-5 inline-flex self-start rounded-full bg-fuchsia-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-fuchsia-700">
                Respuestas dicotómicas relacionadas
            </div>

            <h2 class="mb-4 text-3xl font-black text-slate-900">
                Proporciones antes-después y medidas repetidas
            </h2>

            <p class="mb-6 leading-relaxed text-slate-600">
                Compare respuestas sí/no o 0/1 obtenidas de las mismas personas en dos o más condiciones.
            </p>

            <div class="mb-7 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5">
                <h3 class="mb-3 font-black text-slate-900">Pruebas disponibles</h3>
                <ul class="space-y-2 text-slate-700">
                    <li class="flex items-start gap-3"><span class="font-black text-fuchsia-700" aria-hidden="true">✓</span><span>Prueba de McNemar</span></li>
                    <li class="flex items-start gap-3"><span class="font-black text-fuchsia-700" aria-hidden="true">✓</span><span>Prueba Q de Cochran</span></li>
                    <li class="flex items-start gap-3"><span class="font-black text-fuchsia-700" aria-hidden="true">✓</span><span>Comparaciones posteriores con ajuste de Holm</span></li>
                </ul>
            </div>

            <button
                type="button"
                data-action-proporciones="abrir"
                class="mt-auto inline-flex items-center justify-center rounded-xl bg-fuchsia-700 px-6 py-4 font-black text-white shadow-lg transition-colors hover:bg-fuchsia-800"
            >
                Abrir calculadora de proporciones
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
        (elemento) => normalizar(elemento.textContent) ===
            "comparacion de grupos y mediciones"
    );
    const pagina = titulo?.closest("section");

    if (
        !pagina ||
        pagina.querySelector("[data-proporciones-relacionadas-card='true']")
    ) {
        return;
    }

    const catalogo = [...pagina.children].find(
        (elemento) =>
            elemento.tagName === "SECTION" &&
            elemento.classList.contains("grid")
    );

    catalogo?.appendChild(crearTarjeta());
}

function identificarRecomendacion() {
    const encabezados = [...document.querySelectorAll("main h1")];

    for (const encabezado of encabezados) {
        const titulo = normalizar(encabezado.textContent);
        const contenedor = encabezado.closest("section");

        if (titulo === "prueba de mcnemar") {
            return {
                contenedor,
                prueba: "mcnemar",
                descripcion:
                    "Abra la calculadora con McNemar seleccionada para comparar dos proporciones relacionadas."
            };
        }

        if (titulo === "prueba q de cochran") {
            return {
                contenedor,
                prueba: "q-cochran",
                descripcion:
                    "Abra la calculadora con Q de Cochran seleccionada para comparar tres o más proporciones relacionadas."
            };
        }
    }

    return null;
}

function crearBloqueAsistente(recomendacion) {
    const bloque = document.createElement("div");
    bloque.dataset.ejecutarProporcionesRelacionadas = "true";
    bloque.className =
        "mt-8 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6";
    bloque.innerHTML = `
        <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <p class="mb-2 text-xs font-black uppercase tracking-widest text-fuchsia-700">Herramienta de análisis</p>
                <h2 class="mb-2 text-xl font-black text-slate-900">Ejecute esta prueba con sus propios datos</h2>
                <p class="leading-relaxed text-slate-600">
                    ${recomendacion.descripcion} Obtendrá proporciones, valor p, tamaño del efecto y, para Cochran, comparaciones posteriores ajustadas.
                </p>
            </div>

            <button
                type="button"
                data-prueba-proporciones="${recomendacion.prueba}"
                class="shrink-0 inline-flex items-center justify-center rounded-xl bg-fuchsia-700 px-6 py-4 font-black text-white shadow-lg transition-colors hover:bg-fuchsia-800"
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
    const recomendacion = identificarRecomendacion();

    if (
        !recomendacion?.contenedor ||
        recomendacion.contenedor.querySelector(
            "[data-ejecutar-proporciones-relacionadas='true']"
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

    cuerpo.appendChild(crearBloqueAsistente(recomendacion));
}

async function mostrarCalculadora() {
    if (
        rutaActual() !== RUTA_CONTENEDORA ||
        sessionStorage.getItem(CLAVE_MODO) !== "true"
    ) {
        return;
    }

    const main = document.querySelector("#main");
    if (
        !main ||
        main.querySelector("#formulario-proporciones-relacionadas") ||
        renderizando
    ) {
        return;
    }

    const contenidoPreparado = main.querySelector(
        "#formulario-dos-relacionadas, h1"
    );
    if (!contenidoPreparado) return;

    renderizando = true;

    try {
        const modulo = await import(
            "../pages/CalculadoraProporcionesRelacionadas.js"
        );

        if (
            rutaActual() !== RUTA_CONTENEDORA ||
            sessionStorage.getItem(CLAVE_MODO) !== "true"
        ) {
            return;
        }

        main.replaceChildren(
            modulo.CalculadoraProporcionesRelacionadas()
        );
        document.title = "Proporciones relacionadas | El Kernel";
    } catch (error) {
        console.error(
            "[Kernel] No fue posible abrir la calculadora de proporciones relacionadas.",
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

export function iniciarIntegracionProporcionesRelacionadas() {
    const actualizar = () => {
        integrarTarjetaComparacion();
        integrarResultadoAsistente();
        mostrarCalculadora();
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
