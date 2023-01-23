![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Example: RSpec Word Count

## Objectives

By the end of this, students should be able to:

- Comprehend the goal of a spec by reading it.
- Use plain english to explain what a spec does.

## Instructions

- Fork and clone this repo, change working directory.
- Run `bundle install`
- Run `rspec spec`. All the tests should pass.
- Open `spec/word_count_spec.rb`, then sit tight.
- Follow along with your instructor. Stage and commit your changes as you progress.
- Push changes to your Github repo `git push origin master`.

## Bonus

Since our tests pass and we understand the intent of each method from the examples in our specs, we can safely improve our code.

Challenge yourself by refactoring the code in `lib/word_count.rb`. Consider what `self` is on each line it appears and whether it is necessary to explicitly send messages to `self`. Can you make `String#word_frequency` into one line while keeping it "intention-revealing" and readable?

Spoilers: [f13d53](https://github.com/ga-wdi-boston/wdi_1_ruby_example_rspec_word_count/commit/f13d53a3b42e40d34d6dffe6b520509df3e0ed1b)

## Additional Resources

- [Four-Phase Test](http://robots.thoughtbot.com/four-phase-test): most tests follow this pattern, and it makes them easier to follow.
- [Better Specs](http://betterspecs.org/) }]
