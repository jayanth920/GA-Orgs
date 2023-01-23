"use strict";

(function(){


angular.module("bleets")
.controller("bleetsIndex",["$state","Bleet",bleetsIndex])

function bleetsIndex($state, Bleet){
  this.bleets = Bleet.query()
  this.bleet = new Bleet()
  var self = this
  this.create = function(){
    this.bleet.$save()
    .then(function(){
      self.bleets.push(self.bleet)
    })
  }
}
})()
