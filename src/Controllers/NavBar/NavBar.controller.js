import { DisplaySubMenu } from "./DisplaySubMenu.js";
import { DisplayNavBar } from "./DisplayNavBar.js";
import { closeNavBar } from "./CloseNavBar.js";
import { navigate, routerInit } from "../../routes/route.js";
import { onNavigate } from "./onNavigate.js";

export function initNavBar(nav, header) {
    if (!nav || !header) return;

    onNavigate(nav, navigate);
    DisplaySubMenu(nav);

    const iconoMenu = header.querySelector('[data-action="open-menu"]');
    if (iconoMenu) DisplayNavBar(iconoMenu, nav);

    closeNavBar(nav);
    routerInit();
}
