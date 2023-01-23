var todos = [
  {body: "todo1"},
  {body: "todo2"},
  {body: "learn angulllarrr"}
]

angular.module('reminderly', ['ui.router'])
  .config(["$stateProvider", RouterCallback])
  .controller('TodosIndex', [TodosIndexControllerCallback])
  .controller('TodosShow', [
    "$stateParams",
    TodosShowControllerCallback
  ])

function RouterCallback($stateProvider){
  console.log("router is working");
  $stateProvider
    .state('todosIndex', {
      url: '/todos',
      controller: 'TodosIndex',
      controllerAs: 'vm',
      templateUrl: 'js/todos/index.html'
    })
    .state('todosShow', {
      url: '/todos/:id',
      controller: 'TodosShow',
      controllerAs: 'vm',
      templateUrl: 'js/todos/show.html'
    })
}

function TodosIndexControllerCallback(){
  this.todos = todos
  console.log("controller invoked")
}

function TodosShowControllerCallback($stateParams){
  console.log("show controller working");
  this.todo = todos[$stateParams.id]
}
