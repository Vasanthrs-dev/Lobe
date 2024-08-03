const image = document.querySelector(".content-img");
const popUp = document.querySelector(".pop-up");
const overLay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const iframe = document.querySelector(".youtube-iframe");
const popUpWrap = document.querySelector(".pop-up-wrap");

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
