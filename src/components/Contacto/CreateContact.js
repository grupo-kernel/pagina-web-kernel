import { contactForm } from "./ContactForm";


export function createContact() {
    const section = document.createElement('section');
    section.classList.add('w-full');

    section.innerHTML = `
    ${contactForm()}
    `;
    return section;
}