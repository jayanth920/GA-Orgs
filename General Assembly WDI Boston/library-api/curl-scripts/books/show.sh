#!/bin/bash

API="http://localhost:4741"
URL_PATH="/books"

curl  "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \

echo
