(() => {
  "use strict";

  if (window.KernelValuesExtension?.version === "3.0.0") return;

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
      String(document.documentElement.lang || "")
        .toLowerCase()
        .startsWith("en")
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
      commitmentConfidentiality:
        "Confidencialidad, integridad académica y protección de la información.",
      commitmentLoyalty:
        "Lealtad institucional, respeto y compromiso con los objetivos comunes."
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
      commitmentConfidentiality:
        "Confidentiality, academic integrity, and protection of information.",
      commitmentLoyalty:
        "Institutional loyalty, respect, and commitment to shared goals."
    }
  };

  function matchingElements(root, selector) {
    return [...root.querySelectorAll(selector)]
      .filter(element => normalize(element.textContent));
  }

  function findDetailedTemplate() {
    return matchingElements(document, "p, li").find(element => {
      const text = normalize(element.textContent);

      return (
        text.startsWith("excelencia docente:") ||
        text.startsWith("teaching excellence:")
      );
    }) || null;
  }

  function createDetailedValue(template, item, index, lang) {
    const element = template.cloneNode(false);

    element.removeAttribute("id");
    element.dataset.kernelAddedValue = String(index + 1);
    element.dataset.kernelValuesLanguage = lang;

    const strong = document.createElement("strong");
    strong.textContent = `${item.label} `;

    element.replaceChildren(
      strong,
      document.createTextNode(item.text)
    );

    return element;
  }

  function updateDetailedValues(lang) {
    const template = findDetailedTemplate();

    if (!template || !template.parentElement) {
      return false;
    }

    const parent = template.parentElement;
    const desired = COPY[lang].detailed;

    const existing = [
      ...parent.querySelectorAll("[data-kernel-added-value]")
    ];

    const alreadyCorrect =
      existing.length === desired.length &&
      existing.every((element, index) => {
        const expected = normalize(
          `${desired[index].label} ${desired[index].text}`
        );

        return (
          element.dataset.kernelValuesLanguage === lang &&
          normalize(element.textContent) === expected
        );
      });

    if (alreadyCorrect) return true;

    existing.forEach(element => element.remove());

    let anchor = template;

    desired.forEach((item, index) => {
      const element = createDetailedValue(
        template,
        item,
        index,
        lang
      );

      anchor.insertAdjacentElement("afterend", element);
      anchor = element;
    });

    return true;
  }

  function commitmentHeading() {
    return matchingElements(
      document,
      "h1, h2, h3, h4, p, span, div"
    ).find(element => {
      const text = normalize(element.textContent);

      return (
        text === "nuestro compromiso institucional" ||
        text === "our institutional commitment"
      );
    }) || null;
  }

  function commitmentPanel() {
    const heading = commitmentHeading();

    if (!heading) return null;

    let node = heading.parentElement;

    for (
      let depth = 0;
      node && depth < 7;
      depth += 1, node = node.parentElement
    ) {
      const text = normalize(node.textContent);

      const hasRigor =
        text.includes("rigor cientifico") ||
        text.includes("scientific rigor");

      const hasReproducibility =
        text.includes("reproducibilidad") ||
        text.includes("reproducibility");

      if (hasRigor && hasReproducibility) {
        return node;
      }
    }

    return heading.parentElement;
  }

  function commitmentItems(panel) {
    return matchingElements(panel, "p, li");
  }

  function findCommitmentItem(items, expressions) {
    return items.find(element => {
      const text = normalize(element.textContent);

      return expressions.some(expression =>
        text.includes(expression)
      );
    }) || null;
  }

  function itemPrefix(element) {
    const text = String(element.textContent || "");

    const match = text.match(/^(\s*[•·▪‣*-]\s*)/);

    if (match) return match[1];

    if (element.tagName === "LI") return "";

    return "• ";
  }

  function setCommitmentText(
    element,
    text,
    lang,
    identifier
  ) {
    if (!element) return;

    const desired = `${itemPrefix(element)}${text}`;

    if (element.textContent !== desired) {
      element.textContent = desired;
    }

    element.dataset.kernelValuesLanguage = lang;
    element.dataset.kernelCommitmentValue = identifier;
  }

  function cloneCommitmentItem(
    template,
    text,
    lang,
    identifier
  ) {
    const element = template.cloneNode(false);

    element.removeAttribute("id");

    setCommitmentText(
      element,
      text,
      lang,
      identifier
    );

    return element;
  }

  function updateCommitmentValues(lang) {
    const panel = commitmentPanel();

    if (!panel) return false;

    const copy = COPY[lang];

    let items = commitmentItems(panel);

    const reproducibility = findCommitmentItem(items, [
      "reproducibilidad",
      "reproducibility"
    ]);

    const rigor = findCommitmentItem(items, [
      "rigor cientifico",
      "scientific rigor"
    ]);

    let confidentiality = findCommitmentItem(items, [
      "confidencialidad",
      "confidentiality"
    ]);

    if (confidentiality) {
      setCommitmentText(
        confidentiality,
        copy.commitmentConfidentiality,
        lang,
        "confidentiality"
      );
    } else {
      const template =
        reproducibility ||
        rigor ||
        items[0];

      if (template && template.parentElement) {
        confidentiality = cloneCommitmentItem(
          template,
          copy.commitmentConfidentiality,
          lang,
          "confidentiality"
        );

        template.insertAdjacentElement(
          "afterend",
          confidentiality
        );
      }
    }

    items = commitmentItems(panel);

    let loyalty = findCommitmentItem(items, [
      "lealtad institucional",
      "institutional loyalty"
    ]);

    if (loyalty) {
      setCommitmentText(
        loyalty,
        copy.commitmentLoyalty,
        lang,
        "loyalty"
      );
    } else {
      const template =
        confidentiality ||
        reproducibility ||
        rigor ||
        items[0];

      if (template && template.parentElement) {
        loyalty = cloneCommitmentItem(
          template,
          copy.commitmentLoyalty,
          lang,
          "loyalty"
        );

        template.insertAdjacentElement(
          "afterend",
          loyalty
        );
      }
    }

    return Boolean(confidentiality || loyalty);
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

  function scheduleSeries() {
    [0, 80, 250, 700].forEach(delay => {
      window.setTimeout(apply, delay);
    });
  }

  new MutationObserver(mutations => {
    if (applying) return;

    const relevant = mutations.some(mutation =>
      mutation.type === "characterData" ||
      mutation.addedNodes.length > 0
    );

    if (relevant) schedule();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  window.addEventListener(
    "hashchange",
    scheduleSeries
  );

  window.addEventListener(
    "pageshow",
    scheduleSeries
  );

  window.addEventListener(
    "kernel-language-change",
    scheduleSeries
  );

  document.addEventListener(
    "kernel-language-change",
    scheduleSeries
  );

  document.addEventListener(
    "DOMContentLoaded",
    scheduleSeries
  );

  window.KernelValuesExtension = {
    version: "3.0.0",
    apply,
    diagnostics: () => ({
      language: language(),
      detailedValues:
        document.querySelectorAll(
          "[data-kernel-added-value]"
        ).length,
      commitmentValues:
        document.querySelectorAll(
          "[data-kernel-commitment-value]"
        ).length
    })
  };

  scheduleSeries();
})();
