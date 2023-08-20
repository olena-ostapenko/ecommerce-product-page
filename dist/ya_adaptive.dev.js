"use strict";

var burgerMenu = document.querySelector(".header-navigation"); // burgerMenu.classList.add("hidden")

var btnOpenBurger = document.querySelector(".burger-menu");
btnOpenBurger.addEventListener("click", function (event) {
  event.preventDefault();
  burgerMenu.classList.add("visible-flex");
  document.querySelector(".header-navigation-adaptive-bg").classList.remove("hidden");
});
var btnClouseBurger = document.querySelector(".burger__btn-close");
btnClouseBurger.addEventListener("click", function (event) {
  event.preventDefault();
  burgerMenu.classList.remove("visible-flex");
  document.querySelector(".header-navigation-adaptive-bg").classList.add("hidden");
});