[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails Routing and Control

## Objectives

By the end of this lesson, students should be able to:

-   Explain the roles of a router and a controller within a Rails application
-   Define a new controller with methods mapping to standard CRUD actions.
-   Explain the role of the `params` hash.
-   Write basic routes for all standard CRUD actions.
-   Generate standard CRUD routes using "resource routing"
-   Limit which routes "resource routing" generates, using `only:` and `except:`

## Prerequisites

-   Ruby
-   MVC
-   HTTP

## Code-Along : Working with an Existing API

Now that you've mocked up how an MVC app works,
and explored the file structure of a Rails application,
we'll take a look at how Routing and Control are
actually implemented in a Rails.

![Rails HTTP Client Server](./images/http_client_server.png)

As you saw in the prior demonstration,
the flow of our Rails app usually begins with a request from a client,
usually a browser.

> Feeling fuzzy on HTTP?
> Check out this [video](https://www.youtube.com/watch?v=kGOpY2J31pI)
> on HTTP GET and POST, or review the material from Unit 1 on
> [HTTP](https://github.com/ga-wdi-boston/http-study),
> and AJAX [GET](https://github.com/ga-wdi-boston/jquery-ajax-get-delete),
> [POST](https://github.com/ga-wdi-boston/jquery-ajax-post),
> and [PATCH](https://github.com/ga-wdi-boston/jquery-ajax-patch).

Let's start off by hitting an existing Rails API with `curl` requests
and looking at what we get back.

Use the API you created in [rails-api](https://github.com/ga-wdi-boston/rails-api).

Enter `rails server` to start the server

Finally, open your browser to `localhost:3000` -
if your app is working properly, you should see Rails's "Welcome Aboard" page.

The API does two things we're going to focus on for now.

If you make a GET request to `http://localhost:3000/users`,
it will return a list of users, in JSON format.
If you make a GET request to `http://localhost:3000/users/<some number>`,
it will try to return one movie -
specifically, the movie whose ID matches the number in the URL.

If we hit the API with this GET request:

`curl http://localhost:3000/users`

we should see a JSON response with all of the users.

Now let's try requesting a single movie.

`curl http://localhost:3000/users/2`

Should give us a response with one book:

In an actual project, we would probably be accessing this JSON using AJAX,
but `curl` provides us a convenient way of testing our API
without needing to build a front-end.

## Creating a New Rails API

### Code-Along : Defining a Route and Controller

Now that we've played around with an existing Rails application,
let's try to create a new app from scratch.
This new app should work the same way as the old movies API,
but should have some additional features.

Navigate to a directory where you keep your projects,
and create a new Rails app using the following command:

```bash
rails-api new movies_app -T --database=postgresql
```

> `rails-api` tells Rails to use its minimalist configuration, without
> a lot of its non-essential features.
>
> The `-T` flag tells Rails to skip setting up a testing framework.
>
> `--database=postgresql` tells Rails to use Postgres as its database
> instead of the default Rails database, SQLite.

Go into this new `movies_app` directory and take a look at the file structure;
now that you've seen a few of these, perhaps it seems a little less foreign.

```bash
cd movies_app
atom .
```

Rails has already downloaded its starting gems,
so there's no need to run `bundle install` at this time.

Start up the Rails server by running `rails s`
(short for `rails server`).

Let's try to access this app, this time in the browser.
In your browser, go to the default Rails URL, `http://localhost:3000`

```bash
>> ActiveRecord::NoDatabaseError
>> FATAL: database "movies_app_development" does not exist
```

Uh oh! We hit an error. Let's kill the server and figure out what to do next.

It looks like we need to set up a database if we want to move forward.
Actually, this is something we'll need to do every time:
all Rails apps must have a database of some kind in order to run.

To create the database,
we'll be using a tool called `rake` that comes pre-packed with Rails.
`rake` is a close cousin of `grunt` -
its job is to allow us to automate tasks related to our project
and run them from the command line.

```bash
rake db:create
```

Eventually, we might run other `rake` tasks at this point -
for instance, to populate the database with example data.

Let's restart our server by running `rails s`.
If we open up the browser again and go to `localhost:3000`
we should see the Welcome Aboard page again - this means that Rails is running!

**OK! We're done, right?**

Well... no. If we try going to `localhost:3000/movies`,
instead of the JSON we'd expect to see, we instead get a routing error.

```bash
Routing Error
No route matches [GET] "/movies"
```

Whoops! We haven't made any routes yet!

As you learned in the previous lesson,
a route indicates which controller action will be triggered
when a particular type of HTTP request arrives at a given URL.

In order for our API to respond to GET requests at the `/movies` URL,
we'll need to create a Route that specifies what to do
when that type of request comes in.

Add the following code to `config/routes.rb`:

```ruby
get '/movies', to: 'movies#index'
```

This tells Rails,
"When you receive a GET request at the URL path '/movies',
invoke the `index` method specified in the MoviesController class."

Of course, we haven't _defined_ a MoviesController class yet,
so if we try to access `localhost:3000/movies`, we'll get another error:

```ruby
>> uninitialized constant MoviesController
```

The purpose of a controller is to handle requests of some particular type.
In this case, we want to create a new controller called `MoviesController`
for responding to requests about a resource called 'Movies'.

Rails has a number of generator tools
for creating boilerplate files very quickly.
To spin up a new controller,
we can just run `rails g controller movies --skip-template-engine`.

This will automatically create a new file in `app/controllers`
called `movies_controller.rb`, with the following content:

```ruby
class MoviesController < ApplicationController
end
```

Not all controllers handle CRUD,
but those that do tend to follow the following convention for their routes
and controller actions:

| Action  | What It Does                             | HTTP Verb | URL           |
|:-------:|:----------------------------------------:|:---------:|:-------------:|
| index   | Return a list of all resource instances. | GET       | `/things`     |
| create  | Create a new instance of a resource.     | POST      | `/things`     |
| show    | Return a single instance of a resource.  | GET       | `/things/:id` |
| update  | Update a single instance of a resource.  | PATCH     | `/things/:id` |
| destroy | Destroy a single instance of a resource. | DELETE    | `/things/:id` |

Let's add an `index` method to `MoviesController`.

```ruby
class MoviesController < ApplicationController
  def index
    # Here's where we define how the application will respond.
  end
end
```

In an actual Rails app,
retrieving and manipulating data would be done through the model.
However, for today, we'll simplify things
by **temporarily** mocking up the model with a private method.

Edit MoviesController to have the following code:

```ruby
class MoviesController < ApplicationController
  def index         # GET /movies
    render :json => movies.to_json
  end

  private
  def movies        # TEMPORARY - FOR TODAY ONLY!!
    [
      {id: 3, name: 'Affliction', rating: 'R', desc: 'Little Dark', length: 123},
      {id: 7, name: 'Mad Max', rating: 'R', desc: 'Fun, action', length: 154},
      {id: 10, name: 'Rushmore', rating: 'PG-13', desc: 'Quirky humor', length: 105}
    ]
  end
end
```

`render :json => some_object` causes the controller to return
a JSON-ified version of the specified object.
In this case, MoviesController's `index` method will send back a JSON string
containing a list of all the movies specifies in `movies`.

Let's pause here so that you have an opportunity to practice this on your own.

### Lab : Defining a Route and Controller

Inside your new `movies_app` application,
you're going to define a new resource called 'Players'.
Define a route for this resource that responds to GET `.../players`,
and corresponds to an `index` controller action.
Then, create a new controller called `PlayerController`
to handle CRUD-related requests for 'Players', and give it an `index` method.

Just for this exercise,
create a private method called `players` to return
a hard-coded list of player data.
In a real Rails application,
you would probably call a method on a `Player` model here
(perhaps `Player.all`).

### Code-Along: Show, Params Hash

Let's make it so that our app can respond to another type of request.
Suppose that we want make a GET request at `.../movies/<some number>`
and get back data about one particular movie.
Based on the table we looked at earlier,
this is conventionally handled by a `show` controller action.

Let's first create a new Route in `config/routes.rb`

```ruby
get '/movies', to: 'movies#index'
get '/movies/:id', to: 'movies#show'
```

`:id`, above, is known as a _dynamic segment_ -
it represents a part of the URL whose value can change.

When a new request comes in,
Rails stores a lot of meta-data about the request.
When we define a dynamic segment in `routes.rb`,
Rails adds a new key-value pair to the params hash,
where the key is the name of the dynamic segment
and the value is whatever is passed in as part of the URL.

`params` is visible to all controllers,
which means that we can use the data from dynamic segments
to dictate how the controller behaves.

Take the following as an example of the params hash:

```ruby
get ':controller/:action/:id/with_user/:user_id'
```

This route would respond to paths such as /photos/show/1/with_user/2.
In this case, params would be:

```ruby
 { controller: 'photos', action: 'show', id: '1', user_id: '2' }
 ```

Below is an example of a controller method, `show`,
using the `params` hash to identify which resource instance
the URL is referring to.

```ruby
class MoviesController < ApplicationController
  def index         # GET /movies
    render :json => movies.to_json
  end

  def show          # GET /movies/:id
    id = params[:id].to_i
    render :json => movies.find {|movie| movie[:id] == id}
  end

  private
  def movies        # TEMPORARY - FOR TODAY ONLY!!
    [
      {id: 3, name: 'Affliction', rating: 'R', desc: 'Little Dark', length: 123},
      {id: 7, name: 'Mad Max', rating: 'R', desc: 'Fun, action', length: 154},
      {id: 10, name: 'Rushmore', rating: 'PG-13', desc: 'Quirky humor', length: 105}
    ]
  end
end
```

### Lab : Show, Params Hash

Define a new route for your 'Players' resource, allowing a `show` action.
Then, update your `PlayerController` and add a `show` method
for displaying data on a single 'Player'.

### Code-Along : More Controller Actions

We've currently got two routes and controller actions set up.
Let's add the other ones that were listed on the table,
`create`, `update`, and `destroy`.

`create`, according to the table,
is associated with making a POST request to the `.../resources` URL.
In our `routes.rb` file, that would look like this.

```ruby
get '/movies', to: 'movies#index'
post '/movies', to: 'movies#create'
get '/movies/:id', to: 'movies#show'
```

`update` and `destroy` are both associated with
a URL of the format `.../resources/<some number>`,
as a PATCH/PUT or DELETE request, respectively.
Let's add these to the `routes.rb` file as well.

```ruby
get '/movies', to: 'movies#index'
post '/movies', to: 'movies#create'
get '/movies/:id', to: 'movies#show'
patch '/movies/:id', to: 'movies#update'
put '/movies/:id', to: 'movies#update'
delete '/movies/:id', to: 'movies#destroy'
```

This is the standard way for creating routes for resources
that your application performs CRUD on;
if your application involved multiple resources,
the routes for each of those resources would look just about the same.
But that would be pretty duplicative, right?

#### Demo : Resource Routing

Rails has an in-built shortcut for generating routes
for resources that want to perform all of the standard CRUD actions.
This shortcut is called _resource routing_, and using it is quite simple.

Writing the code below in `routes.rb` replaces, completely,
all of the routes we've written by hand so far.

```ruby
resources :movies
```

If we had multiple resources that we wanted to give standard routes,
we could simply add them as additional arguments to `resources`

```ruby
resources :movies, :players
```

What if we didn't want to add _all_ of the standard routes?
`resources` has two helper options, `only` and `except`,
that allow you to only generate certain specific routes.

For instance,
if we only wanted our 'Players' resource to have routes for `index` and `show`,
we could write

```ruby
resources :movies
resources :players, only: [:index, :show]
```

Alternatively, if we wanted 'Players' to have routes for every action
except for `:update` and `:destroy`, we could write

```ruby
resources :movies
resources :players, except: [:update, :destroy]
```

Since it's usually preferable to hide by default,
`only` is probably the better choice most of the time.

#### Putting it all Together

Whether we've used manual routes or resource routing,
our routes need controller actions behind them
in order to actually do anything.

Let's create methods for `create`, `update`, and `destroy`
inside 'MoviesController'.
Since we're not actually manipulating data with our application today,
let's just have each method return some text.

```ruby
class MoviesController < ApplicationController
  def index         # GET /movies
    render :json => movies.to_json
  end

  def show          # GET /movies/:id
    id = params[:id].to_i
    render :json => movies.find {|movie| movie[:id] == id}
  end

  def create        # POST /movies
    render :text => "create a new movie\n"
  end

  def update        # PUT/PATCH /movies/:id
    render :text => "update movie with id #{params[:id]}\n"
  end

  def destroy       # DELETE /movies/:id
    render :text => "destroy movie with id #{params[:id]}\n"
  end

  private
  def movies        # TEMPORARY - FOR TODAY ONLY!!
    [
      {id: 3, name: 'Affliction', rating: 'R', desc: 'Little Dark', length: 123},
      {id: 7, name: 'Mad Max', rating: 'R', desc: 'Fun, action', length: 154},
      {id: 10, name: 'Rushmore', rating: 'PG-13', desc: 'Quirky humor', length: 105}
    ]
  end
end
```

### Lab : More Controller Actions, Resource Routes, CORS

Revisit your 'Players' resource!
Add routes (either manual or resource routes) to `routes.rb`
and controller actions to `PlayersController`.


### Note: Where are my Errors coming from?

What does it mean? And what's this Access-Control-Allow-Origin stuff anyway?

You may not have realized this, but for security reasons,
servers are (by default) only permitted to access their own files;
if you have an app being hosted on a local server,
it only has the ability to see other files
being hosted by the same server on the same port.
So how do we allow a front-end app on one server (say, `localhost:5000`)
to make AJAX requests to a Rails app on another server (say, `localhost:3000`)?

The answer is CORS (cross-origin resource sharing),
a system by which _some_ resources can be shared between different domains,
without automatically sharing everything.
In order to allow our front-end and back-end apps to work together,
we need to specify a CORS policy for our back-end app
that permits a front-end to interact with it.



## Additional Resources

-   Part 1 of **[RailsGuides : Rails Routing from the Outside In](http://guides.rubyonrails.org/routing.html)**

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
