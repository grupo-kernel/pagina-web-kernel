(() => {
  "use strict";

  if (window.KernelQuickAccessEmergencyFix) return;

  const CARD_SELECTOR = ".kernel-home-2b__quick-card";
  let timer = 0;

  const normalize = value => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  function targetFor(card) {
    const declared = card.dataset.kernelQuickRoute || card.dataset.kernelHomeRoute || "";
    if (declared) return declared;

    const text = normalize(card.textContent);
    if (text.includes("equipo") || text.includes("research team")) return "equipment";
    if (text.includes("formacion") || text.includes("academic background")) return "formacion";
    if (text.includes("publicaciones") || text.includes("publications")) return "publicaciones";
    if (text.includes("proyectos") || text.includes("projects")) return "proyectos";
    if (text.includes("perfiles") || text.includes("scientific profiles")) return "perfiles";
    return "";
  }

  function destination(target) {
    const normalized = normalize(target).replace(/\s+/g, "");
    const url = new URL(window.location.href);
    url.searchParams.delete("investigador");
    url.searchParams.delete("kernelProfile");

    if (["formacion", "quienessomos/formacion", "academicbackground"].includes(normalized)) {
      url.searchParams.set("kernelSection", "formacion");
      url.hash = "#/quienesSomos";
      return url.toString();
    }

    url.searchParams.delete("kernelSection");
    const routes = {
      equipment: "#/equipment",
      equipo: "#/equipment",
      publicaciones: "#/publicaciones",
      publications: "#/publicaciones",
      proyectos: "#/proyectos",
      projects: "#/proyectos",
      perfiles: "#/scientific-profiles",
      profiles: "#/scientific-profiles",
      scientificprofiles: "#/scientific-profiles",
      "scientific-profiles": "#/scientific-profiles"
    };

    const hash = routes[normalized];
    if (!hash) return "";
    url.hash = hash;
    return url.toString();
  }

  function prepareCard(card) {
    const target = targetFor(card);
    const href = destination(target);
    if (!target || !href) return false;

    card.dataset.kernelQuickRoute = target;
    card.dataset.kernelQuickAccessReady = "true";
    card.style.pointerEvents = "auto";
    card.style.cursor = "pointer";
    card.style.position = "relative";
    card.style.zIndex = "2";

    if (card.tagName === "A") {
      card.href = href;
    } else {
      card.setAttribute("role", "link");
      card.tabIndex = 0;
      card.dataset.kernelQuickHref = href;
    }

    [...card.querySelectorAll("*")].forEach(child => {
      child.style.pointerEvents = "none";
    });
    return true;
  }

  function navigate(card) {
    const target = targetFor(card);
    const href = destination(target);
    if (!href) return false;
    window.location.assign(href);
    return true;
  }

  function onClick(event) {
    const card = event.target.closest?.(CARD_SELECTOR);
    if (!card) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    navigate(card);
  }

  function onKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest?.(CARD_SELECTOR);
    if (!card) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    navigate(card);
  }

  function apply() {
    const cards = [...document.querySelectorAll(CARD_SELECTOR)];
    cards.forEach(prepareCard);
    return cards.length;
  }

  function schedule(delay = 25) {
    clearTimeout(timer);
    timer = setTimeout(apply, delay);
  }

  document.addEventListener("click", onClick, true);
  document.addEventListener("keydown", onKeydown, true);
  new MutationObserver(mutations => {
    if (mutations.some(mutation => mutation.addedNodes.length)) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelQuickAccessEmergencyFix = {
    version: "1.0.0",
    apply,
    destination,
    diagnostics: () => [...document.querySelectorAll(CARD_SELECTOR)].map(card => ({
      text: card.textContent.replace(/\s+/g, " ").trim(),
      target: targetFor(card),
      href: card.href || card.dataset.kernelQuickHref || "",
      ready: card.dataset.kernelQuickAccessReady === "true",
      pointerEvents: getComputedStyle(card).pointerEvents
    }))
  };

  [0, 100, 350, 900].forEach(delay => setTimeout(apply, delay));
})();