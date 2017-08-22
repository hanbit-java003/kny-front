require('bootstrap');
require('../less/main.less');

var common = require('./common');

$('.main-img').on('click', function () {
    location.href = './gallery-read.html?no=5'
});

$('.main-event-page').on('click', function () {
    location.href = './event-read.html?no=10'
});

$('.main-second-text-box-button').on('click', function () {
    location.href = './about.html'
});

$('.main-review-page').on('click', function () {
    location.href = './board.html?id=review'
});

$('.move').on('click', function () {
    location.href = './gallery.html'
});

var mainProducts = require('./main-products');

function initMainProducts(mainProducts) {
    $('.main-items-img').empty();

    var template = require('../template/main/main-products.hbs');

    for (var i=0; i<mainProducts.length; i++) {
        var html = template(mainProducts[i]);

        $('.main-items-img').append(html);
    }
}

initMainProducts(mainProducts);

var mainDiary = require('./main-diary');

function initMainDiary(mainDiary) {
    $('.main-diary-contents').empty();

    var template = require('../template/main/main-diary.hbs');

    for (var i =0; i<mainDiary.length; i++) {
        var html = template(mainDiary[i]);

        $('.main-diary-contents').append(html);
    }
}

initMainDiary(mainDiary);























