export function closeNavBar(nav) {
    if (!nav) return;

    const cerrar = nav.querySelector('[data-action="close-navBar"]');
    if (!cerrar) return;

    cerrar.addEventListener("click", () => {
        nav.classList.remove("block");
        nav.classList.add("hidden");
        document.body.style.overflow = "";
    });
}
