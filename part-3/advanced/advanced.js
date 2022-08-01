const displayList = document.querySelector(".outer-ul");
const moreBtn = document.querySelector("button");
let num = 5;

function getFetch(url) {
  return fetch(url).then((response) => response.json());
}

function render(data) {
  let li = "";
  let innerLi = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].topics.length !== 0) {
      for (let j = 0; j < data[i].topics.length; j++) {
        innerLi += `<li>${data[i].topics[j]}</li>`;
      }
    } else {
      innerLi = "";
    }
    li += `
    <li>
      <header>
        <h2>${data[i].name}</h2>
        <div class="visibility">${data[i].visibility}</div>
      </header>
      <article>
        <p>
          ${data[i].description}
        </p>
      </article>
      <footer>
        <ul class="inner-ul">
        ${innerLi}
        </ul>
      </footer>
    </li>`;
  }
  displayList.innerHTML = li;
}

moreBtn.addEventListener("click", () => {
  num += 5;
  getFetch(
    `https://api.github.com/orgs/facebook/repos?per_page=${num}&page=1`
  ).then((data) => render(data));
});

getFetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=1`).then(
  (data) => render(data)
);
