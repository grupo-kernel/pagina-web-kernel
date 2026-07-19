import { reglasEstadisticas } from "../data/reglasEstadisticas.js";

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

/**
 * Busca todas las reglas compatibles y selecciona
 * la más específica, es decir, la que contiene
 * el mayor número de condiciones.
 */
export function buscarReglaEstadistica(estado) {
    const reglasCompatibles = reglasEstadisticas
        .filter((regla) =>
            coincideRegla(estado, regla.condiciones)
        )
        .sort(
            (reglaA, reglaB) =>
                Object.keys(reglaB.condiciones).length -
                Object.keys(reglaA.condiciones).length
        );

    return reglasCompatibles[0] || null;
}

/**
 * Devuelve únicamente la ficha de resultado
 * correspondiente a la regla encontrada.
 */
export function obtenerResultadoEstadistico(estado) {
    const regla = buscarReglaEstadistica(estado);

    if (!regla) {
        return {
            id: "sin-regla",
            prueba: "Revisión metodológica requerida",
            categoria: "Caso no identificado",
            tipo: "Evaluación especializada",
            descripcion:
                "Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",
            efecto:
                "El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."
        };
    }

    return {
        id: regla.id,
        ...regla.resultado
    };
}
