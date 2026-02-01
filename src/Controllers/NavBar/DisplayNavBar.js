export function DisplayNavBar(Iconmenu, navBar, ){
         Iconmenu.addEventListener("click", ()=> {
                    navBar.classList.replace('hidden', 'block');      
                    document.body.style.overflow = 'hidden'; 
                    
                  
                    
            });
}