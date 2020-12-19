$(function () {

    var items = $('.slide');
    var content = $('.content');
    var nav = $('header.slide');
    var link = $('nav ul li a');
    var win = $(window);

    // Change title name when changing screen size
    // function addtitle() {
    //     if ($(window).width() <= 560) {
    //         $(nav).append("<h1>WBA.<h1>")
    //     }
    //     else {
    //         $(nav).append("<h1>Wildland Belize Adventures<h1>")
    //     }
    // }

  $(document).ready(function(){  
                $('#textarea').focus(function(){  
                     $(this).animate({"height":"150px",}, "fast");  
                      $('.message-label').css({"color":"#395e66"});
                });  
                $('#textarea').blur(function(){  
                     $(this).animate({"height": "100px",}, "fast" );  
                      $('.message-label').css('color','lightgrey')
                });  
           });  
           
    // add or remove class to header
    function remove() {
        nav.removeClass("scrolled");
        link.removeClass("nav-link");
        $('nav li a').removeClass('link-change');

    };

    function add() {
        nav.addClass('scrolled');
        link.addClass("nav-link");
        $('nav li a').addClass('link-change');
    };


    win.on("scroll", () => {
        if (win.scrollTop() > 40) {
            add()
        } else {
            remove()
        }
    })
    


  // Show and hide logo/title on header
  
    function change_log_title(){
      win.on("scroll", () => {
        if (win.scrollTop() > 40) {
              $('.header-icon').css('display','block');
              $('.h1').css('display','none');
      } else {
        $('.header-icon').css('display', 'none');
        $('.h1').show('fast');
      }
    })
    
    }
    
 // add remove header/banner booking btn on display size   
    
  function book_hide_show(){
    $('.header-btn').css('display','none');
    $('.banner-btn').css('display','block');
  };
  
  function book_scroll(){
      win.on("scroll", () => {
       if (win.scrollTop() > 400) {
              $('.header-btn').css('display','block');
              $('.banner-btn').css('display','none');
      } else {
          book_hide_show();
      }
    });
  };
  
  function booking_btn(){
    if(win.width() >= 1024){
      book_scroll();
    }else{
      book_hide_show();
    };
  }


  //Show and Hide Modal
  // Add blur/open class

    function addblur(){
      if ($('.modal').hasClass('open')) {
        $('.container').addClass('blur');
      }
    };

    $('#banner-btn').click(function () {
      $('.modal').addClass('open');
     addblur();
    });

    $('.header-btn').click( function() {
      $('.modal').addClass('open');
      addblur()
    });
  
    $('.close').click(function () {
      $('.modal').removeClass('open');
      $('.container').removeClass('blur');
    });


 $('.card-btn').click(()=>{
    if($('.cont-cards').css('display') == 'none'){
      $('.cont-cards').show('1000')
      $('.card-btn').html("View Less");
    }else{
      $('.cont-cards').hide('1000')
      $('.card-btn').html("View More");
    }
  });


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

    //Responsive infinite slider for gallery
    // Slick plugin
    $('.slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        variableWidth: true,
        
        prevArrow: "<span class='slide-next'><ion-icon name='chevron-back-outline'></ion-icon></span>",
        nextArrow: "<span class='slide-prev'><ion-icon name='chevron-forward-outline'></ion-icon></span>",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

      });
      
      
    // FLoating Label inputs
    
      
    booking_btn();
    change_log_title();
      
});