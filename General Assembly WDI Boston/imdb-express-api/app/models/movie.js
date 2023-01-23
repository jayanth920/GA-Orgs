const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: false
  },
  year: {
    type: Date,
    required: true
  },
  cast: [{
    type: String,
    required: false
  }],
  reviews: [{
    type: String,
    required: false
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema)
