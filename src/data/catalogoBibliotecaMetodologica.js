import { fichasMetodologicas } from "./fichasMetodologicas.js";
import { fichasMetodologicasRelacionadas } from "./fichasMetodologicasRelacionadas.js";
import { fichasMetodologicasMultigrupo } from "./fichasMetodologicasMultigrupo.js";
import { fichasMetodologicasMedidasRepetidas } from "./fichasMetodologicasMedidasRepetidas.js";
import { fichasMetodologicasRelacionVariables } from "./fichasMetodologicasRelacionVariables.js";
import { fichasMetodologicasRegresion } from "./fichasMetodologicasRegresion.js";
import { fichasMetodologicasFiabilidad } from "./fichasMetodologicasFiabilidad.js";
import { fichasMetodologicasEvaluacionEducativa } from "./fichasMetodologicasEvaluacionEducativa.js";
import { fichasMetodologicasTamanoMuestra } from "./fichasMetodologicasTamanoMuestra.js";

const COLECCIONES = [
    fichasMetodologicas,
    fichasMetodologicasRelacionadas,
    fichasMetodologicasMultigrupo,
    fichasMetodologicasMedidasRepetidas,
    fichasMetodologicasRelacionVariables,
    fichasMetodologicasRegresion,
    fichasMetodologicasFiabilidad,
    fichasMetodologicasEvaluacionEducativa,
    fichasMetodologicasTamanoMuestra
];

function textoNormalizado(texto) {
    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function categoriaDe(id, ficha) {
    const texto = textoNormalizado(`${id} ${ficha.nombre}`);

    if (texto.includes("tamano de muestra") || texto.includes("potencia estadistica")) return "Planificación muestral";
    if (texto.includes("regresion")) return "Regresión";
    if (texto.includes("fiabilidad") || texto.includes("cronbach") || texto.includes("omega")) return "Instrumentos";
    if (texto.includes("evaluacion educativa") || texto.includes("analisis clasico") || texto.includes("dificultad")) return "Evaluación educativa";
    if (texto.includes("pearson") || texto.includes("spearman") || texto.includes("kendall") || texto.includes("correlacion")) return "Correlación";
    if (texto.includes("chi-cuadrado") || texto.includes("fisher") || texto.includes("cramer") || texto.includes("categorica")) return "Asociación categórica";
    if (texto.includes("anova") || texto.includes("kruskal") || texto.includes("friedman") || texto.includes("varios grupos")) return "Tres o más grupos";
    if (texto.includes("t de") || texto.includes("mann") || texto.includes("wilcoxon") || texto.includes("dos grupos") || texto.includes("pareadas")) return "Dos grupos";
    return "Otros procedimientos";
}

function tipoDe(id, ficha) {
    const texto = textoNormalizado(`${id} ${ficha.nombre} ${(ficha.alternativas || []).join(" ")}`);
    const noParametrica = ["mann", "wilcoxon", "kruskal", "friedman", "spearman", "kendall", "fisher"].some((termino) => texto.includes(termino));
    const psicometrica = texto.includes("fiabilidad") || texto.includes("evaluacion educativa");
    const planificacion = texto.includes("tamano de muestra") || texto.includes("potencia estadistica");

    if (psicometrica) return "Psicométrica";
    if (planificacion) return "Planificación";
    return noParametrica ? "No paramétrica" : "Paramétrica o modelización";
}

function rutaDe(id, ficha) {
    const texto = textoNormalizado(`${id} ${ficha.nombre}`);

    if (texto.includes("tamano de muestra") || texto.includes("potencia estadistica")) return "calculadoraTamanoMuestraPotencia";
    if (texto.includes("fiabilidad") || texto.includes("cronbach") || texto.includes("omega")) return "calculadoraFiabilidadCuestionarios";
    if (texto.includes("evaluacion educativa") || texto.includes("analisis clasico")) return "calculadoraEvaluacionEducativa";
    if (texto.includes("regresion logistica")) return "calculadoraRegresionLogistica";
    if (texto.includes("regresion de poisson") || texto.includes("binomial negativa")) return "calculadoraRegresionConteo";
    if (texto.includes("regresion lineal")) return "calculadoraRegresion";
    if (texto.includes("pearson") || texto.includes("spearman") || texto.includes("kendall")) return "calculadoraRelacionVariables";
    if (texto.includes("chi-cuadrado") || texto.includes("fisher") || texto.includes("cramer")) return "calculadoraAsociacionCategorica";
    if (texto.includes("anova de medidas repetidas") || texto.includes("friedman") || texto.includes("mediciones relacionadas")) return "calculadoraTresOMasMedicionesRelacionadas";
    if (texto.includes("anova") || texto.includes("kruskal")) return "calculadoraTresOMasGrupos";
    if (texto.includes("pareadas") || texto.includes("wilcoxon") || texto.includes("muestras relacionadas")) return "calculadoraDosMuestrasRelacionadas";
    if (texto.includes("student") || texto.includes("welch") || texto.includes("mann")) return "calculadoraDosGrupos";
    return null;
}

function palabrasClave(id, ficha, categoria, tipo) {
    return textoNormalizado([
        id,
        ficha.nombre,
        ficha.definicion,
        categoria,
        tipo,
        ...(ficha.cuandoUsar || []),
        ...(ficha.supuestos || []),
        ...(ficha.alternativas || [])
    ].join(" "));
}

export function obtenerCatalogoBiblioteca() {
    const mapa = new Map();

    COLECCIONES.forEach((coleccion) => {
        Object.entries(coleccion || {}).forEach(([id, ficha]) => {
            if (!ficha?.nombre) return;
            const categoria = categoriaDe(id, ficha);
            const tipo = tipoDe(id, ficha);
            mapa.set(id, {
                id,
                ...ficha,
                categoria,
                tipo,
                ruta: rutaDe(id, ficha),
                palabrasClave: palabrasClave(id, ficha, categoria, tipo)
            });
        });
    });

    return [...mapa.values()].sort((a, b) =>
        a.nombre.localeCompare(b.nombre, "es")
    );
}

export function categoriasBiblioteca() {
    return [...new Set(
        obtenerCatalogoBiblioteca().map((ficha) => ficha.categoria)
    )].sort((a, b) => a.localeCompare(b, "es"));
}
