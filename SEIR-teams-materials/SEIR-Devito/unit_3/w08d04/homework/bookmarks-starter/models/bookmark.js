// ==================================
//          DEPENDENCIES
// ==================================
const mongoose = require('mongoose')

// ==================================
//          SCHEMA
// ==================================
const bookmarkSchema = mongoose.Schema({
    title: String,
    url: String
})

// ==================================
//          EXPORT
// ==================================
const Bookmarks = mongoose.model('Bookmark', bookmarkSchema)
module.exports = Bookmarks
