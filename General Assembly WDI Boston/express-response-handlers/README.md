![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Express: Response Handlers

## Objectives

- Define request and response objects.
- Compare request and response objects in the express and http modules.
- Compare routes and handlers.
- Contrast terminal and non-terminal handlers.
- Follow a handler chain to completion.

## What A `req`: Handlers and Handler Chaining

With every route is a handler function which determines how the app will respond to any given request. A response handler is a callback that gets triggered when a request is made that matches a VERB and URL that express knows about.

What do handlers and callbacks remind you of?

In express, a handler will usually take three arguments, but some take two or four. The three arguments to an ordinary express handler are **req**, which is the HTTP request object that came from the user; **res**, which is the HTTP response object being prepared by express; and **next**, which is a callback.

The req object is a [http.IncomingMessage](https://nodejs.org/api/http.html#http_http_incomingmessage)  object. This is what we used in the simple HTTP node server.

The res object is [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) object. Also used in the simple HTTP node server

You may have noticed that even though we said handlers could have three arguments, the ones we have used so far only have two. This is because they are **terminal** handlers:  they contain a statement in them that indicates that our processing of the request is done and the server should send a response.  Terminal handlers do not have a next function for that reason.

Some of the statements that end processing are here:

| Response method      | What it means                                                                         |
| :------------------- | :------------------------------------------------------------------------------------ |
| `res.end()`          | End the response process.                                                             |
| `res.json(jsObject)` | Send a JSON response.                                                                 |
| `res.redirect()`     | Redirect a request.                                                                   |
| `res.sendStatus()`   | Set the response status code and send its string representation as the response body. |

Of course, if some handlers are terminal, that means others must be non-terminal; in express, non-terminal handlers are _chainable_ - the program can flow from one handler to the next. The ability to chain handlers is part of what makes express so powerful and flexible despite its bare-bones simplicity.

## Exercise: Explore Handlers

**Generate** a new express app and define the following routes to a `contacts` module. Use that module in `app.js`. Notice how each response handler is attached to the same route.

```javascript
// routes/contacts.js

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!res.locals.contacts) {
    res.locals.contacts = [];
  }
  next();
});

router.get('/', function(req, res, next) {
  // add first group of contacts (from iPhone/iCloud?)
  res.locals.contacts.push({
    name: 'David',
    phone: '111-222-3333'
  });
  next();
});

router.get('/', function(req, res, next) {
  // add second group of contacts (from Google/Android?)
  res.locals.contacts.push({
    name: 'Brian',
    phone: '444-555-6666'
  });
  next();
});

router.get('/', function(req, res, next) {
  // add third group of contacts (from Hotmail?)
  res.locals.contacts.push({
    name: 'Alex',
    phone: '777-888-9999'
  });
  next();
});

router.get('/', function(req, res) {
  res.json(res.locals.contacts);
  res.status(200);
});

module.exports = router;
```

Look at the page in your browser and notice that the handlers were invoked in the order we defined them.

[`res.locals`](http://expressjs.com/4x/api.html#res.locals) is a property of the response object that is explicitly for handler functions to store information in.  It persists through the life of the request/response, and is shared across middleware and handlers.

Also notice that we have three ordinary handlers (req, res, next as arguments and one terminal handler (only req and res as arguments, and one of our statements that end processing.

What do you think happens if we do not have a terminal handler? Try it in your browser and see.  Why do you think that happens?

In this case, the handler chain is simple enough that express can see that it will never terminate.  However, if you do something more complex, the server will simply never respond to that request.

Chained handlers might seem silly at first blush: in the earlier example, very little prevented us from just writing this:

```javascript
app.get('/contacts', function(req, res) {
  res.json([{
    name: 'David',
    phone: '111-222-3333'
  }, {
    name: 'Brian',
    phone: '444-555-6666'
  }, {
    name: 'Alex',
    phone: '777-888-9999'
  }]);

  res.status(200);
});
```

And in fact, in real apps you probably won't write three handlers to do basically the same thing with different strings.

What you will most likely do, however, is write an **authentication handler**, a **content handler**, or a **security logging** handler that needs to run for certain routes.

Being able to chain handlers means that you can make your code **modular** and run only the modules you need (when you need them!) for any given request.

Most web frameworks have this kind of HTTP Request Processing mechanism. For example, in Rails we have before_actions that are invoked for specific controller actions.

## Lab: List Your Favorite Movies

In your project groups, create a simple express app with a resource 'movies' that responds with JSON (from hard-coded JS objects).

[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
