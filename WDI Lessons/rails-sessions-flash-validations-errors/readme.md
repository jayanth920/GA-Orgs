# Sessions, Flash, Validations & Error Handling

## Screencasts (on Error Handling)
- [Part 1/5](https://youtu.be/sHSsc7EGI0g)
- [Part 2/5](https://youtu.be/wKMuNDLDKFA)
- [Part 3/5](https://youtu.be/HZPTIpZUAnQ)
- [Part 4/5](https://youtu.be/yvNO_yoWcqE)
- [Part 5/5](https://youtu.be/hEKDLhZQOSA)

## Learning Objectives

- Explain the purpose of `sessions` in Rails
- Explain the purpose of `flash` in Rails
- List three ActiveRecord methods that trigger validations
- Create a custom validation on an ActiveRecord model
- Explain the benefits of explicitly handling errors
- Produce and handle an error in Ruby using the keywords `begin`, `rescue`, and `raise`

## Setup

We'll be using the version of Tunr that has fully working CRUD functionality.

Starter code can be found on the `solution` branch of the [`tunr_rails_routes_resources`](https://git.generalassemb.ly/ga-wdi-exercises/tunr_rails_routes_resources) repo.

```bash
$ git clone git@git.generalassemb.ly:ga-wdi-exercises/tunr_rails_routes_resources.git
$ cd tunr_rails_routes_resources
$ git checkout solution
$ bundle install
$ rails db:drop db:create db:migrate db:seed
$ rails s
```

## Lesson Sections

- [Sessions](sessions.md) (40 minutes)
- [Flash](flash.md) (40 minutes)
- [Validations](validations.md) (40 minutes)
- [Error Handling](error_handling.md) (30 minutes)

# Sample Quiz Questions

- What is the purpose of Rails' `session` hash?
- What is the key difference between a value stored in `session` and one stored in `flash`?
- What is the purpose of Rails validations?
- What is an example of a built-in Rails validation?
- What's the difference between `.create` and `.create!`?
- You see `ROLLBACK` in your Rails server log. What does that mean?
- What does it mean to let something "fail silently", and why is it considered bad?
- What's the difference between `begin` and `rescue`?
