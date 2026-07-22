function cerrarMenuMovil(nav) {
    if (window.matchMedia("(min-width: 1024px)").matches) return;

    nav.classList.remove("block");
    nav.classList.add("hidden");
    document.body.style.overflow = "";
}

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
