const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use('/myName', express.static('public'))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})

app.post('/myName', express.json(), (req, res) => {
  if (req.body.name === 'delete') {
    res.clearCookie('username')
    res.send('')
  } else {
    const cookieName = req.body.name
    res.cookie('username', cookieName)
    res.send(`${cookieName}`)
  }
})

app.listen(3000, () => {
  console.log('This app is running')
})
