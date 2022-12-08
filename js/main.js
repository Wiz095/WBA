$(function(){

    const items = $('.slide');
    const win = $(window);
    const nav = $('header.slide');

    // activate side menu close/open
    function open() {
        items.removeClass('close').addClass('open');
    }
    function close() {
        items.removeClass('open').addClass('close');
    }
    $('#navToggle').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        if ($('.content').hasClass('open')) {
            close();
            $('header').addClass('push')
        } else {
            open();
        }
    });

    setInterval(() => {
        // add or remove class to header
        function remove() {
            $('header').removeClass("scrolled");
        };

        function add() {
            $('header').addClass('scrolled');
        };
        if (win.scrollTop() > 40) {
              $('.header-icon').css({"display": "flex", "align-items": "self-end"});
              $('.h1').css('display', 'none');
              add();
        } else {
            
            $('.header-icon').css('display', 'none');
            $('.h1').css('display', 'block');
            remove();
        }

        var currentYear = (new Date).getFullYear();
        $(".current-year").text(currentYear);

    }, 10);

    // Show more tours
     $('.display-card a').click(()=>{
        if($('.cont-cards').css('display') == 'none'){
        $('.cont-cards').slideDown('slow')
        $('.display-card a span').html("View Less");

        }else{
        $('.cont-cards').slideUp('slow')
        $('.display-card a span').html("View More Tours");
        }
    });

    // add remove header/banner booking btn on display size  and scroll


    // Get current Year
    
})
