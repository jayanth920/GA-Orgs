# Delivery Notes

## Assigning numbers for `DELETE` and `PATCH`

- at this point in the sequence, developers should be assigned a range of ids of books that they can modify. This ensures that no two people are trying to delete / update the same records

There are currently `168` books in the db
- assign range by dividing `168/<number_of_devs>`

## Heroku
[Deployed API URL](https://wdi-library-api.herokuapp.com)
- the database will need to be reset and repopulated with examples after each iteration. To do this, run

  1. `heroku pg:reset DATABASE`
  1. `heroku run rake db:migrate`
  1. `heroku run rake db:examples`

## `function` vs. `() =>` syntax
- per [Issue #9](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-delete/issues/9), Avoid oneliner arrow functions and the time and confusion that result

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
- per [Issue #9](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-delete/issues/9), curl script format
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

## Useful links/images

https://git.generalassemb.ly/storage/user/3667/files/2f6c4f8a-9f9d-11e7-8a08-7331706dbc13

https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-collection/issues/38
