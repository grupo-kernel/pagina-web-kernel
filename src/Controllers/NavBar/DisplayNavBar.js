export function DisplayNavBar(iconoMenu, navBar) {
    if (!iconoMenu || !navBar) return;

    iconoMenu.addEventListener("click", () => {
        navBar.classList.remove("hidden");
        navBar.classList.add("block");
        document.body.style.overflow = "hidden";
    });
}
