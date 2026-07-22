function manejarSeleccionInstrumento(event) {
    const boton = event.target.closest(
        "#asistente-pruebas [data-value='instrumento']"
    );

    if (!boton) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    window.location.hash =
        "/calculadoraFiabilidadCuestionarios";
}

export function iniciarIntegracionFiabilidadAsistente() {
    document.addEventListener(
        "click",
        manejarSeleccionInstrumento,
        true
    );
}
