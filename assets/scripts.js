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


window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    console.log(
        date.toLocaleString('en-US', {
          timeZone: 'America/New_York',
        }),
      );
});


// $(function() {
//     var date = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"})); // timezone ex: Asia/Jerusalem
//     var y = date.getFullYear();
//     var m = date.getMonth();
//     var d = date.getDate();
//     var h = date.getHours();
    
//     console.log(date);
//     console.log(y);
//     console.log(m);
//     console.log(d);
//     console.log(h);

//     m = m + 1;
//     d = d + 15;
//     h = h - 4;

//     $(".list-timeline").each(function() {
//         var year = $(this).data('year');
//         var month = $(this).data('month');
//         var day = $(this).data('day');
//         var hour = $(this).data('hour');
//         if(y >= year){
//             if(m + 1 >= month){
//                 if(d >= day){
//                     if(h >= hour + 1){
//                         $(this).removeClass('future');
//                         $(this).removeClass('present');
//                         $(this).addClass('past');
//                     } else if(h >= hour){
//                         $(this).removeClass('past');
//                         $(this).removeClass('future');
//                         $(this).addClass('present');
//                     }
//                 } 
//             }
//         }
//       });
//       $(".list-timeline-item").each(function() {
//         var year = $(this).data('year');
//         var month = $(this).data('month');
//         var day = $(this).data('day');
//         var hour = $(this).data('hour');
//         if(y >= year){
//             if(m + 1 >= month){
//                 if(d >= day){
//                     if(h >= hour + 1){
//                         $(this).removeClass('future');
//                         $(this).removeClass('present');
//                         $(this).addClass('past');
//                     } else if(h >= hour){
//                         $(this).removeClass('past');
//                         $(this).removeClass('future');
//                         $(this).addClass('present');
//                     }
//                 } 
//             }
//         }
//       });
//   });