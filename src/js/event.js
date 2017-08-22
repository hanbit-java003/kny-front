require ('../less/event.less');

require ('./common');

var eventPageList = require('./event-page-list');

function initEventPageList(eventPageList) {
    $('.event-contents-box-ul').empty();

    var template = require('../template/event-page-list.hbs');

    for (var i=0; i<eventPageList.length; i++) {
        var html = template(eventPageList[i]);

        $('.event-contents-box-ul').append(html);
    }
}

initEventPageList(eventPageList);

$('.event-list-box-img').on('click', function () {
    var num = $(this).attr('number');

    location.href = './event-read.html?no=' + num;
});