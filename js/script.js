window.addEventListener("DOMContentLoaded", function (e) {

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie;
	}
	if (isIE()) {
		document.querySelector('html').classList.add('ie');
	}

	let iconMenu = $('.js-icon-menu'),
		menuBody = $('.js-menu-body');

	iconMenu.click(function (e) {
		$('body').toggleClass('_lock');
		iconMenu.toggleClass('_active');
		menuBody.toggleClass('_active');
	})


	let newsSlider = $('.js-news-slider')

	if (newsSlider.length > 0) {
		newsSlider.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/news-slider-arrow.svg" alt=""></img>',
			nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/news-slider-arrow.svg" alt=""></img>',
			dots: true,
			responsive: [{
					breakpoint: 1199,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						arrow: false,
					},
				},
				{
					breakpoint: 766,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrow: false,
					},
				},
			],
		});
	}

	let tabs = $('.js-tabs');

	if (tabs.length > 0) {
		tabs.each(function () {
			let ths = $(this);
			ths.find('.js-tabs-item').not(':first').hide();
			ths.find('.js-tabs-head').click(function () {
				ths.find('.js-tabs-head').removeClass('_active').eq($(this).index()).addClass('_active');
				ths.find('.js-tabs-item').hide().eq($(this).index()).fadeIn(500)
			}).eq(0).addClass('_active');
		});
	}

	let accordions = $('.js-accordion');

	if (accordions.length > 0) {
		accordions.click(function (e) {
			$(this).toggleClass("_active");
			$(this).prev().children('.js-accordion-content').slideToggle(600);
		});
	}

	let serviceAccordions = $('.js-service-accordion');

	if (serviceAccordions.length > 0) {
		serviceAccordions.click(function (e) {
			$(this).next().slideToggle(500);
		});
	}

	let conclusions = $('.js-conclusion');

	if (conclusions.length > 0) {
		conclusions.click(function (e) {
			$('body').addClass('_lock');
			$(".js-modal").fadeIn(500);
		});
	}

	$(".js-modal-close").click(function (e) {
		$('body').removeClass('_lock');
		$(".js-modal").fadeOut(500);
	});


	let call = $('.js-call');

	if (call.length > 0) {
		call.click(function (e) {
			$('body').addClass('_lock');
			$(".js-modal-call").fadeIn(500);
		});
	}

	$(".js-modal-call-close").click(function (e) {
		$('body').removeClass('_lock');
		$(".js-modal-call").fadeOut(400);
	});

	let message = $('.js-message');

	if (message.length > 0) {
		message.click(function (e) {
			$('body').addClass('_lock');
			$(".js-modal-message").fadeIn(400);
		});
	}

	$(".js-modal-message-close").click(function (e) {
		$('body').removeClass('_lock');
		$(".js-modal-message").fadeOut(400);
	});
});