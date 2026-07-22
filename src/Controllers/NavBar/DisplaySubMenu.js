function establecerEstado(elemento, abierto) {
    const disparador = elemento.querySelector("[data-submenu-trigger]");
    const submenu = elemento.querySelector("ul");
    const icono = disparador?.querySelector("i");

    if (!disparador || !submenu) return;

    disparador.setAttribute("aria-expanded", String(abierto));
    submenu.classList.toggle("hidden", !abierto);
    submenu.classList.toggle("flex", abierto);

    if (icono) {
        icono.classList.toggle("bx-caret-down", !abierto);
        icono.classList.toggle("bx-caret-up", abierto);
    }
}

export function DisplaySubMenu(nav) {
    if (!nav || nav.dataset.submenusInicializados === "true") return;
    nav.dataset.submenusInicializados = "true";

    const elementos = [
        ...nav.querySelectorAll('[data-action="open-subMenu"]')
    ];

    const cerrarTodos = (excepto = null) => {
        elementos.forEach((elemento) => {
            if (elemento !== excepto) establecerEstado(elemento, false);
        });
    };

    elementos.forEach((elemento) => {
        const disparador = elemento.querySelector("[data-submenu-trigger]");
        const submenu = elemento.querySelector("ul");

        if (!disparador || !submenu) return;

        disparador.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const abrir = disparador.getAttribute("aria-expanded") !== "true";
            cerrarTodos(elemento);
            establecerEstado(elemento, abrir);
        });
    });

    nav.addEventListener("click", (event) => {
        if (event.target.closest("[data-route]")) cerrarTodos();
    });

    nav.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        cerrarTodos();
        nav.querySelector('[data-submenu-trigger][aria-expanded="true"]')?.focus();
    });

    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target)) cerrarTodos();
    });
}
