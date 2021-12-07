const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const port = 5000


app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/home', (req, res) => {
  const age = 20

  res.render('home', {
    isMinor: age < 18,
    names: [
      {
        id: 1,
        name: "Kevin"
      },
      {
        id: 2,
        name: "Ahmed"
      },
      {
        id: 3,
        name: "Vincent"
      }
    ]
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/form', (req, res) => {
  res.render('form')
})

app.post('/form/signup', (req, res) => {
  const { username, password } = req.body

  res.render('signup', {
    name: username,
    passwordLength: password.length
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${5000}`)
})
