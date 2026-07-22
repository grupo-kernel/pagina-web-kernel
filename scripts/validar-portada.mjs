import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

async function leer(ruta) {
  return readFile(new URL(ruta, import.meta.url), "utf8");
}

const hero = await leer("../src/components/Home/CardFirst.js");
const home = await leer("../src/components/Home/CreateHome.js");
const alianzas = await leer("../src/components/Home/SliderComponent.js");
const slides = await leer("../src/components/Home/Slide.js");
const controlador = await leer(
  "../src/Controllers/Slider/Slider.controller.js"
);

assert.match(
  hero,
  /href="#\/laboratorioKernel"/,
  "La portada debe priorizar el acceso al Laboratorio."
);
assert.match(
  hero,
  /href="#\/publicaciones"/,
  "La portada debe conservar un acceso a publicaciones."
);
assert.match(
  hero,
  /Matemática aplicada, computación científica y educación matemática/,
  "El mensaje principal debe representar las tres áreas institucionales."
);
assert.match(
  hero,
  /Los datos se procesan localmente en el navegador/,
  "La portada debe informar la privacidad de los análisis."
);

const idsAnalytics = [
  "analytics-total",
  "analytics-hoy",
  "analytics-semana",
  "analytics-mes",
  "analytics-actualizado"
];

idsAnalytics.forEach((id) => {
  const coincidencias = hero.match(new RegExp(id, "g")) || [];
  assert.equal(
    coincidencias.length,
    1,
    `El identificador ${id} debe aparecer exactamente una vez.`
  );
  assert.match(
    home,
    new RegExp(id),
    `CreateHome debe seguir actualizando ${id}.`
  );
});

assert.doesNotMatch(
  hero,
  /https:\/\/www\.linkedin\.com["/]/,
  "La portada no debe enlazar a un LinkedIn genérico."
);
assert.match(
  hero,
  /loading="eager"/,
  "El logo principal debe cargarse con prioridad."
);
assert.match(
  hero,
  /fetchpriority="high"/,
  "El recurso principal debe declarar prioridad alta."
);

assert.match(
  alianzas,
  /aria-label="Institución anterior"/,
  "El carrusel debe etiquetar el control anterior."
);
assert.match(
  alianzas,
  /aria-label="Institución siguiente"/,
  "El carrusel debe etiquetar el control siguiente."
);
assert.match(
  alianzas,
  /aria-live="polite"/,
  "El carrusel debe anunciar cambios sin interrumpir al usuario."
);
assert.match(
  slides,
  /object-contain/,
  "Los logos institucionales deben mostrarse sin recortes."
);
assert.doesNotMatch(
  slides,
  /loading="lazy"/,
  "La diapositiva activa no debe permanecer vacía al entrar en pantalla en móviles."
);
assert.match(
  slides,
  /decoding="async"/,
  "Las imágenes institucionales deben decodificarse sin bloquear la interfaz."
);

const demora = controlador.match(/const DELAY = (\d+);/);
assert.ok(demora, "El carrusel debe declarar un intervalo explícito.");
assert.ok(
  Number(demora[1]) >= 4000,
  "El carrusel no debe cambiar con una velocidad excesiva."
);
assert.match(
  controlador,
  /prefers-reduced-motion/,
  "El carrusel debe respetar movimiento reducido."
);
assert.match(
  controlador,
  /visibilitychange/,
  "El carrusel debe detenerse cuando la página no está visible."
);
assert.match(
  controlador,
  /MutationObserver/,
  "El carrusel debe liberar su temporizador al abandonar la portada."
);
assert.match(
  controlador,
  /mouseenter/,
  "El carrusel debe detenerse con el cursor sobre él."
);
assert.match(
  controlador,
  /focusin/,
  "El carrusel debe detenerse durante la navegación por teclado."
);

console.log("✓ Portada, llamadas a la acción y carrusel validados.");
