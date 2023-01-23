const mongoose = require('./connection')
const seeds    = require('./seedData')

const Bookmark = mongoose.model('Bookmark')

mongoose.Promise = Promise

Bookmark.remove({}).then(_ => {
  console.log('Dropped the DB')
  Bookmark.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
