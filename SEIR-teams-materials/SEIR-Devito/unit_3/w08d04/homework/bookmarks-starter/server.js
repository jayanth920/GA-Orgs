// ==================================
//          DEPENDENCIES
// ==================================
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

// ==================================
//          MIDDLEWARE
// ==================================
app.use(express.json())
app.use(express.static('public'))

// ==================================
//          CONTROLLERS
// ==================================
const bookmarkController = require('./controllers/bookmarks.js')
app.use('/bookmark', bookmarkController)

// ==================================
//          MONGOOSE CONFIG
// ==================================
mongoose.connect('mongodb://localhost:27017/bookmarks', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose database: bookmarks')
})

// ==================================
//          LISTENER
// ==================================
app.listen(port, () => {
  console.log('listening on port: ', port)
})
