(() => {
  "use strict";
  if (window.KernelValuesExtension) return;

  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const language = () => {
    const saved = String(
      localStorage.getItem("kernel-language") ||
      localStorage.getItem("language") ||
      localStorage.getItem("lang") ||
      ""
    ).toLowerCase();

    return saved === "en" ||
      String(document.documentElement.lang || "").toLowerCase().startsWith("en")
      ? "en"
      : "es";
  };

  const COPY = {
    es: [
      {
        label: "Confidencialidad:",
        text: "Protección responsable de la información sensible, los datos, los resultados y las ideas compartidas dentro de los proyectos."
      },
      {
        label: "Lealtad:",
        text: "Compromiso ético con el grupo, sus integrantes, las instituciones colaboradoras y los objetivos científicos comunes."
      }
    ],
    en: [
      {
        label: "Confidentiality:",
        text: "Responsible protection of sensitive information, data, results, and ideas shared within projects."
      },
      {
        label: "Loyalty:",
        text: "Ethical commitment to the group, its members, partner institutions, and shared scientific goals."
      }
    ]
  };

  function findTemplate() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);

    while (walker.nextNode()) {
      const element = walker.currentNode;
      const text = normalize(element.textContent);

      if (
        /Rigor científico:|Scientific rigor:/i.test(text) &&
        /Excelencia docente:|Teaching excellence:/i.test(text)
      ) {
        const candidates = [...element.querySelectorAll(":scope > p, :scope > li")];
        if (candidates.length) return candidates[candidates.length - 1];
      }
    }

    const direct = [...document.querySelectorAll("p, li")].find(element =>
      /Excelencia docente:|Teaching excellence:/i.test(normalize(element.textContent))
    );

    return direct || null;
  }

  function createValue(template, item, index) {
    const element = template.cloneNode(false);
    element.dataset.kernelAddedValue = String(index + 1);

    const strong = document.createElement("strong");
    strong.textContent = `${item.label} `;

    element.replaceChildren(strong, document.createTextNode(item.text));
    return element;
  }

  function apply() {
    if (applying || !document.body) return false;
    applying = true;

    try {
      const template = findTemplate();
      if (!template || !template.parentElement) return false;

      const parent = template.parentElement;
      parent.querySelectorAll("[data-kernel-added-value]").forEach(node => node.remove());

      COPY[language()].forEach((item, index) => {
        parent.appendChild(createValue(template, item, index));
      });

      return true;
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 40) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    const added = mutations.some(mutation => mutation.addedNodes.length > 0);
    if (added) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelValuesExtension = {
    version: "1.0.0",
    apply
  };

  schedule();
})();