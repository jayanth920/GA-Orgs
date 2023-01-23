"use strict";

(function(){


angular.module("blitter",["ui.router","bleets","ngResource"])
.config(["$stateProvider", Router])

function Router($stateProvider){
  $stateProvider
  .state("index",{
    url: "/bleets",
    controller: "bleetsIndex",
    controllerAs: "vm",
    template:"<form ng-submit='vm.create()'><input ng-model='vm.bleet.content'></form><div ng-repeat='bleet in vm.bleets'>{{bleet}}</div>"
  })
}
})()
