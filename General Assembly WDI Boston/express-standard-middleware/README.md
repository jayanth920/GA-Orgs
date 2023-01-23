![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Express: Standard Middleware

## Objectives

- Define middleware.
- Parse POST and PUT/PATCH requests with the `body-parser`.
- Handle logs and error messages with `morgan` and `errorhandler`.

## Commonly Used Express Middleware

As you build a number of different applications in Express, you'll find that there are a few pieces of Express middleware that you'll be reaching for over and over again - they're found in almost every project.

| Middleware   | Package Name                 | Purpose                                      | Installed by Generator? |
| :----------: | :--------------------------: | :------------------------------------------: | :---------------------: |
| Serve-Static | N/A - now bundled in Express | Serve up static pages.                       | :white_check_mark:      |
| CORS         | `cors`                       | Create a CORS policy for the app.            | :no_entry_sign:         |
| BodyParser   | `body-parser`                | Easily read the body of an incoming request. | :white_check_mark:      |
| Morgan       | `morgan`                     | Logging.                                     | :white_check_mark:      |
| ErrorHandler | `errorhandler`               | Self-explanatory.                            | :no_entry_sign:         |

### `serve-static`

Remember how, when we were building applications in Rails, we would have a `public` folder for holding static HTML and other assets? Well, [serve-static](https://github.com/expressjs/serve-static) allows us to do the same thing in Express. Just hook it up to your app and pass it a folder name to use it.

```javascript
app.use(express.static('public'));
```

Now any static asset (HTML, CSS, JS, images) you put inside `public` will be served up automatically.

#### Lab: Serve-Static

In your teams, create a new small Express app that serves up one of the following three static images (or any other three images that you'd prefer to serve):

- [image one](http://static.memrise.com/uploads/profiles/bearzooka_140515_2354_31.jpg)
- [image two](http://luckysun.info/wp-content/uploads/2015/05/ROBOT-CHEETAH.jpeg)
- [image three](http://www.itsartmag.com/features/itsart/wp-content/uploads/2013/06/monsterfish-breakdown.jpg)

### `cors`

If you deploy your API to heroku, but deploy your front-end to GitHub, pay attention!

Fortunately, dealing with CORS is Express is pretty easy - just download the CORS middleware via NPM, and then require and use it inside `app.js`.

```bash
npm install --save cors
```


```javascript
// app.js

var cors = require('cors');
//...
app.use(cors());
```

This will give us a blanket white-list CORS policy, which isn't so great for real life, but is fine for now.

### `body-parser`

Reading the body of an incoming request is mission-critical for just about every possible web application. `body-parser` gives us an easy interface for reading that request body, so that we don't have to worry about (a) loading data chunks one at a time, or (b) making sure that the body is in the right format.

```javascript
// app.js

var bodyParser = require('body-parser');
// ...
app.use(bodyParser.json());
```

This will add an additional property, `.body` to the request object that your middleware interacts with, which you can then immediately use to grab data.

```javascript
router.post('/', function(req, res) {   // create
  models.Person.create(req.body).then(function(person){
    res.json(person);
  }, function(err){
    console.error(err);
  });
  // res.send("people#create");
});
```

### `morgan`

Back when we were working with Rails, you may or may not have noticed a directory inside your projects called `log`; this is where your Rails app would keep an ongoing record of everything it's ever done. This can be an extremely useful tool for debugging, and is really a core feature for just about any web application.

```javascript
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream('logs/access.log', {flags: 'a'});

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));
```

Create a new directory called `logs` in the root of your project. If you skip this, you will get an error!

### ErrorHandler
`errorhandler`, as the name implies, is a piece of middleware that's designed to help manage how errors are handled. Unlike the other middleware mentioned so far, **`errorhandler` is for use in development _only_**; this is because `errorhandler` sends its full stack trace back to the client anytime there's an error, and that is _not_ something you want to happen in production.

```
npm install --save-dev errorhandler # notice the flag!
```


```javascript
// app.js

var errorhandler = require('errorhandler');
// ...
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}
```

One other thing to be aware of with Express that 404 errors are **_not_** handled by default, so you'll need to create a catch-all route to handle them. An example of this is below:

```javascript
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
  // Error handler is `use`d next, so 'next' refers to it. This line calls that error handler with the new error
});
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}
```

[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
