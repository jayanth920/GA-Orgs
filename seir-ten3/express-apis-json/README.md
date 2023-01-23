[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JSON APIs in Express & Postman

## Prerequisites

- Express Routes
- Mongoose.js
- Data modeling / ERDs

## Lesson Objectives

- Build an HTTP API in Express that serves JSON data from a Mongo DB
- Use Postman to test our routes
- Use CORS with our Express API to permit requests from other domains

## Framing

Instead of directly rendering a view (as HTML), the server will serve **data in
the form of JSON** that a client-side JS application will 'consume' and generate
content from.

> This an increasingly common pattern in modern web development, especially with
> the rise of 'serverless' services. You may or may not be familiar with the
> terms Platform as a Service and Service as a Service, but these are examples
> of 'serverless' services. See the additional reading
> [here](http://insightaas.com/serverless-computing-no-servers-really/).

We're not going to build a super complex application with many sets of endpoints
today, but rather build a single service that implements an API over HTTP.

## Review

### REST

**REST**, or **RE**presentational **S**tate **T**ransfer, is a convention that standardizes how clients make requests to servers.

Knowing REST is important because the vast majority of web developers have agreed to follow this same convention. (SOAP is an alternative, less common paradigm for APIs.)

The web as we know it transfers data via HTTP, or Hyper-Text Transfer Protocol, which is a common convention used for **REST**. HTTP specifies that a server receives a **request** from a client and then delivers a corresponding **response**.

Remember: a server's job is to respond to HTTP requests. In order to talk about how Express methods can respond to different HTTP verbs, we need to talk about how HTTP requests work.

Every HTTP request consists of a request **method** and **path**. The **path** is the part of the URL following the domain. We likely have noticed paths when navigating the web. What is the path for this lesson?

Your browser always sends that request in a _particular way_ that gives the server a hint as to the purpose of the request. This _particular way_ is the **method**.

"GET" is one of these methods. It means the browser just wants to read (or "get") some information. When you write `app.get('/books', (req, res) => {})`, you're telling your server how to respond when a browser says, "Hey, I'd like to get some information from the `/books` path."

We make requests all the time -- especially `GET` requests. Every time you go to your browser, enter a URL, and hit enter, you're actually making a `GET` request.

### RESTful HTTP Methods

HTTP defines five main methods, each of which corresponds to one of the CRUD functionalities.

| Method | Crud functionality | DB Action            |
| ------ | ------------------ | -------------------- |
| GET    | read               | retrieve data        |
| POST   | create             | add data             |
| PUT    | update             | modify existing data |
| PATCH  | update             | modify existing data |
| DELETE | delete             | delete existing data |

So, wait -- there are 5 REST methods, but only 4 CRUD methods?

`PUT` and `PATCH` are both used for updating. Whenever you update your Facebook profile you're probably making a `PUT` or `PATCH` request. The difference is `PUT` would be intended to completely replace your profile, whereas `PATCH` would be intended to just change a few fields of your profile.

To clarify further, `PATCH` is replacing part of the data and `PUT` is replacing the whole thing.

### What's the difference at a technical level between a GET and a POST request?

There is of course the difference in the METHOD type, but also in the request payload. A `POST` request for instance will contain all of the data necessary for creating some new object.

GET is for when you want to read something. The parameters of the GET request are used for identifying which piece of data the client would like to read. The parameters of the POST request are used for defining a new piece of data.

### RESTful Routes

A **route** is a **method** plus a **path**...

**Method + Path = Route**

Each route results in an **action**.

REST can be translated in to RESTful Routes (routes that follow REST):

| Action  | Method | Path           | Action                                                                |
| ------- | ------ | -------------- | --------------------------------------------------------------------- |
| index   | GET    | `/engineers`   | Read information about all engineers                                  |
| create  | POST   | `/engineers`   | Create a new engineer                                                 |
| show    | GET    | `/engineers/1` | Read information about the engineer whose ID is 1                     |
| update  | PUT    | `/engineers/1` | Update the existing engineer whose ID is 1 with all new content       |
| update  | PATCH  | `/engineers/1` | Update the existing engineer whose ID is 1 with partially new content |
| destroy | DELETE | `/engineers/1` | Delete the existing engineer whose ID is 1                            |

Note that the path doesn't contain any of the words describing the CRUD functionality that will be executed. That's the method's job.

These routes are important to keep in mind as we build out our controllers. For a resource with full CRUD, the controller for that resource will likely have each of the above 7 routes.

## Building an API in Express

For this class, we'll be building an application called 'book-e' which can save
bookmarks for us.

## Book-e

### Set Up Book-e Backend

Download [Postman here](https://www.postman.com/downloads/) if you
don't have it already. Be sure to download the desktop application.

Postman is going to substitute for a front end for our testing purposes, so that we can make `POST`, `PUT/PATCH`, AND `DELETE` requests without a user interface. Our browser URL bars make `GET` requests by default.

## Setup Express.js

Before we can do anything, we need to actually make Express work and listen for
requests.

### Instructions

1. Navigate into your sandbox and create a new directory called `express-book-e`.
1. Initialize your repo as a Node app and Git repo by running `npm init -y` and `git init`.
1. Install our required dependencies: `npm i express mongoose dotenv`.
1. Add a `.gitignore` and write to it by running:

```cli
$ echo -e "node_modules \n.env" > .gitignore
```

In your `index.js` file add this:

```js
//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
// instantiate express
const app = express();
app.set('port', process.env.PORT || 8000);

//=============================================================================
// Middleware
//=============================================================================
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

//=============================================================================
// ROUTES
//=============================================================================
// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/bookmarks');
});
/* START CONTROLLERS HERE */

/* END CONTROLLERS HERE */

//=============================================================================
// START SERVER
//=============================================================================
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
```

## Redirects

Since all of our routes will be defined on `/api/something`, we sometimes want a more user-friendly way to point people in the right direction. Enter the redirect.

We'll define a route for the base url (`/`), and have it redirect the user to `/api/bookmarks`.

In your index.js file, above the controllers section for the API routes, we have:

```js
app.get('/', (req, res) => {
	res.redirect('/api/bookmarks');
});
```

What we're really doing here is sending back a response that is a redirect, rather than HTML or JSON. The browser knows how to handle this, so once it receives the redirect response it automatically follows it to the new path. This new path is treated as a new request, so the browser then performs a GET request to the bookmarks url.

This is great! Now our server should run with `nodemon`. But it doesn't do anything yet. We need to write some logic for what our server-side application needs to do in response to requests!

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/cff116d3354716a4490f58b3f6e60610889fb956).

### Database Connection

Create a `.env` file and make sure it's being ignored by Git. In your `.env` file, create a variable called `DATABASE_URL` and set it equal to your connection string from the MongoDB lecture.

Give the database a meaningful name, like `booke`.

```
DATABASE_URL=mongodb+srv://db-user:Xa0I45XL14LQX3Tn@cluster0.yshuq.mongodb.net/booke?retryWrites=true&w=majority
```

Create a folder called `db`, short for databases, and inside of it create a `connection.js`. This is where we'll set up the code to connect to our remote MongoDB Atlas instance.

```js
// db/connection.js
//=============================================================================
// Mongo Atlas Connection
//=============================================================================
require('dotenv').config();
const mongoose = require('mongoose');

// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration and can be exported to other files
module.exports = mongoose;
```

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/4f3bf9a9f3e8b720011d2db029876a9df2b1c098).

### Build our models

Create a folder in your repo called `models`.

We have two models for our Book-E application -- a bookmark and a user. Let's think about how we're going to build them out.

#### Data Modeling and Entity-Relationship Diagrams (ERDs)

As part of the planning for your future projects, you'll need to plan the data model and document it with an [Entity-Relationship-Diagram (ERD)](https://www.guru99.com/er-diagram-tutorial-dbms.html). This is a commonly-used tool in organizations to plan and document the models and their relationships for a database.

Here's an ERD that documents the data model for Booke:

![Screen Shot 2021-09-29 at 9 15 43 AM](https://media.git.generalassemb.ly/user/21811/files/e60ff000-2105-11ec-988c-29d8fb479f10)

Here's an example of the code for the Bookmark model -- let's talk through this!

```js
// models/Bookmark.js
// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 2 properties, and assign it to a variable
const BookmarkSchema = new mongoose.Schema({
	title: String,
	url: String,
});

// instantiate the model, calling it "Bookmark" and with the schema we just made
const Bookmark = mongoose.model('Bookmark', BookmarkSchema);

// export the newly created model
module.exports = Bookmark;
```

Following this same pattern, try to build out the User model. It should have 2
properties. We'll add the relationship between them later:

- email: String
- name: String

Check out the
[mongoose schematypes](https://mongoosejs.com/docs/schematypes.html) for all the
various types that aren't strings.

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/04459d77f84107e6e29030988e8434d273883cc2).

### Seed the database

Create a `seeds.json` and `seeds.js` file inside the `db` directory. For now, let's just create a seed file for the Bookmarks. This is a common approach when we want to populate our application with data for development purposes.

```json
[
	{
		"title": "Microsoft",
		"url": "https://microsoft.com"
	},
	{
		"title": "reddit",
		"url": "https://reddit.com"
	},
	{
		"title": "Google",
		"url": "https://google.com"
	},
	{
		"title": "Know your meme",
		"url": "https://knowyourmeme.com/"
	},
	{
		"title": "Hacker news",
		"url": "https://news.ycombinator.com"
	}
]
```

We won't seed our database programmatically just yet -- we'll do so in a little bit! For now, let's head to to our MongoDB Atlas cluster and manually add in some Bookmarks data just so that we have data to play around with.

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/06727fd596a89aa956b0c360057848ca6dab6e14).

### Making our first route

Let's create an **index** route to display all of the bookmarks in our database. Remember the signature for the `get` method? It looks like all of the [Express route methods](https://expressjs.com/en/guide/routing.html#route-methods). We haven't seen the `next` parameter used yet, but we'll add it here for completeness:

```js
// controllers/bookmarksController.js

// Index: GET all the bookmarks
router.get('/', (req, res, next) => {
	// 1. Get all of the bookmarks from the DB
	// 2. Send them back to the client as JSON
	// 3. If there's an error pass it on!
});
```

We've seen how we can send a response using [Express response methods](https://expressjs.com/en/guide/routing.html#response-methods) like `res.sendStatus()` and `res.send()`. Now we want to explicitly send the response as JSON, so we'll use `res.json()`.

</details>

This is the basis for how we will send data from the database to the front end.

### Reading Data

> The R in CRUD

Create a folder called `controllers` in your application. In your `controllers` folder, create a file called `bookmarksController.js`.

Our controller is really intended to serve data from database, which means we
need to query the database. To this end, we will use the model we defined
using Mongoose.

Next, let's fill out the routes for **reading** from the database.

```js
//controllers/bookmarksController.js
// require the Express module
const express = require('express');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import the bookmark model
const Bookmark = require('../models/Bookmark');

// Add routes to the router object
// Index: GET all the bookmarks
router.get('/', (req, res, next) => {
	// 1. Get all of the bookmarks from the DB
	Bookmark.find({})
		// 2. Send them back to the client as JSON
		.then((bookmarks) => res.json(bookmarks))
		// 3. If there's an error pass it on!
		.catch(next);
});

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
```

Note: This syntax follows the Promise chaining that we've seen throughout Units 1 and 2. Now that we know how to use `async/await` and `try/catch` syntax, how might we refactor our code to be more modern and avoid so-called "callback hell"?

<details><summary>Solution</summary>

```js
// Index: GET all the bookmarks
router.get('/', async (req, res, next) => {
	try {
		// 1. Get all of the bookmarks from the DB
		const bookmarks = await Bookmark.find({});
		// 2. Send them back to the client as JSON
		res.json(bookmarks);
	} catch (err) {
		// if there's an error, pass it on!
		next(err);
	}
});
```

</details>

To test things out, we'll need to import the bookmarks controller and then use it:

```js
/* START CONTROLLERS HERE */

const bookmarksController = require('./controllers/bookmarksController');
app.use('/api/bookmarks/', bookmarksController);

/* END CONTROLLERS HERE */
```

The `app.use('/api/bookmarks/', bookmarksController)` method here takes two arguments. It lets us define the base path
for all requests that will be sent to the bookmark controller. This means that we won't be using the `/api/bookmarks` inside our controller.

Run your server using `nodemon` and try going to [http://localhost:8000/api/bookmarks](http://localhost:8000/api/bookmarks) to see your bookmarks data!

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/c05d8f208da01ea718d562a79841f7f99c7fc007)

### We do: Get bookmark by ID

Using the same bookmark controller and model, we'll add a **show** route.

First let's add the route and console log:

```js
// Show: Get a Bookmark by ID
router.get('/:id', (req, res, next) => {
	console.log(req.params);
});
```

What's the `:id` syntax? This is how we tell express to
expect a **variable** to be passed in. In this case it's called a `param` and
express will interpret it and give it to us in the request object, in another
object called `params`.

```js
// Show: Get a Bookmark by ID
router.get('/:id', (req, res, next) => {
	// 1. Find the Bookmark by its unique ID
	// 2. Send it back to the client as JSON
	// 3. If there's an error pass it on!
});
```

How can we find an item in the database by its id? Do we have a pattern to use for this?

```js
// Show: Get a Bookmark by ID
router.get('/:id', async (req, res, next) => {
	try {
		// 1. Find the Bookmark by its unique ID
		const bookmarks = await Bookmark.findById(req.params.id);
		// 2. Send it back to the client as JSON
		res.json(bookmarks);
	} catch (err) {
		// if there's an error, pass it on!
		next(err);
	}
});
```

Run your server and make sure you are able to retrieve a Bookmark by its id!

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/134606ed2464170316b6c977668f875c19ccfcd2).

