require ('../less/gallery.less');

require ('./common');

var mainDiary = require('./main-diary');

function initGallery(mainDiary) {
    $('.gallery-list-ul').empty();

    var template = require('../template/main/main-diary.hbs');

    for (var i = 0; i<mainDiary.length; i++) {
        var html = template(mainDiary[i]);

        $('.gallery-list-ul').append(html);
    }
}

initGallery(mainDiary);