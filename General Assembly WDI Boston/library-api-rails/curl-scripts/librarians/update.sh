#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/librarians/${ID}" \
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
