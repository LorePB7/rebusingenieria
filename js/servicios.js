$(document).ready(function() {
    $('.service-description').hide(); // Ocultar todas las descripciones inicialmente
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
    });

    $('.service-item').on('click', function() {
        var serviceId = $(this).data('service');
        var $currentDescription = $('#service-' + serviceId);

        if ($currentDescription.hasClass('visible')) {
            $currentDescription.slideUp(600, function() {
                $(this).removeClass('visible');
            });
        } else {
            $('.service-description.visible').slideUp(600, function() {
                $(this).removeClass('visible');
            });
            $currentDescription.slideDown(600, function() {
                $(this).addClass('visible');
                $('#service-' + serviceId + ' .carousel').slick('setPosition');
            });
        }
    });
});
