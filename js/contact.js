$(function() {

    $window = $(window);

    func = function() {
        var th = $('#abt').offset().top;
        if (!($window.scrollTop() < th)) {
            $('.check').fadeIn('slow');
        } else {
            $('.check').fadeOut('slow');
        }
    };

    $window.scroll(func);

    var height = $('#flt-d').offset().top;
    $('.check').click(function() {
        $('html, body').animate(
                {
                    scrollTop: height
                }, 'slow'
                );
    });


});