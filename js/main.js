function slideTo(cssClass) {
	$('body').animate({
    scrollTop: $(cssClass).offset().top
 }, 500);
}
