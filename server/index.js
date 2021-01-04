// ESS 5 REQUIRE EXPRESSJS === ESS 6 IMPORT
const express = require('express')

const usersRoute = require('./route/users.route')
const loginRoute = require("./route/login.route")
const postsRoute = require('./route/posts.route')
// ASSIGN APP VARIABLE AND CREATE SERVER
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
// MiddleWare
app.use('/', (req, res, next) =>{
  console.log("The request received at: ", new Date());
  next()
})

app.get('/', (req, res) => {
  res.send(`<h3 style="color: red;">Home</h3>`)
})


app.use(express.urlencoded({
  extended: true
}))
app.use('/users', usersRoute)
app.use('/login', loginRoute)
app.use('/posts', postsRoute)



app.get('*', (req, res) => {
  res.send(`<h3 style="color: red;">404 Not found</h3>`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})