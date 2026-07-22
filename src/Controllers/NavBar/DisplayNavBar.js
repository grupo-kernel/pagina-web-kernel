import { abrirMenuMovil, cerrarMenuMovil } from "./NavBarMobile.js";

export function DisplayNavBar(iconoMenu, navBar) {
    if (!iconoMenu || !navBar) return;

    iconoMenu.setAttribute("aria-expanded", "false");
    iconoMenu.setAttribute("aria-controls", "navBar");

    iconoMenu.addEventListener("click", () => abrirMenuMovil(navBar, iconoMenu));

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || navBar.classList.contains("hidden")) return;
        cerrarMenuMovil(navBar);
        iconoMenu.focus?.();
    });
}
