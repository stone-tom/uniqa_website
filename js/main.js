
$(document).ready(function () {


    var swiperV = new Swiper('.swiper-general-v', {
        initialSlide: 0,
        direction: 'vertical',
        mousewheel: {
            invert: true,
        },
        keyboard:{
            invert:true,
        },
        navigation: {
            nextEl: '.arrow-down',
            prevEl: '.arrow-up',
        },


    });

    var swiperH1 = new Swiper('.swiper-info-h', {
        initialSlide:0,

        mousewheel: {
            invert: true,
        },
        keyboard:{
            invert:true,
        },


    });

    var swiperH2 = new Swiper('.swiper-team-h', {
        initialSlide:0,

        mousewheel: {
            invert: true,
        },
        keyboard:{
            invert:true,
        },


    });


    //Navigation & Adding Active Class on Info-Page

    //General Infos
    $(".info-icon").click(function() {
        swiperH1.slideTo(0);
        $(".time-icon").removeClass('active');
        $(".maps-icon").removeClass('active');
        $(".phone-icon").removeClass('active');
        $(".info-icon").toggleClass('active');

    });


    //Opening Times
    $(".time-icon").click(function() {
        swiperH1.slideTo(1);
        $(".info-icon").removeClass('active');
        $(".maps-icon").removeClass('active');
        $(".phone-icon").removeClass('active');
        $(".time-icon").toggleClass('active');

    });
    //Maps
    $(".maps-icon").click(function() {
        swiperH1.slideTo(2);
        $(".info-icon").removeClass('active');
        $(".phone-icon").removeClass('active');
        $(".time-icon").removeClass('active');
        $(".maps-icon").toggleClass('active');

    });

    //Contact
    $(".phone-icon").click(function() {
        swiperH1.slideTo(3);
        $(".time-icon").removeClass('active');
        $(".maps-icon").removeClass('active');
        $(".info-icon").removeClass('active');
        $(".phone-icon").toggleClass('active');

    });


});