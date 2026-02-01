
import { CreateCardFirstHome } from "./CardFirst.js";
import { CreateSliderComponentHome } from "./SliderComponent.js";
export function CreateHome() {
        const section = document.createElement('section');
        section.classList.add('relative', 'w-full', 'flex',  'flex-col', 'lg:flex-row');

        section.innerHTML =` 
        ${CreateCardFirstHome()}
         ${CreateSliderComponentHome()} 
         
         `;
        
            
       return section;         
       
}
