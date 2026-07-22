import assert from "node:assert/strict";
import {
    obtenerCatalogoBiblioteca,
    categoriasBiblioteca
} from "../src/data/catalogoBibliotecaMetodologica.js";

const catalogo = obtenerCatalogoBiblioteca();

assert.ok(
    catalogo.length >= 15,
    `Se esperaban al menos 15 fichas y se encontraron ${catalogo.length}.`
);

const ids = catalogo.map((ficha) => ficha.id);
assert.equal(new Set(ids).size, ids.length, "Los identificadores deben ser únicos.");

catalogo.forEach((ficha) => {
    assert.ok(ficha.nombre?.trim(), `La ficha ${ficha.id} debe tener nombre.`);
    assert.ok(ficha.definicion?.trim(), `La ficha ${ficha.id} debe tener definición.`);
    assert.ok(Array.isArray(ficha.cuandoUsar), `La ficha ${ficha.id} debe indicar cuándo usarla.`);
    assert.ok(Array.isArray(ficha.supuestos), `La ficha ${ficha.id} debe incluir supuestos.`);
    assert.ok(ficha.categoria?.trim(), `La ficha ${ficha.id} debe tener categoría.`);
    assert.ok(ficha.tipo?.trim(), `La ficha ${ficha.id} debe tener tipo.`);
    assert.ok(ficha.palabrasClave?.includes(
        ficha.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    ));
});

const muestra = catalogo.find((ficha) => ficha.id === "tamano-muestra-potencia");
assert.ok(muestra, "La Biblioteca debe incluir la ficha de tamaño de muestra.");
assert.equal(muestra.ruta, "calculadoraTamanoMuestraPotencia");

const categorias = categoriasBiblioteca();
assert.ok(categorias.includes("Planificación muestral"));
assert.ok(categorias.includes("Regresión"));
assert.ok(categorias.length >= 5);

console.log(`✓ La Biblioteca metodológica validó ${catalogo.length} fichas en ${categorias.length} categorías.`);
