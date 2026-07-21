import {
    obtenerFichaMetodologica as obtenerFichaBase
} from "./fichasMetodologicas.js";

import {
    fichasMetodologicasRelacionadas
} from "./fichasMetodologicasRelacionadas.js";

import {
    fichasMetodologicasMultigrupo
} from "./fichasMetodologicasMultigrupo.js";

import {
    fichasMetodologicasMedidasRepetidas
} from "./fichasMetodologicasMedidasRepetidas.js";

export function obtenerFichaMetodologica(id) {
    return (
        fichasMetodologicasMedidasRepetidas[id] ||
        fichasMetodologicasMultigrupo[id] ||
        fichasMetodologicasRelacionadas[id] ||
        obtenerFichaBase(id)
    );
}
