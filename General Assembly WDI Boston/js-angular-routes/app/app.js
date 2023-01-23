(function customersAppIIFE(ang){
  // Add a depenency for the routing module,
  // don't forget to add angular-route module
  var app = ang.module('customersApp', ['ngRoute']);

  // invoke the config on startup and inject the route provider
  app.config(function($routeProvider){
    // set up routes
    $routeProvider
    // GET '/'
      .when('/',
            {
              controller: 'customersController',
              controllerAs: 'custCtrl',
              templateUrl: 'app/views/customers.html'
            }
           )
    // GET '/orders/:id'
      .when('/orders/:customerId',
            {
              controller: 'ordersController',
              controllerAs: 'ordersCtrl',
              templateUrl: 'app/views/orders_done.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });

})(angular);
