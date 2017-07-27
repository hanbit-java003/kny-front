require('bootstrap');
require('../less/product-list.less');

var common = require('./common');
var productList = require('./product/products');
var cleanseProducts = require('./product/cleanseProducts');

function initProductList(productList) {
    $('.main-items-img').empty();

    var template = require('../template/main-products.hbs');

    for (var i=0; i<productList.length; i++) {
        var html = template(productList[i]);

        $('.main-items-img').append(html);
    }
}

function initCleanseProducts(cleanseProducts) {
    $('.cleanse-img').empty();

    var template = require('../template/cleanse-items.hbs');

    for (var i=0; i<cleanseProducts.length; i++) {
        var html = template(cleanseProducts[i]);

        $('.cleanse-img').append(html);
    }
}

initProductList(productList);
initCleanseProducts(cleanseProducts);

function scrollCleanse() {
    $(document).ready(function () {
        $('html, body').animate({
            scrollTop: $('#cleanse-page').offset().top
        }, 'slow');
    });
}

function scrollProgram() {
    $(document).ready(function () {
        $('html, body').animate({
            scrollTop: $('#program-page').offset().top-140
        }, 'slow');
    });
}


$('.btn-cleanse').on('click', function () {

    scrollCleanse();
});


$('.btn-program').on('click', function () {

    scrollProgram();
});













