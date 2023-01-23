'use strict'

const controller = require('lib/wiring/controller')

const create = (req, res, next) => {
  const sessionId = Math.random().toString(16).substring(2)
  const fortune = 'You make great friends.'
  const lotto = 42

  res.json({ sessionId, fortune, lotto })
}

module.exports = controller({
  create,
})
