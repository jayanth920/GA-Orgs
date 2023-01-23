angular.module('artists')
  .controller('ArtistShowController', [
    "ArtistFactory",
    "$stateParams",
    "$state",
    ArtistShowControllerCallback
  ])

function ArtistShowControllerCallback(ArtistFactory, $stateParams, $state){
  this.artist = ArtistFactory.get({id: $stateParams.id})
  this.useState = function(){
    $state.go("artistIndex")
  }
}
