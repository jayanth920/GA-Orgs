# Rails API One-to-Many Diagnostic

Place your responses inside the fenced code-blocks where indivated by comments.

1.  What is one purpose for having relationships in our API?

```sh
  # < Your Response Here >
```

1.  Provide a database table structure and explain the Entity Relationship
that describes a one-to-many relationship for `Students` and `Programs`.
A `Student` has a `given_name`, `surname`, `hometown` and `nickname` and a
`Program` has `state_date`, `end_date`, and `market`.

```sh
  # < Your Response Here >
```

1.  For the above example, what needs to be added to the Model files?

```rb
class Student < ActiveRecord::Base
end
```

```rb
class Program < ActiveRecord::Base
end
```

1.  What is the purpose of our `schema.rb` file? How does it differ from a migration?

```sh
  # < Your Response Here >
```

1.  You have a `Books` table that has the attributes, `title`, `author` and
`release_date`. What would the migration command be to _remove_ the `author`
column?

```sh
  # < Your Response Here >
```

1.  You now have an `Authors` table with `given_name`, `surname`, and `born_in`.
Given that you now have a `Books` and `Authors` table, which table will get the
foreign key to allow for a join? Why?

```sh
  # < Your Response Here >
```

1.  Given your answer from above, what would the command be to _add_ the correct **reference** column, to the correct table?

```sh
  # < Your Response Here >
```

BONUS

1.  How would you prevent a user from adding a `Book`, that has already been added
to the data store?

```sh
  # < Your Response Here >
```
