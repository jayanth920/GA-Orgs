#!/bin/bash

API="http://localhost:4741"
URL_PATH="/librarians"

curl "${API}${URL_PATH}" \
--include \
--request POST \
  --header "Content-type: application/json" \
  --data '{
    "librarian": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "favorite_book": "'"${FAV}"'",
      "born_on":  "'"${BORN}"'"
    }
  }'

echo
