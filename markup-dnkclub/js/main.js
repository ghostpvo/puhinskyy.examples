$(document).on('ready', function() {
// Basic variables
	var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints,
		mainBody = $('body'),
		mainWind = $(window);

// Plugins
	// fullpage slides
	var fullpageWrapper = $('#fullpage-slides'),
		fullpageInit = function() {
			fullpageWrapper.fullpage({
				'verticalCentered': false,
				'css3': true,
				'anchors': ['first_offer','main_problems','without_problems','what_is_real_case','our_conditions','get_into_dnkclub','entry_form'],
				'navigation': true,
				'navigationPosition': 'left',

				'onLeave': function(index, nextIndex, direction){
					if (index == 3 && direction == 'down'){
						$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
					}
					else if(index == 3 && direction == 'up'){
						$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
					}
				}
			});
		},
		mediumScreenMode = function(){
			windHeight = mainWind.height();

			if(windHeight < 650 && !mainBody.hasClass('medium-screen-mode')) {
				mainBody.addClass('medium-screen-mode');
			} else if(windHeight >= 650 && mainBody.hasClass('medium-screen-mode')) {
				mainBody.removeClass('medium-screen-mode');
			}
		},
		disableSlidesOnMobile = function(){
			if(mainWind.height() < 520 || mainWind.width() < 980) {
				if(fullpageWrapper.hasClass('fullpage-wrapper') && !fullpageWrapper.hasClass('fp-destroyed')) {
					$.fn.fullpage.destroy('all');
				}
			} else if(fullpageWrapper.hasClass('fp-destroyed')) {
				fullpageInit();
			}
		};

	$('.scroll-to-anch').on('click',function(e){
		var thisEl = $(this);

		if(mainWind.height() < 520 || mainWind.width() < 980) {
			e.preventDefault();
			var scrollTop = $(thisEl.attr('data-anchor')).offset().top;
			$('html,body').animate({scrollTop: scrollTop}, 600);
		}
	});

	fullpageInit();
	mediumScreenMode();
	disableSlidesOnMobile();

	mainWind.resize(function(){
		mediumScreenMode();
		disableSlidesOnMobile();
	});

// Forms customizing
	// Masked inp
	jQuery(function($){
		$('input[type="tel"]').mask('+7(999) 999-99-99');
	});

	// Form validation
	$.validate({
		validateOnBlur : false,
		showHelpOnFocus : false
	});

	// Custom checkbox
	$('.b-checkbox-unit').on('change', 'input', function (e) {
	    e.stopPropagation();
	    e.preventDefault();
	    $(this).prev().toggleClass('checked');
	});

	// Custom radio
	$('.b-radio-unit').on('change', 'input', function (e) {
		e.stopPropagation();
	    e.preventDefault();
	    var groupName = $(this).attr('name');
	    $('.b-radio-unit input').attr('name',groupName).prev().removeClass('checked');
	    $(this).prev().addClass('checked');
	});

	$('.b-checkbox-unit, .b-radio-unit').find('input').each(function() {
		i = $(this);

		if (i.prop('checked')) {
			i.prev().addClass('checked');
		}
	});

	$('#entry-form .how-old-inp').each(function(){
		var curEl = $(this),
			sliderBlk = curEl.find('.slider-place'),
			numbersBlk = curEl.find('.numbers-place');

		sliderBlk.slider({
	      	value: 10,
	      	min: 0,
	      	max: 25,
	      	range: "min",
	      	step: 1,
	      	slide: function(event, ui) {
	        	numbersBlk.val(ui.value);
	      	}
	    });

    	numbersBlk.val(sliderBlk.slider('value'));
	});

// Basic responsiveness
	if (isTouchDevice) {
		$('body').addClass('touch-screen-ver');

		try { // Removing :hover actions on touch devices
	        for (var si in document.styleSheets) {
	            var styleSheet = document.styleSheets[si];
	            if (!styleSheet.rules) continue;

	            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
	                if (!styleSheet.rules[ri].selectorText) continue;

	                if (styleSheet.rules[ri].selectorText.match(':hover')) {
	                    styleSheet.deleteRule(ri);
	                }
	            }
	        }
	    } catch (ex) {}
	}
// end Basic responsiveness
});