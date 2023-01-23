/* global angular */

angular.module('todoApp')
.controller('TodosController', TodosCtrl)

TodosCtrl.$inject = ['Todo']

function TodosCtrl (Todo) {
  this.todos = Todo.query()
  this.toggleStatus = toggleStatus

  function toggleStatus (id) {
    const todo = this.todos.find(todo => todo._id === id)
    todo.$update({id: todo._id})
  }
}
