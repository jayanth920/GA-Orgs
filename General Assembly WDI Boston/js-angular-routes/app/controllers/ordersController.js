(function (globalCustomers, ang){

  // get the first customer by it's id
  var _getCustomerById = function(customers, id){
    return customers.filter(function(customer){
      return customer.id === Number(id);
    })[0]; // only return the first customer found
  };

  // Constructor function for the Order Controller
  // Using 'Controller as' so an instance of the OrderController
  // will be used as the ViewModel
  function OrdersController($routeParams){
    var customerId = $routeParams.customerId;
    // initialize
    this.orders = this.getCustomerOrders(globalCustomers, customerId);
  }

  // Get a customer's orders
  OrdersController.prototype.getCustomerOrders = function(customers, customerId){
    // attach this customer's orders to the view model
    var customer = _getCustomerById(customers, customerId);
    return customer.orders;
  };

  // Register the Order Controller
  ang.module('customersApp').controller('ordersController', OrdersController);

  // kind of gross to inject the global customerData here, we'll be getting
  // from a the backend, via a factory, in a moment
})(customerData, angular);
