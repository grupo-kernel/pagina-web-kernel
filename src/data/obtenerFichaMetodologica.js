import {
    obtenerFichaMetodologica as obtenerFichaBase
} from "./fichasMetodologicas.js";

import {
    fichasMetodologicasRelacionadas
} from "./fichasMetodologicasRelacionadas.js";

export function obtenerFichaMetodologica(id) {
    return (
        fichasMetodologicasRelacionadas[id] ||
        obtenerFichaBase(id)
    );
}
