[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# listr-api

An API for [ember-resources](https://git.generalassemb.ly/ga-wdi-boston/ember-resources)

## Installation

1.  [Fork and] clone this repository.
1.  Install dependencies with `bundle install`.
1.  Create a `.env` for sensitive settings (`touch .env`).
1.  Generate new `development` and `test` secrets (`bundle exec rails secret`).
1.  Store them in `.env` with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>`
    respectively.
1.  In order to make requests to your deployed API, you will need to set
    `SECRET_KEY_BASE` in the environment of the production API (using `heroku
    config:set` or the Heroku dashboard).
1.  In order to make requests from your deployed client application, you will
    need to set `CLIENT_ORIGIN` in the environment of the production API (e.g.
    `heroku config:set CLIENT_ORIGIN=Fhttps://<github-username>.github.io`).
    See more about deploying to heroku [rails-heroku-setup-guide](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide)
1.  Setup your database with:
    - bin/rails db:drop (if it already exists)
    - bin/rails db:create
    - bin/rails db:migrate
    - bin/rails db:seed
    - bin/rails db:examples
1.  Run the API server with `bin/rails server` or `bundle exec rails server`.

## Tasks

Developers should run these often!

-   `bin/rails routes` lists the endpoints available in your API.
-   `bin/rails test` runs automated tests.
-   `bin/rails console` opens a REPL that pre-loads the API.
-   `bin/rails db` opens your database client and loads the correct database.
-   `bin/rails server` starts the API.
-   `scripts/*.sh` run various `curl` commands to test the API. See below.

<!-- TODO -   `rake nag` checks your code style. -->
<!-- TODO -   `rake lint` checks your code for syntax errors. -->

## API

### Lists

| Verb   | URI Pattern  | Controller#Action |
|:-------|:-------------|:------------------|
| GET    | `/lists`     | `lists#index`     |
| GET    | `/lists/:id` | `lists#show`      |
| POST   | `/lists`     | `lists#create`    |
| PATCH  | `/lists/:id` | `lists#update`    |
| DELETE | `/lists/:id` | `lists#destroy`   |

#### GET /lists

Request:

```sh
curl --include --request GET http://localhost:4741/lists
```

Response:

```json
[
  {
    "id": 1,
    "title": "Favorite Things",
    "hidden": false,
    "items": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "id": 2,
    "title": "Todo",
    "hidden": false,
    "items": [
      6,
      7
    ]
  }
]
```

#### GET /lists/:id

Request:

```sh
curl --include --request GET http://localhost:4741/lists/$ID
```

Response:

```json
{
  "id": 1,
  "title": "Favorite Things",
  "hidden": false,
  "items": [
    1,
    2,
    3,
    4,
    5
  ]
}
```

#### POST /lists

Request:

```sh
curl --include --request POST http://localhost:4741/lists \
  --header "Content-Type: application/json" \
  --data '{
    "list": {
      "title": "Groceries",
      "hidden": false
    }
  }'
```

Response:

```json
{
  "id": 3,
  "title": "Groceries",
  "hidden": false,
  "items": []
}
```

#### PATCH /lists/:id

Request:

```sh
curl --include --request PATCH http://localhost:4741/lists/$ID \
  --header "Content-Type: application/json" \
  --data '{
    "list": {
      "hidden": true
    }
  }'
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /lists/:id

Request:

```sh
curl --include --request DELETE http://localhost:4741/lists/$ID
```

Response:

```md
HTTP/1.1 204 No Content
```

### Items

| Verb   | URI Pattern             | Controller#Action |
|:-------|:------------------------|:------------------|
| GET    | `/lists/:list_id/items` | `items#index`     |
| GET    | `/items/:id`            | `items#show`      |
| POST   | `/lists/:list_id/items` | `items#create`    |
| PATCH  | `/items/:id`            | `items#update`    |
| DELETE | `/items/:id`            | `items#destroy`   |

#### GET /lists/:list_id/items

Request:

```sh
curl --include --request GET "http://localhost:4741/lists/$LIST_ID/items"
```

Response:

```json
[
  {
    "id": 1,
    "content": "Cats",
    "done": false,
    "list": 1
  },
  {
    "id": 2,
    "content": "Star Wars",
    "done": false,
    "list": 1
  },
  // ...
]
```

#### GET /items/:id

Request:

```sh
curl --include --request GET http://localhost:4741/items/$ID
```

Response:

```json
{
  "id": 1,
  "content": "Cats",
  "done": false,
  "list": 1
}
```

#### POST /items

Request:

```sh
curl --include --request POST http://localhost:4741/items \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "content": "Coding",
      "done": false,
      "list_id": 1
    }
  }'
```

Response:

```json
{
  "id": 8,
  "content": "Coding",
  "done": false,
  "list": 1
}
```

#### PATCH /items/:id

Request:

```sh
curl --include --request PATCH http://localhost:4741/items/$ID \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "done": true,
    }
  }'
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /items/:id

Request:

```sh
curl --include --request DELETE http://localhost:4741/items/$ID
```

Response:

```md
HTTP/1.1 204 No Content
```

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password`     | `users#changepw`  |
| DELETE | `/sign-out`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl http://localhost:4741/sign-up \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'
```

```sh
EMAIL=ava@bob.com PASSWORD=hannah scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "ava@bob.com"
  }
}
```

#### POST /sign-in

Request:

```sh
curl http://localhost:4741/sign-in \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
```

```sh
EMAIL=ava@bob.com PASSWORD=hannah scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "ava@bob.com",
    "token": "BAhJIiVlZDIwZTMzMzQzODg5NTBmYjZlNjRlZDZlNzYxYzU2ZAY6BkVG--7e7f77f974edcf5e4887b56918f34cd9fe293b9f"
  }
}
```

#### PATCH /change-password

Request:

```sh
curl --include --request PATCH "http://localhost:4741/change-password" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
```

```sh
OLDPW='hannah' NEWPW='elle' TOKEN='BAhJIiVlZDIwZTMzMzQzODg5NTBmYjZlNjRlZDZlNzYxYzU2ZAY6BkVG--7e7f77f974edcf5e4887b56918f34cd9fe293b9f' sh scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out

