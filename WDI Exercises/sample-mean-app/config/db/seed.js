const mongoose = require('mongoose')
const connect = require('./connect')
const todoSeeds = require('./seedTodos')

const Todo = mongoose.model('Todo')

connect()
.then(_ => Todo.remove({}))
.then(_ => Todo.collection.insert(todoSeeds))
.then(todos => {
  console.log(todos)
  process.exit()
})
.catch((err) => {
  console.log(err)
  process.exit()
})
