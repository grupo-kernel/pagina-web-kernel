import kernel from "../../../favicon.ico";

export function createHeader() {
    const wrapper = `<div class="flex items-center px-0 w-full">
        <img
            class="h-16 w-16 object-contain"
            width="64"
            height="64"
            src="${kernel}"
            alt="Logo del Grupo de Investigación Kernel"
            title="El Kernel"
            loading="eager"
            fetchpriority="high"
        >
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class="text-5xl cursor-pointer bx bx-menu"></i>
        </div>`;
    return wrapper;
}
