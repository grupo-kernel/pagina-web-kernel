function obtenerPartes(item) {
    return {
        disparador: item.querySelector('[data-action="open-subMenu"]'),
        panel: item.querySelector("[data-submenu-panel]"),
        icono: item.querySelector('[data-action="open-subMenu"] i')
    };
}

export function DisplaySubMenu(nav) {
    const submenus = [...nav.querySelectorAll("[data-submenu]")];

    const cerrar = (item) => {
        const { disparador, panel, icono } = obtenerPartes(item);
        if (!disparador || !panel) return;

        panel.classList.remove("flex");
        panel.classList.add("hidden");
        disparador.setAttribute("aria-expanded", "false");
        icono?.classList.remove("rotate-180");
    };

    const abrir = (item) => {
        submenus.forEach((otro) => {
            if (otro !== item) cerrar(otro);
        });

        const { disparador, panel, icono } = obtenerPartes(item);
        if (!disparador || !panel) return;

        panel.classList.remove("hidden");
        panel.classList.add("flex");
        disparador.setAttribute("aria-expanded", "true");
        icono?.classList.add("rotate-180");
    };

    submenus.forEach((item) => {
        const { disparador, panel } = obtenerPartes(item);
        if (!disparador || !panel) return;

        disparador.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const estaAbierto = disparador.getAttribute("aria-expanded") === "true";
            if (estaAbierto) cerrar(item);
            else abrir(item);
        });

        disparador.addEventListener("keydown", (event) => {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                abrir(item);
                panel.querySelector("[data-route]")?.focus?.();
            } else if (event.key === "Escape") {
                event.preventDefault();
                cerrar(item);
            }
        });

        panel.addEventListener("click", (event) => {
            const objetivo = event.target instanceof Element
                ? event.target.closest("[data-route]")
                : null;

            if (objetivo) cerrar(item);
        });
    });

    nav.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        submenus.forEach(cerrar);
    });

    document.addEventListener("click", (event) => {
        if (!(event.target instanceof Node) || nav.contains(event.target)) return;
        submenus.forEach(cerrar);
    });
}
