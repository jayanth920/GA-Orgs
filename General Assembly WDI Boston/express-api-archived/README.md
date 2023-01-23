[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express as an API

Express, like Rails, can be used as an API. In fact, building APIs in Express,
especially those that use MongoDB for persistence, led to the rising popularity
of Node.

Express can be used for full-stack applications (those that have server-rendered
views). However, we will use it purely as an API.

A customized template for Express is available at [express-api-template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template).
It includes authentication and common middlewares so that you can start
developing an API right away.

## Prerequisites

- [node-http-server](https://git.generalassemb.ly/ga-wdi-boston/node-http-server)
- [mongoose-crud](https://git.generalassemb.ly/ga-wdi-boston/mongoose-crud)

## Objectives

By the end of this, developers should be able to:

- Develop an Express API, leveraging architectural conventions from Rails.
- Write five CRUD endpoints for an API resource using Express, Mongoose, and
  JavaScript.
- Prevent unauthorized users from creating or changing data through the API.

## Preparation

1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.
1. Verify mongodb is running with `brew services list`
   (Run `brew services restart mongodb` if not).
1. Set a SECRET_KEY in the environment. See below for command to set a
   SECRET_KEY.
    - For development and testing, set the SECRET_KEY from the root of your
      repository using:

      ```sh
        echo SECRET_KEY=$(/usr/local/opt/openssl/bin/openssl rand -base64 66 | tr -d '\n') >>.env
      ```

      Linux:
      ```sh
      echo SECRET_KEY=$(/usr/bin/openssl rand -base64 66 | tr -d '\n') >>.env
      ```

1. Install Nodemon by `npm install --global nodemon`. Nodemon will reload the
application on a change to any file in the application. To start the express
server, use `grunt server`.

## A Bookstore API

We've been hired to write an API for a local bookstore, 'Book Before You Leap'.
They have plans to expand in the next few years, and they'll probably rival
Amazon. Therefore, we've chosen Express because it's hip, and Mongo because it's
Web Scale™.

Let's get acquainted with how we'll use Express.

## Demo: An Example Express Controller

First, let's peek at our routes, since that's the layer that decides which code
to run for any given request. Open [`config/routes.js`](config/routes.js) and
read through it. Look familiar?

Have a look in the [`app`](app) directory. It looks a bit like Rails, too.

In [`app/controllers/examples.js`](app/controllers/examples.js), we get our
first taste of Express. What's the `(req, res, next)` signature on all our
controller actions?

The `req` object is a
[http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)
object. The `res` object is
[http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)
object. These are what we used in the node HTTP server. What about `next`?

> More than one callback function can handle a route (make sure you specify the
> next object).
>
> – [Express routing](http://expressjs.com/en/guide/routing.html)

That means that there can be **more than one step** when processing a single
request. In fact, that's how Express keeps boilerplate to a minimum; we did
something similar with `before_filter`s in Rails. Common functionality, like
error handling, can be extracted into a middleware and run on any request you
like. However, you **must** use `next` to propagate errors onward.

Likewise, `res.json` signals to Express that we're done working on our response.
It's analogous to Rails' `render` method. If you don't use a **terminal
handler**, Express will keep the connection open waiting for one. You and
Express will both be frustrated and confused. Here's a list of terminal
handlers. You will use `res.json` and `res.sendStatus` most frequently.

| Response method      | What it means                                                                         |
|:---------------------|:--------------------------------------------------------------------------------------|
| `res.json(jsObject)` | Send a JSON response.                                                                 |
| `res.redirect()`     | Redirect a request.                                                                   |
| `res.sendStatus()`   | Set the response status code and send its string representation as the response body. |

## Annotate Along: Index Action

Let's practice reading unfamiliar code by annotating
[`app/controllers/examples.js`](app/controllers/examples.js). As we read the
index controller action, keep the following questions in mind.

- What is the purpose of this action?
- Does it need a singular or plural resource to build its response?
- How is the action handling errors?
- Why do we need to check for the existence of a record after querying?
- Where do we get IDs from?
- Where do we get data from when creating or updating a record?
- Which terminal handler is used to send a response?

## Demo: An Example Express Model

Let's read [`app/models/example.js`](app/models/example.js) and answer the
following questions together:

- What library are we using to model our resources? Does it have anything to
  do with Express?
- What does the underscore denote in `_owner`?
- Where should we go to find out more about an owner?
- Why aren't we using an arrow function for the virtual attribute `length`?

## CURL Gotchas

We'll be using a lot of curl requests as we test our API, so it's important to
remember some of the common pitfalls in writing and running curl requests.

1. The following **are not** valid in a curl request:
    - Trailing commas in the json body.
    - Comments after the `curl` keyword.
    - Missing back slashes after each option.

1. We use constants in our curl requests, which are in `CAPITAL_LETTERS`.
    Your curl request will not work correctly if you don't assign values to
    those constants. (i.e. `TITLE='Ancillary Justice'`).
    - Spaces between values assigned to variables in the terminal **are not**
      valid and **will not** run your curl script.

## Code-Along: `GET /books`

**Visitors to the client web application should be able to see all the books**
**without being logged in.**

We will need to write a controller action and a test script.

Expected response:

```sh
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8

{
  "books": [
    {
      "_id": "56df974ec19957cb0d836c4c",
      "updatedAt": "2016-03-09T03:23:58.000Z",
      "createdAt": "2016-03-09T03:23:58.000Z",
      "_owner": "56df9716c19957cb0d836c4a",
      "title": "Between the World and Me",
      "author": "Ta-Nehisi Coates",
      "originalLanguage": "English",
      "firstPublished": 1999
      "__v": 0
    },
    {
      "_id": "56df974ec19957cb0d836c4d",
      "updatedAt": "2016-03-09T03:23:58.000Z",
      "createdAt": "2016-03-09T03:23:58.000Z",
      "_owner": "56df9716c19957cb0d836c4a",
      "title": "Invisible Monsters",
      "author": "Chuck Palahniuk",
      "originalLanguage": "Spanish",
      "firstPublished": 1843      "__v": 0
    }
  ]
}
```

## Code-Along: Add Books to the database

Run the load-books script using `node bin/load-books.js`. You'll notice an
error. We'll fix it by creating a user and adding their ID to our books.

## Annotate-Along: `GET /examples/:id`

## Code-Along: `GET /books/:id`

**Visitors to the client web application should be able to see any book without**
**being logged in.**

You will need to write a controller action and a test script.

Expected response:

```sh
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8

{
  "book": {
    "_id": "56df974ec19957cb0d836c4c",
    "updatedAt": "2016-03-09T03:23:58.000Z",
    "createdAt": "2016-03-09T03:23:58.000Z",
    "_owner": "56df9716c19957cb0d836c4a",
    "title": "Between the World and Me",
    "author": "Ta-Nehisi Coates",
    "originalLanguage": "English",
    "firstPublished": 1999    "__v": 0
  }
}
```

## Annotate-Along: `DELETE /examples/:id`

## Lab: `DELETE /books/:id`

**Only authenticated users should be able to delete a book. They should not be**
**able to delete other users' books.**

You will need to write a controller action and a test script.

Expected response:

```sh
HTTP/1.1 204 No Content
X-Powered-By: Express
```

If a different user than the owner tries to make the change, you should instead
see:

```sh
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8

{
  "error": {
    "message": "404 Not Found",
    "error": {
      "name": "HttpError",
      "status": 404,
      "message": "404 Not Found"
    }
  }
}
```

## Annotate-Along: `PATCH /examples/:id`

## Code-Along: `PATCH /books/:id`

**Only authenticated users should be able to change a book. They should not be**
**able to change other users' books.**

You will need to write a controller action and a test script.

Expected response:

```sh
HTTP/1.1 204 No Content
X-Powered-By: Express
```

You may wish to retrieve the book you changed to check your work.

If a different user than the owner tries to make the change, you should instead
see:

```sh
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8

{
  "error": {
    "message": "404 Not Found",
    "error": {
      "name": "HttpError",
      "status": 404,
      "message": "404 Not Found"
    }
  }
}
```

## Annotate-Along: `POST /examples`

## Lab: `POST /books`

**Only authenticated users should be able to create a book.**

You will need to write a controller action and a test script in
[`app/controllers/books.js`](app/controllers/books.js) and
[`scripts/books/create.sh`](scripts/books/create.sh) respectively.

Make sure to save a reference to the user that created the book so it can be
used to check ownership.

You're done when you see a response similar to this one:

Expected response:

```sh
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8

{
  "book": {
    "__v": 0,
    "updatedAt": "2016-03-09T03:23:58.000Z",
    "createdAt": "2016-03-09T03:23:58.000Z",
    "_owner": "56df9716c19957cb0d836c4a",
    "title": "Invisible Monsters",
    "author": "Chuck Palahniuk",
    "originalLanguage": "Spanish",
    "firstPublished": 1843
    "_id": "56df974ec19957cb0d836c4d",
    "editable": true
  }
}
```

If an unauthenticated user tries to create a book, you should instead see:

```sh
HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Content-Type: text/html; charset=utf-8

HTTP Token: Access denied.
```

## Bonus

Write a node script to scaffold a controller.

## Additional Resources

- [Express - Node.js web application framework](http://expressjs.com/)
- [Understanding Express.js](https://evanhahn.com/understanding-express/)
- [ga-wdi-boston/express-api-template: Railsified express server](https://git.generalassemb.ly/ga-wdi-boston/express-api-template)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
