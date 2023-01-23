# Services and `ngResource`

## Learning Objectives

* Explain the purpose of services in Angular
* Use `$resource` to pull information from an API
* Use `$stateParams` to access query parameters and update the URL
* Create separate views and routes for each CRUD action

## Framing

In the last couple of classes, we've been using hardcoded data in our AngularJS apps. Today, we'll use the `$resource` service of the `ngResource` module to perform CRUD actions on resources provided by a RESTful API.

### What is a [Service](https://docs.angularjs.org/guide/services)

"AngularJS services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app."

## You Do: Walkthrough of Current App (20 minutes / 0:20)

> With the person next to you, take 15 minutes to walk through the following part of the lesson plan, up to the "Factories" header. Read our descriptions of the different components.

> We'll then take the next 5 minutes for questions.

Run the below commands to clone the starter code. You will not be using the code you created in the `ui-router` class.

```bash
$ git clone https://github.com/ga-wdi-exercises/grumblr_angular.git
$ cd grumblr_angular
$ git checkout factory-resource-starter
```

Where we're picking up the app, it has...
* A functioning index route that uses grumbles hardcoded into the index controller
* The makings of a show route -- we'll need to build this out

#### `index.html`

```html
<!DOCTYPE html>
<html data-ng-app="grumblr">
  <head>
    <title>Angular</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>
    <script src="js/app.js"></script>
  </head>
  <body>
    <h1><a data-ui-sref="grumbleIndex">Grumblr</a></h1>
    <main data-ui-view></main>
  </body>
</html>
```

> **data-ng-app**: Establishes the domain of our Angular application.
>
> **data-ui-sref:** This creates a link that, when clicked, directs the user to `#/grumbles` without reloading the page.
>
> We use this instead of the usual `href` because `sref` refers to a state and automatically grabs the URL for that state. It's like link helpers in rails.
>
> **data-ui-view:** Whichever view is triggered by the user will be displayed in the DOM element with this attribute.

#### `js/ng-views/index.html`

```html
<h2>These are all the Grumbles</h2>

<div data-ng-repeat="grumble in vm.grumbles">
  <p>{{grumble.title}}</p>
</div>
```
> **data-ng-repeat:** Allows us to iterate through each item in the array passed in as an argument. In this case, the controller's `grumbles` property.
>
> **vm:** Represents the instantiation of our index controller.

#### `js/app.js`

```js
  angular
  .module("grumblr", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    config
  ]);

  function config($stateProvider){
    $stateProvider
    .state("grumbleIndex", {
      url: "/grumbles",
      templateUrl: "js/ng-views/index.html",
      controller: "GrumbleIndexController",
      controllerAs: "vm"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/ng-views/show.html"
    });
  }
```
> **.module:** A module is a container for controllers, directives, services -- all parts of our application. Modules can have dependency modules injected.
>
> **ui.router:** "The defacto standard for routing in AngularJS" -[UI-Router](https://ui-router.github.io/ng1/#about).  Allows our application to have multiple states.
>
> **$stateProvider:**  A ui-router provider that allows us to configure states for our application.
>
> **.state:** A method for defining individual states in our application. Arguments include (1) state name and (2) an object that contains information about route, template and controller used.


#### Index Controller

```js
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    this.grumbles = [
      {title: "These"},
      {title: "Are"},
      {title: "Hardcoded"},
      {title: "Grumbles"}
    ]
  }
```
> **GrumbleIndexController:** The name of this controller.
>
> **GrumbleIndexControllerFunction:** A function that contains this controller's behavior. This is a stylistic decision - we could have passed in an anonymous function to `.controller` or have given it any other name (`GrumbleIndexController` is a good name but we've been more verbose for clarity).

You'll notice that, at the moment, we have hardcoded models into the Grumbles controller. Today we'll be learning about `ngResource`, a module that allows us to make calls to that Rails API we'll start up now.

## Set Up Grumblr API (5 minutes / 0:25)

