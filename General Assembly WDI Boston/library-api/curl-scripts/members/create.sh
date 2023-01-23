#!/bin/bash

API="http://localhost:4741"
URL_PATH="/members"

curl "${API}${URL_PATH}" \
--include \
--request POST \
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
