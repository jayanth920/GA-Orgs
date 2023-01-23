'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../store')

const onSettingsSave = function (event) {
  event.preventDefault()

  store.secure = getFormFields(event.target).secure

  ui.onSuccess(store.secure);
}

const initialize = function () {
  $('#security-form').on('submit', onSettingsSave)
}

module.exports = { initialize }
