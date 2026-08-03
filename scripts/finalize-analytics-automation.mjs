import fs from "node:fs";
import path from "node:path";

const indexPath = path.resolve("dist/index.html");
let html = fs.readFileSync(indexPath, "utf8");

const unsafeAssignment =
  'window["ga-disable-" + measurementId] = analyticsDisabled;';
const safeAssignment = `if (analyticsDisabled) {
        window["ga-disable-" + measurementId] = true;
      }`;

if (html.includes(unsafeAssignment)) {
  html = html.replace(unsafeAssignment, safeAssignment);
}

const requiredMarkers = [
  "window.__kernelAnalyticsDisabled",
  "navigator.webdriver",
  "kernel_analytics",
  "window.KernelAnalyticsControl",
  safeAssignment,
  "if (analyticsDisabled) return"
];

requiredMarkers.forEach(marker => {
  if (!html.includes(marker)) {
    throw new Error(
      `La exclusión de tráfico automatizado está incompleta: falta ${marker}.`
    );
  }
});

if (
  /<script\s+async\s+src="https:\/\/www\.googletagmanager\.com\/gtag\/js/i
    .test(html)
) {
  throw new Error(
    "GA4 se está cargando antes de evaluar si la navegación es automatizada."
  );
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(
  "Finalized Analytics: automated WebDriver and kernel_analytics=off visits cannot load GA4 or generate page_view events."
);
