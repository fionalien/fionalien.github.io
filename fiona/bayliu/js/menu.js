const toogleNav = (a , e) => {
	$(".sub-menu").toggleClass("active");
    e.stopPropagation();
}