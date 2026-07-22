import { cerrarMenuMovil } from "./NavBarMobile.js";

export function closeNavBar(nav) {
    if (!nav) return;

    const cerrar = nav.querySelector('[data-action="close-navBar"]');
    if (!cerrar) return;

    cerrar.addEventListener("click", () => cerrarMenuMovil(nav));
}
