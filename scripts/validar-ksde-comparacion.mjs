import assert from "node:assert/strict";
import {
    buscarReglasEstadisticas,
    obtenerResultadoEstadistico
} from "../src/utils/motorReglas.js";
import {
    ESTADOS_DECISION,
    POLITICAS_DECISION_COMPARACION
} from "../src/data/politicasDecisionEstadistica.js";

const casos = [
    {
        nombre: "Welch para dos medias independientes con varianzas dudosas",
        estado: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "dos",
            relacion: "independientes",
            normalidad: "si",
            varianzas: "no-se"
        },
        esperado: "t-welch-independientes"
    },
    {
        nombre: "Student para dos medias independientes con homogeneidad declarada",
        estado: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "dos",
            relacion: "independientes",
            normalidad: "si",
            varianzas: "si"
        },
        esperado: "t-student-independientes"
    },
    {
        nombre: "Mann–Whitney para resultado ordinal independiente",
        estado: {
            objetivo: "comparar",
            tipoVariable: "ordinal",
            numeroGrupos: "dos",
            relacion: "independientes",
            normalidad: "no-se"
        },
        esperado: "mann-whitney"
    },
    {
        nombre: "t pareada para media de diferencias",
        estado: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "dos",
            relacion: "relacionadas",
            normalidad: "si"
        },
        esperado: "t-student-relacionadas"
    },
    {
        nombre: "ANOVA de Welch para tres o más medias independientes",
        estado: {
            objetivo: "comparar",
            tipoVariable: "cuantitativa",
            numeroGrupos: "tres-mas",
            relacion: "independientes",
            normalidad: "si",
            varianzas: "no"
        },
        esperado: "anova-welch"
    },
    {
        nombre: "Friedman para varias mediciones ordinales relacionadas",
        estado: {
            objetivo: "comparar",
            tipoVariable: "ordinal",
            numeroGrupos: "tres-mas",
            relacion: "relacionadas",
            normalidad: "no-se"
        },
        esperado: "friedman"
    }
];

casos.forEach(({ nombre, estado, esperado }) => {
    const resultado = obtenerResultadoEstadistico(estado);

    assert.equal(resultado.id, esperado, nombre);
    assert.equal(resultado.pruebaPrincipal, resultado.prueba);
    assert.ok(
        Object.values(ESTADOS_DECISION).includes(resultado.estadoDecision),
        `${nombre}: estado de decisión inválido.`
    );
    assert.ok(resultado.estimando, `${nombre}: falta el estimando.`);
    assert.ok(resultado.razones.length >= 2, `${nombre}: faltan razones.`);
    assert.ok(resultado.supuestos.length >= 2, `${nombre}: faltan supuestos.`);
    assert.ok(resultado.efectoEstructurado, `${nombre}: falta efecto estructurado.`);
    assert.equal(resultado.diagnosticoMotor.reglaSeleccionada, esperado);
    assert.ok(resultado.diagnosticoMotor.reglasCompatibles >= 1);
});

const resultadoMannWhitney = obtenerResultadoEstadistico(casos[2].estado);
assert.match(
    resultadoMannWhitney.advertencias.join(" "),
    /no debe presentarse automáticamente como una comparación de medianas/i
);

const resultadoWelch = obtenerResultadoEstadistico(casos[0].estado);
assert.equal(resultadoWelch.alternativa.id, "mann-whitney");
assert.match(resultadoWelch.estimando, /diferencia de medias/i);

const resultadoStudent = obtenerResultadoEstadistico(casos[1].estado);
assert.equal(resultadoStudent.estadoDecision, ESTADOS_DECISION.CONDICIONADA);
assert.equal(resultadoStudent.alternativa.id, "t-welch-independientes");

const sinInformacion = obtenerResultadoEstadistico({});
assert.equal(
    sinInformacion.estadoDecision,
    ESTADOS_DECISION.INFORMACION_INSUFICIENTE
);
assert.equal(sinInformacion.diagnosticoMotor.reglasCompatibles, 0);

const noCubierto = obtenerResultadoEstadistico({
    objetivo: "comparar",
    tipoVariable: "tiempo-supervivencia"
});
assert.equal(
    noCubierto.estadoDecision,
    ESTADOS_DECISION.CASO_NO_CUBIERTO
);

assert.ok(
    buscarReglasEstadisticas(casos[0].estado).length >= 1,
    "El motor debe exponer las reglas compatibles para auditoría."
);

Object.entries(POLITICAS_DECISION_COMPARACION).forEach(([id, politica]) => {
    assert.ok(politica.estimando, `${id}: la política debe declarar el estimando.`);
    assert.ok(politica.razones.length, `${id}: la política debe justificar la selección.`);
    assert.ok(politica.supuestos.length, `${id}: la política debe declarar supuestos.`);
    assert.ok(
        Object.values(ESTADOS_DECISION).includes(politica.estadoDecision),
        `${id}: estado de decisión no reconocido.`
    );
});

console.log(
    `✓ KSDE 2.0 validó ${casos.length} rutas de comparación y ${Object.keys(POLITICAS_DECISION_COMPARACION).length} políticas metodológicas.`
);
