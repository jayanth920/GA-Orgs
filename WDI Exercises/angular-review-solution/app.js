let dogsYouWantToBe = [
  {
    person: "Savraj",
    breed: "Husky"
  },
  {
    person: "Sam",
    breed: "Corgi"
  },
  {
    person: "James",
    breed: "Cat"
  },
  {
    person: "Wes",
    breed: "Immortal Satellite AI"
  }
]

console.log("hello morld");

angular
  .module("dogsYouWant",[
    "ui.router"
  ])
  .config(["$stateProvider", "$locationProvider", RoutingFunction])
  .controller("DogsController", [DogsControllerFunction])

function DogsControllerFunction(){
  this.dogs = dogsYouWantToBe
}

function RoutingFunction($stateProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
    .state("dogsIndex",{
      url: "/",
      templateUrl: "dogs-index.html",
      controller: "DogsController",
      controllerAs: "vm"
    })
}
