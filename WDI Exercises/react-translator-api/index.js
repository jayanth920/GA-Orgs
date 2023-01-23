const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/schema.js')
const Translation = mongoose.model('Translation')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())

app.get('/api/translations', (req, res) => {
  Translation.find()
    .then((translations) => {
      res.json(translations)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/api/translations', (req, res) => {
  Translation.create(req.body)
    .then((translation) => {
      res.json(translation)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/api/translations/:id', (req, res) => {
  Translation.findById(req.params.id)
    .then((translation) => {
      res.json(translation)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
