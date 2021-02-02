//varaible
var slider = document.querySelector('.slider');
var active = document.getElementById('active');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');
var line4 = document.getElementById('line4');
var mySong = document.getElementById('mySong');
var icon = document.getElementById('icon');
var icon2 = document.getElementById('icon2');
var play = document.getElementsByClassName('play');
var pause = document.getElementsByClassName('pause');

// slide line 

line1.onclick = function() {
    slider.style.transform = 'translateX(0%)';
    active.style.top = "0px";
}

line2.onclick = function() {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = "80px";
}

line3.onclick = function() {
    slider.style.transform = 'translateX(-50%)';
    active.style.top = "160px";
}

line4.onclick = function() {
        slider.style.transform = 'translateX(-75%)';
        active.style.top = "240px";


    }
    //play stop audio

pause[0].style.display = "none";
icon.onclick = function() {
    if (mySong.paused) {
        mySong.play();
        pause[0].style.display = "block";
        play[0].style.display = "none"
    }
}

icon2.onclick = function() {
    mySong.pause();
    pause[0].style.display = "none";
    play[0].style.display = "block"
}

// video player

var videoPlayer = document.getElementById('videoPlayer');
var myVideo = document.getElementById('myVideo');

function stopVideo() {
    videoPlayer.style.display = "none";
}

function playVideo(file) {
    myVideo.src = file;
    videoPlayer.style.display = "block";
}


//jquery
$('document').ready(function() {
    'use strict';
    $('.gallery-photo div[class*="col"]').hover(function() {
        $(this).addClass('active').siblings().removeClass('active');

    });


    // click link menu add active class
    $('.nav.navbar-nav li a').on('click', function() {
        $(this).parent().addClass('active').siblings().removeClass('active');

    });


    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('.navbar').addClass('navbar-fixed-top');

        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }


        //Button Scroll  FadeIn If Scroll Top Superieur 1000px
        var scrollToTop = $('.scroll-top');
        if ($(window).scrollTop() > 1000) {
            scrollToTop.fadeIn(400);
        } else {
            scrollToTop.fadeOut(400);

        }

    });


    //Scroll To TOP Button Fade
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });


    //Scroll Link to Section
    $('.navbar-nav li a').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
    });

    //scroll bar
    $('html').niceScroll({
        cursorcolor: "#ff77cd",
        cursorwidth: "10px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "20px",
        scrollspeed: "120",
    });

});