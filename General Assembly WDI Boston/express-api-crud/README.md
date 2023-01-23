[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express API CRUD

## Prerequisites

- [node-api](https://git.generalassemb.ly/ga-wdi-boston/node-api)
- [mongoose](https://git.generalassemb.ly/ga-wdi-boston/mongoose)
- [express-api](https://git.generalassemb.ly/ga-wdi-boston/express-api)

## Objectives

By the end of this, developers should be able to:

- Write five CRUD endpoints for an API resource using Express, Mongoose, and
    JavaScript.

## Preparation

1. Fork and clone this repository.
    [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
2. Create a new branch, `training`, for your work.
3. Checkout to the `training` branch.
4. Move into the `books_api` directory.
5. Install dependencies with `npm install`

## Express with Mongodb and Mongoose

We have been using an array to represent data so far. Our goal is to store
data in a Mongodb database. Let's take a look at the
[Mongoose documentation](https://mongoosejs.com/docs/index.html) to get started.

```sh
npm install mongoose
```

Require Mongoose at the top of `server.js`

### server.js

```js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/books_api', { useNewUrlParser: true })
```

Then in our `routes/book_routes.js` create a bookSchema and let's include timestamps.

```js
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
}, {
  timestamps: true
})
```

Create a Book model after that.

```js
const Book = mongoose.model('Book', bookSchema)
```

Use our Book model in the Create action to create a new book.

```js
// Create - Create a Book
app.post('/books', (req, res) => {
  // get book data from request
  const bookData = req.body.book
  // save book data to database
  Book.create(bookData)
    .then(book => {
      // Respond with the book we created.
      // Set the status code to 201 created.
      res.status(201).json({ book: book })
    })
})
```

Wow it worked!  Before we move on to the rest of CRUD, let's organize our code
by moving our Book schema and model to its own file `book.js` inside
of a `models/` folder.

```sh
mkdir models

touch models/book.js
```

You folder structure should now look like:

```bash
books_api
└── server.js
└─── lib
│   └── request_logger.js
└─── routes
│   └── book_routes.js
└─── models/
    └── book.js
```

We can that keep all our Book schema and model related code there

### models/book.js

```js
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)
```

And then we can require that into our `routes/book_routes.js` to use it.
**book_routes.js**

```js
const Book = require('./models/book')
```

After that refactoring, our create should still work!

## Code Along: Handling Errors

So far we've looked at how our code should work when the request is succesful.
But what if the book doesn't exist or another error occurs?

Let's write our own error handler together in
[lib/error_handler.js](lib/error_handler.js) and then require it in our `server.js`.

You folder structure should now look like:

```bash
books_api
└── server.js
└─── lib
│   ├── error_handler.js
│   └── request_logger.js
└─── routes
│   └── book_routes.js
└─── models/
    └── book.js
```

## Code Along: Adding npm Scripts

In node, we can define custom scripts to run in our `package.json` file.

By default `npm init` will generate a `test` script, which can be run with
`npm test`.

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

Let's add a `server` script, to run our application with `nodemon`.

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "server": "nodemon server.js"
},
```

We can now run our application with

```js
npm run server
```

**Note:** A common convention is to define a `start` script, to start your
application, which can be started with `npm start`. We'll use
`npm run server` to build experience with custom scripts.

## Lab: Express CRUD

Let's update our current routes so that they utilize the Mongoose models we
created and also add the rest of our CRUD actions.

1. ~(C)reate a Book~
2. (R)ead all Books
3. (R)ead a Book
4. (U)pdate a Book
5. (D)estroy a Book

## Additional Resources

- [Installing Express](https://expressjs.com/en/starter/installing.html)
- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [Express Middleware](http://expressjs.com/en/resources/middleware.html)
- [MDN's Introduction to Node & Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
