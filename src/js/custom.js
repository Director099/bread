'use strict';

// $(function () {
//     $.scrollUp({
//         scrollText: '',
//     });
// });

if ($('input[type="tel"]')) {
  $('input[type="tel"]').mask('0 (000) 000 - 00 - 00');
}

$('.fullpage__slider').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    animateOut: 'fadeOut',
    autoplay: true,
    items: 1
})

$('.communion__slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    // stagePadding: 50,
    animateOut: 'fadeOut',
    items: 2
})

$('input[type="range"]').rangeslider({
    polyfill : false,
    onInit : function() {
      // console.log($('this.output'))
      var rangeLimit = $('.range__limit');
      this.output = $( '<strong class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
      // rangeLimit.append(this.output[0])
    },
    onSlide : function( position, value ) {
        this.output.html( value );
    }
});
// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

// Плавный скол с навигации
