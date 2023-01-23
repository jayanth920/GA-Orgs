/**
* Base on https://github.com/madhums/node-express-mongoose-demo
*/

const express = require('express')
const connect = require('./config/db/connect')

const port = process.env.PORT || 3000
const app = express()

/**
* Expose app for testing
*/

module.exports = app

// Config app and routes
require('./config/express')(app)
require('./config/routes')(app)

connect()
  .then(db => {
    db.on('error', console.log)
    listen()
  })
  .catch(err => {
    console.log(`Error connecting to mongo`)
    console.log(err)
  })

function listen () {
  if (app.get('env') === 'test') return
  app.listen(port)
  console.log(`Listening on port ${port}`)
}
