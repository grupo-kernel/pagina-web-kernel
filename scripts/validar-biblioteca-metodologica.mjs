import assert from "node:assert/strict";
import {
    obtenerCatalogoBiblioteca,
    categoriasBiblioteca
} from "../src/data/catalogoBibliotecaMetodologica.js";
import {
    METADATOS_FICHAS_METODOLOGICAS
} from "../src/data/metadatosFichasMetodologicas.js";
import {
    reglasEstadisticas
} from "../src/data/reglasEstadisticas.js";

const catalogo = obtenerCatalogoBiblioteca();
const idsMetadatos = Object.keys(
    METADATOS_FICHAS_METODOLOGICAS
);

assert.equal(
    catalogo.length,
    37,
    `Se esperaban 37 fichas y se encontraron ${catalogo.length}.`
);
assert.equal(
    catalogo.length,
    idsMetadatos.length,
    "Cada ficha debe tener metadatos explícitos de clasificación."
);

const ids = catalogo.map((ficha) => ficha.id);
assert.equal(
    new Set(ids).size,
    ids.length,
    "Los identificadores deben ser únicos."
);
assert.deepEqual(
    [...ids].sort(),
    [...idsMetadatos].sort(),
    "El catálogo y el mapa explícito de metadatos deben contener los mismos identificadores."
);

const nombres = catalogo.map((ficha) => ficha.nombre);
assert.equal(
    new Set(nombres).size,
    nombres.length,
    "Los títulos visibles deben distinguir procedimientos o contextos diferentes."
);

const rutasValidas = new Set([
    "calculadoraDosGrupos",
    "calculadoraDosMuestrasRelacionadas",
    "calculadoraTresOMasGrupos",
    "calculadoraTresOMasMedicionesRelacionadas",
    "calculadoraRelacionVariables",
    "calculadoraAsociacionCategorica",
    "calculadoraRegresion",
    "calculadoraRegresionLogistica",
    "calculadoraRegresionConteo",
    "calculadoraFiabilidadCuestionarios",
    "calculadoraEvaluacionEducativa",
    "calculadoraTamanoMuestraPotencia"
]);

catalogo.forEach((ficha) => {
    assert.ok(
        ficha.nombre?.trim(),
        `La ficha ${ficha.id} debe tener nombre.`
    );
    assert.ok(
        ficha.definicion?.trim(),
        `La ficha ${ficha.id} debe tener definición.`
    );
    assert.ok(
        ficha.objetivo?.trim(),
        `La ficha ${ficha.id} debe declarar su objetivo específico.`
    );
    assert.ok(
        Array.isArray(ficha.cuandoUsar) &&
        ficha.cuandoUsar.length > 0,
        `La ficha ${ficha.id} debe indicar cuándo usarla.`
    );
    assert.ok(
        Array.isArray(ficha.cuandoNoUsar) &&
        ficha.cuandoNoUsar.length > 0,
        `La ficha ${ficha.id} debe indicar cuándo no utilizarla.`
    );
    assert.ok(
        Array.isArray(ficha.supuestos) &&
        ficha.supuestos.length > 0,
        `La ficha ${ficha.id} debe incluir supuestos.`
    );
    assert.ok(
        ficha.hipotesis?.h0?.trim() &&
        ficha.hipotesis?.h1?.trim(),
        `La ficha ${ficha.id} debe formular H0 y H1.`
    );
    assert.ok(
        ficha.estadistico?.trim(),
        `La ficha ${ficha.id} debe explicar su estadístico o diagnóstico.`
    );
    assert.ok(
        ficha.efecto?.trim(),
        `La ficha ${ficha.id} debe especificar efectos, ajuste o indicadores.`
    );
    assert.ok(
        ficha.reporteAPA?.trim(),
        `La ficha ${ficha.id} debe incluir una guía de reporte.`
    );
    assert.ok(
        Array.isArray(ficha.posthoc),
        `La ficha ${ficha.id} debe declarar sus análisis posteriores, aunque no apliquen.`
    );
    assert.ok(
        Array.isArray(ficha.alternativas) &&
        ficha.alternativas.length > 0,
        `La ficha ${ficha.id} debe incluir alternativas.`
    );
    assert.ok(
        Array.isArray(ficha.erroresFrecuentes) &&
        ficha.erroresFrecuentes.length > 0,
        `La ficha ${ficha.id} debe advertir errores frecuentes.`
    );
    assert.ok(
        ficha.ejemplo?.trim(),
        `La ficha ${ficha.id} debe incluir un ejemplo.`
    );
    assert.ok(
        Array.isArray(ficha.referencias) &&
        ficha.referencias.length > 0,
        `La ficha ${ficha.id} debe incluir referencias.`
    );
    assert.ok(
        ficha.categoria?.trim() &&
        ficha.categoria !== "Sin clasificar",
        `La ficha ${ficha.id} debe tener una categoría explícita.`
    );
    assert.ok(
        ficha.tipo?.trim() &&
        ficha.tipo !== "Sin clasificar",
        `La ficha ${ficha.id} debe tener un tipo explícito.`
    );
    assert.ok(
        ficha.ruta === null ||
        rutasValidas.has(ficha.ruta),
        `La ficha ${ficha.id} tiene una ruta de calculadora desconocida.`
    );
    assert.ok(
        ficha.palabrasClave?.includes(
            ficha.nombre
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
        ),
        `La ficha ${ficha.id} debe ser localizable por su nombre.`
    );

    ficha.referencias.forEach((referencia) => {
        assert.doesNotMatch(
            referencia,
            /commonly used|referencia pendiente|por completar/i,
            `La ficha ${ficha.id} contiene una referencia provisional.`
        );
    });
});

