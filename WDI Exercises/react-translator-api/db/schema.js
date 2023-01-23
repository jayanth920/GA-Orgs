const mongoose = require('./connection.js')

const TranslationSchema = new mongoose.Schema({
  text: String,
  audioSource: String
})

mongoose.model("Translation", TranslationSchema)

module.exports = mongoose
