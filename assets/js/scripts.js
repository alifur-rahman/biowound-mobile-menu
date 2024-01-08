$(document).ready(function () {
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });

	// Mobile Menu Icon

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
		$(this).toggleClass('open');
		$('body').toggleClass('show-nav');
		return false;
	});
	$(".newco-header__nav").on("click", function (event) {
		if (!$(event.target).hasClass("newco-header__nav-list")) {
			$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
			$('body').toggleClass('show-nav');
		}
		if ($(event.target).is('a') || $(event.target).closest('a').length > 0) {
			return true;
		} else {
			return false;
		}
	});
	$('.has-children').on('click', function (event) {
		if ($(window).width() < 1200) {
			$(this).addClass('active');
			$(this).find('.newco-header__nav-list-wrapper').addClass('active');
		}
		if ($(event.target).is('a') || $(event.target).closest('a').length > 0) {
			return true;
		} else {
			return false;
		}

	});

	$('.back-button').on('click', function () {
		$(this).parent().removeClass('active');
		$(this).parent().parent().removeClass('active');
		return false;
	});
});

$(window).resize(function () {
	if ($(window).width() > 1200) {
		$('.has-children').removeClass('active');
		$('.newco-header__nav-list-wrapper').removeClass('active');
	}
})