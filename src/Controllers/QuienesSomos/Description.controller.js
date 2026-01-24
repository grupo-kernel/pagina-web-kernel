export function initDescriptionToggle() {
    const text = container.querySelector("[data-description-text]");
    const button = container.querySelector("[data-description-btn]");

    if (!text || !button) return;

    let expanded = false;

    button.addEventListener("click", () => {
        expanded = !expanded;

        text.classList.toggle("line-clamp-4", !expanded);
        button.textContent = expanded ? "Leer menos" : "Leer más";
    });
}
