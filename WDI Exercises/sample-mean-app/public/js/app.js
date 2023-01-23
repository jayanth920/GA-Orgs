/* global angular */

angular.module('todoApp', [
  'ngResource',
  'ui.router'
]).config(['$stateProvider', function ($stateProvider) {
  console.log($stateProvider)
}])
