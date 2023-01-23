#!/bin/bash

curl --include --request POST "https://sei-library-api.herokuapp.com/examples/" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
