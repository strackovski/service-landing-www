/*!
 * Service-Business Landing Site Template
 * Copyright 2015 Vladimir Stračkovski
 * See https://github.com/strackovski/service-biz-www
 */
$(document).ready(function () {
    $('.nav-btn').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('expanded');
    });

    $(window).on('scroll', function() {
        var win = $(window);
        var scrollTop =  win.scrollTop();
        if (scrollTop > 120) {
            if ($('.main-menu').hasClass('fixed')) {
            } else {
                $('.main-menu').addClass('fixed');
                $('.mobile-nav').addClass('fixed');
            }
        } else {
            if ($('.main-menu').hasClass('fixed')) {
                $('.main-menu').removeClass('fixed');
                $('.mobile-nav').removeClass('fixed');
            }
        }
    });

    $(window).resize(function () {
        if ($('body').hasClass('expanded')) {
            var win_width = $(window).width();
            if (win_width > 740) {
                $('body').toggleClass('expanded');
            }
        }
    });
});