$(function () {
  /*
        Stop carousel
    */
  //   $(".carousel").carousel("pause");

  var hgwin = $(window).height(),
    hgSetionT = $(".section-top").innerHeight(),
    hgBar = $(".section-bar").innerHeight();
  $(".section-craousel, .carousel-item").height(hgwin - hgBar);

  $(document).ready(function () {
    $(".carousel").carousel({
      interval: 2000,
    });
  });

  $(".num").counterUp({
    delay: 10,
    time: 5000,
  });

  $(".rowCar").owlCarousel({
    rtl: true,
    center: true,
    items: 3,
    loop: true,
    margin: 30,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".footer .links ul li a span").prepend('<i class="fas fa-arrow-left"></i>');

  // scroll to Sections

  $(".navbar-nav .nav-item a:not(:contains('Home'))").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("." + $(this).data("scroll")).offset().top,
      },
      900
    );
  });

  // wow.js
  new WOW().init();

  // Loading Overlay

  $(".loading-over").fadeOut(1000);

  // $(".project").hover(function () {
  //     $(".project .overlay, .inner-project, projects a").css("opacity", 1)
  // })
});
