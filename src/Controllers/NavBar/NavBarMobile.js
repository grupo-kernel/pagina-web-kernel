const SELECTOR_OVERLAY = "[data-nav-overlay]";
const CONSULTA_ESCRITORIO = "(min-width: 1024px)";

function esEscritorio() {
    return window.matchMedia(CONSULTA_ESCRITORIO).matches;
}

function obtenerDisparador(nav) {
    return nav?._disparadorMenu || document.querySelector('[data-action="open-menu"]');
}

function eliminarOverlay() {
    document.querySelector(SELECTOR_OVERLAY)?.remove();
}

function restablecerDocumento() {
    document.body.style.overflow = "";
    eliminarOverlay();
}

export function sincronizarMenuConViewport(nav) {
    if (!nav) return;

    restablecerDocumento();
    const disparador = obtenerDisparador(nav);
    disparador?.setAttribute("aria-expanded", "false");

    nav.classList.remove("block");
    nav.classList.add("hidden");

    if (esEscritorio()) {
        nav.setAttribute("aria-hidden", "false");
    } else {
        nav.setAttribute("aria-hidden", "true");
    }
}

export function cerrarMenuMovil(nav) {
    if (!nav) return;

    nav.classList.remove("block");
    nav.classList.add("hidden");
    restablecerDocumento();

    const disparador = obtenerDisparador(nav);
    disparador?.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", esEscritorio() ? "false" : "true");
}

export function abrirMenuMovil(nav, disparador) {
    if (!nav || esEscritorio()) return;

    nav._disparadorMenu = disparador || obtenerDisparador(nav);
    nav.classList.remove("hidden");
    nav.classList.add("block");
    nav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    nav._disparadorMenu?.setAttribute("aria-expanded", "true");

    eliminarOverlay();
    const overlay = document.createElement("button");
    overlay.type = "button";
    overlay.dataset.navOverlay = "true";
    overlay.className = "fixed inset-0 z-[290] bg-slate-950/55 backdrop-blur-[2px] lg:hidden";
    overlay.setAttribute("aria-label", "Cerrar menú de navegación");
    overlay.addEventListener("click", () => cerrarMenuMovil(nav), { once: true });
    document.body.appendChild(overlay);

    window.requestAnimationFrame(() => {
        nav.querySelector('[data-action="close-navBar"]')?.focus();
    });
}

export { CONSULTA_ESCRITORIO };
