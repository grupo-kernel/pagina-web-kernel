const SELECTOR_OVERLAY = "[data-nav-overlay]";
const CONSULTA_ESCRITORIO = "(min-width: 1024px)";
const CLASES_DISPARADOR_OCULTO = ["invisible", "pointer-events-none"];
const SELECTOR_CONTROLES_FOCO = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])'
].join(",");

let controladorMenu = null;
let elementosInertes = [];
let overflowAnterior = "";
let menuAbierto = null;
let documentoBloqueadoPorMenu = false;

function esEscritorio() {
    return window.matchMedia(CONSULTA_ESCRITORIO).matches;
}

function obtenerDisparador(nav) {
    return nav?._disparadorMenu || document.querySelector('[data-action="open-menu"]');
}

function eliminarOverlay() {
    document.querySelector(SELECTOR_OVERLAY)?.remove();
}

function controlesFoco(nav) {
    return [...nav.querySelectorAll(SELECTOR_CONTROLES_FOCO)]
        .filter((control) =>
            control instanceof HTMLElement &&
            control.getAttribute("aria-hidden") !== "true"
        );
}

function hacerFondoInerte() {
    const candidatos = [
        document.querySelector("#header"),
        document.querySelector("#main"),
        document.querySelector("#footer")
    ].filter(Boolean);

    elementosInertes = candidatos.map((elemento) => ({
        elemento,
        teniaInert: elemento.hasAttribute("inert")
    }));

    elementosInertes.forEach(({ elemento }) => {
        elemento.setAttribute("inert", "");
    });
}

function restaurarFondo() {
    elementosInertes.forEach(({ elemento, teniaInert }) => {
        if (!teniaInert) {
            elemento.removeAttribute("inert");
        }
    });
    elementosInertes = [];
}

function detenerControlMenu() {
    controladorMenu?.abort();
    controladorMenu = null;
}

function mostrarDisparador(disparador) {
    disparador?.classList.remove(...CLASES_DISPARADOR_OCULTO);
    disparador?.setAttribute("aria-expanded", "false");
}

function ocultarDisparador(disparador) {
    disparador?.classList.add(...CLASES_DISPARADOR_OCULTO);
    disparador?.setAttribute("aria-expanded", "true");
}

function restablecerDocumento() {
    if (documentoBloqueadoPorMenu) {
        document.body.style.overflow = overflowAnterior;
        overflowAnterior = "";
        restaurarFondo();
        documentoBloqueadoPorMenu = false;
    }
    detenerControlMenu();
    eliminarOverlay();
    menuAbierto = null;
}

export function sincronizarMenuConViewport(nav) {
    if (!nav) return;

    if (menuAbierto === nav) {
        cerrarMenuMovil(nav, { restaurarFoco: false });
    } else {
        restablecerDocumento();
    }
    const disparador = obtenerDisparador(nav);
    mostrarDisparador(disparador);

    nav.classList.remove("block");
    nav.classList.add("hidden");

    if (esEscritorio()) {
        nav.setAttribute("aria-hidden", "false");
    } else {
        nav.setAttribute("aria-hidden", "true");
    }
}

export function cerrarMenuMovil(nav, { restaurarFoco = true } = {}) {
    if (!nav) return;

    const estabaAbierto = menuAbierto === nav;
    nav.classList.remove("block");
    nav.classList.add("hidden");
    restablecerDocumento();

    const disparador = obtenerDisparador(nav);
    mostrarDisparador(disparador);
    nav.setAttribute("aria-hidden", esEscritorio() ? "false" : "true");

    if (
        restaurarFoco &&
        estabaAbierto &&
        disparador instanceof HTMLElement &&
        disparador.isConnected &&
        !esEscritorio()
    ) {
        window.requestAnimationFrame(() => disparador.focus());
    }
}

export function abrirMenuMovil(nav, disparador) {
    if (!nav || esEscritorio()) return;

    if (menuAbierto && menuAbierto !== nav) {
        cerrarMenuMovil(menuAbierto, { restaurarFoco: false });
    }

    nav._disparadorMenu = disparador || obtenerDisparador(nav);
    menuAbierto = nav;
    nav.classList.remove("hidden");
    nav.classList.add("block");
    nav.setAttribute("aria-hidden", "false");
    overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    documentoBloqueadoPorMenu = true;
    ocultarDisparador(nav._disparadorMenu);
    hacerFondoInerte();

    eliminarOverlay();
    const overlay = document.createElement("div");
    overlay.dataset.navOverlay = "true";

    // La cabecera crea un contexto de apilamiento en z-[200].
    // El fondo debe quedar por debajo de esa cabecera para no oscurecer
    // ni desenfocar el panel lateral, pero por encima del contenido principal.
    overlay.className = "fixed inset-0 z-[190] bg-slate-950/55 backdrop-blur-[2px] lg:hidden";
    overlay.addEventListener("click", () => cerrarMenuMovil(nav), { once: true });
    document.body.appendChild(overlay);

    controladorMenu = new AbortController();
    document.addEventListener(
        "keydown",
        (event) => {
            if (menuAbierto !== nav) return;

            if (event.key === "Escape") {
                event.preventDefault();
                cerrarMenuMovil(nav);
                return;
            }

            if (event.key !== "Tab") return;
            const controles = controlesFoco(nav);
            if (!controles.length) {
                event.preventDefault();
                return;
            }

            const primero = controles[0];
            const ultimo = controles.at(-1);

            if (event.shiftKey && document.activeElement === primero) {
                event.preventDefault();
                ultimo.focus();
            } else if (!event.shiftKey && document.activeElement === ultimo) {
                event.preventDefault();
                primero.focus();
            }
        },
        { signal: controladorMenu.signal }
    );

    window.requestAnimationFrame(() => {
        nav.querySelector('[data-action="close-navBar"]')?.focus();
    });
}

export { CONSULTA_ESCRITORIO };
