import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const read = relativePath => readFile(
  new URL(relativePath, import.meta.url),
  "utf8"
);

const [
  sourceIndex,
  header,
  footer,
  logoFix,
  brandIdentity,
  finalizer,
  deployWorkflow,
  packageJson
] = await Promise.all([
  read("../index.html"),
  read("../src/components/Header/header.js"),
  read("../src/components/Footer/Footer.js"),
  read("../public/assets/kernel-global-logo-fix.js"),
  read("../public/assets/kernel-brand-identity.js"),
  read("./finalize-kerf-brand.mjs"),
  read("../.github/workflows/deploy.yml"),
  read("../package.json")
]);

const logoPath = new URL(
  "../public/assets/logo-kerf-20260821.png",
  import.meta.url
);
const sourceLogoPath = new URL(
  "../src/assets/KerF.png",
  import.meta.url
);

for (const path of [logoPath, sourceLogoPath]) {
  const info = await stat(path);
  assert.ok(info.size > 10_000, `El logotipo está vacío o incompleto: ${path}`);
}

const FULL_NAME = "Grupo de Investigación Ker(F)";
const LOGO_FILE = "logo-kerf-20260821.png";

[
  sourceIndex,
  header,
  footer,
  logoFix,
  brandIdentity,
  finalizer
].forEach((source, index) => {
  assert.ok(
    source.includes("Ker(F)"),
    `El archivo institucional ${index + 1} no contiene Ker(F).`
  );
});

assert.match(sourceIndex, /<title>Grupo de Investigación Ker\(F\)<\/title>/);
assert.match(sourceIndex, /kernel-global-logo-fix\.js\?v=20260821-1/);
assert.match(sourceIndex, /kernel-brand-identity\.js\?v=20260821-1/);
assert.match(sourceIndex, /logo-kerf-20260821\.png\?v=20260821-1/);

assert.match(header, /import kerFLogo from "\.\.\/\.\.\/assets\/KerF\.png"/);
assert.match(header, /Grupo de Investigación Ker\(F\)/);
assert.doesNotMatch(header, />El Kernel</);

assert.match(footer, /Grupo de Investigación Ker\(F\)/);
assert.match(footer, /miguel\.leonardo@grupoelkernel\.com/);
assert.doesNotMatch(footer, /Grupo de Investigación El Kernel/i);

assert.match(logoFix, /const VERSION = "20260821-1"/);
assert.match(logoFix, /logo-kerf-20260821\.png/);
assert.match(logoFix, /Logotipo del Grupo de Investigación Ker\(F\)/);

assert.match(brandIdentity, /legal: "GRUPO DE INVESTIGACION KER \( F \)"/);
assert.match(brandIdentity, /registration: "947795"/);
assert.match(brandIdentity, /full: "Grupo de Investigación Ker\(F\)"/);
assert.match(brandIdentity, /window\.KerFBrandIdentity/);

assert.match(finalizer, new RegExp(FULL_NAME.replace(/[()]/g, "\\$&")));
assert.match(finalizer, new RegExp(LOGO_FILE.replace(".", "\\.")));
assert.match(finalizer, /kernel-brand-identity\.js\?v=20260821-1/);
assert.match(finalizer, /kernel-global-logo-fix\.js\?v=20260821-1/);

assert.match(
  deployWorkflow,
  /node scripts\/finalize-kerf-brand\.mjs/
);
assert.match(packageJson, /"test:brand"/);
assert.match(packageJson, /npm run test:brand/);

console.log(
  "✓ La identidad web usa el logotipo oficial y el nombre Grupo de Investigación Ker(F), con referencia al registro ONAPI 947795."
);
