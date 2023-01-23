angular.module('artists')
  .factory('ArtistFactory', ["$resource", FactoryCallback])

  function FactoryCallback($resource){
    return $resource("http://localhost:3000/artists/:id", {}, {
      update: {method:"PUT"}
    })
  }
