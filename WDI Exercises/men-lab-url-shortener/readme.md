# MEN Lab: URL Shortener

Have you ever wondered how URL shorteners work? In today's lab, you'll build your own
bit.ly clone.

Here's the basic idea:

>When a user submits a link to your application, you generate a unique, short hash, and
store both in the database. When the short URL is requested, your application looks up
the long URL and redirects the user to the long URL.

## Step 1: The DB

Create a `db` directory with the following files:

```
connection.js
  connects to mongodb using mongoose
  exports the connection with module.exports

models.js
  requires the connection file
  defines a Url schema with the following attributes:
    - short
    - long
    - timestamp
  creates a mongoose model from that schema
  exports the Url model

seeds.js
  requires the models file
  creates a few Urls with fake long and short attributes
```

You did the above correctly if you can seed the database `node db/seeds.js`

## Step 2: The Redirect

Create an `index.js` file to be the server for your application.

This file should:

- require and instantiate express
- require the Url model
- create a route `app.get('/:short')` that:
  - finds one Url based on `req.params.short`
  - redirects to that url's long attribute

## Step 3: The Shortening

Create a `POST` route for creating new Urls. When a Url is created, redirect
to that Url's show page.

When creating a Url, you can use the [checksum module](https://www.npmjs.com/package/checksum) to generate
the short url.

Here's a demo:

```
$ npm install --save checksum
```

```js
var checksum = require("checksum")
checksum("areallylongstring") // '8419ef571ef6d28c9a9e820e70c2defd23b7d948'
checksum("areallylongstring").substr(0,5) // '8419e'
```

Remember to:

- create a route for the show page
- set the view engine
  - `app.set('view engine','hbs')`
- add a view for the show page, and render it
- require and configure the body parser
  - `app.use(bodyParse.urlencoded({extended: true}))`

## Step 4: Finish URL Crud

- Allow users to view all urls
- Allow users to delete Urls
- Allow users to edit Urls

## Bonus 1

Allow users to customize the short URL, and prevent duplicate entries.

## Bonus 2

Allow users to unshorten a URL to see what it would resolve to before redirecting

## Bonus 3

Track clicks on the short URL.
