require ('../less/login.less');
require ('./common');

$('.guest-section').hide();

function guestPage() {
    $('.guest-section').show();
}

$('#my-page').on('click', function () {
    guestPage();
});

if (location.hash === '#member') {
    $('.guest-section').show();
}