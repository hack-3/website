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

// Incrementing Statistics Script
var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this), countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        this.countNum = this.countNum + "+"
                        $this.text(this.countNum);
                        // alert('finished');
                    }
                });
        });
        a = 1;
    }

});

// Changes NavBar Background based on how far user scrolls
$(function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var div_top = $(document.getElementById("about")).offset().top;
        if (scroll >= div_top) {
            header.addClass("bg-light");
        } else {
            header.removeClass("bg-light");
        }
    });

});