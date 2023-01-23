# Javascript Constructors

## Whiteboard image

![](https://i.imgur.com/xCVNEXz.jpg)

Can be used to illustrate how defining the method inside the constructor would
produce copies of the function inside each instance. it also can help
illustrate why each instance needs its own name and alias that they don't want
to share with each other.

whereas if we define the method on the constructor's prototype, each instance
could look back to the prototype's method.

## module.exports

Before the bulk of this lesson, it would be nice to do a small walkthrough of
how to work with module.exports. Here's an example:

```js
module.exports = 'just a string'
---------
// in node
> let thatString = require('./lib/filename.js')
> thatString
// => 'just a string'
```

```js
module.exports = user
---------
// in node
> let nowItsAnObject = require('./lib/filename.js')
> nowItsAnObject
// => {
//      name: 'Christoper Robin',
//      email: 'wdi@christopherRobin.com',
//      ...
//    }
```

```js
module.exports = {
  user: user,
  Runner: Runner,
  Run: Run
}
---------
// in node
> let objectHasMultipleAttrs = require('./lib/filename.js')
> // => {
> //      user: {
> //        name: 'Christoper Robin',
> //        email: 'wdi@christopherRobin.com',
> //        ...
> //      },
> //      Runner: function [Runner],
> //      Run: function [Run]
> //    }
```

## Delivery Notes

Consider a step-by-step walkthrough of the hero constructor function, probably
using the `node` shell.
