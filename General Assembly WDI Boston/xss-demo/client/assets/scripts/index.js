'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const security = require('./security/events')
const search   = require('./search/events')
const comments = require('./comments/events')

$(() => {
  security.initialize()
  search.initialize()
  comments.initialize()
})
