export function initContactController() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", handleSubmit);
    console.log("Controller cargado");
}

async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const errors = validateForm(data);

    if (errors.length > 0) {
        showErrors(errors);
        return;
    }

    await sendToFormspree(form, data);
    console.log("Submit interceptado");

}

function validateForm(data) {
    const errors = [];

    if (!data.nombre?.trim()) errors.push("El nombre es obligatorio.");
    if (!data.asunto?.trim()) errors.push("El asunto es obligatorio.");
    if (!data.mensaje?.trim()) errors.push("El mensaje es obligatorio.");

    if (!data.correo?.trim()) {
        errors.push("El correo es obligatorio.");
    } else if (!isValidEmail(data.correo)) {
        errors.push("El formato del correo no es válido.");
    }

    return errors;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showErrors(errors) {
    showToast(errors[0], "error");
}

function showToast(message, type = "success") {
    const existingToast = document.querySelector(".custom-toast");
    if (existingToast) existingToast.remove();

    const toast = document.createElement("div");

    toast.className = `
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `;

    if (type === "success") {
        toast.classList.add("bg-green-600");
    } else {
        toast.classList.add("bg-red-600");
    }

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("translate-x-full", "opacity-0");
    }, 50);

    setTimeout(() => {
        toast.classList.add("translate-x-full", "opacity-0");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

async function sendToFormspree(form, data) {
    const btn = document.getElementById("submitBtn");

    btn.disabled = true;
    btn.textContent = "Enviando...";

    try {
        const response = await fetch("https://formspree.io/f/xqabgepe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showToast("¡Gracias! Tu mensaje ha sido enviado correctamente.", "success");
            form.reset();
        } else {
            showToast("Hubo un problema al enviar el mensaje.", "error");
        }

    } catch (error) {
        showToast("Error de conexión. Intenta nuevamente.", "error");
    }

    btn.disabled = false;
    btn.textContent = "Enviar";
}