import * as jStatModule from "jstat";

const jStat = jStatModule.jStat ?? jStatModule.default?.jStat;

if (!jStat) {
    throw new Error("No fue posible cargar el motor estadístico jStat.");
}

function limitarProbabilidad(valor) {
    return Math.min(1, Math.max(0, valor));
}

function convertirBinario(valor, fila, columna) {
    if (valor === true || valor === 1 || valor === "1") return 1;
    if (valor === false || valor === 0 || valor === "0") return 0;

    const texto = String(valor ?? "").trim().toLowerCase();
    if (["si", "sí", "yes", "verdadero", "true"].includes(texto)) return 1;
    if (["no", "false", "falso"].includes(texto)) return 0;

    throw new TypeError(
        `La observación de la fila ${fila + 1}, columna ${columna + 1} debe codificarse como 0 o 1.`
    );
}

function validarMatriz(matriz, minimoColumnas = 2) {
    if (!Array.isArray(matriz) || matriz.length < 2) {
        throw new RangeError("Se requieren al menos dos participantes o unidades relacionadas.");
    }

    const columnas = Array.isArray(matriz[0]) ? matriz[0].length : 0;
    if (columnas < minimoColumnas) {
        throw new RangeError(`Se requieren al menos ${minimoColumnas} mediciones o condiciones.`);
    }

    const datos = matriz.map((fila, indiceFila) => {
        if (!Array.isArray(fila) || fila.length !== columnas) {
            throw new RangeError(
                `La fila ${indiceFila + 1} no contiene ${columnas} observaciones.`
            );
        }

        return fila.map((valor, indiceColumna) =>
            convertirBinario(valor, indiceFila, indiceColumna)
        );
    });

    return { datos, n: datos.length, k: columnas };
}

function validarEtiquetas(etiquetas, cantidad) {
    if (etiquetas == null) {
        return Array.from({ length: cantidad }, (_, indice) => `Condición ${indice + 1}`);
    }

    if (!Array.isArray(etiquetas) || etiquetas.length !== cantidad) {
        throw new RangeError(`Debe proporcionar exactamente ${cantidad} etiquetas.`);
    }

    const limpias = etiquetas.map((etiqueta, indice) => {
        const texto = String(etiqueta ?? "").trim();
        if (!texto) throw new Error(`La etiqueta ${indice + 1} está vacía.`);
        return texto;
    });

    if (new Set(limpias).size !== limpias.length) {
        throw new Error("Las etiquetas de las condiciones deben ser diferentes.");
    }

    return limpias;
}

function combinacion(n, k) {
    const limite = Math.min(k, n - k);
    let resultado = 1;

    for (let i = 1; i <= limite; i += 1) {
        resultado *= (n - limite + i) / i;
    }

    return resultado;
}

function valorPBinomialExactoBilateral(exitos, ensayos) {
    if (ensayos === 0) return 1;

    const extremo = Math.min(exitos, ensayos - exitos);
    let acumulado = 0;

    for (let i = 0; i <= extremo; i += 1) {
        acumulado += combinacion(ensayos, i) * (0.5 ** ensayos);
    }

    return limitarProbabilidad(2 * acumulado);
}

function intervaloDiferenciaPareada(diferencias, nivelConfianza) {
    const n = diferencias.length;
    const media = diferencias.reduce((suma, valor) => suma + valor, 0) / n;
    const varianza = diferencias.reduce(
        (suma, valor) => suma + (valor - media) ** 2,
        0
    ) / Math.max(1, n - 1);
    const errorEstandar = Math.sqrt(varianza / n);
    const alfa = 1 - nivelConfianza;
    const z = jStat.normal.inv(1 - alfa / 2, 0, 1);

    return {
        nivel: nivelConfianza,
        metodo: "Intervalo normal para la diferencia de proporciones pareadas",
        errorEstandar,
        inferior: Math.max(-1, media - z * errorEstandar),
        superior: Math.min(1, media + z * errorEstandar)
    };
}

