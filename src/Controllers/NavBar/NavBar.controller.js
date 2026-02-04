
import { DisplaySubMenu } from "./DisplaySubMenu.js";
import { DisplayNavBar } from "./DisplayNavBar.js";
import { closeNavBar } from "./CloseNavBar.js";
import { navigate } from "../../routes/route.js";
import { onNavigate } from "./onNavigate.js";
import { routerInit } from "../../routes/route.js";

export function initNavBar(nav, header){
    onNavigate(nav, navigate);
    routerInit();

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