### GET requests with Postman

Launch Postman. Make sure you're logged in (create an account if you don't have
one).

Ensure your server is running with no errors.

- Enter `localhost:8000/api/bookmarks/` in the address bar
- Ensure the dropdown says `GET`
- Click `Send`

You should see the response below, containing all the bookmarks!

Also test the show route. You should see a
single bookmark as the response.

If we're just testing GET routes, we can use either Postman or the browser. But
for anything more, we need to use Postman, because it's easier to send data. We can also save all of our requests for a given application that we're developing in a collection, making the requests organized and reusable!

### Creating Data

> The C in CRUD

There are a bunch of different methods we can use to retrieve data, but there's
really only one used to create new data: `.create()`

```js
// Create: POST a Bookmark
router.post('/', async (req, res, next) => {
	try {
		// 1. Use the data in the req body to create a new bookmark
		const newBookmark = await Bookmark.create(req.body);
		// 2. If the create is successful, send back the record that was inserted, specifying 201 status for Created
		res.status(201).json(newBookmark);
	} catch (err) {
		// 3. If there was an error, pass it on!
		next(err);
	}
});
```

Remember that this `POST` request will only work with the middleware we've added. Express needs to be told how to handle certain types of requests - in this case, a POST request that also contains some JSON (since that's what we'll be sending).

