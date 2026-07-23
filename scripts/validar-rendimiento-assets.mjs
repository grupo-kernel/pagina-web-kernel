import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const indiceHtml = await readFile(
    new URL("../index.html", import.meta.url),
    "utf8"
);
const estilosLocales = await readFile(
    new URL("../src/css/style.css", import.meta.url),
    "utf8"
);

assert.doesNotMatch(
    indiceHtml,
    /(?:cdnjs\.cloudflare\.com|use\.fontawesome\.com).*font-awesome/i,
    "index.html no debe descargar Font Awesome desde un CDN cuando ya se incluye en el paquete local."
);
assert.match(
    estilosLocales,
    /@fortawesome\/fontawesome-free\/css\/all\.min\.css/,
    "La hoja principal debe conservar la importación local de Font Awesome."
);

const limiteFotografia = 400_000;
const limiteColeccionCongreso = 2_000_000;
const fotografiasCongreso = Array.from(
    { length: 9 },
    (_, indice) => `congreso${indice + 1}.webp`
);

const tamaniosCongreso = await Promise.all(
    fotografiasCongreso.map(async (archivo) => {
        const informacion = await stat(
            new URL(`../src/assets/${archivo}`, import.meta.url)
        );

        assert.ok(
            informacion.size <= limiteFotografia,
            `${archivo} supera ${limiteFotografia} bytes: ${informacion.size}.`
        );

        return informacion.size;
    })
);

const totalCongreso = tamaniosCongreso.reduce(
    (acumulado, tamanio) => acumulado + tamanio,
    0
);

assert.ok(
    totalCongreso <= limiteColeccionCongreso,
    `La colección del congreso supera ${limiteColeccionCongreso} bytes: ${totalCongreso}.`
);

const recursosPrincipales = [
    ["ElKernel.webp", 100_000],
    ["QuienesSomos.webp", 250_000],
    ["sep.webp", 150_000],
    ["nat.webp", 150_000],
    ["ant.webp", 150_000],
    ["jos.webp", 150_000]
];

for (const [archivo, limite] of recursosPrincipales) {
    const informacion = await stat(
        new URL(`../src/assets/${archivo}`, import.meta.url)
    );
    assert.ok(
        informacion.size <= limite,
        `${archivo} supera ${limite} bytes: ${informacion.size}.`
    );
}

const archivosQueImportanImagenes = [
    "../src/components/Noticias/MescytPoster.js",
    "../src/data/newsData.js",
    "../src/components/Home/PortadaKernel2026.js",
    "../src/components/Header/header.js",
    "../src/components/Footer/Footer.js",
    "../src/components/QuienesSomos/hero.js"
];

for (const archivo of archivosQueImportanImagenes) {
    const contenido = await readFile(new URL(archivo, import.meta.url), "utf8");
    assert.doesNotMatch(
        contenido,
        /(?:congreso\d+\.jpeg|ElKernel\.png|QuienesSomos\.png)/,
        `${archivo} vuelve a importar una versión pesada de una imagen optimizada.`
    );
}

console.log(
    `✓ Recursos optimizados: congreso ${(totalCongreso / 1_000_000).toFixed(2)} MB y límites principales respetados.`
);
