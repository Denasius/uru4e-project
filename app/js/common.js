$(function() {

	let modal = $('.window_modal'),
		link = $('button[data-popup="true"]'),
		overlay = $('.overlay_modal');
	overlay.click(function () {
		modal.toggleClass('window_modal_active');
		overlay.hide();
	});
	link.on('click', function () {
		overlay.show();
		modal.toggleClass('window_modal_active');
	});

	let max_div_height = 0;
	$('.position').each(function () {
		if( $(this).height() > max_div_height ){
			max_div_height = $(this).height();
		}
	});

	let modal_order = $('.window_modal_order'),
		link_order = $('button[data-popup="order"]'),
		overlay_order = $('.overlay_modal_order');
	overlay_order.click(function () {
		modal_order.toggleClass('window_modal_order_active');
		overlay_order.hide();
	});
	link_order.on('click', function () {
		overlay_order.show();
		modal_order.toggleClass('window_modal_order_active');
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

	$('.item_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn-active');
		$('.adaptive-menu').toggleClass('adaptive-menu-active');
	});

	$(window).scroll(function () {
		if ( $(this).scrollTop() > $(this).height() ) {
			$('.top').addClass('top_active');
		}else {
			$('.top').removeClass('top_active');
		}
	});

	$('.top').on('click', function () {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

});
