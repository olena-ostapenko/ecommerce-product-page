"use strict";

var openModal = document.querySelector(".modal-main_photo");
var swiperMiniSlider = new Swiper(".product-mini-slider", {
  loop: true,
  spaceBetween: 31,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
var productMainSlider = new Swiper(".product-main-slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next-my",
    prevEl: ".swiper-button-prev-my"
  },
  thumbs: {
    swiper: swiperMiniSlider
  },
  on: {
    click: function click() {
      if (window.screen.width >= 768) openModal.classList.remove("hidden");
    }
  }
});
adaptMainSectionLeft();

function adaptMainSectionLeft() {
  var mainSectionLeft = document.querySelector(".main-section_left");

  if (mainSectionLeft.offsetWidth > window.screen.width || window.screen.width <= 375) {
    mainSectionLeft.style.maxWidth = window.screen.width + "px";
    if (productMainSlider != null) productMainSlider.updateSize();
  }
}

window.addEventListener("resize", function () {
  adaptMainSectionLeft();
}); // This is on!
// productMainSlider.on('click', function(){
//   openModal.classList.remove("hidden")
// });

var clouseModal = document.querySelector(".modal-clouse");
clouseModal.addEventListener("click", function (event) {
  event.preventDefault();
  openModal.classList.add("hidden");
});