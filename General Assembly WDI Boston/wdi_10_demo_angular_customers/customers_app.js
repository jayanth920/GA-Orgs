// Providing a container, or namespace, for our application.
// container name is 'customerApp', its the first arg of the module function.
// empty array is an array of dependencies of the app.
var customersApp = angular.module('customersApp', ['ngRoute']);

customersApp.config(function($routeProvider){
    $routeProvider
    .when('/',
          {
              controller: 'CustomersController',
              templateUrl: 'app/views/customers.html'
          });
});


customersApp.factory('customersFactory', function($http){
    var factory = {};
    // customersFactory.getCustomers(); // make  the Ajax get request
    factory.getCustomers = function(){
        // $http.get(...) is
        // like a $.get(..) or $.ajax(..) in jQuery
        return $http.get('/customers.json');
    };

    // customersFactory.getOrder; // make  the Ajax get request
    factory.getOrders = function(){
        return $http.get('/orders.json');
    };
    return factory;
});
