var isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i) },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i) },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i) },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i) },
    any: function() { return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() }
};

//回到頂端
function goTop() {
    $("html,body").animate({
        scrollTop: 0
    }, 500)
}

// 手機版控制主選單開關
function openMenu() {
    $("body").toggleClass("noScroll"),
    $(".header").toggleClass("open");
}

// 往下捲
function floatMenu() {
    $("#goTop").fadeIn("fast")
}

// 回到頂端
function dipMenu() {
    $("#goTop").stop().fadeOut("fast")
}

$(document).ready(function() {
    //向下卷显示goTop
    $(window).scroll(function() {
        $(this).scrollTop()>0?floatMenu():dipMenu();
    });
});
