$(document).ready(function() {
  transformHeader();
});

function transformHeader() {
  $(window).scroll(function() {
    var distanceTop = $(window).scrollTop();

    if(distanceTop > 358) {
      $('.hero').removeClass('hero').addClass('hero-fixed');
      $('.hero-fixed h1:nth-child(2)').fadeIn();
    } else if(distanceTop === 0) {
      $('.hero-fixed h1:nth-child(2)').hide();
      $('.hero-fixed').removeClass('hero-fixed').addClass('hero');
    }
  });
}
