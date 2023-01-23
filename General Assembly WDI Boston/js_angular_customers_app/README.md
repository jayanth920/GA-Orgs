# Angular Customer Application (SPA)


## Objectives

* Create a complete Single Page Application (SPA) using Angular.


## Setup Front-End

#### Install Angular.

```$ bower install```

#### Run a ruby HTTP server to serve up the front-end app.

```$ ruby -run -e httpd . -p5000```

## Setup Back-End, Rails Customers API

#### Start the Customers API, backend

In another directory, **NOT THE SAME DIRECTORY AS THE
FRONT-END APP!!**

```$ git clone git@github.com:ga-wdi-boston/wdi_9_rails_customers_api.git```
```$ cd wdi_9_rails_customers_api```
```$ rake db:setup```
```$ rails server```

Now check that you have a couple of customers at http://localhost:3000/customers

*Should have JSON for a couple of customers*


## Demo

Go to http://localhost:5000/index_done.html. This should allow you to see the Customers and their Orders.

### Create your Application.

Work through the index_done.html and create you're own set of application. All the files will be in index.html, app/app.js, app/controllers/customersController.js, etc...

#### Create an index.html

```html
<!DOCTYPE html>
<html ng-app="customersApp">
  <head>
    <link rel="stylesheet" type="text/css" href="css/app.css">

    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
  </head>
  <body>
    <div ng-view></div>
  </body>
</html>
```

#### Create a application wide settings.

Create app/services/values.js

```javascript
// Create applicaton wide settings
angular.module("customersApp").value('appSettings', {
  title: "Customers Application",
  version: "1.0"
});
```

#### Create the application module and routes.

Create app/app.js

```javascript
(function customersAppIIFE(){
  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'customersController as custCtrl',
              templateUrl: 'app/views/customers_done.html'
            }
           )
      .when('/orders/:customerId',
            {
              controller: 'ordersController',
              controllerAs: 'ordersCtrl',
              templateUrl: 'app/views/orders_done.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });

})();
```

#### Create a new customer controller.

Create a app/controllers/customersController.js

```javascript
(function customersControllerIIFE(){

  var CustomersController = function(customersFactory, appSettings){
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = "name";
    vm.reverse = false;

    // All the customers
    vm.customers= [];

    function init(){
      // Init the customers from the factory
      // Get all the customers from the backend
      customersFactory.getCustomers()
      .then(function(result){
        vm.customers = result.data;
      }, function(data, status, headers, config){
        console.log("Error getting customers from the remote api");
        alert("Error getting customers from the remote api");
      });
    }

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    init();

  };

 CustomersController.$inject = ['customersFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('customersApp').controller('customersController', CustomersController);

})();
```

#### Create a new customer factory.

In app/services/customerFactory.js

```javascript
(function customersFactoryIIFE(){

  // Create a customers factory
  var customersFactory = function($http){
    var customersAPI = {};

    customersAPI.getCustomers = function(){
      // allow access to the list of customers
      return  $http.get('http://localhost:3000/customers');
    };

    customersAPI.getCustomer = function(customerId){
      return  $http.get('http://localhost:3000/customers/' + customerId);
    };

    return customersAPI;
  };

  customersFactory.$inject = ['$http'];

  angular.module('customersApp').factory('customersFactory', customersFactory);
})();
```


#### Create a new customer template.

```html
<h3>{{ appSettings.title}} </h3>
<br/>

<!-- Show all Customers -->
<hr>
<br/>
Filter: <input type="text" ng-model="customerFilter.name"/>
<br/>
<table>
  <tr>
    <th ng-click="custCtrl.doSort('name')">Name</th>
    <th ng-click="custCtrl.doSort('city')">City</th>
    <th ng-click="custCtrl.doSort('orderTotal')">Order Total</th>
    <th ng-click="custCtrl.doSort('joined')">Joined</th>
    <th>&nbsp;</th>
  </tr>
  <tr ng-repeat="cust in custCtrl.customers | filter: customerFilter | orderBy:custCtrl.sortBy:custCtrl.reverse">
    <td>{{ cust.name }}</td>
    <td>{{ cust.city}}</td>
    <td>{{ cust.orderTotal | currency }}</td>
    <td>{{ cust.joined | date}}</td>
    <td><a href="#/orders/{{cust.id}}">View Orders</a></td>
  </tr>
</table>
<br/>
<span>Total customers: {{custCtrl.customers.length}}</span>
<br/>
<br/>
<footer>Version: {{ appSettings.version }}</footer>

```


