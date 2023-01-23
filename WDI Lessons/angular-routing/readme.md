# Angular and UI-Router

## Learning Objectives

- Explain what dependency injection is and what problem it solves
- Explain the purpose of templates in Angular
- Use the `ui-view` directive to load angular templates
- Use `$stateProvider` and `$state` to access query parameters and update the URL

## Framing (15 minutes)

So far we've been learning about Angular and its awesome power as a front-end framework that allows us to easily build Single Page Applications (SPAs).  

**Q**: What are some of the characteristics of SPAs?

> Single Page Applications are web applications that load a single HTML page and dynamically update that page as the user interacts with the application. SPAs use AJAX (asynchronous Javascript and XML) and HTML5 to create fluid and responsive web applications, without constant page reloads.

### Turn and Talk: Problems with SPA's (5 minutes)

Take 5 minutes to brainstorm any potential problems with single page applications and write a short list with your neighbor.

---

### [Common Problems with SPA's](https://github.com/ga-wdi-lessons/angular-routing/blob/master/common-problems-with-spas.md)

Many of the common problems with single page applications have to do with the idea of managing navigation in an app with fluid state. This is most evident with issues related to **bookmarking** and **deep linking**.

### Application State Exemplified

In order to get a better grasp of what we mean by an application's state, let's take a look at a prolific single page application in the wild, [Trello](https://trello.com/).

Trello is a productivity management tool, that allows a user to have many different "boards" with each "board" is made up of different "lists" and each "list" containing many "cards", or items in a list.

Let's play around with a board, and see what happens to the url when we interact with the application.

## [Angular UI-Router](https://github.com/angular-ui/ui-router) to the Rescue

Today, we are going to be looking at one wildly popular solution in Angular to help address the problems we've uncovered with single page applications.

Specifically, Angular UI-Router is a client-side single page application routing framework that updates the browser's URL as the user navigates through the application.

As a result, this allows changes to the browser's URL to drive navigation through the application and in turn allows the user to create a bookmark to a location deep within the single page application.

## Let's Build an Angular Application

Today, we are going to build off of what we learned in the intro class, and represent state utilizing `ui-router`.

## We Do: Stoplight!

```
$ git clone https://github.com/ga-wdi-exercises/angular-ui-router-stoplight.git
$ cd angular-ui-router-stoplight/
$ npm install -g http-server
$ hs
```

Now, go to http://localhost:8080/

### What Works So Far?

Clicking on a bulb illuminates the correct color.

### What We'll Do

- Update the URL when clicking on a bulb
- When the page loads, show the color corresponding to the URL
- Let the router decide which controller to use
- Create a `ui-view`

#### Inject the `ui.router` Dependency

```js
angular.module("stoplight", ["ui.router"])
```

##### Dependency Injection

The process of requiring dependencies in Angular is called **dependency injection**. It's an extremely important part of Angular since this framework is all about modules being dependent on other modules.

***Q:*** What happens if we were to remove the Array all together?

>We get an error. In order to create a module we have to specify the number of dependencies it has, even if that number is zero.

***A `.module` with an array creates a new module; without an array it looks up an existing module of that name.***

[Bonus! Use strict && IIFEs](styleguide.md)

###### Configuring ui.router

Remember in Rails we had a `config/routes.rb` file with all of the routes defined in it. Here, we put the `routes` inside a `.config` definition.

Let's add `.config` to our `app.js`:

```js
angular
.module("stoplight", ["ui.router"])
.config(["$stateProvider", RouterFunction])

function RouterFunction($stateProvider){
  console.log('Router setup correctly')
}
```

###### `$stateProvider`

A **state** in Angular is basically a route: it's an umbrella term for a URL, the view associated with it, and any controllers used in that view.

Modify the `RouterFunction` function to look like this:

```js
function RouterFunction($stateProvider){
  $stateProvider
  .state("color", {
    url: "/:color"
  });
}
```

We've just defined the first **state**. Remember, we said earlier that a state is a lot like a route in Rails: it's a URL, often with an associated view and controller.

In our browser, let's visit `http://localhost:8080/#/red`.

..and we shouldn't see anything exciting.



###### Let the State Choose the Controller

```js
function RouterFunction($stateProvider){
  $stateProvider
  .state("color", {
    url: "/:color",
    controller: "stoplightController",
    controllerAs: "vm"
  });
}
```

###### Update the url on click

Add `$stateParams` and `$state` as dependencies to `stoplightController`

```js
.controller("stoplightController", ["$state","$stateParams", stoplightControllerFunction])
//...
function stoplightControllerFunction($state, $stateParams){
  this.bg = $stateParams.color
  this.colors = ['red', 'yellow','green']
  this.turn = function(color){
    $state.go("color",{color: color})
    this.bg = color
  }
}
```

###### `ui-view`

Let's replace the `ng-controller` with `ui-view`:

```html
<div ng-controller='stoplightController as vm'>
<!-- should be: -->
<div ui-view>
```

`index.html` is now like the `application.html.erb` file we had in Rails.

One thing we should talk about is how we can do templating and partials in Angular. Let's take our existing application and have a template render the view instead of having it in our `index.html` First let's create a view:

```bash
$ touch stoplight.html
```

Then lets import code pertinent to the stoplights from `index.html` to `stoplight.html`

Take the following code:

```html
<div id="traffic-light">
  <div
  ng-repeat="color in vm.colors"
  ng-click="vm.turn(color)"
  ng-style="{background: vm.bg}"
  ng-class="{ 'off': vm.bg != color }"
  ></div>
</div>
```

Remove the code from `index.html` and place it in `stoplight.html`. Then finally include a `templateUrl` as a property of the state:

```js
.state('color', {
  url: '/:color',
  controller: 'StoplightController',
  controllerAs: 'vm',
  templateUrl: 'stoplight.html'
})
```

---

## [You Do: Grumblr](https://git.generalassemb.ly/pages/ga-wdi-lessons/angular-routing/lab.html)

## Sample Quiz Questions

- What's the difference between `.module("myModule")` and `.module("myModule", [])`?
> The first retrieves an existing module; the second creates a new module.

- What's an Angular "state"?
> A URL with an attached template, and usually a controller.

- Why does a state need both a `controller` and a `controllerAs` parameter?
> The first says which controller should be used; the second says into which variable its new instance (view model) should be saved.

- How many views should be managed by one controller?
> Just one: one view, one controller.

- What's the equivalent of `<%= yield %>` in Angular?
> `ui-view`

## Further Reading

- [Angular under the hood](angular-under-the-hood.md)
  - It was originally going to be part of this class, but is maybe a bit tangential -- although pretty cool if you want to get more into the guts of this thing!
- [UI Router Official Resources](https://github.com/angular-ui/ui-router#resources)
- [UI Router Docs](https://github.com/angular-ui/ui-router/wiki)

## Screencasts

- Dec 15, 2015, (Robin)
  - [Part 1](https://youtu.be/FurQ9FGzJwk)
  - [Part 2](https://youtu.be/CtV0ULLlLf0)