Request:

```sh
curl http://localhost:4741/sign-out \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN='BAhJIiVlZDIwZTMzMzQzODg5NTBmYjZlNjRlZDZlNzYxYzU2ZAY6BkVG--7e7f77f974edcf5e4887b56918f34cd9fe293b9f' sh scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

### Users

| Verb | URI Pattern | Controller#Action |
|------|-------------|-------------------|
| GET  | `/users`    | `users#index`     |
| GET  | `/users/1`  | `users#show`      |

#### GET /users

Request:

```sh
curl http://localhost:4741/users \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN=BAhJIiVlZDIwZTMzMzQzODg5NTBmYjZlNjRlZDZlNzYxYzU2ZAY6BkVG--7e7f77f974edcf5e4887b56918f34cd9fe293b9f scripts/users.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "users": [
    {
      "id": 2,
      "email": "bob@ava.com"
    },
    {
      "id": 1,
      "email": "ava@bob.com"
    }
  ]
}
```

#### GET /users/:id

Request:

```sh
curl --include --request GET http://localhost:4741/users/$ID \
  --header "Authorization: Token token=$TOKEN"
```

```sh
ID=2 TOKEN=BAhJIiVlZDIwZTMzMzQzODg5NTBmYjZlNjRlZDZlNzYxYzU2ZAY6BkVG--7e7f77f974edcf5e4887b56918f34cd9fe293b9f scripts/user.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 2,
    "email": "bob@ava.com"
  }
}
```

### Reset Database without dropping

This is not a task developers should run often, but it is sometimes necessary.

**locally**

```sh
bin/rails db:migrate VERSION=0
bin/rails db:migrate db:seed db:examples
```

**heroku**

```sh
heroku run rails db:migrate VERSION=0
heroku run rails db:migrate db:seed db:examples
```

## Additional Resources
- [rails-heroku-setup-guide](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide)
- http://guides.rubyonrails.org/api_app.html
- https://blog.codeship.com/building-a-json-api-with-rails-5/

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
