(() => {
  "use strict";

  if (window.KernelNameDegreeFix) return;

  const STYLE_ID = "kernel-name-degree-fix-styles";
  const JOSE_ID = "jose-alberto-reyes";
  const JOSE_NAME = "Jose Alberto Reyes Reyes";
  const JOSE_DEGREE = "Ph.D.";
  let timer = 0;

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
      @media(max-width:700px){
        .kernel-team-core__detail h2 small,
        .kernel-academic-profile-header h2 small{
          display:inline!important;
          margin:0!important;
          font-size:1em!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function correctedName(value) {
    return String(value || "").replace(/José Alberto Reyes Reyes/g, JOSE_NAME);
  }

  function correctJoseText(root = document) {
    root.querySelectorAll?.("h1,h2,h3,strong,p,span,button,a,li").forEach(element => {
      if (element.children.length) return;
      const current = element.textContent || "";
      const corrected = correctedName(current);
      if (corrected !== current) element.textContent = corrected;
    });

    root.querySelectorAll?.('img[alt*="José Alberto Reyes Reyes"]').forEach(image => {
      image.alt = correctedName(image.alt);
    });
  }

  function degreeSpan(degree) {
    const span = document.createElement("span");
    span.className = "kernel-degree-inline";
    span.dataset.kernelDegreeInline = "true";
    span.textContent = degree;
    return span;
  }

  function mergeCardDegrees(root = document) {
    root.querySelectorAll?.(".kernel-team-core__card").forEach(card => {
      const heading = card.querySelector("h2");
      const degreeBlock = card.querySelector(".kernel-team-core__degree");
      if (!heading || !degreeBlock) return;

      const openButton = card.querySelector("[data-kernel-team-open]");
      const isJose = openButton?.dataset.kernelTeamOpen === JOSE_ID;
      const degree = isJose ? JOSE_DEGREE : String(degreeBlock.textContent || "").trim();

      if (isJose) {
        heading.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) node.nodeValue = correctedName(node.nodeValue);
        });
        degreeBlock.textContent = JOSE_DEGREE;
      }

      let inline = heading.querySelector('[data-kernel-degree-inline="true"]');
      if (!inline) {
        heading.append(document.createTextNode(" "));
        inline = degreeSpan(degree);
        heading.append(inline);
      } else {
        inline.textContent = degree;
      }
      degreeBlock.dataset.kernelDegreeMerged = "true";
    });
  }

  function mergeProfileDegrees(root = document) {
    root.querySelectorAll?.(".kernel-team-core__detail").forEach(profile => {
      const heading = profile.querySelector("h2");
      if (!heading) return;
      const profileId = profile.dataset.kernelProfilePanel || "";
      const isJose = profileId === JOSE_ID;
      const small = heading.querySelector("small");

      if (isJose) {
        [...heading.childNodes].forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) node.nodeValue = correctedName(node.nodeValue);
        });
        if (small) small.textContent = JOSE_DEGREE;
      }
      if (small) small.classList.add("kernel-degree-inline");

      if (isJose) {
        profile.querySelectorAll("li").forEach(item => {
          item.textContent = item.textContent.replace(
            "Doctorado en Matemáticas — INTEC (en curso).",
            "Doctorado en Matemáticas — INTEC."
          );
        });
      }
    });
  }

  function mergeAcademicDegrees(root = document) {
    root.querySelectorAll?.(".kernel-academic-person").forEach(button => {
      const strong = button.querySelector("strong");
      if (!strong) return;
      const container = strong.parentElement;
      const degreeLine = container?.querySelector(":scope > span");
      if (!degreeLine) return;

      const researcherId = button.dataset.kernelAcademicSelect || "";
      const isJose = researcherId === JOSE_ID;
      const degree = isJose ? JOSE_DEGREE : String(degreeLine.textContent || "").trim();
      if (isJose) strong.textContent = correctedName(strong.textContent);

      let inline = strong.querySelector('[data-kernel-degree-inline="true"]');
      if (!inline) {
        strong.append(document.createTextNode(" "));
        inline = degreeSpan(degree);
        strong.append(inline);
      } else {
        inline.textContent = degree;
      }
      degreeLine.dataset.kernelAcademicDegreeHidden = "true";
    });

    root.querySelectorAll?.(".kernel-academic-profile").forEach(profile => {
      const heading = profile.querySelector(".kernel-academic-profile-header h2");
      const degreeBlock = profile.querySelector(".kernel-academic-degree");
      if (!heading || !degreeBlock) return;

      const researcherId = profile.dataset.kernelResearcher || "";
      const isJose = researcherId === JOSE_ID;
      const degree = isJose ? JOSE_DEGREE : String(degreeBlock.textContent || "").trim();
      if (isJose) {
        heading.textContent = correctedName(heading.textContent);
        degreeBlock.textContent = JOSE_DEGREE;
      }

      let inline = heading.querySelector('[data-kernel-degree-inline="true"]');
      if (!inline) {
        heading.append(document.createTextNode(" "));
        inline = degreeSpan(degree);
        heading.append(inline);
      } else {
        inline.textContent = degree;
      }
      degreeBlock.dataset.kernelDegreeMerged = "true";

      if (isJose) {
        profile.querySelectorAll("li").forEach(item => {
          item.textContent = item.textContent.replace(
            "Doctorado en Matemáticas — INTEC (en curso).",
            "Doctorado en Matemáticas — INTEC."
          );
        });
      }
    });
  }

  function apply() {
    installStyles();
    correctJoseText();
    mergeCardDegrees();
    mergeProfileDegrees();
    mergeAcademicDegrees();
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, 20);
  }

  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelNameDegreeFix = {
    version: "1.0.0",
    jose: { id: JOSE_ID, name: JOSE_NAME, degree: JOSE_DEGREE },
    apply
  };

  apply();
})();