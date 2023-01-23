# Sessions

## Framing (5 minutes / 0:05)

Many of us have been to several webpages that only allow us to access content if we are users of the webpage. Annoying, yes, but quite necessary for many websites (but also probably just as many where it's just a barrier to entry -- not every app needs user authentication!). That said, how is this concept of "being signed in" done programmatically? How is that information persisted from request to request? Enter **sessions**.

## What's In A Session?

Most applications need to keep track of certain state of a particular user. HTTP is by nature, stateless. Without the idea of sessions a user would have to identify themselves after every request. Our Amazon shopping carts couldn't keep their contents.

Rails will create a new session automatically if a new user accesses the application. It will load an existing session if the user has already used the application. A session is just a place to store data during one request that you can read during later requests. Just like `params`, the session in Rails is a hash.

## Where Is This Data Stored?

When you request a webpage, the server can set a **cookie** when it responds back. Your browser will store those cookies. And until the cookie expires, every time you make a request, your browser will send the cookies back to the server. By default in Rails the session data is stored in the cookie itself using a thing called a cookie store. It's limited in size as a cookie can only maintain 4kb of data.

We could also use the `cookies` hash instead of the `session` one and in there you can set the expiration date for the cookie rather than expiring at the end of the session.

In addition, you can use a different store for your session data if you want to store data that is larger than 4kb. You could use your database, a cache-ing library, or your browser's sessionStorage instead. [Here](https://www.justinweiss.com/articles/how-rails-sessions-work/) is some more information on using alternate session storage.

> [Here's a lesson on cookies](https://git.generalassemb.ly/ga-wdi-lessons/rails-users-sessions-flash-cookies/blob/master/exploring-cookies.md) if you're interested on learning more.

## I Do: Session Demo (10 minutes / 0:15)

Let's go ahead and add a controller and some views that we'll need to demonstrate sessions.

```bash
$ touch app/controllers/sessions_controller.rb
$ mkdir app/views/sessions
$ touch app/views/sessions/index.html.erb
$ touch app/views/sessions/another.html.erb
$ touch app/views/sessions/set_session.html.erb
```

Here are the contents for those files...

```rb
# app/controllers/sessions_controller.rb

class SessionsController < ApplicationController
  def index
    @name = session[:name]
  end

  def set_session
    session[:name] = "bob"
  end

  def another
    @name = session[:name]
  end
end
```

```html
<!-- app/views/sessions/index.html.erb -->

<h1>testing sessions</h1>
<% if @name %>
<h2><%= @name %></h2>
<% end %>
```

```html
<!-- app/views/sessions/another.html.erb -->

<h1>Another page to test sessions</h1>
<% if @name %>
<h2><%= @name %></h2>
<% end %>
```

```html
<!-- app/views/sessions/set_session.html.erb -->

<h1>Setting session</h1>
```

Next we need to update our `config/routes.rb` so that we can actually access these actions and views...

```ruby
Rails.application.routes.draw do
  root to: 'artists#index'

  get 'show_session' => 'sessions#index'
  get 'set_session' => 'sessions#set_session'
  get 'another' => 'sessions#another'

  resources :artists do
    resources :songs, except: [:index]
  end
end
```

Great now let's navigate to `http://localhost:3000/show_session`.

We see no sign of the string `bob`.

If we now navigate to `http://localhost:3000/set_session`, then navigate back to `http://localhost:3000/show_session`, we see the string `bob` show up!

Even if we navigate to another page that leverages that session value (`http://localhost:3000/another`), we can still leverage that same session value.

This is a contrived use case of sessions but we can clearly see that the state of `session[:name] = "bob"` persisting from request to request. Normally session values will be set in `POST` requests, because we're "creating" data.

## We Do: Artist History (5 minutes / 0:20)

On the second line of `artist_controller.rb`...

```rb
before_action :set_session

def set_session
  session[:history] = session[:history] || []
  # If session[:history] has a value, carry on. If it's falsey (nil or false) then assign [].
end
```

```rb
def show
    @artist = Artist.find(params[:id])
    # add the artist's name to the history
    session[:history].push(@artist.name)
end
```

In the application layout...

```html
 Visited Artists: <%= session[:history] %>  
```

## You Do (20 minutes / 0:40)

> 15 minutes exercise. 5 minutes review.

Use Rails' session feature to keep track of all the artists **and** songs that a user has viewed.
- For testing purposes, you can display the history in the layout file so that it is viewable on every page

#### Bonus

- Create a page that is dedicated solely to displaying (e.g., `http://localhost:3000/history`)
- Add a feature so that a user can clear their view history after clicking a "Clear History" link or button

## Sessions In The Wild

Sessions are used mostly for just a handful things but certainly not limited to the following...
- User authentication/authorization
- Shopping carts
- Setting a current model to persist throughout requests

## Review Questions

- What is the syntax for getting and setting a `session`?
- What does `before_action` do in Rails?
- Where are cookies stored?
- What is something sessions can be used for?
- What type of object is a `session`?

## Break (10 minutes / 0:50)
