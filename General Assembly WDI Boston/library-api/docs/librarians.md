# Librarians

| HTTP Method   | URL Path          | Action           | CRUD     |
|:--------------|:------------------|:-----------------|----------|
| GET           | /librarians       | index or list    | `R`ead   |
| GET           | /librarians/`:id` | show or retrieve | `R`ead   |
| POST          | /librarians       | create           | `C`reate |
| PATCH         | /librarians/`:id` | update           | `U`pdate |
| DELETE        | /librarians/`:id` | destroy          | `D`elete |

### GET /librarians

Example Curl Request:

```sh
#!/bin/bash

API="https://library-express-api.herokuapp.com"
URL_PATH="/librarians"

curl  "${API}${URL_PATH}"\
  --include \
  --request GET \

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

{
  "librarians": [
    {
      "_id": "5e8cca38144491a81bab1e60",
      "first_name": "Samuel",
      "last_name": "Kim",
      "favorite_book": "The Cat Eat",
      "born_on": "1945-12-06T00:00:00.000Z",
      "createdAt": "2020-04-07T18:45:12.854Z",
      "updatedAt": "2020-04-07T18:45:12.854Z",
      "__v": 0
    }
  ]
}
```

---

### GET /librarians/:id

Example Curl Request:

```sh
#!/bin/bash

API="https://library-express-api.herokuapp.com"
URL_PATH="/librarians"

curl  "${API}${URL_PATH}/${ID}"\
  --include \
  --request GET \

echo
```

Example Terminal Command:

```sh
ID=5e8cca38144491a81bab1e60 sh curl-scripts/librarians/show.sh
```

Example API Response:

```md
$ ID=5e8cca38144491a81bab1e60 sh curl-scripts/librarians/show.sh
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 241
ETag: W/"f1-0h2rIkOkqTH7QYGCe2tW3jMmDJA"
Date: Tue, 07 Apr 2020 18:47:19 GMT
Connection: keep-alive

{
  "librarian": {
    "_id": "5e8cca38144491a81bab1e60",
    "first_name": "Samuel",
    "last_name": "Kim",
    "favorite_book": "The Cat Eat",
    "born_on": "1945-12-06T00:00:00.000Z",
    "createdAt": "2020-04-07T18:45:12.854Z",
    "updatedAt": "2020-04-07T18:45:12.854Z",
    "__v": 0
  }
}
```

---

### POST /librarians

Example Curl Request:

```sh
#!/bin/bash

API="https://library-express-api.herokuapp.com"
URL_PATH="/librarians"

curl "${API}${URL_PATH}" \
--include \
--request POST \
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
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 241
ETag: W/"f1-0h2rIkOkqTH7QYGCe2tW3jMmDJA"
Date: Tue, 07 Apr 2020 18:45:12 GMT
Connection: keep-alive

{
  "librarian": {
    "_id": "5e8cca38144491a81bab1e60",
    "first_name": "Samuel",
    "last_name": "Kim",
    "favorite_book": "The Cat Eat",
    "born_on": "1945-12-06T00:00:00.000Z",
    "createdAt": "2020-04-07T18:45:12.854Z",
    "updatedAt": "2020-04-07T18:45:12.854Z",
    "__v": 0
  }
}
```

---

### PATCH /librarians/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request PATCH "https://library-express-api.herokuapp.com/librarians/${ID}" \
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
ID=5e8cca38144491a81bab1e60 FIRST="Samuel" LAST="Kim" FAV="The Cat Eat My Gymsuit" BORN="1985-12-06" sh curl-scripts/librarians/update.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 252
ETag: W/"fc-7wIGh3232yb0/CtxLdnJnwb79kM"
Date: Tue, 07 Apr 2020 18:59:49 GMT
Connection: keep-alive
```

---

### DELETE /librarians/:id

Example Curl Request:

```sh
#!/bin/bash

API="https://library-express-api.herokuapp.com"
URL_PATH="/librarians"

curl "${API}${URL_PATH}/${ID}" \
--include \
--request DELETE \

echo

```

Example Terminal Command:

```sh
ID=5e8cca38144491a81bab1e60 sh curl-scripts/librarians/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Tue, 07 Apr 2020 19:03:34 GMT
Connection: keep-alive
```
