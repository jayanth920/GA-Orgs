const mongoose = require('./schema.js')
const Translation = mongoose.model('Translation')
const translationData = require('./translation-data.json')


Translation.remove({})
  .then(() => {
    Translation.collection.insert(translationData)
      .then((translations) => {
        console.log(translations)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
