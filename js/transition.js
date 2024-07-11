$(document).ready(function() {
    // Añadir la clase fade-in al cargar la página
    $('body').addClass('fade-in');

    // Manejar el clic en los enlaces
    $('a').on('click', function(event) {
        var href = $(this).attr('href');

        // Prevenir la acción por defecto solo para enlaces de navegación entre páginas
        event.preventDefault();

        // Quitar la clase fade-in para iniciar la animación de desvanecimiento
        $('body').removeClass('fade-in');

        // Redirigir a la nueva página después de la animación
        setTimeout(function() {
            window.location.href = href;
        }, 500); // Tiempo que coincide con la duración de la transición en CSS
    });

    // Waypoints para animar elementos al hacer scroll
    $('.elemento').each(function() {
        var element = $(this);

        new Waypoint({
            element: element[0],
            handler: function(direction) {
                if (direction === 'down') {
                    element.addClass('visible');
                } else {
                    element.removeClass('visible');
                }
            },
            offset: '60%'
        });

        new Waypoint({
            element: element[0],
            handler: function(direction) {
                if (direction === 'up') {
                    element.addClass('visible');
                } else {
                    element.removeClass('visible');
                }
            },
            offset: '-20%'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imgWebP = new Image();
                const imgFallback = new Image();
                imgWebP.src = "./images/imageningeniero5.webp";
                imgFallback.src = "./images/imageningeniero5.jpg";

                imgWebP.onload = () => {
                    entry.target.style.backgroundImage = 'linear-gradient(180deg , #0000008c 0%, #0000008c 100%), url(' + imgWebP.src + ')';
                };

                imgWebP.onerror = () => {
                    imgFallback.onload = () => {
                        entry.target.style.backgroundImage = 'linear-gradient(180deg , #0000008c 0%, #0000008c 100%), url(' + imgFallback.src + ')';
                    };
                };

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const aboutSection = document.querySelector('.about');
    observer.observe(aboutSection);
});


