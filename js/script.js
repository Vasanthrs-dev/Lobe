function showSideBar() {
  const sideBar = document.querySelector(".nav");
  const menuClose = document.querySelector(".menu-close");
  sideBar.style.display = "flex";
  menuClose.style.opacity = "1";
  menuClose.style.pointerEvents = "auto";
  menuClose.style.visibility = "visible";
}

function hideSideBar() {
  const hideSideBar = document.querySelector(".nav");
  const menuClose = document.querySelector(".menu-close");
  hideSideBar.style.display = "none";
  menuClose.style.opacity = "0";
  menuClose.style.pointerEvents = "none";
  menuClose.style.visibility = "hidden";
}
