(() => {
  "use strict";

  if (window.KernelNameDegreeFix) return;

  const STYLE_ID = "kernel-name-degree-fix-styles";
  const JOSE_ID = "jose-alberto-reyes";
  const JOSE_NAME = "Jose Alberto Reyes Reyes";
  const JOSE_DEGREE = "Ph.D.";
  let timer = 0;
  let applying = false;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-degree-inline,
      .kernel-team-core__detail h2 small,
      .kernel-academic-profile-header h2 small{
        display:inline!important;
        margin:0!important;
        padding:0!important;
        font-family:inherit!important;
        font-size:1em!important;
        line-height:inherit!important;
        font-weight:inherit!important;
        letter-spacing:inherit!important;
        vertical-align:baseline!important;
        white-space:nowrap!important;
        color:inherit!important;
        text-transform:none!important;
      }
      .kernel-team-core__degree[data-kernel-degree-merged="true"],
      .kernel-academic-degree[data-kernel-degree-merged="true"],
      [data-kernel-academic-degree-hidden="true"]{
        display:none!important;
      }
      .kernel-team-core__card h2,
      .kernel-team-core__detail h2,
      .kernel-academic-person strong,
      .kernel-academic-profile-header h2{
        overflow-wrap:anywhere;
        text-wrap:balance;
      }
    `;
    document.head.appendChild(style);
  }

  const escapeRegExp = value => String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  function normalizeName(value, isJose = false, degree = "") {
    let text = String(value || "")
      .replace(/José Alberto Reyes Reyes/g, JOSE_NAME)
      .replace(/\s+/g, " ")
      .trim();

    const cleanDegree = String(degree || "").replace(/\s+/g, " ").trim();
    if (cleanDegree) {
      const escapedDegree = escapeRegExp(cleanDegree).replace(/\\ /g, "\\s+");
      text = text.replace(new RegExp(`(?:\\s+${escapedDegree})+$`, "i"), "").trim();
    }

    text = text
      .replace(/(?:\s+(?:Ph\.?D\.?|M\.?Sc\.?|MSc|B\.?Sc\.?|M\.?A\.?|Dr\.?))+$/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    if (isJose) text = JOSE_NAME;
    return text;
  }

  function degreeSpan(degree) {
    const span = document.createElement("span");
    span.className = "kernel-degree-inline";
    span.dataset.kernelDegreeInline = "true";
    span.textContent = degree;
    return span;
  }

  function normalizeHeading(heading, name, degree) {
    if (!heading || !name || !degree) return;
    const expected = `${name} ${degree}`;
    const current = heading.textContent.replace(/\s+/g, " ").trim();
    const inline = heading.querySelectorAll('[data-kernel-degree-inline="true"]');
    if (current === expected && inline.length === 1) return;
    heading.replaceChildren(document.createTextNode(`${name} `), degreeSpan(degree));
  }

  function correctJoseText(root = document) {
    root.querySelectorAll?.('img[alt*="José Alberto Reyes Reyes"]').forEach(image => {
      image.alt = image.alt.replace(/José Alberto Reyes Reyes/g, JOSE_NAME);
    });
  }

  function mergeCardDegrees(root = document) {
    root.querySelectorAll?.(".kernel-team-core__card").forEach(card => {
      const heading = card.querySelector("h2");
      const degreeBlock = card.querySelector(".kernel-team-core__degree");
      if (!heading || !degreeBlock) return;
      const researcherId = card.querySelector("[data-kernel-team-open]")?.dataset.kernelTeamOpen || "";
      const isJose = researcherId === JOSE_ID;
      const degree = isJose ? JOSE_DEGREE : String(degreeBlock.textContent || "").replace(/\s+/g, " ").trim();
      if (!degree) return;
      const name = normalizeName(heading.textContent, isJose, degree);
      normalizeHeading(heading, name, degree);
      if (isJose && degreeBlock.textContent !== JOSE_DEGREE) degreeBlock.textContent = JOSE_DEGREE;
      degreeBlock.dataset.kernelDegreeMerged = "true";
    });
  }

  function mergeProfileDegrees(root = document) {
    root.querySelectorAll?.(".kernel-team-core__detail").forEach(profile => {
      const heading = profile.querySelector("h2");
      if (!heading) return;
      const researcherId = profile.dataset.kernelProfilePanel || new URLSearchParams(location.search).get("kernelProfile") || "";
      const isJose = researcherId === JOSE_ID;
      const degree = isJose ? JOSE_DEGREE : String(heading.querySelector("small,[data-kernel-degree-inline]")?.textContent || "").replace(/\s+/g, " ").trim();
      if (!degree) return;
      const name = normalizeName(heading.textContent, isJose, degree);
      normalizeHeading(heading, name, degree);
      if (isJose) {
        profile.querySelectorAll("li").forEach(item => {
          const corrected = item.textContent.replace("Doctorado en Matemáticas — INTEC (en curso).", "Doctorado en Matemáticas — INTEC.");
          if (corrected !== item.textContent) item.textContent = corrected;
        });
      }
    });
  }

  function mergeAcademicDegrees(root = document) {
    root.querySelectorAll?.(".kernel-academic-person").forEach(button => {
      const strong = button.querySelector("strong");
      const degreeLine = strong?.parentElement?.querySelector(":scope > span");
      if (!strong || !degreeLine) return;
      const researcherId = button.dataset.kernelAcademicSelect || "";
      const isJose = researcherId === JOSE_ID;
      const degree = isJose ? JOSE_DEGREE : String(degreeLine.textContent || "").replace(/\s+/g, " ").trim();
      if (!degree) return;
      const name = normalizeName(strong.textContent, isJose, degree);
      normalizeHeading(strong, name, degree);
      degreeLine.dataset.kernelAcademicDegreeHidden = "true";
    });

    root.querySelectorAll?.(".kernel-academic-profile").forEach(profile => {
      const heading = profile.querySelector(".kernel-academic-profile-header h2");
      const degreeBlock = profile.querySelector(".kernel-academic-degree");
      if (!heading || !degreeBlock) return;
      const researcherId = profile.dataset.kernelResearcher || "";
      const isJose = researcherId === JOSE_ID;
      const degree = isJose ? JOSE_DEGREE : String(degreeBlock.textContent || "").replace(/\s+/g, " ").trim();
      if (!degree) return;
      const name = normalizeName(heading.textContent, isJose, degree);
      normalizeHeading(heading, name, degree);
      if (isJose && degreeBlock.textContent !== JOSE_DEGREE) degreeBlock.textContent = JOSE_DEGREE;
      degreeBlock.dataset.kernelDegreeMerged = "true";
      if (isJose) {
        profile.querySelectorAll("li").forEach(item => {
          const corrected = item.textContent.replace("Doctorado en Matemáticas — INTEC (en curso).", "Doctorado en Matemáticas — INTEC.");
          if (corrected !== item.textContent) item.textContent = corrected;
        });
      }
    });
  }

  function apply() {
    if (applying) return;
    applying = true;
    try {
      installStyles();
      correctJoseText();
      mergeCardDegrees();
      mergeProfileDegrees();
      mergeAcademicDegrees();
    } finally {
      applying = false;
    }
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, 45);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    if (mutations.some(mutation => mutation.addedNodes.length)) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelNameDegreeFix = {
    version: "1.2.0",
    jose: { id: JOSE_ID, name: JOSE_NAME, degree: JOSE_DEGREE },
    apply,
    diagnostics: () => ({
      duplicateInlineDegrees: [...document.querySelectorAll(".kernel-team-core__card h2")]
        .filter(heading => /(?:Ph\.?D\.?|M\.?Sc\.?)\s+(?:Ph\.?D\.?|M\.?Sc\.?)/i.test(heading.textContent)).length
    })
  };

  apply();
})();
