#!/bin/bash

curl --include --request GET "https://ga-library-api.herokuapp.com/books"

echo

# Alternatively
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/books"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request GET \
#
# echo
