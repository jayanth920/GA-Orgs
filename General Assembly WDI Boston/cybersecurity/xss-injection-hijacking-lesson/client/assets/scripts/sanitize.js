'use strict'

const sanitizer = require('sanitizer')

const sanitize = function(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = sanitizer.sanitize(obj[prop])
      // OR
      // obj[prop] = sanitizer.escape(obj[prop])
    }
  }
}

module.exports = sanitize
