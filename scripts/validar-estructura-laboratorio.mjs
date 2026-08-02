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
assert.deepEqual(
    {
        estado: ETAPAS_FLUJO_LABORATORIO[2].estado,
        tipo: ETAPAS_FLUJO_LABORATORIO[2].accion?.tipo,
        valor: ETAPAS_FLUJO_LABORATORIO[2].accion?.valor
    },
    {
        estado: "Disponible",
        tipo: "ancla",
        valor: "interpretador-resultados"
    },
    "Interpretar debe abrir una herramienta funcional dentro del Laboratorio."
);
assert.deepEqual(
    {
        estado: ETAPAS_FLUJO_LABORATORIO[3].estado,
        tipo: ETAPAS_FLUJO_LABORATORIO[3].accion?.tipo,
        valor: ETAPAS_FLUJO_LABORATORIO[3].accion?.valor
    },
    {
        estado: "Disponible",
        tipo: "ancla",
        valor: "generador-reporte"
    },
    "Reportar debe abrir un generador funcional dentro del Laboratorio."
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
const herramientaInterpretarReportar = await readFile(
    new URL(
        "../public/assets/kernel-lab-interpret-report.js",
        import.meta.url
    ),
    "utf8"
);
const activadorDespliegue = await readFile(
    new URL("./activate-lab-interpret-report.mjs", import.meta.url),
    "utf8"
);
const flujoDespliegue = await readFile(
    new URL("../.github/workflows/deploy.yml", import.meta.url),
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

[
    "interpretador-resultados",
    "generador-reporte",
    "data-kernel-interpret-form",
    "data-kernel-report-form",
    "Usar interpretación anterior",
    "Descargar TXT",
    "KernelInterpretReport"
].forEach((marcador) => {
    assert.ok(
        herramientaInterpretarReportar.includes(marcador),
        `La herramienta activa debe incluir ${marcador}.`
    );
});
assert.match(
    herramientaInterpretarReportar,
    /p < alpha/,
    "La interpretación debe comparar explícitamente el valor p con α."
);
assert.match(
    herramientaInterpretarReportar,
    /sessionStorage\.setItem\(STORAGE_KEY/,
    "La interpretación debe poder transferirse al generador de reporte."
);
assert.match(
    activadorDespliegue,
    /kernel-lab-interpret-report\.js\?v=20260802-1/,
    "El despliegue debe cargar una versión identificable de la herramienta."
);
assert.match(
    flujoDespliegue,
    /node scripts\/activate-lab-interpret-report\.mjs/,
    "El flujo público debe activar las herramientas antes del despliegue."
);

console.log(
    `✓ Laboratorio estructurado en ${ETAPAS_FLUJO_LABORATORIO.length} etapas activas, ${GRUPOS_CATALOGO_LABORATORIO.length} grupos y ${idsCatalogo.length} herramientas directas.`
);
