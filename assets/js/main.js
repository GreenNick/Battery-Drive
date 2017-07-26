$(document).ready(function() {
  navHover();
  transformHeader();
});

function transformHeader() {
  $(window).scroll(function() {
    var distanceTop = $(window).scrollTop();
    if($(window).width() < 1000) {
      switch (true) {
      case distanceTop > $('header').innerHeight():
        $('.fixed').css({'height':'93px'});
        break;
      default:
        $('.fixed').css({'height':'0'});
      }
    } else {
      switch (true) {
        case distanceTop > $('header').innerHeight() - 93:
          $('.fixed').css({'height':'93px'});
          break;
        default:
          $('.fixed').css({'height':'0'});
      }
    }
  });
}

function navHover() {
  $(window).scroll(function() {
    var distanceTop = $(window).scrollTop();

    switch(true) {
      case distanceTop > $('#section-1').offset().top - 130 && distanceTop < $('#section-2').offset().top - 130:
        $('nav ul li a').removeClass('navIndicator');
        $('nav ul li:nth-child(1) a').addClass('navIndicator');
        break;
      case distanceTop > $('#section-2').offset().top - 130 && distanceTop < $('#section-3').offset().top - 130:
        $('nav ul li a').removeClass('navIndicator');
        $('nav ul li:nth-child(2) a').addClass('navIndicator');
        break;
      case distanceTop > $('#section-3').offset().top - 130 && distanceTop < $('#section-4').offset().top - 130:
        $('nav ul li a').removeClass('navIndicator');
        $('nav ul li:nth-child(3) a').addClass('navIndicator');
        break;
      case distanceTop > $('#section-4').offset().top - 130:
        $('nav ul li a').removeClass('navIndicator');
        $('nav ul li:nth-child(4) a').addClass('navIndicator');
        break;
      default:
        $('nav ul li a').removeClass('navIndicator');
    }
  });
}
