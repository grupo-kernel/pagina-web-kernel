function localizarTarjetaRegresion() {
    const tituloLaboratorio = [
        ...document.querySelectorAll("main h1")
    ].find((titulo) =>
        titulo.textContent
            .trim()
            .toLowerCase()
            .includes("laboratorio inteligente de investigación")
    );

    if (!tituloLaboratorio) return null;

    return [
        ...document.querySelectorAll("main article")
    ].find((articulo) =>
        articulo.querySelector("h3")
            ?.textContent
            ?.trim()
            ?.toLowerCase() === "regresión"
    ) || null;
}

function integrarTarjetaRegresion() {
    const tarjeta = localizarTarjetaRegresion();

    if (!tarjeta || tarjeta.dataset.regresionConectada === "true") {
        return;
    }

    const descripcion = tarjeta.querySelector("h3 + p");
    const boton = tarjeta.querySelector("button");

    if (descripcion) {
        descripcion.textContent =
            "Regresión lineal simple y múltiple con coeficientes, ANOVA, diagnósticos gráficos, predicción e interpretación guiada.";
    }

    if (boton) {
        boton.onclick = () => {
            window.location.hash = "/calculadoraRegresion";
        };
        boton.setAttribute(
            "aria-label",
            "Abrir la calculadora de regresión lineal y múltiple"
        );
    }

    tarjeta.dataset.regresionConectada = "true";
}

export function iniciarIntegracionRegresionLaboratorio() {
    const observador = new MutationObserver(
        integrarTarjetaRegresion
    );

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    integrarTarjetaRegresion();
}
