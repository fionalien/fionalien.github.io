// 往下捲Header白色
function floatMenu() {
    $(".header").addClass("floating"),
    $("#goTop").fadeIn("fast")
}

// 回到頂端Header透明
function dipMenu() {
    $(".header").removeClass("floating"),
    $("#goTop").stop().fadeOut("fast")
}

// (360-90)/12=22.5deg
var tirePos = [
    '', //0 輪胎品牌 (90deg)
    'matrix(-0.38,0.92,-0.92,-0.38,0,0)', //1 最大載重及胎壓 (112.5deg)
    'matrix(-0.71,0.71,-0.71,-0.71,0,0)', //2 安裝方向 (135deg)
    'matrix(-0.92,0.38,-0.38,-0.92,0,0)', //3 強化輪胎標示 (157.5deg)
    'matrix(-1,0,,-1,0,0)', //4 輪胎的規格 (180deg)
    'matrix(-0.92,-0.38,0.38,-0.92,0,0)', //5 製造產地 (202.5deg)
    'matrix(-0.71,-0.71,0.71,-0.71,0,0)', //6 輪胎花紋名稱 (225deg)
    'matrix(-0.38,-0.92,0.92,-0.38,0,0)', //7 3T (247.5deg)
    'matrix(0,-1,1,0,0,0)', //8 製造日期(周/年) (270deg)
    'matrix(0.38,-0.92,0.92,0.38,0,0)', //9 規格代碼 (292.5deg)
    'matrix(0.71,-0.71,0.71,0.71,0,0)', //10 美國運輸部縮寫 (315deg)
    'matrix(0.92,-0.38,0.38,0.92,0,0)', //11 無內胎之輪胎 (337.5deg)
    'matrix(1,0,0,1,0,0)' //12 輻射層輪胎 (360deg)
];
// 360/12 = 30deg
var tirePos2 = [
    '', //0 輪胎品牌 (0deg)
    'matrix(0.82,0.57,-0.57,0.82,0,0)', //1 最大載重及胎壓 (35deg)
    'matrix(0.34,0.94,-0.94,0.34,0,0)', //2 安裝方向 (70deg)
    'matrix(-0.26,0.97,-0.97,-0.26,0,0)', //3 強化輪胎標示 (105deg)
    'matrix(-0.77,0.64,-0.64,-0.77,0,0)', //4 輪胎的規格 (140deg)
    'matrix(-0.77,0.64,-0.64,-0.77,0,0)', //5 製造產地 (140deg)
    'matrix(-0.98,-0.17,0.17,-0.98,0,0)', //6 輪胎花紋名稱 (190deg)
    'matrix(-0.34,-0.94,0.94,-0.34,0,0)', //7 3T (250deg)
    'matrix(0.09,-1.00,1.00,0.09,0,0)', //8 製造日期(周/年) (275deg)
    'matrix(0.57,-0.82,0.82,0.57,0,0)', //9 規格代碼 (305deg)
    'matrix(0.91,-0.42,0.42,0.91,0,0)', //10 美國運輸部縮寫 (315deg)
    'matrix(0.97,-0.26,0.26,0.97,0,0)', //11 無內胎之輪胎 (345deg)
    'matrix(0.97,0.26,-0.26,0.97,0,0)' //12 輻射層輪胎 (375deg)
];

//啟用輪胎動畫
function initTireRound(sreenWidth) {
    $("#tirePanel>ul>li")
    .mouseenter(function(e) {
        let index = $(this).index();
        let pos;
        sreenWidth>1199?pos=tirePos[index]:pos=tirePos2[index];
        //選單變色
        $("#tirePanel>ul>li").eq(index).addClass('active').siblings('li').removeClass('active');
        //旋轉輪胎
        $("#tireShow")
        .css("transform", pos)
        .css("-ms-transform", pos)
        .css("-webkit-transform", pos);
        //變換圖片
        $("#tireShow>img").attr("src", "img/tirezone/" + index + ".png");
    });
}

//啟用新聞滑塊
function initSlide() {
    //Slick - 啟用新聞滑塊
    var slickOptions = {
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    $('.slick-slider').slick(slickOptions);
}

//新聞滑塊向上捲
function handleSlideUP() {
    $('.slick-slider').slick("slickPrev");
}

//新聞滑塊向下捲
function handleSlideDown() {
    $('.slick-slider').slick("slickNext");
}

$(document).ready(function() {
    let sreenWidth = $(window).width();
    //啟用新聞滑塊
    initSlide();
    //啟用輪胎動畫
    initTireRound(sreenWidth);
});

$(window).resize(function() {
    let sreenWidth = $(window).width();
    //啟用輪胎動畫
    initTireRound(sreenWidth);
});