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
const franjaInstitucional = await readFile(
    new URL("../src/components/Home/FranjaInstitucional.js", import.meta.url),
    "utf8"
);
const resumenServicios = await readFile(
    new URL("../src/components/Home/ResumenServicios.js", import.meta.url),
    "utf8"
);
const procesoAplicaciones = await readFile(
    new URL("../src/components/Home/ProcesoYAplicaciones.js", import.meta.url),
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
const menuMovil = await readFile(
    new URL("../src/Controllers/NavBar/NavBarMobile.js", import.meta.url),
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
assert.doesNotMatch(laboratorio, /onclick\s*=/i, "La navegación no debe depender de atributos onclick.");
assert.doesNotMatch(principal, /iniciarIntegracionModulosFinalesLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionRegresionLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionFiabilidadLaboratorio/);
assert.doesNotMatch(principal, /iniciarIntegracionEvaluacionEducativaLaboratorio/);

assert.match(portada, /ElKernel\.png/);
assert.match(portada, /Soluciones cuantitativas para investigar, enseñar y decidir mejor/);
assert.match(portada, /#\/diagnosticoServicios/);
assert.match(portada, /#\/servicios/);
assert.match(portada, /#\/laboratorioKernel/);
assert.match(portada, /CrearFranjaInstitucional/);
assert.match(portada, /CrearResumenServicios/);
assert.match(portada, /CrearProcesoYAplicaciones/);
assert.match(portada, /lineasInvestigacion\.slice\(0, 3\)/);
assert.match(portada, /mleonardos@unapec\.edu\.do/);
assert.doesNotMatch(portada, /Repositorio del grupo/);

assert.match(home, /setMainLayout\("full"\)/);
assert.doesNotMatch(home, /CrearCatalogoServicios/);
assert.match(layoutPrincipal, /layout === "full"/);
assert.match(layoutPrincipal, /main\.classList\.add\("max-w-none", "m-0", "p-0", "mt-0", "pt-0"\)/);

assert.match(franjaInstitucional, /isfodosu\.png/);
assert.match(franjaInstitucional, /uasd\.png/);
assert.match(franjaInstitucional, /apec\.png/);
assert.match(franjaInstitucional, /ISFODOSU/);
assert.match(franjaInstitucional, /UASD/);
assert.match(franjaInstitucional, /UNAPEC/);
assert.match(franjaInstitucional, /Confidencialidad/);
assert.match(franjaInstitucional, /Reproducibilidad/);
assert.match(franjaInstitucional, /Transferencia/);

assert.match(resumenServicios, /Ver los 20 servicios/);
assert.match(resumenServicios, /Solicitar diagnóstico/);
assert.match(resumenServicios, /Educación, posgrado y diseño curricular/);
assert.match(procesoAplicaciones, /Ejemplo ilustrativo/);
assert.match(procesoAplicaciones, /Diseño integral de una maestría/);
assert.match(procesoAplicaciones, /no se presentan como casos de clientes/i);

assert.match(rutas, /home:\s*\{\s*page:\s*CreatePageHome,\s*layout:\s*"full"/);
assert.match(rutas, /servicios:\s*\{\s*page:\s*Servicios/);
assert.match(rutas, /diagnosticoServicios:\s*\{\s*page:\s*DiagnosticoServicios/);

assert.match(navegacion, /itemRuta\("servicios",\s*"Servicios"/);
assert.match(navegacion, /data-route="diagnosticoServicios"/);
assert.match(navegacion, /Solicitar diagnóstico/);
assert.match(navegacion, /id:\s*"submenu-nuestro-trabajo"/);
assert.match(navegacion, /itemSubmenu\("herramientas",\s*"Herramientas"/);
assert.match(controladorSubmenus, /aria-expanded/);
assert.match(controladorSubmenus, /mouseenter/);
assert.match(controladorSubmenus, /mouseleave/);
assert.equal(
    (controladorNavegacion.match(/DisplaySubMenu\(nav\)/g) || []).length,
    1,
    "Los submenús deben inicializarse una sola vez."
);

assert.match(documentoPrincipal, /data-site-header/);
assert.match(documentoPrincipal, /z-\[200\]/);
assert.match(documentoPrincipal, /lg:z-\[220\]/);
assert.match(documentoPrincipal, /w-\[88%\]/);
assert.match(documentoPrincipal, /max-w-sm/);
assert.match(documentoPrincipal, /aria-hidden="true"/);
assert.match(menuMovil, /dataset\.navOverlay/);
assert.match(menuMovil, /bg-slate-950\/55/);
assert.match(menuMovil, /aria-expanded/);
assert.match(menuMovil, /document\.body\.style\.overflow/);

assert.match(pie, /new Date\(\)\.getFullYear\(\)/);
assert.match(pie, /#\/servicios/);
assert.match(pie, /#\/diagnosticoServicios/);
assert.match(pie, /ISFODOSU/);
assert.match(pie, /UASD/);
assert.match(pie, /UNAPEC/);
assert.match(pie, /Confidencialidad/);
assert.match(pie, /Integridad académica/);
assert.doesNotMatch(pie, /github\.com\/grupo-kernel/);
assert.doesNotMatch(pie, /ISFOOSU/);

console.log(
    "✓ Portada empresarial, servicios, franja institucional, navegación móvil, diagnóstico, laboratorio y pie institucional validados."
);
