#!/bin/bash

API="http://localhost:4741"
URL_PATH="/movies"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "movie": {
      "reviews": ["Unreal movie", "Totes my fav"]
    }
  }'

echo
