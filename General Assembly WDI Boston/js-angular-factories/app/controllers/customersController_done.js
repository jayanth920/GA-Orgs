(function customersControllerIIFE(){

  var CustomersController = function(customersFactory, appSettings){
    this.sortBy = "name";
    this.reverse = false;
    this.customers =  customersFactory.customers;
    this.customer = customersFactory.customer;
    this.appSettings = appSettings;

    function init(){
      // Init the customers from the factory
      //this.customers = customersFactory.getCustomers();
      customersFactory.getCustomers();
    }

    init();

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

 CustomersController.$inject = ['customersFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('customersApp').controller('customersController', CustomersController);

})();
