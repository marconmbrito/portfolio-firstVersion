// TOGGLE MENU
function openNav() { //Open Nav
  $("#sideNav").css({
    'height': '100%',
    'width' : '100%'
  });
}

function closeNav() { //Close nav
  $("#sideNav").css({
    'height' : '0',
    'width' : '0'
  });
}

$(".menu-icon").click(function(){
  $(this).toggleClass("rotate"); //add rotate on click
  if ( $(".menu-icon").hasClass("rotate")) {
    openNav();
  } else {
    closeNav();
  }
});
//END OF TOGGLE MENU

//PAGES
$("h3, h2").hover(function(){
  $(this).addClass('animated rubberBand');
});

$(".social-media a, .sideNav a").hover(function(){
  $(this).addClass('animated pulse');
});

//SCROLL ANIMATIONS
AOS.init({
  duration: 1100, //speed element enters the page
})

var $window = $(window),
    $header = $('.header')
    $h1 = $('.h1-pages');

$window.scroll(function() {
  if ($window.scrollTop() >= 152) {
    $header.addClass('smaller-header');
    $h1.addClass('h1-smaller');
  } else {
    $header.removeClass('smaller-header');
    $h1.removeClass('h1-smaller');
  }
});
