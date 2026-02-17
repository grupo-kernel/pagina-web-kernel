import { createContact } from "../components/Contacto/CreateContact";
import { initContactController } from "../Controllers/Contacto/Contacto.controller";


export function Contacto() {
    const page = createContact();
    
    setTimeout(() => {
        initContactController();
    }, 0);

    return page;
}