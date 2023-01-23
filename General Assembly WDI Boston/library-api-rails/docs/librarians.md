# Librarians

| Verb   | URI Pattern  | Controller#Action        |
|:-------|:-------------|:-------------------------|
| GET    | `/librarians`     | `librarians#index`  |
| GET    | `/librarians/:id` | `librarians#show`   |
| POST   | `/librarians`     | `librarians#create` |
| PATCH  | `/librarians/:id` | `librarians#update` |
| DELETE | `/librarians/:id` | `librarians#destroy`|

### GET /librarians

Example Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/librarians"

echo
```

Example Terminal Command:

```sh
sh curl-scripts/librarians/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"librarians":[{"id":1,"first_name":"Erica","last_name":"Salling", favorite_book:"Wicked", born_on: 1994-08-03},{"id":2,"first_name":"Ines","last_name":"Folta",favorite_book:"Como agua para chocolate", born_on: 1990-10-18},{"id":3,...}]}
```

**Note:** You will receive more than 3 librarians within a successful response.

---

### GET /librarians/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/librarians/${ID}"

echo
```

Example Terminal Command:

```sh
ID=53 sh curl-scripts/librarians/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"librarian":{"id":53,"first_name":"Itzel","last_name":"Peniche", favorite_book:"Loving In The War Years", born_on:2000-02-04}}
```

---

### POST /librarians

Example Curl Request:

```sh
#!/bin/bash

curl --include --request POST "https://sei-library-api.herokuapp.com/librarians/" \
  --header "Content-type: application/json" \
  --data '{
    "librarian": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "favorite_book": "'"${FAV}"'",
      "born_on":  "'"${BORN}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
FIRST="Samuel" LAST="Kim" FAV="The Cat Eat" BORN="1945-12-06" sh curl-scripts/librarians/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{"librarian":{"id":45,"first_name":"Samuel","last_name":"Kim","favorite_book":"The Cat Eat My Gymsuit","born_on":"1985-12-06"}}
```

---

### PATCH /librarians/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/librarians/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "librarian": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "favorite_book": "'"${FAV}"'",
      "born_on":  "'"${BORN}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
ID=45 FIRST="Samuel" LAST="Kim" FAV="The Cat Eat My Gymsuit" BORN="1985-12-06" sh curl-scripts/librarians/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```

---

### DELETE /librarians/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request DELETE "https://sei-library-api.herokuapp.com/librarians/${ID}"

echo
```

Example Terminal Command:

```sh
ID=485 sh curl-scripts/librarians/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```
