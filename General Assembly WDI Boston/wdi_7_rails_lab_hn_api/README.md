# Hacker News API

Let's pretend we were going to build Hacker News using a JavaScript front-end application, with Rails as the back-end. Today we're just concerned with the back-end however.

### Instructions: Part 1

Fork/Clone this repo.

Create a new Rails API application in this directory
`rails-api new . hnAPI --database=postgresql -T`

Now we want to create our models, but what are we going to create? Let's plan out our models! Work with a partner and figure out all of the potential models you'd need to clone hacker news.

Plan to have a User model, but don't worry about the details needed for Devise login yet (password), just say that they have a username, email and other fields that Hacker News might support.

Draw out an [Entity Relationship Diagram](http://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) similar to the ones that [Rails-ERD](https://github.com/voormedia/rails-erd) creates for you for all models.

Then create migrations and models needed to fulfill these relationships and properties.

Talk with your partner about what types of validations you might want to have on these models, and then implement those.

Create some seed data for these models, but don't go overboard.

What do you want your API to look like? What results are you expecting to see when you make various types of requests to URLs? Write down these expectations.

Create the routes, controllers and serializers needed to fulfill these expectations.

### Instructions: Part 2, testing

Work with your partner to generate 'model specs' and 'request specs' using Rspec 3+ and FactoryGirl.

Basically, you're going to expect that specific JSON (or other) results are returned specific requests are made.

Some good resources for this:

- http://matthewlehner.net/rails-api-testing-guidelines/
- http://commandercoriander.net/blog/2014/01/04/test-driving-a-json-api-in-rails/
- https://relishapp.com/rspec/rspec-rails/docs
- https://github.com/rspec/rspec-rails
- http://easyart.github.io/2012/04/10/testing-rails-json-apis-with-rspec/ (uses old Rspec 2.0 syntax, beware. However, good concepts)

### Instructions: Part 3, deploy to Heroku

You know what to do, deploy to Heroku!

### Instructions: Part 4, Documentation

Read about [documenting your API with Rdoc](https://www.amberbit.com/blog/2014/2/19/building-and-documenting-api-in-rails/
). (The rest of the article is good too!)

Then with your partner, build documentation for your API.

Congrats! You've now built a fully tested and documented API. If you're looking for more to do check out the following idea:

- Use [`rails_best_practices`](https://github.com/railsbp/rails_best_practices) to determine areas that your code could use improvement
- Use [Coveralls](https://coveralls.io) to display your test coverage
- Use [Travis CI](https://travis-ci.org/) to test your builds as you check in code
- Implement [Code Climate](https://codeclimate.com/) for automated code review
- Evaluate your documentation with [Inch CI](http://inch-ci.org/)
