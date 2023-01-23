angular.module("test", ["ui.router"])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller('HomeController', ["NameService", HomeControllerCallback])
  .controller('OtherController', ["NameService", OtherControllerCallback])
  .service('NameService', NameServiceCallback)


function RouterFunction($stateProvider){
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
}

function HomeControllerCallback(NameService){
  var vm = this
  this.addName = function(){
    NameService.addName(vm.name)
  }
}

function OtherControllerCallback(NameService){
  var vm = this
  this.names =  NameService.getNames()
}

function NameServiceCallback(){
  var names = [];
  var addName = function(name){
    names.push(name)
  }
  var getNames = function(){
    return names
  }
  return {
    addName: addName,
    getNames: getNames
  }
}
