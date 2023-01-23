"use strict";

(function(){
  angular.module('bleets')
  .factory("Bleet", ["$resource",Bleet])

  function Bleet($resource){
    return $resource("http://localhost:3000/bleets/:id",{},{
      update: {
        method: 'PUT'
      }
    })
  }
})()
