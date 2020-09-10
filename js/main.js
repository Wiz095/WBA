$(function ($) {
    function mobilecheck() {
        var check = false;
        (navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    var clickevent = mobilecheck() ? 'touchstart' : 'click';

    var items = $('.slide');
    var content = $('.content');
    var nav = $('header.slide')
    var link = $('nav ul li a')




    // Change title name when changing screen size
    $(document).ready(
        function () {
            if ($(window).width() <= 560) {
                $(nav).append("<h1>WBA.<h1>")
            }
            else {
                $(nav).append("<h1>Wildland Belize Adventures<h1>")
            }


        });

        function remove() {
            nav.removeClass("scrolled");
            link.removeClass("nav-link");

        };


        function add() {
            nav.addClass('scrolled');
            link.addClass("nav-link");
        };


        $(window).on("scroll", ()=>{
            if($(window).scrollTop() > 50){
                add()
            }else {
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

    $('#navToggle').on(clickevent, (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (content.hasClass('open')) {
            close();
        } else {
            open();
        }
    });
    content.click(() => {
        if (content.hasClass('open')) {
            close();
        }
    });




});
