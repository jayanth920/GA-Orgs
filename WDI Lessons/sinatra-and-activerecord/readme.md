# Sinatra and ActiveRecord

## Learning Objectives

- Review the role of ActiveRecord in a web app
- Diagram the request-response lifecycle in a Sinatra app with ActiveRecord
- Integrate ActiveRecord into a Sinatra app
- Build RESTful routes to implement CRUD functionality in Sinatra
- Write ERB views to display and allow for modification of ActiveRecord models


## Why ActiveRecord and Sinatra?

Sinatra helps us build simple web applications quickly. We do not, however, have any
way to persist data. ActiveRecord, on the other hand, lets us store data in a database easily but has no
native web interface - only the command line.

Put the two together, and we can build an app with a web interface that is
backed by a database.


## The Request-Response Cycle (15 minutes / 0:15)

How exactly can ActiveRecord and Sinatra work together? Their relationship is best described through the **request-response** cycle...

1.  The user makes a request (e.g., clicking a link, typing in a URL). **Sinatra** receives the request.
2. **Sinatra** matches the request to the appropriate route that we've defined in our app.
3. That route contains a block of code to run in response. We call this **controller** code. This code is written by us and determines how to handle that request. This code is unique to our app.
    - In Sinatra, our routes and controller code live in the same file. This will change with Rails.
4. For most requests, the controller will call methods on our ActiveRecord **models** to create, read, update or destroy data in the **database**.
5. Once the **controller** has done its job and retrieved / changed any data it needs, it renders a **view** or redirects to a new **request**, which is displayed back to the user in the browser.

![Sinatra MVC](images/sinatra_mvc2.jpg)


## App Organization

As our apps get more complex, they begin to require lots of different dependencies. It's very important to start separating our concerns.

Below is a summary of the important folders and files in our app. It's important to note that some of these are expected by Sinatra (e.g., `views`) and the rest are just convention to match our upcoming transition to Rails.

For this lesson, we'll be using [Tunr](https://git.generalassemb.ly/ga-wdi-exercises/tunr_sinatra). Go ahead and clone it and change directories into the `tunr` folder.  
Run `bundle install` to install the dependencies in the Gemfile and open the app in Atom.

**`tunr`**
- **`db`**
  - Seeds (sample data)
  - Database configuration and connection files
- **`models`**
  - Classes that inherit from ActiveRecord
- **`views`**
  - `.erb` templates
- **`public`**
  - Static assets (e.g., JS, CSS, images, fonts)
- *app.rb*
  - The entry point to our application
  - Contains our route definitions and **`controller`** code
  - Start the application with `ruby app.rb`
- *console.rb*
  - Interact with models and data in the database via REPL.

#### Explore the Code (5 minutes / 0:20)

#### Questions

- What is the purpose of the `artist_data.rb` and `song_data.rb` files?
- There are two enumerators in `seeds.rb`. What are they doing?
- What is `require_relative` and why is it used in this file so many times in `seeds.rb`?
  - What file(s) will we need to get this to work?


## Data Model

We often start building an app by describing the data model. We do this by creating an ERD, defining our schema according to that ERD, loading it into a database, and then building our ActiveRecord classes. These ActiveRecord classes are what we refer to as **models**.

### You Do: ERD (5 minutes / 0:25)

> 3 minutes exercise. 2 minutes review.

Spend 3 minutes diagramming the ERD for Tunr.

### You Do: Define the Schema (5 minutes / 0:30)

Create the schema file in the db directory...

```bash
$ touch db/schema.sql
```

Using our ERD, fill in `db/schema.sql` with SQL to create the Schema. Refer to the table below for a guide to the attributes of each model.

**Artists**

| column name  | type |
|--------------|------|
| id   | primary key (int) |
| name | text |
| photo_url | text |
| nationality | text |

**Songs**

| column name  | type |
|--------------|------|
|id | primary key (int) |
|title | text |
|album | text |
|preview_url | text |
|artist_id | foreign key (int) |


