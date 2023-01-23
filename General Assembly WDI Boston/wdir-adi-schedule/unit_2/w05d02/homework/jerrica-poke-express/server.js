// ======================================================
//                   DEPENDENCIES
// ======================================================
const express = require('express')
const app = express()
const port = 3000

//models
const pokemon = require('./models/pokemon.js')

// ======================================================
//                   MIDDLEWARE
// ======================================================
app.use(express.static('public'))

// ======================================================
//                   ROUTES
// ======================================================
// get welcome index
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

// get pokemon index
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: pokemon
  })
})

// show specific pokemon
app.get('/pokemon/:indexOfPokemon', (req, res) => {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.indexOfPokemon]
  })
})

// ======================================================
//                   LISTENERS
// ======================================================
app.listen(port, () => {
  console.log(`connected to poke express! on port: ${port}`)
})
