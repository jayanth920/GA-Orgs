#!/bin/bash

API="http://localhost:4741"
URL_PATH="/movies"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "movie": {
      "title": "Saving Private Ryan",
      "director": "Steven Spielberg",
      "cover": "https://ia.media-imdb.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg",
      "releaseDate": "1998-01-23",
      "actors": ["Tom Hanks", "Matt Damon"],
      "reviews": ["Great movie!", "It was a very emotional movie", "Fantastic"]
    }
  }'

echo