#### Update index.html

```html
....
	<script src='app/app.js'></script>
    <script src='app/services/values.js'></script>
    <script src='app/services/customersFactory.js'></script>
    <script src='app/controllers/customersController.js'></script>
 ...
```

## Lab

Get the Customer orders working! Follow the done files.

## Demo

#### Create a Customer using a form.

Create a form to create orders for a Customer.

*May need to change the backend API Rails app to create Orders*


#### Create a form in the Customer template.

```html
...
<!-- Add a Customer -->

<form name="customerForm" class="css-form">
  <fieldset>
    <legend>Customer</legend>

    <input type="text" ng-model="custCtrl.currentCustomer.name" name="custName" minlength="2" maxlength="15" required placeholder="Name" />
    <div ng-messages="customerForm.custName.$error">
        <span ng-message="minlength">Your name is too short.</span>
        <span ng-message="maxlength">Your name is too long.</span>
        <span ng-message="required">Your name is required.</span>
    </div>
    <br/>

    <input type="text" ng-model="custCtrl.currentCustomer.city" name='custCity' minlength="2" maxlength="10" placeholder="City"/>
    <div ng-messages="customerForm.custCity.$error">
        <span ng-message="minlength">Your city name is too short.</span>
        <span ng-message="maxlength">Your city name is too long.</span>
    </div>

  </fieldset>

  <br />
  <button ng-click="custCtrl.reset()" ng-disabled="custCtrl.isUnchanged()" >Reset</button>
  <button ng-click="custCtrl.create()" ng-disabled="custCtrl.form.$invalid || custCtrl.isUnchanged()">Create Customer</button>

</form>
...
```

[Read about Form Validation with ngMessages](https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages)

#### Update the app.js to using the ngMessages service.

*Notice we've added the dependecy for ngMessages.*

```javascript
...

 var app = angular.module('customersApp', ['ngRoute', 'ngMessages']);
...
```

#### Update the Customers Controller with form processing code.


Update app/controllers/customersController.js

```javascript
...
    // reflects the contents of the form, the current customer
    vm.currentCustomer = {};
    // The customer to be saved/persisted
    vm.master = {};

...

vm.create = function(){
      // vm.master = angular.copy(vm.currentCustomer);
      customersFactory.createCustomer(vm.currentCustomer)
        .then(function(result){
          vm.master = result.data;
          vm.customers.push(vm.master);
          vm.currentCustomer = {};
        }, function(data, status,headers, config){
          console.log('Error creating a customer');
          alert('Error creating a customer');
        });
    };

    // reset the form to empty
    vm.reset = function(){
      vm.currentCustomer = angular.copy({});
    };

    vm.isUnchanged = function(customer) {
      return angular.equals(vm.currentCustomer, vm.master);
    };

    // start off with a reset form
    vm.reset();

....



```


#### Update the Customers Factory.


Update app/services/customersFactory.js

```javascript
...

 customersAPI.createCustomer = function(customer){
      return  $http.post('http://localhost:3000/customers/', {'customer': customer});
    };
...
```

## Lab

Create Customer orders using a form.

## Documentation

[Angular JS Form Validation with ngMessages](https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages)

[Angular JS Forms](http://tutorials.jenkov.com/angularjs/forms.html)

[AngularJS](https://angularjs.org/)

[API Documentation](https://docs.angularjs.org/api)

This is like the $.ajax in JQuery.
[Ajax HTTP Service](https://docs.angularjs.org/api/ng/service/$http)
