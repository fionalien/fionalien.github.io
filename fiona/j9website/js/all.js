let mainWidth = $(window).width();

if(mainWidth <= 1200){
    setTimeout(()=>{
        $('.arrow').css('display','block')
        swiperBlock.init()

    },1000)
}

var swiperBlock = new Swiper('.swiperBlock', {
    slidesPerView: 3,
    spaceBetween: 10,
    // speed: 300,
   
    navigation: {
        nextEl: ".arr_right",
        prevEl: ".arr_left",
      },
    
    init:false
});