const idsCatalogo = new Set(ids);
reglasEstadisticas.forEach((regla) => {
    assert.ok(
        idsCatalogo.has(regla.id),
        `La recomendación ${regla.id} debe tener ficha metodológica.`
    );
});

const clasificacionesEsperadas = {
    "t-student-independientes": "Paramétrica",
    "t-welch-independientes": "Paramétrica robusta",
    "t-student-relacionadas": "Paramétrica",
    "anova-un-factor": "Paramétrica",
    "anova-welch": "Paramétrica robusta",
    "anova-medidas-repetidas": "Paramétrica",
    pearson: "Paramétrica",
    "fisher-exacta-2x2": "Exacta",
    "fisher-freeman-halton": "Exacta"
};

Object.entries(clasificacionesEsperadas).forEach(
    ([id, tipoEsperado]) => {
        assert.equal(
            catalogo.find((ficha) => ficha.id === id)?.tipo,
            tipoEsperado,
            `La clasificación explícita de ${id} es incorrecta.`
        );
    }
);

assert.equal(
    catalogo.find(
        (ficha) => ficha.id === "punto-biserial"
    )?.ruta,
    "calculadoraRelacionVariables",
    "Punto-biserial debe abrir la calculadora de relación entre variables."
);
assert.equal(
    catalogo.find(
        (ficha) => ficha.id === "t-student-relacionadas"
    )?.categoria,
    "Dos mediciones relacionadas"
);
assert.equal(
    catalogo.find(
        (ficha) => ficha.id === "anova-medidas-repetidas"
    )?.categoria,
    "Tres o más mediciones relacionadas"
);

const linealSimple = catalogo.find(
    (ficha) => ficha.id === "regresion-lineal-simple"
);
const linealMultiple = catalogo.find(
    (ficha) => ficha.id === "regresion-lineal-multiple"
);
const logisticaSimple = catalogo.find(
    (ficha) => ficha.id === "regresion-logistica-binaria-simple"
);
const logisticaMultiple = catalogo.find(
    (ficha) => ficha.id === "regresion-logistica-binaria-multiple"
);

assert.notEqual(
    linealSimple.definicion,
    linealMultiple.definicion,
    "Las regresiones lineales simple y múltiple deben tener teoría diferenciada."
);
assert.notEqual(
    linealSimple.ejemplo,
    linealMultiple.ejemplo,
    "Las regresiones lineales simple y múltiple deben tener ejemplos diferenciados."
);
assert.notEqual(
    logisticaSimple.definicion,
    logisticaMultiple.definicion,
    "Las regresiones logísticas simple y múltiple deben tener teoría diferenciada."
);
assert.notEqual(
    logisticaSimple.ejemplo,
    logisticaMultiple.ejemplo,
    "Las regresiones logísticas simple y múltiple deben tener ejemplos diferenciados."
);

const categorias = categoriasBiblioteca();
[
    "Una muestra",
    "Dos grupos independientes",
    "Dos mediciones relacionadas",
    "Tres o más grupos independientes",
    "Tres o más mediciones relacionadas",
    "Regresión",
    "Planificación muestral"
].forEach((categoria) => {
    assert.ok(
        categorias.includes(categoria),
        `Falta la categoría ${categoria}.`
    );
});

console.log(
    `✓ La Biblioteca metodológica validó ${catalogo.length} fichas, ${reglasEstadisticas.length} recomendaciones y ${categorias.length} categorías explícitas.`
);
