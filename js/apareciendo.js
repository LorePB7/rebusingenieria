$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, 'easeInOutExpo', function() {
                window.location.hash = hash;
            });
        }
    });

    // Waypoints to animate elements on scroll
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
            offset: '80%'
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