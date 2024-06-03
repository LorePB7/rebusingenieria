// form.js
document.addEventListener('DOMContentLoaded', (event) => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el envío por defecto del formulario

        // Obtener valores de los campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validar campos (ejemplo básico)
        if (name === '' || email === '' || asunto === '' || message === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Mostrar mensaje de éxito
        alert(`Gracias por tu mensaje, ${name}. Nos pondremos en contacto contigo pronto.`);

        // Opcional: Aquí puedes agregar el envío del formulario a un servidor usando fetch() o AJAX

        // Resetear formulario
        contactForm.reset();
    });
});
