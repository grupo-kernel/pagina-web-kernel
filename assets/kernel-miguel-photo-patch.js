(() => {
  "use strict";

  const TARGET = "miguel.jpg?v=20260725-1";
  const NAME = "miguel a. leonardo sepulveda";
  const MARK = "kernel-miguel-photo";

  const normalize = (value) => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  function replaceImage(image) {
    if (!image || image.dataset[MARK] === "true") return;
    image.src = TARGET;
    image.removeAttribute("srcset");
    image.dataset[MARK] = "true";
    image.alt = image.alt || "Miguel A. Leonardo Sepúlveda";
    image.style.objectPosition = "center top";
  }

  function imageContainerFrom(label) {
    let node = label;
    for (let depth = 0; node && depth < 7; depth += 1, node = node.parentElement) {
      const text = normalize(node.textContent);
      const image = node.querySelector?.("img");
      if (image && text.includes(NAME) && text.length < 2500) return image;
    }
    return null;
  }

  function apply() {
    document.querySelectorAll("img").forEach((image) => {
      const descriptor = normalize(`${image.alt || ""} ${image.title || ""}`);
      if (descriptor.includes("miguel") && descriptor.includes("leonardo")) replaceImage(image);
    });

    document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span,strong,button,a").forEach((element) => {
      const text = normalize(element.textContent);
      if (text.includes(NAME)) replaceImage(imageContainerFrom(element));
    });
  }

  let scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      apply();
    });
  }

  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  document.addEventListener("DOMContentLoaded", schedule, { once: true });
  schedule();
})();
