# Delivery Notes
- per [Issue #4](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-element/issues/4), Avoid oneliner arrow functions and the time and confusion that result

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

- per [Issue #4](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-get-element/issues/4), curl script format
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
