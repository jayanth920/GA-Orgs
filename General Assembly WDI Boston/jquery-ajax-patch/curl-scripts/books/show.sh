#!/bin/bash

curl --include --request GET "https://wdi-library-api.herokuapp.com/books/${ID}"

echo

# Alternatively
# API="${API_ORIGIN:-https://wdi-library-api.herokuapp.com}"
# URL_PATH="/books/{$ID}"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request GET
#
# echo
