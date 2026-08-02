(() => {
  "use strict";

  const STYLE_ID = "kernel-home-featured-tools-blue";

  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    .kernel-home-2b__tool,
    .kernel-home-2b__tool:nth-of-type(1),
    .kernel-home-2b__tool:nth-of-type(2),
    .kernel-home-2b__tool:nth-of-type(3),
    .kernel-home-2b__tool:nth-of-type(4) {
      background:
        radial-gradient(
          circle at 88% 82%,
          rgba(130, 189, 255, 0.28),
          transparent 38%
        ),
        linear-gradient(
          135deg,
          #082f63 0%,
          #0b4e88 42%,
          #1267ca 72%,
          #2679df 100%
        ) !important;
      border: 1px solid rgba(130, 189, 255, 0.48) !important;
      box-shadow:
        0 12px 28px rgba(18, 103, 202, 0.24),
        inset 0 1px 0 rgba(255, 255, 255, 0.12) !important;
    }

    .kernel-home-2b__tool::after {
      background: rgba(130, 189, 255, 0.2) !important;
    }

    .kernel-home-2b__tool-icon {
      color: rgba(219, 238, 255, 0.94) !important;
    }

    .kernel-home-2b__tool span {
      background: linear-gradient(
        135deg,
        #1267ca 0%,
        #2679df 100%
      ) !important;
      color: #ffffff !important;
      border: 1px solid rgba(255, 255, 255, 0.34) !important;
      box-shadow: 0 7px 18px rgba(4, 36, 78, 0.3) !important;
      transition:
        transform 0.18s ease,
        background 0.18s ease,
        box-shadow 0.18s ease !important;
    }

    .kernel-home-2b__tool:hover span,
    .kernel-home-2b__tool:focus-visible span {
      background: linear-gradient(
        135deg,
        #2679df 0%,
        #5ea7ff 100%
      ) !important;
      box-shadow: 0 10px 22px rgba(18, 103, 202, 0.38) !important;
      transform: translateY(-1px);
    }
  `;

  document.head.appendChild(style);
})();
