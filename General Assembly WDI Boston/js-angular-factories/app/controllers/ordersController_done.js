(function ordersControllerIIFE(){

  var OrdersController = function($routeParams, customersFactory){
    var customerId = $routeParams.customerId;
    this.customer = customersFactory.customer;

    // private function, not available outside of IIFE

    function init(){
      // Search for the customer by id
      // $scope.customer = customersFactory.getCustomer(customerId);
      customersFactory.getCustomer(customerId)
        .success(function(customer){
          this.customer = customer;
        })
        .error(function(data, status, headers, config){
          console.log("Error getting a customer from the remote api");
        alert();ert("Error getting a customer from the remote api");

        });

    }

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  OrdersController.$inject = ['$routeParams', 'customersFactory'];

  // The Controller is part of the module.
  angular.module('customersApp').controller('ordersController', OrdersController);

})();
