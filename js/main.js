$(function () {

    var items = $('.slide');
    var content = $('.content');
    var nav = $('header.slide');
    var link = $('nav ul li a');






    // Change title name when changing screen size
    // function addtitle() {
    //     if ($(window).width() <= 560) {
    //         $(nav).append("<h1>WBA.<h1>")
    //     }
    //     else {
    //         $(nav).append("<h1>Wildland Belize Adventures<h1>")
    //     }
    // }

    // add or remove class to header
    function remove() {
        nav.removeClass("scrolled");
        link.removeClass("nav-link");

    };

    function add() {
        nav.addClass('scrolled');
        link.addClass("nav-link");
    };


    $(window).on("scroll", () => {
        if ($(window).scrollTop() > 50) {
            add()
        } else {
            remove()
        }
    })


    // activate side menu close/open
    function open() {
        $(items).removeClass('close').addClass('open');
    }
    function close() {
        $(items).removeClass('open').addClass('close');
    }

    $('#navToggle').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (content.hasClass('open')) {
            close();
        } else {
            open();
        }
    });


    content.click(function () {
        if (content.hasClass('open')) {
            close();
        }
    });

   
});