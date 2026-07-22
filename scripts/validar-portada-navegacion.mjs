import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { MODULOS_LABORATORIO } from "../src/data/modulosLaboratorio.js";
import { existeIconoLaboratorio } from "../src/utils/iconosLaboratorio.js";

const laboratorio = await readFile(
    new URL("../src/pages/LaboratorioKernel.js", import.meta.url),
    "utf8"
);
const rutas = await readFile(
    new URL("../src/routes/route.js", import.meta.url),
    "utf8"
);
const portada = await readFile(
    new URL("../src/components/Home/PortadaKernel2026.js", import.meta.url),
    "utf8"
);
const home = await readFile(
    new URL("../src/components/Home/CreateHome.js", import.meta.url),
    "utf8"
);
const carruselUniversidades = await readFile(
    new URL("../src/components/Home/CarruselUniversidades.js", import.meta.url),
    "utf8"
);
const navegacion = await readFile(
    new URL("../src/components/NavBar/navBar.js", import.meta.url),
    "utf8"
);
const controladorSubmenus = await readFile(
    new URL("../src/Controllers/NavBar/DisplaySubMenu.js", import.meta.url),
    "utf8"
);
const controladorNavegacion = await readFile(
    new URL("../src/Controllers/NavBar/NavBar.controller.js", import.meta.url),
    "utf8"
);
const layoutPrincipal = await readFile(
    new URL("../src/components/layout/mainLayaout.js", import.meta.url),
    "utf8"
);
const documentoPrincipal = await readFile(
    new URL("../index.html", import.meta.url),
    "utf8"
);
const principal = await readFile(
    new URL("../src/main.js", import.meta.url),
    "utf8"
);
const pie = await readFile(
    new URL("../src/components/Footer/Footer.js", import.meta.url),
    "utf8"
);

assert.equal(MODULOS_LABORATORIO.length, 9, "El laboratorio debe mantener nueve módulos.");

const ids = MODULOS_LABORATORIO.map((modulo) => modulo.id);
const rutasModulos = MODULOS_LABORATORIO.map((modulo) => modulo.ruta);
assert.equal(new Set(ids).size, ids.length, "Los módulos deben tener identificadores únicos.");
assert.equal(new Set(rutasModulos).size, rutasModulos.length, "Cada módulo debe declarar una ruta única.");

MODULOS_LABORATORIO.forEach((modulo) => {
    assert.ok(modulo.titulo.trim(), `El módulo ${modulo.id} debe tener título.`);
    assert.ok(modulo.descripcion.trim(), `El módulo ${modulo.id} debe tener descripción.`);
    assert.ok(
        existeIconoLaboratorio(modulo.icono),
        `El módulo ${modulo.id} debe tener un icono SVG interno disponible.`
    );
    assert.match(
        rutas,
        new RegExp(`\\b${modulo.ruta}\\s*:`),
        `La ruta ${modulo.ruta} debe estar registrada en el enrutador.`
    );
});

assert.match(laboratorio, /MODULOS_LABORATORIO\.map\(crearTarjetaModulo\)/);
assert.match(laboratorio, /iconoLaboratorio\(modulo\.icono/);
assert.match(laboratorio, /data-route=/);
assert.doesNotMatch(
    laboratorio,
    /function icono\([^)]*\)[\s\S]*?<i aria-hidden="true" class="bx/,
    "El laboratorio no debe depender de la fuente externa para sus iconos principales."
);
assert.doesNotMatch(laboratorio, /onclick\s*=/i, "La navegación no debe depender de atributos onclick.");
assert.doesNotMatch(principal, /iniciarIntegracionModulosFinalesLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionRegresionLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionFiabilidadLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionEvaluacionEducativaLaboratorio/);

