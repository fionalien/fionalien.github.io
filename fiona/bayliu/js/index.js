//NEW切換頁面
const tooglePage = (a, b, e) => {
    $(a).addClass("active").siblings("li").removeClass("active");
    $(".recom-left-part .page").eq(b).removeClass("hidden").siblings(".page").addClass("hidden");
    e.stopPropagation();
}

let SliderOptions = {
    autoplay: true,
    draggable: true,
    arrows: true,
    dots: false,
    useTransform: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1023,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '240px',
            slidesToShow: 1
        }
    }, {
        breakpoint: 640,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
        }
    }]
};

const SliderOptions2 = {
    autoplay: true,
    draggable: true,
    arrows: false,
    dots: true,
    useTransform: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
};

function MacthSlider() {
    // MATCHBOX
    $('.slider_content').not('.slick-initialized').slick(SliderOptions);
}

// 獨家解盤
function NewsSlider() {
    // MATCHBOX
    let screenWidth = $(window).width();
    $('.all_news_boxes, .all_movie_boxes').not('.slick-initialized').slick(SliderOptions2);
}

$(document).ready(function() {

    let screenWidth = $(window).width();

    MacthSlider();

    if (screenWidth < 1023) {
        NewsSlider();
    }

});

$(window).resize(function() {
    let screenWidth = $(window).width();
    $('.slider_content').not('.slick-initialized').slick(SliderOptions);
    if (screenWidth < 1023) {
        NewsSlider();
    }
});