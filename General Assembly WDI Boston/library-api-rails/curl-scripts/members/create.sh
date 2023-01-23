#!/bin/bash

curl --include --request POST "https://sei-library-api.herokuapp.com/members/" \
  --header "Content-type: application/json" \
  --data '{
    "member": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "books_read": "'"${READ}"'",
      "member_since":  "'"${MEMBER}"'"
    }
  }'

echo
