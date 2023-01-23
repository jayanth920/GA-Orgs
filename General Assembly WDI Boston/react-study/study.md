# Reactjs Study

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

## Modern JavaScript

JavaScript has evolved quite a bit in the last five years, and Reactjs projects
typically make heavy use of the language's newer features and conventions. We
want to make sure you're comfortable writing modern JS before we get into
Reactjs.

Many of these new features were introduced in the ECMAScript 2015 language
specification, more commonly known as ES6. ES6 is now used widely in modern web
development, both front-end and back-end. Modern browsers now support nearly
100% of these ES6 features, but it's still common to use a transpiler like Babel
to convert ES6 syntax into older, more universally supported JS syntax. You
don't need to worry about that step for now though. Let's dive right into these
useful new features.

### Arrow Functions

"function", "function", "function"... Are you tired of writing that word? So
are we. The arrow function `=>` is a more concise syntax for declaring
functions. It looks like a little rocket arrow, in fact, and something that
cool isn't usually in JavaScript. Arrow functions are not _only_ different in
syntax, however - their scope is also different from a regular `function`
declaration.

#### This binding - and the lack thereof

In non-arrow functions, every function defines its own `this`. There are tons of
hacks to preserve the context, like `var that = this` and using `.bind(this)`.
The following code might look familiar:

```js
function eatBreakfast (pancakes) {
  var that = this
  that.food = 'Knife please?'
  Waiter.bringCutlery(function (silverware) {
    that.food = silverware
  })
}
```

Another popular variant is `var self = this`. Whatever hack you've been using,
you don't need to do it anymore!

Arrow functions don't change the definition of `this`. So, if `this` is already
defined in the scope, and you call an arrow function, you can access `this`
directly.

```js
// Original function
function eatBreakfast (pancakes) {
  var that = this
  that.food = 'Knife please?'
  Waiter.bringCutlery(function (silverware) {
    that.food = silverware
  })
}

// Equivalent arrow function
const eatBreakfast = pancakes => {
  this.food = 'Knife please?'
  Waiter.bringCutlery((silverware) => this.food = silverware)
}
```

> Check it out - the arrow function can be used anywhere you declare a function!

### ES6 Class Syntax

You're probably aware that unlike traditional object-oriented programming
languages, JavaScript uses prototypal inheritance. If you need a refresher on
what that means, have a glance at [this](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance).

Basically, it means that we can create something similar to a class by creating
a constructor function. We can add methods by modifying that function's
`prototype` property. If we wanted to create `Food` class, we could do this:

```js
const Food = function (name, flavor) {
  this.name = name
  this.flavor = flavor
}
```

To instantiate our `Food` class, we call that constructor function with the
`new` keyword, like so:

```js
const burrito = new Food('burrito', 'savory and delicious')
```

If we wanted to give it a method, we'd do that by adding it to the constructor's
`prototype` property:

```js
Food.prototype.eat = function () {
  console.log(`Mmmm... that tasted ${this.flavor}`)
}
```

That's a bit verbose and very different from classes in OOP languages like Ruby.
But wait, enter ES6! JavaScript now has a class syntax built in which still uses
prototypal inheritance under the hood, but provides a much nicer and more
familiar syntax to create classes. We can re-write all the above code like
this:

```js
class Food {
  constructor (name, flavor) {
    this.name = name
    this.flavor = flavor
  }

  eat () {
    console.log(`Mmmm... that tasted ${this.flavor}`)
  }
}
```

Skim through [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
to get a sense of how to use this new `class` syntax.

### Import/Export and Modules

In ES6, you can import modules directly without declaring them as global
variables. This makes namespacing your app a non-issue. Before module imports,
namespace was often a primary concern in JavaScript.

So, if you want export the `addTwo` function as a module, you can create a file
called "addTwo.js":

```js
const addTwo = num => num + 2

export default addTwo
```

And in another file, say "app.js", you can import it:

```js
import addTwo from './addTwo'

addTwo(3) // 5
```

You can also export multiple modules from a file, like so:

```js
// in arithmetic.js
export const addTwo = num => num + 2

export const addThree = num => num + 3
```

And somewhere else:

```js
import { addTwo, addThree } from './arithmetic'
```

### Spread Operator

The spread operator (`...`) is one of the most popular new features in
Javascript. This operator can be used on any iterable object in Javascript,
with iterables being anything that can be looped over such as strings and arrays.

So what does the spread operator do? Well, it allows an *iterable* to spread or
expand individually inside a *receiver*. We need both pieces, the iterable and
receiver, in order for the spread operator to work.

Take a look at these examples:

```js
console.log(...'my string') // logs ['m', 'y', 's', 't', 'r', 'i', 'n', 'g']

const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]
console.log(arr2) // logs [1, 2, 3, 4, 5]
```

In the string example, the string `'my string'` is the iterable, and the
`console.log` method is our receiver.

In the array example, `arr1` is the iterable we are using the spread operator
on, and the receiver is `arr2` that we are putting `arr1` into.

To read more on the spread operator check out [this article.](https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831)

## Reactjs

Now that we have the JavaScript tools in our belts, lets take a look at the
Reactjs homepage to get an introduction to this powerful technology.

### Required Readings

- [The Reactjs Homepage](https://reactjs.org/)
- [Reactjs Main Concepts - Hello World](https://reactjs.org/docs/hello-world.html)
- [Reactjs Main Concepts - Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Reactjs Main Concepts - Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

### Required Installation: React Developer Tools

The regular Chrome inspector can still be useful to us when working with React,
but it has some limitations. For one, it won't show us which components were
looking at. Also, once we start to use props and state in our applications,
we'll want a way to view those directly.

There's a Chrome extension called [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
that can help us achieve all that and more! Let's install it now, then we can
use it to inspect the apps we build later.

## Questions

What is a Front-End Framework and why do you think they are popular amongst
modern web developers?

```md
<!-- your answer here -->
```

How is Reactjs different from other frameworks and why is it so
frequently used?

```md
<!-- your answer here -->
```

What is JSX and how does it help Reactjs developers?

```md
<!-- your answer here -->
```
