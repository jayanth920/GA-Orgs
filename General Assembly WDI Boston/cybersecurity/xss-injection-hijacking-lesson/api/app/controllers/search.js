'use strict'

const querystring = require('querystring');

const controller = require('lib/wiring/controller')

const sanitize = require('lib/sanitize');

const index = (req, res, next) => {
  const secure = req.query.secure === 'true'
  let q = req.query.q
  // sanitize only if asked, to demonstrate vulnerability
  if (secure) { sanitize(q) }

  res.send(`
    You searched for "${q}". There were zero results.
  `)
}

module.exports = controller({
  index,
})
