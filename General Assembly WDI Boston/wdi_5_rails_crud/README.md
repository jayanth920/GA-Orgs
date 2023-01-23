![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# An Introduction to ActiveRecord

## Objectives

By the end of this lesson, students should be able to:

- Create a database table using Ruby on Rails
- Insert a row or rows into a database table using ActiveRecord
- Retrieve a row or rows from a database table using ActiveRecord
- Update a row or rows in a database table using ActiveRecord
- Delete a row or rows from a database table using ActiveRecord

## Prerequisites

- [An Introduction to relational databases](https://github.com/ga-wdi-boston/wdi_5_sql_crud)
- A working [Rails](http://rubyonrails.org/download/) installation.
- Required reading: http://www.postgresql.org/docs/9.4/static/tutorial.html (please skip _3. Advanced Features_), http://guides.rubyonrails.org/v4.2.0/active_record_basics.html

## Introduction

**[ActiveRecord](http://api.rubyonrails.org/files/activerecord/README_rdoc.html)** _(see also [Active record pattern](http://en.wikipedia.org/wiki/Active_record_pattern))_ is the mechanism Rails uses to store and retrieve data from an RDBMS.  This, and similar mechanism, are referred to as an [Object-relational mapping](http://en.wikipedia.org/wiki/Object-relational_mapping) or ORM.

Why is this important?

Because the vast majority of enterprise data is stored in relational databases, but objects are often used to manipulate that data in applications. And, although **[NoSQL](http://en.wikipedia.org/wiki/NoSQL)** databases _(e.g Mongo DB)_ have been growing in popularity, their ability to support distributed data to enhance performance makes achieving **[ACID](http://en.wikipedia.org/wiki/ACID)** transactions a significant challenge.

**[Mongo DB Is Web Scale](https://www.youtube.com/watch?v=b2F-DItXtZs)**

The point of the video is not to state a preference for one technology over another, but to make clear that the need should drive the technology choice, not the hype.

ActiveRecord makes it easy for us to store and retrieve rows from a table

What about more complicated data?

ActiveRecord makes it easy to create objects that reference other objects (using tables that reference other tables) which allows arbitrary nesting of objects.  This is something we'll be looking at more closely later.

## Instructions

Fork and clone this repository, then

```bash
$ gem install pry-rails
$ cd wdi_4_rails_crud
$ subl .
```

We'll be using [PostgreSQL](http://www.postgresql.org/) as the [RDBMS](http://en.wikipedia.org/wiki/Relational_database_management_system) backing ActiveRecord.

The Rails App we'll be using was created with the command `rails new --database=postgresql --skip-bundle --skip-sprockets --skip-spring --skip-javascript --skip-turbolinks --skip-test-unit rails_crud`.

## Demonstration

We'll use `rails_crud_development` as the database to hold our tables and **[rails dbconsole](http://guides.rubyonrails.org/command_line.html#rails-dbconsole)** _(alias `rails db`)_ to interact with it with SQL.  By default, each Rails App is created to potentially use one of three databases, `<rails app name>_development`, `<rails app name>_test`, and `<rails app name>_production`.  We'll use **[rails console](http://guides.rubyonrails.org/command_line.html#rails-console)** _(alias `rails c`)_ to interactively use Models and **[rails runner](http://guides.rubyonrails.org/command_line.html#rails-runner)** _(alias `rails r`)_ to invoke any scripts we write.

```bash
$ cd rails_crud
$ rails db
psql: FATAL:  database "rails_crud_development" does not exist
$
```

As we can see, `rails db` runs `psql`.  If the Rails App had been configured for a different database server, `rails db` would have started a different command line client.

As before, we need to create the database.  We'll use the command line application **[rake](http://guides.rubyonrails.org/command_line.html#rake)** which Rails uses to manage changes to the structure of the database (among other things).

```bash
$ rake db:create
```

Rake is a task runner and `rake -T ` provides a brief description of the tasks it's configured to run from the current `Rakefile`.  Let's have a look at the `db` tasks.

```bash
$ rake -T db
```

### Pets

We'll store and manipulate information about pets.

### Create a table

To generate the code necessary to create a table and the code to manipulate data stored in that table, we use `rails generate model` _(alias `rails g model`)_.  If you run `rails g model` without any arguments, Rails tells you what you can do.

```bash
$ rails g model Pet name:string dob:string
      invoke  active_record
      create    db/migrate/20150525164437_create_pets.rb
      create    app/models/pet.rb
$
```

Let's look at the files created.  The model created inherits from **[ActiveRecord::Base](http://api.rubyonrails.org/classes/ActiveRecord/Base.html)**.  The migration from **[ActiveRecord::Migration](http://api.rubyonrails.org/classes/ActiveRecord/Migration.html)** (see also http://guides.rubyonrails.org/active_record_migrations.html).

The table defined by the migration, and needed by the model, isn't created until we run `rake db:migrate`.

---

#### Insert a row

To insert a row we can use `rails c`, then use the one of the methods Pet.**[new](http://api.rubyonrails.org/classes/ActiveRecord/Core.html#method-c-new)**, combined with a save, or Pet.**[create](http://api.rubyonrails.org/classes/ActiveRecord/Persistence/ClassMethods.html#method-i-create)**.

---

#### Find a row

By id, Pet.**[find](http://api.rubyonrails.org/classes/ActiveRecord/FinderMethods.html#method-i-find)**; by criteria, Pet.**[find_by](http://api.rubyonrails.org/classes/ActiveRecord/FinderMethods.html#method-i-find_by)**.  See also, http://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html and http://guides.rubyonrails.org/active_record_querying.html.

---

### Modify a table

To modify an existing table we'll run `rails generate migration` _(alias `rails g migration`)_ followed by `rake db:migrate`.


---

#### Update a row

After retrieving an object, we can update it using manfred.**[update](http://api.rubyonrails.org/classes/ActiveRecord/Persistence.html#method-i-update)**.

---

#### Delete a row

To delete a row we'll use manfred.**[delete](http://api.rubyonrails.org/classes/ActiveRecord/Persistence.html#method-i-delete)** or Pet.**[delete_all](http://api.rubyonrails.org/classes/ActiveRecord/Relation.html#method-i-delete_all)**.

---

## Code Along

We'll repeat the above for people instead of pets.

## Lab

One more time, but for places.

Remember to keep it to data that can be stored in a single row.

