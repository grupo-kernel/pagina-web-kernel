import { CreateCardFirstHome } from "./CardFirst.js";
import { CreateSliderComponentHome } from "./SliderComponent.js";

export function CreateHome() {
    const section = document.createElement("section");

    section.className = `
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `;

    section.innerHTML = `${CreateCardFirstHome()}`;

    const sliderComponent = CreateSliderComponentHome();
    section.appendChild(sliderComponent);

    return section;
}
