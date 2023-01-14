jQuery(document).ready(function () {
  // sticky Menu
  jQuery(window).scroll(function () {
    var sticky = $("header"),
      scroll = $(window).scrollTop();

    if (scroll >= 70) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });
  // toogle menu
  jQuery(".toggle-menu").click(function (e) {
    e.stopPropagation();
    jQuery("body").toggleClass("open-nav");
    jQuery(this).toggleClass("open");
  });

  // search open
  jQuery(".search-icon").click(function (e) {
    e.stopPropagation();
    jQuery(".search-form").addClass("open-search");
    jQuery("body").removeClass("open-nav");
    jQuery(".toggle-menu").removeClass("open");
  });
  jQuery(".close-icon").click(function (e) {
    e.stopPropagation();
    jQuery(".search-form").removeClass("open-search");
  });

  jQuery(".down-arrow").click(function (e) {
    e.stopPropagation();
    jQuery(".sub-menu").toggleClass("open-submenu");
    jQuery(this).toggleClass("open");
  });
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome){
        $('#iframeAudio').remove()
    }
    else {
        $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background
    }
  // var music = document.getElementById("playAudio");
  // function playAudio() {
  //   music.play();
  // }
  // function pauseAudio() {
  //   music.pause();
  // }
  // $(".playButton").click(function () {
  //   $that = $(this);
  //   $that.css("display", "none");
  //   playAudio();
  //   $(".pauseButton").css("display", "block");
  // });
  // $(".pauseButton").click(function () {
  //   $that = $(this);
  //   pauseAudio();
  //   $that.css("display", "none");
  //   $(".playButton").css("display", "block");
  // });
});
