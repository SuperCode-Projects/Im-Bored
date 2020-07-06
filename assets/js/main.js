$(document).ready(function() {
var typed = $(".typed");
    $(function() {
      var strings = $('.typed-items').text();
      strings = $('.typed-items').data('typed-person') + ',' + strings;
      strings = strings.split(',');
  
      typed.typed({
        strings: strings,
        typeSpeed: 150,
        loop: true,
      });
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });