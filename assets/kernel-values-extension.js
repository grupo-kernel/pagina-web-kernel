(() => {
  "use strict";
  if (window.KernelValuesExtension) return;

  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

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
    es: {
      detailed: [
        {
          label: "Confidencialidad:",
          text: "Protección responsable de la información sensible, los datos, los resultados, las comunicaciones internas y las ideas compartidas en los proyectos."
        },
        {
          label: "Lealtad:",
          text: "Compromiso ético con el grupo, sus integrantes, las instituciones colaboradoras y los objetivos científicos comunes, actuando con respeto, transparencia y responsabilidad."
        }
      ],
      commitmentConfidentiality: "Confidencialidad, integridad académica y protección de la información.",
      commitmentLoyalty: "Lealtad institucional, respeto y compromiso con los objetivos comunes."
    },
    en: {
      detailed: [
        {
          label: "Confidentiality:",
          text: "Responsible protection of sensitive information, data, results, internal communications, and ideas shared within projects."
        },
        {
          label: "Loyalty:",
          text: "Ethical commitment to the group, its members, partner institutions, and shared scientific goals, acting with respect, transparency, and responsibility."
        }
      ],
      commitmentConfidentiality: "Confidentiality, academic integrity, and protection of information.",
      commitmentLoyalty: "Institutional loyalty, respect, and commitment to shared goals."
    }
  };

  function leafElements(root = document) {
    return [...root.querySelectorAll("p,li,span,div,h1,h2,h3,h4")]
      .filter(element => element.children.length === 0 && normalize(element.textContent));
  }

  function findDetailedTemplate() {
    return leafElements().find(element => {
      const text = normalize(element.textContent);
      return text.startsWith("excelencia docente:") || text.startsWith("teaching excellence:");
    }) || null;
  }

  function createDetailedValue(template, item, index, lang) {
    const element = template.cloneNode(false);
    element.dataset.kernelAddedValue = String(index + 1);
    element.dataset.kernelValuesLanguage = lang;

    const strong = document.createElement("strong");
    strong.textContent = `${item.label} `;
    element.replaceChildren(strong, document.createTextNode(item.text));
    return element;
  }

  function updateDetailedValues(lang) {
    const template = findDetailedTemplate();
    if (!template || !template.parentElement) return false;

    const parent = template.parentElement;
    const desired = COPY[lang].detailed;
    const existing = [...parent.querySelectorAll(":scope > [data-kernel-added-value]")];

    const alreadyCorrect = existing.length === desired.length && existing.every((element, index) => {
      const expected = normalize(`${desired[index].label} ${desired[index].text}`);
      return element.dataset.kernelValuesLanguage === lang && normalize(element.textContent) === expected;
    });

    if (alreadyCorrect) return true;

    existing.forEach(element => element.remove());
    let anchor = template;
    desired.forEach((item, index) => {
      const element = createDetailedValue(template, item, index, lang);
      anchor.insertAdjacentElement("afterend", element);
      anchor = element;
    });

    return true;
  }

  function commitmentPanel() {
    const heading = leafElements().find(element => {
      const text = normalize(element.textContent);
      return text === "nuestro compromiso institucional" || text === "our institutional commitment";
    });

    if (!heading) return null;

    let node = heading.parentElement;
    for (let depth = 0; node && depth < 5; depth += 1, node = node.parentElement) {
      const text = normalize(node.textContent);
      if (
        (text.includes("rigor cientifico") || text.includes("scientific rigor")) &&
        (text.includes("reproducibilidad") || text.includes("reproducibility"))
      ) {
        return node;
      }
    }

    return heading.parentElement;
  }

  function bulletPrefix(text) {
    const match = String(text || "").match(/^(\s*[•·▪‣*-]\s*)/);
    return match?.[1] || "• ";
  }

  function updateCommitmentValues(lang) {
    const panel = commitmentPanel();
    if (!panel) return false;

    const copy = COPY[lang];
    const leaves = leafElements(panel);

    let confidentiality = leaves.find(element => {
      const text = normalize(element.textContent);
      return text.includes("confidencialidad") || text.includes("confidentiality");
    });

    if (confidentiality) {
      const desired = `${bulletPrefix(confidentiality.textContent)}${copy.commitmentConfidentiality}`;
      if (confidentiality.textContent !== desired) confidentiality.textContent = desired;
    }

    const loyaltyExists = leafElements(panel).some(element => {
      const text = normalize(element.textContent);
      return text.includes("lealtad institucional") || text.includes("institutional loyalty");
    });

    if (!loyaltyExists) {
      const template = confidentiality || leaves.find(element => {
        const text = normalize(element.textContent);
        return text.includes("reproducibilidad") || text.includes("reproducibility");
      });

      if (template && template.parentElement) {
        const loyalty = template.cloneNode(false);
        loyalty.dataset.kernelCommitmentLoyalty = "true";
        loyalty.dataset.kernelValuesLanguage = lang;
        loyalty.textContent = `${bulletPrefix(template.textContent)}${copy.commitmentLoyalty}`;
        template.insertAdjacentElement("afterend", loyalty);
      }
    } else {
      leafElements(panel).forEach(element => {
        const text = normalize(element.textContent);
        if (text.includes("lealtad institucional") || text.includes("institutional loyalty")) {
          const desired = `${bulletPrefix(element.textContent)}${copy.commitmentLoyalty}`;
          if (element.textContent !== desired) element.textContent = desired;
          element.dataset.kernelValuesLanguage = lang;
        }
      });
    }

    return true;
  }

  function apply() {
    if (applying || !document.body) return false;
    applying = true;

    try {
      const lang = language();
      const detailed = updateDetailedValues(lang);
      const commitment = updateCommitmentValues(lang);
      return detailed || commitment;
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 45) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    const relevant = mutations.some(mutation =>
      mutation.type === "characterData" || mutation.addedNodes.length > 0
    );
    if (relevant) schedule();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelValuesExtension = {
    version: "2.0.0",
    apply
  };

  schedule();
})();