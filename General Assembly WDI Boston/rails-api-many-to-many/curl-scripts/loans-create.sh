curl --include --request POST http://localhost:4741/loans \
  --header "Content-Type: application/json" \
  --data '{
    "loan": {
      "borrower_id": "2",
      "book_id": "2",
      "date": "2016-11-22T11:32:00"
    }
  }'
