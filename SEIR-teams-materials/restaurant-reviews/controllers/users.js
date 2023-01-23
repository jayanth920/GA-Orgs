const express = require('express');

const router = express.Router();

const User = require('../models/user');

// INDEX
// GET /users
router.get('/', (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
});

// SHOW
// GET /users/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => res.json(user))
    .catch(next);
});

// CREATE
// POST /users/
router.post('/', (req, res, next) => {
  const userData = req.body;
  User.create(userData)
    .then((user) => res.status(201).json(user))
    .catch(next);
});

// UPDATE
// PATCH /users/:id
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const userData = req.body;
  User.findOneAndUpdate({ _id: id }, userData, { new: true })
    .then((user) => res.json(user))
    .catch(next);
});

// DESTROY
// DELETE /users/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  User.findOneAndDelete({ _id: id })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
