const CLAVE_SECCION_PORTADA = "kernel-home-section";

function cerrarMenuMovil(nav) {
    if (window.matchMedia("(min-width: 1024px)").matches) return;

    nav.classList.remove("block");
    nav.classList.add("hidden");
    document.body.style.overflow = "";
}

function rutaActual() {
    return window.location.hash.replace("#/", "") || "home";
}

function guardarSeccionPendiente(seccion) {
    try {
        window.sessionStorage.setItem(CLAVE_SECCION_PORTADA, seccion);
    } catch (error) {
        console.warn("[Kernel] No fue posible conservar la sección solicitada.", error);
    }
}

function limpiarSeccionPendiente() {
    try {
        window.sessionStorage.removeItem(CLAVE_SECCION_PORTADA);
    } catch (error) {
        console.warn("[Kernel] No fue posible limpiar la sección solicitada.", error);
    }
}

function abrirSeccionPortada(seccion, navigate) {
    if (!seccion) return;

    if (rutaActual() !== "home") {
        guardarSeccionPendiente(seccion);
        navigate("home");
        return;
    }

    const destino = document.getElementById(seccion);
    if (destino) {
        limpiarSeccionPendiente();
        window.requestAnimationFrame(() => {
            destino.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
    }

    guardarSeccionPendiente(seccion);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export function onNavigate(nav, navigate) {
    if (!nav) return;

    nav.addEventListener("click", (event) => {
        const accesoSeccion = event.target.closest("[data-home-section]");
        if (accesoSeccion && nav.contains(accesoSeccion)) {
            event.preventDefault();
            cerrarMenuMovil(nav);
            abrirSeccionPortada(accesoSeccion.dataset.homeSection, navigate);
            return;
        }

        const item = event.target.closest("[data-route]");
        if (!item || !nav.contains(item)) return;

        event.preventDefault();
        navigate(item.dataset.route);
        cerrarMenuMovil(nav);
    });
}