//esta funcion  se crea el componente del slider para el home en caso de que se necesite reutilizar
export function CreateSlider({id, img, alt}) {
        const slider = `<div data-modal="slider-component ">
                <div id="${id}" class="relative w-full h-full">
                    <img data-action="changeImg${id}" src="${img}" alt="${alt}" class="w-full h-full object-cover rounded-xl">
                </div>
        </div>`;
        return slider;
}