# Ember Resources Diagnostic

In this diagnostic, you will be laying the foundation of a blogging application.
There are two resources, Blog Posts and Comments.

A Blog Post has:

-   a title
-   a text body
-   a 'mood' (e.g. "happy", "sad", "angry")

A Comment has:

-   a subject line
-   a comment body

Additionally, the models are associated with each other.

-   Blog Posts have a 1:M relationship with Comments

This app has two routes (`/blogposts` and `/blogposts/:id`).
Route and Template files for these have already been generated, as have
Components for displaying both resources.

Your task is to

1.  Create Models to represent the two resources.
1.  Associate the two Models as specified.
1.  Modify the given Components and Routes (defining new methods and properties
as necessary) to implement CRUD behavior for both resources. Blog Posts should
have 'dependent-destroy' behavior.

Good luck!
