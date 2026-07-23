import {
    abrirMenuMovil,
    cerrarMenuMovil,
    sincronizarMenuConViewport,
    CONSULTA_ESCRITORIO
} from "./NavBarMobile.js";

export function DisplayNavBar(iconoMenu, navBar) {
    if (!iconoMenu || !navBar) return;

    iconoMenu.setAttribute("aria-expanded", "false");
    iconoMenu.setAttribute("aria-controls", "navBar");
    navBar._disparadorMenu = iconoMenu;

    sincronizarMenuConViewport(navBar);
    iconoMenu.addEventListener("click", () => abrirMenuMovil(navBar, iconoMenu));

    const consultaEscritorio = window.matchMedia(CONSULTA_ESCRITORIO);
    consultaEscritorio.addEventListener("change", () => {
        sincronizarMenuConViewport(navBar);
    });
    window.addEventListener("hashchange", () => {
        cerrarMenuMovil(navBar, { restaurarFoco: false });
    });
}
