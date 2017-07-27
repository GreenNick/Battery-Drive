$(document).ready(function() {
  navHover();
  transformHeader();
  scrollTo(200);
});

function transformHeader() {
  $(window).scroll(function() {
    var distanceTop = $(window).scrollTop(),
        headerTop = $('header').innerHeight(),
        $fixed = $('.fixed');

    if($(window).width() < 1000) {
      switch (true) {
      case distanceTop >= headerTop:
        $fixed.css({'height':'93px'});
        break;
      default:
        $fixed.css({'height':'0'});
      }
    } else {
      switch (true) {
        case distanceTop >= headerTop - 93:
          $fixed.css({'height':'93px'});
          break;
        default:
          $fixed.css({'height':'0'});
      }
    }
  });
}

function navHover() {
  $(window).scroll(function() {
    var distanceTop = $(window).scrollTop(),
        sectionOneTop = $('#section-1').offset().top - 130,
        sectionTwoTop = $('#section-2').offset().top - 130,
        sectionThreeTop = $('#section-3').offset().top - 130,
        sectionFourTop = $('#section-4').offset().top - 130,
        sectionFiveTop = $('#section-5').offset().top - 130,
        $menuItems = $('nav ul li a'),
        $menuItemOne = $('nav ul li:nth-child(1) a'),
        $menuItemTwo = $('nav ul li:nth-child(2) a'),
        $menuItemThree = $('nav ul li:nth-child(3) a'),
        $menuItemFour = $('nav ul li:nth-child(4) a'),
        $menuItemFive = $('nav ul li:nth-child(5) a');

    switch(true) {
      case distanceTop >= sectionOneTop && distanceTop < sectionTwoTop:
        $menuItems.removeClass('navIndicator');
        $menuItemOne.addClass('navIndicator');
        break;
      case distanceTop >= sectionTwoTop && distanceTop < sectionThreeTop:
        $menuItems.removeClass('navIndicator');
        $menuItemTwo.addClass('navIndicator');
        break;
      case distanceTop >= sectionThreeTop && distanceTop < sectionFourTop:
        $menuItems.removeClass('navIndicator');
        $menuItemThree.addClass('navIndicator');
        break;
      case distanceTop >= sectionFourTop && distanceTop < sectionFiveTop:
        $menuItems.removeClass('navIndicator');
        $menuItemFour.addClass('navIndicator');
        break;
      case distanceTop >= sectionFiveTop:
        $menuItems.removeClass('navIndicator');
        $menuItemFive.addClass('navIndicator');
        break;
      default:
        $menuItems.removeClass('navIndicator');
    }
  });
}

function scrollTo(duration) {
  $('a[href|="#section"').on('click', function(event) {
    var target = $($(this).attr('href'));

    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top - 120
    }), duration;
  });
}