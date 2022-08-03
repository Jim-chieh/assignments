const input = document.querySelector("input");
const submitButton = document.querySelector(".submit");
const content = document.querySelector("p");
submitButton.addEventListener("click", fetchData);
function fetchData() {
  let value = input.value;
  fetch("http://localhost:3000/getData/?number=" + value)
    .then((response) => response.text())
    .then((data) => (content.textContent = `Total number is :${data}`));
  input.value = "";
}
