export function initAccordion(container) {
  const headers = container.querySelectorAll("[data-accordion-header]");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector("[data-accordion-icon]");

      const isOpen = content.classList.contains("max-h-[1000px]");

      // Cerrar todos
      container.querySelectorAll("[data-accordion-content]").forEach(c => {
        c.classList.remove("max-h-[1000px]");
        c.classList.add("max-h-0");
      });

      container.querySelectorAll("[data-accordion-icon]").forEach(i => {
        i.classList.remove("rotate-180");
      });

      // Abrir el actual si estaba cerrado
      if (!isOpen) {
        content.classList.remove("max-h-0");
        content.classList.add("max-h-[1000px]");
        icon.classList.add("rotate-180");
      }
    });
  });
}
