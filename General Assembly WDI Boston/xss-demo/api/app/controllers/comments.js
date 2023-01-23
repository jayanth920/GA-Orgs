'use strict'

const controller = require('lib/wiring/controller')
const sanitize = require('lib/sanitize')
const models = require('app/models')
const Comment = models.comment

const index = (req, res, next) => {
  Comment.find()
    .then(comments => {
      return comments.map((comment) => {
        return `<li>${comment.body}</li>`
      }).join('')
    })
    .then((comments) => {
      res.send(`<ul>${comments}</ul>`)
    })
    .catch(next)
}

const create = (req, res, next) => {
  const secure = req.body.secure === 'true'
  const comment = req.body.comment

  // sanitize only if asked, to demonstrate vulnerability
  if (secure) { sanitize(comment) }

  Comment.create(comment)
    .then(comment => res.status(201).json({ comment }))
    .catch(next)
}

module.exports = controller({
  index,
  create
})
