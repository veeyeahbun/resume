
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(150); // set duration in brackets    
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");  
        $("#btnAngebot").addClass("btn btn-primary");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("#btnAngebot").removeClass("btn btn-primary");
    }


    if ($(".navbar").offset().top > 750) {
      $(".navbar-header").addClass("navbar-header-collapse");
  } else {
      $(".navbar-header").removeClass("navbar-header-collapse");
  }

});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#detail').parallax("100%", 0.2);
    $('#video').parallax("100%", 0.3);
    $('#reference').parallax("100%", 0.1);
    $('#service').parallax("100%", 0.2);
    $('#register').parallax("100%", 0.1);
    $('#faq').parallax("100%", 0.3);
    $('#venue').parallax("100%", 0.1);
    $('#sponsors').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);

  }
 // initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-reference").owlCarousel({
      autoPlay: 6000,
      items : 3,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,1],
    });
  });


  /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }

        if($(this).scrollTop()>175){
          $('.arrows').fadeOut(500);
        }else{
          $('.arrows').fadeIn(500);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });




//   var dropdown = document.getElementById('dropdown');
//   dropdown.addEventListener('mouseenter', function () {
    
//     document.getElementById('dropdown-menu').style.opacity = 1;
// });
// dropdown.addEventListener('mouseleave', function () {
  
//   document.getElementById('dropdown-menu').style.opacity = 0;
//   document.getElementById('dropdown-menu').style.visibility = "visible";
//   document.getElementById('dropdown-menu').style.display = "inline-block";

// });

