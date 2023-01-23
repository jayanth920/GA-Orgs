[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# rails-api-campus-server

This is part of the Rails API sequence of talks. Each talk has its own
repository with a reference README.

- [Rails API: Single Resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource)
- [Rails API: One-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many)
- [Rails API: Many-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-many-to-many)

Each talk is designed to walk through the creation of a real Rails API,
feature-by-feature, using "error driven development".

During the sequence, we will be building the following features for this API.

- [Library](docs/library.md)
- [Hospital](docs/hospital.md)
- [Cafeteria](docs/cafeteria.md)

The API contains a few important branches:

- `master` contains starter code.
- `tutorial` contains detailed commit history, and tags for where each talk
  should end.
- `solution` contains a feature-complete reference API. History is not
  canonical.

## Preparation

1. Fork and clone this repository.
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `bundle install`.
1. Create a `.env` for sensitive settings (`touch .env`).
1. Generate new `development` and `test` secrets (`bundle exec rails secret`).
1. Store them in `.env` with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>`
   respectively.
1. Setup your database with `bin/rails [db:drop] db:create db:migrate db:seed`.
1. Run the API server with `bin/rails server`.

## Tasks

Developers should run these often!

- `bin/rails routes` lists the endpoints available in your API.
- `bin/rails test` runs automated tests.
- `bin/rails console` opens a REPL that pre-loads the API.
- `bin/rails db` opens your database client and loads the correct database.
- `bin/rails server` starts the API.
- `scripts/*.sh` run various `curl` commands to test the API. See below.

## Additional Resources

- [Deploying a Rails API to Heroku](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide)
- [Rails guides for an API App](http://guides.rubyonrails.org/api_app.html)
- [Blog post of building a JSON API with Rails 5](https://blog.codeship.com/building-a-json-api-with-rails-5/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
