import { CreateCardFirstHome } from "./CardFirst.js";
import { CreateSliderComponentHome } from "./SliderComponent.js";

export function CreateHome() {
       const section = document.createElement('section');
       section.classList.add(
              "relative", "w-full", "flex", "flex-col", "m-auto",
              "tabletBig:flex-row", "md:mb-50",
              "tabletBig:w-7xl", "tabletBig:px-20", 
              "xl:mb-0", "xl:pb-0", "xl:w-full", "xl:px-0",
              
       );
       section.innerHTML = `${CreateCardFirstHome()}`;

       const sliderComponete = document.createElement('div');
       sliderComponete.appendChild(CreateSliderComponentHome());


       section.appendChild(sliderComponete.firstElementChild);

       return section;

}
