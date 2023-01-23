# Study: Modules in Node and JavaScript

Modules are valuable to our ability to organize our code on several levels.
You're already familiar with modular code from Ruby and from using the
browser-template, where your application code was split into many files, which
were all executed as part of one process.

## Interfaces

Modules let us choose what we expose. The module patterns we will explore all
have this in common. This is the core purpose of a module. It allows you to hide
details that are not necessary for a user to know, such as implementation
details and module internals that are best left to their own devices.

The other side of this coin is that it also lets us expose a collection of
properties and methods called an **interface**. This is the part of the
libraries we use that we can see. We often call this an API, short for
*application programmable interface*.

## Abstraction

By writing a module to fulfill a purpose, we save ourselves the trouble of
doing those tasks directly elsewhere in our code where we need it. It allows
us to write simple code using the module's interface that is more easily
checked for correctness.

## Simplification

Modules (usually) spare you the trouble of having to read someone else's
code in order to use it. If we are given good documentation for the exposed
interface, we never have to read how they implemented it, provided it is
working as intended.

## Module Patterns

Study the following example patterns. They are intentionally ambiguous in order
to highlight the general application of the pattern. Studying these patterns
should get you warmed-up for completing the labs that follow.

### Constructor Pattern

```js
function ModuleFactory (args) {
  let variable = someTransformationOf(args)

  return {
    property: value,
    getterMethod: function () {
      // has access to `variable` above
      return variable
    },
    setterMethod: function (value) {
      // has access to `variable` above
      variable = value
    }
  }
}

const myModule = ModuleFactory(someArgs)
// How would you use the getter and setter methods? What would they do?
```

### IIFEs

> An IIFE (pronounced "iffy") is an Immediately Invoked Function Expression.
A undressed, unembellished, inline module:

```js
const myModule = (function (arg, transform) {
  // secret internals
  let value = arg

  // exports
  return function () {
    // has access to secret internals!
    value = transform(value)

    return value
  }
})(someValue, someFunction)

// How would you use myModule?
```

From outside, we can't access the variable `value` inside the module. This is
the hiding bit we were talking about. However, we do get a return value, which
is a function in this case. It can just as easily be an array or an object
with many properties. Note that the function we built inside the module has
access to the `value` variable even after being exported.

## Modern Modules

There are still some use-cases for IIFEs, however there are other ways to
implement modules these days. This mostly refers to the ways that we can
`import` and `export` modules with special syntax.

ECMAscript standardized `import`ing and `export`ing modules in the browser,
however CommonJS syntax is also very common.

Read the following articles to learn more about the differences between
CommonJS and ES modules and answer the questions below:

- [NodeJS Modules](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)
- [ES Modules](https://flaviocopes.com/es-modules/)
- [Require vs Import](http://researchhubs.com/post/computing/javascript/nodejs-require-vs-es6-import-export.html)

1. What are the main differences between using CommonJS and ES6 module syntax?

```md

```

2. Discuss in what situations you might want to use CommonJS vs ES Modules

```md
<!-- your answer here -->
```

### `import` & `export` vs `module.exports` & `require`

```js
// lib/module.js
export default num => return num++

// app.js
import increment from './lib/module.js'
console.log(increment(5))
```

vs

```js
// lib/module.js
const increment = num => return num++
module.exports = increment


// app.js
const increment = require('./lib/module.js')
console.log(increment('hi'))
```

## Lab: Exploring Modules in Node (CommonJS Standard)

Node modules are your principal means of including external libraries, core
libraries, and other files you've written to be part of the same application.
Creating and using node modules is a great way to separate concerns and keep
your code DRY.

Use `common.js` to build your module. The comments will light the way. Use
`index.js` to load up `common.js` and utilize it. Run `index.js` using
`node lib/index.js` in your terminal.

### Notes

`require` is a function provided to you in the global namespace under Node. It
is used for loading a module for use in the current script or module. It takes a
string and returns a module.

Initially, your module will have two names for one object: `module.exports` and
`exports`. By convention, and for practical reasons, exporting is done one of
two ways:

1. Assigning properties to `exports`: `exports.property = value;`
1. Overwriting `module.exports`: `module.exports = {}`

The reasons why are detailed in the comments in `common.js`.

## Comparing Node Modules with Inline Modules

While the two module patterns we worked through above are different in
appearance, they are the same in functionality. Some module libraries, in
fact, use the inline module pattern above to modularize scripts.

While they are similar insofar as making and exposing a module goes, CommonJS
stands apart by also managing modules in a node application. CommonJS modules
are **singletons**, which means that they are only loaded once by `require`.

This presents the benefit of modifying `require`d modules in one file, and
having the changed module in other files that use it.

## Response

Open a pull request with your response. It should include this file and your
commits from the Exploring Modules lab (at least one commit).

## Additional resources:

- [NodeJS, TC-39, and modules](https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e)
- [Everything You Need To Know About Requiring Node Modules](https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)
