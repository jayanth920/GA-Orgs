# Members

| HTTP Method   | URL Path       | Action           | CRUD     |
|:--------------|:---------------|:-----------------|----------|
| GET           | /members       | index or list    | `R`ead   |
| GET           | /members/`:id` | show or retrieve | `R`ead   |
| POST          | /members       | create           | `C`reate |
| PATCH         | /members/`:id` | update           | `U`pdate |
| DELETE        | /members/`:id` | destroy          | `D`elete |

### GET /members

Example Curl Request:

```sh
#!/bin/bash

API="https://library-express-api.herokuapp.com"
URL_PATH="/members"

curl  "${API}${URL_PATH}"\
  --include \
  --request GET \

echo
```

Example Terminal Command:

```sh
sh curl-scripts/members/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 14
ETag: W/"e-PgkZCwMy/42mZFhvpZhhtiSEhYc"
Date: Tue, 07 Apr 2020 17:51:07 GMT
Connection: keep-alive

{
  "members":[
    {
      "_id":"5e8cc04d144491a81bab1e5e",
      "first_name":"Ethan",
      "last_name":"Salig",
      "books_read":34,
      "member_since":"1990-10-26T00:00:00.000Z",
      "createdAt":"2020-04-07T18:02:53.007Z",
      "updatedAt":"2020-04-07T18:02:53.007Z",
      "__v":0
    }
  ]
}
```

---

### GET /members/:id

Example Curl Request:

```sh
API="https://library-express-api.herokuapp.com"
URL_PATH="/members"

curl  "${API}${URL_PATH}/${ID}"\
  --include \
  --request GET \

echo

```

Example Terminal Command:

```sh
ID=5e8cc04d144491a81bab1e5e sh curl-scripts/members/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 230
ETag: W/"e6-+RgWmzg7EnKK2GeL0QuqyjdSjOo"
Date: Tue, 07 Apr 2020 18:07:34 GMT
Connection: keep-alive


{
  "member": {
    "_id": "5e8cc04d144491a81bab1e5e",
    "first_name": "Ethan",
    "last_name": "Salig",
    "books_read": 34,
    "member_since": "1990-10-26T00:00:00.000Z",
    "createdAt": "2020-04-07T18:02:53.007Z",
    "updatedAt": "2020-04-07T18:02:53.007Z",
    "__v": 0
  }
}
```

---

### POST /members

Example Curl Request:

```sh
#!/bin/bash

curl --include --request POST "https://library-express-api.herokuapp.com/members/" \
  --header "Content-type: application/json" \
  --data '{
    "member": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "books_read": "'"${READ}"'",
      "member_since":  "'"${MEMBER}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
FIRST="Ethan" LAST="Salig" READ=34 MEMBER="1990-10-26" sh curl-scripts/members/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 230
ETag: W/"e6-+RgWmzg7EnKK2GeL0QuqyjdSjOo"
Date: Tue, 07 Apr 2020 18:02:53 GMT
Connection: keep-alive

{
  "member": {
    "_id": "5e8cc04d144491a81bab1e5e",
    "first_name": "Ethan",
    "last_name": "Salig",
    "books_read": 34,
    "member_since": "1990-10-26T00:00:00.000Z",
    "createdAt": "2020-04-07T18:02:53.007Z",
    "updatedAt": "2020-04-07T18:02:53.007Z",
    "__v": 0
  }
}
```

---

### PATCH /members/:id

Example Curl Request:

```sh
#!/bin/bash

API="https://library-express-api.herokuapp.com"
URL_PATH="/members"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "member": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'",
      "books_read": "'"${READ}"'",
      "member_since":  "'"${MEMBER}"'"
    }
  }'

echo

```

Example Terminal Command:

```sh
ID=5e8cc04d144491a81bab1e5e FIRST="Ethan" LAST="Sailing" READ=354 MEMBER="1990-10-26" sh curl-scripts/members/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Tue, 07 Apr 2020 18:26:41 GMT
Connection: keep-alive

```

---

### DELETE /members/:id

Example Curl Request:

```sh
#!/bin/bash

API="https://library-express-api.herokuapp.com"
URL_PATH="/members"

curl "${API}${URL_PATH}/${ID}"\
--include \
--request DELETE \

echo

```

Example Terminal Command:

```sh
ID=5e8cc04d144491a81bab1e5e sh curl-scripts/members/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Tue, 07 Apr 2020 18:31:01 GMT
Connection: keep-alive

```
