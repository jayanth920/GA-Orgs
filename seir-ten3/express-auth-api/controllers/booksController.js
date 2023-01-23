const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

// GET (index) /api/books/
router.get('/', (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch(console.error);
});

// GET (show) /api/books/5eb579b99b05e67b897e860b
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch(console.error);
});

// POST (create) /api/books/
router.post('/', (req, res) => {
  Book.create(req.body)
    .then((book) => res.status(201).json(book))
    .catch(console.error);
});

// PUT (update) /api/books/5eb579b99b05e67b897e860b
router.put('/:id', (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((book) => res.json(book))
    .catch(console.error);
});

// DELETE (delete) /api/books/5eb579b99b05e67b897e860b
router.delete('/:id', (req, res) => {
  Book.findOneAndDelete({
    _id: req.params.id,
  })
    .then(() => res.sendStatus(204))
    .catch(console.error);
});

module.exports = router;
