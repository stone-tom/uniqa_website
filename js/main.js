
$(document).ready(function () {


    var swiperV = new Swiper('.swiper-general-v', {
        initialSlide:1,
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

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiperH1 = new Swiper('.swiper-info-h', {
        initialSlide:1,

        mousewheel: {
            invert: true,
        },
        keyboard:{
            invert:true,
        },


    });

    var swiperH2 = new Swiper('.swiper-team-h', {
        initialSlide:1,

        mousewheel: {
            invert: true,
        },
        keyboard:{
            invert:true,
        },


    });
});