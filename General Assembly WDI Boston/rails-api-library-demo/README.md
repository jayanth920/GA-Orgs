[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API: Library API (Demo)

This is part of the Rails API sequence of talks. Each talk has its own
repository with a reference README.

-   [Rails API: Single Resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource)
-   [Rails API: One-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many)
-   [Rails API: Many-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-many-to-many)

Each talk is designed to walk through the creation of a real Rails API,
feature-by-feature, using "error driven development". Developers should have
completed the introductory [Rails
API](https://git.generalassemb.ly/ga-wdi-boston/rails-api) talk. This sequence ends with
[Rails API: Behavior-Driven
Development](https://git.generalassemb.ly/ga-wdi-boston/rails-api-bdd), where
error-driven-development is replaced by automated testing.

Each talk covers three domains, and therefore, three APIs. The demonstration
API, developed by consultants, is followed by a code-along API, in which
developers and consultants work together to build the API. Finally, developers
are expected to build their own API as part of the laboratory portions of each
talk.

-   [Library API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-library-demo)
-   [Clinic API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-clinic-code-along)
-   [Cookbook API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-cookbook-lab)

These API repositories contain a few important branches:

-   `master` contains starter code.
-   `solution` contains a feature-complete reference API. History is not
    canonical.
-   `tutorial` contains detailed commit history, and tags for where each talk
    should end.

## Preparation

1.  Fork and clone this repository.
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `bundle install`.
1.  Create a `.env` for sensitive settings (`touch .env`).
1.  Generate new `development` and `test` secrets (`bundle exec rails secret`).
1.  Store them in `.env` with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>`
    respectively.
1.  Setup your database with `bin/rake [db:drop] db:create db:migrate db:seed`.
1.  Run the API server with `bin/rails server`.

## API Build Specifications

![ERD Library](https://git.generalassemb.ly/storage/user/3667/files/41f4659c-ce2e-11e7-8e42-a1adbefc1bd5)

### Version 1
- Epic: As a user, I want to manage my books
- User Stories:
  - As a user, I want to view a single book
  - As a user, I want to view all books
  - As a user, I want to create a book with a title and author
  - As a user, I want to edit a book's title and author
  - As a user, I want to delete a book

### Version 2
- Epic: As a user, I want to manage my books
- User Stories:
  - As a user, I want to view a single book
  - As a user, I want to view all books
  - As a user, I want to create a book with a title
  - As a user, I want to edit a book's title
  - As a user, I want to delete a book
- Epic: As a user, I want to manage my authors
- User Stories:
  - As a user, I want to view an author
  - As a user, I want to view all authors
  - As a user, I want to create an author with a given name and family name
  - As a user, I want to edit an author's given name and family name
  - As a user, I want to delete an author
- Epic: As a user, I want an author to have many books
- User Stories:
  - As a user, I want to assign a single author to a book
  - As a user, I want to assign multiple books to an author

### Version 3
- Epic: As a user, I want to manage my books
- User Stories:
  - As a user, I want to view a single book
  - As a user, I want to view all books
  - As a user, I want to create a book with a title
  - As a user, I want to edit a book's title
  - As a user, I want to delete a book
- Epic: As a user, I want to manage my authors
- User Stories:
  - As a user, I want to view an author
  - As a user, I want to view all authors
  - As a user, I want to create an author with a given name and family name
  - As a user, I want to edit an author's given name and family name
  - As a user, I want to delete an author
- Epic: As a user, I want an author to have many books
- User Stories:
  - As a user, I want to assign a single author to a book
  - As a user, I want to assign multiple books to an author
- Epic: As a user, I want to manage borrowers
- User Stories:
  - As a user, I want to view a borrower
  - As a user, I want to view all borrowers
  - As a user, I want to create a borrower with a given name and family name
  - As a user, I want to edit a borrower's given name and family name
  - As a user, I want to delete a borrower
- Epic: As a user, I want borrowers to take out books
- User Stories:
  - As a user, I want borrowers to have many books
  - As a user, I want books to have many borrowers

## Tasks

Developers should run these often!

-   `bin/rails routes` lists the endpoints available in your API.
-   `bin/rails test` runs automated tests.
-   `bin/rails console` opens a REPL that pre-loads the API.
-   `bin/rails db` opens your database client and loads the correct database.
-   `bin/rails server` starts the API.
-   `scripts/*.sh` run various `curl` commands to test the API. See below.

<!-- TODO -   `rake nag` checks your code style. -->
<!-- TODO -   `rake lint` checks your code for syntax errors. -->

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
