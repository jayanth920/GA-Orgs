#!/bin/bash

curl --include --request DELETE "https://ga-library-api.herokuapp.com/books/${ID}"

echo

# Alternatively
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/books/{$ID}"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request DELETE \
#
# echo
