'use strict'

const config = require('../config')

const index = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/search',
    method: 'GET',
    data
  })
}

module.exports = { index }
