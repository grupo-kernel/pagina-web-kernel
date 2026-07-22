import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
    CATALOGO_SERVICIOS,
    CATEGORIAS_SERVICIOS
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

assert.ok(
    CATALOGO_SERVICIOS.length >= 8,
    `Se esperaban al menos ocho servicios y se encontraron ${CATALOGO_SERVICIOS.length}.`
);
assert.ok(
    CATEGORIAS_SERVICIOS.length >= 5,
    "El catálogo debe ofrecer varias categorías de exploración."
);
assert.equal(
    CATEGORIAS_SERVICIOS[0]?.id,
    "todos",
    "La primera categoría debe permitir mostrar todos los servicios."
);

const idsServicios = CATALOGO_SERVICIOS.map((servicio) => servicio.id);
assert.equal(
    new Set(idsServicios).size,
    idsServicios.length,
    "Los servicios deben tener identificadores únicos."
);

const idsCategorias = new Set(CATEGORIAS_SERVICIOS.map((categoria) => categoria.id));
CATALOGO_SERVICIOS.forEach((servicio) => {
    assert.ok(servicio.titulo?.trim(), `El servicio ${servicio.id} debe tener título.`);
    assert.ok(servicio.resumen?.trim(), `El servicio ${servicio.id} debe tener resumen.`);
    assert.ok(servicio.descripcion?.trim(), `El servicio ${servicio.id} debe tener descripción.`);
    assert.ok(idsCategorias.has(servicio.categoria), `La categoría de ${servicio.id} debe existir.`);
    assert.ok(
        existeIconoLaboratorio(servicio.icono),
        `El servicio ${servicio.id} debe utilizar un icono SVG interno disponible.`
    );
    assert.ok(
        Array.isArray(servicio.incluye) && servicio.incluye.length >= 3,
        `El servicio ${servicio.id} debe explicar su alcance.`
    );
    assert.ok(
        Array.isArray(servicio.dirigidoA) && servicio.dirigidoA.length >= 2,
        `El servicio ${servicio.id} debe indicar su público principal.`
    );
});

assert.match(componente, /id = "catalogo-servicios"|section\.id = "catalogo-servicios"/);
assert.match(componente, /data-buscador-servicios/);
assert.match(componente, /data-filtro-servicio/);
assert.match(componente, /data-servicio-detalle/);
assert.match(componente, /data-dialogo-servicio/);
assert.match(componente, /showModal/);
assert.match(componente, /#\/contacto/);
assert.match(componente, /mailto:mleonardos@unapec\.edu\.do/);
assert.match(componente, /El alcance, los productos de trabajo y el calendario/);
assert.doesNotMatch(
    componente,
    /precio|tarifa|RD\$|US\$/i,
    "No deben publicarse precios sin que el grupo los haya definido."
);

assert.match(home, /CrearCatalogoServicios/);
assert.match(home, /insertAdjacentElement\("afterend", catalogo\)/);
assert.match(home, /data-scroll-catalogo-servicios/);
assert.match(home, /catalogo\.scrollIntoView/);
assert.match(home, /kernel-home-section/);

console.log(
    `✓ Catálogo validado: ${CATALOGO_SERVICIOS.length} servicios en ${CATEGORIAS_SERVICIOS.length - 1} categorías temáticas.`
);
