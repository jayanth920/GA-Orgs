[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API: One-To-Many

This is part of the Rails API sequence of talks. Each talk has its own
repository with a reference README.

- [Rails API: Single Resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource)
- [Rails API: One-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many)
- [Rails API: Many-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-many-to-many)

During the sequence, we will be building an API for a campus.

- [Campus API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server)

## Prerequisites

- [Rails API: Single Resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource)

If you are behind, or don't have correct code, please speak with the instructor.

## Objectives

- Diagram the database tables and Entity Relationship Diagram that describe a
  one-to-many relationship.
- Create a new resource using `scaffold`.
- Write a migration for a one-to-many relationship.
- Compare `has_many` and `belongs_to` to other macros, like `attr_accessor`.
- Configure ActiveRecord to manage one-to-many relationships using `has_many`
  and `belongs_to`.
- Create associated records using the rails console.

## Preparation

- Set up the [Campus API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server)
- Review Campus **Version 2** user stories and entity relationship diagrams
  - [Library](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server/blob/master/docs/library.md)
  - [Hospital](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server/blob/master/docs/hospital.md)
  - [Cafeteria](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server/blob/master/docs/cafeteria.md)

## Steps for Adding a Relationship to a Model

1. Generate the new resource it will have a relationship with if needed
1. Add a foreign key to the resource that belongs to the other resource
1. Add relationship macros to both models
1. Add the resource_id to the permitted params in the controller

## Add Relationships to Campus

We have included links to docs that help explain the demo for each of the
following three steps. You can use the docs to refence back to later on.

### Scaffold new resource

- Demo: [Library](docs/library_scaffold.md)
  - Authors have `given_name` and `family_name`.
- Code-along: Hospital
  - Doctors have `given_name`, `family_name`, `specialty`, and `zip_code`.
- Lab: Cafeteria
  - Recipes have `name` and `description`.

### Add foreign key

- Demo: [Library](docs/library_foreign_key.md)
  - `author` column reference in `books` table
- Code-along: Hospital
  - `doctor` column reference in `patients` table
- Lab: Cafeteria
  - `recipe` column reference in `ingredient` table

### Add relationship macros

- Demo: [Library](docs/library_macros.md)
  - Book `belongs_to` Author and Author `has_many` Books
- Code-along: Hospital
  - Patient `belongs_to` Doctor and Doctor `has_many` Patients
- Lab: Cafeteria
  - Ingredient `belongs_to` Recipe and Recipe `has_many` Ingredients

## Further Reading

- [Rails Association Basics](http://guides.rubyonrails.org/association_basics.html)
 Read the sections on belongs_to and has_many.
- [ActiveRecord Basics](http://guides.rubyonrails.org/active_record_basics.html)
- [ActiveRecord Migration Basics](http://guides.rubyonrails.org/active_record_migrations.html)
- [Rails Documentation](http://api.rubyonrails.org/)
- [Debugging Rails with the byebug Gem](http://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-byebug-gem)
- [With So Much Rails to Learn, Where Do You Start?](http://www.justinweiss.com/blog/2015/05/25/with-so-much-rails-to-learn/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
