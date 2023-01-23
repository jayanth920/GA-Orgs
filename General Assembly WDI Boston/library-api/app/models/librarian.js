const mongoose = require('mongoose')

const librarianSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  favorite_book: {
    type: String,
    required: true
  },
  born_on: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Librarian', librarianSchema)
