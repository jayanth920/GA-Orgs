# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "https://library-express-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ''

echo
