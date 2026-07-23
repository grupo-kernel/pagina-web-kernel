import { DisplaySubMenu } from "./DisplaySubMenu.js";
import { DisplayNavBar } from "./DisplayNavBar.js";
import { closeNavBar } from "./CloseNavBar.js";
import { navigate, routerInit } from "../../routes/route.js";
import { onNavigate } from "./onNavigate.js";

function rutaVisibleEnNavegacion(ruta) {
    if (
        /^(?:laboratorioKernel|asistentePruebas|comparacionGrupos|calculadora|correlacionAsociacion|bibliotecaMetodologica|regresionModelos)/.test(
            ruta
        )
    ) {
        return "laboratorioKernel";
    }

    return ruta;
}

function actualizarRutaActiva(nav) {
    const ruta = window.location.hash.replace("#/", "") || "home";
    const rutaVisible = rutaVisibleEnNavegacion(ruta);

    nav.querySelectorAll("[data-route]").forEach((control) => {
        if (control.dataset.route === rutaVisible) {
            control.setAttribute("aria-current", "page");
        } else {
            control.removeAttribute("aria-current");
        }
    });
}

export function initNavBar(nav, header) {
    if (!nav || !header) return;

    onNavigate(nav, navigate);
    DisplaySubMenu(nav);

    const iconoMenu = header.querySelector('[data-action="open-menu"]');
    if (iconoMenu) DisplayNavBar(iconoMenu, nav);

    closeNavBar(nav);
    actualizarRutaActiva(nav);
    window.addEventListener("hashchange", () => actualizarRutaActiva(nav));
    routerInit();
}
