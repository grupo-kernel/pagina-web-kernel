export function DisplaySubMenu(element){
        element.forEach(subElement => {
        const ulElement = subElement.querySelector('ul');
        const iElement = subElement.querySelector('i');
        let action = false;
        subElement.addEventListener("click", ()=> {
                if(!action){
                        iElement.classList.replace('bx-caret-down', 'bx-caret-up');            
                        ulElement.classList.replace('hidden', 'block');
                        action = true;
                }else{
                        iElement.classList.replace('bx-caret-up', 'bx-caret-down');            
                        ulElement.classList.replace('block', 'hidden');
                        action = false;
                }
                });

            });     

}