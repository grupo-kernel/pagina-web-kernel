import { slideElement } from "../../components/Home/Slide.js";

export function SliderController(contenedor) {
  const arrowR = contenedor.querySelector('#arrowR');
  const arrowL = contenedor.querySelector('#arrowL');
  const containerSlider = contenedor.querySelector('#contenedorSlide');

  if (!arrowR || !arrowL || !containerSlider) return;

  const SLIDE_COUNT = slideElement.length;
  const DELAY = 1500;

  let index = 0;
  let timerId = null;

  //
  function normalize(i) {
    return (i % SLIDE_COUNT + SLIDE_COUNT) % SLIDE_COUNT;
  }

  function render() {
    containerSlider.innerHTML = slideElement[index].content;
  }

  function move(step) {
    index = normalize(index + step);
    render();
  }

  function startAutoPlay() {
    stopAutoPlay();
    timerId = setInterval(() => move(+1), DELAY);
  }

  function stopAutoPlay() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }


  //restaurar 
  function restartAutoPlay() {
    startAutoPlay();
  }

  render();
  startAutoPlay();

  
  arrowR.addEventListener('click', () => {
    move(+1);
    restartAutoPlay();
  });

  arrowL.addEventListener('click', () => {
    move(-1);
    restartAutoPlay();
  });
  
}
