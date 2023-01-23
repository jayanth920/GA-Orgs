# Delivery Notes

You are not expected to complete the entire talk. Get through as much as you
can. We do not require testing as a graduation requirement or technology to
implement in their projects, however it is likely going to come up very early in
their development career, hence our talk on the topic.

Mention the order of the two pieces of data in an assertion:

```ruby
expect(response_from_application).to eq(known_good_data_likely_set_up_in_spec)
```

## Vocab and General Notes / Diagrams

[lesson notes](https://git.generalassemb.ly/ga-wdi-pvd/lesson-notes/tree/master/rails-api-bdd)

## Foreign Key Reference for Comments

To create foreign key reference: `rails generate migration AddArticleToComments article:references`

## Whiteboard Diagrams

![BDD flow](https://git.generalassemb.ly/storage/user/4584/files/ba553c00-2bc2-11e7-8166-c370e4bd0527)

This diagram shows the inside out approach to our tests.

There is one big feature test that treats the API like a black box, it makes a
request and expects a response back like a curl request.

The smaller circles represent the unit tests that isolate a layer of the API and
just tests that one aspect.

When we write the code that makes our last unit test pass, the feature test should
pass as well.

![feature tests](https://git.generalassemb.ly/storage/user/4584/files/ba67b420-2bc2-11e7-8c88-40fadc577916)

A brief description of the feature tests.

![unit tests](https://git.generalassemb.ly/storage/user/4584/files/ba73d2d2-2bc2-11e7-8e3a-3a3281fcab85)

A brief description of the unit tests.

![BDD and outside in testing](https://git.generalassemb.ly/storage/user/4584/files/ba80965c-2bc2-11e7-8943-194a0bf9b15c)

Using the word should here is due to this Behavior Driven Development style.

![writing tests workflow](https://git.generalassemb.ly/storage/user/3667/files/744d1ce6-9ee0-11e7-9503-530566ae6e34)

Our workflow for writing the tests. They should always fail after we write them
because we write the code after the test.

## Response status codes

Why does the `response` object in tests almost always have status code 200?
Stack Overflow knows.

> So, looking at the the in-code documentation for `ActionController::TestCase::Behavior`,
under the Special Instance Variables section, we can see that
`ActionController::TestCase` will automatically provide an `@response` instance
variable (readable as just response in the test), which is an
`ActionDispatch::TestResponse object`, representing the response of the last
HTTP response". So, that would seem to explain why there is a response able to
be accessed without needing an explicit request made in a controller spec, but
why is it's status 200?

> Well, `ActionDispatch::TestResponse` inherits from `ActionDispatch::Response`,
which when initialized provides 200 as the default status. You can even test
this out in your rails console:

So from within an it block response is a method that will return the value of
the instance variable @response. That instance variable will contain whichever
the last response was, and it's default status code is 200 before any requests
are made.
