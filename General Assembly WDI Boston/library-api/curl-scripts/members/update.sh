#!/bin/bash

API="http://localhost:4741"
URL_PATH="/members"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "member": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "books_read": "'"${READ}"'",
      "member_since":  "'"${MEMBER}"'"
    }
  }'

echo
