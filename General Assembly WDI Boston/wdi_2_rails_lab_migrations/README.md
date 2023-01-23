![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Rails Migrations Lab

## Objectives

By the end of this, students should be able to:

- Write Rails migrations to alter a database schema
- Migrate and rollback between migrations to change the current state of the schema

## Instructions

- Fork/Clone this repo
- Change into this directory
- Run: `bundle && rake db:create db:migrate db:test:prepare`
- Follow below instructions *in order*
- Once final step is complete and final tests pass, commit, push and make a pull request

### Step 1

Your boss comes to you and says, "*We just got in a new project. I need you to setup the database to make it happen, here's what I need...*" and points at a schema drawn out on the wall with names of columns an datatypes.

![Boss Schema](http://i.imgur.com/nW3EyBtl.jpg)

"*Location is everything!*" he exclaims and walks off.

##### Your Job:

Create a single migration called CreateLocations, using the migrations generator, that will have these columns in place.

Run the migrations with `rake db:migrate db:test:prepare` and then run `rspec spec/models/step1_spec.rb` to see that it has worked. Make a git commit and move onto step 2.

### Step 2

"*I don't even know what city and state these location are in!*" says your boss. You wonder why he couldn't have done this right in the first place.

##### Your Job:

Create a migration called AddCityAndStateToLocations, using the migrations generator, that will add columns of city and state to the schema. City and state should each be of type string.

Run the migrations with `rake db:migrate db:test:prepare` to apply the migrations.

Run `rspec spec/models/step2_spec.rb` to see that your steps worked.

### Step 3

> "*I just read that places have colors. All our locations should have a color*"

At this point you're pretty sure your boss has lost it, but he signs off on your paycheck so you're going to deal with it.

##### Your Job:

Create a migration called AddColorToLocations, using the migrations generator, that will add a column called `color` to the locations table with the datatype of string.

Run the migrations with `rake db:migrate db:test:prepare` to apply the migrations.

Run `rspec spec/models/step3_spec.rb` to see that your steps worked.

### Step 4

> "*Colors are so 2014. Now we need flavors!*"

At this point, you're brushing up on your resume and making sure you know where the nearest emergency exit is, but tomorrow's payday and you're hoping for him to sign off on that check.

##### Your Job:

Create a migration called AddFlavorAndRemoveColorFromLocations, using the migrations generator. Add a column called `flavor` with datatype of string, and remove the column called `color` in the same migration.

Run the migrations with `rake db:migrate db:test:prepare` to apply the migrations.

Run `rspec spec/models/step4_spec.rb` to see that your steps worked.

### Step 5

> "*All things are for sale. Why don't we sell the locations? We need prices!*"

Create a migration called AddPricesToLocations, using the migrations generator. Add a column called 'price' with datatype of decimal.

Run the migrations with `rake db:migrate db:test:prepare` to apply the migrations.

Run `rspec spec/models/step5_spec.rb` to see that your steps worked.

### Step 6

> "*Maybe that last one was a poor idea, let's talk a step back*"

You did your job well, but he just can't make up his mind. Thankfully you've been getting some calls from recruiters and have an interview at Google on Tuesday.


##### Your Job:

Rollback the last migration. You used to have a note about how to do that somewhere, but it seems to have been lost under a pile of burrito wrappers and coke cans. I'm sure you can figure it out.

Then run `db:test:prepare` to make sure your test database is synced up and then `rspec spec/models/step6.rb` to see that your database is in the proper state.
