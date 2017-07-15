$(document).ready(function() {
  navHover();
  transformHeader();
});

function transformHeader() {
  $(window).scroll(function() {
    var distanceTop = $(window).scrollTop();

    switch (true) {
      case distanceTop > 358:
        $('.hero-fixed').css({'display':'flex'});
        $('.hero-fixed h1').fadeIn('fast');
        break;
      default:
        $('.hero-fixed').css({'display':'none'});
        $('.hero-fixed h1').hide('');
    }
  });
}

function navHover() {
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    var distanceTop = $(window).scrollTop();
    console.log(distanceTop);

    switch(true) {
      case distanceTop > 358 && distanceTop < 685:
        $('nav ul li a').removeClass('navIndicator');
        $('nav ul li:nth-child(1) a').addClass('navIndicator');
        break;
      case distanceTop > 684 && distanceTop < 1369:
        $('nav ul li a').removeClass('navIndicator');
        $('nav ul li:nth-child(2) a').addClass('navIndicator');
        break;
      case distanceTop > 1368 && distanceTop < 1654:
        $('nav ul li a').removeClass('navIndicator');
        $('nav ul li:nth-child(3) a').addClass('navIndicator');
        break;
      case distanceTop > 1653:
        $('nav ul li a').removeClass('navIndicator');
        $('nav ul li:nth-child(4) a').addClass('navIndicator');
        break;
      default:
        $('nav ul li a').removeClass('navIndicator');
    }
  });
}
