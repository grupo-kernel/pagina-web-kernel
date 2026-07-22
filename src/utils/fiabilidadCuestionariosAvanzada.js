import {
    analizarFiabilidadCuestionario
} from "./fiabilidadCuestionarios.js";

const EPS = 1e-12;

function media(valores) {
    return valores.reduce((total, valor) => total + valor, 0) /
        valores.length;
}

function varianzaMuestral(valores) {
    if (valores.length < 2) return null;
    const promedio = media(valores);

    return valores.reduce(
        (total, valor) => total + (valor - promedio) ** 2,
        0
    ) / (valores.length - 1);
}

function transponer(matriz) {
    return matriz[0].map((_, columna) =>
        matriz.map((fila) => fila[columna])
    );
}

function sumarFilas(matriz) {
    return matriz.map((fila) =>
        fila.reduce((total, valor) => total + valor, 0)
    );
}

function alfaCronbachRapido(matriz) {
    if (!matriz.length || matriz[0].length < 2) return null;

    const k = matriz[0].length;
    const varianzasItems = transponer(matriz).map(varianzaMuestral);
    const varianzaTotal = varianzaMuestral(sumarFilas(matriz));

    if (
        varianzaTotal === null ||
        varianzaTotal < EPS ||
        varianzasItems.some((valor) => valor === null)
    ) {
        return null;
    }

    return k / (k - 1) *
        (1 -
            varianzasItems.reduce((total, valor) => total + valor, 0) /
                varianzaTotal);
}

function covarianzaMuestral(x, y) {
    const mediaX = media(x);
    const mediaY = media(y);

    return x.reduce(
        (total, valor, indice) =>
            total + (valor - mediaX) * (y[indice] - mediaY),
        0
    ) / (x.length - 1);
}

function correlacion(x, y) {
    const varianzaX = varianzaMuestral(x);
    const varianzaY = varianzaMuestral(y);

    if (
        varianzaX === null ||
        varianzaY === null ||
        varianzaX < EPS ||
        varianzaY < EPS
    ) {
        return null;
    }

    return Math.max(
        -1,
        Math.min(
            1,
            covarianzaMuestral(x, y) /
                Math.sqrt(varianzaX * varianzaY)
        )
    );
}

function matrizCorrelaciones(matriz) {
    const columnas = transponer(matriz);

    return columnas.map((columnaA, i) =>
        columnas.map((columnaB, j) =>
            i === j ? 1 : correlacion(columnaA, columnaB) ?? 0
        )
    );
}

function multiplicarMatrizVector(matriz, vector) {
    return matriz.map((fila) =>
        fila.reduce(
            (total, valor, indice) => total + valor * vector[indice],
            0
        )
    );
}

function productoPunto(a, b) {
    return a.reduce(
        (total, valor, indice) => total + valor * b[indice],
        0
    );
}

function omegaRapido(matriz) {
    const correlaciones = matrizCorrelaciones(matriz);
    const k = correlaciones.length;
    let vector = Array(k).fill(1 / Math.sqrt(k));

    for (let iteracion = 0; iteracion < 200; iteracion += 1) {
        const producto = multiplicarMatrizVector(
            correlaciones,
            vector
        );
        const norma = Math.sqrt(productoPunto(producto, producto));

        if (norma < EPS) return null;

        const siguiente = producto.map((valor) => valor / norma);
        const cambio = Math.max(
            ...siguiente.map((valor, indice) =>
                Math.abs(valor - vector[indice])
            )
        );
        vector = siguiente;

        if (cambio < 1e-10) break;
    }

    if (vector.reduce((total, valor) => total + valor, 0) < 0) {
        vector = vector.map((valor) => -valor);
    }

    const valorPropio = productoPunto(
        vector,
        multiplicarMatrizVector(correlaciones, vector)
    );
    const raiz = Math.sqrt(Math.max(valorPropio, 0));
    const cargas = vector.map((valor) =>
        Math.max(-0.999, Math.min(0.999, raiz * valor))
    );
    const unicidades = cargas.map((carga) =>
        Math.max(1 - carga ** 2, EPS)
    );
    const sumaCargas = cargas.reduce(
        (total, valor) => total + valor,
        0
    );
    const denominador = sumaCargas ** 2 +
        unicidades.reduce((total, valor) => total + valor, 0);

    return denominador > EPS
        ? sumaCargas ** 2 / denominador
        : null;
}

function calcularKr20(matriz) {
    const valores = matriz.flat();
    const dicotomico = valores.every(
        (valor) => valor === 0 || valor === 1
    );

    if (!dicotomico) {
        return {
            aplica: false,
            valor: null,
            razon:
                "KR-20 solo se calcula cuando todos los ítems están codificados con 0 y 1."
        };
    }

    const k = matriz[0].length;
    const columnas = transponer(matriz);
    const sumaPQ = columnas.reduce((total, columna) => {
        const p = media(columna);
        return total + p * (1 - p);
    }, 0);
    const varianzaTotal = varianzaMuestral(sumarFilas(matriz));

    if (varianzaTotal === null || varianzaTotal < EPS) {
        return {
            aplica: true,
            valor: null,
            razon:
                "La puntuación total no presenta variabilidad suficiente para calcular KR-20."
        };
    }

    return {
        aplica: true,
        valor: k / (k - 1) * (1 - sumaPQ / varianzaTotal),
        razon:
            "Todos los ítems son dicotómicos; KR-20 es equivalente al alfa calculado sobre puntuaciones 0/1."
    };
}

