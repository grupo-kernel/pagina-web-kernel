import { slideElement } from "../../components/Home/Slide.js";

export function SliderController(contenedor) {
  const arrowR = contenedor?.querySelector("#arrowR");
  const arrowL = contenedor?.querySelector("#arrowL");
  const containerSlider = contenedor?.querySelector("#contenedorSlide");

  if (!contenedor || !containerSlider || !slideElement.length) {
    return;
  }

  const SLIDE_COUNT = slideElement.length;
  const DELAY = 4500;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let index = 0;
  let timerId = null;
  let cerrado = false;

  function normalize(valor) {
    return (valor % SLIDE_COUNT + SLIDE_COUNT) % SLIDE_COUNT;
  }

  function render() {
    containerSlider.innerHTML = slideElement[index].content;
    containerSlider.dataset.slideIndex = String(index);
  }

  function move(paso) {
    index = normalize(index + paso);
    render();
  }

  function stopAutoPlay() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();

    if (
      cerrado ||
      SLIDE_COUNT <= 1 ||
      reducedMotion.matches ||
      document.hidden ||
      !contenedor.isConnected
    ) {
      return;
    }

    timerId = window.setInterval(
      () => move(1),
      DELAY
    );
  }

  function handleVisibility() {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  }

  function cleanup() {
    if (cerrado) return;
    cerrado = true;
    stopAutoPlay();
    document.removeEventListener(
      "visibilitychange",
      handleVisibility
    );
    observer.disconnect();
  }

  if (SLIDE_COUNT <= 1) {
    arrowR?.classList.add("hidden");
    arrowL?.classList.add("hidden");
  }

  arrowR?.addEventListener("click", () => {
    move(1);
    startAutoPlay();
  });

  arrowL?.addEventListener("click", () => {
    move(-1);
    startAutoPlay();
  });

  contenedor.addEventListener(
    "mouseenter",
    stopAutoPlay
  );
  contenedor.addEventListener(
    "mouseleave",
    startAutoPlay
  );
  contenedor.addEventListener(
    "focusin",
    stopAutoPlay
  );
  contenedor.addEventListener("focusout", (event) => {
    if (!contenedor.contains(event.relatedTarget)) {
      startAutoPlay();
    }
  });

  document.addEventListener(
    "visibilitychange",
    handleVisibility
  );

  const observer = new MutationObserver(() => {
    if (!contenedor.isConnected) {
      cleanup();
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  render();
  startAutoPlay();
}
