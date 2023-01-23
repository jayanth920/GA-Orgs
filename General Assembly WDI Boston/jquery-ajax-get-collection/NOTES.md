# Delivery Notes

## `function` vs. `() =>` syntax
- per [Issue #2](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-collection/issues/2), Avoid oneliner arrow functions and the time and confusion that result

 so replace

  ```javascript
  const signIn = (data) =>
    $.ajax({
      // ...
    })
  ```
  with
  ```javascript
  const signIn = function (data) {
    return $.ajax({
      // ...
    })
  }
  ```
  - Cognitive load, in part. If fat arrows are for anonymous single expression functions (mostly) and keyword functions are for everything else, less to remember.

  - Also, event handlers only get the correct this if you use function (unless you're doing more sophisticated stuff that can make use of lexical binding and only dealing with the event object to reference the DOM). Fat arrow functions keeps the value of `this` to the context where the function is created

## `curl` syntax
- per [Issue #2](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-collection/issues/2), curl script format
```bash
  #!/bin/bash

  API="${API_ORIGIN:-http://localhost:4741}"
  APIPATH="/sign-in"
  curl ${API}${APIPATH} \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'${EMAIL}'",
        "password": "'${PASSWORD}'"
      }
    }'
```

## Whiteboard
- from [Issue #19](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-collection/issues/19)

![HTTP request](https://git.generalassemb.ly/storage/user/3667/files/ad970686-39ac-11e7-81a9-e4b7abd02947)

![Browser Template Steps](https://git.generalassemb.ly/storage/user/3667/files/a949163c-39ac-11e7-98e4-36bb118f04df)

![curl script debugging](https://git.generalassemb.ly/storage/user/3667/files/e4585382-39ac-11e7-99d9-420258f7d404)

## Heroku
[Deployed API URL](https://wdi-library-api.herokuapp.com)
- the database will need to be reset and repopulated with examples after each iteration. To do this, run

  1. `heroku pg:reset DATABASE`
  1. `heroku run rake db:migrate`
  1. `heroku run rake db:examples`

## Helpful whiteboard notes

[Verbs](https://git.generalassemb.ly/storage/user/5693/files/064be7de-9fb9-11e7-8c2a-713f32cf39e7)
[Steps](https://git.generalassemb.ly/storage/user/5693/files/f3c08a48-9fb8-11e7-9ab2-58d744c50e5d)
