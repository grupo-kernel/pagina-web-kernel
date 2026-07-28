(() => {
  "use strict";

  if (window.KernelLaboratoryBackground) return;

  const STYLE_ID = "kernel-laboratory-background-style";
  const MAIN_CLASS = "kernel-lab-visual-page";
  const SHELL_CLASS = "kernel-lab-access-shell";
  const CARD_CLASS = "kernel-lab-access-card";
  let timer = 0;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      #main.${MAIN_CLASS} {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        width: calc(100% - 1rem) !important;
        max-width: 1540px !important;
        min-height: 78vh;
        margin-top: 1.25rem !important;
        padding: clamp(1rem, 2.5vw, 2.75rem) !important;
        border: 1px solid rgba(15, 91, 93, 0.14);
        border-radius: clamp(1.4rem, 3vw, 2.35rem);
        background:
          linear-gradient(135deg, rgba(250, 253, 255, 0.90), rgba(234, 247, 245, 0.84)),
          url("./assets/img/laboratory/lab-science-background.svg") center / cover no-repeat;
        box-shadow: 0 24px 70px rgba(7, 24, 32, 0.10);
      }

      #main.${MAIN_CLASS}::before,
      #main.${MAIN_CLASS}::after {
        content: "";
        position: absolute;
        z-index: 0;
        width: clamp(230px, 28vw, 430px);
        aspect-ratio: 1;
        pointer-events: none;
        background: url("./assets/img/laboratory/lab-neural-orbit.svg") center / contain no-repeat;
        opacity: 0.25;
      }

      #main.${MAIN_CLASS}::before {
        left: clamp(-150px, -8vw, -70px);
        bottom: clamp(-145px, -8vw, -60px);
      }

      #main.${MAIN_CLASS}::after {
        right: clamp(-155px, -8vw, -70px);
        top: clamp(70px, 10vw, 145px);
        transform: rotate(180deg);
        opacity: 0.19;
      }

      #main.${MAIN_CLASS} > * {
        position: relative;
        z-index: 1;
      }

      #main.${MAIN_CLASS} > :first-child:not(.${SHELL_CLASS}) {
        border-color: rgba(15, 91, 93, 0.24) !important;
        background: rgba(240, 250, 249, 0.84) !important;
        box-shadow: 0 10px 28px rgba(7, 24, 32, 0.06);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      .${SHELL_CLASS} {
        position: relative;
        z-index: 2;
        min-height: 68vh !important;
        padding-top: clamp(1.25rem, 4vw, 3rem) !important;
        padding-bottom: clamp(1.25rem, 4vw, 3rem) !important;
        background: transparent !important;
      }

      .${CARD_CLASS} {
        position: relative;
        z-index: 3;
        border: 1px solid rgba(15, 91, 93, 0.19) !important;
        border-top: 4px solid #d5a54a !important;
        background: rgba(255, 255, 255, 0.94) !important;
        box-shadow: 0 28px 74px rgba(7, 24, 32, 0.19) !important;
        backdrop-filter: blur(18px) saturate(125%);
        -webkit-backdrop-filter: blur(18px) saturate(125%);
      }

      .${CARD_CLASS}::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background:
          radial-gradient(circle at 100% 0%, rgba(90, 168, 201, 0.18), transparent 34%),
          radial-gradient(circle at 0% 100%, rgba(15, 91, 93, 0.12), transparent 32%);
      }

      .${CARD_CLASS} > * {
        position: relative;
        z-index: 1;
      }

      .${CARD_CLASS} input[type="email"],
      .${CARD_CLASS} input[type="password"],
      .${CARD_CLASS} input[type="text"] {
        background: rgba(255, 255, 255, 0.93) !important;
        box-shadow: inset 0 1px 2px rgba(7, 24, 32, 0.04);
      }

      .${CARD_CLASS} button[type="submit"] {
        background: #0f5b5d !important;
        box-shadow: 0 12px 26px rgba(15, 91, 93, 0.24) !important;
      }

      .${CARD_CLASS} button[type="submit"]:hover {
        background: #0a4648 !important;
      }

      @media (max-width: 820px) {
        #main.${MAIN_CLASS} {
          width: calc(100% - 0.5rem) !important;
          padding: 0.75rem !important;
          border-radius: 1.35rem;
          background-position: center top;
        }

        #main.${MAIN_CLASS}::before {
          width: 235px;
          left: -118px;
          bottom: -95px;
          opacity: 0.16;
        }

        #main.${MAIN_CLASS}::after {
          width: 220px;
          right: -120px;
          top: 105px;
          opacity: 0.12;
        }

        .${SHELL_CLASS} {
          min-height: auto !important;
          padding: 1rem 0.25rem 1.5rem !important;
        }

        .${CARD_CLASS} {
          backdrop-filter: blur(12px) saturate(115%);
          -webkit-backdrop-filter: blur(12px) saturate(115%);
        }
      }

      @media (prefers-reduced-transparency: reduce) {
        .${CARD_CLASS},
        #main.${MAIN_CLASS} > :first-child:not(.${SHELL_CLASS}) {
          background: #ffffff !important;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function findCard(form) {
    return form.closest("div.relative.w-full.max-w-lg") ||
      [...form.querySelectorAll(":scope")].map(() => null)[0] ||
      form.closest("div[class*='max-w-lg']") ||
      form.parentElement;
  }

  function clearPageState() {
    const main = document.getElementById("main");
    main?.classList.remove(MAIN_CLASS);
  }

  function apply() {
    installStyles();

    const form = document.getElementById("kernel-login");
    const main = document.getElementById("main");

    if (!form || !main) {
      clearPageState();
      return false;
    }

    const shell = form.closest("section");
    const card = findCard(form);

    main.classList.add(MAIN_CLASS);
    shell?.classList.add(SHELL_CLASS);
    card?.classList.add(CARD_CLASS);

    if (shell) shell.dataset.kernelLaboratoryBackground = "active";
    if (card) card.dataset.kernelLaboratoryCard = "active";

    return Boolean(shell && card);
  }

  function schedule(delay = 45) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    const relevant = mutations.some(mutation =>
      [...mutation.addedNodes].some(node =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node.matches?.("#kernel-login, section") || node.querySelector?.("#kernel-login"))
      )
    );
    if (relevant) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", () => schedule(0));
  window.addEventListener("pageshow", () => schedule(0));
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelLaboratoryBackground = {
    version: "1.0.0",
    apply,
    diagnostics: () => ({
      active: document.getElementById("main")?.classList.contains(MAIN_CLASS) || false,
      form: Boolean(document.getElementById("kernel-login")),
      shell: Boolean(document.querySelector(`.${SHELL_CLASS}`)),
      card: Boolean(document.querySelector(`.${CARD_CLASS}`))
    })
  };

  installStyles();
  schedule();
})();
