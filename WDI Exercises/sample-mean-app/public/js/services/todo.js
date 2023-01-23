/* global angular */

angular.module('todoApp')
.factory('Todo', todo)

todo.$inject = ['$resource']

function todo ($resource) {
  return $resource('/api/todos/:id', {}, {
    update: {method: 'PUT'}
  })
}
