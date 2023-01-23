# Making a Join Table

## Demo: Create Loan Model

We're going to use the generators that Rails provides to generate a `loan` model
along with a `loan` migration that includes references to both `borrower` and
`book`.

```ruby
bin/rails generate scaffold loan borrower:references book:references date:datetime
```

Along with creating a `loan` model, controller, routes, and serializer, Rails
will create this migration:

```ruby
class CreateLoans < ActiveRecord::Migration
  def change
    create_table :loans do |t|
      t.references :borrower, index: true, foreign_key: true
      t.references :book, index: true, foreign_key: true
      t.datetime :date

      t.timestamps null: false
    end
  end
end
```

So our `Loan` model now has the following attributes: id, borrower_id, book_id,
and date.

Let's run our migration with `bin/rails db:migrate`

The following command let's us take a peek at our database and see how this
model looks:

```bash
bin/rails db
```

Once we have our prompt, `rails-api-library-demo_development=#`, we'll type:

```bash
\d loans
```

Now we see all the columns contained in the `loans` table.
