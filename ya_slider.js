let openModal = document.querySelector(".modal-main_photo");

var swiperMiniSlider = new Swiper(".product-mini-slider", {
  loop: true,
  spaceBetween: 31,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var productMainSlider = new Swiper(".product-main-slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next-my",
    prevEl: ".swiper-button-prev-my",
  },
  thumbs: {
    swiper: swiperMiniSlider,
  },

  on: {
    click: function() {
      if(window.screen.width >= 768)
        openModal.classList.remove("hidden");
    }
  }
});

adaptMainSectionLeft();
function adaptMainSectionLeft() {
  let mainSectionLeft = document.querySelector(".main-section_left");
  if(mainSectionLeft.offsetWidth > window.screen.width
    || window.screen.width <= 375) {
    mainSectionLeft.style.maxWidth = window.screen.width + "px";
    if(productMainSlider != null)
      productMainSlider.updateSize()
  }
}
window.addEventListener("resize", function(){
  adaptMainSectionLeft();
})
// This is on!
// productMainSlider.on('click', function(){
//   openModal.classList.remove("hidden")
// });

let clouseModal = document.querySelector(".modal-clouse")

clouseModal.addEventListener("click", function(event){
  event.preventDefault()
  openModal.classList.add("hidden")
})