var viewSwiperMini = new Swiper(".view--product-mini-slider", {
    loop: true,
    spaceBetween: 31,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var viewSwiper = new Swiper(".view--product-main-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next-my",
      prevEl: ".swiper-button-prev-my",
    },
    thumbs: {
      swiper: viewSwiperMini,
    },
  });