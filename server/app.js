const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

const app = express()

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const PORT = process.env.PORT

// mongoose.promise = Promise
// mongoose.connect(dbUrl)

app.use(express.static('client/public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

const routerHome = require('./routes/home')
const routerRecipes = require('./routes/recipes')
const routerShoppingList = require('./routes/shopping_list')
const routerMyStuff = require('./routes/my_stuff')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (eq, res) => {
  res.redirect('/home')
})

app.use('/home', routerHome)
app.use('/recipes', routerRecipes)
app.use('/shopping_list', routerShoppingList)
app.use('/my_stuff', routerMyStuff)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))