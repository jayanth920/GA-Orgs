# Books

| Verb   | URI Pattern  | Controller#Action |
|:-------|:-------------|:------------------|
| GET    | `/books`     | `books#index`     |
| GET    | `/books/:id` | `books#show`      |
| POST   | `/books`     | `books#create`    |
| PATCH  | `/books/:id` | `books#update`    |
| DELETE | `/books/:id` | `books#destroy`   |

### GET /books

Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/books"

echo
```

Example Terminal Command:

```sh
sh curl-scripts/books/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"books": [{"id":1,"title":"1984","author":"George Orwell"},{"id":2,"title":"A Bend in the River","author":"V.S. Naipaul"},{"id":3,...}]}
```

**Note:** You will receive more than 3 books within a successful response.

---

### GET /books/:id

Curl Request:

```sh
#!/bin/bash

curl --include --request GET "https://sei-library-api.herokuapp.com/books/${ID}"

echo
```

Example Terminal Command:

```sh
ID=45 sh curl-scripts/books/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"book":{"id":45,"title":"Gone with the Wind","author":"Margaret Mitchell"}}
```

---

### POST /books

Curl Request:

```sh
#!/bin/bash

curl --include --request POST "https://sei-library-api.herokuapp.com/books/" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author":  "'"${AUTHOR}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
TITLE="Webster's Dictionary" AUTHOR="Noah Webster" sh curl-scripts/books/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{"book":{"id":169,"title":"Webster's Dictionary","author":"Noah Webster"}}
```

---

### PATCH /books/:id

Curl Request:

```sh
#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/books/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
ID=169 TITLE="Merriam-Webster Dictionary" AUTHOR="Webster & Merriam" sh curl-scripts/books/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```

---

### DELETE /books/:id

Curl Request:

```sh
#!/bin/bash

curl --include --request DELETE "https://sei-library-api.herokuapp.com/books/${ID}"

echo
```

Example Terminal Command:

```sh
ID=169 sh curl-scripts/books/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```
