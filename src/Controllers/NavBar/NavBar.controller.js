
import { DisplaySubMenu } from "./DisplaySubMenu.js";
import { DisplayNavBar } from "./DisplayNavBar.js";
import { closeNavBar } from "./CloseNavBar.js";

export function initNavBar(nav, header){
    
    const mq = window.matchMedia('(max-width: 768px)');
     let subMenuInitialized = false;

    function handleBreakpoint(e) {
        if (e.matches && !subMenuInitialized) {
        DisplaySubMenu(nav);
        subMenuInitialized = true;
        }
    }

  mq.addEventListener('change', handleBreakpoint);
  handleBreakpoint(mq);

    DisplaySubMenu(nav);
    const icon = header.querySelector('[data-action ="open-menu"]');
    DisplayNavBar(icon, nav);
    closeNavBar(nav);
}