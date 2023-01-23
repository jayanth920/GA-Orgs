[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# MyMDB API

A simple movie API to be used with the React sequence.

## Setup

1.  Fork and clone this repository.
1.  Install dependencies with `bundle install`.
1.  Create a `.env` for sensitive settings (`touch .env`).
1.  Generate new `development` and `test` secrets (`bundle exec rails secret`).
1.  Store them in `.env` with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>`
    respectively.
1.  Setup your database:
      - bin/rails db:drop (if it already exists)
      - bin/rails db:create
      - bin/rails db:migrate
      - bin/rails db:seed
      - bin/rails db:examples
1. Run the API server with `bin/rails server` or `bundle exec rails server`.

## Structure

This template follows the standard project structure in Rails.

User authentication is built-in.

## Tasks

Developers should run these often!

-   `bin/rails routes` lists the endpoints available in your API.
-   `bin/rails test` runs automated tests.
-   `bin/rails console` opens a REPL that pre-loads the API.
-   `bin/rails db` opens your database client and loads the correct database.
-   `bin/rails server` starts the API.
-   `scripts/*.sh` run various `curl` commands to test the API. See below.

## API

This API has two main resources, movies and actors. They are many-to-many, and
connected by a join table called "appearances". There are full CRUD endpoints
available for all three tables.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password`     | `users#changepw`  |
| DELETE | `/sign-out`        | `users#signout`   |

### Movies

| HTTP VERB | URI Pattern   | Controller#Action |
|-----------|---------------|-------------------|
| GET       | `/movies`     | `movies#index`    |
| GET       | `/movies/:id` | `movies#show`     |
| POST      | `/movies`     | `movies#create`   |
| PATCH     | `/movies/:id` | `movies#update`   |
| DELETE    | `/movies/:id` | `movies#destroy`  |

### Actors

| HTTP VERB | URI Pattern   | Controller#Action |
|-----------|---------------|-------------------|
| GET       | `/actors`     | `actors#index`    |
| GET       | `/actors/:id` | `actors#show`     |
| POST      | `/actors`     | `actors#create`   |
| PATCH     | `/actors/:id` | `actors#update`   |
| DELETE    | `/actors/:id` | `actors#destroy`  |

### Users

| Verb | URI Pattern | Controller#Action |
|------|-------------|-------------------|
| GET  | `/users`    | `users#index`     |
| GET  | `/users/1`  | `users#show`      |
| PATCH| `/users/1`  | `users#update`    |

## Additional Resources
- [rails-heroku-setup-guide](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide)
- http://guides.rubyonrails.org/api_app.html
- https://blog.codeship.com/building-a-json-api-with-rails-5/

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
