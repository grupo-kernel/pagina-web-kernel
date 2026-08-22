import fs from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const INDEX = path.join(DIST, "index.html");
const LOGO = "./assets/logo-kerf-20260821.png?v=20260821-1";
const FULL_NAME = "Grupo de Investigación Ker(F)";
const SHORT_NAME = "Ker(F)";

const TEXT_EXTENSIONS = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".xml",
  ".txt",
  ".md",
  ".webmanifest"
]);

const SKIP_FILES = new Set([
  "kernel-brand-identity.js",
  "kernel-global-logo-fix.js"
]);

const REPLACEMENTS = [
  [/Grupo\s+de\s+Investigaci[oó]n\s+El\s+Kernel/gi, FULL_NAME],
  [/Grupo\s+de\s+Investigaci[oó]n\s+Kernel/gi, FULL_NAME],
  [/Grupo\s+El\s+Kernel/gi, FULL_NAME],
  [/El\s+Kernel\s+Research\s+Group/gi, "Ker(F) Research Group"],
  [/Research\s+Group\s+El\s+Kernel/gi, "Ker(F) Research Group"],
  [/\bEl\s+Kernel\b/g, SHORT_NAME]
];

function transformBrand(text) {
  let output = text;

  REPLACEMENTS.forEach(([pattern, replacement]) => {
    output = output.replace(pattern, replacement);
  });

  return output;
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

if (!fs.existsSync(DIST)) {
  throw new Error("No existe el directorio dist. Ejecute primero la compilación.");
}

const requiredAssets = [
  path.join(DIST, "assets", "logo-kerf-20260821.png"),
  path.join(DIST, "assets", "kernel-global-logo-fix.js"),
  path.join(DIST, "assets", "kernel-brand-identity.js")
];

requiredAssets.forEach(file => {
  if (!fs.existsSync(file)) {
    throw new Error(`Falta el recurso institucional requerido: ${file}`);
  }
});

let changedFiles = 0;
let replacements = 0;

walk(DIST).forEach(file => {
  if (!TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())) return;
  if (SKIP_FILES.has(path.basename(file))) return;

  const original = fs.readFileSync(file, "utf8");
  const transformed = transformBrand(original);

  if (transformed === original) return;

  replacements += 1;
  changedFiles += 1;
  fs.writeFileSync(file, transformed, "utf8");
});

let html = fs.readFileSync(INDEX, "utf8");

html = html
  .replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${FULL_NAME}</title>`
  )
  .replace(
    /<link\b[^>]*rel=["'](?:shortcut\s+)?icon["'][^>]*>/gi,
    ""
  )
  .replace(
    /<link\b[^>]*rel=["']apple-touch-icon["'][^>]*>/gi,
    ""
  )
  .replace(
    /kernel-global-logo-fix\.js\?v=[^"']+/g,
    "kernel-global-logo-fix.js?v=20260821-1"
  );

const metadata = `
  <meta name="application-name" content="${FULL_NAME}">
  <meta name="apple-mobile-web-app-title" content="${SHORT_NAME}">
  <meta property="og:site_name" content="${FULL_NAME}">
  <link rel="icon" href="${LOGO}" type="image/png">
  <link rel="shortcut icon" href="${LOGO}" type="image/png">
  <link rel="apple-touch-icon" href="${LOGO}">`;

if (!html.includes('name="application-name"')) {
  html = html.replace(
    /<meta\s+name=["']viewport["'][^>]*>/i,
    match => `${match}${metadata}`
  );
} else {
  html = html
    .replace(
      /<meta\s+name=["']application-name["'][^>]*>/i,
      `<meta name="application-name" content="${FULL_NAME}">`
    )
    .replace(
      /<meta\s+name=["']apple-mobile-web-app-title["'][^>]*>/i,
      `<meta name="apple-mobile-web-app-title" content="${SHORT_NAME}">`
    )
    .replace(
      /<meta\s+property=["']og:site_name["'][^>]*>/i,
      `<meta property="og:site_name" content="${FULL_NAME}">`
    );

  html = html.replace(
    /<\/head>/i,
    `  <link rel="icon" href="${LOGO}" type="image/png">\n  <link rel="shortcut icon" href="${LOGO}" type="image/png">\n  <link rel="apple-touch-icon" href="${LOGO}">\n</head>`
  );
}

const logoScript =
  '  <script defer src="./assets/kernel-global-logo-fix.js?v=20260821-1"></script>';
const identityScript =
  '  <script defer src="./assets/kernel-brand-identity.js?v=20260821-1"></script>';

if (!html.includes("kernel-global-logo-fix.js?v=20260821-1")) {
  html = html.replace(/<\/head>/i, `${logoScript}\n</head>`);
}

if (!html.includes("kernel-brand-identity.js?v=20260821-1")) {
  const anchor = /(<script\b[^>]*src=["'][^"']*kernel-global-logo-fix\.js\?v=20260821-1["'][^>]*><\/script>)/i;

  html = anchor.test(html)
    ? html.replace(anchor, `$1\n${identityScript}`)
    : html.replace(/<\/head>/i, `${identityScript}\n</head>`);
}

html = transformBrand(html);
fs.writeFileSync(INDEX, html, "utf8");

const finalTextFiles = walk(DIST).filter(file =>
  TEXT_EXTENSIONS.has(path.extname(file).toLowerCase()) &&
  !SKIP_FILES.has(path.basename(file))
);

const legacy = [];

finalTextFiles.forEach(file => {
  const text = fs.readFileSync(file, "utf8");
  if (/Grupo\s+de\s+Investigaci[oó]n\s+El\s+Kernel/i.test(text)) {
    legacy.push(path.relative(DIST, file));
  }
});

if (legacy.length) {
  throw new Error(
    `Persisten referencias a la identidad anterior en: ${legacy.join(", ")}`
  );
}

const finalIndex = fs.readFileSync(INDEX, "utf8");

[
  FULL_NAME,
  "logo-kerf-20260821.png?v=20260821-1",
  "kernel-global-logo-fix.js?v=20260821-1",
  "kernel-brand-identity.js?v=20260821-1"
].forEach(marker => {
  if (!finalIndex.includes(marker)) {
    throw new Error(`La entrada pública no contiene: ${marker}`);
  }
});

console.log(
  `Identidad Ker(F) finalizada: ${changedFiles} archivos ajustados; ` +
  `${replacements} grupos de sustituciones aplicados.`
);