function resumenColumnas(datos, etiquetas) {
    const n = datos.length;
    return etiquetas.map((etiqueta, indice) => {
        const exitos = datos.reduce((suma, fila) => suma + fila[indice], 0);
        return {
            indice,
            etiqueta,
            exitos,
            fracasos: n - exitos,
            proporcion: exitos / n
        };
    });
}

export function pruebaMcNemar(matriz, opciones = {}) {
    const {
        etiquetas = null,
        nivelConfianza = 0.95,
        metodo = "automatico"
    } = opciones;

    if (!(nivelConfianza > 0 && nivelConfianza < 1)) {
        throw new RangeError("El nivel de confianza debe estar entre 0 y 1.");
    }

    const { datos, n, k } = validarMatriz(matriz, 2);
    if (k !== 2) {
        throw new RangeError("La prueba de McNemar requiere exactamente dos mediciones relacionadas.");
    }

    const nombres = validarEtiquetas(etiquetas, 2);
    let ambosNo = 0;
    let cambio01 = 0;
    let cambio10 = 0;
    let ambosSi = 0;

    datos.forEach(([primera, segunda]) => {
        if (primera === 0 && segunda === 0) ambosNo += 1;
        else if (primera === 0 && segunda === 1) cambio01 += 1;
        else if (primera === 1 && segunda === 0) cambio10 += 1;
        else ambosSi += 1;
    });

    const discordantes = cambio01 + cambio10;
    const valorPExacto = valorPBinomialExactoBilateral(cambio01, discordantes);
    const chiCuadrado = discordantes === 0
        ? 0
        : ((Math.max(0, Math.abs(cambio01 - cambio10) - 1)) ** 2) / discordantes;
    const valorPAsintotico = discordantes === 0
        ? 1
        : limitarProbabilidad(1 - jStat.chisquare.cdf(chiCuadrado, 1));

    const usarExacta = metodo === "exacta" ||
        (metodo === "automatico" && discordantes <= 25);
    const valorP = usarExacta ? valorPExacto : valorPAsintotico;
    const diferencias = datos.map(([primera, segunda]) => segunda - primera);
    const diferenciaProporciones = (cambio01 - cambio10) / n;
    const correccion = cambio01 === 0 || cambio10 === 0 ? 0.5 : 0;
    const oddsRatioPareada = (cambio01 + correccion) / (cambio10 + correccion);

    return {
        id: "mcnemar",
        nombre: usarExacta ? "Prueba exacta de McNemar" : "Prueba de McNemar",
        metodo: usarExacta
            ? "Prueba binomial exacta bilateral sobre los pares discordantes"
            : "Aproximación chi-cuadrado bilateral con corrección por continuidad",
        n,
        etiquetas: nombres,
        tablaPareada: {
            ambosNo,
            cambio01,
            cambio10,
            ambosSi
        },
        resumenCondiciones: resumenColumnas(datos, nombres),
        discordantes,
        estadistico: {
            simbolo: usarExacta ? "b" : "χ²",
            valor: usarExacta ? Math.min(cambio01, cambio10) : chiCuadrado
        },
        gradosLibertad: usarExacta ? null : 1,
        valorP,
        valorPExacto,
        valorPAsintotico,
        significativo: valorP < 1 - nivelConfianza,
        diferenciaProporciones,
        intervaloConfianzaDiferencia: intervaloDiferenciaPareada(
            diferencias,
            nivelConfianza
        ),
        tamanioEfecto: {
            oddsRatioPareada,
            correccionHaldaneAnscombe: correccion,
            diferenciaProporciones
        },
        advertencias: discordantes < 10
            ? ["Hay pocos pares discordantes; la versión exacta es preferible."]
            : []
    };
}

function ajustarHolm(comparaciones) {
    const ordenadas = comparaciones
        .map((comparacion, indice) => ({ comparacion, indice }))
        .sort((a, b) => a.comparacion.valorP - b.comparacion.valorP);
    const m = ordenadas.length;
    let anterior = 0;

    ordenadas.forEach(({ comparacion }, posicion) => {
        const ajustado = Math.min(1, (m - posicion) * comparacion.valorP);
        comparacion.valorPAjustadoHolm = Math.max(anterior, ajustado);
        anterior = comparacion.valorPAjustadoHolm;
    });

    return comparaciones;
}

