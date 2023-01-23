# JS Components

## Learning Objectives

- Define what a 'ui component' is in JS
- Describe the advantages to a component-based approach
- Build and use a component with `initialize` and `render` methods

## Intro - The Problem w/ Procedural Code

It's very common when building apps to encounter cases where we want to build
re-useable components of our UI. Examples might include a facebook post display
(which always shows things like the author, content, like buttons, and comments),
or a card in trello (which can be clicked to see details like comments, checklists, etc).

This re-useability is difficult to achieve without taking advantage of OOP to
build multiple instances of components, and to store the *data* for each instance
along-side the methods that use it.

### Exercise - Update Cash Register

Clone and checkout the `solution-procedural` branch of the [cash register](https://github.com/ga-wdi-exercises/cash-register/tree/solution-procedural) exercise.

You've been given the task of updating this code so our page can have **two**
(perhaps more in the future) independent cash registers on the page at once.

Go ahead and read through the current solution and take 15 minutes - do your
best to update the page to include two registers.

## Basics of Components

A UI component in JS is a pattern for building an object that represents data and
knows how to display it on the page. In this pattern, a component is an *object* that has at least two methods:

- `initialize`, which sets up the initial state of the component, and associates
it with an element the DOM (it's so-called *el*, short for element).
- `render` which populates the HTML inside it's *el*.

It may have as many additional properties to store data and methods as necessary
to achieve it's goal.

## Demo - A Simple Component

Here's an example of a simple component. It does nothing but render a message
into a `div`, but it shows the fundamental steps in building a component.

```js
var component = {
  domElement: null,
  initialize: function(container) {
    // create a dom element
    this.domElement = $('<div>');
    // attach it
    container.append(this.domElement);
  },
  render: function(statusText) {
    // update the dom element
    this.domElement.html(statusText);
  }
};

component.initialize($("#comp_demo"));
component.render("This is a test!");
// component.render("This is a another test!");
```

### Exercise - Refactor into a Constructor Function

Take 15 minutes to refactor the above code to use a constructor function
instead. Once you have a working constructor function, update the page to
include two differnt instances of the component with different messages.

[Starter Code](https://github.com/ga-wdi-exercises/simple_component)

## jQuery `find` / `closest`

Take a few minutes to read the jQuery docs on `find` and `closest`. How do you
think these methods will help us build components? (`find` in particular is important.)

## `.bind`

So far, we've dealt with broken context in event listeners by using a technique
like `var self = this;`. It turns out there are cases where that's not so
useful.

The most common case where `self` doesn't work is when our callback function
isn't an inline anonymous function. If instead, the function is a named function
that we reference, `self` won't be in scope in the named function.

The solution here is to `bind` the function. `bind` sets the value of this to be
whatever we specify, no matter where it's executed. Here's an example of what
that might look like:

```js
form.on("submit", this.addRegisterEntry.bind(this));
```

It may be confusing to read, but the basic idea is, take whatever the current
value of `this` is (in our case, it should be the component object), and lock it
in so that when the `addRegisterEntry` method is called, `this` *still* means
the component object, and *not* the global window object.

### Mini Exercise - using `.bind` & `.find`

Checkout the `starter-jquery-find` branch of the simple component demo.

[Starter](https://github.com/ga-wdi-exercises/simple_component/tree/starter-jquery-find)

Notice how it's broken in 2 ways:

1. Multiple components seem to show the same data.
2. The alert button is broken.

Fix both of these issues! (Note you *only* need to edit the `render` function's code).

## Main Exercise - Cash Register w/ Components

We'll spend the rest of the afternoon converting our cash register code to use
a component-based approach.

I recommend starting using the `solution-procedural` branch so you don't have to
write all the code from scratch.

If after 20 minutes you're not feeling like you're making progress, take a look
at the [starter-components branch](https://github.com/ga-wdi-exercises/cash-register/tree/starter-components).
