export function createHeader() {
        const wrapper = `<div class="flex items-center px-2.5   w-full  ">
        <img  class="object-fill " width="80px" heigth="80px" src="./assets/Elkernel.png" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-[42px] py-2.5  font-medium  " >El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`;
        return wrapper;
}