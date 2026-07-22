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
const home = await readFile(
    new URL("../src/components/Home/CreateHome.js", import.meta.url),
    "utf8"
);
const portada = await readFile(
    new URL("../src/components/Home/PortadaKernel2026.js", import.meta.url),
    "utf8"
);
const navegacion = await readFile(
    new URL("../src/components/NavBar/navBar.js", import.meta.url),
    "utf8"
);
const controlNavegacion = await readFile(
    new URL("../src/Controllers/NavBar/onNavigate.js", import.meta.url),
    "utf8"
);
const controlSubmenus = await readFile(
    new URL("../src/Controllers/NavBar/DisplaySubMenu.js", import.meta.url),
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
        `El servicio ${servicio.numero} debe conservar sus diez componentes.`
    );
    assert.ok(servicio.entregables.trim(), `El servicio ${servicio.numero} debe declarar entregables habituales.`);
    assert.ok(existeIconoLaboratorio(servicio.icono), `El servicio ${servicio.numero} debe usar un icono SVG disponible.`);
});

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
assert.match(componente, /mailto:mleonardos@unapec\.edu\.do/);

assert.match(home, /CrearCatalogoServicios/);
assert.match(home, /catalogo\.scrollIntoView/);
assert.match(home, /Catálogo de servicios/);
assert.match(home, /eliminarAccesoRepositorio/);
assert.match(home, /github\.com\/grupo-kernel/);
assert.match(home, /replaceWith\(solicitarInformacion\)/);
assert.doesNotMatch(
    componente,
    /github\.com\/grupo-kernel/,
    "El catálogo no debe mostrar acceso al repositorio del grupo."
);
assert.match(portada, /Repositorio del grupo/);

assert.match(navegacion, /data-home-section="catalogo-servicios"/);
assert.match(navegacion, /Catálogo de servicios/);
assert.match(navegacion, /20 áreas profesionales y académicas/);
assert.match(navegacion, /itemSeccionPortada\("catalogo-servicios"/);
assert.match(controlNavegacion, /CLAVE_SECCION_PORTADA\s*=\s*"kernel-home-section"/);
assert.match(controlNavegacion, /document\.getElementById\(seccion\)/);
assert.match(controlNavegacion, /navigate\("home"\)/);
assert.match(controlNavegacion, /scrollIntoView\(\{ behavior: "smooth", block: "start" \}\)/);
assert.match(controlSubmenus, /\[data-route\], \[data-home-section\]/);

console.log(
    "✓ Catálogo digital de 20 servicios, acceso móvil visible, navegación, paquetes, principios, proceso, contacto y retirada visual del repositorio validados."
);