assert.match(portada, /ElKernel\.png/);
assert.match(portada, /#\/laboratorioKernel/);
assert.match(portada, /#\/publicaciones/);
assert.match(portada, /#\/equipment/);
assert.match(portada, /MODULOS_LABORATORIO/);
assert.match(portada, /mleonardos@unapec\.edu\.do/);
assert.match(portada, /ISFODOSU/);
assert.match(portada, /UASD/);
assert.match(portada, /UNAPEC/);
assert.match(portada, /CrearCarruselUniversidades/);
assert.match(portada, /data-pestanas-universidades-portada/);
assert.match(
    portada,
    /contenedorUniversidades\?\.replaceChildren\(CrearCarruselUniversidades\(\)\)/,
    "Las universidades deben integrarse dentro del encabezado principal."
);
assert.doesNotMatch(
    home,
    /insertAdjacentElement\("afterend", carrusel\)/,
    "La ruleta no debe insertarse como un bloque separado debajo del encabezado."
);

assert.match(home, /setMainLayout\("full"\)/);
assert.match(home, /dataset\.portadaAncha\s*=\s*"true"/);
assert.match(home, /min-h-\[calc\(100svh-5rem\)\]/);
assert.match(home, /contenedor\.classList\.remove\([\s\S]*?"max-w-7xl"/);
assert.match(layoutPrincipal, /main\.classList\.add\("max-w-none", "m-0", "p-0", "mt-0", "pt-0"\)/);
assert.match(documentoPrincipal, /data-site-header/);
assert.match(documentoPrincipal, /z-\[200\]/);
assert.match(documentoPrincipal, /lg:z-\[220\]/);
assert.match(documentoPrincipal, /lg:overflow-visible/);

assert.match(navegacion, /data-route="herramientas"/);
assert.match(navegacion, />Herramientas</);
assert.match(navegacion, /id="submenu-nuestro-trabajo"/);
assert.match(navegacion, /data-action="toggle-submenu"/);
assert.match(navegacion, /lg:z-\[260\]/);
assert.match(navegacion, /lg:w-72/);
assert.match(controladorSubmenus, /aria-expanded/);
assert.match(controladorSubmenus, /mouseenter/);
assert.match(controladorSubmenus, /mouseleave/);
assert.match(controladorSubmenus, /event\.key === "Escape"/);
assert.equal(
    (controladorNavegacion.match(/DisplaySubMenu\(nav\)/g) || []).length,
    1,
    "Los submenús deben inicializarse una sola vez."
);

assert.match(carruselUniversidades, /isfodosu\.png/);
assert.match(carruselUniversidades, /uasd\.png/);
assert.match(carruselUniversidades, /apec\.png/);
assert.match(carruselUniversidades, /ISFODOSU/);
assert.match(carruselUniversidades, /UASD/);
assert.match(carruselUniversidades, /UNAPEC/);
assert.equal(
    (carruselUniversidades.match(/id:\s*"(?:isfodosu|uasd|unapec)"/g) || []).length,
    3,
    "Las pestañas deben declarar exactamente las tres instituciones principales."
);
assert.match(carruselUniversidades, /role="tablist"/);
assert.match(carruselUniversidades, /role="tab"/);
assert.match(carruselUniversidades, /role="tabpanel"/);
assert.match(carruselUniversidades, /aria-selected=/);
assert.match(carruselUniversidades, /data-universidad-control/);
assert.match(carruselUniversidades, /INTERVALO_ROTACION\s*=\s*6000/);
assert.match(carruselUniversidades, /prefers-reduced-motion/);
assert.match(carruselUniversidades, /aria-live="polite"/);
assert.match(carruselUniversidades, /ArrowLeft/);
assert.match(carruselUniversidades, /ArrowRight/);
assert.match(carruselUniversidades, /touchstart/);

assert.match(pie, /new Date\(\)\.getFullYear\(\)/);
assert.match(pie, /ISFODOSU/);
assert.match(pie, /UNAPEC/);
assert.doesNotMatch(pie, /ISFOOSU/);
assert.doesNotMatch(pie, /_blan"k/);

console.log(
    "✓ Portada a pantalla completa, submenú Herramientas, pestañas universitarias, iconos SVG y navegación validados."
);
