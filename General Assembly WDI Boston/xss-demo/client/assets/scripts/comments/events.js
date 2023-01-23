'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api      = require('./api')
const sanitize = require('../sanitize')
const store    = require('../store')
const ui       = require('./ui')

const onShowComments = function (event) {
  if (event) { event.preventDefault() }

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onCreateComment = function (event) {
  event.preventDefault()

  const secure = store.secure.client === 'true'
  const data = getFormFields(event.target)
  // sanitize only if asked, to demonstrate vulnerability
  if (secure) { sanitize(data) }

  // send server sanitization settings
  data.secure = store.secure.server

  api.create(data)
    .then(ui.onCreateSuccess)
    .then(() => onShowComments(null))
    .catch(ui.onCreateError)
}

const initialize = function () {
  onShowComments()
  $('#show-comments').on('submit', onShowComments)
  $('#comment-form').on('submit', onCreateComment)
}

module.exports = { initialize }
