# Rails API Relationships Diagnostic

Place your responses inside the fenced code-blocks where indicated by comments.

1. Describe a reason why join tables may be valuable.

    ```md
      <!-- Your Response Here -->
    ```

2. Provide a database table structure and explain the Entity Relationship that
describes a many-to-many relationship for `Profiles`, `Movies` and `Favorites`
(think Netflix). The `Profiles` table would have `given_name`, `surname` and
`email` fields, the `Movies` table would have `title`, `release_date`, and
`length` fields, and `Favorites` would be the join table with references to
`Movies` and `Profiles`.

    ```md
    <!-- Your Response Here -->
    ```

3. For the above example, what needs to be added to the Model files?

    ```rb
    class Profile < ApplicationRecord
      # Your Response Here
    end
    ```

    ```rb
    class Movie < ApplicationRecord
      # Your Response Here
    end
    ```

    ```rb
    class Favorite < ApplicationRecord
      # Your Response Here
    end
    ```

4. What is the purpose of a serializer? What would our `Profile` serializer look
  like to show all movies favorited by a profile on
  `http://localhost:3000/profiles/1`

    ```md
    <!-- Your Response Here -->
    ```

    ```rb
    class ProfileSerializer < ActiveModel::Serializer
      # Your Response Here
    end
    ```

5. What would the command be to _scaffold_ out a **join table** for Favorites from
  the above `Movies` and `Profiles`.

    ```sh
      # Your Response Here
    ```

6. What is `dependent: :destroy` and where/why would we use it?

    ```md
    <!-- Your Response Here -->
    ```

7. Think of **ANY** example where you would have a one-to-many relationship as well
  as a many-to-many relationship in an application. You only need to list the
  description about the resources and how they relate to one another.

    ```md
    <!-- Your Response Here -->
    ```
