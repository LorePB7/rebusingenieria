$(document).ready(function() {
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
        var $currentDescriptionContainer = $('#service-' + serviceId);

        if ($currentDescriptionContainer.hasClass('visible')) {
            $currentDescriptionContainer.slideUp(800, function() {
                $(this).removeClass('visible');
                $('.service-description').removeClass('visible').css('max-height', '0').css('opacity', '0');
            });
        } else {
            $('.service-description-container.visible').slideUp(800, function() {
                $(this).removeClass('visible');
                $('.service-description').removeClass('visible').css('max-height', '0').css('opacity', '0');
            });
            $currentDescriptionContainer.slideDown(800, function() {
                $(this).addClass('visible');
                $('#service-' + serviceId + ' .service-description:first').addClass('visible').css('max-height', '1200px').css('opacity', '1');
                $('#service-' + serviceId + ' .carousel').slick('setPosition');
            });
        }
    });

    // Manejar la navegación entre descripciones
    $('.next-service').on('click', function() {
        var currentDescription = $(this).closest('.service-description');
        var nextDescription = currentDescription.next('.service-description');
        if (nextDescription.length) {
            currentDescription.removeClass('visible').css('max-height', '0').css('opacity', '0');
            nextDescription.addClass('visible').css('max-height', '1200px').css('opacity', '1');
            nextDescription.find('.carousel').slick('setPosition');
        }
    });

    $('.prev-service').on('click', function() {
        var currentDescription = $(this).closest('.service-description');
        var prevDescription = currentDescription.prev('.service-description');
        if (prevDescription.length) {
            currentDescription.removeClass('visible').css('max-height', '0').css('opacity', '0');
            prevDescription.addClass('visible').css('max-height', '1200px').css('opacity', '1');
            prevDescription.find('.carousel').slick('setPosition');
        }
    });
});
