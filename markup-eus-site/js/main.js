// Basic variables
var mainBody = $('body'),
	documentWindow = $(window),
	pageMainHdr = $('.m-top-bar'),
	pageScrTop = $(window).scrollTop(),
	isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

$(document).on('ready', function() {
	// Plugins initialisations
	$('.can-call-us .benefits-side .items-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    speed: 500
	});

  $('.memorate-tasks .video-side .items-list').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  speed: 500,
	  fade: true,
		cssEase: 'linear'
  });

   	$('.m-pictureslist .items-list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		asNavFor: '.slider-nav',
		responsive: [
	    {
	      breakpoint: 520,
	      settings: {
	      	asNavFor: false
	      }
	    }
	  ]
	});

	$('.m-pictureslist .slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.m-pictureslist .items-list',
		dots: false,
		arrows: false,
		focusOnSelect: true
	});

	$('.m-employers-list .items-list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		adaptiveHeight: true,
		responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	      	slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 720,
	      settings: {
	      	slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.m-team-leaders .items-list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true
	});

	$('.p-partners-program .travel-block .items-list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: true
	});

	$('.m-awards-and-certificates .items-list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		responsive: [
	    {
	      breakpoint: 540,
	      settings: {
	      	slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 420,
	      settings: {
	      	slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.p-legal-entities .legal-issues .issues-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 10000,
    dots: true,
    arrows: true,
		speed: 500,
		responsive: [
	    {
	      breakpoint: 880,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
  		},
  	]
	});

	$('.p-partners-program .reviews-blk .clients-list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		speed: 500,
    	dots: true,
    	arrows: true,
    	infinite: true,
  		responsive: [
  			{
		      breakpoint: 580,
		      settings: {
		        dots: false
		      }
		    },
  		]
	});

  $('.b-select select').select2({minimumResultsForSearch: -1});

	// Order form validaton
	$('.modal-wind-show.nextstep-disable').on('click',function(){
		var thisEl = $(this),
			wSpace = thisEl.parents('.val-check');

		wSpace.find('.val-required').each(function(){
			var thisEl = $(this),
				validObj = thisEl.find('input,select'),
				valueLength = validObj.val().length,
				valid = validObj.attr('data-validation');

			if(valueLength < valid) {
				thisEl.addClass('val-failed');
				thisEl.removeClass('val-success');
				thisEl.append('<span class="val-failed-text">Обязательное поле</span>')
			} else {
				thisEl.removeClass('val-failed');
				thisEl.addClass('val-success');
			}
		});

		if(!wSpace.find('.val-required').hasClass('val-failed')) {
			$(this).removeClass('nextstep-disable');
		}
	});

	// Modal windows
	var hidePopup = function () {
			$('body').removeClass('popup-shows');
			$('.m-modal-window-wrap').hide();
			$('.modal-wind-show.active').removeClass('active');
		},
		curWrap,
		videoStop = function() {
			var videoBlk = curWrap.find('iframe'),
				viderSrc = videoBlk.attr('src');

			videoBlk.attr('src','');
		};

	$('.modal-wind-show').on('click', function(e){
		e.preventDefault();
		var thisBtn = $(this),
			it = $('#' + thisBtn.attr('data-type')),
			itContens = it.find('.window-contens');

		if(thisBtn.hasClass('nextstep-disable')) {
			return false;
		}

		hidePopup();
		it.fadeIn();
		$('body').addClass('popup-shows');

		if(it.hasClass('video-player')) {
			vidSource = it.attr('data-source');
			it.find('iframe').attr('src',vidSource);
		}

		if(thisBtn.hasClass('buy-card-btn')) {
			var curPrice = thisBtn.attr('data-price');

			it.find('.m-counth-blk input').attr('name', thisBtn.attr('data-id'));

			$('.order-card-windows .card-side').each(function(){
				var thisEl = $(this);
				thisEl.find('.card-pic').attr('src','img/cards/'+thisBtn.attr('data-picture'));
				thisEl.find('.card-type .card-name').text(thisBtn.attr('data-name'));
			});

			it.find('.counth-and-price .price-number').text(curPrice).attr('data-price',curPrice);
		}

		var itHeight = itContens.outerHeight(),
			winHeight = documentWindow.height();

		if(itHeight < winHeight) {
			var margCalc = (winHeight - itHeight) / 2 + 'px';
			itContens.css('margin-top', margCalc);
			console.log(winHeight, itHeight, margCalc);
		} else {
			itContens.css('margin','50px auto');
		}
	});

	$('.close-md-window').on('click', function(e){
		e.preventDefault();
		curWrap = $(this).parents('.m-modal-window-wrap');
		hidePopup();
		if(curWrap.hasClass('video-player')){
			videoStop();
		}
	});

	$('.m-modal-window-wrap').on('click', function(e){
		curWrap = $(this);
		if ($(e.target).closest('.window-contens').length) {
			return;
		} else {
			hidePopup();
			if(curWrap.hasClass('video-player')){
				videoStop();
			}
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
	    var wSpace = $(this);
	    	groupName = wSpace.attr('name');
	    $('.b-radio-unit input').attr('name',groupName).prev().removeClass('checked');
	    $(this).prev().addClass('checked');
	});

	$('.b-checkbox-unit, .b-radio-unit').find('input').each(function() {
		i = $(this);

		if (i.prop('checked')) {
			i.prev().addClass('checked');
		}
	});

	// Custom file input
	(function(){
		var fileInpWrap = $('.b-file-inp');

		fileInpWrap.on('click', '.file-info i', function() {
			$(this).parents('.b-file-inp').removeClass('has-file').find('input').val('');

		});

		fileInpWrap.on('change', 'input', function() {
			var thisEl = $(this),
				thisWrap = thisEl.parent(),
				nameView = thisWrap.find('.file-info span'),
				clearField = thisWrap.find('.file-info i'),
				fileName = thisEl.val().substr(12);

			nameView.text(fileName);

			if(fileName.length > 0) {
				thisWrap.addClass('has-file');
			} else {
				thisWrap.removeClass('has-file');
			}
		});
	})();

	// Main page header scroll actions
	var headerScrollActions = function() {
		if(pageScrTop > 75) {
			if (!pageMainHdr.hasClass('no-top-of-page')) pageMainHdr.addClass('no-top-of-page');
		} else {
			if(pageMainHdr.hasClass('no-top-of-page')) pageMainHdr.removeClass('no-top-of-page');
		}
	}

	headerScrollActions();

	// Anchor scroll
	$('.scroll-to-anch').on('click',function(e){
		e.preventDefault();
		var thisEl = $(this),
			headerHieght = $('.page-mainheader').height(),
			scrollTop = $(thisEl.attr('href')).offset().top - headerHieght;

		hidePopup();
		$('html,body').animate({scrollTop: scrollTop}, 600);
	});

	// Slide this
	(function(){
		$('.m-big-info-slide .slide-header').on('click', function(e) {
			e.preventDefault();
			$(this).parent().toggleClass('hide-contens');
		});
	})();

	// form count
	$('.m-counth-blk .change-count').on('click', function(){
		var thisEl = $(this),
			input = thisEl.parent().find('input'),
			curVar = parseInt(input.val()),
			curAction = thisEl.text(),
			outputCurentPrice = function(){
				var priceBlk = thisEl.parent().next().find('.price-number'),
					numbers = parseInt(priceBlk.attr('data-price'), 10);

				priceBlk.text(numbers * curVar);

				console.log(numbers);
			};


		if (curAction == '-' && curVar > 1) {
			curVar--;
			input.val(curVar);
			outputCurentPrice();
		} 

		if (curAction == '+') {
			curVar++;
			input.val(curVar);
			outputCurentPrice();
		}
	});

	// Tabs
	(function(){
		var tabsWrap = $('.m-tabs-selection'),
			selectors = tabsWrap.find('> .selectors-list'),
			thisEl,
			showActiveTab = function () {
				if(selectors.hasClass('delivery-type')) {
					var numberOfActive = selectors.find('.active').index(),
						contensEl = thisEl.find('> .tabs-contens-wrap');
					
					contensEl.find(' > .tab-contens').hide();
					contensEl.find(' > .tab-contens:eq(' + numberOfActive + ')').show();
					
					return false;
				}

				var numberOfActive = selectors.find('> li.active').index(),
					contensEl = thisEl.find('> .tabs-contens-wrap');
				
				contensEl.find(' > .tab-contens').hide();
				contensEl.find(' > .tab-contens:eq(' + numberOfActive + ')').show();
			};

		tabsWrap.each(function(){
			thisEl = $(this);
			showActiveTab();
		});

		selectors.find('> .radio-unit').on('click', function(e) {
			var clickedObj = $(this);
			thisEl = clickedObj.closest('.m-tabs-selection');

			selectors.find('.active').removeClass('active');
			clickedObj.addClass('active');

			showActiveTab();
		});

		selectors.find('> li').on('click', 'a', function(e) {
			e.preventDefault();

			var clickedObj = $(this);
			thisEl = clickedObj.closest('.m-tabs-selection');

			selectors.find('> li.active').removeClass('active');
			clickedObj.parent().addClass('active');

			showActiveTab();
		});
	})();

	// To up scroll
	(function(){
		var mainBody = $('body'),
			documentWindow = $(window);

		// mainBody.append('<span class="m-scrollup-arrow"><i class="icon-up-arrow"></i></span>');

		var	arrState,
			arrow = $('.m-scrollup-arrow'),
			arrowSatate = function () {
				var scrTop = documentWindow.scrollTop();

				if (scrTop > 400) {
					if (arrState != 'arrow-shows') {
						arrow.show();
						arrState = 'arrow-shows';
					}
				} else {
					if (arrState != 'arrow-hidden') {
						arrow.hide();
					