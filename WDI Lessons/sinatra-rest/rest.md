# REST

## Lesson Objectives

  1. List the 5 HTTP verbs
  2. List the 4 CRUD actions
  3. Read data from a query string
  4. Use a form to RESTfully create data

## Overview (5 / 2:35)

The web as we know it transfers data via HTTP, or Hyper-Text Transfer Protocol. HTTP specifies that a server receives a **request** from a client and then delivers a corresponding **response**.

Remember: a server's job is to respond to HTTP requests. In order to talk about how Sinatra methods can respond to different HTTP verbs, we need to talk about how HTTP requests work.

Every HTTP request consists of a request **method** and **path**. The **path** is the part of the URL following the domain. We likely have noticed paths when navigating the web. What is the path for this lesson?

Your browser always sends that request in a *particular way* that gives the server a hint as to the purpose of the request. This *particular way* is the **method**.

## REST (15 / 2:50)

REST, or REpresentational State Transfer, is a convention that standardizes how clients make requests to servers.  

Knowing REST is important because the vast majority of web developers have agreed to follow this same convention.

"GET" is one of these methods. It means the browser just wants to read (or "get") some information. When you write `get '/say_hi' do`, you're telling your Sinatra server how to respond when a browser says, "Hey, I'd like to get some information from the `/say_hi` path."

We make requests all the time -- especially `GET` requests. Everytime you go to your browser, enter a URL, and hit enter, you're actually making a `GET` request.

### RESTful HTTP Methods

REST defines five main methods, each of which corresponds to one of the CRUD functionalities.

| Method | Crud functionality | DB Action |
|------|--------|----------------------   |
| GET  | read   | retrieve data           |
| POST | create | add data                |
| PUT  | update | modify existing data    |
|PATCH | update | modify existing data    |
|DELETE| delete | delete existing data    |

So, wait -- there are 5 REST methods, but only 4 CRUD methods?

`PUT` and `PATCH` are both used for updating. Whenever you update your Facebook profile you're probably making a `PUT` or `PATCH` request. The difference is `PUT` would be intended to completely replace your profile, whereas `PATCH` would be intended to just change a few fields of your profile.

`PUT` rewrites data; `PATCH` just changes parts of data. To clarify further, `PATCH` is replacing part of the data and `PUT` is replacing the whole thing.

### What's the difference at a technical level between a GET and a POST request?

There is of course the difference in the METHOD type, but also in the request payload. A `POST` request for instance will contain all of the data necessary for creating some new object.

GET is for when you want to read something. The parameters of the GET request are used for identifying which piece of data the client would like to read. The parameters of the POST request are used for defining a new piece of data.

### RESTful Routes (5 / 2:55)

A **route** is a **method** plus a **path**...

**Method + Path = Route**

Each route results in an **action**.

REST provides a template for the way different paths should look...

| Method |      Path     |       Action |
| ------ | ------------- | ---------------------------------- |
|   GET  |  `/students`  | Read information about all students |
|  POST  |  `/students`  | Create a new student |
|   GET  | `/students/1` | Read information about the student whose ID is 1 |
|  PUT   | `/students/1` | Update the existing student whose ID is 1 with all new content |
|  PATCH | `/students/1` | Update the existing student whose ID is 1 with partially new content |
| DELETE | `/students/1` | Delete the existing student whose ID is 1 |

Note that the path doesn't contain any of the words describing the CRUD
functionality that will be executed. That's the method's job.

Let's check out the [ESPN website](http://espn.go.com/). If we go to a specific
player's webpage, we can see this same sort of structure in the URL.

### Example (10 / 3:05)

For the next few minutes, I'm going to play the role of a client/browser while you all collectively play the part of the server. Students will be resources on this server. Each table will have a number (I'll go down the aisle writing those numbers) and each seat at the table will have a position numbered from 1 at the aisle and up towards the walls. Remember your seat number.

Now I'm going to write my requests method and route on the board. Pay attention for your resource path and be ready to `respond` appropriately to my `request`!

<details>
  <summary>More Examples</summary>
  <p>
    path: /tables/3/students/1/name and method: GET (student should say their name)
  </p>
  <p>
    path: /tables/2/students/3/name and method: PUT "I'm putting 'Fred'" (hand student a marker to change their name)
  </p>
  <p>
    path: /tables/2/students/3/name and method: GET (same student should respond with the new name)
  </p>
  <p>
    path: /tables/5/students/2/name and method: DELETE (motion for the student to leave the class, just kidding!)
  </p>
</details>


### You do... (5 / 3:10)

Write out the routes (method & path) for the following requests. The first one is done for you.

