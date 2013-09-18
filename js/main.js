function slideTo(cssClass) {
	$('html, body').animate({
    scrollTop: $(cssClass).offset().top
 }, 250);
}
