export function DisplaySubMenu(nav) {
    if (!nav || nav.dataset.submenusInicializados === "true") return;

    const elementos = [...nav.querySelectorAll("[data-submenu]")];
    const escritorio = window.matchMedia("(min-width: 1024px)");

    function obtenerPartes(elemento) {
        return {
            disparador: elemento.querySelector(":scope > [data-action='toggle-submenu']"),
            panel: elemento.querySelector(":scope > [data-submenu-panel]"),
            indicador: elemento.querySelector(":scope > [data-action='toggle-submenu'] [data-submenu-caret]")
        };
    }

    function establecerEstado(elemento, abierto) {
        const { disparador, panel, indicador } = obtenerPartes(elemento);
        if (!disparador || !panel) return;

        disparador.setAttribute("aria-expanded", String(abierto));
        panel.classList.toggle("hidden", !abierto);
        panel.classList.toggle("flex", abierto);
        indicador?.classList.toggle("rotate-180", abierto);
    }

    function cerrarTodos(excepto = null) {
        elementos.forEach((elemento) => {
            if (elemento !== excepto) establecerEstado(elemento, false);
        });
    }

    elementos.forEach((elemento) => {
        const { disparador, panel } = obtenerPartes(elemento);
        if (!disparador || !panel) return;

        disparador.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const abrir = disparador.getAttribute("aria-expanded") !== "true";
            cerrarTodos(elemento);
            establecerEstado(elemento, abrir);
        });

        elemento.addEventListener("mouseenter", () => {
            if (!escritorio.matches) return;
            cerrarTodos(elemento);
            establecerEstado(elemento, true);
        });

        elemento.addEventListener("mouseleave", () => {
            if (escritorio.matches) establecerEstado(elemento, false);
        });

        panel.addEventListener("click", (event) => {
            if (event.target.closest("[data-route]")) {
                establecerEstado(elemento, false);
            }
        });
    });

    nav.addEventListener("click", (event) => {
        if (event.target.closest("[data-route]")) cerrarTodos();
    });

    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target)) cerrarTodos();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            cerrarTodos();
            nav.querySelector("[data-action='toggle-submenu'][aria-expanded='true']")?.focus();
        }
    });

    escritorio.addEventListener("change", () => cerrarTodos());
    nav.dataset.submenusInicializados = "true";
}
