## AngularJS Intro, Controllers, and Directives

- Explain what a front end framework is
- Identify advantages to moving some application logic to the client
- Differentiate AngularJS and [Angular](https://en.wikipedia.org/wiki/AngularJS#Angular_and_AngularDart)
- Initialize and AngularJS application with the `ng-app` directive
- Use built in [directives](https://docs.angularjs.org/guide/directive) to add application behavior to a document
  - Use `ng-repeat` to iterate over data
  - Use `ng-hide`/`ng-show` to hide and show elements
  - Use `ng-model` to bind user input to model data
  - Use `ng-click` to respond to user events
- Create a module to store the pieces of an AngularJS app
- Recognize the parts of an AngularJS app ([AngularJS Conceptual Overview](https://docs.angularjs.org/guide/concepts))
- Define a controller and use it to expose a view model to an AngularJS template
- Define a service to organize state and business logic in a shareable way

## Framing

<details>
<summary><strong>Q</strong>: What is a Framework?</summary>
- A framework is software providing generic functionality that serves as foundation to build and deploy applications.
- A framework manages the overall application flow. Simply put, frameworks call the code you write while you call the code provided by a library

- While dense, the introduction of the [software framework](https://en.wikipedia.org/wiki/Software_framework) article on wikipedia does an excellent job on an exact definition.
</details>

<details>
<summary><strong>Q</strong>: What is a front end framework?</summary>
- The way that Sinatra and Rails are frameworks that run on the server, receiving incoming request from the client, preforming some work that you have defined, and returning some response to the client, a front end framework runs in the client's browser (meaning in what language?), receives input from interactions with the page, performs some work that you have defined, and makes any updates necessary.
- By moving application logic to the client's browser rather than needing to make round trips to the server, we are able to build much more immersive applications
- Think MapQuest with full page reloads when you want to scroll the map as opposed to Google Maps where you don't need to reload the page
- There are [many](http://stateofjs.com/2016/frontend/) front end frameworks and each go about solving problems of how state is managed, updated, and represented by a view but there are many commonalities.
</details>

### [What is AngularJS?](https://docs.angularjs.org/guide/introduction)


### Aside: What is Angular

A totally rebuilt version of Angular was released in September 2016. It was originally released as Angular 2 but the release was rocky due to drastic changes that were announced before release and received push back.

Google continued to develop AngularJS 1.x (refered to as AngularJS) in parallel with Angular 2. In December 2016, a new version of Angular was release as Angular 4. It is backwards compatable with 2 (but not 1.x) and addresses many of the issues of the rocky release.

We are studying AngularJS instead of Angular for a few reasons:
1. AngularJS is still more prevelant than Angular. Many companies are in the process of upgrading
2. Studying AngularJS sets us up well to later learn Angular
3. Angular must be written in [TypeScript](http://www.typescriptlang.org/) which can complicate matters when first looking at front-end frame works.
4. Angular's conceptual model is extremely similar to React but requires more buy in; after studying AngularJS and React, Angular should be very approachable.

## Angular Resources
- [Official Documentation](https://docs.angularjs.org)
- [List of officially recognized external resources](https://docs.angularjs.org/guide/external-resources)
- [Official PhoneCat Tutorial](https://docs.angularjs.org/tutorial/)

## Building an AngularJS App

We are going to build a simple todo application to demonstrate the core features of AngularJS.

### Setup

To start working with AngularJS, we need is an `html` file, a `js` file, and a link to the AngularJS CDN.

Let's hop into our terminal and create those files…

```bash
$ mkdir angularTodos
$ cd angularTodos
$ touch index.html app.js
```

We don't need to have anything in the JS file to see the fundementals of Angular at work. To start, add the following code to `index.html`. Save and open `index.html` in the browser.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Todos</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app ng-init="todo={title:'Introduce Directives', completed: false}">
    <h1>Todo List</h1>
    <ul>
      <li>
        <input type="checkbox" ng-model="todo.completed">
        <span ng-style="todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
          {{todo.title}}
        </span>
      </li>
    </ul>
  </body>
</html>
```

> **Note**: make sure to link to the AngularJS CDN **before** your custom JS file

This looks just like HTML we are familiar with but with some additional markup. These additional attributes are called [**directives**](https://docs.angularjs.org/guide/directive); this is how we attach special behavior to regular html. DOM elements already have behavior we would want for displaying and linking documents, the original utility of the web. Angular directives add behaviors we would want for building applications.

Looking at the example consider the following directives and expression:

#### `ng-app`

When an AngularJS app loads, the framework looks at the DOM and finds the `ng-app` directive. Everything inside of the element with the `ng-app` directive is an Angular template. AngularJS reads the template and updates the DOM in accordance with the behavior of each directive. Expressions are evaluated and the return value is put into the DOM. Because we generally want the entire page to be controlled by AngularJS, `ng-app` is almost always found on the `html` or `body` tags.

#### `ng-init`

We likely won't see this again -- it is only necessary because we don't have any JS involved yet. This is declaring variables that can be used by subsequent directives and expressions.

In the future, we will use **controllers** to set up variables and functionality for use by directives and expressions. The variables and funtionality are declared in the context of the [`scope`](https://docs.angularjs.org/guide/scope), an object provided by Angular that acts as the go-between from the controller to the template. "Declared in the context of" means properties of the scope object.

#### `ng-model`

The `ng-model` directive associates some input with a variable on the `scope`. Notice how changing the value of the variable changes the value in the input and how changing the value in the input changes the value of the variable.

This is called **two-way databinding** and is one of the greatest features of Angular (remember how much work it was to do this same thing using jQuery).

#### `ng-style`

ng-style let's us set styling on an element dependent on the variables and functionality exposed to the template (exposed in this case by `ng-init` but generally by a controller).

Notice the difference from jQuery in how the styling is set on the `span`.

In jQuery we had write code to (1) grab and element and (2) manipulate the styling on that element. This is **imperative** code. In Angular we describe in the elements based on the model. This is **declarative** code.

#### `{{todo.title}}`

The code inside of double curly braces is an [**Angular Expression**](https://docs.angularjs.org/guide/expression) and works much like ERB.

We can write any JS we'd like in here (e.g. `{{5 + 5}} ` to the `body` of our `index.html` file, would print `10` to the screen). We also have access to everything on the scope so are able to refer to `todo`.

### Modules

Writing all of our logic directly into the DOM gets unweildy pretty immediately and limits what we can do. Before we start writing our business logic in JavaScript we need to introduce the way that AngularJS organizes the code -- with modules.

Building an AngularJS app is a lot like playing with Legos, in that we will mostly just be putting together a bunch of special pieces to construct a complex structure.

Modules are bundles to keep these special pieces (which will be introduced through the remaineder of this lesson) organized. Our apps will be small enough that we only need to define a single module ourselves but modules will also be how we add third-party code to our AngularJS applications (similarly to how we used Gems in Ruby).

When we load AngularJS into our app it adds a single value to the global scope. It is an object named `angular`. All of our modules will be kept within and managed by this global angular object (specifically, in what is called the injector).

We can create (register) a new module by using the `module` method of the global `angular` object. When creating a module, we call `angular.module` with two arguments, a **string** which will be the name of the module and an array of strings that are the names of any modules that our module will use (dependencies).

```js
// app.js
/* global angular */

angular.module('todoApp', [])
```

If there are no dependencies (as is our case), we need to provide an empty array. When you call `angular.method` with just a string argument, you are asking for AngularJS to get and return an already defined module with that name.

If we tried the following without having defined `'todoApp'`

```js
// app.js
/* global angular */

angular.module('todoApp')
```
We get `Uncaught Error: [$injector:nomod] Module 'todoApp' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.`

## [AngularJS Controllers](https://docs.angularjs.org/guide/controller) (10/80)

Now we will define a controller which will define variables and functionality to be exposed to the template directives and expressions. As in Rails, the controller is tasked with interacting with the application models and preparing values for use by the templates.

The syntax for adding a controller is as follows:

```js
// app.js
/* global angular */

angular.module('todoApp', [])
.controller('TodosController', [
  function TodosController () {

  }
])
```

To register a `controller` with a module, call the `controller` method on the module (`'todoApp'` here) and pass it two arguments, a string naming the controller (`'TodosController'`) and an array that starts with the string names of any dependencies that the controller uses (more on that later), and ends with a function.

While declaring the function in-line works it can be messy especially as we add dependencies so we may choose to use a function declaration and then reference it in the array as follows:

```js
// app.js
/* global angular */

(function () {
  angular.module('todoApp', [])
  .controller('TodosController', [TodosController])

  function TodosController () {

  }
})()
```

Notice we have added an IIFE to keep the `TodosController` out of the global namespace. This is best practice but not strictly necessary.

When we use the controller in our template, AngularJS calls this function with `new` which sets the context of the function (`this`) to an empty object and then implicitly returns that object (this is just vanilla JavaScript functionality of a constructor function). AngularJS the attaches the returned value (the instance of the controller) to the scope.

As in Rails, the controller is an interface between our data and our view. Just like how in Rails, to make data show up in a view, we'd make it an instance variable, as in `@variable = "Some data"`. To do the same in AngularJS, we attach it to `this`, as in `this.variable = "Some data"`. Here we are assigning our todo object to a property of our controller instance called `todo`:

```js
// app.js
/* global angular */

(function () {
  angular.module('todoApp', [])
  .controller('TodosController', [TodosController])

  function TodosController () {
    this.todo = {
      title: 'Introduce Directives',
      completed: false
    }
  }
})()
```

Now that we have our app's module defined and we have something in it that we want to use, we need to tell AngularJS that this is the top level module for our application and we want access to its contents in our template. We do this giving the `ng-app` directive the name of our module. We'll update `index.html` to use our new controller:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Intro</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app="todoApp" ng-controller="TodosController as todos">
    <h1>Todo List</h1>
    <ul>
      <li>
        <input type="checkbox" ng-model="todos.todo.completed">
        <span ng-style="todos.todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
          {{todos.todo.title}}
        </span>
      </li>
    </ul>
  </body>
</html>
```

Notice the syntax of `ng-controller`. We give it the name of the controller we want to use and then we give a name to the controller instance to be attached to the scope. Then in all of the directives and expressions, we get to the `todo` object defined on the controller by way of a variable `todos`.

In the same way that `ng-app` established the domain of the Angular module's functionality in the html element, the `ng-controller` establishes the domain of the controller's functionality in this body element.

It is good practice to always call the controller instance `vm` for "view model" (the model that will be presented by the view)". The same template updated to use `vm`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Intro</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app="todoApp" ng-controller="TodosController as vm">
    <h1>Todo List</h1>
    <ul>
      <li>
        <input type="checkbox" ng-model="vm.todo.completed">
        <span ng-style="vm.todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
          {{vm.todo.title}}
        </span>
      </li>
    </ul>
  </body>
</html>
```

## `ng-repeat`

Now we'll add an array of todos to our controller instead of just the one:

```js
// app.js
/* global angular */

(function () {
  angular.module('todoApp', [])
  .controller('TodosController', [TodosController])

  function TodosController () {
    this.todos = [
      { title: 'Build an app with Rails', completed: true },
      { title: 'Project 2', completed: true },
      { title: 'Build an app with Angular', completed: false },
      { title: 'Project 3', completed: false },
      { title: 'Build an app with Express', completed: false },
      { title: 'Build an app with Mongo', completed: false },
      { title: 'Build an app with React', completed: false },
      { title: 'Project 4', completed: false },
      { title: 'Become a Rockstar', completed: true }
    ]
  }
})()
```

We could update our temlate to have as many `li`s as we have todos and access each by index but this is hardly maintainable. AngularJS has a directive `ng-repeat` that will allow us to iterate over every element of an array available in our template and repeat the element the directive is on for each.

In `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Intro</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app="todoApp" ng-controller="TodosController as vm">
    <h1>Todo List</h1>
    <ul>
      <li ng-repeat="todo in vm.todos">
        <input type="checkbox" ng-model="todo.completed">
        <span ng-style="todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
          {{todo.title}}
        </span>
      </li>
    </ul>
  </body>
</html>
```

Now, when we refresh in the browser we see each of our todos styled appropriately.

---
## Break (10 mins)
---

## You Do: Grumbler (15 minutes)

Use the Todo app we've worked through above as a guide to build a simple blog called Grumblr where users can write up complaints.

### Setup Grumblr Application

To start:
- Create a directory called `grumblr`
- Inside that directory, create two files - a `html` file, and a `js` file
- Add some boilerplate `html` and make sure to link to your `js` file and the **[AngularJS CDN](https://docs.angularjs.org/misc/downloading)**
- Define you application's initial module and use a directive to bootstrap your AngularJS application
- Use Angular Expressions to get the product of `5 x 5` to display in the browser

### Setting up the GrumblsController

- Define a new controller attached to your app's module
- Add a property to your controller called `grumbles` that is an array of at least 5 objects with the following properties:
  - `title`
  - `author`
  - `content`
  - `photo_url`
- In the view, initialize an instance of your controller as the view model
- Use a directive to display all of the information for each `grumble` (title, name, content, photo url)

## [Filters](https://docs.angularjs.org/api/ng/filter/filter)

Another very handy tool provided by AngularJS are filters. Filters can be added to the end of an AngularJS expression by following the expression with a single pipe and following the pipe with the name of the filter: `{{expression | filter}}`. A filter takes the return value of the expression and formats it for display. It is possible to define your own filters but we are about to use one of the built in filters, `json`.

Within the repeated `li` element, add an Angular expression to show the `todo`'s value in a `pre` element:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Intro</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app="todoApp" ng-controller="TodosController as vm">
    <h1>Todo List</h1>
    <ul>
      <li ng-repeat="todo in vm.todos">
        <input type="checkbox" ng-model="todo.completed">
        <span ng-style="todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
          {{todo.title}}
        </span>
        <pre>{{todo | json}}</pre>
      </li>
    </ul>
  </body>
</html>
```

Notice how when we toggle the check boxes, the value of `completed` toggles. This is done by `ng-model` maintaining a two way data binding between the checkbox and the value of the `todo`'s `completed` property.

## User Input and Data Binding

Up until this point we have focused on displaying data, or the R of CRUD for a todo and updating the `completed` status, the U. Let's look at how we respond to user input by adding functionality to create a new todo.

First we need to add an text input element for the user to enter a new todo title and a button to add it.

In `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Intro</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app="todoApp" ng-controller="TodosController as vm">
    <h1>Todo List</h1>
    <ul>
      <li ng-repeat="todo in vm.todos">
        <input type="checkbox" ng-model="todo.completed">
        <span ng-style="todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
          {{todo.title}}
        </span>
      </li>
    </ul>
    <section>
      <h2>New Todo</h2>
      <label for="title-input">Title</label>
      <input type="text" id="title-input">
      <button>Add</button>
    </section>
  </body>
</html>
```

Next we will add a function to our controller and add a directive to the button that calls that function.

### [`ng-click`](https://docs.angularjs.org/api/ng/directive/ngClick)

There is an attribute in HTML `onclick` that can be provided a function name, however this is not tied into the AngularJS event system and has no awarenes of our controller. We need to instead use the `ng-click` directive.

Let's add that `ng-click` to our button so that it will fire a method `addTodo()` that we will define later on in the controller...

In `index.html`:

```html
<div>
  <input type="text">
  <button ng-click="vm.addTodo()">Add Todo</button>
</div>
```

> **Note**:  The value of what's passed to `ng-click` is not a callback. It is an expression that is executed when the button is clicked so we must include the invocation.

Now, in the controller we can go write the function definition for the `addTodo()` method we just referenced.

To start off and make sure that everything is wired up correctly, let's just log something to console to test that its working...

In `app.js`:

```js
/* global angular */

(function () {
  angular.module('todoApp', [])
  .controller('TodosController', [TodosController])

  function TodosController () {
    this.todos = [
      { title: 'Build an app with Rails', completed: true },
      { title: 'Project 2', completed: true },
      { title: 'Build an app with Angular', completed: false },
      { title: 'Project 3', completed: false },
      { title: 'Build an app with Express', completed: false },
      { title: 'Build an app with Mongo', completed: false },
      { title: 'Build an app with React', completed: false },
      { title: 'Project 4', completed: false },
      { title: 'Become a Rockstar', completed: true }
    ]
    this.addTodo = addTodo

    function addTodo () {
      console.log('clicked!')
    }
  }
})()

```

When we refresh the page in the browser, we should be able to click and see the message logged to the console.

Now we want to make this function take whatever value is in the text box, use it to create a new todo, and add the new todo to our `todos` array on the controller.

What directive have we already seen that keeps track of the value of an input field?

### [`ng-model`](https://docs.angularjs.org/api/ng/directive/ngModel)

Let's add an `ng-model` directive to bind the new todo input to a controller instance property `newTodo` and a `p` element that shows the value of `vm.newTodo`.

In `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Intro</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app="todoApp" ng-controller="TodosController as vm">
    <h1>Todo List</h1>
    <ul>
      <li ng-repeat="todo in vm.todos">
        <input type="checkbox" ng-model="todo.completed">
        <span ng-style="todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
          {{todo.title}}
        </span>
      </li>
    </ul>
    <section>
      <h2>New Todo</h2>
      <label for="title-input">Title</label>
      <input type="text" id="title-input" ng-model="vm.newTodo">
      <button ng-click="vm.addTodo()">Add</button>
      <p>User input: {{vm.newTodo}}</p>
    </section>
  </body>
</html>
```

Now, when we refresh in the browser, we can see the data we enter into the input and the rendered expression stay in sync.

Moving back to our `addTodo` method in the controller create a new todo using the value of `this.newTodo` as the title and add it to our list of `todos`. And finally we want to clear the input for our users by setting `this.newTodo` to `''`. Remember, the controller is instantiated as `vm` in the template, so in the controller constructor function, `this.newTodo` is how we refer to the same property as `vm.newTodo` is in the view.

After the new todo is added to the list, AngularJS automatically updates our view to display the new todo and an empty input field.

```js
this.addTodo = function(){
  let todo = {title: this.newTodo, completed: false }
  this.todos.push(todo)
  this.newTodo = ""
};
```

## Services

Frequently, we will want to organize and share data and functionality across our app. Services are AngularJS's way of doing so. There are many services we get [out of the box](https://docs.angularjs.org/api/ng/service/). The following demonstrates **injecting** a service, `$interval` into our controller:

```js
/* global angular */

(function () {
  angular.module('todoApp', [])
  .controller('TodosController', ['$interval', TodosController]) // Added string name of service here (i.e. '$interval')

  function TodosController ($interval) { // Added a parameter to the controller constructor function
    this.todos = [
      { title: 'Build an app with Rails', completed: true },
      { title: 'Project 2', completed: true },
      { title: 'Build an app with Angular', completed: false },
      { title: 'Project 3', completed: false },
      { title: 'Build an app with Express', completed: false },
      { title: 'Build an app with Mongo', completed: false },
      { title: 'Build an app with React', completed: false },
      { title: 'Project 4', completed: false },
      { title: 'Become a Rockstar', completed: true }
    ]

    this.tickTockText = 'tick'

    this.addTodo = addTodo

    function addTodo () {
      const newTodo = {
        title: this.newTodo,
        completed: false
      }
      this.todos.push(newTodo)
      this.newTodo = ''
    }

  }
})()
```
Interval is a wrapper around `window.setInterval` and works very similarly. Let's say we're making our todo list app for people who love being stressed out. We're going to add a feature that toggles a subheading 'tick', 'tock' every half second so the users feels a panicked urgency.

First we'll add the subheading to our template:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Intro</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app="todoApp" ng-controller="TodosController as vm">
    <h1>Todo List</h1>
    <!-- Added sub-heading -->
    <h2>{{vm.tickTockText}}</h2>
    <ul>
      <li ng-repeat="todo in vm.todos">
        <input type="checkbox" ng-model="todo.completed">
        <span ng-style="todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
          {{todo.title}}
        </span>
      </li>
    </ul>
    <section>
      <h2>New Todo</h2>
      <label for="title-input">Title</label>
      <input type="text" id="title-input" ng-model="vm.newTodo">
      <button ng-click="vm.addTodo()">Add</button>
      <p>User input: {{vm.newTodo}}</p>
    </section>
  </body>
</html>
```
In our sub-heading we add an expression to display the value of a `vm` property `tickTockText`.

We need to add to the controller a function that will toggle the `tickTockText` which we'll call `toggleTickTockText`

```js
/* global angular */

(function () {
  angular.module('todoApp', [])
  .controller('TodosController', ['$interval', TodosController])

  function TodosController ($interval) {
    this.todos = [
      { title: 'Build an app with Rails', completed: true },
      { title: 'Project 2', completed: true },
      { title: 'Build an app with Angular', completed: false },
      { title: 'Project 3', completed: false },
      { title: 'Build an app with Express', completed: false },
      { title: 'Build an app with Mongo', completed: false },
      { title: 'Build an app with React', completed: false },
      { title: 'Project 4', completed: false },
      { title: 'Become a Rockstar', completed: true }
    ]

    this.tickTockText = 'tick'

    $interval(toggleTickTockText.bind(this), 500)

    this.addTodo = addTodo

    function addTodo () {
      const newTodo = {
        title: this.newTodo,
        completed: false
      }
      this.todos.push(newTodo)
      this.newTodo = ''
    }

    function toggleTickTockText () {
      this.tickTockText = this.tickTockText === 'tick' ? 'tock' : 'tick'
    }
  }
})()
```
Notice the context binding of `toggleTickTockText`. Because the body of `toggleTickTockText` uses context (`this`) to refer to the controller instance (`vm`) and because when a function or method is passed as a callback it loses its context, we need to bind the context to `toggleTickTockText` when we pass it to `$interval`.

Turns our feature goes beyond eliciting the paniced urgency our users wanted and provokes existential terror so we'll remove it.

### Creating a Service

We register services with a module in a very similar way to controllers. We call the `factory` method on the module with two arguments: (1) a string that names the service and (2) an array that begins with string names of any dependencies that the service uses and ends with a function which when called, returns the service.

```js
/* global angular */

(function () {
  angular.module('todoApp', [])
  .controller('TodosController', ['todos', TodosController])
  .factory('todos', [todosService])

  function todosService () {
    const todos = [
      { title: 'Build an app with Rails', completed: true },
      { title: 'Project 2', completed: true },
      { title: 'Build an app with Angular', completed: false },
      { title: 'Project 3', completed: false },
      { title: 'Build an app with Express', completed: false },
      { title: 'Build an app with Mongo', completed: false },
      { title: 'Build an app with React', completed: false },
      { title: 'Project 4', completed: false },
      { title: 'Become a Rockstar', completed: true }
    ]

    return {
      all: all,
      create: create
    }

    function all () {
      return todos
    }

    function create (title) {
      todos.push({
        title: title,
        completed: false
      })
    }
  }

  function TodosController (todos) {
    this.todos = todos.all()

    this.addTodo = addTodo

    function addTodo () {
      todos.create(this.newTodo)
      this.newTodo = ''
    }
  }
})()
```

Notice that we can chain the call to `.factory` on to the call to `.controller`. In the future we will have independent files for each piece but for now it's convenient to have them in one place.

An important feature of services is that they are **singletons** meaning that only one is created during the lifetime of the application. The function to create that particular service is first time the service is injected into something else (a controller, another service, a custom directive, or a custom filter). From then on, when we inject the same service into any other controller, service, directive, or filter the function is not called again. Instead Angular keeps track of the value the function returned the first time it was called. This means that when one controller changes some values of a service, any other controller with that service injected has access to the values. This lets us pull a lot of state out of controllers and make controllers perform very specific tasks working off of shared data.

To demonstrate, we're going to make an independent `TodoFormController` that will also have the `todo` service injected. First we need to update `index.html` with adding an `ng-controller` directive:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AngularJS Intro</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </head>
  <body ng-app="todoApp">
    <section ng-controller="TodosController as vm">
      <h1>Todo List</h1>
      <h2>{{vm.tickTockText}}</h2>
      <ul>
        <li ng-repeat="todo in vm.todos">
          <input type="checkbox" ng-model="todo.completed">
          <span ng-style="todo.completed ? {'background-color': 'green'} : {'background-color': 'red'}">
            {{todo.title}}
          </span>
        </li>
      </ul>
    </section>
    <section ng-controller="TodoFormController as vm">
      <h2>New Todo</h2>
      <label for="title-input">Title</label>
      <input type="text" id="title-input" ng-model="vm.newTodo">
      <button ng-click="vm.addTodo()">Add</button>
      <p>User input: {{vm.newTodo}}</p>
    </section>
  </body>
</html>
```

```js
/* global angular */

(function () {
  angular.module('todoApp', [])
  .controller('TodosController', ['todos', TodosController])
  .factory('todos', [todosService])
  .controller('TodoFormController', ['todos', TodoFormController])

  function TodoFormController (todos) {
    this.addTodo = addTodo

    function addTodo () {
      todos.create(this.newTodo)
      this.newTodo = ''
    }
  }

  function todosService () {
    const todos = [
      { title: 'Build an app with Rails', completed: true },
      { title: 'Project 2', completed: true },
      { title: 'Build an app with Angular', completed: false },
      { title: 'Project 3', completed: false },
      { title: 'Build an app with Express', completed: false },
      { title: 'Build an app with Mongo', completed: false },
      { title: 'Build an app with React', completed: false },
      { title: 'Project 4', completed: false },
      { title: 'Become a Rockstar', completed: true }
    ]

    return {
      all: all,
      create: create
    }

    function all () {
      return todos
    }

    function create (title) {
      todos.push({
        title: title,
        completed: false
      })
    }
  }

  function TodosController (todos) {
    this.todos = todos.all()
  }
})()
```

It is good practice in AngluarJS to [defer controller logic to services](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#defer-controller-logic-to-services) and [keep controllers focused](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#keep-controllers-focused).


## Bonus: Conditional Rendering

Since AngularJS is so coupled to the view, you will often times run into situations were you want to conditionally render a single / group of element/s. AngularJS provides several different options to quickly embed logic into your templating.

Let's take a look at an example, by adding a new feature to our app. So far our todo list application is coming along nicely, but it would be really great if we could only show the todos that are not yet completed.

### [`ng-show`](https://docs.angularjs.org/api/ng/directive/ngShow)

If we wanted to display only the todos that have a `completed` value of `true`, we can take advantage of the directive `ng-show`:

Let's add it to our view in `index.html`:

```html
<body ng-controller='TodosController as vm'>
  <h2>Todos</h2>
  <div ng-repeat="todo in vm.todos" ng-show="todo.completed">
    <p>{{$index + 1}}. {{todo.name}} - {{todo.completed}}</p>
  </div>
</body>
```

> `ng-show` takes any truthy or falsey value as an argument, and if it evaluates to true - the element will be displayed, otherwise the element is set as display:none.

### [`ng-hide`](https://docs.angularjs.org/api/ng/directive/ngHide)

In our case, we only want to see todos which have a value of `false` for their `completed` property.
To do this, we should use `ng-hide`, which is the inverse of `ng-show`:

```html
<body ng-controller='TodosController as vm'>
  <h2>Todos</h2>
  <div ng-repeat="todo in vm.todos" ng-hide="todo.completed">
    <p>{{$index + 1}}. {{todo.name}} - {{todo.completed}}</p>
  </div>
</body>
```
