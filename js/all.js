$(document).ready(function () {
    $('.mobile-menu-btn').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('active');
    });
});