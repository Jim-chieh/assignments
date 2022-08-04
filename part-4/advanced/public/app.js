const submitButton = document.querySelector('.submit')
const deleteButton = document.querySelector('.delete')
const input = document.querySelector('input')
const content = document.querySelector('.content')

submitButton.addEventListener('click', fetchData)
deleteButton.addEventListener('click', deletedData)

function fetchData() {
  const value = input.value
  console.log(value)

  fetch('http://localhost:3000/myName/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ name: value })
  })
    .then((response) => response.text())
    .then((data) => (content.innerHTML = `<h1>Hello! ${data}</h1>`))
  input.value = ''
}

function deletedData() {
  fetch('http://localhost:3000/myName/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
      name: 'delete'
    })
  })
    .then((response) => response.text())
    .then((data) => (content.innerHTML = data))
}
