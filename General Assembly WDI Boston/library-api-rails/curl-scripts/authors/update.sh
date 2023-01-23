#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/authors/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "author": {
      "first_name": "'"${FIRST}"'",
      "last_name": "'"${LAST}"'"
    }
  }'

echo
