/*!
 * Service-Business Landing Site Template
 * Copyright 2015 Vladimir Stračkovski
 * See https://github.com/strackovski/service-biz-www
 */
$(document).ready(function () {
    var mainMenu = $('.main-menu');
    var mobileNav = $('.mobile-nav');

    $('.nav-btn').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('expanded');
    });

    $(window).on('scroll', function() {
        var win = $(window);
        var scrollTop =  win.scrollTop();
        if (scrollTop > 120) {
            if (mainMenu.hasClass('fixed')) {
            } else {
                mainMenu.addClass('fixed');
                mobileNav.addClass('fixed');
            }
        } else {
            if (mainMenu.hasClass('fixed')) {
                mainMenu.removeClass('fixed');
                mobileNav.removeClass('fixed');
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