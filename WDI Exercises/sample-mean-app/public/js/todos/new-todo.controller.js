/* global angular */

angular.module('todoApp')
.controller('NewTodoController', NewTodoCtrl)

NewTodoCtrl.$inject = ['Todo']

function NewTodoCtrl (Todo) {
  this.createTodo = createTodo
  
  function createTodo () {
    console.log('gonna make a todo')
  }
}
