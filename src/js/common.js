var menus = require('./menu');
require('./login');

function initMenu() {
    var template = require('../template/header-menu.hbs');

    for(var i=0; i<menus.length; i++) {
        var menuHtml = template(menus[i]);

        $('.header-menu').append(menuHtml);
    }

    attachEvents();
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

function attachEvents() {
    $('.header-menu-right > li').on('click', function() {
        var rightCategoryId = $(this).attr('rightCategory-id');
        var rightCateTitle = $(this).attr('rightCategory-title');
        var subId = $(this).attr('rightCategory-subId');

        if (rightCateTitle === 'SERVICE') {
            location.href = './board.html?id=' + subId;
        }
        else {
            location.href = './' + rightCategoryId + '.html';
        }
    });


    $('.service-sub-menu > li').on('click',function (event) {
        event.stopPropagation();
        var subId = $(this).attr('rightCategory-subId');
        location.href = './board.html?id=' + subId;
    });

}


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

$('#my-page').on('click', function () {

    location.href = './login.html#member';
    $('.guest-section').show();
});

















