var menus = require('./menu');

function initMenu() {
    var template = require('../template/header-menu.hbs');

    for(var i=0; i<menus.length; i++) {
        var menuHtml = template(menus[i]);

        $('.header-menu').append(menuHtml);
    }
}

initMenu();

function scrollCleanse() {
    $(document).ready(function () {
            $('html, body').animate({
                scrollTop: $('#cleanse-page').offset().top
            }, 'slow');
        })
}

$('.header-logo').on('click', function() {
    location.href = './';
});

$('.header-menu-left > li').on('click', function() {
    var leftCategoryId = $(this).attr('leftCategory-id');
    var leftCateTitle = $(this).attr('leftCate-title');

    if (leftCateTitle === 'CLEANSE') {
        location.href = './product-list.html#scrollcleanse'
        scrollCleanse();
    }
    else {
        location.href = './' + leftCategoryId +'.html';
    }
});

$('.header-menu-right > li').on('click', function() {
    var rightCategoryId = $(this).attr('rightCategory-id');

    location.href = './' + rightCategoryId +'.html';
});

$('#diary').on('click', function () {
    location.href = './gallery.html';
});

$('#search-icon').on('click', function () {
    $('.header-top-left-text').toggle();
    $('#search, #search-input-box').toggle();
});

$('#basket').on('click', function () {
    location.href = './basket.html';
});

$('#login').on('click', function () {
    location.href = './login.html';
});

function guestPage() {
    $('.guest-section').show();
}

$('#my-page').on('click', function () {
    location.href = './login.html#member';
    guestPage();
});

















