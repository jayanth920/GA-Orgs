// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// pull in Mongoose model for movies
const Movie = require('../models/movie')

// we'll use this to intercept any errors that get thrown and send them
// back to the client with the appropriate status code
const handle = require('../../lib/error_handler')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// SHOW
// GET /movies/5a7db6c74d55bc51bdf39793
router.get('/movies/:id', (req, res) => {
  // req.params.id will be set based on the `:id` in the route
  Movie.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "movie" JSON
    .then(movie => res.status(200).json({ movie: movie.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// INDEX
// GET /movies
router.get('/movies', (req, res) => {
  Movie.find()
    .then(movies => {
      // `movies` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return movies.map(movie => movie.toObject())
    })
    // respond with status 200 and JSON of the movies
    .then(movies => res.status(200).json({ movies: movies }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// UPDATE
// PATCH /movies/5a7db6c74d55bc51bdf39793
router.patch('/movies/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(handle404)
    .then(movie => {
      movie.reviews.push(req.body.movie.reviews)
      return movie.save()
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

module.exports = router
