require ('../less/about.less');

require('./common');
require('mouse-wheel');

$('body').on('mouse-wheel',function (event) {
    console.log(event.originalEvent.wheelDelta);
});

















