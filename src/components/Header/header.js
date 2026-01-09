export function createHeader(navSlot = ""){
    const wrapper = `<div class="flex items-center px-2.5 w-full col-span-3 md:col-span-6 lg:col-span-5">
        <img class="object-fill " width="80px" heigth="80px" src="./assets/Elkernel.png" alt="Grupo de investigacion dominicano" _blank title="El kernel"></img>
        <span class="text-[42px] py-2.5  font-medium  " >El kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>
        <div class ="hidden lg:flex">
                ${navSlot}
        </div>

        `;
        return wrapper;
}