export function pruebaCochranQ(matriz, opciones = {}) {
    const {
        etiquetas = null,
        nivelConfianza = 0.95,
        comparacionesPosteriores = true
    } = opciones;

    if (!(nivelConfianza > 0 && nivelConfianza < 1)) {
        throw new RangeError("El nivel de confianza debe estar entre 0 y 1.");
    }

    const { datos, n, k } = validarMatriz(matriz, 3);
    const nombres = validarEtiquetas(etiquetas, k);
    const totalesColumnas = Array.from({ length: k }, (_, columna) =>
        datos.reduce((suma, fila) => suma + fila[columna], 0)
    );
    const totalesFilas = datos.map((fila) =>
        fila.reduce((suma, valor) => suma + valor, 0)
    );
    const total = totalesColumnas.reduce((suma, valor) => suma + valor, 0);
    const denominador = k * total - totalesFilas.reduce(
        (suma, valor) => suma + valor ** 2,
        0
    );
    const numerador = (k - 1) * (
        k * totalesColumnas.reduce((suma, valor) => suma + valor ** 2, 0) -
        total ** 2
    );
    const q = denominador === 0 ? 0 : numerador / denominador;
    const gradosLibertad = k - 1;
    const valorP = denominador === 0
        ? 1
        : limitarProbabilidad(1 - jStat.chisquare.cdf(q, gradosLibertad));
    const alfa = 1 - nivelConfianza;

    const comparaciones = [];
    if (comparacionesPosteriores) {
        for (let i = 0; i < k - 1; i += 1) {
            for (let j = i + 1; j < k; j += 1) {
                const pares = datos.map((fila) => [fila[i], fila[j]]);
                const resultado = pruebaMcNemar(pares, {
                    etiquetas: [nombres[i], nombres[j]],
                    nivelConfianza,
                    metodo: "exacta"
                });
                comparaciones.push({
                    condicion1: nombres[i],
                    condicion2: nombres[j],
                    valorP: resultado.valorP,
                    diferenciaProporciones: resultado.diferenciaProporciones,
                    oddsRatioPareada: resultado.tamanioEfecto.oddsRatioPareada
                });
            }
        }
        ajustarHolm(comparaciones);
        comparaciones.forEach((comparacion) => {
            comparacion.significativaAjustada = comparacion.valorPAjustadoHolm < alfa;
        });
    }

    return {
        id: "q-cochran",
        nombre: "Prueba Q de Cochran",
        metodo:
            "Comparación global de tres o más proporciones relacionadas mediante respuestas binarias",
        n,
        k,
        etiquetas: nombres,
        resumenCondiciones: resumenColumnas(datos, nombres),
        totalesFilas,
        estadistico: {
            simbolo: "Q",
            valor: q
        },
        gradosLibertad,
        valorP,
        significativo: valorP < alfa,
        tamanioEfecto: {
            wKendallEquivalente: q / (n * (k - 1))
        },
        comparacionesPosteriores: comparaciones,
        ajusteMultiplicidad: comparacionesPosteriores ? "Holm" : null,
        advertencias: denominador === 0
            ? ["Todas las unidades presentan el mismo patrón; no existe variación para contrastar."]
            : []
    };
}

export function analizarProporcionesRelacionadas({
    matriz,
    etiquetas,
    prueba,
    nivelConfianza = 0.95,
    metodoMcNemar = "automatico"
}) {
    if (prueba === "mcnemar") {
        return pruebaMcNemar(matriz, {
            etiquetas,
            nivelConfianza,
            metodo: metodoMcNemar
        });
    }

    if (prueba === "q-cochran") {
        return pruebaCochranQ(matriz, {
            etiquetas,
            nivelConfianza,
            comparacionesPosteriores: true
        });
    }

    throw new Error("La prueba de proporciones relacionadas solicitada no está disponible.");
}
