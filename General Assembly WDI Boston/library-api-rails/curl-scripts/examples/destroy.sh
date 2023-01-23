#!/bin/bash

curl --include --request DELETE "https://sei-library-api.herokuapp.com/examples/${ID}" \
  --header "Authorization: Token token=${TOKEN}" \

echo
