"use strict";

var houses = (function(){

  var getHouses = function(){
    $.getJSON( "lib/houses.json").success(function(response){
      _renderHouses(response.houses);
    });
  };

  var _renderHouses = function(houses){
    // your code starts here


    // your code ends here
  };

  return {
    indexHouses: getHouses
  };

})();


$(document).ready(function(){
  houses.indexHouses();
});




