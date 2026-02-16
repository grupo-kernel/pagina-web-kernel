import { navigate } from "../../routes/route";

export function equipoFormacion(navEquiment) {
    navEquiment.addEventListener('click', (e) => {
        const item = e.target.closest("[data-route]");
        if (!item) return;
        const currentRoute = window.location.hash.replace("#/", "") || "equipment";
        if (item.dataset.route === currentRoute) return;
        
        navigate(item.dataset.route);
    });
}