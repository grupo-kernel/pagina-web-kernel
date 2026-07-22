const MODULOS = {
    "tamaño de muestra": {
        ruta: "calculadoraTamanoMuestraPotencia",
        descripcion:
            "Tamaño mínimo, potencia aproximada, pérdidas, población finita, efecto de diseño y sensibilidad."
    },
    "biblioteca metodológica": {
        ruta: "bibliotecaMetodologica",
        descripcion:
            "Fichas buscables con supuestos, hipótesis, tamaños del efecto, reporte, alternativas y errores frecuentes."
    }
};

function esLaboratorio() {
    return [...document.querySelectorAll("main h1")].some((titulo) =>
        titulo.textContent
            .trim()
            .toLowerCase()
            .includes("laboratorio inteligente de investigación")
    );
}

function integrar() {
    if (!esLaboratorio()) return;

    [...document.querySelectorAll("main article")].forEach((tarjeta) => {
        const titulo = tarjeta.querySelector("h3")
            ?.textContent
            ?.trim()
            ?.toLowerCase();
        const modulo = MODULOS[titulo];

        if (!modulo || tarjeta.dataset.moduloFinalConectado === "true") {
            return;
        }

        const descripcion = tarjeta.querySelector("h3 + p");
        const boton = tarjeta.querySelector("button");

        if (descripcion) descripcion.textContent = modulo.descripcion;
        if (boton) {
            boton.onclick = () => {
                window.location.hash = `/${modulo.ruta}`;
            };
            boton.setAttribute(
                "aria-label",
                `Abrir ${tarjeta.querySelector("h3")?.textContent || "módulo"}`
            );
        }

        tarjeta.dataset.moduloFinalConectado = "true";
    });
}

export function iniciarIntegracionModulosFinalesLaboratorio() {
    const observador = new MutationObserver(integrar);
    observador.observe(document.body, {
        childList: true,
        subtree: true
    });
    integrar();
}
