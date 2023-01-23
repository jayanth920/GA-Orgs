const express = require('express')

const router = express.Router()
const todos = require('../../app/controllers/todos')

module.exports = router

router.param('todoId', todos.load)

router.get('/todos', todos.index)
router.post('/todos', todos.create)
router.get('/todos/:todoId', todos.show)
router.put('/todos/:todoId', todos.update)
router.delete('/todos/:todoId', todos.destroy)

/**
 * Error handling
 */

router.use(function (err, req, res, next) {
// treat as 404 if problem with supplied id otherwise, internal server error
  if (err.message &&
    (~err.message.indexOf('not found') ||
    (~err.message.indexOf('Cast to ObjectId failed')))) {
    return next()
  }

  console.error(err.stack)

// error page
  res.status(500).json({
    message: 'internal server error',
    error: err.stack
  })
})

// assume 404 since no middleware responded
router.use(function (req, res) {
  const payload = {
    url: req.originalUrl,
    error: 'Not found'
  }
  return res.status(404).json(payload)
})
