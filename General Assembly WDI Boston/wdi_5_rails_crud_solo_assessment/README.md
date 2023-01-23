![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Solo Assessment:  An introduction to ActiveRecord

You have 30 minutes.

## Instructions

Fork and clone this repository, then

```bashs
 $ cd wdi_5_rails_crud_solo_assessment
 $ subl .
 $ cd crud_solo_assessment
 $ rake db:create
```

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete the solo assessment.

- Question 1. Create two models (and migrations):
  +   `House` has the following properties:, name (string), motto (string), and sigil (string).
  +   `Person` has a name (string), title (string), quote (string), image (string), and age (integer).

- Question 2. Use ActiveRecord to save the data from `westeros/houses.csv` in `House` objects and the data from `westeros/people.csv` in `Person` objects.
  + Save your code in `scripts/save.rb`.

- Question 3. Use ActiveRecord to retrieve all of the people greater than a certain age *or* having a specific title.
  + Save your code in `scripts/find.rb`.

- Question 4. Change the motto of one of your houses. Look it up by its name.
  + Save your code in `scripts/update.rb`.

- Question 5. Kill off, er, I mean delete one of the people. Look them up by their title.
  + Save your code in `scripts/delete.rb`


You can test your work with `rails runner`.  Use `p` in your scripts to output any results.

Commit and push your changes.

Submit a pull request.
