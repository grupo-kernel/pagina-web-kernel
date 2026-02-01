export function DisplaySubMenu(nav){
        const element = nav.querySelectorAll('[data-action ="open-subMenu"]');

        element.forEach(subElement => {
                const ulElement = subElement.querySelector('ul');
                const iElement = subElement.querySelector('i');
                let action = !ulElement.classList.contains('hidden');
                
        subElement.addEventListener("click", (e)=> {
               
                e.preventDefault();
                if(!action){
                        iElement.classList.replace('bx-caret-down', 'bx-caret-up');            
                        ulElement.classList.replace('hidden', 'flex');
                        action = true;
                }else{
                        iElement.classList.replace('bx-caret-up', 'bx-caret-down');            
                        ulElement.classList.replace('flex', 'hidden');
                        action = false;
                }
                });

            });     

}