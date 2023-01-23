## Angular Routes.

We are going to dive into Angular Routes. Routes are used to "dispatch" a HTTP Request for a URL to some code that will be executed.

Angular will define a set of routes that will map URL, and the paths they contain, to a Controller and View.

## Objectives

* Define a Route inside the Configuration for a specific application module.
* Use dependency injection to inject the routing module, ngRoute, into the application module.
* Use a Route to associate a URL, or path, with a Controller and View.
* Dispatch a request for a URL to a Controller. And associate a View that this Controller will use to generate HTML.


## Demo

#### Setup

Install angular routes.

``bower install angular-route``

#### Routing

Angular routing works _somewhat_ like Rails and Express routes. But, there are some very crucial differences.

First, we will need to add another Angular module, ngRoute, that will be used to create routes. The angular.js file does not have the code needed for routing. The code for this Routing module is kept in it's own javascript file.

As we'll see, Angular routing explicitly connects URL/Paths to specific Angular Controllers and Views.

We are going to associate the path ``/`` with the Controller, ``app/controlllers/customersController.js``, and the View, ``app/views/customers.html``.


#### Create the shell page, index.html.

_The shell page is somewhat like a layout in Rails_

```html
<!document html>
<html ng-app="customersApp">
  <head>
    <script type='text/javascript' src='bower_components/angular/angular.js'></script>
    <script type='text/javascript' src='bower_components/angular-route/angular-route.js'></script>
    <script type='text/javascript' src='app/app.js'></script>
    <script type='text/javascript' src='app/controllers/customersController.js'></script>
  </head>

  <body>
    <div ng-view></div>
  </body>
</html>

```

	*We have added a reference to the angular-route.js file that defines the ngRoute module.

```html
    <script type='text/javascript' src='bower_components/angular-route/angular-route.js'></script>
```

	* We have already downloaded the ngRoute module that lives in it's own file, angular-route.js.
	* We have used the ng-view directive to define where the view for a route will be shown within the page.
	* The index.html, shell page, is like a rails/express layout. And a ng-view directive is somewhat like a yield statement in a rails layout.
	* The div with the ng-view directive will be replaced by the contents, HTML, generated from the Template.

#### Create a app/app.js file


_Notice the use of a Immediately Invoked Function Expression (IIFE). This is a very common pattern used to create an isolated scope and prevent Global namespace pollution._

_In this case we have named the IIFE to 'customersAppIIFE'. The name is only useful when debugging and viewing the call stack_

```javascript
(function customersAppIIFE(){
  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'customersController',
              templateUrl: 'app/views/customers_done.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });

})();

```

* This app will _depend on_ the ngRoute module. So we define the app's dependencies in the Array that is the second argument.
	``var app = angular.module('customersApp', ['ngRoute']);``

* The $routeProvider module is injected into the app's config. _(dependency injection)_
	`` app.config(function($routeProvider){ ``

* Inside the config function we define two routes.
	* The path '/' will invoke the customersController and use the View defined in the customers.html
	* The $routeProvider.when method takes two params. A path, '/', and an object literal with two properties. One property for the controller and one for the view.
	* The $routeProvider.otherwise method defines a default action that will be applied to any other path. It will redirect to '/'

#### Create a app/controllers/customersController.js file


```javascript
// Wrap the Controller declaration in an IFFE
// This will avoid creating another varible, CustomersController
// In the global namespace.
(function customersControllerIIFE(){

  // Controller
  var CustomersController = function(){

    this.customers = [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];

    this.sortBy = "name";
    this.reverse = false;

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };
  };


  // The Controller is part of the module.
  angular.module('customersApp').controller('customersController', CustomersController);

})();

```

Nothing new here.

##### Start up a HTTP Server for this app.

Yep, we've got to serve this thru a HTTP server.

```
 ruby -run -e httpd . -p5000
```

##### Open the app in a browser.

http://localhost:5000

#### Inspect with Chrome

Inspect the page to see how the div with ng-view is replaced by the view defined in app/views/customers.html

## Demo

We will add a route, view and controller for orders.

#### Add more routes to the app/app.js file

```javascript
(function customersAppIIFE(){
  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'customersController',
              templateUrl: 'app/views/customers_done.html'
            }
           )
      .when('/orders/:customerId',
            {
              controller: 'ordersController',
              templateUrl: 'app/views/orders_done.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });

})();

```

* Added a route, '/orders/:customerId', that takes a parameter.
* This route will associate the ordersController with the orders_done View.

#### Add a ordersController in app/controllers.

```javascript
(function ordersControllerIIFE(data){

  var OrdersController = function($routeParams){
    var customerId = $routeParams.customerId;
    this.orders = null;

    // private function, not available outside of IIFE
    function init(){
      // Search for the customer by id
      for(var i=0, len= this.customers.length; i < len; i++){
        if(this.customers[i].id == parseInt(customerId)){
          this.orders = this.customers[i].orders;
          break;
        }
      }
    }

    this.customers= data;

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  OrdersController.$inject = ['$routeParams'];

  // The Controller is part of the module.
  angular.module('customersApp').controller('ordersController', OrdersController);

})(customerData);

```

* This controller will have one service injected into it.
	* $routeParams - This will allow access to HTTP paramenters.
* We will get the customer ID from the $routeParams.
* We will put the global customerData in this controller's scope.
* We will, in the init method, search thru our data looking for a customer with this ID. Then add  matching entries into the scope.


#### Add a view for orders into app/views/orders.html.

```html
 <h3>Orders</h3>
 <table>
  <tr>
    <th>Product</th>
    <th>Total</th>
  </tr>
  <tr ng-repeat="order in orders">
    <td>{{ order.product }}</td>
    <td>{{ order.total | currency }}</td>
  </tr>
</table>
<br/>

```

#### Finally don't forget about the customerData

This is just hard coded data that lives in the global scope for now. It will be replaced by the data coming from the back end.

It's a hard coded file, app/customerData.js that should be referenced from the index.html, shell file.


```html
...
    <script type='text/javascript' src='js/angular-route.js'></script>
    <script type='text/javascript' src='app/customerData.js'></script>
...
```


## Documentation

[AngularJS](https://angularjs.org/)

[API Documentation](https://docs.angularjs.org/api)

This is like the $.ajax in JQuery.
[Ajax HTTP Service](https://docs.angularjs.org/api/ng/service/$http)
