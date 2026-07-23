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
import {
    fichasMetodologicasRegresion
} from "./fichasMetodologicasRegresion.js";
import {
    fichasMetodologicasFiabilidad
} from "./fichasMetodologicasFiabilidad.js";
import {
    fichasMetodologicasEvaluacionEducativa
} from "./fichasMetodologicasEvaluacionEducativa.js";
import {
    fichasMetodologicasTamanoMuestra
} from "./fichasMetodologicasTamanoMuestra.js";
import {
    fichasMetodologicasComplementarias
} from "./fichasMetodologicasComplementarias.js";
import {
    obtenerMetadatosFichaMetodologica
} from "./metadatosFichasMetodologicas.js";

export function obtenerFichaMetodologica(id) {
    const ficha = (
        fichasMetodologicasComplementarias[id] ||
        fichasMetodologicasTamanoMuestra[id] ||
        fichasMetodologicasEvaluacionEducativa[id] ||
        fichasMetodologicasFiabilidad[id] ||
        fichasMetodologicasRegresion[id] ||
        fichasMetodologicasRelacionVariables[id] ||
        fichasMetodologicasMedidasRepetidas[id] ||
        fichasMetodologicasMultigrupo[id] ||
        fichasMetodologicasRelacionadas[id] ||
        obtenerFichaBase(id)
    );

    if (!ficha) return undefined;

    return {
        ...ficha,
        ...(obtenerMetadatosFichaMetodologica(id) || {})
    };
}
