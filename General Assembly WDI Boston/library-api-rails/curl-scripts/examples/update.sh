#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/examples/${ID}" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
