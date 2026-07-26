(() => {
  "use strict";

  if (window.KernelHomeIconFix) return;

  const STYLE_ID = "kernel-home-icon-fix-styles";
  let timer = 0;

  const icons = {
    statistics: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 19V9M10 19V5M16 19v-7M3 19h18"/>
        <circle cx="4" cy="9" r="1.35"/>
        <circle cx="10" cy="5" r="1.35"/>
        <circle cx="16" cy="12" r="1.35"/>
      </svg>`,
    computing: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="5" cy="12" r="2.2"/>
        <circle cx="12" cy="5" r="2.2"/>
        <circle cx="19" cy="10" r="2.2"/>
        <circle cx="13" cy="19" r="2.2"/>
        <path d="M6.6 10.5 10.4 6.7M14.1 6.2l2.9 2.4M17.3 11.8l-2.9 5.1M7 13.2l4.2 4.2"/>
      </svg>`,
    methodology: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="5" y="4" width="14" height="17" rx="2.2"/>
        <path d="M9 4.5V3h6v1.5M8.5 9h7M8.5 13h4M8.5 17h2.5M14.2 16.2l1.3 1.3 2.4-2.8"/>
      </svg>`,
    education: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="m3 8 9-4 9 4-9 4-9-4Z"/>
        <path d="M7 10.2V15c2.7 2.1 7.3 2.1 10 0v-4.8M21 8v6"/>
        <circle cx="21" cy="16" r="1"/>
      </svg>`,
    nonlinear: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7.3 8.2c-2.6 0-4.3 1.7-4.3 3.8s1.7 3.8 4.3 3.8c4.6 0 5.3-7.6 9.4-7.6 2.6 0 4.3 1.7 4.3 3.8s-1.7 3.8-4.3 3.8c-4.6 0-5.3-7.6-9.4-7.6Z"/>
      </svg>`,
    layers: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="m12 3 9 5-9 5-9-5 9-5Z"/>
        <path d="m4 12 8 4.5 8-4.5M4 16l8 4.5 8-4.5"/>
      </svg>`,
    brain: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9.5 5.2A3.2 3.2 0 0 0 4 7.5a3.3 3.3 0 0 0 .8 2.2A3.7 3.7 0 0 0 5.5 17a3.2 3.2 0 0 0 4 2.7V5.2Z"/>
        <path d="M14.5 5.2A3.2 3.2 0 0 1 20 7.5a3.3 3.3 0 0 1-.8 2.2 3.7 3.7 0 0 1-.7 7.3 3.2 3.2 0 0 1-4 2.7V5.2Z"/>
        <path d="M9.5 9H7.8M14.5 9h1.7M9.5 14H7.8M14.5 14h1.7M12 4v16"/>
      </svg>`,
    catalog: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <ellipse cx="12" cy="5.5" rx="7" ry="3"/>
        <path d="M5 5.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5M5 10.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/>
      </svg>`,
    team: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="9" cy="8" r="3"/>
        <circle cx="17" cy="9" r="2.3"/>
        <path d="M3.5 20c.3-4 2.1-6 5.5-6s5.2 2 5.5 6M14 14.7c3.5-.5 5.7 1.2 6.2 4.8"/>
      </svg>`,
    graduation: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="m3 8 9-4 9 4-9 4-9-4Z"/>
        <path d="M7 10.4V15c2.8 2 7.2 2 10 0v-4.6M21 8v7"/>
      </svg>`,
    publication: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6 3h8l4 4v14H6V3Z"/>
        <path d="M14 3v5h5M9 12h6M9 16h6"/>
      </svg>`,
    project: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3 6.5h7l2 2h9v10.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5Z"/>
        <path d="M3 9h18"/>
      </svg>`,
    profile: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="4" width="18" height="16" rx="2.2"/>
        <circle cx="9" cy="10" r="2.4"/>
        <path d="M5.8 16c.5-2 1.6-3 3.2-3s2.7 1 3.2 3M14.5 9h3.2M14.5 13h3.2M14.5 16h2.2"/>
      </svg>`,
    calculator: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="5" y="3" width="14" height="18" rx="2"/>
        <path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/>
      </svg>`,
    assistant: `
      <svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4" y="7" width="16" height="12" rx="4"/>
        <path d="M9 12h.01M15 12h.01M9 16h6M12 3v4M7 4h10"/>
      </svg>`
  };

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-home-2b .kernel-inline-icon{
        display:block;
        width:1em;
        height:1em;
        fill:none;
        stroke:currentColor;
        stroke-width:1.9;
        stroke-linecap:round;
        stroke-linejoin:round;
        overflow:visible;
      }

      .kernel-home-2b__area-icon .kernel-inline-icon{
        width:2.75rem;
        height:2.75rem;
        color:#fff;
        filter:drop-shadow(0 2px 4px rgba(0,0,0,.15));
      }

      .kernel-home-2b__news-icon .kernel-inline-icon{
        width:2.15rem;
        height:2.15rem;
        color:#9bd7ff;
        stroke-width:2.1;
      }

      .kernel-home-2b__quick-card{
        display:flex!important;
        min-height:132px!important;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
        gap:.65rem;
        padding:1rem .65rem!important;
        border-color:#d6e3ed!important;
        background:linear-gradient(180deg,#fff 0%,#f7fbff 100%)!important;
        box-shadow:0 8px 22px rgba(7,24,32,.06)!important;
        transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease!important;
      }

      .kernel-home-2b__quick-card:hover,
      .kernel-home-2b__quick-card:focus-visible{
        transform:translateY(-3px);
        border-color:#6da9ed!important;
        box-shadow:0 14px 30px rgba(18,103,202,.14)!important;
        outline:none;
      }

      .kernel-home-2b__quick-icon{
        display:grid;
        width:3.4rem;
        height:3.4rem;
        flex:0 0 3.4rem;
        place-items:center;
        border:1px solid rgba(18,103,202,.15);
        border-radius:1rem;
        background:linear-gradient(145deg,#e9f4ff,#d8ebff);
        color:#1267ca;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 8px 18px rgba(18,103,202,.12);
      }

      .kernel-home-2b__quick-card:nth-child(2) .kernel-home-2b__quick-icon{
        background:linear-gradient(145deg,#e9fbf4,#d4f3e4);
        border-color:rgba(15,111,79,.15);
        color:#0f7a56;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 8px 18px rgba(15,122,86,.12);
      }

      .kernel-home-2b__quick-card:nth-child(3) .kernel-home-2b__quick-icon{
        background:linear-gradient(145deg,#f1eaff,#e6d9ff);
        border-color:rgba(101,53,164,.15);
        color:#6e42af;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 8px 18px rgba(110,66,175,.12);
      }

      .kernel-home-2b__quick-card:nth-child(4) .kernel-home-2b__quick-icon{
        background:linear-gradient(145deg,#fff3e3,#ffe4bf);
        border-color:rgba(220,114,0,.16);
        color:#cf6900;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 8px 18px rgba(207,105,0,.12);
      }

      .kernel-home-2b__quick-card:nth-child(5) .kernel-home-2b__quick-icon{
        background:linear-gradient(145deg,#e7fafd,#d2f3f7);
        border-color:rgba(22,143,161,.16);
        color:#168fa1;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 8px 18px rgba(22,143,161,.12);
      }

      .kernel-home-2b__quick-icon .kernel-inline-icon{
        width:1.95rem;
        height:1.95rem;
        stroke-width:2;
      }

      .kernel-home-2b__quick-label{
        display:block;
        max-width:12ch;
        color:#071820;
        font-size:.77rem;
        font-weight:900;
        line-height:1.32;
        text-align:center;
      }

      .kernel-home-2b__tool-svg{
        position:absolute;
        right:1rem;
        top:1rem;
        z-index:1;
        width:2.45rem!important;
        height:2.45rem!important;
        color:rgba(255,255,255,.82);
      }

      @media(max-width:680px){
        .kernel-home-2b__quick-card{min-height:120px!important}
        .kernel-home-2b__quick-icon{width:3.1rem;height:3.1rem;flex-basis:3.1rem}
      }
    `;
    document.head.appendChild(style);
  }

  function setIcon(container, name, extraClass = "") {
    if (!container || !icons[name]) return;
    const markup = extraClass
      ? icons[name].replace('class="kernel-inline-icon"', `class="kernel-inline-icon ${extraClass}"`)
      : icons[name];
    container.innerHTML = markup;
    container.dataset.kernelSvgIcon = name;
  }

  function upgradeAreas(home) {
    const names = ["statistics", "computing", "methodology", "education", "nonlinear"];
    home.querySelectorAll(".kernel-home-2b__area-icon").forEach((container, index) => {
      setIcon(container, names[index] || "statistics");
    });
  }

  function upgradeNews(home) {
    const names = ["layers", "brain", "catalog"];
    home.querySelectorAll(".kernel-home-2b__news-icon").forEach((container, index) => {
      setIcon(container, names[index] || "layers");
    });
  }

  function upgradeQuickAccess(home) {
    const names = ["team", "graduation", "publication", "project", "profile"];
    home.querySelectorAll(".kernel-home-2b__quick-card").forEach((card, index) => {
      const currentLabel = card.querySelector(".kernel-home-2b__quick-label")?.textContent || card.textContent;
      const label = String(currentLabel || "").replace(/\s+/g, " ").trim();
      const iconWrap = document.createElement("span");
      iconWrap.className = "kernel-home-2b__quick-icon";
      iconWrap.innerHTML = icons[names[index] || "profile"];
      const labelWrap = document.createElement("span");
      labelWrap.className = "kernel-home-2b__quick-label";
      labelWrap.textContent = label;
      card.replaceChildren(iconWrap, labelWrap);
      card.dataset.kernelQuickIcon = names[index] || "profile";
    });
  }

  function upgradeTools(home) {
    const names = ["publication", "project", "calculator", "assistant"];
    home.querySelectorAll(".kernel-home-2b__tool").forEach((card, index) => {
      const oldIcon = card.querySelector(".kernel-home-2b__tool-icon,.kernel-home-2b__tool-svg");
      const holder = oldIcon || document.createElement("span");
      holder.className = "kernel-home-2b__tool-svg";
      holder.innerHTML = icons[names[index] || "assistant"];
      if (!oldIcon) card.prepend(holder);
    });
  }

  function apply() {
    addStyles();
    const home = document.querySelector('[data-kernel-platform-page="home-2b"]');
    if (!home) return;
    upgradeAreas(home);
    upgradeNews(home);
    upgradeQuickAccess(home);
    upgradeTools(home);
    window.KernelStability?.check?.();
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, 24);
  }

  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("kernel-language-change", () => {
    schedule();
    window.setTimeout(apply, 180);
  });
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelHomeIconFix = { version: "1.0.0", apply, icons: Object.keys(icons) };
  schedule();
})();
