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

import {
    fichasMetodologicasRelacionVariables
} from "./fichasMetodologicasRelacionVariables.js";

export function obtenerFichaMetodologica(id) {
    return (
        fichasMetodologicasRelacionVariables[id] ||
        fichasMetodologicasMedidasRepetidas[id] ||
        fichasMetodologicasMultigrupo[id] ||
        fichasMetodologicasRelacionadas[id] ||
        obtenerFichaBase(id)
    );
}
