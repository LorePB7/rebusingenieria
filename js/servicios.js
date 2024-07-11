$(document).ready(function() {
    // Ocultar todas las descripciones inicialmente
    $('.service-description').hide();

    // Inicializar el carrusel con flechas
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
    });

    // Manejar el clic en un service-item
    $('.service-item').on('click', function() {
        var serviceId = $(this).data('service');
        var $currentDescription = $('#service-' + serviceId);

        if ($currentDescription.hasClass('visible')) {
            $currentDescription.slideUp(800, function() {
                $(this).removeClass('visible');
            });
        } else {
            $('.service-description.visible').slideUp(800, function() {
                $(this).removeClass('visible');
            });
            $currentDescription.slideDown(800, function() {
                $(this).addClass('visible');
                $('#service-' + serviceId + ' .carousel').slick('setPosition');
            });
        }
    });
});
