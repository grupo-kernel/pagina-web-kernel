function localizarTarjetaEvaluacion() {
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
            ?.toLowerCase() === "evaluación educativa"
    ) || null;
}

function integrarTarjetaEvaluacion() {
    const tarjeta = localizarTarjetaEvaluacion();

    if (
        !tarjeta ||
        tarjeta.dataset.evaluacionEducativaConectada === "true"
    ) {
        return;
    }

    const descripcion = tarjeta.querySelector("h3 + p");
    const boton = tarjeta.querySelector("button");

    if (descripcion) {
        descripcion.textContent =
            "Dificultad, discriminación, correlación punto-biserial, KR-20, distractores, puntuaciones y gráficos diagnósticos.";
    }

    if (boton) {
        boton.onclick = () => {
            window.location.hash =
                "/calculadoraEvaluacionEducativa";
        };
        boton.setAttribute(
            "aria-label",
            "Abrir la calculadora de evaluación educativa"
        );
    }

    tarjeta.dataset.evaluacionEducativaConectada = "true";
}

export function iniciarIntegracionEvaluacionEducativaLaboratorio() {
    const observador = new MutationObserver(
        integrarTarjetaEvaluacion
    );

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    integrarTarjetaEvaluacion();
}
