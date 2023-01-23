[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Constructors and Prototypes

## Prerequisites

- [ga-wdi-boston/js-objects-this](https://git.generalassemb.ly/ga-wdi-boston/js-objects-this)

## Objectives

- Use a constructor function to produce objects of a particular type.
- Attach properties to a new object using the constructor.
- Recall the cost of defining methods inside a constructor function.
- Define methods on custom objects by attaching them to the prototype.

## Preparation

1. Fork and clone this repository. [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Change to the new directory.
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Constructors

Now that we're getting comfortable using objects to solve problems, we can take
a look at a common way of creating many objects with the same format. Consider
making an application that represents a university. Many students go to that
university, and we need objects for each one. We could write these objects from
scratch, but there's a pattern here. Each student will need the same general
information (name, address, major, etc.), so it makes sense that we might want
to build something to create these student objects based on a given format. In
JavaScript, the way that we "construct" objects in this way is with
constructors.

You could think of these constructors as special functions that work as an
'object factory', designed to construct objects of a particular type.

Suppose we had the following object describing a favorite comic book hero:

```js
const batman = {
  name: 'Bruce Wayne',
  alias: 'The Bat-man',

  unmask: function () {
    return 'The Bat-man is really Bruce Wayne!'
  }
}
```

And now we want another object describing a different hero:

```js
const wonderWoman = {
  name: 'Diana Prince',
  alias: 'Wonder Woman',

  usePower: function () {
    return 'Wonder Woman is really Diana Price!'
  }
}
```

These hero objects share the same properties, however we are writing them brand
new, essentially repeating ourselves with slightly different hard-coded values.

Why might this not be a good way of building these objects?

One reason is that *code duplication can be a major source of errors in software
development*, and it makes it harder to track down and fix those errors when
they occur.  Another important reason is that it makes our code less efficient.
Because of this, writing [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
code is considered a best practice.

Constructors will help us write "dryer" code by allowing us to generate these
objects rather than write them over and over.

### Lab: Model a Hero

What features do `batman` and `wonderWoman` share?  Remember to think about
properties and methods when you're modeling. Also take note of what differs
between them.

Make a diagram of our `Hero` entity based on the above objects.

### Demo: Constructors

Using **constructor functions** helps us to write code that adheres to the
principles of DRY.

Constructor functions:

- Always start with a capital letter (convention).
- Are always used with the `new` keyword (self-enforced).

Bad things happen when you break these rules.

Let's make a Hero constructor function. We'll make use of the function to
reduce duplication in our objects, while allowing the difference to vary by
only defining the differences when we *construct* the new object.

```js
const Hero = function (name, alias) {
  this.name = name
  this.alias = alias
  this.unmask = function () {
    return this.alias + ' is really ' + this.name + '!'
  }
}
```

`const` is just like `let`, except `const` will not let you re-assign a value
to the same name.

```js
const foo = 'bar'
foo = 'baz' // explode!
```

What does my choice of `const` tell you about my expectations for constructor
functions?

We defined a method inside the `Hero` constructor, but doing that is a bad
idea. JavaScript allows it, but **don't do it**. We'll see the right way to
achieve a near identical and preferred result shortly.

Now, let's create `wonderWoman` using the constructor function instead of an
object literal:

```js
const wonderWoman = new Hero('Diana Prince', 'Wonder Woman')
//=> undefined

wonderWoman
/* => { name: 'Diana Prince',
  alias: 'Wonder Woman',
  unmask: [Function] }
  */
```

`new`, a JavaScript keyword, does the following, in order:

1. Creates an empty object (`{}`).
1. Attaches the constructor function to the object as a property.
1. Invokes the constructor function as a method on the object.
1. Returns the object.

A new object created this way is sometimes called an 'instance' of type `Hero`.

### Lab: Refactor Object Literals Using Constructors

Refactor the run tracker code from the previous lesson to use constructor
functions instead of copying properties between object literals. Do your work
in [the lib/runs.js file](lib/runs.js).

There are tests for the lab which can be run with `grunt test`.

You should take the `user` object and move some of the code into the `User`
constructor function, and some of the code into the `Run` constructor function.
You should remove or comment out the `console.log` statement when you are ready
to run the tests.

## Prototypes

In the previous section, we saw how to use constructors to deduplicate effort
in creating new objects that share properties. We learned that we should never
define a method inside a constructor function, because we will end up with a
copy of that function inside every instance. So how should we get behavior in
our custom objects?

### Code Along: Add Methods to the Prototype

1. Create `unmask` and attach it to the constructor function's prototype.
1. Create another method, `fightCrime`, and attach it to the
   prototype.
1. Create `batman` and `wonderWoman`. Call the above methods on your new instances of `Hero`.
1. Observe that this method isn't part of objects created using the constructor
   function.

### Lab: Add Methods to the Prototype

Change the run tracker code you made in the [previous lab](./lib/runs.js) to
use prototypes.

There are tests for the lab which can be run with `grunt test`.

## Additional Resources

- [MDN - Object.prototype.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [Why to Set Methods on Prototypes](https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)
- [Master the JavaScript Interview](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
- [Oreilly : The Constructor Pattern](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s01.html)
- [MDN - Understanding Prototype Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#Understanding_prototype_objects)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