> Not sure what the schema should look like? Use the [schema from the Library SQL exercise](https://github.com/ga-wdi-exercises/library_sql/blob/master/schema.sql) as a reference.

Once your schema is good to go, create the Tunr database via the command line (not `psql`)...

```bash
$ createdb tunr_db
```

Then load the schema into the database, again from the command line...

```bash
$ psql -d tunr_db < db/schema.sql
```

<details>
  <summary><strong>If you get stuck...</strong></summary>

  ```sql
  DROP TABLE IF EXISTS songs;
  DROP TABLE IF EXISTS artists;

  CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    photo_url VARCHAR,
    nationality VARCHAR
  );

  CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    album VARCHAR,
    preview_url VARCHAR,
    artist_id INTEGER
  );
  ```

</details>

### You Do: Define ActiveRecord Models (5 minutes / 0:35)

Create files for your `Artist` and `Song` classes in the `models` folder. Remember that the file names should be singular, to match the class name (e.g., `models/song.rb`)

## We Do: Load Seed Data (5 minutes / 0:40)

Take a look at `db/seeds.rb`. We've taken some data from the iTunes API, and formatted / saved it so we can load it into our database using AR.

Go ahead and run the seed script...

```bash
$ ruby db/seeds.rb
```

<details>
  <summary><strong>How can we use `console.rb` to verify that the data loaded correctly?</strong></summary>

  ```rb
  Artist.all  # Returns all artists
  Song.all  # Returns all songs
  Artist.first.songs  # Returns all songs that belong to the first artist
  ```

</details>

## Setting up our Sinatra app (10 minutes / 0:50)

Now that our database and models are all setup, let's build a web app that lets us interact with the data.

To begin, let's set up the main `app.rb` file, which will connect to the database, load our models and define the homepage route.

### We Do: Setup `app.rb` to load files

What do we need to `require` in `app.rb`?

```ruby
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Load the file to connect to the DB
require_relative 'db/connection'

# Load models
require_relative 'models/artist'
require_relative 'models/song'
```

## Break (10 minutes / 1:00)

### Important Note

From this point, I will be coding the I do portion of the new material in a `wdi_app`. It has a very similar structure as `tunr`. In the `wdi_app` we'll have `instructors` and `students` tables. This is what the schema looks like for the `wdi_app`:

```sql
CREATE TABLE instructors(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  age INT NOT NULL
);
CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  age INT NOT NULL,
  instructor_id INT NOT NULL
);
```

You will continue to code on `Tunr` and just watch when the instructor is coding on `wdi_app`. If at any point your code contains the words `wdi`, `instructor`, or `student` in any variant, you are doing something incorrectly.

Reference the code in the I Do's to complete the objectives for Tunr. The `wdi_app` codebase has all of the same working parts as the one you're currently working with.

Step by step, you're going to add the 7 RESTful routes for artists along with their corresponding views. We're also going to use ActiveRecord to make sure that the data is being persisted.

### I Do: Index - WDI App (15 minutes / 1:15)

Now that we have the basic structure in place, let's start to put everything together. One of the most common features in the web today is the `index`. This is a feature that lists out collections. In your case you might want a feature to list out all of the artists for your app. That's what the index does.

In `app.rb`...

```ruby
get '/instructors' do
  @instructors = Instructor.all
  erb :"instructors/index"
end
```

> This symbol syntax has to have quotes because we use a `/` in the path. You won't see this alternate syntax too often.

There's one problem though: we don't have any views. Let's make a `views` directory and add a view file for our index functionality.

```bash
$ mkdir views
$ mkdir views/instructors
$ touch views/instructors/index.erb
```

In `views/instructors/index.erb`...

```html
<h2>All Instructors</h2>
<% @instructors.each do |instructor|%>
  <p><%= instructor.name %></p>
<% end %>
```

If we run the application - `$ ruby app.rb` - and visit `http://localhost:4567/instructors`, we can see all the instructors' first names.

### You Do: Index - Tunr (15 minutes / 1:30)

> 10 minutes exercise. 5 minutes review.

### I Do: Show - WDI App (10 minutes / 1:40)

Another common feature in web apps is to have a page dedicated to a single item stored in the database. We often refer to this functionality as "show."

```ruby
get '/instructors/:id' do
  @instructor = Instructor.find(params[:id])
  erb :"instructors/show"
end
```

> We are querying our database for an instructor with an id that we get from the url.

Now we'll create a corresponding view in `views/instructors/show.erb`...

```html
<h2><a href="/instructors">All Instructors</a></h2>
<div class="instructor">
  <p>Instructor Name: <%= @instructor.name %></p>
  <p>Instructor Age: <%= @instructor.age %></p>
</div>
```

All we're doing here is displaying the instructor's name and age.

We also decided to improve the user experience and add a link to go back to the index page. We should also update the index view so that each instructor name links to its corresponding show page...

in `views/instructors/index.erb`...

```html
<h2>All Instructors</h2>
<% @instructors.each do |instructor|%>
  <p class="instructor">
    <a href="/instructors/<%= instructor.id %>"><%= instructor.name %></a>
  </p>
<% end %>
```

## You Do: Show - Tunr (10 minutes / 1:50)

> 5 minutes exercise. 5 minutes review.

## REST

REST - or **Representational State Transfer** - is a convention that we, as developers, follow.

REST defines five main methods, each of which corresponds to one of the CRUD functionalities in a database.

| Method | CRUD functionality |
|---|---|
|GET| read |
|POST| create |
|PUT| update |
|PATCH| update |
|DELETE| delete |

> For more info on these, checkout the appendix towards the end of this lesson plan.

We've already done `GET` requests. The next thing we're going to talk about is `POST` requests. They're a little bit different...

With `GET` requests, a user types a URL into the browser or clicks on a link. A `POST` request traditionally only happens when the user submits a form. The intended behavior of the request is usually to create something in a database.

> There are other ways to initiate `POST` request, like [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

## I Do: Create - WDI App (Rest of Class)

Another main feature of web applications is the ability to create new instances of our models (i.e., add rows to a database).

In order to do that we need to provide an interface for the user. That interface is HTML forms.

### An Aside: Forms

To show you a bit about forms and how they work, let's take a look at [this code](https://github.com/andrewsunglaekim/sinatra_simple_post).

This is a simple app that keeps track of first names. Let's checkout the relevant code

In `app.rb`...

```ruby
get '/' do
  @first_names = first_names
  erb :index
end

post '/add_name' do
  first_names << params[:first_name]
  redirect "/"
end
```

And in `views/index.erb`...

```html
<h1>All Names</h1>
<% @names.each do |name| %>
  <div><%= name %></div>
<% end %>
<h2>Enter New Name Here and Hit Enter</h2>
<form action="add_name" method="post">
  <input name="first_name">
</form>
```

> When you get some time, clone this repo down and play with the parameter values.

When I enter a new name it gets added to the list! Let's take a closer look at the following code...

```html
<form action="add_name" method="post">
  <input name="first_name">
</form>
```

Three things to take away from this form...

1. The action inside the form tag corresponds to the path of the `post` request in `app.rb`
2. The method corresponds to the `post` HTTP verb of the request
3. The `input`'s name attribute corresponds to the parameter `key` used in the corresponding `post` controller/method in `app.rb`

Keeping these things in mind, let's see what a post request to create objects looks like in a sinatra application.


#### The Post Request

In `app.rb`...

```ruby
post '/instructors' do
  @instructor = Instructor.create(name: params[:name], age: params[:age])
  redirect "/instructors/#{@instructor.id}"
end
```

> If you're confused by all the different params, that's ok. We haven't created the form for that yet. One thing we do know, however, is that params is a hash and we're accessing its values using its keys.

So we've defined the post request, but how do we make that request to our server? We can build a form that will submit post requests to that path. In order to do that, we need to create a new view.

### New - WDI App

You've seen this sort of thing before in `app.rb`...

```ruby
get '/instructors/new' do
  erb :"instructors/new"
end
```

And then the corresponding view, `views/instructors/new.erb`...

```html
<h2>New Instructor</h2>

<form action="/instructors" method="post" >
  <label>Name:</label>
  <input name="name">

  <label>Age:</label>
  <input name="age">

  <input type="submit" value="Create">
</form>
```

There's actually a better way to do this. We can "namespace" our parameter in forms, meaning that we're going to package all of the instructor's properties into a single `instructor` hash. We can access this hash via params.

```html
<h2>New Instructor</h2>

<form action="/instructors" method="post" >
  <label>Name:</label>
  <input name="instructor[name]">

  <label>Age:</label>
  <input name="instructor[age]">

  <input type="submit" value="Create">
</form>
```

With this structure, we need to update our `post` request to use this nested structure in `app.rb`...

```ruby
post '/instructors' do
  @instructor = Instructor.create(params[:instructor])
  redirect "/instructors/#{@instructor.id}"
end
```


Here are some important parts about this code...
- The parameter values being passed in this form are nested under the namespace of `instructor`
- The path for this request is `/instructors`
- The method for this request is `post`

Thats it! Now we have the ability to create new instructors.

## You Do: Create & New - Tunr

### Editing Models (Lab Reference)

Another common feature in web applications is the ability to modify data in a database. In order for the user to manipulate data, you(the developer), need to create an interface for them to do that. We need 2 routes for this feature, one that displays the interface to edit, and one that actually updates the database.

####  `edit/update` Routes

In `app.rb`...

```rb
get '/instructors/:id/edit' do
  @instructor = Instructor.find(params[:id])
  erb :"instructors/edit"
end

put '/instructors/:id' do
  @instructor = Instructor.find(params[:id])
  @instructor.update(params[:instructor])
  redirect "/instructors/#{@instructor.id}"
end
```

Both of these routes first find an instructor based on parameters from the path. The `get` request renders a view for the user. That view will contain the interface for editing.

A big problem with `put` and `delete` requests is that they aren't native to HTML forms.

To make a `put` request, we need to 'fake it' in our form with a hidden input for the `_method` param:

```html
<form action="/instructors/<%= @instructor.id %>" method="post">
  <input type="hidden" name="_method" value="put">

  <label for="instructor[name]">Name:</label>
  <input name="instructor[name]" value="<%= @instructor.name %>">

  <label for="instructor[age]">Age:</label>
  <input name="instructor[age]" value="<%= @instructor.age %>">

  <input type="submit" value="Update">
</form>
```

> There's a little bit of subtle UI here. If editing a model, we should provide the current values of the model in the input fields.

Let's provide a link to the edit page in the `show` feature of our application. In `views/instructors/show.erb`, add this line of code...

```html
<a href='/instructors/<%= @instructor.id %>/edit'>Edit This Instructor</a>
```

> This is where it is now, but we can put this anywhere so long as we can provide an instructor id.

## You Do: Update & Edit - Tunr

### Deleting Models (Lab Reference)

Ever delete a tweet? That's a feature! In web apps, you want to be able to allow users to delete things - or things you think it's ok for them to delete - from your database.

Here's the request we'll need in `app.rb`...

```ruby
delete '/instructors/:id' do
  @instructor = Instructor.find(params[:id])
  @instructor.destroy
  redirect("/instructors")
end
```

This is part of a view that initiates that request...

```html
<h2>Delete Instructor</h2>
<form action="/instructors/<%= @instructor.id %>" method="post">
  <input type="hidden" name="_method" value="delete">
  <input class="button-delete" type="submit" value="Delete!">
</form>
```

Where does this view go? Basically wherever you want the ability to delete an instructor so long as `@instructor` is the instructor that should be deleted when that request goes off. Sometimes it goes in the `edit` view. Other times it goes in the `index` view.

## You Do: Delete - Tunr

## Closing / Questions

-------

## Appendix: RESTful Paths and CRUD Actions

Example of the 7 RESTful paths for standard CRUD in an active record web app. This chart shows examples using the model `animal`.

|Path| Method | CRUD functionality | action name | feature it's part of |
|---|---|---|---|---|
| `/animals`          | GET    | read   | index | show all models  |
| `/animals/:id`      | GET    | read   | show  | show single model  |
| `/animals/new`      | GET    | read   | new   | form for model creation |
| `/animals`          | POST   | create | create | accept data from new form |
| `/animals/:id/edit` | GET    | read   | edit | form to edit a single model |
| `/animals/:id`      | PUT  | update | update | accept data from edit form |
| `/animals/:id`      | DELETE | delete | destroy | delete single model |

## Screencasts (Sinatra & ActiveRecord Demo)

- [Part 1](https://youtu.be/Z25L3e4R5Nw)
- [Part 2](https://youtu.be/8j628_XN1bo)
- [Part 3](https://youtu.be/xtzhvIbWoQQ)
