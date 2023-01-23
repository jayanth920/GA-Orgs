# Little Node App

Node and Mongoose, deployed to Heroku.

1. Sign up for a *free* [MongoLab account](http://mongolab.com).
- [Create a MongoLab database.](https://mongolab.com/create) (Your account can have multiple databases.)
- Create a new user in the *database*. This is *different* from your MongoLab user account. Don't bother with crazy password security. You'll need the username and password for step 6.
- `$ heroku create`
- `$ git push heroku master`
- Set an environment variable with the appropriate information from your MongoLab database. The variable here has been called `MONGODB_URL`, but it can be anything as long as it matches the place the URL is referenced in your `index.js`.
```
$ heroku config:add MONGODB_URL=name_of_user_you_created:password_of_user_you_created@ds123456.mongolab.com:45795/your_database_name
```

So if I created a database called `little-node`, and a user named `juan` with a password of `foo` I'd run:

```
$ heroku config:add MONGODB_URL=juan:foo@ds123456.mongolab.com:45795/little-node
```

If you get errors:

```
$ heroku logs --tail
```

If the error says something about `ENOENT` or `ERRCONNECTION`, make sure you set the Mongo URL correctly.

Check with:

```
$ heroku config -s
```
