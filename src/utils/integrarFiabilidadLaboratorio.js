function localizarTarjetaFiabilidad() {
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
            ?.toLowerCase() === "cuestionarios y fiabilidad"
    ) || null;
}

function integrarTarjetaFiabilidad() {
    const tarjeta = localizarTarjetaFiabilidad();

    if (
        !tarjeta ||
        tarjeta.dataset.fiabilidadConectada === "true"
    ) {
        return;
    }

    const descripcion = tarjeta.querySelector("h3 + p");
    const boton = tarjeta.querySelector("button");

    if (descripcion) {
        descripcion.textContent =
            "Alfa de Cronbach, alfa estandarizado, omega aproximado, análisis de ítems, recodificación y gráficos diagnósticos.";
    }

    if (boton) {
        boton.onclick = () => {
            window.location.hash =
                "/calculadoraFiabilidadCuestionarios";
        };
        boton.setAttribute(
            "aria-label",
            "Abrir la calculadora de cuestionarios y fiabilidad"
        );
    }

    tarjeta.dataset.fiabilidadConectada = "true";
}

export function iniciarIntegracionFiabilidadLaboratorio() {
    const observador = new MutationObserver(
        integrarTarjetaFiabilidad
    );

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    integrarTarjetaFiabilidad();
}
