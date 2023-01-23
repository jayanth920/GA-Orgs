const mongoose = require('./connection.js')

const TranslationSchema = new mongoose.Schema({
  sourceLang: String,
  targetLang: String,
  searchPhrase: String,
  translation: String,
  textPronunciation: String,
  audioPronunciationSource: String
}, {
  timestamps: true
})

const Translation = mongoose.model('Translation', TranslationSchema)

module.exports = {
  Translation
}
