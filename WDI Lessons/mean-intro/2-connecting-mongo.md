# https://www.github.com/ga-wdi-exercises/whenpresident
> This commit history created using [Diffshot](https://github.com/RobertAKARobin/diffshot)

# npm install --save mongoose

> [e3ac57c](https://www.github.com/ga-wdi-exercises/whenpresident/commit/e3ac57c)

### [npm install --save mongoose: `package.json`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/e3ac57c/package.json)
![npm install --save mongoose, package.json](_DIFFSHOTS/npm-install-save-mongoose.package-json.png)
 
# Connected to Mongoose

> [1b8ff4f](https://www.github.com/ga-wdi-exercises/whenpresident/commit/1b8ff4f)

- Fill in the blanks: Rails is to ActiveRecord is to Postgres, as Node is to `_____` is to `_____`.
- What's the difference between `$ mongo` and `$ mongod`? What are they similar to in the Rails world?
- What's wrong with this sentence: "When you run `mongoose.Schema` it adds new columns to a table in your database."

### [Connected to Mongoose: `db/connection.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/1b8ff4f/db/connection.js)
![Connected to Mongoose, db/connection.js](_DIFFSHOTS/connected-to-mongoose.db-connection-js.png)
 
# Added seed data

> [f8df0b1](https://www.github.com/ga-wdi-exercises/whenpresident/commit/f8df0b1)

### [Added seed data: `db/connection.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/f8df0b1/db/connection.js)
![Added seed data, db/connection.js](_DIFFSHOTS/added-seed-data.db-connection-js.png)
### [Added seed data: `db/seed.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/f8df0b1/db/seed.js)
![Added seed data, db/seed.js](_DIFFSHOTS/added-seed-data.db-seed-js.png)

-----
STOP
-----
 
# Shows db candidates in candidates#index

> [a849846](https://www.github.com/ga-wdi-exercises/whenpresident/commit/a849846)

- What's the purpose of the callback function in `Candidate.find().then(callback)`? Why is it necessary?

### [Shows db candidates in candidates#index: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/a849846/index.js)
![Shows db candidates in candidates#index, index.js](_DIFFSHOTS/shows-db-candidates-in-candidatesindex.index-js.png)
 
# Shows db candidate in candidates#show

> [05715e4](https://www.github.com/ga-wdi-exercises/whenpresident/commit/05715e4)

- What's the difference between `.find` and `.findOne`?

### [Shows db candidate in candidates#show: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/05715e4/index.js)
![Shows db candidate in candidates#show, index.js](_DIFFSHOTS/shows-db-candidate-in-candidatesshow.index-js.png)

-----
STOP
-----
 
# npm install --save body-parser

> [53ec895](https://www.github.com/ga-wdi-exercises/whenpresident/commit/53ec895)

- Why do we need `body-parser`?

### [npm install --save body-parser: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/53ec895/index.js)
![npm install --save body-parser, index.js](_DIFFSHOTS/npm-install-save-body-parser.index-js.png)
### [npm install --save body-parser: `package.json`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/53ec895/package.json)
![npm install --save body-parser, package.json](_DIFFSHOTS/npm-install-save-body-parser.package-json.png)
 
# Added nonfunctional post route

> [d596426](https://www.github.com/ga-wdi-exercises/whenpresident/commit/d596426)

- How are `<form>` elements and `req.body` related?
- Why is it `req.body` and not `res.body`?

### [Added nonfunctional post route: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/d596426/index.js)
![Added nonfunctional post route, index.js](_DIFFSHOTS/added-nonfunctional-post-route.index-js.png)
### [Added nonfunctional post route: `views/candidates-index.hbs`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/d596426/views/candidates-index.hbs)
![Added nonfunctional post route, views/candidates-index.hbs](_DIFFSHOTS/added-nonfunctional-post-route.views-candidates-index-hbs.png)
 
# Saves new candidate to database

> [49498dd](https://www.github.com/ga-wdi-exercises/whenpresident/commit/49498dd)

- What's the difference between `res.send`, `res.render`, `res.json`, and `res.redirect`?
- Why would `res.json("hello")` throw an error?

### [Saves new candidate to database: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/49498dd/index.js)
![Saves new candidate to database, index.js](_DIFFSHOTS/saves-new-candidate-to-database.index-js.png)

-----
STOP
-----
 
# Updates a candidate in the database

> [d29bac6](https://www.github.com/ga-wdi-exercises/whenpresident/commit/d29bac6)

- Why can't we use `app.put` or `app.patch` for an "update" route? How is the answer to this question related to HTML forms?
- How come `.findOneAndUpdate` has 3 arguments while `.create` has only 2?

### [Updates a candidate in the database: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/d29bac6/index.js)
![Updates a candidate in the database, index.js](_DIFFSHOTS/updates-a-candidate-in-the-database.index-js.png)
### [Updates a candidate in the database: `views/candidates-show.hbs`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/d29bac6/views/candidates-show.hbs)
![Updates a candidate in the database, views/candidates-show.hbs](_DIFFSHOTS/updates-a-candidate-in-the-database.views-candidates-show-hbs.png)
 
# Deletes candidate from database

> [cd45919](https://www.github.com/ga-wdi-exercises/whenpresident/commit/cd45919)

- Why can't we use `app.delete` for a DELETE route?
- Why shouldn't you use `app.get` for DELETE routes?

### [Deletes candidate from database: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/cd45919/index.js)
![Deletes candidate from database, index.js](_DIFFSHOTS/deletes-candidate-from-database.index-js.png)
### [Deletes candidate from database: `views/candidates-show.hbs`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/cd45919/views/candidates-show.hbs)
![Deletes candidate from database, views/candidates-show.hbs](_DIFFSHOTS/deletes-candidate-from-database.views-candidates-show-hbs.png)

-----
STOP
-----

# Added procfile and Mongolab URL for deployment

> [02181c9](https://www.github.com/ga-wdi-exercises/whenpresident/commit/02181c9)

- True or false: the environment variable for your Mongo database's location *must* be `MONGOLAB_URL`.
- What's the value of `process.env.NODE_ENV` on Heroku? On your computer?

### [Added procfile and Mongolab URL for deployment: `db/connection.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/02181c9/db/connection.js)
![Added procfile and Mongolab URL for deployment, db/connection.js](_DIFFSHOTS/added-procfile-and-mongolab-url-for-deployment.db-connection-js.png)

1. `$ git push heroku master`
- Go to www.mongolab.com and sign up / sign in
- Create a new "Single Node" database with the "Sandbox" tier
- Click on the database
- Click "Users"
- Create a new user. (This is *not* the user with which you logged in to Mongolab.) "User" in this context really means "an app that has access to your database". There's no need for security now; I used the username "test" with a password of "testerson".
- Copy the "To connect using a driver" URL from the top of the Users page.
- Set the URL as an environment variable called MONGOLAB_URL using `heroku config:set` as below, filling in the username and password you just created on the "Users" page. For example:
    ```
    $ heroku config:set MONGOLAB_URL=mongodb://test:testerson@ds015760.mlab.com:15760/yourappname
    ```
- `$ heroku run node db/seed.js`
- `$ heroku open`

-----
STOP
-----
 
# Added positions to candidates

> [d4f4d9e](https://www.github.com/ga-wdi-exercises/whenpresident/commit/d4f4d9e)

- What's different about how we're storing Candidates and Positions here versus how we would do it in Rails with ActiveRecord?

### [Added positions to candidates: `db/connection.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/d4f4d9e/db/connection.js)
![Added positions to candidates, db/connection.js](_DIFFSHOTS/added-positions-to-candidates.db-connection-js.png)
### [Added positions to candidates: `db/seeds.json`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/d4f4d9e/db/seeds.json)
![Added positions to candidates, db/seeds.json](_DIFFSHOTS/added-positions-to-candidates.db-seeds-json.png)
 
# Can add a position

> [07e562e](https://www.github.com/ga-wdi-exercises/whenpresident/commit/07e562e)

- Why is `candidate.save` "inside" `Candidate.findOne`?

### [Can add a position: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/07e562e/index.js)
![Can add a position, index.js](_DIFFSHOTS/can-add-a-position.index-js.png)
### [Can add a position: `views/candidates-show.hbs`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/07e562e/views/candidates-show.hbs)
![Can add a position, views/candidates-show.hbs](_DIFFSHOTS/can-add-a-position.views-candidates-show-hbs.png)
 
# Can delete a position

> [88a8de4](https://www.github.com/ga-wdi-exercises/whenpresident/commit/88a8de4)

### [Can delete a position: `index.js`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/88a8de4/index.js)
![Can delete a position, index.js](_DIFFSHOTS/can-delete-a-position.index-js.png)
### [Can delete a position: `views/candidates-show.hbs`](https://www.github.com/ga-wdi-exercises/whenpresident/blob/88a8de4/views/candidates-show.hbs)
![Can delete a position, views/candidates-show.hbs](_DIFFSHOTS/can-delete-a-position.views-candidates-show-hbs.png)
