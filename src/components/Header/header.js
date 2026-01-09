export function createHeader(){
        
    const wrapper = document.createElement('header');
        wrapper.innerHTML = `<div class="flex items-center w-2xs col-span-4">
        <img class="object-cover" width="80px" heigth="80px" src="./assets/Elkernel.png" alt="Grupo de investigacion dominicano" _blank title="El kernel"></img>
        <span class="text-4xl py-2.5  font-medium tracking-widest " >El kernel</span>
        </div>

        <div class="flex items-center col-span-4  ">
            <i class="bx  bx-menu"></i> 
        </div>
        
        `;

        
        return wrapper;
}