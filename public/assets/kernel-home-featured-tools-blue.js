(() => {
  "use strict";

  const STYLE_ID = "kernel-home-featured-tools-blue";
  const CARD_SELECTOR =
    ".kernel-home-2b__aside .kernel-home-2b__tool";
  const CARD_BACKGROUND = [
    "radial-gradient(circle at 88% 82%, rgba(130, 189, 255, 0.30), transparent 38%)",
    "linear-gradient(135deg, #082f63 0%, #0b4e88 42%, #1267ca 72%, #2679df 100%)"
  ].join(", ");
  const BUTTON_BACKGROUND =
    "linear-gradient(135deg, #1267ca 0%, #2679df 100%)";

  function setImportant(element, property, value) {
    if (!element) return;

    if (
      element.style.getPropertyValue(property) === value &&
      element.style.getPropertyPriority(property) === "important"
    ) {
      return;
    }

    element.style.setProperty(property, value, "important");
  }

  function ensureSharedStyle() {
    let style = document.getElementById(STYLE_ID);

    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }

    style.textContent = `
      ${CARD_SELECTOR}::after {
        background: rgba(130, 189, 255, 0.20) !important;
      }

      ${CARD_SELECTOR}:hover > span,
      ${CARD_SELECTOR}:focus-visible > span {
        background-image: linear-gradient(
          135deg,
          #2679df 0%,
          #5ea7ff 100%
        ) !important;
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        transform: translateY(-1px);
      }
    `;
  }

  function applyCardTheme(card) {
    setImportant(card, "background-image", CARD_BACKGROUND);
    setImportant(card, "background-color", "#0b4e88");
    setImportant(
      card,
      "border",
      "1px solid rgba(130, 189, 255, 0.48)"
    );
    setImportant(
      card,
      "box-shadow",
      "0 12px 28px rgba(18, 103, 202, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.12)"
    );
    setImportant(card, "color", "#ffffff");

    card.querySelectorAll(
      "h3, p, .kernel-home-2b__tool-icon"
    ).forEach(element => {
      setImportant(element, "color", "#ffffff");
      setImportant(element, "-webkit-text-fill-color", "#ffffff");
    });

    card.querySelectorAll(":scope > span").forEach(control => {
      setImportant(control, "background-image", BUTTON_BACKGROUND);
      setImportant(control, "background-color", "#1267ca");
      setImportant(control, "color", "#ffffff");
      setImportant(control, "-webkit-text-fill-color", "#ffffff");
      setImportant(
        control,
        "border",
        "1px solid rgba(255, 255, 255, 0.40)"
      );
      setImportant(
        control,
        "box-shadow",
        "0 7px 18px rgba(4, 36, 78, 0.30)"
      );

      control.querySelectorAll("*").forEach(child => {
        setImportant(child, "color", "#ffffff");
        setImportant(child, "-webkit-text-fill-color", "#ffffff");
        setImportant(child, "fill", "currentColor");
        setImportant(child, "stroke", "currentColor");
      });
    });

    card.dataset.kernelFeaturedToolBlue = "true";
  }

  function applyTheme(root = document) {
    ensureSharedStyle();

    const cards = [];
    if (root instanceof Element && root.matches(CARD_SELECTOR)) {
      cards.push(root);
    }
    cards.push(...root.querySelectorAll(CARD_SELECTOR));

    cards.forEach(applyCardTheme);
  }

  let frame = 0;
  function schedule(root = document) {
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      applyTheme(root);
    });
  }

  function startObserver() {
    const main = document.getElementById("main");
    if (!main || main.dataset.kernelFeaturedToolsObserver === "true") {
      return;
    }

    main.dataset.kernelFeaturedToolsObserver = "true";
    const observer = new MutationObserver(mutations => {
      const relevant = mutations.some(mutation =>
        [...mutation.addedNodes].some(node =>
          node instanceof Element &&
          (
            node.matches(CARD_SELECTOR) ||
            Boolean(node.querySelector?.(CARD_SELECTOR))
          )
        )
      );

      if (relevant) schedule(main);
    });

    observer.observe(main, {
      childList: true,
      subtree: true
    });
  }

  function initialize() {
    applyTheme();
    startObserver();
  }

  initialize();
  document.addEventListener("DOMContentLoaded", initialize, {
    once: true
  });
  window.addEventListener("load", initialize, { once: true });
  window.addEventListener("pageshow", initialize);
  window.addEventListener("hashchange", () => schedule());
})();
