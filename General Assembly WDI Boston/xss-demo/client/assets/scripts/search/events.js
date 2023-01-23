'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api      = require('./api')
const sanitize = require('../sanitize')
const store    = require('../store')
const ui       = require('./ui')

const onGetSearch = function (event) {
  event.preventDefault()

  let params = getFormFields(event.target)
  params.secure = store.secure // save sanitization settings to send to server

  // sanitize only if asked, in order to demonstrate vulnerability
  if (store.secure.client === 'true') { sanitize(params) }

  api.index(params)
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const initialize = function () {
  $('#search-form').on('submit', onGetSearch);
}

module.exports = { initialize }
