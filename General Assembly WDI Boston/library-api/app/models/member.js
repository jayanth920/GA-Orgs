const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  books_read: {
    type: Number,
    required: true
  },
  member_since: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Member', memberSchema)
