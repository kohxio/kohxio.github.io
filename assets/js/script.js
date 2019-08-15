"use strict";

$(document).ready(function(){

    /*----------------------------------------
     passward show hide
     ----------------------------------------*/
    $('.show-hide').show();
    $('.show-hide span').addClass('show');

    $('.show-hide span').click(function(){
        if( $(this).hasClass('show') ) {
            $('input[name="login[password]"]').attr('type','text');
            $(this).removeClass('show');
        } else {
            $('input[name="login[password]"]').attr('type','password');
            $(this).addClass('show');
        }
    });
    $('form button[type="submit"]').on('click', function(){
        $('.show-hide span').text('Show').addClass('show');
        $('.show-hide').parent().find('input[name="login[password]"]').attr('type','password');
    });


 /*------------------------
     loader
     --------------------------*/
     $('.loader-wrapper').fadeOut('slow', function() {
            $(this).remove();
        });
    
	
    /*----------------------------------------
     Dark Header
     ----------------------------------------*/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $(".navbar").addClass("darkHeader");
        } else {
            $(".navbar").removeClass("darkHeader");
        }
    });

    /*----------------------------------------
     mobile menu nav click hide collapse
     ----------------------------------------*/
    var mobile_menu = $( window ).width();
    if(mobile_menu < 991){
        $("nav a.nav-link").on('click', function(event) {
            if(!$(this).hasClass('dropdown-toggle')){

                console.log('click');
                $(".navbar-collapse").collapse('hide');
            }

        });
    }

    /*----------------------------------------
     home removeclass section
     ----------------------------------------*/
    var slider_caption = $( window ).width();
    if(slider_caption >= 2000){
        $('.home-right').addClass("home-contain");
    }
    if(slider_caption <= 1024){
        $('.home-right').addClass("home-contain");
    }

    /*----------------------------------------
     GO to Home
     ----------------------------------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
    $('.tap-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });



    /*----------------------------------------
     Slider Section
     ----------------------------------------*/
    var screenshot = $(".screenshot-carousel");
    screenshot.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        center:true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive:{
            0:{
                items:2,
            },
            767:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5
            }
        }
    })
    var screenshot = $(".screenshot-carousel-rtl");
    screenshot.owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        center:true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive:{
            0:{
                items:2,
            },
            767:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5
            }
        }
    })

    var team = $(".team-carousel");
    team.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:5,
            },
            600:{
                items:1,
                margin:5,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    })
    var team = $(".team-carousel-rtl");
    team.owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:5,
            },
            600:{
                items:1,
                margin:5,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    })

    var blog = $(".blog-carousel");
    blog.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:5,
                nav:false,
            },
            600:{
                items:1,
                margin:0,
                nav:false,
            },
            768:{
                items:2,
            },
            1000:{
                items:2
            }
        }
    });
    var blog = $(".blog-carousel-rtl");
    blog.owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:5,
                nav:false,
            },
            600:{
                items:1,
                margin:0,
                nav:false,
            },
            768:{
                items:2,
            },
            1000:{
                items:2
            }
        }
    });
    

    var price = $(".price-carousel");
    price.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true,
                margin:0
            },
            600:{
                items:1,
                dots:true,
                margin:0,
            },
            768:{
                items:2,
                dots:true,
            },
            992:{
                items:3,
            },
            1000:{
                items:3
            }
        }
    });


    var price = $(".price-carousel-rtl");
    price.owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true,
                margin:0
            },
            600:{
                items:1,
                dots:true,
                margin:0,
            },
            768:{
                items:2,
                dots:true,
            },
            992:{
                items:3,
            },
            1000:{
                items:3
            }
        }
    });

    var testimonial = $(".testimonial-carousel");
    testimonial.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navClass:['owl-prev','owl-next'],
        navText:['<img src="assets/images/back.png">','<img src="assets/images/next.png">'],
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false
            },
            600:{
                items:1,
                dots:true,
                nav:false
            },
            991:{
                items:1,
            },
            1000:{
                items:1
            }
        }
    });

    var testimonial = $(".testimonial-carousel-rtl");
    testimonial.owlCarousel({
        rtl: true,
        loop: true,
        margin: 0,
        nav: true,
        navClass: ['owl-prev', 'owl-next'],
        navText: ['<img src="assets/images/back.png">', '<img src="assets/images/next.png">'],
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            991: {
                items: 1,
            },
            1000: {
                items: 1
            }
        }
    });   
    /*----------------------------------------
     color picker start
     ----------------------------------------*/
    (function() {
        $('<div class="color-picker">' +
            '<a href="#" class="handle">' +
            '<i class="fa fa-cog"></i>' +
            '</a><div class="sec-position"><div class="settings-header">' +
            '<h3>Select Color:</h3>' +
            '</div>' +
            '<div class="section">' +
            '<div class="colors o-auto">' +
            '<a href="#" class="color-1" ></a>' +
            '<a href="#" class="color-2" ></a>' +
            '<a href="#" class="color-3" ></a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>').appendTo($('body'));
    })();
    var body_event = $("body");
    body_event.on("click", ".color-1", function() {
        $("#color" ).attr("href", "assets/css/color/color-1.css" );
        $("#color-admin" ).attr("href", "assets/css/color/color-1.css" );
        return false;

    });
    body_event.on("click", ".color-2", function() {
        $("#color" ).attr("href", "assets/css/color/color-2.css" );
        $("#color-admin" ).attr("href", "assets/css/color/color-2.css" );
        return false;
    });
    body_event.on("click", ".color-3", function() {
        $("#color" ).attr("href", "assets/css/color/color-3.css" );
        $("#color-admin" ).attr("href", "assets/css/color/color-3.css" );
        return false;
    });
    $('.color-picker').animate({right: '-190px'});
    body_event.on("click", ".color-picker a.handle", function(e) {
        e.preventDefault();
        var div = $('.color-picker');
        if (div.css('right') === '-190px') {
            $('.color-picker').animate({right: '0px'});
        }
        else {
            $('.color-picker').animate({right: '-190px'});
        }
    });
    
});