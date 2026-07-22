const SELECTOR_OVERLAY = "[data-nav-overlay]";

function esEscritorio() {
    return window.matchMedia("(min-width: 1024px)").matches;
}

function obtenerDisparador(nav) {
    return nav?._disparadorMenu || document.querySelector('[data-action="open-menu"]');
}

function eliminarOverlay() {
    document.querySelector(SELECTOR_OVERLAY)?.remove();
}

export function cerrarMenuMovil(nav) {
    if (!nav || esEscritorio()) return;

    nav.classList.remove("block");
    nav.classList.add("hidden");
    nav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    eliminarOverlay();

    const disparador = obtenerDisparador(nav);
    disparador?.setAttribute("aria-expanded", "false");
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
