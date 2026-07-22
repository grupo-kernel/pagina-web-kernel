import { cerrarMenuMovil } from "./NavBarMobile.js";

export function onNavigate(nav, navigate) {
    if (!nav) return;

    nav.addEventListener("click", (event) => {
        const item = event.target.closest("[data-route]");
        if (!item || !nav.contains(item)) return;

        event.preventDefault();
        navigate(item.dataset.route);
        cerrarMenuMovil(nav);
    });
}
