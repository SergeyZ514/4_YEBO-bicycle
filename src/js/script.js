// JS-функция определения поддержки WebP

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

// Скрипт для .ibg

function ibg() {
   let ibg = document.querySelectorAll('.ibg');
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage =
            'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();

// Бургер

let hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu__body');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   menu.classList.toggle('active');
});

@@include('_jquery-3.5.1.min.js');
@@include('_slick.min.js');

$(document).ready(function () {
   $('.slider__body').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      accessibility: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [
         {
            breakpoint: 768,
            settings: {},
         },
      ],
   });
});
