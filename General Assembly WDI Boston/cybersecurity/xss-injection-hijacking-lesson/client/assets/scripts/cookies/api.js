'use strict'

const config = require('../config')

const create = function () {
  return $.ajax({
    url: config.apiOrigin + '/cookies',
    method: 'POST'
  })
}

module.exports = { create }
