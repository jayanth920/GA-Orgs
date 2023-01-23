// ==================================
//          DEPENDENCIES
// ==================================
const express = require('express')
const router = express.Router()
const Bookmark = require('../models/bookmark.js')

// ==================================
//          ROUTES
// ==================================
// get all bookmarks
router.get('/', (req, res) => {
  Bookmark.find({}, (err, foundBookmarks) => {
    res.json(foundBookmarks)
  })
})

// create a bookmark
router.post('/', (req, res) => {
  Bookmark.create(req.body, (err, createdBookmark) => {
    res.json(createdBookmark)
  })
})

// delete a bookmark
router.delete('/:id', (req, res) => {
  Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    res.json(deletedBookmark);
  })
})

// update a bookmark
router.put('/:id', (req, res) => {
  Bookmark.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedBookmark) => {
    res.json(updatedBookmark)
  })
})

// ==================================
//          EXPORT
// ==================================
module.exports = router
