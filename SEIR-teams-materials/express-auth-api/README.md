# Express API & Authentication

## Learning Objectives

- Describe the difference between authentication and authorization
- Explain how middleware works in Express applications
- Set proper HTTP status codes on Express responses
- Handle errors effectively in Express applications
- Use Passport to add authentication to an Express API

## Preparation

1. Fork and clone this repository.
1. Install dependencies with `npm i`.
1. Create a `.env` file and add your `DATABASE_URL` with the MongoDB Atlas connection string.
1. Seed your database with `npm run seed`.
1. Start your development server with `npm run dev`.
1. Test all of the routes in the booksController.js file using Postman.

## Authentication and Authorization

Authentication is the process of verifying the user's identity.
When the user logs into the system successfully, we authenticate them based on the credentials they send (such as a proper combination of email and password). Authorization means determining whether the user is actually permitted to perform some action in the system.

What is an example of how authentication and authorization are used in real-world applications?

## Intro to Passport.js

From the [passport website](http://www.passportjs.org/docs/):

"_Passport is authentication Middleware for Node. It is designed to serve a singular purpose: authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application._

_In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and password. With the rise of social networking, single sign-on using an OAuth provider such as Facebook or Twitter has become a popular authentication method. Services that expose an API often require token-based credentials to protect access._"

### Strategies

The main concept when using passport is to register _Strategies_. A strategy is a passport **middleware** that will create some action in the background and execute a callback; the callback should be called with different arguments depending on whether the action that has been performed in the strategy was successful or not.

Because strategies are packaged as individual modules, we can pick and choose which ones we need for our application. This logic allows the developer to keep the code simple - without unnecessary dependencies - in the controller and delegate the proper authentication job to some specific passport code.

There are currently more than [500 Passport.js strategies](http://www.passportjs.org/packages/).

## Middleware

Pretty much everything in Express is a form of middleware. Whenever a request is recieved by the server, each piece of middleware is called in the order that it is used in our index file (i.e., where it is invoked with `app.use()`). Each middleware is passed the request and the response objects from Express as arguments along with a third argument that is commonly referred to as `next`. So, any middleware can use the values in the request object or even send a response back to the client. More often than not though, middleware will simply do ‘something’ and then pass the request on to the next piece of middleware in the chain until it reaches one of our controllers where we are explicitly handling the response.

Let's add some middleware of our own to our app! Inside the middleware directory, create a new file named `request_logger.js` and add the following code:

```js
const requestLogger = function (req, res, next) {
	console.log('\n===== Incoming Request =====\n');
	console.log(`${new Date()}`);
	console.log(`${req.method} ${req.url}`);
	console.log(`body ${JSON.stringify(req.body)}`);
	console.log('\n============================\n');
	next();
};

module.exports = requestLogger;
```

Now we can require and use our logger in the `index.js` file, but **where should we put it?**

```js
// Log each request as it comes in for debugging
const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);
```

Middleware runs _in the middle_ of the server receiving the request and sending the response to the client in the order that it appears in the `index.js`. That means that we need to add our code **_before_** our controller, but **_after_** the middleware that parses the request params into the request body.

Test out your new middleware by making some requests with Postman!

## Error Handling in Express

Now that we have a better handle on how middleware works, we can fix up our book controller so that errors are handled better. There's already a `custom_errors.js` file in our middleware directory. The `handleErrors` function in that file is like a catch all for any errors that occur in our application. This is important because if we simply catch the error and log it, we're breaking the Golden Rule of client server architectures by not sending a response to the client!

To use the error handler, we'll need to edit our `booksController.js` so that each route gets passed a new argument after `req` and `res`, which we'll call `next`. Instead of calling `console.error` in our catch method, now we'll call `next`.

```js
// GET (index) /api/books/
router.get('/', (req, res, next) => {
	Book.find()
		.then((books) => res.json(books))
		.catch(next);
});

// GET (show) /api/books/5eb579b99b05e67b897e860b
router.get('/:id', (req, res, next) => {
	Book.findById(req.params.id)
		.then((book) => res.json(book))
		.catch(next);
});

// POST (create) /api/books/
router.post('/', (req, res, next) => {
	Book.create(req.body)
		.then((book) => res.json(book))
		.catch(next);
});

// PUT (update) /api/books/5eb579b99b05e67b897e860b
router.put('/:id', (req, res, next) => {
	Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then((book) => res.json(book))
		.catch(next);
});

// DELETE (delete) /api/books/5eb579b99b05e67b897e860b
router.delete('/:id', (req, res, next) => {
	Book.findOneAndDelete({
		_id: req.params.id,
	})
		.then((book) => res.json(book))
		.catch(next);
});
```

In `index.js` we need to require and use the handleError function. We'll do that using destructuring and make sure that we place this code right before the app.listen method because it's the last thing in the middleware chain to run:

```js
// The catch all for handling errors
const { handleErrors } = require('./middleware/custom_errors');
app.use(handleErrors);
```

We'll come back to the custom errors file shortly.

## Create a Controller for Users

We already have a user model to start with, but we need a basic controller to test it out. Let's start by creating a new file in the controllers directory called `usersController.js`. This controller won't strictly follow the REST architecture. Instead we'll have a `/signup` and `/signin` route.

**Why do you think both of these routes will be POST routes?**

```js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// SIGN UP
// POST /api/signup
router.post('/signup', (req, res, next) => {
	User.create(req.body)
		.then((user) => res.status(201).json(user))
		.catch(next);
});

// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {});

module.exports = router;
```

Now require and use the userController in the index.js.

```js
// Require the user resource routes and controllers
const userController = require('./controllers/usersController');
app.use('/api', userController);
```

Make sure you can create a new user in Postman!

### Prevent Passwords from Being Sent to Clients

You may have noticed that when you created a new user, you got back a user document with the user's password. That's a huge security hole in our API right now. We can fix it using Mongoose [Virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html) pretty easily though. Virtuals are used to transform data without persisting the transformation in MongoDB. We'll create a virtual that will automatically remove the password field any time we use a toJSON method (including `JSON.stringify()`, Mongoose's `.toJSON()` method or Express' `.json()` method). Even though the field is being deleted by the virtual, it remains safe and sound in our database. Update the user model as follows:

```js
const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			// ret is the returned Mongoose document
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);
```

### Lab:

Read this [short explanation](https://gcn.com/articles/2013/12/02/hashing-vs-encryption.aspx) of what hashing is versus encryption and answer the following:

- How are hashing and encryption different?
- Why is hashing better for storing passwords than encryption?

### Store a Hashed Password

We're breaking a cardinal rule of user security by saving the user's password in plain text. When it comes to storing password data securely, the only thing we should do is **not store it at all**. Instead, we should store a hash of the password.

Hashing is a one-way function, so the hashed value cannot be reversed to obtain the original input value. If you apply the same hashing algorithm to the same value you'll always get the same hash though. That means we can store the hash of the password and when users sign into the system, we can hash the password they send and compare it with the hash in the database to verify that they provided the correct password.

We'll use the popular `bcrypt` package to do all the hard work for here, so install it with: `npm i bcrypt`.

Next, require `bcrypt` in the userController and add **ONE** of the two optional implementations below that will first get the password, then hash it, then store the hashed password in the database only:

```js
...
const bcrypt = require('bcrypt');
  ...

// Using async/await
// Add the async keyword
router.post('/signup', async (req, res, next) => {
  // wrap it in a try/catch to handle errors
  try {
    // store the results of any asynchronous calls in variables
    // and use the await keyword before them
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    // return the next callback and pass it the error from catch
    return next(error);
  }
});

/*** ALTERNATIVE ***/

//Using promise chain
router.post('/signup', (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    // return a new object with the email and hashed password
    .then(hash =>
      // when returning an object with fat arrow syntax, we
      // need to wrap the object in parentheses so JS doesn't
      // read the object curly braces as the function block
      ({
        email: req.body.email,
        password: hash
      })
    )
    // create user with provided email and hashed password
    .then(user => User.create(user))
    // send the new user object back with status 201, but `hashedPassword`
    // won't be sent because of the `transform` in the User model
    .then(user => res.status(201).json(user))
    // pass any errors along to the error handler
    .catch(next);
});
```

We won't see the fruits of our labor unless we create a new user and look at the data in Mongo. Create a new user with a **different** email address in Postman. In Mongo you should see that the password is now hashed and looks something like this:

```js
"password" : "$2b$10$5g62t1K7SUovJ2.XonHfy.kiDWQr/UEpR1ha8DSwAWWpBob5WXAKy"
```

## Create a One-to-Many Relationship

Now we're going to create a one-to-many relationship between our users and books. In Mongoose, we can do this with child referencing or parent referencing, but the preferred approach for one-to-many relationships is through parent referencing. This means that weʼll add the parent document’s id to each of the child documents. This keeps our data flat and helps to prevent inconsistencies.

After the description property in the schema, add an owner field. Set its type to a Mongoose object id, reference the User model, and make it required:

```js
{
...
owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}
```

Create a new book in the database in Postman, but this time copy the id from a user document you created when you when you tested your signup controller and pass it as the value to the owner property.

## Configure a Passport Strategy

To use Passport, we need to install it in our app along with one (or more) of the strategies it offers for authentication. A popular approach for authentication in APIs is a token based strategy. Today, we'll use the `passport-jwt`, which is based on JSON Web Tokens ([JWT](https://jwt.io/introduction/)).

1. Start by installing the npm packages with: `npm i passport passport-jwt jsonwebtoken`.
1. Create a new file in the middleware directory called `auth.js`.
1. Add the following code:

```js
// Require the needed npm packages
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a secret to be used to encrypt/decrypt the token
// This can be any string value you want -- even gibberish.
const secret =
	process.env.JWT_SECRET || 'some string value only your app knows';

// Require the specific `strategy` we'll use to authenticate
// Require the method that will handle extracting the token
// from each of the requests sent by clients
const { Strategy, ExtractJwt } = require('passport-jwt');

// Minimum required options for passport-jwt
const opts = {
	// How passport should find and extract the token from
	// the request.  We'll be sending it as a `bearer` token
	// when we make requests from our front end.
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	// Any secret string to use that is unique to your app
	// We should store this in an environment variable so it
	// isn't ever pushed to GitHub!
	secretOrKey: secret,
};

// Require the user model
const User = require('../models/User');

// We're configuring the strategy using the constructor from passport
// so we call new and pass in the options we set in the `opts` variable.
// Then we pass it a callback function that passport will use when we call
// this as middleware.  The callback will be passed the data that was
// extracted and decrypted by passport from the token that we get from
// the client request!  This data (jwt_payload) will include the user's id!
const strategy = new Strategy(opts, function (jwt_payload, done) {
	// In the callback we run our custom code. With the data extracted from
	// the token that we're passed as jwt_payload we'll have the user's id.
	// Using Mongoose's `.findOneById()` method, we find the user in our database
	User.findById(jwt_payload.id)
		// To pass the user on to our route, we use the `done` method that
		// that was passed as part of the callback.  The first parameter of
		// done is an error, so we'll pass null for that argument and then
		// pass the user doc from Mongoose.  This adds the user to the request object
		// as request.user!
		.then((user) => done(null, user))
		// If there was an error, we pass it to done so it is eventually handled
		// by our error handlers in Express
		.catch((err) => done(err));
});

// Now that we've constructed the strategy, we 'register' it so that
// passport uses it when we call the `passport.authenticate()`
// method later in our routes
passport.use(strategy);

// Initialize the passport middleware based on the above configuration
passport.initialize();

// Create a variable that holds the authenticate method so we can
// export it for use in our routes
const requireToken = passport.authenticate('jwt', { session: false });

// Create a function that takes the request and a user document
// and uses them to create a token to send back to the user
const createUserToken = (req, user) => {
	// Make sure that we have a user, if it's null that means we didn't
	// find the email in the database.  If there is a user, make sure
	// that the password is correct.  For security reason, we don't want
	// to tell the client whether the email was not found or that the
	// password was incorrect.  Instead we send the same message for both
	// making it much harder for hackers.
	if (
		!user ||
		!req.body.password ||
		!bcrypt.compareSync(req.body.password, user.password)
	) {
		const err = new Error('The provided username or password is incorrect');
		err.statusCode = 422;
		throw err;
	}
	// If no error was thrown, we create the token from user's id and
	// return the token
	return jwt.sign({ id: user._id }, secret, { expiresIn: 36000 });
};

module.exports = {
	requireToken,
	createUserToken,
};
```

### Lab:

Read through the code together with the comments and try to make sense of what's happening.

- Why do we require the User model in this file?
- If this middleware is used, how will the user object be received in our controller?
- When will we call `createUserToken`?
- When might we want to use `requireToken`?

## Update the Users Controller

Now that we have a way to create a token for users when they login, we can use it in our `/signin` route.

```js
// Require the createUserToken method
const { createUserToken } = require('../middleware/auth');

// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {
	User.findOne({ email: req.body.email })
		// Pass the user and the request to createUserToken
		.then((user) => createUserToken(req, user))
		// createUserToken will either throw an error that
		// will be caught by our error handler or send back
		// a token that we'll in turn send to the client.
		.then((token) => res.json({ token }))
		.catch(next);
});
```

## Update the Books Controller

We expect each request to be accompanied by a user that is authenticated. So we'll use our `requireToken` as an inline middleware to make sure that the user has a token before sending the response. When this method is run, it will automatically add the user to the request object as a property or it will error out and our error handler will take care of the response.

```js
...
const { requireToken } = require('../middleware/auth');

// GET (index) /api/books/
router.get('/', requireToken, (req, res, next) => {
  Book.find()
    .then((books) => res.json(books))
    .catch(next);
});

// GET (show) /api/books/5eb579b99b05e67b897e860b
router.get('/:id', requireToken, (req, res, next) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch(next);
});

// POST (create) /api/books/
router.post('/', requireToken, (req, res, next) => {
  Book.create(req.body)
    .then((book) => res.json(book))
    .catch(next);
});

// PUT (update) /api/books/5eb579b99b05e67b897e860b
router.put('/:id', requireToken, (req, res, next) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((book) => res.json(book))
    .catch(next);
});

// DELETE (delete) /api/books/5eb579b99b05e67b897e860b
router.delete('/:id', requireToken, (req, res, next) => {
  Book.findOneAndDelete({
    _id: req.params.id,
  })
    .then((book) => res.json(book))
    .catch(next);
});
```

Try getting the books in the browser or Postman!

## Sending a Token with Requests

Okay, so now we can't get any data. To make a request with Bearer Authorization we need to add a header to our request. In Postman, add an authorization header with the value set to the word 'Bearer', followed by a space, followed by a valid token that you received when you last ran the signin POST operation.

```md
Bearer your-long-ass-valid-token
```

> **NOTE:**
>
> You can set up Postman using variables so that it automatically captures the token and stores it for future requests! Follow the instructions [here](https://git.generalassemb.ly/jmeade11/mern-auth-tutorial#setup-postman-to-run-tests-sequentially) to learn more.

## BONUS: Add Authorization

In the MERN lab, we'll take this to the next step and add authorization so that users may only update or delete records where they are the owner of the document.

## Resources

[Express API Doc: Error Handling](https://expressjs.com/en/guide/error-handling.html)
[Central Error Handling in Express](https://dev.to/nedsoft/central-error-handling-in-express-3aej)
[Using Postman Environment Variables & Auth Tokens](https://medium.com/@codebyjeff/using-postman-environment-variables-auth-tokens-ea9c4fe9d3d7)
[Using Postman (with Authentication)](https://developer.here.com/documentation/authentication/dev_guide/topics/using-postman.html)
[Build A Node.js API Authentication With JWT Tutorial](https://www.youtube.com/watch?v=0g0Of8jlhN8)
