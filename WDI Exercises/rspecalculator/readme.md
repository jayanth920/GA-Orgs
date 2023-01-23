# Rspec Calculator

## Prompt

We're going to write a calculator class in Ruby as a way of learning [Rspec](http://rspec.info/)

#### Step 1: Setup

In this exercise, you will be running tests that we have provided and writing your own. To get started, run `bundle install` to install `rspec`. After that, you should be able to run `rspec` from the command line. When you do, you should see some failing tests and some that are pending.

#### Step 2: Red-Green-Refactor

The first few tests have already been written for the add and subtract methods. Read through those tests, then write the necessary code in `lib/calc.rb` to make them pass.

Once you have your tests passing: congratulations! You've just completed your first testing cycle. In Test-driven Development, developers deconstruct a problem, write tests for that problem, then write the code to pass those tests.

#### Step 3: Write your own tests

I've written stubs for the power, sum, multiply, and factorial methods. When you look at the `calc_spec.rb` file you'll see a bunch of "it" statements that aren't being passed a block. The "it" statements are our stubs. Also, when you run rspec they will show up in yellow.

Find those stubs and fill them out by writing tests. Once you have written the tests and can see that they are failing (red). Now make them pass (green).

#### Resources:

* [Better Specs: rspec guidelines with Ruby](http://www.betterspecs.org/)
* [Rspec Docs](https://relishapp.com/rspec/rspec-core/v/3-1/docs)
* [Getting Started with Rspec](https://semaphoreci.com/community/tutorials/getting-started-with-rspec)
* [What is that "#" that we put before each method for?](http://betterspecs.org/#describe)
* We had to write "Calculator.new" for every test and my DRY alarm is going off! [Is there a better way?](http://betterspecs.org/#subject)
* What else can we test for besides equality?
  * [Expectations in RSpec](https://www.relishapp.com/rspec/rspec-expectations/v/2-14/docs)
  * [Built in matchers with Rspec:](https://www.relishapp.com/rspec/rspec-expectations/v/2-14/docs/built-in-matchers)
* [What is that context thing again and when do we use it?](http://betterspecs.org/#contexts)