We added the `express.json` middleware to be able to interpret the request body. This will automatically parse the incoming JSON and put it into the `request` object for us.

```js
// Use middleware to parse the data in the HTTP request body and add
// a property of body to the request object containing a POJO with with data.
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* START CONTROLLERS HERE */
...
```

**Remember this middleware must go before our controllers run. Failing to load middleware before routes has been the source of numerous bugs.**

Once we have the route defined, we can send some POST
requests using postman.

Postman is a great tool that I hope you use all the time.

### Sending Data with Postman

1. Launch Postman.
2. Enter `localhost:8000/api/bookmarks` into the bar at the top of the screen.
3. Click on headers and add the following
   - Select `POST` as the request type
   - Under headers tab, specify the `Content-Type` as `application/json`. This allows the
     client tells the server what type of data is actually sent.
     > ![Postman POST header config](./images/postRequestHeader.png)
4. Then, click on the body tab, select the `raw` radio button, and enter
   the new bookmark we'd like to create in the database.
   > ![Postman POST body config](./images/postRequestBody.png)
5. Hit send! Scroll down and you'll the response in the panel below.

What is the response that we get back?

Check your console (wherever nodemon is running) and you'll hopefully see some
output. Postman will also show the response from the server.

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/bbe432b28a4bc93e48f21c1e27d3ce940003a088).