function crearGenerador(semilla) {
    let estado = Number(semilla) >>> 0;

    return () => {
        estado += 0x6D2B79F5;
        let t = estado;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function percentil(valoresOrdenados, proporcion) {
    if (!valoresOrdenados.length) return null;
    if (proporcion <= 0) return valoresOrdenados[0];
    if (proporcion >= 1) return valoresOrdenados.at(-1);

    const posicion = (valoresOrdenados.length - 1) * proporcion;
    const inferior = Math.floor(posicion);
    const superior = Math.ceil(posicion);

    return inferior === superior
        ? valoresOrdenados[inferior]
        : valoresOrdenados[inferior] * (superior - posicion) +
            valoresOrdenados[superior] * (posicion - inferior);
}

function intervaloPercentil(valores, nivelConfianza) {
    const ordenados = valores
        .filter(Number.isFinite)
        .sort((a, b) => a - b);

    if (ordenados.length < 20) {
        return {
            inferior: null,
            superior: null,
            remuestrasValidas: ordenados.length
        };
    }

    const cola = (1 - nivelConfianza) / 2;

    return {
        inferior: percentil(ordenados, cola),
        superior: percentil(ordenados, 1 - cola),
        remuestrasValidas: ordenados.length
    };
}

function calcularBootstrap({
    matriz,
    numeroRemuestras,
    nivelConfianza,
    semilla
}) {
    const aleatorio = crearGenerador(semilla);
    const n = matriz.length;
    const alfas = [];
    const omegas = [];

    for (
        let repeticion = 0;
        repeticion < numeroRemuestras;
        repeticion += 1
    ) {
        const muestra = Array.from({ length: n }, () =>
            matriz[Math.floor(aleatorio() * n)]
        );
        const alfa = alfaCronbachRapido(muestra);
        const omega = omegaRapido(muestra);

        if (Number.isFinite(alfa)) alfas.push(alfa);
        if (Number.isFinite(omega)) omegas.push(omega);
    }

    return {
        metodo: "bootstrap percentil",
        nivelConfianza,
        numeroRemuestras,
        alfa: intervaloPercentil(alfas, nivelConfianza),
        omega: intervaloPercentil(omegas, nivelConfianza)
    };
}

function diagnosticarPares(correlaciones, nombresItems) {
    const redundantes = [];
    const negativos = [];

    for (let i = 0; i < correlaciones.length; i += 1) {
        for (let j = i + 1; j < correlaciones.length; j += 1) {
            const r = correlaciones[i][j];
            const fila = {
                itemA: nombresItems[i],
                itemB: nombresItems[j],
                correlacion: r
            };

            if (r >= 0.80) redundantes.push(fila);
            if (r <= -0.20) negativos.push(fila);
        }
    }

    return {
        paresRedundantes: redundantes.sort(
            (a, b) => b.correlacion - a.correlacion
        ),
        paresNegativos: negativos.sort(
            (a, b) => a.correlacion - b.correlacion
        )
    };
}

export function analizarFiabilidadCuestionarioAvanzada({
    numeroRemuestras = 500,
    nivelConfianzaBootstrap = 0.95,
    semillaBootstrap = 20260721,
    ...solicitudBase
}) {
    const base = analizarFiabilidadCuestionario(solicitudBase);
    const remuestras = Math.max(
        100,
        Math.min(2000, Math.trunc(Number(numeroRemuestras) || 500))
    );
    const nivel = Number(nivelConfianzaBootstrap);

    if (!(nivel > 0 && nivel < 1)) {
        throw new Error(
            "El nivel de confianza bootstrap debe estar entre 0 y 1."
        );
    }

    const kr20 = calcularKr20(base.matrizRecodificada);
    const bootstrap = calcularBootstrap({
        matriz: base.matrizRecodificada,
        numeroRemuestras: remuestras,
        nivelConfianza: nivel,
        semilla: semillaBootstrap
    });
    const pares = diagnosticarPares(
        base.correlaciones,
        base.nombresItems
    );
    const nuevasAdvertencias = [...base.advertencias];

    if (pares.paresRedundantes.length) {
        nuevasAdvertencias.push(
            `Se detectaron ${pares.paresRedundantes.length} pares de ítems con correlación interítem de 0.80 o más; revise posible redundancia de contenido.`
        );
    }
    if (pares.paresNegativos.length) {
        nuevasAdvertencias.push(
            `Se detectaron ${pares.paresNegativos.length} pares con correlación igual o inferior a −0.20; revise codificación, inversión y coherencia del constructo.`
        );
    }

    return {
        ...base,
        fiabilidad: {
            ...base.fiabilidad,
            kr20: kr20.valor
        },
        kr20,
        intervalosBootstrap: bootstrap,
        diagnosticosAvanzados: pares,
        advertencias: nuevasAdvertencias
    };
}
