import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { noticiaMMehb2026 } from "../src/data/newsMMehb2026.js";

const createNews = await readFile(new URL("../src/components/Noticias/CreateNews.js", import.meta.url), "utf8");
const newsCard = await readFile(new URL("../src/components/Noticias/NewsCard.js", import.meta.url), "utf8");
const newsHero = await readFile(new URL("../src/components/Noticias/NewsHero.js", import.meta.url), "utf8");
const newsModal = await readFile(new URL("../src/components/Noticias/NewsModal.js", import.meta.url), "utf8");
const poster = await readFile(new URL("../src/components/Noticias/MMehbPoster.js", import.meta.url), "utf8");
const controller = await readFile(new URL("../src/Controllers/Noticias/NewsModal.controller.js", import.meta.url), "utf8");

assert.equal(noticiaMMehb2026.id, "nw-mmehb-2026");
assert.equal(noticiaMMehb2026.featured, true);
assert.equal(noticiaMMehb2026.visualType, "mmehb-2026");
assert.match(noticiaMMehb2026.title, /Mathematical Modelling in Engineering & Human Behaviour 2026/);
assert.match(noticiaMMehb2026.date, /12–15 de julio de 2026/);
assert.match(noticiaMMehb2026.content.paragraphs.join(" "), /Universitat Politècnica de València/);
assert.match(noticiaMMehb2026.content.list.join(" "), /Miguel A\. Leonardo Sepúlveda/);
assert.match(noticiaMMehb2026.content.list.join(" "), /Natanael Ureña Castillo/);
assert.match(noticiaMMehb2026.content.list.join(" "), /Antmel Rodríguez Cabral/);

assert.match(createNews, /noticiaMMehb2026/);
assert.match(createNews, /newsHero\(featuredNews\)/);
assert.match(createNews, /newsGrid\(orderedNews\)/);
assert.match(newsCard, /renderMMehbPoster/);
assert.match(newsCard, /visualType === "mmehb-2026"/);
assert.match(newsHero, /renderMMehbPoster/);
assert.match(newsModal, /renderMMehbPoster/);
assert.match(controller, /noticiaMMehb2026/);
assert.match(controller, /TODAS_LAS_NOTICIAS/);
assert.match(poster, /MME&amp;HB 2026/);
assert.match(poster, /Instituto Universitario de Matemática Multidisciplinar/);
assert.match(poster, /Miguel A\. Leonardo Sepúlveda/);
assert.match(poster, /Natanael Ureña Castillo/);
assert.match(poster, /Antmel Rodríguez Cabral/);

console.log("✓ Noticia MME&HB 2026, flyer local, tarjeta destacada y modal validados.");
