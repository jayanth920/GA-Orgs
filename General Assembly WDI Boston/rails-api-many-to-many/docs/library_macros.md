# Through: Associated Records

## Modifying Library Associations

While we can see that in the `loan` model some code was added for us:

```ruby
class Loan < ApplicationRecord
  belongs_to :borrower
  belongs_to :book
end
```

But we need to go into our models (`borrower`, `book`, and `loan`) and add some
more code to finish creating our associations.

Let's go ahead and add that code starting with the `book` model:

```ruby
# Book Model
class Book < ApplicationRecord
  belongs_to :author
  has_many :loans
  has_many :borrowers, through: :loans
end
```

In our borrower model we will do something similar:

```ruby
# Borrower Model
class Borrower < ApplicationRecord
  has_many :loans
  has_many :books, through: :loans
end
```

## Dependent Destroy

### Demo: Add Library Dependent Destroy

Say we wanted to delete a book or a borrower. If we delete one we probably want
to delete the association with the other.  Rails helps us with this with a
method called `dependent destroy`.  Let's edit our `book` and `borrower` model
to include it so when we delete one, reference to the other gets deleted as
well.

Let's update our models to look like the following:

```ruby
# Book Model
class Book < ApplicationRecord
  belongs_to :author
  has_many :loans, dependent: :destroy
  has_many :borrowers, through: :loans
end
```

```ruby
class Borrower < ApplicationRecord
  has_many :loans, dependent: :destroy
  has_many :books, through: :loans
end
```

Let's test this out by using curl request to construct relationships then
remove them.

```bash
curl --include --request DELETE http://localhost:4741/borrowers/2
```

How could we write the same command in the Rails console using Ruby?
