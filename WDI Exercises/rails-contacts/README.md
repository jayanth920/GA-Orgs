# Rails Model Methods

This app demonstrates the pitfalls of implementing fat controllers.

## Goal

* Move code that belongs in the **model** out of the **controller**.

## How you'll get there

* You'll get the model spec examples to pass
* Use `ActiveRecord` methods to accomplish this.
* You'll also need to create a migration! :shipit:

## Getting Started

### After you've cloned this repo

* From the app's root directory, run:

```bash
$ bundle install
$ rake db:create
$ rake db:migrate
$ rake db:seed
$ rake db:test:prepare
```

> `rake db:test:prepare` just checks to see if there are any pending migrations for our test database, and make sure our test environment and development environment are in-sync when we run our tests.

* Take a look at the file `db/seeds.rb` to see how we are seeding the database

## Then get the specs to pass for

### `Person.all_email_domains`

* **Note**: Do this First

* You'll need to create a migration that will add the `domain_name`field as a `string` to the `people` table
	>  **Pro-tip**: Make sure to run your migrations, and prepare the test database

* Populate all instances of `People` with the appropriate `domain_name`
	> **Hint**: What current property of `people` has data you could draw from?

	> **Hint**: How could you modify that data to only capture the appropriate `domain_name`?

	> Look at the current implementations in the `person_controller.rb`

* To get a quick refresher on how to generate a migration, check out the [guides](http://guides.rubyonrails.org/migrations.html#creating-a-standalone-migration)

### `Person.find_all_with_email_domain`

*  Your method should take one argument representing a `domain`.
*  The return of the method should be all instances of `Person` that match that given domain, or return everyone if passed `All`

# Bonus

Research Rails [Validations](http://guides.rubyonrails.org/migrations.html#creating-a-standalone-migration) and [Active Record Callbacks](http://guides.rubyonrails.org/active_record_callbacks.html) to look into how to control for user input

* Make all the pending tests active by removing the `x` from `xit` on lines 60, 64, and 76 in `spec/models/person_spec.rb`

* Get the appropriate tests to pass by defining `sanitize_email` and `generate_domain_name` as instance methods.
	* `sanitize_email` should make all emails a uniform case
	* `generate_domain_name` will add a `domain_name` to a `person` if they are created without one
* Use these methods as Active Record callbacks.

### Resources used

Thanks [http://www.briandunning.com/sample-data/](http://www.briandunning.com/sample-data/) for the sample data!
