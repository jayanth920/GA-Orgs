'use strict'

const cookies  = require('cookie_js').cookie
const api      = require('./api')
const ui       = require('./ui')

const onMakeCookie = function (event) {
  event.preventDefault()

  api.create()
    .then((response) => {
      cookies.set(response)

      return response
    })
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const initialize = function () {
  $('#cookie-form').on('submit', onMakeCookie)
}

module.exports = { initialize }
