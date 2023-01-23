[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API: Many-To-Many

This is part of the Rails API sequence of talks. Each talk has its own
repository with a reference README.

- [Rails API: Single Resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource)
- [Rails API: One-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many)
- [Rails API: Many-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-many-to-many)

During the sequence, we will be building an API for a campus.

- [Campus API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server)

## Prerequisites

- [rails-api-single-resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource)
- [rails-api-one-to-many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many)

If you are behind, or don't have correct code, please speak with the instructor.

## Objectives

By the end of this, developers should be able to:

- Create a many-to-many relationship with existing models.
- Create and utilize a join table.
- Create a new resource using `scaffold`.
- Specify an `inverse_of` relationship.
- Compare and contrast objects created in the join table versus those that were not.

## Preparation

- Set up the [Campus API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server)
- Review Campus **Version 3** user stories and entity relationship diagrams
  - [Library](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server/blob/master/docs/library.md)
  - [Hospital](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server/blob/master/docs/hospital.md)
  - [Cafeteria](https://git.generalassemb.ly/ga-wdi-boston/rails-api-campus-server/blob/master/docs/cafeteria.md)

## WHY ARE WE DOING IT THIS WAY

Why not just add all three models at once and tie them all together? The reason
we do things one-at-a-time, is because if we move slow and methodically make
adjustments we're MUCH LESS likely to make mistakes. Doing things one-at-a-time
with small adjustments also keeps our application working ALL THE TIME.

## Steps for Adding a Joins Table

1. Generate necessary resource for the relationship
1. Generate the joins table with the 2 foreign keys
1. Add relationship macros to all 3 models
1. Adjust permitted parameters for all 3 controllers
1. Review serialized values for all 3 serializers
1. Test all resources with curl

## Add Relationships to Campus

### Demo: Library

- [Generate necessary resource](docs/library_generate.md)
  - Generate `Borrower` resource.
- [Generate joins table](docs/library_joins.md)
  - Generate `Loan` resource.
- [Add relationship macros](docs/library_macros.md)
  - To models of `Book`, `Loan`, and `Borrower`
- [Review serializers](docs/library_serializer.md)
  - To models of `Book`, `Loan`, and `Borrower`
- Test with curl

### Code Along: Hospital

- Generate necessary resource
  - No additional resource needed
- [Generate joins table](docs/hospital_joins.md)
  - Generate `Appointment` resource.
- [Add relationship macros](docs/hospital_macros.md)
  - To models of `Doctor`, `Patient`, and `Appointment`
- [Review serializers](docs/hospital_serializer.md)
  - To models of `Doctor`, `Patient`, and `Appointment`
- Test with curl

### Lab: Cafeteria

- Generate necessary resource
  - No additional resource needed
- Generate joins table
  - Generate `Meals` resource.
  - Remove `recipe_id` from `ingredient` table
- Add relationship macros
  - To models of `Ingredient`, `Recipe`, and `Meal`
- Review serializers
  - To models of `Ingredient`, `Recipe`, and `Meal`
- Test with curl

### Serializer Notes

- DON'T EVER PUT `:user` IN YOUR SERIALIZER!!! You'll end up serializing out
  sensitive data (like passwords and other should-be-secure data)!

- You can customize what gets sent in the serializer too! For an
  use-case of this look in ExampleSerializer.

## Lab: Harry Potter API

Get more practice with Rails and relationships by designing an API to use with
Harry Potter and friends.

Set up a brand new API with
[the Rails API Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template).

### Resources

- `School` with name, location, and owner
- `School` has many houses

- `House` with name, animal and slogan
- `House` belongs to `School`, `House` has many students

- `Student` has given name and family name
- `Student` belongs to `House`

### Steps

Create first resource

1.  Create `School` resource
1.  Test all CRUD on `School` resource
1.  Commit

Add second resource

1. Create `House` resource
1. Test all CRUD on `House` resource
1. Commit
1. Add `School` foreign key to `House`
1. Add `School` and `House` relationship to models
1. Test all CRUD on `House` resource
1. Review Serializers
1. Commit

Add third resource

1. Create `Student` resource
1. Test all CRUD on `Student` resource
1. Commit
1. Add `House` foreign key to `Student`
1. Add `Student` and `House` relationship to models
1. Test all CRUD on `Student` resource
1. Review Serializers
1. Commit

### Validations

- `School`
  - validates name includes word `School`, error should say “Name must include the phrase School”
  - validates name must be unique
  - validates all properties must be present
  - validates any associated houses

- `House`
  - validates animal excludes cat, dog, bird, error should say “Animal can not be cat, dog or bird”
  - validates name format is first word capitalized, error should say “Name must be capitalized”
  - validates name must be unique
  - validates all properties must be present on update but only name required on create

- `Student`
  - validates given name and family name length between 2 and 20 characters
  - validates given name must be unique within scope of family name
  - validates all properties must be present

## Additional Resources

- Rails Docs
  - [ActiveRecord Association Basics#has_many :through](http://guides.rubyonrails.org/association_basics.html#the-has-many-through-association)
  - [ActiveRecord Validations](http://guides.rubyonrails.org/active_record_validations.html)
  - [ActiveRecord Callbacks](http://guides.rubyonrails.org/active_record_callbacks.html)

- Blogs
  - [ActiveRecord Joins](https://www.learneroo.com/modules/137/nodes/768)
  - [Complex has_many :through](http://nithinbekal.com/posts/complex-has-many-through/)
  - [Perils of Uniqueness Validations](https://robots.thoughtbot.com/the-perils-of-uniqueness-validations)
  - [Custom Validations](https://hackernoon.com/performing-custom-validations-in-rails-an-example-9a373e807144)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
