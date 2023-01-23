#!/bin/bash

curl --include --request POST "https://sei-library-api.herokuapp.com/authors/" \
  --header "Content-type: application/json" \
  --data '{
    "author": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'"
    }
  }'

echo
