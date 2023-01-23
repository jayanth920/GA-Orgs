## Angular Factories and Services.

We are going to dive into Angular Factories and Services.

## Objectives

* Learn how to implement factories, services and values in our apps
* Learn some of the built-in services angular gives us for free
* Learn how to make API calls from our angular apps
* Learn how to transfer data between our factories and our controllers

## Demo

#### Setup
We have copied all of the code from the last lesson [js-angular-routes](https://github.com/ga-wdi-boston/js-angular-routes) into this repo to start off.

Oh, all but the app/customersData.js. And we'll see why we don't need this later.

#### Built-in Services
These services are provided by Angular.

* [$http](https://docs.angularjs.org/api/ng/service/$http) - Provides Ajax requests. Like the jQuery $.ajax we've used.
* [$location](https://docs.angularjs.org/api/ng/service/$location) - Represent the Browser URL. Can access and change the Browser's URL.
* $timeout
* $window
* $q - Provides a Promise that can be used to handle asynchronous callbacks.

#### Factories

Will return a custom object that can be used by multiple other components, typically controllers.

Factories use the [Revealing Module Javascript Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript) to create the custom object they return.

##### Create a app/factories/customerFactory.js

```javascript
(function customersFactoryIIFE(){

  // Create a customers factory
  var customersFactory = function(){
    // customers is private, only available in this scope

    var factory = {};
    factory.customers = [];
    factory.customer = {};

    var customers = [
      {
        id: 1,
        joined: '2000-12-02',
        name:'John',
        city:'Chandler',
        orderTotal: 9.9956,
        orders: [
          {
            id: 1,
            product: 'Shoes',
            total: 9.9956
          }
        ]
      },
      {
        id: 2,
        joined: '1965-01-25',
        name:'Zed',
        city:'Las Vegas',
        orderTotal: 19.99,
        orders: [
          {
            id: 2,
            product: 'Baseball',
            total: 9.995
          },
          {
            id: 3,
            product: 'Bat',
            total: 9.995
          }
        ]
      },
      {
        id: 3,
        joined: '1944-06-15',
        name:'Tina',
        city:'New York',
        orderTotal:44.99,
        orders: [
          {
            id: 4,
            product: 'Headphones',
            total: 44.99
          }
        ]
      },
      {
        id: 4,
        joined: '1995-03-28',
        name:'Dave',
        city:'Seattle',
        orderTotal:101.50,
        orders: [
          {
            id: 5,
            product: 'Kindle',
            total: 101.50
          }
        ]
      }
    ]; // end of customers data

    factory.getCustomers = function(){
      return angular.copy(customers, factory.customers);
    };

    factory.getCustomer = function(customerId){
      for(var i=0, len=customers.length; i < len; i++){
        if(customers[i].id == parseInt(customerId)){
          return angular.copy(customers[i], factory.customer);
        }
      }
      return {};
    };
    return factory;
  };

  angular.module('customersApp').factory('customersFactory', customersFactory);
})();

```

* Create an IIFE that will hide all the variables from Global scope.
* Create a Self Revealing Function, customersFactory, in the IIFE.
* In the customersFactory function we will:
	* _hard code_ all the customer data.
		* _We'll remove this when we get customer data from the back end_
	* Create an empty object literal, "factory".
	* Create a method on factory, getCustomers, that can be used to access the customer data.
	* Create a method on factory, getCustomers, that given a customer id will return data for that customer.
	* return the object literal "factory".

* Register the Angular Factory. So it's available throughout the application.


##### Add the app/controllers/customersController.js

```javascript
(function customersControllerIIFE(){

  // 1. Inject the customersFactory into this controller
  var CustomersController = function(customersFactory){
    this.sortBy = "name";
    this.reverse = false;
    // 2. Set the controllers array of customers equal to the factories
    this.customers= customerFactory.customers;

    // 3. Create a function that will set the customers Array in the scope
    // from the customersFactory
    function init(){
      // Init the customers from the factory
      customersFactory.getCustomers();
    }

    // 4. Initialize the controller.
    init();

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

 // Prevent the minifier from breaking dependency injection.
 CustomersController.$inject = ['customersFactory'];

 // The Controller is part of the module.
 angular.module('customersApp').controller('customersController', CustomersController);

})();
```

1. Inject the customersFactory into this controller
2. Set the controller's customers equal to the factory's customers within the scope.
3. Create a function that will retrieve customers from our "DB".
4. Initialize the controller.

##### Add the app/controllers/ordersController.js

```javascript
(function ordersControllerIIFE(){

  var OrdersController = function($routeParams, customersFactory){
    var customerId = $routeParams.customerId;
    this.customer = customersFactory.customer;

    // private function, not available outside of IIFE

    function init(){
      // Search for the customer by id
      customersFactory.getCustomer(customerId);
    }

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  OrdersController.$inject = ['$routeParams', 'customersFactory'];

  // The Controller is part of the module.
  angular.module('customersApp').controller('ordersController', OrdersController);

})();
```
1. Inject the customersFactory into this controller
2. Set the customer equal to the customerFactory's customer.
3. Create a function, init, that will set the customers from the customerId param.
4. Initialize the controller.

##### Add the customers factory, customers controller and orders controller to the index.html.

```html
<!DOCTYPE html>
<html ng-app="customersApp">
  <head>
    <title>Angular is Fun!</title>
  </head>
  <body>
    <ng-view></ng-view>

    <!-- vendor javascript -->
    <script src='bower_components/angular/angular.js'></script>
    <script src='bower_components/angular-route/angular-route.js'></script>

    <!-- app -->
    <script src='app/app_done.js'></script>

    <!-- factories -->
    <script src='app/factories/customersFactory.js'></script>

    <!-- controllers -->
    <script src='app/controllers/customersController.js'></script>
    <script src='app/controllers/customersController.js'></script>

  </body>
</html>

```

##### Add the app/views/orders.html

```html
 <h3>{{ orderCtrl.customer.name}}'s Orders</h3>
 <table>
   <tr>
	<th>Product</th>
    <th>Total</th>
  </tr>
  <tr ng-repeat="order in customer.orders">
    <td>{{ orderCtrl.order.product }}</td>
    <td>{{ orderCtrl.order.total | currency }}</td>
  </tr>
</table>
<br/>
```

#### Defining Application Wide Variables.

Provide variables that don't belong in a factory, or controller. They are application wide variables that have values.

##### Add app settings to the app/services/values.js

```javascript
// Create applicaton wide settings
angular.module("customersApp").value('appSettings', {
  title: "Customers Application",
  version: "1.0"
});

/*
// Use constant if you need app wide values available inside the app config
angular.module("customersApp").constant('appSettings', {
  title: "Customers Application",
  version: "1.0"
});
*/

```

##### Add the app settings to the scope for the customers View, app/controllers/customersController.js .

```javascript
(function customersControllerIIFE(){

  // 1. Inject application wide value, appSetting.
  var CustomersController = function(customersFactory, appSettings){
	...
    // 2. Make the application wide settings available in the view.
    this.appSettings = appSettings;

	...

  };

 // 3. Prevent the minifier from breaking dependency injection.
 CustomersController.$inject = ['customersFactory', 'appSettings'];
 ...
})();

```

##### Use the app settings in the customers View, app/views/customers.html.

```
 <h3>{{ customersCtrl.appSettings.title}} </h3>
...
<span>Total customers: {{customersCtrl.customers.length}}</span>
<br/>
<br/>
<footer>Version: {{ customersCtrl.appSettings.version }}</footer>

```
## Lab

Let's revist our songs app. Create a factory, pull all of the logic out of your controller and put it into your factory. We want to keep our controllers nice and neat.

## Ajax (finally)

We are, finally, going to make remote API HTTP Request for the customer data. We will be using a very simple Rails app, actually created with the Rails API gem.

The repo for this API is [Customers API](https://github.com/ga-wdi-boston/wdi_9_rails_customers_api).


But, we will need to setup the Angular Factories we created above to make Ajax calls to this API.

##### Modify the app/services/customersFactory.js

```javascript
(function customersFactoryIIFE(){

  // Create a customers factory
  var customersFactory = function($http){
    var factory = {};
    factory.customers = [];
    factory.cutomer = {};

    factory.getCustomers = function(){
      // allow access to the list of customers
      return $http.get('http://localhost:3000/customers').success(function(response){
        angulr.copy(response, factory.customers);
      });
    };

    factory.getCustomer = function(customerId){
      return  $http.get('http://localhost:3000/customers/' + customerId).sucess(function(response)
        angular.copy(response, factory.customer);
      });
    };
    return factory;
  };

  customersFactory.$inject = ['$http'];

  angular.module('customersApp').factory('customersFactory', customersFactory);
})();

```

* We've injected the Angular Ajax Service, __$http__ , in to this Factory.
	* The $http behaves very much like the jQuery $.ajax
* We have __FINALLY__ removed the hard coded customers data from our app. And now are making a remote API request for this data.
	``$http.get('http://localhost:3000/customers') ``
* And we are making a HTTP GET Request for a specific customers data.
	``$http.get('http://localhost:3000/customers/' + customerId) ``
* Once this data comes back, we are setting the value of our factory to the response via angular copy. Angular copy is a deep copy. Not entirely sure what that means; don't care. It paves over any issues of timing or scope we might have.
* Doing the weasel work of preventing the javascript minification problems.
	``customersFactory.$inject = ['$http']; ``

Check out the $http Angular service. In each of the methods above we return a _Promise_ from the $http service. A Promise will be invoked when the Ajax asynchronous request is returned from the server.

##### Modify the app/controllers/customersController.js

```javascript
(function customersControllerIIFE(){

  var CustomersController = function(customersFactory, appSettings){

	...
    function init(){
      // Init the customers from the factory
      //this.customers = customersFactory.getCustomers();
      customersFactory.getCustomers()
    }

    init();
    ...

  };

 ...

})();

```

* We have changed the init function to handle the _Promise_ returned by the customersFactory.getCustomers method.
	* The anonymous function passed to success will fire and update the ViewModel's, scope, with the customers data.
	* The anonymous function passed to error will fire if there is an error communicating with the API.

#### Modify the app/controllers/ordersController.js

```javascript
...
    function init(){
      // Search for the customer by id
      // this.customer = customersFactory.getCustomer(customerId);
      customersFactory.getCustomer(customerId)
    }

...
```

* We have changed the init function to handle the _Promise_ returned by the customersFactory.getCustomer(customerID) method.
	* The anonymous function passed to success will fire and update the ViewModel's, scope, with the customer data, this.customer.
	* The anonymous function passed to error will fire if there is an error communicating with the API.

## Lab

Time to get serious with our songs app. Create an API (either in Node.js or Rails) and seed some songs. Then, refactor your angular app to read and render those songs.

## Documentation

[AngularJS](https://angularjs.org/)

[API Documentation](https://docs.angularjs.org/api)

This is like the $.ajax in JQuery.
[Ajax HTTP Service](https://docs.angularjs.org/api/ng/service/$http)
