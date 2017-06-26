$(document).ready(function() {
  transformHeader();
});

function transformHeader() {
  $(window).scroll(function() {
    var distanceTop = $(window).scrollTop();

    if(distanceTop > 358) {
      $('.hero-fixed').css({'display':'flex'});
      $('.hero-fixed h1').fadeIn('fast');
    } else if(distanceTop < 358) {
      $('.hero-fixed').css({'display':'none'});
      $('.hero-fixed h1').hide('');
    }
  });
}
