[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API Single Resource

This is part of the Rails API sequence of talks. Each talk has its own
repository with a reference README.

- [Rails API: Single Resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource)
- [Rails API: One-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many)
- [Rails API: Many-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-many-to-many)

During the sequence, we will be building an API for a campus.

- [Campus API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server)

## Prerequisites

- [Rails API](https://git.generalassemb.ly/ga-wdi-boston/rails-api)

## Objectives

By the end of this, developers should be able to:

- Follow along in the creation of an API.
- Build a complete server side API in Rails.
- Create a model with full CRUD capability.

## Preparation

- Set up the [Campus API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server)
- Review feature goals for [Campus API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server)

## Methodical, Error-Driven Development

Status checks will be frequent. As developers we want to be meticulous and make
sure we're getting errors where expected as we build our API.

This is called "error-driven development". The goal is to see an error, and to
learn what error to expect. Embrace the errors, and they will tell you what
your next task is.

We'll trigger errors by issuing `curl` requests.

## Error-Driven Development Steps

Follow the steps outlined in good Error Driven Development

1. Route
    - Test the route, see that a route does not exist
    - Add the route
    - Test the route, see that a route does exist
1. Controller
    - Test the route, see that a route does exist but controller does not
    - Add the controller
    - Test the route, see that a controller exists
1. Model
    - Test the route, see that a controller exists but model does not
    - Add the model
    - Test the route, see that a Model exists
1. Migrations
    - Test the route, see that a Model exists but migrations must be run
    - Run migrations
1. Test Feature
    - Test the route, ensure actions are successful
    - Use Rails Console to ensure all data persists as expected

## CRUD

We'll now go through the steps for completing each CRUD action for multiple
resources. We've included a little more breakdown for the first demo in case
you would like to reference back to it in the future, you can click the link
below or [books-crud-tutorial](docs/books_crud.md).

### Read - index

- Demo: [BooksController#index](docs/books_crud.md)
- Code-along: `PatientsController#index`
- Lab: `IngredientsController#index`

### Read - show

- Demo: `BooksController#show`
- Code-along: `PatientsController#show`
- Lab: `IngredientsController#show`

### Destroy

- Demo: `BooksController#destroy`
- Code-along: `PatientsController#destroy`
- Lab: `IngredientsController#destroy`

### Update

- Demo: `BooksController#update`
- Code-along: `PatientsController#update`
- Lab: `IngredientsController#update`

### Create

- Demo: `BooksController#create`
- Code-along: `PatientsController#create`
- Lab: `IngredientsController#create`

## Tips

- Be meticulous, did you check your pluralization? is your spelling correct?
  Did you miss an `end`?
- Test frequently, check for errors in your browser and server.
- Follow your errors, they typically give you a line number, be patient.  You
  should be able to identity the exact line of your bug before you ask for
  assistance.
- Remember to use the generators to your advantage. They can save you valuable
  time.

## Tasks

Developers should run these often!

- `bin/rake routes` lists the endpoints available in your API.
- `bin/rake test` runs automated tests.
- `bin/rails console` opens a REPL that pre-loads the API.
- `bin/rails db` opens your database client and loads the correct database.
- `bin/rails server` starts the API.
- `scripts/*.sh` run various `curl` commands to test the API. See below.

<!-- TODO -   `rake nag` checks your code style. -->
<!-- TODO -   `rake lint` checks your code for syntax errors. -->

## Additional Resources

- [Rails Docs: Routing](http://guides.rubyonrails.org/routing.html)
- [Rails Docs: Controllers](http://guides.rubyonrails.org/action_controller_overview.html)
- [Rails Docs: Active Record Basics](http://guides.rubyonrails.org/active_record_basics.html)
- [Rails Docs: Active Record Querying](http://guides.rubyonrails.org/active_record_querying.html)
- [Rails Docs: Active Model Basics](http://guides.rubyonrails.org/active_model_basics.html)
- [Rails Docs: Command Line](http://guides.rubyonrails.org/command_line.html)
- [Migration Cheat Sheet](https://www.ralfebert.de/snippets/ruby-rails/models-tables-migrations-cheat-sheet/)
- [Rails Reserved Words](https://reservedwords.herokuapp.com/)
- [Rails Status Symbols](http://www.railsstatuscodes.com/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
