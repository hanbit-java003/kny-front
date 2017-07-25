require('bootstrap');
require('../less/product-list.less');

var common = require('./common');

var productPrice = require('./product/product-price');
var productList = require('./product/product-list');

function initProductList(productList) {
    $('.main-items-img').empty();

    var template = require('../template/main-products.hbs');

    for (var i=0; i<productList.length; i++) {
        var html = template(productList[i]);

        $('.main-items-img').append(html);
    }
}

initProductList(productList);
