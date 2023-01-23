# Javascript Constructors

## Whiteboard image

![](https://i.imgur.com/xCVNEXz.jpg)

Can be used to illustrate how defining the method inside the constructor would
produce copies of the function inside each instance. it also can help
illustrate why each instance needs its own name and alias that they don't want
to share with each other.

whereas if we define the method on the constructor's prototype, each instance
could look back to the prototype's method.

### ERD

![img_20190805_121634010](https://media.git.generalassemb.ly/user/5694/files/7f3d5900-b77e-11e9-9840-0b5dd2d4feaa)


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
//      email: 'sei@christopherRobin.com',
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
> //        email: 'sei@christopherRobin.com',
> //        ...
> //      },
> //      Runner: function [Runner],
> //      Run: function [Run]
> //    }
```

## Delivery Notes

Consider a step-by-step walkthrough of the hero constructor function, probably
using the `node` shell.

## Visuals

### Car Constructor Visuals:

![Screen Shot 2020-05-26 at 11 43 18 AM](https://media.git.generalassemb.ly/user/3667/files/baf41a00-9f6e-11ea-874b-a319f1f92a72)

![Screen Shot 2020-05-26 at 11 46 46 AM](https://media.git.generalassemb.ly/user/3667/files/bb8cb080-9f6e-11ea-927b-eea7b8e6fd45)
