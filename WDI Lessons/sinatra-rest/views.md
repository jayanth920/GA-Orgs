# Sinatra Views

## Learning Objectives

- Describe the role of templating languages in a server-side web app
- Use `erb` in Sinatra to render views
- Use `erb` tags to include Ruby code in HTML templates
- Describe the difference between `<%= %>` and `<% %>`
- Create instance variables to share data from the controller to the view

## We do: Sinatra Views

Let's convert the hard-coded strings in our application to take advantage of Sinatra's ability to write Ruby and HTML together in embedded Ruby or `.erb` files.

Create a directory called `views` and a file in that folder called `index.erb`...

```bash
 $ mkdir views
 $ touch views/index.erb
```

In your `app.rb` render the view with the Sinatra method `erb`...

```ruby
require 'sinatra'

get '/' do
  erb :index
end
```

```html
<!-- /views/index.erb -->
This is the home page.
```

## Passing Variables to Views

Next, we'll convert the routes in our 99 bottles exercise to respond with `.erb` views instead of strings containing HTML code.

To share variables from the application with the view, define instance variables...

```ruby
require 'sinatra'
require 'sinatra/reloader'

get "/" do
  @num_bottles = 99 # this is an instance variable
  erb :index
end

get "/bottles/:num_bottles" do
  @num_bottles = params[:num].to_i
  erb :index
end
```

> Variables that we want to use in the view `.erb` files need to be instantiated
with `@`. A variable beginning with a `@` is an instance variable.

```html
<!-- /views/index.erb -->
<% if @num_bottles == 0 %>
  <h1>No bottles of beer on the wall.</h1>
  <a href='/'>Start Over</a>
<% else %>
  <h1><%= @num_bottles %> bottles of beer on the wall.</h1>
  <a href='/bottles/<%= @num_bottles - 1 %>'>Take one down.</a>
<% end %>
```


We can write `erb` tags in two ways. `<% %>` or `<%= %>`. Without the equal sign,
the view (`.erb` file) will **execute the code only.** With an equal sign, the view
will execute the code and also render a string in the browser that is the return value of the
code that was executed.

To see this in action let's update our `app.rb`:

```ruby
get '/bob' do
  @bob = "bobert"
  erb :index
end
```

In `index.erb`
```html
<p>This is the instance variable @bob in the initial state: <%= @bob %></p>
<p>This is executing and returning using erb tags with equal sign: <%= @bob += "(using equals in erb)" %><p>
<p>This is only executing using erb tags without equal sign: <% @bob += "(not using equals in erb)" %><p>

```

> One thing to note about instance variables (`@some_variable`). If we instantiate an instance variable in one of our routes, we can only use it in that route and corresponding view. Other routes won't be able to utilize it.

### Writing Embedded Ruby in Views

If you have a collection to loop through, such as an array or a hash, you use a slightly different syntax.

Let's add the following content to `app.rb`...

```ruby
names = ["bobert", "tom", "missy", "kristy"]

get '/' do
  @names = names
  erb :index
end
```

If we wanted to have all of the names in `<p></p>` tags, we could do something
like this in our `index.erb`

```html
<!-- /views/index.erb -->
<% @names.each do |name| %>  <!-- note the missing `=` -->
  <p><%= name %></p>
<% end %>
```

> As we delve deeper into back-end development, the necessity to iterate through data sets — like in the above code snippet — becomes extremely important.  Instead of names, we might loop through NFL players. Instead of `name`, it might look like `player.name`. Depending on the object representing players, it might have multiple different properties like `total_yards`, our `touchdowns_this_season`

## Assets & Sinatra Layouts

Any files in the `public` folder will be served as static assets.

For example, you would create a file `public/css/styles.css` and link to it with the code below...

```html
<link rel="stylesheet" type="text/css" href="/css/styles.css">
```

> Note that the `href` path does not have `public/` in it

It's important to note here that we don't include the 'public' folder in the 'href' path. This is Sinatra convention. The styles won't apply if you do include 'public' in the path.

Instead of copying and pasting this link to each of the views, we can use a global layout view. This will be loaded "around" every other view.

```html
<!-- views/layout.erb -->
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="/css/styles.css">
  </head>
  <body>
    <%= yield %> <!-- load whatever template was called here -->
  </body>
</html>
```

## You do: Emergency Complement (20 minutes)

https://git.generalassemb.ly/ga-wdi-exercises/emergency_compliment
