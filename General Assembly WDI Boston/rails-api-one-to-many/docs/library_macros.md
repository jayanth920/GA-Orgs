# Rails Relationships and Macro Methods

## `has_many`

Often, the resources of our application will have relationships with each
other. In our three domains, authors have many books, doctors have many
patients, and recipes have many ingredients.

Versus having ownership information writen in two different tables (i.e.,
doctors' info saved to their own table as well as rewritten in the patients'
table), we want to make sure we set up a foreign key association between the
two.

How can we reflect this in Rails?

Simple. We begin by applying the `has_many` macro to the parent resource models.

### Demo: Author `has_many` Books

I'll apply the `has_many` macro to the Author model.

Once doing this, the `has_many` macro provides us with many useful getters and
setters:

```rb
Author#books
Author#books<<
Author#books.delete
Author#books.destroy
Author#books=
Author#book_ids
Author#book_ids=
Author#books.clear
Author#books.empty?
Author#books.size
Author#books.find
Author#books.exists?
Author#books.build
Author#books.create
Author#books.create!
```

## `belongs_to`

To complete this model relationship in Rails, the other side of the
relationship must use the `belongs_to` macro.

### Demo: Book `belongs_to` Author

Watch as I add this macro to the Book model. Take note of singular vs. plural
conventions for both `belongs_to` and `has_many`.
