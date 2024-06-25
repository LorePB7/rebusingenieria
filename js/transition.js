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