### You do: Updating Data (15 min)

> The U in CRUD

Updating is a bit more tricky than just retrieving or creating data - it's
basically doing both.

Combining the `params` and the `req.body` that we've used in the GET and POST
methods, try the following:

- create a new PUT route at `/api/bookmarks/:id`
- use the parameter to search for a record (see below)
- use req.body to pass in the data to the model

You'll use the model method `findOneAndUpdate()` which takes three arguments:

1. the query to find a record to be updated (same as `find({})` uses)
2. the new data to update the old record (an object)
3. an additional option so Mongoose returns the updated document (the default is
   the original document). You can read more about the possible options
   [here](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate), and
   this does not have to be anything more `{ new: true }` as the third argument

What HTTP verbs should you use for each? What routes should they go on?

Test your code using Postman. Make sure you set the method to PUT on the dropdown.

> 5 min review

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/8427468d77c093d7516ac40c04e8afc70c06d94d)

### You do: Delete a record

Deleting follows a similar pattern, this time we just need to delete based on
one value. We'll use title again.

- create a new DELETE route at `/api/bookmarks/:id`
- use req.params.id to search for a record to delete
- use [`findByIdAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete) to delete a record by its id

Test your code using Postman. Make sure you set the method to DELETE on the dropdown.

> 5 min review

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/f90a589b3b4c3fccaa81996683564646ff650159)

## Second half

### CRUD with two related models

So far we've built out CRUD on one model. But in a lot of cases, we have more than one, and they relate to each other. We want to be able to query them both as they relate to each other.

We'll start by adding relations to the Bookmark models. There are two main ways we can express relationships in Express APIs -- with a reference, as we're seeing here, or with subdocuments. Next week you'll have the option to learn more about the latter, but for now let's focus on creating a reference to another model.

```js
// models/Bookmark.js
const BookmarkSchema = new mongoose.Schema({
	title: String,
	url: String,
	owner: {
		// References use the type ObjectId
		type: mongoose.Schema.Types.ObjectId,
		// the name of the model to which they refer
		ref: 'User',
	},
});
```

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/a7f86321a8b060b7d0b4ef461fbf48a5f7392af1).

### You do: Index Route: GET Users

Go to your MongoDB Atlas interface, create a `users` collection and manually insert some users into your `booke` database under the users collection.

```json
[
	{
		"name": "Esin Saribudak",
		"email": "esin@cats.com"
	},
	{
		"name": "Carlos Godoy",
		"email": "carlos@crypto.com"
	},
	{
		"name": "Shaw Kitajima",
		"email": "shaw@running.com"
	}
]
```

Using what we covered earlier, build out the route to GET all users in `controllers/usersController.js`. Add your `usersController` to `index.js` so that your users routes are exposed to the client.

- use `find()`
- send a json response
- test your work using Postman

> 5 min review

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/1dab4999c926fbb4155b8247b23851ee896670ea).

### You do: Show Route: GET one user

Add a new route that gets a single user by id.

- use the route params, calling it `:id`
- use `findById()` instead of `find()`
- send a json response
- test your work using Postman
- stretch: send back a 404 if user not found

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/bc064ada4b2ef589d9c7d431ca28d715dc836bf8).

### We do: Create a user

Now that we can query users, lets make a route to create a new user. For now, we won't add any relations - just creating a single user without favorites.

This pattern should look familiar. We take the parsed object from the request body and pass it directly into `create()`.

```js
router.post('/', async (req, res, next) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (err) {
		next(err);
	}
});
```

Test out your route in Postman!

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/3feb2cae61cee553e372b1f5f50a3e1e399a26e5)

## Using Population

Let's change up our `db/seeds.js` file so that we can quickly delete everything in the database and add a new user as our owner of a bunch of bookmarks:

```js
const mongoose = require('./connection');

