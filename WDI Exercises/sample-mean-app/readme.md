# Sample MEAN app

This sample app is a simplified version of [this demo app](https://github.com/madhums/node-express-mongoose-demo). This is an excellent resource for more advanced topics such as user authorization and file upload. There is also a wiki and associated boiler plate.

There is a branch for each header below.

## Initialize npm

## [Set up todos model](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/tree/1-add-mongoose)

### [add mongoose as project dependency](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-b9cfc7f2cdf78a7f4b91a753d10865a2R16)
`npm install mongoose`

### [set up global configuration in config/index.js](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-c8c5ee8e781f831e4927a392fa3565e6)

When we require the configurations elsewhere, we will just provide a path to the `config/` directory. `require` will automatically look for a file `config/index.js` if only the path to the directory is provided to config. This is a common pattern when requiring a file which itself is primarily responsiblie for pulling together other files.

This pulling together other files is done in [the last few lines of `config/index.js`](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-c8c5ee8e781f831e4927a392fa3565e6R11-15).

The syntax is a little funny here but what is going on exactly is:
1. Create an object with three properties, `development`, `test`, and `production`.
2. Each has property has a value of the [default configuration](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-c8c5ee8e781f831e4927a392fa3565e6R7) combined with the environment specific settings which are each imported from their own file in [`config/env`](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/tree/master/config/env). These are global configuration settings that are environment specific. In the example it is just the Mongo url (`localhost` for dev and test, and a place to put a [mlab](https://mlab.com/) url for production)
3. Immediately after constructing the object, just the value of the property that matches [`process.env.NODE_ENV` or if that isn't set, `'development'`](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-c8c5ee8e781f831e4927a392fa3565e6R15) is pulled out of the object and assigned to `module.exports`.

This lets us write one set of configurations and has the app dynamically choose the correct configuration for its environment.

### [Define schema in app/models](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-69a97d8fbeff76fc32fbce853df95c59)
We define an schema for out todo model and register it with `mongoose`. We will use mongoose to retreive this model later so we don't need to export it (though we could if we liked).

### [Set up reusable connection in config/db](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-df637896b6c1e7397fe6df348e54374d)
We need a connection to the database to seed our data but we seperately will want to use the same logic to connect to the database before we start the app. We can define one connection function and import it into seeds now and use that same function for our app when we get express installed.

Any time we connect to the database, either for loading seeds or for running our app, we want to load our mongoose models. [This code](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-df637896b6c1e7397fe6df348e54374dR11) will `require` all models defined in `app/models`. We will use mongoose to retreive our models so we don't to store the return value of each of these `require`s. Step by step these lines:
1. `fs.readdirSync` will return an array of file names in the dirctory given (`app/models`)
2. `.filter(file => ~file.search(/^[^.].*\.js$/))` will filter out any filenames that start with a `.` or don't end in `.js`.
3. `.forEach(file => require(join(modelsPath, file)))` will load each file from `app/models` that has passed the filter.

### [Add json seeds in config/db](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-081a158f58d784a15795369e97caf053)
A JSON file with an array of sample todos.

### [Use connection and seeds to seed db](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-4ebd90927ec576f2ff03e290f1b63702)
Pulls together `Todo` model (retrieved from `mongoose`), the `todoSeeds` which is a regular array, and the `connect` function which will start a connection to the database and return a promise that will resolve when that connection is made.

### [add npm script for seeding](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/4187a776d831dce91d9f61693bf6daccae2ee3b7#diff-b9cfc7f2cdf78a7f4b91a753d10865a2R7)
We can save ourselves a little typing so we can run the seeds with `npm run seed` rather than `node config/db/seed.js`. This also makes life easier for someone who wants to use or collaborate on our app. One of the first places to look when exploring a node app is its `package.json` file. Ideally, scripts definied here are also described in documentation.

## [Add express and middleware](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/baa5caea6adffe43c2bd87cf9e427ba64826c2d3)

- Install express, morgan, body-parser, and cors as dependencies
  - Install nodemon as dev dependency
- Define a function in config/express.js to add express middleware
- Add main file, server.js
  - Use config/db/connect.js to connect to mongo before starting server
  - Require config/express.js in server.js and pass the express app
- Add script to start server

## [Add API routes](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/26331e592c93a8cc2998f6a7fc95cae2010806d9)

- Define a function in config/routes.js to handle routing
- Define controller actions in app/controllers/todos.js
- Create a router for handling API routes in config/api/routes.js
  - Use actions from the todos controller as route handlers
  - In config/routes.js use the router for all "/api" routes
- In server.js load the config/routes.js and pass app to it

## [Add public assets](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/10dd2dbcffcc630a50d5b6fa110dade46084789d)

- Create directory public to serve static assets from
- Create an index.html file that will start our angular app
- Add a get wildcard route and use sendFile to serve index.html

## [Add Angular and Dependencies](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/a2ea5d46520344d08c5062027326743476ad25fe)

- Install angular, angular-resource, ui-router (@uirouter/angularjs)
  - https://ui-router.github.io/blog/uirouter-scoped-packages/
- Link the node_module installed dependencies to index.html
- Add app.js in new directory app/js/
- Link app.js in index.html

## [[WIP] Build out front end](https://git.generalassemb.ly/ga-wdi-exercises/sample-mean-app/commit/bc49b14291f0a3afc82bf1d089f7eca344fcaace)

    - Add Todos resource
    - Add templating to index.html
    - Add controllers for new todo and todos
