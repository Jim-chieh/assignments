const ul = document.querySelector("ul");

function ajax(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

function render(data) {
  console.log(data);
  let li = "";
  for (let i = 0; i < data.length; i++) {
    li += `<li>
            <h1>${data[i].name}</h1>
            <h2>$: ${data[i].price}</h2>
            <p>${data[i].description}</p>
            </li>`;
  }
  ul.innerHTML = li;
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  (data) => {
    render(data);
  }
);
// ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products").then(
//   (data) => render(data)
// );
