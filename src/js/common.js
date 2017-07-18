var menus = require('./menu');

function initMenu() {
    var template = require('../template/header-menu.hbs');

    for(var i=0; i<menus.length; i++) {
        var menuHtml = template(menus[i]);

        $('.header-menu').append(menuHtml);
    }
}

initMenu(); // 불러옴.

$('.header-logo').on('click', function() {
    location.href = './';
});

$('.header-menu-left > li').on('click', function() {
    var leftCategoryId = $(this).attr('leftCategory-id');

    location.href = './' + leftCategoryId +'.html';
});

$('.header-menu-right > li').on('click', function() {
    var rightCategoryId = $(this).attr('rightCategory-id');

    location.href = './' + rightCategoryId +'.html';
});



















