import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8")
);
const packageLock = JSON.parse(
    await readFile(new URL("../package-lock.json", import.meta.url), "utf8")
);
const despliegue = await readFile(
    new URL("../.github/workflows/deploy.yml", import.meta.url),
    "utf8"
);
const versionNode = (
    await readFile(new URL("../.nvmrc", import.meta.url), "utf8")
).trim();

assert.equal(
    packageJson.type,
    "module",
    "El proyecto debe declarar módulos ES sin opciones experimentales de Node."
);
assert.equal(versionNode, "22", "La versión local de Node debe coincidir con CI.");

Object.entries(packageJson.scripts)
    .filter(([nombre]) => nombre.startsWith("test:"))
    .forEach(([nombre, comando]) => {
        assert.doesNotMatch(
            comando,
            /--experimental-default-type=module/,
            `${nombre} conserva una opción retirada de Node.`
        );
    });

for (const dependencia of ["firebase", "jstat"]) {
    assert.ok(
        packageLock.packages?.[`node_modules/${dependencia}`],
        `${dependencia} debe estar registrado en package-lock.json.`
    );
}

const indicePruebas = despliegue.indexOf("npm run test:all");
const indiceCompilacion = despliegue.indexOf("npm run build");
const indicePublicacion = despliegue.indexOf("peaceiris/actions-gh-pages");

assert.ok(indicePruebas >= 0, "El despliegue debe ejecutar la batería completa.");
assert.ok(
    indicePruebas < indiceCompilacion && indiceCompilacion < indicePublicacion,
    "Las pruebas y la compilación deben finalizar antes de publicar."
);
assert.match(despliegue, /npm ci --no-audit --no-fund/);
assert.match(despliegue, /npm run test:dist/);
assert.match(
    despliegue,
    /^\s+keep_files:\s*true\s*$/m,
    "El despliegue debe conservar los assets anteriores para que las páginas abiertas no pierdan sus fragmentos durante una publicación."
);

for (const archivoResidual of [
    "../src/pages/CalculadoraRegresionLinealMultiple.js",
    "../src/pages/omparacionGrupos.js"
]) {
    await assert.rejects(
        access(new URL(archivoResidual, import.meta.url)),
        `El archivo residual ${archivoResidual} no debe permanecer en el proyecto.`
    );
}

console.log(
    "✓ Infraestructura validada: Node 22, lockfile completo, despliegue bloqueado por pruebas y código residual retirado."
);
