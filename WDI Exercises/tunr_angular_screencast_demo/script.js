angular
  .module("tunr", [
    "ui.router",
    "artists"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
    .state('artistIndex', {
      url: '/artists',
      templateUrl: 'js/artists/index.html',
      controller: 'ArtistsIndexController',
      controllerAs: 'vm'
    })
    .state('artistShow', {
      url: '/aritsts/:id',
      templateUrl: 'js/artists/show.html',
      controller: 'ArtistShowController',
      controllerAs: 'vm'
    })
}
