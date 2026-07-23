import { fichasMetodologicas } from "./fichasMetodologicas.js";
import { fichasMetodologicasRelacionadas } from "./fichasMetodologicasRelacionadas.js";
import { fichasMetodologicasMultigrupo } from "./fichasMetodologicasMultigrupo.js";
import { fichasMetodologicasMedidasRepetidas } from "./fichasMetodologicasMedidasRepetidas.js";
import { fichasMetodologicasRelacionVariables } from "./fichasMetodologicasRelacionVariables.js";
import { fichasMetodologicasRegresion } from "./fichasMetodologicasRegresion.js";
import { fichasMetodologicasFiabilidad } from "./fichasMetodologicasFiabilidad.js";
import { fichasMetodologicasEvaluacionEducativa } from "./fichasMetodologicasEvaluacionEducativa.js";
import { fichasMetodologicasTamanoMuestra } from "./fichasMetodologicasTamanoMuestra.js";
import { fichasMetodologicasComplementarias } from "./fichasMetodologicasComplementarias.js";
import {
    obtenerMetadatosFichaMetodologica
} from "./metadatosFichasMetodologicas.js";

const COLECCIONES = [
    fichasMetodologicas,
    fichasMetodologicasRelacionadas,
    fichasMetodologicasMultigrupo,
    fichasMetodologicasMedidasRepetidas,
    fichasMetodologicasRelacionVariables,
    fichasMetodologicasRegresion,
    fichasMetodologicasFiabilidad,
    fichasMetodologicasEvaluacionEducativa,
    fichasMetodologicasTamanoMuestra,
    fichasMetodologicasComplementarias
];

function textoNormalizado(texto) {
    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function palabrasClave(id, ficha, categoria, tipo) {
    return textoNormalizado([
        id,
        ficha.nombre,
        ficha.objetivo,
        ficha.definicion,
        categoria,
        tipo,
        ...(ficha.cuandoUsar || []),
        ...(ficha.cuandoNoUsar || []),
        ...(ficha.supuestos || []),
        ...(ficha.alternativas || []),
        ...(ficha.erroresFrecuentes || [])
    ].join(" "));
}

export function obtenerCatalogoBiblioteca() {
    const mapa = new Map();

    COLECCIONES.forEach((coleccion) => {
        Object.entries(coleccion || {}).forEach(([id, ficha]) => {
            if (!ficha?.nombre) return;
            const metadatos =
                obtenerMetadatosFichaMetodologica(id) || {
                    categoria: "Sin clasificar",
                    tipo: "Sin clasificar",
                    ruta: null
                };
            const { categoria, tipo } = metadatos;
            mapa.set(id, {
                id,
                ...ficha,
                ...metadatos,
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
