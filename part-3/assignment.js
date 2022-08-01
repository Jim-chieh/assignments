const header = document.querySelector("header");
const h1 = document.querySelectorAll("h1");
const p = document.querySelector(".nav-p");
const div = document.querySelector("body div");
const exit = document.querySelector(".menu-exit");
const showMore = document.querySelector(".section-content button");
const content = document.querySelector("#content-ul");

function toggleControler() {
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.toggle("header-toggle");
  }
}

header.addEventListener("click", toggleControler);

p.addEventListener("click", () => {
  div.className = "menu";
});

exit.addEventListener("click", () => {
  div.removeAttribute("class");
});

showMore.addEventListener("click", () => {
  content.classList.toggle("content-ul");
});
