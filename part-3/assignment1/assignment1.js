//修改message
const header = document.querySelector("header");
const h1 = document.querySelectorAll("h1");
//操控menu
const menuBtn = document.querySelector(".nav-p");
const menu = document.querySelector("body div");
const exitBtn = document.querySelector(".menu-exit");
//增加/隱藏contentBox
const showMore = document.querySelector(".section-content button");
const content = document.querySelector("#content-ul");

function toggleControler() {
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.toggle("header-toggle");
  }
}

header.addEventListener("click", toggleControler);

menuBtn.addEventListener("click", () => {
  menu.className = "menu";
});

exitBtn.addEventListener("click", () => {
  menu.removeAttribute("class");
});

showMore.addEventListener("click", () => {
  content.classList.toggle("content-ul");
});
