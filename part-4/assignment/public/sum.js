const input = document.querySelector("input");
const submitButton = document.querySelector(".submit");
const content = document.querySelector("p");
submitButton.addEventListener("click", fetchData);
function fetchData() {
  let value = input.value;
  const url = "http://localhost:3000/getData/?number=";
  fetch(url + value)
    .then((response) => response.json())
    .then((data) => (content.textContent = `Total number is :${data}`));
  input.value = "";
}