Let's start by cloning and running a Grumblr Rails API in the background. Our AngularJS app will make an AJAX calls to this API.

```bash
$ git clone https://github.com/ga-wdi-exercises/grumblr_rails_api.git
$ cd grumblr_rails_api
$ bundle update
$ rails db:drop db:create db:migrate db:seed
$ rails s
```

## Services (10 minutes / 0:35)

First, we'll define a service that will be the "source of truth" for our grumbles.

A service is an Angular component that adds functionality to an Angular application. Services are singletons so when one service is injected into more than one place, it is the same service being shared. Services should have focused concerns, in this case we will be creating a service concerned with Grumbles.

A [factory](https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)) is a general programming pattern and not specific to AngularJS. A factory refers to function or method for creating objects. When we use the `.factory` method on an AngularJS we are telling AngularJS that we are providing the **factory function** for creating a service.

Services allow us to separate concerns and extract functionality that would otherwise be defined in our controller. We do this by creating an object, attaching properties and methods to it and then returning that object.

Let's move our grumbles from our controller to a `Grumble` service. We're are going to give this an upper case name because it will eventually be returning a **resource** class. Think of a resource class analagously to our ActiveRecord classes in Rails. While `ActiveRecord` provides an abstraction over SQL queries, `$resource` will provide an abstraction over HTTP requests.

```js
    .factory( "Grumble", [
      grumbleService
    ]);

  function grumbleService (){
    const grumbles = [
      {title: "These"},
      {title: "Are"},
      {title: "Hardcoded"},
      {title: "Grumbles"}
    ]

    return {
      all: all
      }

    function all () {
      return grumbles
    }
  }
```
> Services can also take dependencies. We inject dependencies into a service the same way we inject them into a controller.

We can now inject our `Grumble` service into our controller and call `Grumble.all` to get the array of grumbles.

```js
    .controller( 'GrumbleIndexController', [
      'Grumble',
      GrumbleIndexControllerFunction
    ]);

  function GrumbleIndexControllerFunction( Grumble ){
    this.grumbles = Grumble.all();
  }
```
> This is nice because it keeps our of our logic around Grumbles in a particular space (the service) and we don't need to clutter our controller with Grumble logic. Most importantly, if two controllers need to know about Grumbles, there is no work keeping them in sync.

### Aside: `.factory` vs `.service` vs `.provider`

In AngularJS, there are some unfortunate naming conventions around services. There are three ways to register an AngularJS service with a module: the `.factory` method which we have and will continue to use. Additionaly, AngularJS let's us register a service to a module using the `.service` method or the `.provider` method.

The `.service` method works nearly identically to the `.factory` method except that instead of calling the function we use to define the service regularly, it is instantiated with the `new` keyword (the same way controllers using `controllerAs` syntax).

The `.provider` method should be used when we need to do some configuration in the `.config` phase (as we do with `$stateProvider`) before the service is created.

