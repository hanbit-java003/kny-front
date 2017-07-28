var menus = require('./menu');

function initMenu() {
    var template = require('../template/header-menu.hbs');

    for(var i=0; i<menus.length; i++) {
        var menuHtml = template(menus[i]);

        $('.header-menu').append(menuHtml);
    }
}

initMenu();

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

$('#search-icon').on('click', function () {
    $('.header-top-left-text').toggle('500');
    $('#search, #search-input-box').toggle('500');
});



















