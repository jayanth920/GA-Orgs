const mongoose = require('mongoose')
const Todo = mongoose.model('Todo')

module.exports = {
  load: (req, res, next, id) => {
    Todo.findOne({_id: id})
    .then(todo => {
      req.todo = todo
      if (!req.todo) return next(new Error('Todo not found'))
      next()
    })
    .catch(err => next(err))
  },
  index: (req, res, next) => {
    console.log('todos index action')
    Todo.find({})
    .then(todos => res.json(todos))
    .catch(err => next(err))
  },

  show: (req, res) => {
    console.log('todos show action')
    res.json(req.todo)
  },

  create: (req, res) => {
    console.log('todos create action')
    const todo = new Todo(req.body)
    todo.save()
    .then(todo => res.json(todo))
    .catch((err) => {
      res.json({
        message: `Error creating todo`,
        errors: [err.toString()]
      })
    })
  },

  update: (req, res) => {
    console.log('todos update action')
    const todo = req.todo
    Object.assign(todo, req.body)
    todo.save()
    .then(todo => res.json(todo))
    .catch((err) => {
      res.json({
        message: `Error updating Todo id: ${todo._id}`,
        errors: [err.toString()]
      })
    })
  },

  destroy: (req, res) => {
    console.log('todos destroy action')
    req.todo.remove()
    .then(_ => res.json({
      message: 'Todo deleted'
    }))
  }
}
