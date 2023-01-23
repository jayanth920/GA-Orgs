(function customersFactoryIIFE(){

  // Create a customers factory
  var customersFactory = function($http){
    var factory = {};
    factory.customer = {};
    factory.customers = [];

    factory.getCustomers = function(){
      // allow access to the list of customers
      return  $http.get('http://localhost:3000/customers').success(function(response){
        angular.copy(response, factory.customers);
      });
    };

    factory.getCustomer = function(customerId){
      return  $http.get('http://localhost:3000/customers/' + customerId).success(function(response){
        angular.copy(response, factory.customer);
      })
    };
    return factory;
  };

  customersFactory.$inject = ['$http'];

  angular.module('customersApp').factory('customersFactory', customersFactory);
})();
