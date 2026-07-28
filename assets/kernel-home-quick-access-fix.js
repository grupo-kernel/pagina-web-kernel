(() => {
  "use strict";

  if (window.KernelHomeQuickAccessFix?.version === "5.0.0") return;

  const SOURCE_SELECTOR =
    ".kernel-home-2b__quick-card[data-kernel-home-route]";
  const NATIVE_SELECTOR =
    ".kernel-home-2b__quick-card[data-kernel-quick-route]";
  const PROJECT_IDS = [
    "uasd-dinamica-sin-jacobiana",
    "fondocyt-transporte-nutrientes",
    "fondocyt-optimizacion-hibrida-redes-econometria"
  ];

  let timer = 0;
  let projectsPromise = null;

  const normalize = value => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const escapeHtml = value => String(value ?? "").replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]
  );

  const isEnglish = () => {
    const lang = String(document.documentElement.lang || "").toLowerCase();
    const saved = String(
      localStorage.getItem("kernel-language") ||
      localStorage.getItem("language") ||
      localStorage.getItem("lang") ||
      ""
    ).toLowerCase();
    return lang.startsWith("en") || saved === "en";
  };

  const isFormationTarget = target =>
    target === "formacion" || target === "quienesSomos/formacion";

  function destination(target) {
    const url = new URL(window.location.href);
    url.searchParams.delete("investigador");

    if (isFormationTarget(target)) {
      url.searchParams.set("kernelSection", "formacion");
      url.hash = "#/quienesSomos";
      return url.toString();
    }

    url.searchParams.delete("kernelSection");
    const routes = {
      equipment: "#/equipment",
      publicaciones: "#/publicaciones",
      proyectos: "#/proyectos",
      quienesSomos: "#/quienesSomos"
    };
    const hash = routes[target];
    if (!hash) return "";
    url.hash = hash;
    return url.toString();
  }

  function findFormationMenuButton() {
    const candidates = [
      ...document.querySelectorAll(
        "#navBar button, #navBar a, [data-site-header] button, [data-site-header] a"
      )
    ];

    return candidates.find(element => {
      const text = normalize(element.textContent);
      return text === "formacion academica" ||
        text === "academic background" ||
        text === "academic formation";
    }) || null;
  }

  function openFormation() {
    const menuButton = findFormationMenuButton();
    if (menuButton) {
      menuButton.click();
      return true;
    }

    const href = destination("formacion");
    if (!href) return false;
    window.location.assign(href);
    return true;
  }

  function prepareNativeLink(link, target) {
    const href = destination(target);
    if (!href) return false;

    link.href = href;
    link.dataset.kernelQuickRoute = target;
    link.dataset.kernelNativeLink = "true";
    link.removeAttribute("data-kernel-home-route");
    link.removeAttribute("type");
    link.style.display = "block";
    link.style.textDecoration = "none";
    link.style.cursor = "pointer";
    return true;
  }

  function convertElement(element) {
    if (!element) return false;
    const target =
      element.dataset.kernelHomeRoute ||
      element.dataset.kernelQuickRoute ||
      "";
    if (!target) return false;

    if (element.tagName === "A") {
      return prepareNativeLink(element, target);
    }

    const link = document.createElement("a");
    [...element.attributes].forEach(attribute => {
      if (
        attribute.name !== "type" &&
        attribute.name !== "data-kernel-home-route" &&
        attribute.name !== "data-kernel-native-link"
      ) {
        link.setAttribute(attribute.name, attribute.value);
      }
    });
    link.innerHTML = element.innerHTML;
    if (!prepareNativeLink(link, target)) return false;
    element.replaceWith(link);
    return true;
  }

  function handleQuickAccess(event) {
    const link = event.target.closest?.(NATIVE_SELECTOR);
    if (!link) return;
    const target = link.dataset.kernelQuickRoute || "";
    if (!isFormationTarget(target)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openFormation();
  }

  function loadProjects() {
    if (!projectsPromise) {
      projectsPromise = fetch("./core/data/projects.v2.json", {
        cache: "no-store"
      }).then(response => {
        if (!response.ok) throw new Error(`projects ${response.status}`);
        return response.json();
      });
    }
    return projectsPromise;
  }

  function projectStatus(project) {
    const status = String(project?.status || "").toLowerCase();
    if (status === "approved") return isEnglish() ? "Approved" : "Aprobado";
    if (status === "under-review") return isEnglish() ? "Under review" : "En evaluación";
    return isEnglish() ? "Featured" : "Destacado";
  }

  function projectTitle(project) {
    return isEnglish() && project?.title_en
      ? project.title_en
      : project?.title || project?.name || "";
  }

  async function updateCurrentProjects() {
    if (!location.hash || /^#\/?(?:home)?(?:[/?]|$)/i.test(location.hash)) {
      const grid = document.querySelector(".kernel-home-2b__projects");
      if (!grid) return;

      try {
        const data = await loadProjects();
        const records = [
          ...(Array.isArray(data.approved_projects) ? data.approved_projects : []),
          ...(Array.isArray(data.proposals) ? data.proposals : [])
        ];
        const selected = PROJECT_IDS
          .map(id => records.find(project => project?.id === id))
          .filter(Boolean);
        if (selected.length !== PROJECT_IDS.length) return;

        const signature = `${isEnglish() ? "en" : "es"}:${PROJECT_IDS.join(":")}`;
        if (grid.dataset.kernelCurrentProjects === signature) return;

        grid.innerHTML = selected.map(project => `
          <article
            class="kernel-home-2b__project"
            data-kernel-home-project="${escapeHtml(project.id)}"
          >
            <span>${escapeHtml(projectStatus(project))}</span>
            <h3>${escapeHtml(projectTitle(project))}</h3>
          </article>
        `).join("");
        grid.dataset.kernelCurrentProjects = signature;
      } catch (error) {
        console.error("No fue posible actualizar los proyectos de la portada.", error);
      }
    }
  }

  function apply() {
    document
      .querySelectorAll(`${SOURCE_SELECTOR}, ${NATIVE_SELECTOR}`)
      .forEach(convertElement);
    updateCurrentProjects();
  }

  function schedule(delay = 30) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (mutations.some(mutation => mutation.addedNodes.length > 0)) schedule();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  document.addEventListener("click", handleQuickAccess, true);
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", () => {
    const grid = document.querySelector(".kernel-home-2b__projects");
    if (grid) delete grid.dataset.kernelCurrentProjects;
    schedule();
  });
  document.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelHomeQuickAccessFix = {
    version: "5.0.0",
    apply,
    destination,
    openFormation,
    updateCurrentProjects,
    diagnostics: () => ({
      pendingButtons: document.querySelectorAll(SOURCE_SELECTOR).length,
      nativeLinks: document.querySelectorAll(NATIVE_SELECTOR).length,
      formationMenuFound: Boolean(findFormationMenuButton()),
      formationHref: destination("formacion"),
      homepageProjects: [...document.querySelectorAll(
        ".kernel-home-2b__project[data-kernel-home-project]"
      )].map(card => card.dataset.kernelHomeProject)
    })
  };

  [0, 100, 300, 800].forEach(delay => window.setTimeout(apply, delay));
})();