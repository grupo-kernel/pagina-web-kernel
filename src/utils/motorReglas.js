import { reglasEstadisticas } from "../data/reglasEstadisticas.js";
import {
    ESTADOS_DECISION,
    obtenerPoliticaDecision
} from "../data/politicasDecisionEstadistica.js";

/**
 * Comprueba si el valor almacenado en el estado satisface
 * una condición concreta de una regla estadística.
 */
function coincideValor(valorEstado, condicion) {
    if (Array.isArray(condicion)) {
        return condicion.includes(valorEstado);
    }

    return valorEstado === condicion;
}

/**
 * Determina si todas las condiciones de una regla
 * coinciden con las respuestas actuales del asistente.
 */
function coincideRegla(estado, condiciones) {
    return Object.entries(condiciones).every(
        ([propiedad, condicion]) =>
            coincideValor(estado[propiedad], condicion)
    );
}

function especificidad(regla) {
    return Object.keys(regla.condiciones).length;
}

/**
 * Busca todas las reglas compatibles y selecciona
 * la más específica, es decir, la que contiene
 * el mayor número de condiciones.
 */
export function buscarReglasEstadisticas(estado) {
    return reglasEstadisticas
        .filter((regla) => coincideRegla(estado, regla.condiciones))
        .sort((reglaA, reglaB) => especificidad(reglaB) - especificidad(reglaA));
}

export function buscarReglaEstadistica(estado) {
    return buscarReglasEstadisticas(estado)[0] || null;
}

function crearResultadoSinRegla(estado) {
    const respuestasPresentes = Object.entries(estado || {})
        .filter(([, valor]) => valor !== "" && valor !== null && valor !== undefined)
        .map(([propiedad]) => propiedad);

    return {
        id: "sin-regla",
        prueba: "Revisión metodológica requerida",
        pruebaPrincipal: "Revisión metodológica requerida",
        categoria: "Caso no identificado",
        tipo: "Evaluación especializada",
        descripcion:
            "Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",
        efecto:
            "El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada.",
        estadoDecision: respuestasPresentes.length
            ? ESTADOS_DECISION.CASO_NO_CUBIERTO
            : ESTADOS_DECISION.INFORMACION_INSUFICIENTE,
        estimando: "",
        razones: [],
        supuestos: [],
        advertencias: [
            "No se debe forzar una recomendación cuando la información metodológica es insuficiente o el diseño aún no está cubierto."
        ],
        alternativa: null,
        efectoEstructurado: null,
        diagnosticoMotor: {
            reglasCompatibles: 0,
            respuestasPresentes
        }
    };
}

function enriquecerResultado(regla, reglasCompatibles) {
    const politica = obtenerPoliticaDecision(regla.id);
    const resultadoBase = {
        id: regla.id,
        ...regla.resultado
    };

    return {
        ...resultadoBase,
        pruebaPrincipal: resultadoBase.prueba,
        estadoDecision:
            politica?.estadoDecision || ESTADOS_DECISION.DEFINITIVA,
        estimando: politica?.estimando || "",
        razones: [...(politica?.razones || [])],
        supuestos: [...(politica?.supuestos || [])],
        advertencias: [...(politica?.advertencias || [])],
        alternativa: politica?.alternativa
            ? { ...politica.alternativa }
            : null,
        efectoEstructurado: politica?.efectoEstructurado
            ? { ...politica.efectoEstructurado }
            : null,
        diagnosticoMotor: {
            reglasCompatibles: reglasCompatibles.length,
            reglaSeleccionada: regla.id,
            especificidad: especificidad(regla),
            alternativasCompatibles: reglasCompatibles
                .slice(1)
                .map((candidata) => candidata.id)
        }
    };
}

/**
 * Devuelve la recomendación estadística y, cuando existe,
 * la política metodológica estructurada de KSDE 2.0.
 *
 * Se conservan las propiedades históricas (`prueba`, `categoria`,
 * `tipo`, `descripcion`, `efecto`) para mantener compatibilidad
 * con la interfaz y las calculadoras actuales.
 */
export function obtenerResultadoEstadistico(estado) {
    const reglasCompatibles = buscarReglasEstadisticas(estado);
    const regla = reglasCompatibles[0];

    if (!regla) {
        return crearResultadoSinRegla(estado);
    }

    return enriquecerResultado(regla, reglasCompatibles);
}
