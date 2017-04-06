'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { cyan, red } = require('chalk')

const routes = require('./routes/')

// pug configuration
app.set('view engine', 'pug')

app.locals.company = "🍕 Pizza Shack"
app.locals.body = {}
app.locals.body.magic = "Foooooo!"

// Middlewares
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(routes)

// app.get('/contact', (req, res, next) => {
//   res.render('contact', {page: 'Contact'})
// })

app.get('/login', (req, res, next) => {
  res.render('login', {page: 'Login'})
})

app.get('/register', (req, res, next) => {
  res.render('register', {page: 'Register'})
})

app.use((req, res) => {
  res.render('404')
})

app.use((err, { method, url, headers: { 'user-agent': agent } }, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendStatus(err.status || 500)
  } else {
    // Send the stack trace as a response, for debugging purposes
    res.set('Content-Type', 'text/plain').send(err.stack)
  }

  const timeStamp = new Date()
  const statusCode = res.statusCode
  const statusMessage = res.statusMessage

  console.error(
    `[${timeStamp}] "${red(`${method} ${url}`)}" Error (${statusCode}): "${statusMessage}"`
  )
  console.error("Oh, crud!!!!!", err.stack)
});

// app.get('/', (req, res, next) => {
//   res.render('index')
// })

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
