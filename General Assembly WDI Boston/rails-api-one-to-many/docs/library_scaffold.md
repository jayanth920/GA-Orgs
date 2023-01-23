# Rails Scaffolding Resources

## Demo: Add Another Resource

In [rails-api-single-resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource), you've seen a `books` resource created.

In order to create a pairing `author` resource, we'll need to repeat what was
done in the last talk. However, since we've seen this already, we're going to
use a generator that creates more than one piece at a time, and modify it
accordingly.

## Demo: Scaffold Author Routes, Controller, Model, and Serializer

If we open a browser and hit `/authors` we get back: `No route matches [GET]
\"/authors\"`, which makes sense. We haven't done *anything* with authors yet.

In order to generate the code we wrote by hand for `authors` we can use the
following (shortcut) command:

> `bin/rails generate scaffold author given_name:string family_name:string`

Now let's examine each of the files it created!

```bash
~/wdi/training/rails-api-library-demo (tutorial)$ bin/rails generate scaffold
author given_name:string family_name:string
Running via Spring preloader in process 17246
Expected string default value for '--serializer'; got true (boolean)
      invoke  active_record
      create    db/migrate/20170419183303_create_authors.rb
      create    app/models/author.rb
      invoke    rspec
      create      spec/models/author_spec.rb
      invoke  resource_route
       route    resources :authors
      invoke  serializer
      create    app/serializers/author_serializer.rb
      invoke  scaffold_controller
      create    app/controllers/authors_controller.rb
      invoke    rspec
      create      spec/controllers/authors_controller_spec.rb
      create      spec/routing/authors_routing_spec.rb
      invoke      rspec
      create        spec/requests/authors_spec.rb
```

## Routes

`route    resources :authors`

This has just added `resources :authors` to our `config/routes.rb` file. Let's
add a few modifiers here since we won't need the `new` or `edit` routes.

```diff
Rails.application.routes.draw do
-  resources :authors
+  resources :authors, except: [:new, :edit]
```

## Controller

`create    app/controllers/authors_controller.rb`

WOAHHHHHH! You mean, that little `rails generate` command wrote all of this for
us!??! Somebody get these guys a raise!

Let's walk through the `controller` file though and make sure it looks right.

Ok, it looks pretty similar to our `BooksController`, and everything seems
in order. Now, let's make sure it works by testing each action using `curl`.

_*WARNING:*_
We must be *mindful* of how much code `scaffold` creates, there are many
instances that you may not WANT all actions. How would you modify this file if
you didn't want anyone to be able to `create` doctors? Is this the *only place*
we would need to modify our code? If we delete a `create` action, we must also
add it to the `except [:new, :edit, :create]` list!

## Model File

`create    app/models/author.rb`

...not much new here. `Author` inherits from `ApplicationRecord` which gives us
all the methods we need in the controller (like `.new`, `.all`, etc.)

## Migration File

`create    db/migrate/20170419183303_create_authors.rb`

This file sets up our migration using the command-line arguments we passed
with `bin/rails generate scaffold` command. Since we haven't migrated yet,
we can still modify this file to make some values required. In order to perform
validation before we save an Author to the database, we can alter our migration,
and add the flag `null: false`. This tells SQL to prevent records from being
saved that don't have these values present.

```diff
class CreateAuthors < ActiveRecord::Migration[5.0]
  def change
    create_table :authors do |t|
-      t.string :given_name
+      t.string :given_name, null: false
-      t.string :family_name
+      t.string :family_name, null: false

      t.timestamps
    end
  end
end
```

Rules for Migrations:

1. Never write in the schema.rb!  It is updated via migrations
1. Never edit a migration file after it's been migrated (rollback first)
1. Keep migrations as small and simple as possible
1. Always review a migration file before migrating it
1. Always test that a migration worked
1. Work on 1 migration at a time using `db:migrate` and `db:rollback`

## Serializer

`create    app/serializers/author_serializer.rb`

A serializer is a file that allows us to customize the output that rails sends
as JSON from our server. By default it looks like this:

```ruby
class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :given_name, :family_name
end
```

What would happen if we took `:given_name` out?

Are there any differences between the JSON that gets sent for an `author`, and
what gets sent for `book`?

What are `created_at` and `updated_at`? Let's also add a serializer for
`book` while we're at it:

```bash
bin/rails generate serializer book
```

## Demo:  Modify Author Serializer

Update the serializer to include the related model

```ruby
class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :given_name, :family_name
  belongs_to :book
end
```

Read more about [Rails Serializers](https://github.com/rails-api/active_model_serializers/blob/0-10-stable/docs/general/serializers.md)
