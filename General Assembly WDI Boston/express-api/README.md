[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express API CRUD

## Prerequisites

- [node-api](https://git.generalassemb.ly/ga-wdi-boston/node-api)
- [mongoose](https://git.generalassemb.ly/ga-wdi-boston/mongoose)
- [express-api-study](https://git.generalassemb.ly/ga-wdi-boston/express-api-study)

## Objectives

By the end of this, developers should be able to:

- Create an Express server.
- Include Express middleware.
- Write CRUD endpoints for an API resource using Express and
    JavaScript.

## Preparation

1. Fork and clone this repository.
    [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
2. Create a new branch, `training`, for your work.
3. Checkout to the `training` branch.

## Overview

According to its maintainers:

> Express is a minimal and flexible Node.js web application framework that
> provides a robust set of features for web and mobile applications. [Express.js](https://expressjs.com/)

And Mozilla says:

> Code is written in "plain old JavaScript", which means that less time is spent
> dealing with "context shift" between languages when you're writing both
> client-side and server-side code.
>
> The node package manager (NPM) provides access to hundreds of thousands of
> reusable packages. It also has best-in-class dependency resolution and can
> also be used to automate most of the build toolchain.
>
> While Express itself is fairly minimalist, developers have created compatible
> middleware packages to address almost any web development problem. There are
> libraries to work with cookies, sessions, user logins, URL parameters,
> POST data, security headers, and many more. You can find a list of
> middleware packages maintained by the Express team at [Express Middleware](http://expressjs.com/en/resources/middleware.html)
> (along with a list of some popular 3rd party packages).
>
> Web frameworks often refer to themselves as "opinionated" or "unopinionated".
> Express is unopinionated. You can insert almost any compatible middleware you
> like into the request handling chain, in almost any order you like. You can
> structure the app in one file or multiple files, and using any
> directory structure. You may sometimes feel that you have too many choices!

```js
// require express module
const express = require('express')

// create new express application
const app = express()

// define route GET to / that responds with Hello World!
app.get('/', (req, res) => res.send('Hello World!'))

// start application on port 4741
app.listen(4741, () => console.log('Example app listening on port 4741!'))
```

> [Mozilla Express Docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

Express can be used as an API. In fact, building APIs in Express,
especially those that use MongoDB for persistence, led to the rising popularity
of Node. Express can be used for full-stack applications (those that have
server-rendered views). However, we will use it purely as an API.

## Demo: "Hello World" API

Let's create a basic Express application. We will be able to create a fully
functional Express API, in just a few lines of code!

### Create Application Folder

First I am going to create a new folder `tiny_api` and `cd` into it.

```sh
mkdir tiny_api

cd tiny_api
```

### Initialize NPM Project

Then we will initialize a new `npm` project and complete the prompts.

```sh
npm init
```

What did that do?  Let's look at the `package.json` file it created.

We can update the `main` key from `index.js` to `server.js` (upating the `main`
key will allow us to start our application with `npm start` instead of
`node server.js`).

```js
"main": "index.js",
```

```js
"main": "server.js",
```

### Create Express Application

Then we can create `server.js` file where we will build our Express application.

```bash
touch server.js
```

This should be inside the `tiny_api` folder.

```bash
tiny_api/
????????? server.js
```

Install the Express npm package.

```sh
npm install express
```

Create our first Express application in `server.js`

```js
// require express module
const express = require('express')

// create new express application
const app = express()

// define route GET to / that responds with Hello World!
app.get('/', (req, res) => res.send('Hello World!'))

// start application on port 4741
app.listen(4741, () => console.log('Example app listening on port 4741!'))
```

### Start Express Application

To start our server, we can use node.

```sh
node server.js
```

Now our terminal tab is occupied running the server.

We can make a GET request to our server by visiting <http://localhost:4741/>
in the browser.

We can also cURL to make a GET request to the server

```sh
curl http://localhost:4741/
```

### Monitoring Node Applications

Now, that we have a running express application let's make a quick change.

Let's update our request to

```js
app.get('/', (req, res) => res.send('Hello, SEI!'))
```

Then make our request again.

```sh
curl http://localhost:4741/
```

Note how we still _"Hello World!"_, instead of _"Hello, SEI!"_. We are still
seeing the code from when we started our server!

Let's close our server. We'll then use [`nodemon`](https://github.com/remy/nodemon)
to run our **node** file and **mon**itor it for any changes. If nodemon detects
changes to our file, it will re-run the file.

#### install nodemon

Let's install `nodemon` globally to run with any node file.

```sh
npm install -g nodemon
```

To start our server with nodemon, we can use node.

```sh
nodemon server.js
```

## Code Along: Books API

Most apps need to do a bit more than always sending back "Hello world". To get
some more exposure to Express let's build out an Express API that we can use to
store and access books.

### Create Books Application Folder

Let's build out a minimal API in a folder named `books_api` and the file
`server.js`.

```bash
mkdir books_api

cd books_api

touch server.js
```

Our folder structure should now be:

```bash
books_api/
????????? server.js
```

### Instantiate NPM Project

Then I will instantiate a new `npm` project and complete the prompts.

```sh
npm init
```

What did that do?  Let's look at the `package.json` file it created.

We can update the `main` key from `index.js` to `server.js`.

```js
"main": "index.js",
```

```js
"main": "server.js",
```

### Create Express Application

Install the Express npm package.

```bash
npm install express
```

Create our Express application in `server.js`

```js
// require express module
const express = require('express')

// create new express application
const app = express()

// define route GET to / that responds with Hello World!
app.get('/', (req, res) => res.send('Hello World!'))

// start application on port 4741
app.listen(4741, () => console.log('Example app listening on port 4741!'))
```

### Start Express Application

To start our server, we can use node.

```bash
nodemon server.js
```

Now our terminal tab is occupied running the server.

We can make a GET request to our server by visiting <http://localhost:4741/>
in the browser.

We can also cURL to make a GET request to the server

```sh
curl http://localhost:4741/
```

### Books API Routes

Because we haven't learned how
to integrate MongoDB (or other databases) into Express yet, we'll just store our
data in memory.

Our app will have three routes available:

- `GET /books`: respond with JSON of all books (commonly called an `index` or `list` request).
- `GET /books/:id`: respond with JSON of one book (commonly called a `show` or `retrieve` request)
- `POST /books`: accept JSON and create a book from it, then respond with
    the created book.

Our API will need more functionality than the previous example. Nonetheless, we'll
utilize a lot of the same patterns. For example, what were those `req` and `res`
parameters exactly?

`req` stands for request, and it contains lots of info about the incoming HTTP
request that the server receives. It contains things like the URI path, HTTP
headers, the HTTP verb (GET, POST, etc.), query parameters, parameters from
dynamic route segments, and more.

`res` stands for response. We use this object to put together a response, and
then we send that response with methods attached to this object. Some of these
are:

| Response method      | What it means                                                                         |
| :------------------- | :------------------------------------------------------------------------------------ |
| `res.json(jsObject)` | Send a JSON response.                                                                |
| `res.redirect()`     | Redirect a request.                                                                  |
| `res.sendStatus()`   | Set the response status code and send its string representation as the response body. |

#### GET `/books`

For this example, we'll use an in-memory array in place of a database

We will need to create a custom route, let's read more about
[routing in express](https://expressjs.com/en/guide/routing.html).

```js
// require express module
const express = require('express')

// for this example, we'll use an in-memory array in place of a database
const books = [
  { _id: 1, title: 'Dictionary', author: 'Webster' },
  { _id: 2, title: 'Encyclopedia', author: 'Encarta' },
  { _id: 3, title: 'Clean Code', author: 'Robert Cecil Martin' }
]

// create new express application
const app = express()

// Index - Get All Books
app.get('/books', (req, res) => {
  // Respond with our books in json format
  // We can explicitly specify the status code with the `status` method
  res.status(200).json({ books: books })

  // shorthand: The status code defaults to 200
  // res.json({ books: books })
})

// start application on port 4741
app.listen(4741, () => console.log('Example app listening on port 4741!'))
```

We can make a GET request to our server by visiting <http://localhost:4741/books>
in the browser.

We can also cURL to make a GET request to the server

```sh
curl http://localhost:4741/books
```

#### GET `/books/:id`

For this example, we will use the position in the array as the books id.

Our API well need to access the `id` from the request object.

Let's read more about [routing parameters here](https://expressjs.com/en/guide/routing.html#route-parameters).

```js
// Show - Get a Single Book
app.get('/books/:id', (req, res) => {
  // get book id from request parameters
  const id = req.params.id
  // use id to find book, convert the `id` to a string since the route
  // parameter is a string
  const selectedBook = books.find(book => book._id.toString() === id)
  // respond with book data as json and default 200 response
  res.json({ book: selectedBook })
})
```

We can make a GET request to our server by visiting <http://localhost:4741/books/1>
in the browser.

We can also cURL to make a GET request to the server

```sh
curl http://localhost:4741/books/1
```

#### POST `/books/`

To accept a POST request with data attached to it, we'll need to parse the body
of the HTTP request into a JS object. Because Express is minimal and doesn't
make assumptions about what its users will try to do with it, this isn't
included by default. Luckily, Express is easy to extend with plugins called
"middlewares".

In the case of our API, we'll use a pre-existing middleware called
[`express.json()`](https://expressjs.com/en/api.html#express.json).

```js
// create new express application
const app = express()

// use middleware so API can accept json
app.use(express.json())
```

For this example, we will add the book to the end of the array to add a new
book.

```js
// Create - Create a Book
app.post('/books', (req, res) => {
  // get book data from request
  const book = req.body.book
  // add book _id
  book._id = books.length + 1
  // add book data to storage
  books.push(book)
  // Respond with the book we created.
  // Set the status code to 201 created.
  res.status(201).json({ book: book })
})
```

We can use cURL to make a POST request to the server

```sh
curl --request POST "http://localhost:4741/books/" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "MyBook",
      "author": "MyAuthor"
    }
  }'
```

## Express Middlewares

[Middleware functions](https://expressjs.com/en/guide/using-middleware.html) are
functions that can operate on the `req` object, the `res` object, and the next
middleware function in an Express app. Middleware functions are run after a
request is received and before a response is sent. You can register a
middleware with `app.use(myMiddlewareFunc)`. The order in which you pass them
to `.use` determines the order in which they execute. A simple middleware might
look like this:

```js
// sometimes middleware requires that it be invoked
app.use(example.middleware())

// sometimes middleware requires that it not be invoked
app.use(example.middleware)
```

### Demo: Request Parser

- [express.json()](https://expressjs.com/en/5x/api.html#express.json)

Reading the body of an incoming request is mission-critical for just about
every possible web application. body-parser gives us an easy interface for
reading that request body, so that we don't have to worry about (a) loading
data chunks one at a time, or (b) making sure that the body is in
the right format.

This will add an additional property, `.body` to the request object that
your middleware interacts with, which you can then immediately use to grab data.

We've already added this to our application.

### Code Along: CORS

- [cors](https://github.com/expressjs/cors)

Fortunately, dealing with CORS is Express is pretty easy - just download
the CORS middleware via NPM, and then require and use it inside server.js.

Let's add it to our application.

### Code Along: Request Logger

Let's write our own custom request logger middleware.

A simple middleware might look like this:

```js
const exampleMiddleware = function (req, res, next) {
  // do something with `req` or `res`
  console.log('I am middleware')
  // this middleware is done
  // move on to next middleware
  next()
}

app.use(exampleMiddleware)
```

Almost all middlewares will have `(req, res, next)` as parameters. `req` and
`res` are the standard Express request and response objects. `next` is a
function that every middleware must invoke to pass control on to the next
middleware in the chain. Otherwise, the request will hang and the client won't
get a response!

Let's create a file `lib/request_logger.js`. Our request logger could look like:

#### lib/request_logger.js

```js
const requestLogger = function (req, res, next) {
  console.log('\n===== Incoming Request =====\n')
  console.log(`${new Date()}`)
  console.log(`${req.method} ${req.url}`)
  console.log(`body: ${JSON.stringify(req.body)}`)
  console.log('\n============================\n')
  next()
}

module.exports = requestLogger
```

And then we can use it with our app.

#### server.js

```js
const requestLogger = require('./lib/request_logger')

// create new express application
const app = express()

// use middleware so API can accept json
app.use(express.json())

// use custom middleware so API can log requests
app.use(requestLogger)
```

Our folder structure should now be:

```bash
books_api/
????????? server.js
???????????? lib
    ????????? request_logger.js
```

## Express `.route()`

As we have seen, defining routes in Express is pretty straightforward. Here's
how we might take an app and define some basic routes.

```javascript
app.get('/people', function(req, res){
 res.send("people#index")
})

app.post('/people', function(req, res){
 res.send("people#create")
})

app.get('/people/:id', function(req, res){
 res.send("people#show")
})

app.patch('/people/:id', function(req, res){
 res.send("people#update")
})

app.delete('/people/:id', function(req, res){
 res.send("people#destroy")
})
```

You can also use the
[`route`](https://expressjs.com/en/guide/routing.html#app-route) method
to define multiple routes as a single expression.

```javascript
app.route('/people')
    .get(function(req, res){
      res.send("people#index")
    })
    .post(function(req, res){
      res.send("people#create")
    })

app.route('/people/:id')
    .get(function(req, res){
       res.send("people#show")
    })
    .patch(function(req, res){
       res.send("people#update")
    })
    .delete(function(req, res){
       res.send("people#destroy")
    })
```

This `route` method can make your code more DRY, since you do not need to repeat
the path. We'll continue to use our familiar pattern, since whitespace can
make it easier to find our routes.

## Express Router

We currently have all our book routes in the `server.js` file.
If we end up with other resources like authors, movies, albums, etc then it
would become a very large file. Luckily, we can separate a set of routes into
their own file.

Another option is to create a
[Router](https://expressjs.com/en/guide/routing.html#express-router).
Routers are small, modular 'mini-applications', which can then be re-integrated
back into Express. This is a common approach when you have lots of routes which
we will follow.

Each file inside the `routes` directory will hold a single mini-application,
set up as follows.

```javascript
const express = require('express')
const router = express.Router()

router.get('/people', function(req, res, next) {
 res.send("people#index")
})

router.post('/people', function(req, res, next) {
 res.send("people#create")
})

router.get('/people/:id', function(req, res, next) {
 res.send("people#show")
})

router.patch('/people/:id', function(req, res, next) {
 res.send("people#update")
})

router.delete('/people/:id', function(req, res, next) {
 res.send("people#destroy")
})

module.exports = router
```

These separate stand-alone routers then get brought back together in the
main JS file which `require`s them.

```js
const peopleRoutes = require('./routes/people')

app.use(peopleRoutes)
```

### Lab: Book Router

Time to refactor our book routes, which currently live in the `server.js` file,
to be in their own file and use a `Router` object. Follow the pattern outlined
in the above section to move our book routes into a new file `routes/book_routes.js`.

After refactoring, all of your requests should still work!

You folder structure should now be:

```bash
books_api
????????? server.js
???????????? lib
???   ????????? request_logger.js
???????????? routes
    ????????? book_routes.js
```

## Additional Resources

- [Installing Express](https://expressjs.com/en/starter/installing.html)
- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [Express Middleware](http://expressjs.com/en/resources/middleware.html)
- [MDN's Introduction to Node & Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

## [License](LICENSE)

1. All content is licensed under a CC??BY??NC??SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
