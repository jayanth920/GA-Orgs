// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// pull in Mongoose model for librarians
const Librarian = require('../models/librarian')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404

// this is middleware that will remove blank fields from `req.body`, e.g.
// { librarian: { title: '', text: 'foo' } } -> { librarian: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /librarians
router.get('/librarians', (req, res, next) => {
  Librarian.find()
    .then(librarians => {
      // `librarians` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return librarians.map(librarian => librarian.toObject())
    })
    // respond with status 200 and JSON of the librarians
    .then(librarians => res.status(200).json({ librarians: librarians }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /librarians/5a7db6c74d55bc51bdf39793
router.get('/librarians/:id', (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Librarian.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "librarian" JSON
    .then(librarian => res.status(200).json({ librarian: librarian.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /librarians
router.post('/librarians', (req, res, next) => {
  Librarian.create(req.body.librarian)
    // respond to succesful `create` with status 201 and JSON of new "librarian"
    .then(librarian => {
      res.status(201).json({ librarian: librarian.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /librarians/5a7db6c74d55bc51bdf39793
router.patch('/librarians/:id', removeBlanks, (req, res, next) => {
  Librarian.findById(req.params.id)
    .then(handle404)
    .then(librarian => {
      // pass the result of Mongoose's `.update` to the next `.then`
      return librarian.updateOne(req.body.librarian)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /librarians/5a7db6c74d55bc51bdf39793
router.delete('/librarians/:id', (req, res, next) => {
  Librarian.findById(req.params.id)
    .then(handle404)
    .then(librarian => {
      // delete the librarian ONLY IF the above didn't throw
      librarian.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
