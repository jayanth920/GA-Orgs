#!/bin/bash

curl --include --request PATCH "https://ga-library-api.herokuapp.com/books/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${NEW-TITLE}"'",
      "author": "'"${NEW-AUTHOR}"'"
    }
  }'

echo

# Alternatively
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/books/${ID}"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request PATCH \
#   --header "Content-type: application/json" \
#   --data '{
#     "book": {
#       "title": "'"${NEW-TITLE}"'",
#       "author": "'"${NEW-AUTHOR}"'"
#     }
#   }'
#
# echo
