#!/bin/bash

API="http://localhost:4741"
URL_PATH="/movies"

curl "${API}${URL_PATH}/${ID}" \
--header "Authorization: Bearer ${TOKEN}" \
--include \
--request DELETE \

echo
