[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Mongoose

MongoDB is a popular database choice for web applications, particularly _at-scale_. NoSQL databases like MongoDB lend themselves well to horizontal scaling (using more servers), versus vertical scaling (buying bigger servers). Its flexibility can be a major benefit, and we saw that it allows us to store our data any way we want. This can also be problematic though because it can introduce inconsistencies in our data and make it harder for us to avoid and track down bugs. To help in this regard, we'll be using Mongoose. One of its the key jobs will be to provide us with a bit more control over the data that goes into our database.

## Lesson Objectives

1. Describe the purpose of Mongoose in terms of an ODM.
1. Access and manipulate a MongoDB database from a Javascript program by using Mongoose.
1. Validate data for storage in MongoDB via a Mongoose Schema.

## What is MongooseJS

MongooseJS describes itself as _"elegant mongodb object modeling for node.js"_. So let's unpack that and see what it actually does.

One of the chief jobs that MongooseJS does for us is make it easier for us to interact with MongoDB in NodeJS via JavaScript. We'll use MongooseJS to relay all of the requests to and from MongoDB in our NodeJS applications.

Another important job for MongooseJS is to help us structure our data consistently within collections and documents. We've seen how MongoDB allows us to store our data any way we want. This can be problematic because it can result in inconsistencies in our data which can introduce bugs in our applications. MongooseJS provides us with more control over the data that goes into our database by allowing us to _**model**_ how the data should look.

MongooseJS acts like a guard against bad data getting into our database by checking the data against a _schema_ (the model of our data) before it passes it to MongoDB. If the data doesn't match the schema, it rejects it.

MongooseJS can also do a lot of other helpful things such as: create relationships between data that is stored in different collections and documents; validate and even transform data before or after it is added to the database; and help us query our data more easily and efficiently in JavaScript.

## Make a Schema

A schema will allow us to set specific keys in our objects. So if we have a key of `name`, we won't be able to insert other keys that don't match like `firstName` or `names`. This helps keep our data more organized and reduces the chance of errors.

We can also specify the datatypes. We can set the datatype of `name` to a `string`, `age` to a `number`, `dateOfBirth` to a Date, `bff` to a Boolean etc.

We can also make some fields required and we can even set default values.

Here is a sample MongooseJS Schema, with many options. We'll be making a smaller variation of this schema during this lesson.

```js
const articleSchema = new Schema(
	{
		title: { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
		author: { type: String, required: true },
		body: String,
		comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
		publishDate: { type: Date, default: Date.now }, // can set defaults for properties
		hidden: Boolean,
		meta: {
			// can have properties that are objects
			votes: Number,
			favs: Number,
		},
	},
	{ timestamps: true }
);
```

## Basic Set Up

- Change directories to your `sandbox`.
- Create a new directory: `mkdir intro-to-mongoose`
- `cd intro-to-mongoose`
- `touch app.js`
- `npm init -y`
- `git init`
- `npm install mongoose dotenv`
- `touch tweet.js .env`
- `echo node_modules >> .gitignore`
- `echo .env >> .gitignore`
- `code .`

## Set Up Mongoose

Inside `.env`:

- Paste your connection string (yours will look different than the one below!)

```
DATABASE_URL=mongodb+srv://sei:<password>@sei-w0kys.azure.mongodb.net/test?retryWrites=true
```

You need to update the connection string as follows:

1. Replace <password> with the password of the database user you created.
2. _IMPORTANT_: The connection string by default connects to a namespace (database) named admin (...mongodb.net/admin?retryWrites=true...). However, the admin namespace must be updated to your preferred namespace (database) name. For example, "tweets": (...mongodb.net/tweets?retryWrites=true...).

Inside `app.js`:

- require mongoose and our Tweet schema
- require dotenv to load custom environmental variables from `.env` file
```js
// Dependencies
const mongoose = require('mongoose');
const Tweet = require('./tweet.js');
require('dotenv').config();
```

- tell Mongoose where to connect with Mongo and have it connect with the sub-database `tweets` (if it doesn't exist, it will be created)
- set `mongoose.connection` to a shorter variable name

```js
// Global configuration
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;
```

- Connect to mongo

```js
// Connect to Mongo
mongoose.connect(
	mongoURI,
	() => {
		console.log('connection with MongoDB is established');
	}
);
```

- **OPTIONAL** provide error/success messages about the connections

```js
// Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is MongoDB not running?'));
db.on('connected', () => console.log('MongoDB connected on: ', mongoURI));
db.on('disconnected', () => console.log('MongoDB disconnected'));
```

- While the connection is open, we won't have control of our terminal. If we want to regain control, we have to close the connection. Let's set leave the connection open for 5 seconds to demonstrate that the app will hang and then we'll get our close message.

Otherwise we have to press `control c`. When we run an express app, we typically want to leave the connection open, we don't need to get control of terminal back, we just let the app run.

```js
// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
setTimeout(() => {
	db.close();
}, 5000);
```

- The entire configuration for mongoose:
- Don't memorize it, just set a bookmark and refer back to this as you need it.
- note the setTimeout was just to demonstrate what `db.close()` does, you don't always need it

Run `node app.js` to connect to your database.

## Set Up Tweet Schema

In `tweet.js`

```js
const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

// create a new Schema
// This will define the shape of the documents in the collection
// https://mongoosejs.com/docs/guide.html
const tweetSchema = new Schema(
	{
		title: String,
		body: String,
		author: String,
		likes: { type: Number, default: 0 },
		sponsored: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

// Creating Tweet model : We need to convert our schema into a model-- will be stored in 'tweets' collection.  Mongo does this for you automatically
// Model's are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
const Tweet = mongoose.model('Tweet', tweetSchema);

//make this exportable to be accessed in `app.js`
module.exports = Tweet;
```

## Create a Document with Mongoose

In `app.js`

Let's make ourselves an object to insert into our database.

```js
const myFirstTweet = {
	title: 'Deep Thoughts',
	body: 'Friends, I have been navel-gazing',
	author: 'Karolin',
};
```

Then we'll use Mongoose to create a Tweet:

```js
Tweet.create(myFirstTweet, (error, tweet) => {
	if (error) {
		//if there is an error console log it
		console.log(error);
	} else {
		// else show us the created tweet
		console.log(tweet);
	}
	// get control of terminal back
	// else just use control c
	db.close();
});
```

Let's run this with `node app.js`.

We should see:

```sh
mongo connected:  mongodb://localhost:27017/tweets
the connection with mongodb is established
{ likes: 0,
  sponsored: false,
  _id: 5e342fc4085fe1e464d8a2f5,
  title: 'Deep Thoughts',
  body: 'Friends, I have been navel-gazing',
  author: 'Karolin',
  createdAt: 2020-01-31T13:46:44.751Z,
  updatedAt: 2020-01-31T13:46:44.751Z,
  __v: 0 }
mongo disconnected
```

Timestamps, deleted, and likes had default values, a unique \_id has been generated

Every time we run `node app.js` it will run the code, and thus insert this object over and over again. Let's not do that. Let's comment it out.

Let's insert many more tweets

```js
const manyTweets = [
	{
		title: 'Deep Thoughts',
		body: 'Friends, I have been navel-gazing',
		author: 'Karolin',
	},
	{
		title: 'Sage Advice',
		body: 'Friends, I am vegan and so should you',
		author: 'Karolin',
		likes: 20,
	},
	{
		title: 'Whole Reality',
		body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
		author: 'Karolin',
		likes: 40,
	},
	{
		title: 'Organic',
		body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
		author: 'Karolin',
		likes: 162,
	},
	{
		title: 'Confusion',
		body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
		author: 'Karolin',
		likes: -100,
	},
	{
		title: 'Vespa',
		body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
		author: 'Karolin',
		likes: 2,
	},
	{
		title: 'Licensed',
		body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
		author: 'Karolin',
		likes: 3,
	},
	{
		title: 'Water',
		body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
		author: 'Karolin',
	},
];
```

Let's insert all these tweets:

```js
Tweet.insertMany(manyTweets, (error, tweets) => {
	if (error) {
		console.log(error);
	} else {
		console.log(tweets);
	}
	db.close();
});
```

- `node app.js`

and let's comment it out so we don't insert duplicates

## Find Documents with Mongoose

- Mongoose has 4 methods for this
- `find` - generic
- `findById` - finds by ID - great for Show routes!
- `findOne` - limits the search to the first document found
- [`where`](http://mongoosejs.com/docs/queries.html) - allows you to build queries, we won't cover this today

Let's find all

```js
Tweet.find((err, tweets) => {
	console.log(tweets);
	db.close();
});
```

Let's limit the fields returned, the second argument allows us to pass a string with the fields we are interested in:

```js
Tweet.find({}, 'title body', (err, tweets) => {
	console.log(tweets);
	db.close();
});
```

Let's look for a specific tweet:

```js
Tweet.find({ title: 'Water' }, (err, tweet) => {
	console.log(tweet);
	db.close();
});
```

We can also use advanced query options. Let's find the tweets that have 20 or more likes

```js
Tweet.find({ likes: { $gte: 20 } }, (err, tweets) => {
	console.log(tweets);
	db.close();
});
```

### Delete Documents with Mongoose

We have two copies of our first tweet and a few options to delete it

- `remove()` danger! Will remove all instances
- `findOneAndDelete()` - this seems like a great choice
- `.findByIdAndDelete()`- finds by ID - great for delete routes!

```js
Tweet.findOneAndDelete({ title: 'Deep Thoughts' }, (err, tweet) => {
	if (err) {
		console.log(err);
	} else {
		console.log('This is the deleted tweet:', tweet);
	}
	db.close();
});
```

### Update Documents with Mongoose

Finally, we have a few options for updating

- `update()` - the most generic one
- `findOneAndUpdate()`- Let's us find one and update it
- `findByIdAndUpdate()` - Let's us find by ID and update - great for update/put routes!

If we want to have our updated document returned to us in the callback, we have to set an option of `{new: true}` as the third argument

```js
Tweet.findOneAndUpdate(
	{ title: 'Vespa' },
	{ sponsored: true },
	{ new: true },
	(err, tweet) => {
		if (err) {
			console.log(err);
		} else {
			console.log(tweet);
		}
		db.close();
	}
);
```

We'll see the console.logged tweet will have the value of sponsored updated to true. Without `{new: true}` we would get the original unaltered tweet back.

### Intermediate

We can count how many tweets we have with likes greater than 20

```js
Tweet.countDocuments({ likes: { $gte: 20 } }, (err, tweets) => {
	console.log(tweets);
	db.close();
});
```

We can check out all the things we can do at the [Mongoose API docs](http://mongoosejs.com/docs/api.html)

### Chaining Queries

With newer versions of MongooseJS, we can even chain our queries. For example, the below code does a search, limits the number of returned queries to 2, sort them by title:

```js
Tweet.find({ likes: { $gte: 20 } }, 'title -_id')
	.limit(2)
	.sort('title')
	.exec((err, tweets) => {
		console.log(tweets);
		db.close();
	});
```

## Essential Questions

**❓ What is Mongoose?**

**❓ What do we need to do to connect our MongoDB to a Node application?**

**❓ What is the purpose of a Mongoose Schema?**


