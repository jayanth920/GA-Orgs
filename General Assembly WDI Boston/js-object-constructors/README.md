[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Constructors

## Prerequisites

- [ga-wdi-boston/js-objects-this](https://git.generalassemb.ly/ga-wdi-boston/js-objects-this)

## Objectives

- Use a constructor function to produce objects of a particular type.
- Attach attributes to a new object using the constructor function.
- Recall the cost of defining methods inside a constructor function.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Change to the new directory.
1. Install dependencies with `npm install`.
1. Create and checkout a new branch, `training`

## Similar Objects

Now that we're using objects to solve problems, it might make sense to have a
way to make multiple objects with the same kind of format - an 'object factory',
designed to construct objects of a particular type.

Suppose we had the following object describing a favorite comic book hero:

```js
const batman = {
  name: 'Bruce Wayne',
  alias: 'The Bat-man',

  usePower: function () {
    return 'Spend money and hit people'
  }
}
```

And now we want another object describing a different hero:

```js
const wonderWoman = {
  name: 'Diana Prince',
  alias: 'Wonder Woman',

  usePower: function () {
    return 'Deflect bullets with bracelets'
  }
}
```

Why is this not a good answer?

Because *copy-and-paste reuse is one of the biggest sources of errors* in
software development.

## Lab: Model a Hero

What features do `batman` and `wonderWoman` share?  Remember to think about
attributes and methods when you're modeling.  Also take note of what differs
between them.

Make a diagram of our `Hero` entity based on the above objects.

## Demo: Constructors

JavaScript's answer to the copy-and-paste reuse problem is **constructor
functions**.  Constructor functions:

- Always start with a capital letter (convention).
- Are always used with the `new` keyword (self-enforced).

Bad things happen when you break these rules.

Let's make a Hero constructor function. We'll make use of the function to
reduce duplication in our objects, while allowing the difference to vary by
only defining the differences when we *construct* the new object.

```js
const usePower = function () {
  return this._power
}

const Hero = function (name, alias, power) {
  this.name = name
  this.alias = alias
  this._power = power
  this.usePower = usePower
}
```

It is conventional to use a leading underscore (`_`) on a property name to
indicate to future developers that the property is **not** intended for direct
access or assignment. Nothing in JavaScript enforces this convention, but
developers should consider any property with a leading underscore *private* to
the object (not accessible from the outside).

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
const wonderWoman = new Hero('Diana Prince',
                           'Wonder Woman',
                           'Deflect bullets with bracelets')
//=> undefined

wonderWoman
/* => { name: 'Diana Prince',
  alias: 'Wonder Woman',
  power: 'Deflects bullets with bracelets',
  usePower: [Function] }
  */
```

`new`, a JavaScript keyword, does the following, in order:

1. Creates an empty object (`{}`).
1. Attaches the constructor function to the object as a property.
1. Invokes the constructor function as a method on the object.
1. Returns the object.

A new object created this way is sometimes called an 'instance' of type `Hero`.

## Lab: Refactor Object Literals Using Constructors

Refactor the run tracker code from the [previous lesson](https://git.generalassemb.ly/ga-wdi-boston/js-objects-this) to use constructor functions instead of copying properties between object literals.

There are tests for the lab which can be run with `grunt test`

You should take the `user` object and move some of the code into the `User`
constructor function, and some of the code into the `Run` constructor function.
You should remove or comment out the `console.log` statement when you are ready
to run the tests.

## Additional Resources

- [Object.prototype.constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
