# AJAXer News

This repo is a copy of the [example branch](https://github.com/ga-wdi-boston/wdi_4_rails_hw_hacker_news/tree/example) from the Week 4 Hacker News project. It includes a full set of feature tests.

Your task is to "AJAXify" the process of submitting a new comment (i.e. it should not cause a new page load), while keeping the rest of the app the same. All feature tests should still pass! Make sure you're inserting the new comment at the correct position in the list, given that comments are sorted by score.

To allow our feature tests to use JavaScript, we'll need to make some changes. These have already been made in this repository (and in the [player tracker demo](https://github.com/ga-wdi-boston/wdi_4_rails_demo_rspec_players) you should be using as a reference for setting up TDD Rails projects), but they are listed here for reference.

## Setup

1. Install [PhantomJS](http://phantomjs.org/) (one-time, like installing Postgres)
  * **Mac:** `brew install phantomjs`
  * **Ubuntu:** `sudo apt-get install phantomjs`
2. Install [Poltergeist](https://github.com/jonleighton/poltergeist)
  * Add `gem 'poltergeist'` to the `:test` group in the `Gemfile`
  * In `rails_helper.rb`, add: `require 'capybara/poltergeist'`
  * In `rails_helper.rb`, add: `Capybara.javascript_driver = :poltergeist`
  * Ensure `database_cleaner` is configured to use truncation for specs tagged `:js` (our standard configuration file at `spec/support/database_cleaner.rb` already does this)
3. In `user_creates_comment_spec.rb`, change `context 'when signed in' do` to `context 'when signed in', :js do`. This tells RSpec to run the tests within this block using the configured `Capybara.javascript_driver` instead of the default driver. Run `rspec` and you should see all the tests still passing.

## Gotchas

1. In order to use `respond_with` in a controller, that controller must have a `respond_to` directive indicating which formats it can respond with. In the case of the `CommentsController`, this would need to be `respond_to :html, :json` since the controller can either render HTML templates or respond with JSON objects.

2. When using the default Rails behavior of `respond_with` (i.e. not using ActiveModel Serializers or jBuilder templates), Rails requires that you have a route that matches the objects passed in, even though it doesn't use this route for anything. This means `respond_with(comment)` will fail since there is no top-level comment show route. The easiest way to correct this is to change line 17 of the routes file to `resources :comments, only: [:show] do`.

3. `respond_with` only works correctly if the Ajax request was sent with the correct headers. For jQuery Ajax requests, this means you must include a `dataType: 'json'` option. The default behavior is that jQuery tries to guess what the data type should be, and it often guesses wrong.
