$(document).on('ready', function() {
// Basic variables
	var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

	if (!isTouchDevice) {
		$('.custom-scroll').jScrollPane();

		$(window).resize(function(){
			$('.custom-scroll').jScrollPane();
		});
	}

// Plugins
	$('.b-select-inp select').select2({
		minimumResultsForSearch: -1,
		placeholder: "Please select"
	});

	$('.b-datapicker input').datepicker({
		dateFormat: "MM d"
	});

	(function() {
		var wrap = $('.m-slider-range'),
			sliderBlk = wrap.find('.slider-blk'),
			amountsBlk = wrap.find('.view-amounts'),
			amoutFrom = amountsBlk.find('.val-from'),
			amoutTo = amountsBlk.find('.val-to');

	    sliderBlk.slider({
			range: true,
			min: 0,
			max: 20,
			values: [0, 20],
			slide: function( event, ui ) {
				amoutFrom.val(ui.values[0]);
				amoutTo.val(ui.values[1]);
			}
	    });

	    amoutFrom.val(sliderBlk.slider("values", 0));
		amoutTo.val(sliderBlk.slider("values", 1));
	})();

// Modal windows
	var hidePopup = function () {
		$('body').removeClass('popup-shows');
		$('.m-modal-window-wrap').hide();
		$('.modal-wind-show.active').removeClass('active');
	}

	$('.modal-wind-show').on('click', function(e){
		e.preventDefault();
		hidePopup();
		var it = $(this).attr('data-type');
		it = $('#' + it);
		it.fadeIn();
		$('body').addClass('popup-shows');
	});

	$('.close-md-window').on('click', function(e){
		e.preventDefault();
		hidePopup();
	});

	$('.m-modal-window-wrap').on('click', function(e){
		if ($(e.target).closest('.window-contens').length) {
			return;
		} else {
			hidePopup();
		}
	});

// Basic dropdown
	(function () {
		var hideId = 'dropdown-ishide',
			showId = 'dropdown-isshow',
			dropMaxHeight,
			goHideaway = function () {
				var i = $('.' + showId);
				i.find('> span').removeClass('active');
				$('.mob-menu-toggler').removeClass('active');
				i.find('.mdp-dropdown-menu').fadeOut();
				i.removeClass(showId).addClass(hideId);
			};

		$('.m-dropdown-parent').each(function(){
			$(this).addClass(hideId);
		});

		$('.m-dropdown-parent hideaway-toggler.active, .mdp-dropdown-menu .close-this').on('click',function(e){
			goHideaway();
		});

		$(document).on('click', function(e) {
			if ($(e.target).closest('.m-dropdown-parent, .mob-menu-toggler').length) {
				return;
			} else {
				goHideaway();
			}
		});

		$('.m-dropdown-parent > span').on('click', function () {
			if ($(this).hasClass('active')) {
				goHideaway();
				return;
			}

			goHideaway();

			var dropMenu = $(this).nextAll('.mdp-dropdown-menu'),
				btn = $(this),
				mainParent = btn.parent();

			if (mainParent.hasClass(hideId)) {
				dropMenu.fadeIn();
				btn.addClass('active');
				mainParent.removeClass(hideId).addClass(showId);

				var haveOverflov = dropMenu.find('.custom-scroll');

				if (haveOverflov.length > 0) {
					mainParent.removeClass('hasnt-overflov');
					haveOverflov.jScrollPane({
						verticalDragMaxHeight: 335
					});

					var contensHeight = 0;

					haveOverflov.find('.item, .b-checkbox-unit').each(function(){
						contensHeight = contensHeight + $(this).outerHeight();
					});

					if (contensHeight < haveOverflov.height()) {
						haveOverflov.data('jsp').destroy();
						mainParent.addClass('hasnt-overflov');
					}
				}
			} else {
				dropMenu.fadeOut();
				btn.removeClass('active');
				mainParent.removeClass(showId).addClass(hideId);
			}
		});

		// Dropdown not overflow from window
		var dropNotOverflow = function () {
			dropMaxHeight = $(window).height() + 'px';

			$('.mdp-dropdown-menu, .m-main-search').each(function() {
				$(this).css('max-height', dropMaxHeight);
			});
		}

		dropNotOverflow();	

		$(window).resize(function(){
			dropNotOverflow();
		});
	})();

// Forms customizing
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

// Basic responsiveness
	if (isTouchDevice) {
		$('body').addClass('touch-screen-ver');

		$('.m-top-bar .main-menu, .m-top-bar .brands-row').find('a').on('click', function(e) {
			var popupBlk = $(this).next();
			if (popupBlk.hasClass('brand-menu') || popupBlk.hasClass('sub-items')) popupBlk.hide();
		});

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

	$('.m-profile-hdr .cab-mainmenu .mobmenu-togle').click(function(e){
		e.preventDefault();
		$(this).next().toggleClass('active');
	});

// Slide this
	$('.m-big-info-slide .slide-header').on('click', function(e) {
		e.preventDefault();
		var thisWrap = $(this).parent();
		thisWrap.find('.slide-contens').slideToggle();
		thisWrap.toggleClass('hide-contens');
	});

// Like this
	$('.m-like-this').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('checked');
	})

});

var headerSearchAutoWidth = function() {
	var workingSpace = $('.m-top-bar .b-wrap'),
		logoWidth = workingSpace.find('.main-logo').width(),
		categoriesLinkWidth = workingSpace.find('.categories-link').outerWidth(),
		userInfoWidth = workingSpace.find('.user-info').width(),
		elementsOffset =  (((workingSpace.width() - 20) / 100) * 10),
		searchWidth =  workingSpace.width() - (logoWidth + categoriesLinkWidth + userInfoWidth + elementsOffset);

	workingSpace.find('.search-rorm').width(searchWidth);
}

$(window).load(function(){
	headerSearchAutoWidth();
});


$(window).resize(function(){
	headerSearchAutoWidth();
});