const Bookmark = require('../models/Bookmark');
const User = require('../models/User');
const bookmarkseeds = require('./seeds.json');

Bookmark.deleteMany({})
	.then(() => User.deleteMany({}))
	.then(() => {
		return User.create({ email: 'fake@email.com', name: 'Fake Person' })
			.then((user) =>
				bookmarkseeds.map((bookmark) => ({ ...bookmark, owner: user._id }))
			)
			.then((bookmarks) => Bookmark.insertMany(bookmarks));
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
```

Quit your server. Run your `seeds.js` file with the following code.

```cli
$ node db/seeds.js
```

You should see the seed data log!

Now we can see that the bookmarks all have an owner assigned to them. We could use a second API call to get the details for the owner, but Mongoose makes it easy to add virtual data to our response object with the `.populate()` method. Change the index and show routes for the bookmarks as follows:

```diff

router.get('/', async (req, res, next) => {
...
+     const bookmarks = await Bookmark.find({}).populate('owner')
...
});

router.get('/:id', async (req, res, next) => {
...
+	const bookmark = await Bookmark.findById(req.params.id).populate('owner');

...
});
```

Test the results in the browser or Postman!!!

## CORS

Sometimes we need we'll need to add the `cors` dependency. CORS stands for Cross Origin Resource Sharing. Express is enforcing a CORS policy that blocks cross-origin requests without proper configuration on the back end.

You can think of origins as website domains, like `localhost:3000`, `localhost:8080`, `google.com`, `fuzzy-panda-cat.herokuapp.com`, and so on.

Because our server runs on `localhost:8000`, any requests that come from somewhere that is NOT `localhost:8000` will be blocked, by default. So if we had a website that made `fetch()` requests to `localhost:8000`, they would be blocked unless we configure cors in express.

The npm package `cors` is middleware that tells Express to accept requests from different origins. By default it just enables ALL origins. For better security, you can [configure](https://www.npmjs.com/package/cors#configuring-cors) the `cors` middleware to enable cross-origin requests from specific origins (URLs). 

> [Here's a good article](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
> on MDN about what CORS is.

First install cors to your application:

```cli
$ npm i cors
```

Then configure it in `index.js`:

```diff
const express = require('express')
+const cors = require('cors')

const app = express()

// in middleware
+app.use(cors())
...
```

</details>

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/9b37a7a100309ad3cdd7c1d43eb0022aceac48ec).

## Handling Errors

We've been using the `next` parameter in our controllers to pass our errors onto the _"next"_ piece of middleware in our application. We manually wrote additional code in our route handlers to check for errors, but this was repetitive. At this point we don't have anything to do the job of handling the errors that we've been passing to `next`, so let's add something to do that. Inside the `index.js` add the following code **right after the comment ending the controllers**:

```js
...
/* END CONTROLLERS HERE */

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});
```

Because we need to send an error back to the client if something goes wrong, we're going to check the errors that get passed through this middleware for a status code and a message, if none exists, we'll just use a generic 500 Internal Server Error. The `res.status()` method allows us to set the status on an outgoing response, but it won't actually send the response. We'll use the `send()` method to handle sending the response and give it the message stored in our variable.

See commit [here](https://git.generalassemb.ly/esin87/express-book-e-demo/commit/b8627174ccdb04d2575f9c75fb59ad9fe1b95905).

## Additional Resources

- Express docs http://expressjs.com/en/4x/api.html
- Mongoose.js docs https://mongoosejs.com/docs/guide.html

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
