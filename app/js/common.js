$(function() {

	let max_div_height = 0;
	$('.position').each(function () {
		if( $(this).height() > max_div_height ){
			max_div_height = $(this).height();
		}
	});

	$('.section-image').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="btn-arrow btn-prev"><img src="img/arrow.png" alt="arrow"></div>',
		nextArrow: '<div class="btn-arrow btn-next"><img src="img/arrow_right.png" alt="arrow"></div>',
		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn-active');
		$('.adaptive-menu').toggleClass('adaptive-menu-active');
	});

});
