const fs = require('fs')
const movieModel = require('../../app/models/movie.js')
const mongoose = require('mongoose')

// require database configuration logic
// `db` will be the actual Mongo URI as a string
const dbUrl = require('../../config/db')
const db = mongoose.connection

// establish database connection
mongoose.Promise = global.Promise
mongoose.connect(dbUrl, {
  useMongoClient: true
})

fs.readFile('./data/movies', 'utf8', (err, data) => {
  if (err) throw err
  const parsedData = JSON.parse(data)
  // console.log(parsedData.length)
  // let movieArr = []
  const fixCast = parsedData.map(function (movie) {
    if (movie.cast !== null) {
      let castArr = movie.cast.split(', ')
      movie.cast = castArr
    } else {
      movie.cast = []
    }
    return movie
  })

  let filteredData = fixCast.filter(function (movie) {
    if (movie.cast.length < 2) {
      return false
    } else if (movie.director === null) {
      return false
    } else if (movie.year < 1967) {
      return false
    } else {
      return true
    }
  })

  const done = function () { // eslint-disable-line no-unused-vars
    db.close()
  }

  filteredData.forEach((movie) => {
    delete movie.genre
    delete movie.notes
    movie.cover = null
    movie.reviews = null
    movieModel.create(movie)
      .then(console.log)
      .catch(console.error)
      .then(done)
  })
})
