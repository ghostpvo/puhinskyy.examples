function howManyPeople() {
    var active = $('.how-many-people__range-option--active'),
        curent = active.attr('data-selectable'),
        selectedBy = active.attr('data-selected-by'),
        resultItem = '.how-many-people__type';

    $(resultItem).hide();
    $(resultItem + '--' + curent).show().find('.how-many-people__counter-data').text(selectedBy);
}

function selectFoundationTabs() {
    var parent = '.select-foundation__',
        element = parent + 'selector',
        activeSelector = $(element + '--active'),
        picSrc = 'img/' + activeSelector.attr('data-picture');

    $(element + 'details-wrap').removeClass('active');

    $(parent + 'picture').attr('src',picSrc);
    $(parent + 'dscr').text(activeSelector.attr('data-text'));
    $(parent + 'price-amount span').text(activeSelector.attr('data-price'));
    $(parent + 'details-wrap .house-types-additional__data-wrap').text('').append(activeSelector.attr('data-readmore'));
}

function buildingStagesTabs() {
    var element = '.building-stages__selector',
        activeSelector = $(element + '--selected'),
        picSrc = 'img/' + activeSelector.attr('data-picture');

    $('.building-stages__picture').attr('src',picSrc);
    $('.building-stages__stage-number span').text(activeSelector.text());
    $('.building-stages__stage-title').text(activeSelector.attr('data-title'));
    $('.building-stages__stage-dscr').text(activeSelector.attr('data-description'));
    $('.building-stages__du-text--price span').text(activeSelector.attr('data-price'));
    $('.building-stages__du-text--terms').text(activeSelector.attr('data-terms'));
}

$(document).ready(function () {
    howManyPeople();
    selectFoundationTabs();
    buildingStagesTabs();

    new WOW().init();
});

var howManyRangeOption = $('.how-many-people__range-option');

howManyRangeOption.on('click',function () {
    var activeClass = 'how-many-people__range-option--active';
    howManyRangeOption.removeClass(activeClass);
    $(this).addClass(activeClass);
    howManyPeople();
});

var selectFoundationSelector = 'select-foundation__selector';

$('.' + selectFoundationSelector).on('click',function () {
    $('.' + selectFoundationSelector).removeClass(selectFoundationSelector + '--active');
    $(this).addClass(selectFoundationSelector + '--active');
    selectFoundationTabs();
});

var buildingStagesSelector = 'building-stages__selector';

$('.' + buildingStagesSelector).on('click',function () {
    $('.' + buildingStagesSelector).removeClass(buildingStagesSelector + '--selected');
    $(this).addClass(buildingStagesSelector + '--selected');
    buildingStagesTabs();
});

$('.show-popup').on('click', function(e) {
    e.preventDefault();
    element = $(this).attr('data-modal');
    elementId = '#'+element;
    $(''+elementId+'').fadeIn(500);
    $('.overlay').fadeIn(1000);
    $('body').css('overflow', 'hidden');
});

$('.overlay, .modal-close').on('click', function(e){
    e.preventDefault();
    $('.overlay').fadeOut(500);
    $('.modal-window').fadeOut(200);
    $('body').css('overflow', 'auto');
    var src = $(this).parent().find('iframe').attr('src');
    $(this).parent().find('iframe').attr('src', src);
});

$('.house-types-additional__toggler').click(function () {
    var parent = $(this).parent();
    if(parent.hasClass('active')){
        parent.removeClass('active');
    } else {
        $('.house-types-additional').removeClass('active');
        parent.addClass('active');
    }
});

$('.firest-screen__info-item-dot').click(function () {
    $(this).next().toggleClass('active');
});

$('.select-foundation__details').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});