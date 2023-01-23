# Authors

| Verb   | URI Pattern  | Controller#Action  |
|:-------|:-------------|:-------------------|
| GET    | `/authors`     | `authors#index`  |
| GET    | `/authors/:id` | `authors#show`   |
| POST   | `/authors`     | `authors#create` |
| PATCH  | `/authors/:id` | `authors#update` |
| DELETE | `/authors/:id` | `authors#destroy`|

### GET /authors

Example Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/authors"

echo
```

Example Terminal Command:

```sh
sh curl-scripts/authors/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"authors":[{"id":1,"first_name":"Sandra","last_name":"Cisneros"},{"id":2,"first_name":"Pablo","last_name":"Neruda"},{"id":3,...}]}
```

**Note:** You will receive more than 3 authors within a successful response.

---

### GET /authors/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/authors/${ID}"

echo
```

Example Terminal Command:

```sh
ID=45 sh curl-scripts/authors/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"author":{"id":45,"first_name":"Paulo","last_name":"Coelho"}}
```

---

### POST /authors

Example Curl Request:

```sh
#!/bin/bash

curl --include --request POST "https://sei-library-api.herokuapp.com/authors/" \
  --header "Content-type: application/json" \
  --data '{
    "author": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
FIRST="Leon" LAST="Noel" sh curl-scripts/authors/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{"author":{"id":300,"first_name":"Leoan","last_name":"Nozel"}}
```

---

### PATCH /authors/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/authors/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "author": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
ID=300 FIRST="Leon" LAST="Noel" sh curl-scripts/authors/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```

---

### DELETE /authors/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request DELETE "https://sei-library-api.herokuapp.com/authors/${ID}"

echo
```

Example Terminal Command:

```sh
ID=169 sh curl-scripts/authors/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```