1. **Create a new animal**
    - `POST /animals`
2. **Delete an animal**
    <details>
      <summary>Answer</summary>

      `DELETE /animals/1`
    </details>
3. **Update an existing homework assignment**
    <details>
      <summary>Answer</summary>

      `PUT /homework/1`
    </details>
4. **Create a new class at GA.**
    <details>
      <summary>Answer</summary>

      `POST /classes`
    </details>
5. **View all students in WDI19.**
    <details>
      <summary>Answer</summary>

      `GET /wdi19/students`
    </details>
6. **Update the info for an animal with 3 as its id.**
    <details>
      <summary>Answer</summary>

      `PATCH /animals/3`
    </details>
7. **Update homework submission #32 for assignment #3**
    <details>
      <summary>Answer</summary>

      `PATCH /homework/32/assignment/3`
    </details>

## Query Parameters (20 / 3:25)

So far we've done all of our passing-of-data through the route's path, as path
parameters. This hasn't been a problem since the data has been tiny -- a user
ID, or a name.

But when data starts getting bigger, this'll start getting a little crazy. We'd
need to be going to some enormous URLs.

REST gives us a couple different ways of sending data. Path params are the most
upfront and basic. Slightly more advanced are GET parameters, or query
parameters.

### We do: Demo with Twitter

To demonstrate, let's check out Twitter's search functionality.

`https://twitter.com/search`

I'm going to search for "toast". This takes me to a new URL...

`https://twitter.com/search?q=toast&src=typd`

Check out the stuff at the end of the URL. I've learned that `src` points to the search of the query in this case, I typed it in hence the `typd`. I also recognize "toast", which is in `q=toast`.

If I add `+strudel` to the end of `toast` and go to the new URL...

`https://twitter.com/search?q=toast+strudel&src=typd`

I can see that the search box now has the words "toast" and "strudel", and all
the displayed Tweets contain those words.

### Query strings

This is a **query string**. It's a string of key/value pairs at the end of a URL
that pass additional data to the server.

Query strings always follow the same format...

```
[some URL]?[key_one]=[value_one]&[key_two]=[value_two]&[key_three]=[value_three]...
```

First you have the URL, like `http://google.com` or `http://twitter.com/search` or `localhost:4567/hello`.

Then, you have a single question mark `?` that indicates the beginning of the
query string.

Then, you have any number of pairs of `key=value`. Each pair is separated by an
ampersand `&`.

> Note: There is only **one** question mark in your query string! By convention, it separates the rest of the URL from the query string.

#### Looking back at the Twitter URL, with `q=toast+strudel`, what does `q` stands for?

### URL Encoding

URLs aren't supposed to have spaces in them, and some characters are reserved. You can't just put a forward-slash `/` in a query string because your browser's going to think that you mean a directory. Any `&` in a query string is going to be interpreted as something separating key-value pairs.

