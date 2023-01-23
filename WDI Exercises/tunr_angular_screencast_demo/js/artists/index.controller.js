angular.module("artists")
  .controller("ArtistsIndexController", ["ArtistFactory", ArtistsIndexControllerCallback])

function ArtistsIndexControllerCallback(ArtistFactory){
  var vm = this
  this.artists = ArtistFactory.query()
  this.newArtist = new ArtistFactory()
  this.create = function(){
    vm.newArtist.$save().then(function(res){
      vm.artists.push(res)
    })
  }
}
