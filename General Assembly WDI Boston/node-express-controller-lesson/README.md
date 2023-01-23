# Express with Controllers

## Lesson Objectives

After this lesson, students should be able to...

* Explain the benefits of putting route handlers in controllers
* Separate their route handlers into controller modules
* Import controller modules into their routes file(s)
* Attach route handlers to their intended route and method

## Terminology

Here's something you might see in an express routes file:

```js
'use strict';

var router = require('express').Router();

router.route('/').
    get(function(req, res) {
        res.json({});
    });
```

In this document, we will use the following terms 
regularly:
* router
* route
* route handler

For clarity, the following code segment will define 
these terms by assigning parts of the above code to 
variables with the above names:

```js
'use strict';

var router = require('express').Router();

var route = router.route('/');

var routeHandler = function(req, res) {
    res.json({});
};

route.get(routeHandler);
```

## Why create controllers?

Creating controllers to store your route handlers 
is considered a best practice because it helps 
separate your concerns. If you are not using 
controllers, then your routes file includes both 
your routing logic and your controller logic.

The chief benefit of this practice, then, is that 
when there's a routing problem, you can look at 
just your routing logic. When a route handler is 
doing something wrong, you can look at just your 
handler.

## How to create a controller

First, note that these are not your Rails-style 
controllers. What we're calling a controller here 
is just a storage bin for route handlers. This 
means that creating a controller can range from 
very easy to not that challenging, depending on 
what level of sophistication you demand.

### Very basic controller object

First, let's look at the most basic controller 
you can create. Open up 
**controllers/examplePOJOController.js** in 
Sublime.

Notice how it's just an object literal with four 
methods.

### Controller class

Now, let's look a slightly more sophisticated 
controller. Open up 
**controllers/exampleController.js** in Sublime.

Right off the bat, we can see it's an instance 
created by the `Controller` constructor function. 
It's clear that this file is only painting a 
partial picture.

Notice that the code in this file invokes a setter 
method on the `Controller` instance to register 
handlers for two HTTP methods. It then exports 
the instance so it can be `require`d elsewhere.

Now, let's look at the constructor. Open up 
**controllers/Controller.js** in Sublime.

#### Squad discussion

Get into your squads and take 5 minutes to 
read and comprehend the contents of the file 
you just opened. After 5 minutes, I'll ask 
one or two squads to share their findings.

## Connecting controllers and routes

Take a look at **routes/index.js**. Our first 
example of a controller is already connected 
with our root (`/`) route.

### Squad discussion

Take 5 minutes with your squadmates to examine 
how the first example controller is connected to 
that route and how you can connect the second 
example controller to another route, `/ex2`. A 
squad may be chosen to present their code.

### Demo

Link up the second controller example to the 
routes for the class to follow.

