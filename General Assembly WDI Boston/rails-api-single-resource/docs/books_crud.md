[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Books Index

## Routing

We need to make a Library. Let's try checking to see if there are any
books by navigating to `localhost:4741/books`

You should get an error similar to the following:

```bash
Routing Error
No route matches [GET] "/books"
```

Whoops! We haven't made any routes yet!

As you learned in the previous lesson, a route indicates which controller
action will be triggered when a particular type of HTTP request arrives at a
given URL.

In order for our API to respond to GET requests at the `/books` URL, we'll need
to create a Route that specifies what to do when that type of request comes in.

Add the following code to `config/routes.rb`:

Long-hand (used for custom routes)

```ruby
get '/books' => 'books#index'
```

Short-hand

```ruby
resources :books, only: [:index]
```

This tells Rails, "When you receive a GET request at the URL path `/books`,
invoke the `index` method specified in the BooksController class."

We changed a small bit of code, let's see if anything has changed.

It looks like our error has changed to:

```ruby
>> uninitialized constant BooksController
```

## Controller

We haven't _defined_ a BooksController class yet, so if we try to access
`localhost:4741/books`, we'll get another error:

The purpose of a controller is to handle requests of some particular type. In
this case, we want to create a new controller called `BooksController` for
responding to requests about a resource called 'Books'.

Rails has a number of generator tools for creating boilerplate files very
quickly. To spin up a new controller, we can just run `bin/rails generate
controller books`.

This will automatically create a new file in `app/controllers` directory called
`books_controller.rb`, with the following content:

```ruby
class BooksController < ApplicationController
end
```

Not all controllers handle CRUD,
but those that do tend to follow the following convention for their routes
and controller actions:

| Action  | What It Does                             | HTTP Verb | URL           |
|:-------:|:----------------------------------------:|:---------:|:-------------:|
| index   | Return a list of all resource instances. | GET       | `/books`     |
| create  | Create a new instance of a resource.     | POST      | `/books`     |
| show    | Return a single instance of a resource.  | GET       | `/books/:id` |
| update  | Update a single instance of a resource.  | PATCH     | `/books/:id` |
| destroy | Destroy a single instance of a resource. | DELETE    | `/books/:id` |

Let's add an `index` method to `BooksController`.

```ruby
class BooksController < ApplicationController
  def index
    @books = Book.all

    render json: @books
  end
end
```

Let's make a request and see if our error message has changed.

It seems we have an `uninitialized constant`! This is because we have yet to
tell rails what a `Book` is, it doesn't know how to **model** the data.

## Model

Let's generate a model by entering `bin/rails generate model Book title:string author:string`

Never blindly accept generated code. Always inspect it.

Let's check out server and see if our error message has changed.

It seems we have to migrate, let's do that.

## Migrations

Run `bin/rails db:migrate` in the root of this books directory.

Let's see if our error has changed.

We can see what appears to be JSON, but there are no books! That's because we
have not added any.

## Rails Console

First let's enter our `rails console` so we can make use of our models. This
let's us interact with Rails from the command line.

We're going to create a single book:

### CRUD: Create

```ruby
Book.create(title: 'A Dance With Dragons', author: 'George R.R. Martin')
```

We can even use other methods such as `.new` and `.save`.

Now navigate to `localhost:4741/books` and see if anything has changed.

### CRUD: Read

If want to use Active Record for seeing what is in our data store we can do so
by looking for a specific field.

```ruby
Book.find_by(author: 'George R.R. Martin')
# returns the first book where author == 'George R.R. Martin'

Book.where(author: 'George R.R. Martin')
# returns all results where author == 'George R.R. Martin'

Book.last
# returns the last book in the collection
```

There are more ways to read and organize the data using Active Record. I would
encourge you to look up more in your off time.

## CRUD: Update

Let's update one of our books using Active record

```ruby
book = Book.find_by(title: 'A Dance With Dragons')
book.update(title: 'Tango With Dragons')

# You could also string this together
Book.find_by(title: 'Tango With Dragons').update(title: 'WINTER IS HERE')
```

Now navigate to `localhost:4741/books` and see if anything has changed.

## CRUD: Destroy

Finally, if we want to remove a book with Active Record we simply do:

```ruby
Book.find_by(author: 'George R.R. Martin').destroy
```

Note: `find_by` will only destroy *one* book. If we want to destroy *all* the
books by an author, we have to use `where`.

Now navigate to `localhost:4741/books` and see if anything has changed.
