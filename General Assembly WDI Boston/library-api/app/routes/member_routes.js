// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// pull in Mongoose model for members
const Member = require('../models/member')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404

// this is middleware that will remove blank fields from `req.body`, e.g.
// { member: { title: '', text: 'foo' } } -> { member: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /members
router.get('/members', (req, res, next) => {
  Member.find()
    .then(members => {
      // `members` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return members.map(member => member.toObject())
    })
    // respond with status 200 and JSON of the members
    .then(members => res.status(200).json({ members: members }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /members/5a7db6c74d55bc51bdf39793
router.get('/members/:id', (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Member.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "member" JSON
    .then(member => res.status(200).json({ member: member.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /members
router.post('/members', (req, res, next) => {
  Member.create(req.body.member)
    // respond to succesful `create` with status 201 and JSON of new "member"
    .then(member => {
      console.log(member)
      res.status(201).json({ member: member.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /members/5a7db6c74d55bc51bdf39793
router.patch('/members/:id', removeBlanks, (req, res, next) => {
  Member.findById(req.params.id)
    .then(handle404)
    .then(member => {
      // pass the result of Mongoose's `.update` to the next `.then`
      return member.updateOne(req.body.member)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /members/5a7db6c74d55bc51bdf39793
router.delete('/members/:id', (req, res, next) => {
  Member.findById(req.params.id)
    .then(handle404)
    .then(member => {
      // delete the member ONLY IF the above didn't throw
      member.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
