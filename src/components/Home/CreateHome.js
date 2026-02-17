import { CreateCardFirstHome } from "./CardFirst.js";
import { CreateSliderComponentHome } from "./SliderComponent.js";

export function CreateHome() {
        const section = document.createElement('section');
 section.classList.add(
    "relative",
    "w-full",
    "flex",
    "flex-col",
    "lg:flex-row",
    "md:mb-50",
    "lg:mb-0",
    "lg:pb-0"

  );
        section.innerHTML = `${CreateCardFirstHome()}`;

        const  sliderComponete = document.createElement('div');
        sliderComponete.appendChild(CreateSliderComponentHome());
        
       
        section.appendChild(sliderComponete.firstElementChild);
              
       return section;         
       
}
