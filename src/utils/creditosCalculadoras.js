const SELECTOR_CALCULADORAS = [
    "#formulario-estadistica-descriptiva",
    "#formulario-regresion",
    "#formulario-regresion-conteo",
    "[id*='calculadora'] form",
    "section form"
].join(",");

function obtenerTituloPagina() {
    return document.querySelector("main h1, #app h1, h1")
        ?.textContent
        ?.trim()
        ?.toLowerCase() || "";
}

function esPaginaPrincipalLaboratorio() {
    const titulo = obtenerTituloPagina();

    return titulo.includes(
        "laboratorio inteligente de investigación"
    );
}

function esPaginaDeCalculadora() {
    const titulo = document.querySelector("main h1, #app h1, h1");
    const botonVolver = document.querySelector(
        "[data-action='volver-laboratorio'], " +
        "[data-action='volver-modelos'], " +
        "[data-action='volver-regresion']"
    );
    const formulario = document.querySelector(
        SELECTOR_CALCULADORAS
    );

    return Boolean(
        titulo &&
        botonVolver &&
        formulario
    );
}

function crearBloqueCreditos() {
    const creditos = document.createElement("section");

    creditos.dataset.creditosCalculadoras = "true";
    creditos.className = [
        "w-full max-w-7xl mx-auto",
        "px-4 pb-10 md:px-8",
        "font-sans"
    ].join(" ");

    creditos.innerHTML = `
        <div class="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-7 md:px-9 md:py-8 text-white shadow-xl">
            <div class="absolute -top-20 -right-16 h-44 w-44 rounded-full bg-sky-500/15"></div>
            <div class="absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-indigo-500/15"></div>

            <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div class="max-w-4xl">
                    <p class="uppercase tracking-[0.18em] text-sky-300 text-xs font-black mb-2">
                        Créditos del proyecto
                    </p>

                    <h2 class="text-xl md:text-2xl font-black leading-snug">
                        Diseño y desarrollo de las calculadoras estadísticas
                    </h2>

                    <p class="mt-3 text-slate-200 leading-relaxed">
                        Las calculadoras del Laboratorio Inteligente de Investigación del Grupo Kernel han sido diseñadas y desarrolladas por
                        <strong class="text-white">Miguel Antonio Leonardo Sepúlveda</strong>
                        y
                        <strong class="text-white">Natanael Ureña Castillo</strong>.
                    </p>
                </div>

                <div class="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-slate-200">
                    <span class="block font-black text-white mb-1">Grupo Kernel</span>
                    Investigación, innovación y herramientas científicas
                </div>
            </div>
        </div>
    `;

    return creditos;
}

function insertarCreditos() {
    if (
        (!esPaginaDeCalculadora() &&
            !esPaginaPrincipalLaboratorio()) ||
        document.querySelector(
            "[data-creditos-calculadoras='true']"
        )
    ) {
        return;
    }

    const contenedorPrincipal = document.querySelector(
        "main, #app, [data-router-view]"
    );

    if (!contenedorPrincipal) {
        return;
    }

    contenedorPrincipal.appendChild(
        crearBloqueCreditos()
    );
}

export function iniciarCreditosCalculadoras() {
    const observador = new MutationObserver(
        insertarCreditos
    );

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    insertarCreditos();
}
