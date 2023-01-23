const express = require('express')
const router = express.Router()

// require user model
const User = require('./../models/user')
const handle404 = require('./../lib/custom_errors')

// INDEX
// GET /users
router.get('/users', (req, res, next) => {
  User.find()
    .then(users => res.json({ users: users }))
    .catch(next)
})

// SHOW
// GET /users/:id
router.get('/users/:id', (req, res, next) => {
  const id = req.params.id
  User.findById(id)
    .then(handle404)
    .then(user => res.json({ user: user}))
    .catch(next)
})

// CREATE
// POST /users/
router.post('/users', (req, res, next) => {
  const userData = req.body.user
  User.create(userData)
    .then(user => res.status(201).json({user: user}))
    .catch(next)
})

// UPDATE
// PATCH /users/:id
router.patch('/users/:id', (req, res, next) => {
  const id = req.params.id
  const userData = req.body.user
  User.findById(id)
    .then(handle404)
    .then(user => user.updateOne(userData))
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /users/:id
router.delete('/users/:id', (req, res, next) => {
  const id = req.params.id
  User.findById(id)
    .then(handle404)
    .then(user => user.deleteOne())
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
