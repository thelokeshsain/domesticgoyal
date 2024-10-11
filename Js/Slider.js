$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        arrows: true,
        dots: false,
    });
});



$(document).ready(function(){
  $('.testimonial-slider').slick({
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false 
  });
});

