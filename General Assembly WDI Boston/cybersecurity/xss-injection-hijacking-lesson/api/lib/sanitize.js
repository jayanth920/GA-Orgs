'use strict'

const sanitizer = require('sanitizer')

const sanitize = function(obj, escape) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (escape) {
        obj[prop] = sanitizer.escape(obj[prop])
      } else {
        obj[prop] = sanitizer.sanitize(obj[prop])
      }
    }
  }
}

module.exports = sanitize
