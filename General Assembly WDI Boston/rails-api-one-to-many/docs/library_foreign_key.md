# Modifying Migrations

We've almost finished with our relationships. We need a foreign key reference
column on our books table. This will allow us to reference the respective
author the book belongs to by ID.

## Demo: Modify Books Migration

Our goal is to add the foreign key `author_id` to the books table. We add the
foreign key to the `belongs_to` side of the relationship ("A book `belongs_to`
an author"):

![Books_Authors_foreign_key](https://git.generalassemb.ly/storage/user/5694/files/74a6b5fc-fac6-11e7-8bbe-40cfef48ff6b)

To update our `books` migration, we have a couple of options:

1. Hand-edit our existing books migration, rollback our database, and remigrate
1. Generate a migration change to add a foreign key column to our books table

We'll be going with the latter. Why? Remember that migrations occur in the
order of their timestamps. If we go in and modify our books migration (which,
in theory, has an earlier timestamp than the authors migration), and make a
reference to the authors table before it exists, our migration will fail.

Watch as I generate this migration change with:

```ruby
bin/rails generate migration AddAuthorToBooks author:references
```

Let's play with our results in `bin/rails console` and assign Books to Authors
using `Book.author = Author.find(id)`.
