'use strict';

// $(function () {
//     $.scrollUp({
//         scrollText: '',
//     });
// });

if ($('input[type="tel"]')) {
  $('input[type="tel"]').mask('0 (000) 000 - 00 - 00');
}

// Главный слайдер в хедере

$('.fullpage__slider').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    animateOut: 'fadeOut',
    items: 1,
    onInitialized: function() {
      var dot = document.querySelectorAll('.fullpage__slider .owl-dot');
      var sliderNumber = document.querySelector('.slider-number');

      for (var i = 0; i < dot.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = "0" + (i + 1);
        sliderNumber.appendChild(newLi)
      }

      $('.slider-number li').on("click", function(evt) {
        $('.slider-number li').removeClass('active');
        $(evt.target).addClass('active');
      })
    }
})

$('.slider-number li').first('li').addClass('active');

function nextSlide() {
  var currentElem = $(".fullpage__slider .owl-item.active");
  var nextElem = currentElem[0].nextElementSibling.firstElementChild;
  var nextText = nextElem.getAttribute('data-text');
  var nextImg = nextElem.getAttribute('style');
  $(".next-slider__btn").text(nextText);
  $(".next-slider__bg").attr("style", nextImg);
}

nextSlide()

$(".next-slider__btn").on("click", function() {
  $(".fullpage__slider .owl-next").click();
  nextSlide()
})

$('.communion__slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoHeight: true,
    items: 1,
    responsive: {
      1170: {
        animateOut: 'fadeOut'
      }
    }
})

$('.gallery').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    margin: 20,
    animateOut: 'fadeOut',
    responsive:{
      0:{
          items:1
      },
      767:{
          items:2,
          margin: 25
      },
      1170:{
          items:3,
          margin: 20
      }
    }
})

$('.catalog__slider').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    // autoWidth: true,
    center: true,
    items: 1
})

$('input[type="range"]').rangeslider({
    polyfill : false,
    onInit : function() {
      // console.log($('this.output'))
      var rangeLimit = $('.range__limit');
      // this.output = $( '<strong class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
      // rangeLimit.append(this.output[0])
    },
    // onSlide : function( position, value ) {
    //     this.output.html( value );
    // }
});
// Плавный скол с навигации

 $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
});

// Плавный скол с навигации

$(".navigation__btn").on("click", function() {
  $(".navigation__btn").toggleClass("navigation__btn--active");
  $(".navigation").toggleClass("navigation--active");
  $(".navigation__list").toggleClass("navigation__list--active");
})


$(function() {
  $('.tynder-content__dot').hover(function() {
    $('.tynder-content__dot').removeClass('tynder-content__dot--active');
    $(this).addClass('tynder-content__dot--active');
    $('.number-entre__text').text($(this).attr('data-text'));
    $('.number-entre__number').text($(this).attr('data-number'));
    $('.number-entre__number').removeClass('number-entre__number--mont')
    $('.number-entre__number').removeClass('number-entre__number--monts')
  })

  $('.tynder-content__dot-2').hover(function() {
    $('.tynder-content__dot').removeClass('tynder-content__dot--active');
    $(this).addClass('tynder-content__dot--active');
    $('.number-entre__text').text($(this).attr('data-text'));
    $('.number-entre__number').text($(this).attr('data-number'));
    $('.number-entre__number').removeClass('number-entre__number--mont')
    $('.number-entre__number').removeClass('number-entre__number--monts')

    $('.number-entre__number').addClass('number-entre__number--mont')

  })

  $('.tynder-content__dot-4').hover(function() {
    $('.tynder-content__dot').removeClass('tynder-content__dot--active');
    $(this).addClass('tynder-content__dot--active');
    $('.number-entre__text').text($(this).attr('data-text'));
    $('.number-entre__number').text($(this).attr('data-number'));
    $('.number-entre__number').removeClass('number-entre__number--mont')
    $('.number-entre__number').removeClass('number-entre__number--monts')

    $('.number-entre__number').addClass('number-entre__number--monts')
  })
});

$(function() {
  $('.catalog__arrow--prev').on('click', function() {
    $('.catalog__slider  .owl-prev').click();
  });
  $('.catalog__arrow--next').on('click', function() {
    $('.catalog__slider  .owl-next').click();
  });
});

$(function() {
  $('.document__text a').on('click', function(evt) {
    evt.preventDefault();
    if ($('.document__text a').text() === 'Лайт-формат') {
      $('.document__text a').text("полноценный формат");
      $('.pack-franchise:first-child').removeClass('pack-franchise--active')
      $('.pack-franchise:last-child').addClass('pack-franchise--active')
    } else {
      $('.document__text a').text("Лайт-формат");
      $('.pack-franchise:last-child').removeClass('pack-franchise--active')
      $('.pack-franchise:first-child').addClass('pack-franchise--active')
    }

  });
});
