[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Diagnostic: Activerecord Associations

You have 30 minutes.

## Prerequisites

-   Rails Activerecord CRUD
-   Rails Activerecord one-to-many
-   Rails Activerecord many-to-many

## Instructions

You may use **any resource** other than each other to complete this diagnostic.
This includes referencing talk materials, appropriate documentation, and
searching for help online.

Fork, clone, change into directory, and branch (response), then run

`bundle install`

then

`rake db:create db:migrate`

Copy and paste all your answers into diagnostic.rb

### Question 1

Generate a model/migration for `pet` that has a reference to `person`. `person` being the parent model and pet being the child. Copy and paste the migration file as your answer.

### Question 2

Run `rake db:migrate db:populate:all`. Now associate the `app/models/pet.rb` and `app/models/person.rb` models with each other in a one-to-many relationship (person having many pets). Paste the code from each model as your answer.

### Question 3

In the rails console add `Pet.first` and `Pet.last` to `Person.first`'s pets collection. Paste each console command to achieve this as your answer.

### Question 4

Generate a model/migration for `address` that joins people to cities. Paste the migration code as your answer.

### Question 5

Associate `app/modles/person.rb` with `app/modles/city.rb` through `app/modles/address.rb` in a many-to-many relationship. Paste the code for all the models as your answer.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
