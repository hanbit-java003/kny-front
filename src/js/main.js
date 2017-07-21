require('bootstrap');
require('../less/main.less');

var common = require('./common');

$('.main-event-page').on('click', function () {

    location.href = './event.html'
});

$('.main-second-text-box-button').on('click', function () {

    location.href = './about.html'
});

var mainProductsList = require('./main-products-list');
var mainProducts = require('./main-products');

function initMainProductsList(mainProductsList) {
    $('.main-items-list').empty();

    var template = require('../template/main-products-list.hbs');

    for (var i=0; i<mainProductsList.length; i++) {
        var html = template(mainProductsList[i]);

        $('.main-items-list').append(html);
    }
}

function initMainProducts(mainProducts) {
    $('.main-items-img').empty();

    var template = require('../template/main-products.hbs');

    for (var i=0; i<mainProducts.length; i++) {
        var html = template(mainProducts[i]);

        $('.main-items-img').append(html);
    }
}

initMainProductsList(mainProductsList);
initMainProducts(mainProducts);

var mainDiary = require('./main-diary');

function initMainDiary(mainDiary) {
    $('.main-diary-contents').empty();

    var template = require('../template/main-diary.hbs');

    for (var i =0; i<mainDiary.length; i++) {
        var html = template(mainDiary[i]);

        $('.main-diary-contents').append(html);
    }
}

initMainDiary(mainDiary);























