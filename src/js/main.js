require('bootstrap');
require('../less/main.less');

var common = require('./common');

$('.main-event-page').on('click', function () {

    location.href = './event.html'
});