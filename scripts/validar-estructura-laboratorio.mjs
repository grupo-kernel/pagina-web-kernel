import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { MODULOS_LABORATORIO } from "../src/data/modulosLaboratorio.js";
import {
    ETAPAS_FLUJO_LABORATORIO,
    GRUPOS_CATALOGO_LABORATORIO,
    ID_MODULO_ASISTENTE
} from "../src/data/estructuraLaboratorio.js";

assert.deepEqual(
    ETAPAS_FLUJO_LABORATORIO.map((etapa) => etapa.titulo),
    ["Orientar", "Analizar", "Interpretar", "Reportar"],
    "El laboratorio debe conservar las cuatro etapas del flujo científico."
);
assert.equal(
    ETAPAS_FLUJO_LABORATORIO[0].accion?.valor,
    "asistentePruebas",
    "La etapa Orientar debe abrir el asistente metodológico."
);
assert.equal(
    ETAPAS_FLUJO_LABORATORIO[1].accion?.valor,
    "catalogo-analisis",
    "La etapa Analizar debe conducir al catálogo directo."
);
assert.equal(
    ETAPAS_FLUJO_LABORATORIO[2].accion,
    null,
    "Interpretar no debe enlazar a una función separada inexistente."
);
assert.equal(
    ETAPAS_FLUJO_LABORATORIO[3].accion,
    null,
    "Reportar no debe enlazar a una función separada inexistente."
);

const idsCatalogo = GRUPOS_CATALOGO_LABORATORIO.flatMap(
    (grupo) => grupo.modulos
);
const idsCatalogoUnicos = new Set(idsCatalogo);
const idsDirectosEsperados = MODULOS_LABORATORIO
    .filter((modulo) => modulo.id !== ID_MODULO_ASISTENTE)
    .map((modulo) => modulo.id)
    .sort();

assert.equal(
    idsCatalogo.length,
    idsCatalogoUnicos.size,
    "Ninguna herramienta debe aparecer dos veces en el catálogo directo."
);
assert.deepEqual(
    [...idsCatalogoUnicos].sort(),
    idsDirectosEsperados,
    "Todas las herramientas directas deben aparecer exactamente una vez."
);
assert.ok(
    MODULOS_LABORATORIO.some(
        (modulo) => modulo.id === ID_MODULO_ASISTENTE
    ),
    "El módulo del asistente debe existir en el catálogo maestro."
);
assert.ok(
    !idsCatalogoUnicos.has(ID_MODULO_ASISTENTE),
    "El asistente no debe duplicarse dentro del catálogo directo."
);

const fuenteLaboratorio = await readFile(
    new URL("../src/pages/LaboratorioKernel.js", import.meta.url),
    "utf8"
);

[
    "¿Cómo desea comenzar?",
    "Necesito orientación",
    "Ya sé qué análisis necesito",
    "Orientar → Analizar → Interpretar → Reportar",
    "Seleccione el área de análisis"
].forEach((texto) => {
    assert.ok(
        fuenteLaboratorio.includes(texto),
        `La portada debe mostrar: ${texto}`
    );
});

assert.match(
    fuenteLaboratorio,
    /data-route="asistentePruebas"/,
    "El modo guiado debe abrir el asistente."
);
assert.match(
    fuenteLaboratorio,
    /data-scroll-target="catalogo-analisis"/,
    "El modo directo debe desplazar al catálogo."
);
assert.match(
    fuenteLaboratorio,
    /id="catalogo-analisis"/,
    "El catálogo debe tener un destino accesible."
);
assert.match(
    fuenteLaboratorio,
    /prefers-reduced-motion: reduce/,
    "El desplazamiento debe respetar las preferencias de movimiento reducido."
);
assert.match(
    fuenteLaboratorio,
    /objetivo\.focus\(\{ preventScroll: true \}\)/,
    "El destino del modo directo debe recibir el foco sin provocar otro desplazamiento."
);
assert.match(
    fuenteLaboratorio,
    /cerrar-sesion-kernel/,
    "La reestructuración debe conservar el cierre de sesión."
);

console.log(
    `✓ Laboratorio estructurado en ${ETAPAS_FLUJO_LABORATORIO.length} etapas, ${GRUPOS_CATALOGO_LABORATORIO.length} grupos y ${idsCatalogo.length} herramientas directas.`
);
