import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
    CATALOGO_META,
    CATALOGO_SERVICIOS,
    CATEGORIAS_SERVICIOS,
    MODALIDADES_SERVICIO,
    PAQUETES_INSTITUCIONALES,
    PRINCIPIOS_SERVICIO,
    PROCESO_SERVICIO,
    PROPUESTA_VALOR,
    SECTORES_DESTINATARIOS
} from "../src/data/catalogoServicios.js";
import { existeIconoLaboratorio } from "../src/utils/iconosLaboratorio.js";

const componente = await readFile(
    new URL("../src/components/Home/CatalogoServicios.js", import.meta.url),
    "utf8"
);
const resumen = await readFile(
    new URL("../src/components/Home/ResumenServicios.js", import.meta.url),
    "utf8"
);
const portada = await readFile(
    new URL("../src/components/Home/PortadaKernel2026.js", import.meta.url),
    "utf8"
);
const paginaServicios = await readFile(
    new URL("../src/pages/Servicios.js", import.meta.url),
    "utf8"
);
const diagnostico = await readFile(
    new URL("../src/pages/DiagnosticoServicios.js", import.meta.url),
    "utf8"
);
const navegacion = await readFile(
    new URL("../src/components/NavBar/navBar.js", import.meta.url),
    "utf8"
);
const rutas = await readFile(
    new URL("../src/routes/route.js", import.meta.url),
    "utf8"
);

assert.equal(CATALOGO_SERVICIOS.length, 20, "El catálogo institucional debe incluir los 20 servicios aprobados.");
assert.equal(CATEGORIAS_SERVICIOS.length, 6, "Deben existir cinco bloques temáticos y el filtro general.");
assert.equal(PAQUETES_INSTITUCIONALES.length, 8, "Deben conservarse los ocho paquetes institucionales sugeridos.");
assert.equal(PRINCIPIOS_SERVICIO.length, 10, "Deben conservarse los diez principios transversales.");
assert.equal(MODALIDADES_SERVICIO.length, 8, "Deben conservarse las ocho modalidades de contratación.");
assert.equal(PROCESO_SERVICIO.length, 7, "El proceso estándar debe mantener siete etapas.");
assert.equal(PROPUESTA_VALOR.length, 6, "La propuesta de valor debe mantener seis componentes.");
assert.equal(SECTORES_DESTINATARIOS.length, 6, "Deben conservarse los seis grupos de sectores y públicos.");

assert.match(CATALOGO_META.titulo, /Catálogo institucional de servicios profesionales y académicos/i);
assert.match(CATALOGO_META.lema, /Rigor matemático para investigar, enseñar y decidir mejor/i);

const ids = CATALOGO_SERVICIOS.map((servicio) => servicio.id);
const numeros = CATALOGO_SERVICIOS.map((servicio) => servicio.numero);
assert.equal(new Set(ids).size, ids.length, "Los servicios deben tener identificadores únicos.");
assert.deepEqual(numeros, Array.from({ length: 20 }, (_, indice) => indice + 1));

CATALOGO_SERVICIOS.forEach((servicio) => {
    assert.ok(servicio.titulo.trim(), `El servicio ${servicio.numero} debe tener título.`);
    assert.ok(servicio.tituloCorto.trim(), `El servicio ${servicio.numero} debe tener título web.`);
    assert.ok(servicio.resumen.trim(), `El servicio ${servicio.numero} debe tener resumen.`);
    assert.ok(servicio.descripcion.trim(), `El servicio ${servicio.numero} debe tener descripción.`);
    assert.equal(
        servicio.subservicios.length,
        10,
        `El servicio ${servicio.numero} debe conservar diez componentes.`
    );
    assert.ok(servicio.entregables.trim(), `El servicio ${servicio.numero} debe declarar entregables habituales.`);
    assert.ok(existeIconoLaboratorio(servicio.icono), `El servicio ${servicio.numero} debe usar un icono SVG disponible.`);
});

const desarrolloDocente = CATALOGO_SERVICIOS.find((servicio) => servicio.numero === 15);
assert.ok(desarrolloDocente, "Debe existir el servicio 15 de desarrollo docente.");
assert.match(desarrolloDocente.titulo, /diseño curricular/i);
assert.match(desarrolloDocente.resumen, /maestrías/i);
assert.match(desarrolloDocente.resumen, /programas de asignaturas/i);
assert.ok(
    desarrolloDocente.subservicios.some((item) => /Diseño y rediseño de maestrías y posgrados/i.test(item)),
    "El servicio 15 debe incluir diseño y rediseño de maestrías y posgrados."
);
assert.ok(
    desarrolloDocente.subservicios.some((item) => /programas de asignaturas de nivel superior/i.test(item)),
    "El servicio 15 debe incluir programas de asignaturas de educación superior."
);
assert.ok(
    desarrolloDocente.subservicios.some((item) => /Alineación curricular por competencias/i.test(item)),
    "El servicio 15 debe incluir alineación curricular por competencias."
);
assert.match(desarrolloDocente.entregables, /sílabos universitarios/i);
assert.match(desarrolloDocente.entregables, /propuestas de maestrías o posgrados/i);

assert.match(componente, /data-buscador-servicios/);
assert.match(componente, /data-filtro-servicio/);
assert.match(componente, /data-servicio-detalle/);
assert.match(componente, /data-dialogo-servicio/);
assert.match(componente, /Paquetes institucionales sugeridos/);
assert.match(componente, /Modalidades de contratación/);
assert.match(componente, /Principios transversales/);
assert.match(componente, /Sectores y públicos destinatarios/);
assert.match(componente, /Componentes del servicio/);
assert.match(componente, /Entregables habituales/);

assert.match(resumen, /Ver los 20 servicios/);
assert.match(resumen, /Solicitar diagnóstico/);
assert.match(resumen, /Educación, posgrado y diseño curricular/);
assert.match(resumen, /kernel-services-filter/);
assert.match(portada, /CrearResumenServicios/);
assert.match(portada, /Soluciones cuantitativas para investigar, enseñar y decidir mejor/);
assert.match(portada, /#\/servicios/);
assert.match(portada, /#\/diagnosticoServicios/);

assert.match(paginaServicios, /CrearCatalogoServicios/);
assert.match(paginaServicios, /kernel-service-interest/);
assert.match(paginaServicios, /diagnosticoServicios/);

assert.match(diagnostico, /data-formulario-diagnostico/);
assert.match(diagnostico, /Problema o necesidad/);
assert.match(diagnostico, /Datos, documentos o recursos disponibles/);
assert.match(diagnostico, /Plazo esperado/);
assert.match(diagnostico, /Presupuesto estimado/);
assert.match(diagnostico, /Producto o resultado esperado/);
assert.match(diagnostico, /mailto:/);
assert.match(diagnostico, /no almacena datos en un servidor/i);

assert.match(rutas, /servicios:\s*\{\s*page:\s*Servicios/);
assert.match(rutas, /diagnosticoServicios:\s*\{\s*page:\s*DiagnosticoServicios/);
assert.match(navegacion, /itemRuta\("servicios",\s*"Servicios"/);
assert.match(navegacion, /data-route="diagnosticoServicios"/);
assert.doesNotMatch(
    portada,
    /CrearCatalogoServicios/,
    "La portada debe mostrar un resumen y reservar el catálogo completo para su página independiente."
);

console.log(
    "✓ Catálogo de 20 servicios, página independiente, diagnóstico, navegación empresarial y ampliación curricular del servicio 15 validados."
);
