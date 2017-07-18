require('bootstrap');
require('../less/main.less');

var common = require('./common');

$('.main-event-page').on('click', function () {

    location.href = './event.html'
});

$('.main-second-text-box-button').on('click', function () {

    location.href = './about.html'
});

var mainProducts = require('./main-products');
var mainProductsList = require('./main-products-list');

function initMainProducts(mainProducts) {
    $('.main-items-img').empty();

    var template = require('../template/main-products.hbs');

    for (var i=0; i<mainProducts.length; i++) {
        var html = template(mainProducts[i]);

        $('.main-items-img').append(html);
    }
}

initMainProducts(mainProducts);

