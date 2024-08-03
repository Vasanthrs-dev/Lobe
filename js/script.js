const image = document.querySelector(".content-img");
const popUp = document.querySelector(".pop-up");
const overLay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const iframe = document.querySelector(".youtube-iframe");
const popUpWrap = document.querySelector(".pop-up-wrap");
const headerNav = document.querySelector(".header-nav");
const hamburger = document.querySelector(".hamburger");

image.addEventListener("click", function () {
  popUp.classList.remove("hidden");
  overLay.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  iframe.src = "";
  iframe.src =
    "https://www.youtube-nocookie.com/embed/Mdcw3Sb98DA?autoplay=0&amp;modestbranding=1";
  popUp.classList.add("hidden");
  overLay.classList.add("hidden");
});

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  headerNav.classList.toggle("active");
}

const navLink = document.querySelectorAll(".header-nav--child");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  headerNav.classList.remove("active");
}
