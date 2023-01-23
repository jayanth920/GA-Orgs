//include $routeProvider and $locationProvider
const app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  // Enables Push State
  $locationProvider.html5Mode({ enabled: true });
}]);
