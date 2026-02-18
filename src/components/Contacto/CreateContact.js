import { contactForm } from "./ContactForm";

export function createContact() {
    const section = document.createElement('section');
    section.classList.add('w-full', 'tabletBig:w-7xl');
    section.innerHTML = `
    ${contactForm()}
    `;
    return section;
}