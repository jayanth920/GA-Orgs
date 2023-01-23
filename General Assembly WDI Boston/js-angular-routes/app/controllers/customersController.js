(function customersControllerIIFE(customers, ang){

  // Constructor function for the Customer's Controller
  // Using 'Controller as' so an instance of the CustomerController
  // will be used as the ViewModel
  var CustomersController = function(){
    // default property to sort customers by
    this.sortBy = "name";
    // default is NOT to reverse the customer's sort order
    this.reverse = false;
    // add a property to the View Model to reference the global array of customers
    this.customers = customers;
  };

  CustomersController.prototype.doSort = function(propName){
    // change the property to sort by
    this.sortBy = propName;
    // toggle the sort order ascending <-> descending
    this.reverse = !this.reverse;
  };

  ang.module('customersApp').controller('customersController', CustomersController);

  // kind of gross to inject the global customerData here, we'll be getting
  // from a the backend, via a factory, in a moment
})(customerData, angular);
