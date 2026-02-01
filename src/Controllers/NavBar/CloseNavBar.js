export function  closeNavBar(nav){
    const close = nav.querySelector('[data-action="close-navBar"]');
    close.addEventListener("click", ()=> {
            nav.classList.replace('block', 'hidden');
            document.body.style.overflow = 'scroll'; 
              
    });

}