So instead we encode "special characters" in a special way (*not* to be confused
with HTML's way of encoding special characters).

For example, spaces are replaced either with a plus `+`, or they are **percent-encoded** with a special number. Space is `%20`.

You'll notice that these three links go to the same place...

`https://twitter.com/search?q=toast%20strudel&src=typd`

`https://twitter.com/search?q=toast+strudel&src=typd`

`https://twitter.com/search?q=toast strudel&src=typd`

In fact, in the last one, my browser replaced the space with `%20` itself!

[You can checkout this site to URL-encode and URL-decode stuff](http://meyerweb.com/eric/tools/dencoder/)

## BREAK (10 / 3:35)

### You Do: Query strings in Sinatra (15 / 3:55)

Query string parameters are accessible in Sinatra paths just like path parameters.

Set up a new directory to try out query strings in Sinatra.

```bash
$ mkdir sinatra_rest
$ cd sinatra_rest
$ touch app.rb
$ touch Gemfile
```

Make sure to update your Gemfile and run `bundle install`.  

```rb
source "https://rubygems.org"
gem "sinatra"
gem "sinatra-contrib"
```

```rb
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "Hi there, #{params[:first_name]}!"
end
```

Now, go to `localhost:4567/?first_name=James`.

Let's add another parameter...

```rb
get '/' do
  "Hi there, #{params[:last_name]}, #{params[:first_name]} #{params[:last_name]}!"
end
```

...and go to `localhost:4567/?first_name=James&last_name=Bond`.

#### Now make the above statement show up in an ERB view!

If you have more add a `layout.erb` page, CSS, and images to create a sweet James Bond style site!

## Forms (10 / 4:05)

So how do we get all this data into the URL's query string to begin with? HTML actually has a built-in way of sending user
input. It's with the `<form>` element.

Copy and paste this code into your ERB...

```html
<form method="get" action=".">
  <input type="text" name="first_name" placeholder="First name" >
  <input type="text" name="last_name" placeholder="Last name" >
  <input type="submit" value="Submit" >
</form>
```

#### Type something in and "submit". What happens?

We can access this data in the `app.rb` file in the same way we got the path
parameters: with `params`.

```html
<h1>Hi there, <%= params[:first_name] %> <%= params[:last_name] %></h1>
<form method="get" action=".">
  <input type="text" name="first_name" placeholder="First name" />
  <input type="text" name="last_name" placeholder="Last name" />
  <input type="submit" value="Submit" />
</form>
```
> What's important to keep in mind with forms is that we need to make sure what method we're using--forms can only post and get-- and where we're submitting the request--the action.


### Make the first and last names show up in the form using `@variables` instead.

```rb
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @first_name = params[:first_name]
  @last_name = params[:last_name]
  erb :index
end
```

```html
<h1>Hi there, <%= @first_name %> <%= @last_name %></h1>
<form method="get" action=".">
  <input type="text" name="first_name" placeholder="First name" />
  <input type="text" name="last_name" placeholder="Last name" />
  <input type="submit" value="Submit" />
</form>
```

### You Do: You only div twice (10 / 4:15)

Take the above names example and turn it into a James Bond themed greeting.  

Now add another form to show what a user would like to drink and how it should be served (chocolate milk - shaken, not stirred)

If you haven't already, expand your site with images, CSS, an layout.erb file ton make it James Bond Themed.

### BREAK (10 / 4:25)

### POST (20 / 4:45)

Forms with a `POST` action are used for creating new things.

First let's make a new route in our `app.rb`...

```rb
get '/names' do
  @names = names
  erb :names
end
```
Let's add a `names` array too...

```rb
names = ["Mario", "Yoshi", "Bowser"]
```

Create a `names.erb` and add this...

```html
<% @names.each do |name| %>
  <h3><%= name %></h3>
<% end %>

<form action='/names' method='post'>
  <input type='text' name='student_name'>
  <input type='submit'>
</form>
```
Let's try submitting this form. Oh no! Sinatra doesn't know this diddy.

> Note: when we change whats in the action in the form, we must change the corresponding Sinatra method

Add this to `app.rb`...

```ruby
post '/names' do
  "this is a post request!"
end
```

After testing this change out, let's adapt our code to modify the `names` array.

```ruby
post '/names' do
  names.push(params[:student_name])
end
```

Let's try submitting again. What happened? The name we just typed in gets rendered, since `.push` returns the thing being pushed. Instead of that, I think it'd be helpful if we redirected to our `/names` route after pushing a name to the array. Redirect is making a new `GET` request and initiates a new response-request cycle.

Update `app.rb`...

```ruby
post '/names' do
  names.push(params[:student_name])
  redirect "names"
end
```

> In this situation we are redirecting to the `GET` request to the names path.
This is traditionally how `POST` requests work. Where creation functionality
happens and then it redirects to a page.

> Another thing you may have figured out by now, is that we could have `names <<
params[:student_name]` in a `GET` request, why might this be a bad idea? It goes against REST! `GET` requests should only be to access information.

> The difference between `GET` and `POST` is that `GET` sends data as URL parameters,
while `POST` sends data in the "body" of the request. This is the difference
between sending a postcard -- all the data is visible to anyone who happens to
come into contact with it -- and a letter in an envelope -- the data is *not* visible to everyone who happens to come into contact with it.

#### Why have both?

- For what things is `GET` well-suited?
- For what things is `POST` well-suited?

We've mentioned that `POST` is normally used to create stuff. Obviously, we're not actually creating anything yet, but soon we'll be hooking up PSQL and ActiveRecord to do that.

This all seems like a lot of trouble for a few routes. Why not just use `GET`
requests, which are nice and simple, and just have paths like `/read`,
`/update`, `/delete`, and so on?

## You do: [Play with HTML forms](https://github.com/ga-dc/html-forms-practice) (10 / 4:55)

## PUT, PATCH, and DELETE

So what about the other REST methods?

HTML forms **can't actually `PUT`, `PATCH`, or `DELETE`**. They can only `GET` and `POST`.

In the following lesson on Sinatra and ActiveRecord, we'll explore using a work-around to get forms to work with different types of HTTP requests.

## Review Questions (Rest of Class / 5:00)
- What are the the 5 HTTP verbs
- What are the 4 CRUD actions?
- What is the difference between GET and POST?
- What is the difference between PUT and POST?
- What is a Query String?
- How are forms used to send information to a server?
