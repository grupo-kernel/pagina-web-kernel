import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { noticiaMMehb2026 } from "../src/data/newsMMehb2026.js";
import { noticiaMescyt2026 } from "../src/data/newsMescyt2026.js";

const createNews = await readFile(new URL("../src/components/Noticias/CreateNews.js", import.meta.url), "utf8");
const newsCard = await readFile(new URL("../src/components/Noticias/NewsCard.js", import.meta.url), "utf8");
const newsHero = await readFile(new URL("../src/components/Noticias/NewsHero.js", import.meta.url), "utf8");
const newsModal = await readFile(new URL("../src/components/Noticias/NewsModal.js", import.meta.url), "utf8");
const posterMMehb = await readFile(new URL("../src/components/Noticias/MMehbPoster.js", import.meta.url), "utf8");
const posterMescyt = await readFile(new URL("../src/components/Noticias/MescytPoster.js", import.meta.url), "utf8");
const controller = await readFile(new URL("../src/Controllers/Noticias/NewsModal.controller.js", import.meta.url), "utf8");

assert.equal(noticiaMMehb2026.id, "nw-mmehb-2026");
assert.equal(noticiaMMehb2026.featured, true);
assert.equal(noticiaMMehb2026.visualType, "mmehb-2026");
assert.match(noticiaMMehb2026.title, /Mathematical Modelling in Engineering & Human Behaviour 2026/);
assert.match(noticiaMMehb2026.date, /12–15 de julio de 2026/);
assert.match(noticiaMMehb2026.content.paragraphs.join(" "), /Universitat Politècnica de València/);

assert.equal(noticiaMescyt2026.id, "nw10");
assert.equal(noticiaMescyt2026.visualType, "mescyt-cic-2026");
assert.match(noticiaMescyt2026.title, /XXI Congreso Internacional de Investigación Científica/);
assert.match(noticiaMescyt2026.date, /1 de julio de 2026/);
assert.match(noticiaMescyt2026.content.paragraphs.join(" "), /Ministerio de Educación Superior, Ciencia y Tecnología/);
assert.match(noticiaMescyt2026.content.list.join(" "), /Miguel A\. Leonardo Sepúlveda/);
assert.match(noticiaMescyt2026.content.list.join(" "), /Natanael Ureña Castillo/);
assert.match(noticiaMescyt2026.content.list.join(" "), /Antmel Rodríguez Cabral/);

assert.match(createNews, /noticiaMMehb2026/);
assert.match(createNews, /noticiaMescyt2026/);
assert.match(createNews, /newsHero\(featuredNews\)/);
assert.match(createNews, /newsGrid\(orderedNews\)/);
assert.match(newsCard, /renderMMehbPoster/);
assert.match(newsCard, /renderMescytPoster/);
assert.match(newsHero, /renderMMehbPoster/);
assert.match(newsHero, /renderMescytPoster/);
assert.match(newsModal, /renderMMehbPoster/);
assert.match(newsModal, /renderMescytPoster/);
assert.match(controller, /noticiaMMehb2026/);
assert.match(controller, /noticiaMescyt2026/);
assert.match(controller, /TODAS_LAS_NOTICIAS/);

assert.match(posterMMehb, /MME&amp;HB 2026/);
assert.match(posterMMehb, /Instituto Universitario de Matemática Multidisciplinar/);
assert.match(posterMescyt, /XXI CIC 2026/);
assert.match(posterMescyt, /Gobierno de la República Dominicana/);
assert.match(posterMescyt, /Miguel A\. Leonardo Sepúlveda/);
assert.match(posterMescyt, /Natanael Ureña Castillo/);
assert.match(posterMescyt, /Antmel Rodríguez Cabral/);

console.log("✓ Noticias MME&HB y XXI CIC MESCyT 2026, flyers locales, tarjetas y modales validados.");