It is best practice to only use `.provider` when we need to configure in the `config` phase (it's overkill otherwise).

It is best practice to use `.factory` instead of `.service`. "Since [services] are so similar to factories, use a factory instead for consistency." - [John Papa, *Angular 1 Styleguide*](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#services)

Check out this [article for a detailed comparison](http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/).

### I Do: Create Grumble Resource (15 minutes / 0:50)

> Do not code along. You will have the chance to write all this code in the following exercise.

AngularJS provides a service that low level abstraction over http requests, `$http` that can be used interact with our server. It is more common though to use the `$resource` service of [ngResource](https://docs.angularjs.org/api/ngResource) module which provides a higher level abstraction RESTful services.

Let's include it in our application using a CDN...

```html
<!-- index.html -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.2/angular-resource.min.js"></script>
```

Inject the `ngResource` module as a dependency of our application...

```js
angular
  .module("grumblr", [
    "ui.router",
    "ngResource"
  ])
```

And inject the `$resource` service into our `Grumble` service and return the resource class that `$resource` returns when provided a URL.

```js
    .factory( "Grumble", [
      "$resource",
      Grumble
    ]);

    function Grumble( $resource ){
      return $resource( 'http://localhost:3000/grumbles/:id' );
    }
```

The `$resource` service takes [a parameterized url string, an optional hash of default parameters, an optional hash of custom actions (more later), and an options "hash" (js obejct)](https://docs.angularjs.org/api/ngResource/service/$resource#usage).

### Doc Dive: `$resource` (5 minutes)

- Go to the [`$resource` service documentation](https://docs.angularjs.org/api/ngResource/service/$resource)
  - Scroll down to usage
  - Read the **Returns** subheading

The returned resource, which we are calling `Grumble`, provides the following methods...

* `Grumble.get`
* `Grumble.save`
* `Grumble.query`
* `Grumble.remove`
* `Grumble.delete`

> Where's `update`, you ask? We're going to define that ourselves later on.

#### Let's Test It Out With `.query`...

Let's update our index controller so that, instead of using hardcoded grumbles, `this.grumbles` is set to the result of making a `GET` request to `http://localhost:3000/grumbles`.

```js
    .controller( "GrumbleIndexController", [
      "GrumbleFactory",
      GrumbleIndexControllerFunction
    ]);

    // Whenever `.grumbles` is called on our ViewModel, it returns the response from `.query()`
    function GrumbleIndexControllerFunction( GrumbleFactory ){
      this.grumbles = GrumbleFactory.query();
    }
```

Once we have a `Grumble` resource instance, the actions `save`, `remove` and `delete` are available on it as methods with the `$` prefix. We can say something like:

```js
function GrumbleIndexControllerFunction (Grumble) {
  this.grumbles = Grumble.query(() => {
    const grumb1 = this.grumbles[0]
    grumb1.content = 'Thats pretty neat!'
    console.log(grumb1)
  })
}
```

### You Do: Create Grumble Factory + Update Index Controller (10 minutes / 1:00)

### Break (10 minutes / 1:10)

### You Do: Show (20 minutes / 1:30)

#### Modify the Show `.state()` in `app.js`

Include values for `controller` and `controllerAs`...

```js
.state("grumbleShow", {
  url: "/grumbles/:id",
  templateUrl: "js/ng-views/show.html",
  controller: "GrumbleShowController",
  controllerAs: "vm"
});
```

#### Update `index.html`

Each grumble listed here should link to its corresponding show page...

```html
<div data-ng-repeat="grumble in vm.grumbles | orderBy:'-created_at'">
  <p><a data-ui-sref="grumbleShow({id: grumble.id})">{{grumble.title}}</a></p>
</div>
```
> NOTE: `grumbleShow` takes an object with key-value pairs to provide values for the parameters in the state definition (like the path helpers for show pages in Rails).

#### Create a Show Controller

This will look very similar to the index controller, with a couple exceptions.
- The controller requires access to ui-router's `$stateParams` service so we inject it.
- `$stateParams` is an object with the state parameters. If we print it to the console, it looks like this...

```js
Object {id: "6"}
```

The controller will have a `grumble` property. It should be set to the return value of the Grumble resource `get` method.
* The resource's `get` method requires an object as an argument, which contains a key-value pair for the grumble's id.

```js
  .controller("GrumbleShowController", [
    "Grumble",
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction(Grumble, $stateParams){
    this.grumble = Grumble.get({id: $stateParams.id});
  }
```

#### Update `show.html`

Create a show view for a Grumble. It should display the Grumble's title, author name, created at date, content and photo.

### I Do: New/Create (15 minutes / 1:45)

> Do not code along. You will have the chance to write all this code in the following exercise.

#### Add New Link to `index.html`

This link will trigger the `grumbleNew` state when clicked...

```html
<a data-ui-sref="grumbleNew">New Grumble</a>

<h2>These are all the Grumbles</h2>

<div data-ng-repeat="grumble in vm.grumbles">
  <p><a data-ui-sref="grumbleShow({id: grumble.id})">{{grumble.title}}</a></p>
</div>
```

#### Create `grumbleNew` Route

```js
// app.js

$stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    templateUrl: "js/ng-views/index.html",
    controller: "GrumbleIndexController",
    controllerAs: "vm"
  })
  .state("grumbleNew", {
    url: "/grumbles/new",
    templateUrl: "js/ng-views/new.html",
    controller: "GrumbleNewController",
    controllerAs: "vm"
  })
  .state("grumbleShow", {
    url: "/grumbles/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GrumbleShowController",
    controllerAs: "vm"
  });
```

> NOTE: `grumbleNew` is placed before `grumbleShow`. This is important - why? Switching `grumbleNew` and `grumbleShow` may shed some light on this...

#### Create a New controller

In the `GrumbleNewControllerFunction`, let's inject the `Grumble` service, instantiate a `new` instance of it that can be modified by form inputs and add a `create` method that allows it to be sent to our API...

```js
  .controller( "GrumbleNewController", [
    "Grumble",
    GrumbleNewControllerFunction
  ]);

  function GrumbleNewControllerFunction( Grumble ){
    this.grumble = new Grumble();
    this.create = function(){
      this.grumble.$save()
    }
  }
```

#### Create `new.html`

Let's create a form view for creating Grumbles. Notice how `data-ng-model` references what we defined as `this.grumble` in our controller in the previous step...

```html
<!-- js/ng-views/new.html -->

<h2>Create Grumble</h2>

<form>
  <input placeholder="Title" data-ng-model="vm.grumble.title" />
  <input placeholder="Author name" data-ng-model="vm.grumble.authorName" />
  <input placeholder="Photo URL" data-ng-model="vm.grumble.photoUrl" />
  <textarea placeholder="Grumble content" data-ng-model="vm.grumble.content"></textarea>
  <button type="button" data-ng-click="vm.create()">Create</button>
</form>
```
> Fields are matched to grumble properties using the `data-ng-model` directive.

### You Do: New/Create (10 minutes / 1:55)

### Break (10 minutes / 2:05)

### You Do: Edit/Update (15 minutes / 2:20)

The steps here are pretty similar to those of the last "I Do," with a few exceptions. The biggest one is...

#### Define an `update` method in the Factory

`ngResource` does not come with a native `update` method. We need to define it in the `FactoryFunction` return statement, indicating that `update` corresponds to a `PUT` request.

```js
    .factory( "Grumble", [
      "$resource",
      grumbleService
    ])

  function grumbleService( $resource ){
    return $resource( "http://localhost:3000/grumbles/:id", {}, {
        update: { method: "PUT" }
    });
  }
```

The rest of the steps are a bit more straightforward...

#### Update `index.html`

Let's update our `ng-repeat` div so that it also displays a link with each Grumble that will direct us to an edit page...

```html
<!-- js/ng-views/index.html -->

<div data-ng-repeat="grumble in vm.grumbles">
  <p><a data-ui-sref="grumbleShow({id: grumble.id})">{{grumble.title}}</a></p>
  <a data-ui-sref="grumbleEdit({id: grumble.id})">Edit</a>
</div>
```

#### Create `grumbleEdit` Route

Follow the same process we did for `grumbleNew`, making sure to use the word `edit` wherever necessary.

Not sure what URL to use? Think about what the path would look like for an edit form in a Rails app.

#### Create an Edit Controller

The big addition here is our controller's `update` method. You'll notice that it makes use of `$update`. This is the method we defined in the Grumble factory. It is preceded by a `$` because this is how `$resource` indicates it's an instance method.

```js
    .controller( "GrumbleEditController", [
      "Grumble",
      "$stateParams",
      GrumbleEditControllerFunction
    ]);

  function GrumbleEditControllerFunction( Grumble, $stateParams ){
    this.grumble = Grumble.get({id: $stateParams.id});
    this.update = function(){
      this.grumble.$update({id: $stateParams.id})
    }
  }
```

#### Create `edit.html`

The form on this page will look a lot like the one in `new.html`, but you'll need to make some changes to it...
* Reference the proper controller instance. You probably called it `vm`.
* Replace your inputs' `placeholder` attribute with `value` so we have some content to work with in our input fields upon page load.
* Set these value attributes to the contents of the Grumble like so...

```html
<input value="vm.grumble.title" ... >
```

* In the button's `ng-click` directive, reference the controller's `.update` method instead of `.create`.

### You Do: Delete (Remaining Time)

Contrary to how we've done things for every other RESTful route, we will not be creating a separate controller for `delete`. This is because we want to be able to delete a Grumble simply by clicking a button on each grumble's show page.

#### Add Delete Button to `edit.html`

When clicked, the delete button will trigger a `destroy` method that we have yet to define in `edit.controller.js`...

```html
<form>
  <input value="vm.grumble.title" data-ng-model="vm.grumble.title" />
  <input value="vm.grumble.authorName" data-ng-model="vm.grumble.authorName" />
  <input value="vm.grumble.photoUrl" data-ng-model="vm.grumble.photoUrl" />
  <textarea value="vm.grumble.content" data-ng-model="vm.grumble.content"></textarea>
  <button data-ng-click="vm.update()">Update</button>
  <button data-ng-click="vm.destroy()">Delete</button>
</form>
```

#### Add Destroy Method to Edit controller

```js
    .controller( "GrumbleEditController", [
      "Grumble",
      "$stateParams",
      GrumbleEditControllerFunction
    ]);

  function GrumbleEditControllerFunction( Grumble, $stateParams ){
    this.grumble = Grumble.get({id: $stateParams.id});
    this.update = function(){
      this.grumble.$update({id: $stateParams.id})
    }
    this.destroy = function(){
      this.grumble.$delete({id: $stateParams.id});
    }
  }
```

## Using the Resource or the Promise

ngResource tries to be helpful by immediately returning an empty instance when a resource method is called and then "hydrating" it. Alternatively, we can access the underlying promise for the http request. We can access it with the `.$promise` method. Why might we want to explicitly handle the promise rather than just depending on the resource?

### Closing/Questions (10 minutes / 2:30)

* Why do we use services?
* What are `ngResource` and `$resource`? What methods do they provide us with?
* How do we use `$resource` and a factory to create and save something to an API/database?

----------

## Grumblr Bonuses

Only attempt the following once you have set up full CRUD functionality for Grumblr...

#### state.go

Use `state.go` so that when a user creates, edits or deletes something, they are directed to a page that is not the same form. [Check out the official docs documentation](https://github.com/angular-ui/ui-router/wiki/Quick-Reference).

#### Hardcore SPA

Only use a single view and controller (i.e., you should be to execute full CRUD functionality from the index). The user should only be able to see forms for creating and updating after clicking buttons for those respective actions.

> This will require making use of directives we didn't use in today's class, like `ng-show` and `ng-hide`.

### Homework (Optional)

Finish implementing full CRUD functionality for Grumblr using `ngResource`. In other words, finish going through all the code in this lesson plan.

Links to the starter and solution code can be found in the [`grumblr_angular` repo](https://github.com/ga-wdi-exercises/grumblr_angular).

### Resources

* Angular documentation for [ngResource](https://docs.angularjs.org/api/ngResource) and [$resource](https://docs.angularjs.org/api/ngResource/service/$resource).
* [Angular: What Goes Where?](http://demisx.github.io/angularjs/2014/09/14/angular-what-goes-where.html)
* [Factory vs. Service vs. Provider](http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/)

## Screencasts
- Dec 16, 2015 (Robin)
  - [Part 1](https://youtu.be/Ni-KnX9eEDI)
  - [Part 2](https://youtu.be/Jm4lmgpQfJ8)
  - [Part 3](https://youtu.be/dP0YsPTnaTU)
  - [Part 4](https://youtu.be/oEFmmQgh4cE)
