(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

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
////////////////////////////////////
//AppJs
////////////////////////////////////
/* for game-participants Section */
$(".appStart-btn").click(function() {
  $("#game-intro").css("display","block");
/*   var audio = $("#appTruck")[0];
  audio.play(); */
  $('html, body').animate({
      scrollTop: $("#game-intro").offset().top - 54
  }, 1000,"easeInOutExpo"); 
});

/* for game-participants Section */
$(".allTyps").click(function() {
  $("#game-participants").css("display","block");
  $('html, body').animate({
      scrollTop: $("#game-participants").offset().top - 54
  }, 1000,"easeInOutExpo");
});

/* for suggestion section */
$(".participantsNumber").click(function() {
  $("#suggestion-section").css("display","block");
  $('html, body').animate({
      scrollTop: $("#suggestion-section").offset().top - 54
  }, 1000,"easeInOutExpo");
});

const participantsNumber=(nr)=>{
  console.log(nr);
  return nr 
  }
  
const appStart=(type)=>{
  let test=participantsNumber();
  console.log(test);
  const chiosedType=type;
  console.log(chiosedType);
  /* const chiosedNumber=number; */
/*   let url=`http://www.boredapi.com/api/activity?participants=${chiosedNumber}&type=${chiosedType}`
  console.log(url);
  fetch(url)
  .then(response => response.json())
    .then(data=>{
    })   */
}






