
$(document).ready(function () {


    var swiperV = new Swiper('.swiper-general-v', {
        direction: 'vertical',
        mousewheel: {
            invert: true,
        },
        keyboard:{
            invert:true,
        },


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    var swiperH1 = new Swiper('.swiper-info-h', {
        mousewheel: {
            invert: true,
        },
        keyboard:{
            invert:true,
        },


    });

    var swiperH2 = new Swiper('.swiper-team-h', {
        mousewheel: {
            invert: true,
        },
        keyboard:{
            invert:true,
        },


    });
});