/*!
 * Start Bootstrap - Modern Business v5.0.2 (https://startbootstrap.com/template-overviews/modern-business)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

// Changes NavBar Background based on how far user scrolls
$(function() {
    var header = $(".navbar");
    var text = $(".nav-link");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var div_top = $(document.getElementById("about")).offset().top;
        var div_top_2 = $(document.getElementById("about")).offset().top;
        if (scroll >= div_top) {
            header.addClass("bg-light");
        } else {
            header.removeClass("bg-light");
        }
        if (scroll >= div_top_2) {
            text.removeClass("text-white");
        } else {
            text.addClass("text-white");
        }
    });

});
