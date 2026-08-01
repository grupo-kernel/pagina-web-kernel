import {
    pruebaTStudentRelacionadas,
    pruebaWilcoxonRelacionadas
} from "./estadisticaDosMuestrasRelacionadas.js";

function convertirNumero(valor, nombre) {
    const numero = Number(
        typeof valor === "string"
            ? valor.trim().replace(",", ".")
            : valor
    );

    if (!Number.isFinite(numero)) {
        throw new TypeError(
            `${nombre} debe ser un número finito.`
        );
    }

    return numero;
}

function validarMuestra(valores) {
    if (!Array.isArray(valores)) {
        throw new TypeError(
            "La muestra debe proporcionarse como un arreglo de valores."
        );
    }

    const muestra = valores.map((valor, indice) => {
        const numero = Number(
            typeof valor === "string"
                ? valor.trim().replace(",", ".")
                : valor
        );

        if (!Number.isFinite(numero)) {
            throw new TypeError(
                `La muestra contiene un valor no numérico en la posición ${indice + 1}.`
            );
        }

        return numero;
    });

    if (muestra.length < 2) {
        throw new RangeError(
            "La muestra debe contener al menos dos observaciones."
        );
    }

    return muestra;
}

function mediana(valores) {
    const ordenados = [...valores].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);

    return ordenados.length % 2
        ? ordenados[mitad]
        : (ordenados[mitad - 1] + ordenados[mitad]) / 2;
}

function estimadorHodgesLehmann(diferencias) {
    const promediosWalsh = [];

    for (let i = 0; i < diferencias.length; i += 1) {
        for (let j = i; j < diferencias.length; j += 1) {
            promediosWalsh.push(
                (diferencias[i] + diferencias[j]) / 2
            );
        }
    }

    return mediana(promediosWalsh);
}

export function pruebaTStudentUnaMuestra(
    valores,
    valorReferencia,
    opciones = {}
) {
    const muestra = validarMuestra(valores);
    const referencia = convertirNumero(
        valorReferencia,
        "El valor de referencia"
    );
    const referencias = new Array(muestra.length).fill(referencia);
    const resultadoBase = pruebaTStudentRelacionadas(
        muestra,
        referencias,
        opciones
    );

    const intervaloDiferencia = resultadoBase.intervaloConfianza;
    const intervaloMedia = {
        ...intervaloDiferencia,
        inferior: intervaloDiferencia.inferior + referencia,
        superior: intervaloDiferencia.superior + referencia
    };

    return {
        id: "t-student-una-muestra",
        nombre: "t de Student para una muestra",
        metodo:
            "Prueba bilateral de la media de una muestra respecto a un valor de referencia",
        muestra: resultadoBase.medicion1,
        valorReferencia: referencia,
        diferenciaMedia: resultadoBase.diferenciaMedia,
        errorEstandar: resultadoBase.errorEstandar,
        estadistico: resultadoBase.estadistico,
        gradosLibertad: resultadoBase.gradosLibertad,
        valorP: resultadoBase.valorP,
        intervaloConfianzaMedia: intervaloMedia,
        intervaloConfianzaDiferencia: intervaloDiferencia,
        tamanioEfecto: {
            dCohen: resultadoBase.tamanioEfecto.dZ,
            gHedges: resultadoBase.tamanioEfecto.gZ,
            correccionHedges:
                resultadoBase.tamanioEfecto.correccionHedges ?? 1
        }
    };
}

export function pruebaWilcoxonUnaMuestra(
    valores,
    valorReferencia
) {
    const muestra = validarMuestra(valores);
    const referencia = convertirNumero(
        valorReferencia,
        "El valor de referencia"
    );
    const referencias = new Array(muestra.length).fill(referencia);
    const resultadoBase = pruebaWilcoxonRelacionadas(
        muestra,
        referencias
    );
    const diferencias = resultadoBase.diferencias.valores;

    return {
        id: "wilcoxon-una-muestra",
        nombre: "Prueba de rangos con signo de Wilcoxon para una muestra",
        metodoValorP: resultadoBase.metodoValorP,
        muestra: resultadoBase.medicion1,
        valorReferencia: referencia,
        diferencias: resultadoBase.diferencias,
        medianaDiferencias: resultadoBase.diferencias.mediana,
        estimadorHodgesLehmann:
            estimadorHodgesLehmann(diferencias),
        nEfectivo: resultadoBase.nEfectivo,
        cantidadCeros: resultadoBase.cantidadCeros,
        sumaRangosPositivos:
            resultadoBase.sumaRangosPositivos,
        sumaRangosNegativos:
            resultadoBase.sumaRangosNegativos,
        estadistico: resultadoBase.estadistico,
        estadisticoZ: resultadoBase.estadisticoZ,
        valorP: resultadoBase.valorP,
        correccionEmpates:
            resultadoBase.correccionEmpates,
        tamanioEfecto: {
            correlacionBiserialRangos:
                resultadoBase.tamanioEfecto
                    .correlacionBiserialRangos,
            r: resultadoBase.tamanioEfecto.r
        }
    };
}

export function analizarUnaMuestra({
    valores,
    valorReferencia,
    prueba,
    nivelConfianza = 0.95
}) {
    switch (prueba) {
        case "t-una-muestra":
            return pruebaTStudentUnaMuestra(
                valores,
                valorReferencia,
                { nivelConfianza }
            );

        case "wilcoxon-una-muestra":
            return pruebaWilcoxonUnaMuestra(
                valores,
                valorReferencia
            );

        default:
            throw new Error(
                "La prueba de una muestra solicitada no está disponible."
            );
    }
}
