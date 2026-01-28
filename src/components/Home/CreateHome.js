import { CreateCardFirstHome } from "./CardFirst.js";
import { CreateSliderComponentHome } from "./SliderComponent.js";
export function CreateHome() {
        const section = document.createElement('section');
        section.classList.add('relative', 'w-full', 'flex', 'flex-col', 'lg:flex-row');
        
        const card = document.createElement('div');
        const slider = document.createElement('div');

        card.innerHTML = CreateCardFirstHome();
        slider.innerHTML = CreateSliderComponentHome();
        
        section.appendChild(card.firstChild);
        section.appendChild(slider.firstChild);
            
       return section;         
       
}